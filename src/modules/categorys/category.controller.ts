/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import { UpCategoryDto } from './dto/category-update.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/:id')
  getCategoryById(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.getCategory(id);
  }

  @Get()
  getCategory() {
    return this.categoryService.getCategorys();
  }

  @Post()
  postCategory(@Body() data: CategoryDto) {
    console.log(data);
    this.categoryService.createCategory(data);
    return 'Saved with success';
  }

  @Patch('/:id')
  updateCategory(
    @Param('id') id: number,
    @Body() updateCategory: UpCategoryDto,
  ) {
    return this.categoryService.updateCategory((id), updateCategory);
  }

  @Delete('/:id')
  deleteEvent(@Param('id') id: number) {
    return this.categoryService.deleteCategory((id));
  }
}
