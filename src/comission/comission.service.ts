import { Injectable } from '@nestjs/common';
import { CreateComissionDto } from './dto/create-comission.dto';
import { UpdateComissionDto } from './dto/update-comission.dto';

@Injectable()
export class ComissionService {
  create(createComissionDto: CreateComissionDto) {
    return 'This action adds a new comission';
  }

  findAll() {
    return `This action returns all comission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comission`;
  }

  update(id: number, updateComissionDto: UpdateComissionDto) {
    return `This action updates a #${id} comission`;
  }

  remove(id: number) {
    return `This action removes a #${id} comission`;
  }
}
