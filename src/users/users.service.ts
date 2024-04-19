import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { LoginUserDto,UpdateUserDto,CreateUserDto  } from './dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { privateDecrypt } from 'crypto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name) 
    private readonly userModel:Model<User>,
    private readonly jwtService:JwtService
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {

      const { password, email, ...userData } = createUserDto;
      const createdUser = await this.userModel.create({
        ...userData,
        email: email.toLowerCase().trim(),
        password: bcrypt.hashSync(password, 10),
      });

      // Eliminar el campo password del objeto _doc
      //delete createdUser._doc.password;
      //delete createdUser.password;

      // Seleccionar campos necesarios y omitir otros datos internos
      const { fullname,  username, _id, createdAt } = createdUser;
      return {
        fullname,
        email,
        username,
        _id,
        createdAt,
        token: this.getJwtToken({username: createdUser.username} ),
      };
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(`User already exists in db ${JSON.stringify(error.keyValue)}`);
      }
    
      console.log(error);
      throw new InternalServerErrorException(`Can't create User - Check server logs ${error}`);
    }

    
  }

  async login(loginUserDto: LoginUserDto) {
    const { username, password } = loginUserDto;
    const user = await this.userModel.findOne({ username });
    if (!user) {
      throw new BadRequestException(`User with username ${username} not found`);
    }
    if (!bcrypt.compareSync(password, user.password)) {
      throw new BadRequestException('Wrong password');
    }
    const { fullname, email, _id, createdAt } = user;

    return {
      fullname,
      email,
      username,
      _id,
      createdAt,  
      token: this.getJwtToken({username: user.username} ),
    };  

  }

  private getJwtToken(payload: JwtPayload) {

   const token = this.jwtService.sign(payload);
   return token;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
