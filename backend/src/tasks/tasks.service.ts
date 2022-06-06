import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerService } from 'src/customer/customer.service';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>, private readonly customerService: CustomerService) {}

  async create(createTaskDto: CreateTaskDto, user: Partial<User>) {
    const customer = await this.customerService.findOne(createTaskDto.customerId, user);
    const task = this.repo.create(createTaskDto);
    task.customer = customer;
    return this.repo.save(task);
  }

  findAll() {
    return this.repo.find({ relations: ['customer'] });
  }

  async findOne(id: number) {
    const task = await this.repo.findOne({ where: { id }, relations: ['customer'] });
    if (!task) {
      throw new NotFoundException('task not found');
    }
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.repo.findOne({ where: { id }, relations: ['customer'] });
    if (!task) {
      throw new NotFoundException('task not found');
    }
    Object.assign(task, updateTaskDto);
    return this.repo.save(task);
  }

  async remove(id: number) {
    const task = await this.repo.findOne(id);
    if (!task) {
      throw new NotFoundException('task not found');
    }
    const removedTask = await this.repo.remove(task);
    return { ...removedTask, id };
  }
}
