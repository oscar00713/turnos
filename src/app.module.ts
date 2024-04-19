import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentModule } from './appointment/appointment.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfig } from './config/env.config';
import { ClientModule } from './client/client.module';
import { SpecialistModule } from './specialist/specialist.module';
import { ComissionModule } from './comission/comission.module';
import { InvoiceModule } from './invoice/invoice.module';




@Module({
  imports: [
    ConfigModule.forRoot(
      {
        load: [EnvConfig],
        isGlobal: true
      }
    ),
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/timeBoard'),
    AppointmentModule,
    ClientModule,
    SpecialistModule,
    ComissionModule,
    InvoiceModule,
  
  ],
})
export class AppModule {}
