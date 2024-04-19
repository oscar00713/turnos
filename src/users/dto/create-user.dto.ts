import { Exclude } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength, } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    fullname: string;
    
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    username: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
    /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    @Exclude()
    password: string;
}
