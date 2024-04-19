
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';


@Schema()
export class Specialist extends Document {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true, unique: true })
    email: string;
    @Prop({ required: true })
    phone: string;
    @Prop({ type: Types.Decimal128 })
    salary: number;
    @Prop({ type: JSON })
    horario: any;

}
export const SpecialistSchema = SchemaFactory.createForClass(Specialist);