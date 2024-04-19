import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Appointment } from './entities/appointment.entity';
import { Model } from 'mongoose';

@Injectable()
export class AppointmentService {

  constructor(
    @InjectModel(Appointment.name)
    private readonly appointmentModel:Model<Appointment>,
    
  ) {}
 
 async create(createAppointmentDto: CreateAppointmentDto) {
  try {

    const appointment= await this.appointmentModel.create(createAppointmentDto);

    return appointment;
    } catch (error) { 
      if (error.code === 11000) {
        throw new BadRequestException(`appointmentModel already exists in db ${JSON.stringify(error.keyValue)}`);
      }
    
      console.log(error);
      throw new InternalServerErrorException(`Can't create appointmentModel - Check server logs`);
    }
  }

  findAll() {
    return `This action returns all appointment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointment`;
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
