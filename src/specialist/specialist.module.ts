import { Module } from '@nestjs/common';
import { SpecialistService } from './specialist.service';
import { SpecialistController } from './specialist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Specialist, SpecialistSchema } from './entities/specialist.entity';

@Module({
  controllers: [SpecialistController],
  providers: [SpecialistService],
  imports: [MongooseModule.forFeature([{ name: Specialist.name, schema: SpecialistSchema }]),],
})
export class SpecialistModule {}
