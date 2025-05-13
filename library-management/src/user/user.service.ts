import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) { }

  async create(name: string, email: string, password: string, isAdmin: boolean) {
    const user = this.userRepo.create({ name, email, password, isAdmin });
    return this.userRepo.save(user);
  }
  async findOne(email: string): Promise<User | undefined | null> {
    return this.userRepo.findOne({ where: { email } });
  }
  async findById(id: number): Promise<User | undefined | null> {
    return this.userRepo.findOne({ where: { id } });
  }
}
