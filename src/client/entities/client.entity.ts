
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({
    timestamps: true})
export class Client extends Document {

    @Prop({
       required: true
    })
    first_name: string;

    @Prop({
       required: true
    })
    last_name: string;

    @Prop({
        required: true,
        unique: true
    })
    email: string;

    @Prop({
        type: Date,
        default: () => new Date()
        
    })
     birhday: Date;

    @Prop({
      default: 0
    })
     phone: string;

     @Prop({
        type: Number,
        default: 0
     })
      total_appointments: number;
     @Prop({
        type: Number,
        default: 0
     })
      total_invoices: number;

     @Prop({
        type: Number,
        default: 0
     })
      total_spent: number;

     @Prop({
        type: Number,
        default: 0
     })
      total_pending_money: number;

     @Prop({
        type: Boolean,
        default: false
     })
     notifications_by_email: boolean; 
     
     @Prop({
        type: Boolean,
        default: false
     })
     notifications_by_whatsapp: boolean;

     @Prop({
        type: Boolean,
        default: false
     })
     banned: boolean;
}

export const ClientSchema = SchemaFactory.createForClass(Client);