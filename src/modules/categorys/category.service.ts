/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  Injectable,
  NotFoundException,
  RequestTimeoutException,
  UnprocessableEntityException,
} from "@nestjs/common";
import {
  ICategory,
  ICategoryCreate,
  ICategoryUpdate,
} from "./interface/ICategory";
import { v4 } from 'uuid';
import { Repository } from "typeorm";
import { Category } from "./category.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategoryService {
  private categorys: ICategory[] = [];

  constructor(
    @InjectRepository(Category) private readonly categoryRepository: Repository<Category>) {}

  async getCategorys() {
    let categorys: ICategory[] | undefined;
    try {
      categorys = await this.categoryRepository.find();
    } catch (error) {
      throw new RequestTimeoutException('Error at querying the database', {
        description: 'Error trying to get users',
      });
    }

    if (!categorys) {
      throw new NotFoundException('Not found', {
        description: 'Users not found',
      });
    }
    return categorys;
  }

  async getCategory(id: number) {
    let category: ICategory | undefined;
    try {
      category = await this.categoryRepository.findOne({
        where: { id },
        relations: ['tasks'],
      });
    } catch (error) {
      throw new RequestTimeoutException('Error at querying the database', {
        description: 'Error trying to get user',
      });
    }
    if (!category) {
      throw new NotFoundException('Not found', {
        description: 'User not found',
      });
    }
    return category;
  }
  async createCategory(category: ICategoryCreate) {
    try {
      const newUser = this.categoryRepository.create(category);
      await this.categoryRepository.save(newUser);
    } catch (error) {
      throw new RequestTimeoutException('Error at saving the database', {
        description: 'Error trying to save user',
      });
    }
  }

  async updateCategory(id: number, categoryUpdate: ICategoryUpdate) {
    let category: ICategory | undefined;

    try {
      category = await this.categoryRepository.findOneBy({ id });
    } catch (error) {
      throw new RequestTimeoutException('Error at querying the database', {
        description: 'Error trying to get user',
      });
    }
    if (!category) {
      throw new NotFoundException('User not found', {
        description: 'User does not exists in my app',
      });
    }

    category.description = categoryUpdate?.description ?? category.description;
    category.name = categoryUpdate?.name ?? category.name;

    try {
      await this.categoryRepository.save(category);
    } catch (error) {
      throw new UnprocessableEntityException('Unprocessable error', {
        description: 'Error at updating user',
      });
    }
    return true;
  }

  async deleteCategory(id: number) {
    this.categorys = this.categorys.filter((category) => {
      if (category.id != Number(id)) return category;
    });
    return true;
  }
}
