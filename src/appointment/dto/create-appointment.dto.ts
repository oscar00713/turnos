import { IsDate, IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreateAppointmentDto {
  @IsString()
  clientId: string;

  @IsString()
  specialistId: string;

  @IsString()
  serviceId: string;

  @IsString()
  invoiceId: string;

  @IsInt()
  status: number;

  @IsString()
  description: string;

  @IsPositive()
  @Min(0)
  price: number;

  @IsDate()
  checkin_date: Date;

  @IsDate()
  checkout_date: Date;

  @IsDate()
  lastreminder_date: Date;




}
