import { Injectable, NotFoundException, RequestTimeoutException, UnprocessableEntityException } from '@nestjs/common';
import { IUser, IUserCreate, IUserUpdate } from './interface/IUser';
import { v4 } from 'uuid';

@Injectable()
export class UserService {
    private users: IUser[] = [];

    constructor(){}

    async getUsers() {
        let users: IUser[] | undefined;
        try {
          users = await this.userRepository.find();
        } catch (error) {
         
          throw new RequestTimeoutException('Error at querying the database', {
            description: 'Error trying to get users',
          });
        }
    
        if (!users) {
          throw new NotFoundException('Not found', {
            description: 'Users not found',
          });
        }
        return users;
    }

    async getUser(id:number) {
        let user: IUser | undefined;
        try {
          user = await this.userRepository.findOne({
            where: { id },
            relations: ['tasks'],
          });
        } catch (error) {
          throw new RequestTimeoutException('Error at querying the database', {
            description: 'Error trying to get user',
          });
        }
        if (!user) {
          throw new NotFoundException('Not found', {
            description: 'User not found',
          });
        }
        return user;
    }



    async createUser(user: IUserCreate) {
        try {
            const newUser = this.userRepository.create(user);
            await this.userRepository.save(newUser);
          } catch (error) {
            throw new RequestTimeoutException('Error at saving the database', {
              description: 'Error trying to save user',
            });
          }
    }






    async updateUser(id: String, userUpdate: IUserUpdate) {

        let user: IUser | undefined;
        try {
          user = await this.userRepository.findOneBy({ id });
        } catch (error) {
          throw new RequestTimeoutException('Error at querying the database', {
            description: 'Error trying to get user',
          });
        }
        if (!user) {
          throw new NotFoundException('User not found', {
            description: 'User does not exists in my app',
          });
        }
    
        user.email = userUpdate?.email ?? user.email;
        user.name = userUpdate?.name ?? user.name;
    
        try {
          await this.userRepository.save(user);
        } catch (error) {
          throw new UnprocessableEntityException('Unprocessable error', {
            description: 'Error at updating user',
          });
        }
        return true;
    }






    async deleteUser(id: string) {
        this.users = this.users.filter((user) => {
            if (user.id != id)
                return user;
        });
        return true
    }


}
