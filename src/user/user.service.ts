import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateDto } from './dto/createuser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async getUserOne(query: object) {
    return await this.userRepository.findOne(query);
  }
  async createUser(data: CreateDto) {
    return await this.userRepository.save(data);
  }
}
