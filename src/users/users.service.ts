import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }


  async create(createUserDto: CreateUserDto) {
    const isExist = await this.usersRepository.findOne({ name: createUserDto.name });
    if (isExist) return "user name already exist";
    await this.usersRepository.insert(createUserDto);
    return;
  }

  findAll() {
    return this.usersRepository.find({});
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ id });
  }

}
