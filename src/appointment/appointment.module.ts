import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from './entities/appointment.entity';

@Module({
  controllers: [AppointmentController],
  providers: [AppointmentService],
  imports: [MongooseModule.forFeature([{ name: Appointment.name, schema:AppointmentSchema }]),],
})
export class AppointmentModule {}
