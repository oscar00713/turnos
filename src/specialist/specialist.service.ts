import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateSpecialistDto } from './dto/create-specialist.dto';
import { UpdateSpecialistDto } from './dto/update-specialist.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Specialist } from './entities/specialist.entity';

@Injectable()
export class SpecialistService {

  constructor(
    @InjectModel(Specialist.name)
    private readonly specialistModel:Model<Specialist>,
  ) {}
  async create(createSpecialistDto: CreateSpecialistDto) {
    try{
      const specialist = await this.specialistModel.create(createSpecialistDto);

      return specialist;
    } catch(error){
      if (error.code === 11000) {
        throw new BadRequestException(`specialist already exists in db ${JSON.stringify(error.keyValue)}`);
      }
      throw new InternalServerErrorException(`Can't create specialist - Check server logs`);
    }
  }

  findAll() {
    return `This action returns all specialist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} specialist`;
  }

  update(id: number, updateSpecialistDto: UpdateSpecialistDto) {
    return `This action updates a #${id} specialist`;
  }

  remove(id: number) {
    return `This action removes a #${id} specialist`;
  }
}
