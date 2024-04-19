import { IsDate, IsEmail, IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreateSpecialistDto {

@IsString()
    name: string;

 @IsEmail()
    email: string;

@IsString()
    phone: string;

@IsPositive()
  salary: number;

@IsDate()
  horario: any;

}
