import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async create(createUserDto: User): Promise<User> {
    const createdUser = new this.UserModel(createUserDto);
    return createdUser.save();
  }

  async init() {
    for (let i = 1; i < 5; i++) {
      const user = {
        name: 'userName' + i,
        age: 20 + 2 * i,
      };
      const x = new this.UserModel(user);
      await x.save();
    }
    return 'init ok';
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }
}
