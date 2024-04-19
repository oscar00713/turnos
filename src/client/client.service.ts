import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ClientService {

  constructor(
    @InjectModel(Client.name) 
    private readonly clientModel: Model<Client>,
  ) {}
  async create(createClientDto: CreateClientDto) {
    try {

      const client = await this.clientModel.create(createClientDto);
  
      return client;
      } catch (error) { 
        if (error.code === 11000) {
          throw new BadRequestException(`Client already exists in db ${JSON.stringify(error.keyValue)}`);
        }
      
        console.log(error);
        throw new InternalServerErrorException(`Can't create Client - Check server logs`);
      }
  }

  findAll() {
    return `This action returns all client`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
