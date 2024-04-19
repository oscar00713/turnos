import { IsBoolean, IsDate, IsEmail, IsNumber, IsOptional, IsString, MinLength } from "class-validator";


export class CreateClientDto {
    @IsString()
    @MinLength(1)
    first_name: string;
  
    @IsString()
    @MinLength(1)
    last_name: string;
  
    @IsEmail()
    @MinLength(1)
    email: string;
  
    @IsDate()
    birhday: Date;
  
    @IsString()
    @IsOptional()
    phone: string;
  
    @IsNumber()
    @IsOptional()
    total_appointments: number;
  
    @IsNumber()
    @IsOptional()
    total_invoices: number;
  
    @IsNumber()
    @IsOptional()
    total_spent: number;
  
    @IsNumber()
    @IsOptional()
    total_pending_money: number;
  
    @IsBoolean()
    @IsOptional()
    notifications_by_email: boolean;
  
    @IsBoolean()
    @IsOptional()
    notifications_by_whatsapp: boolean;
  
    @IsBoolean()
    @IsOptional()
    banned: boolean;
}
