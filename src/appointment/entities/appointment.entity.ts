
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { AppModule } from '../../app.module';


@Schema({
    timestamps: true})
export class Appointment extends Document {

    @Prop({ type: Types.ObjectId, ref: 'Client' }) 
    clientId: Types.ObjectId; 

    @Prop({ type: Types.ObjectId, ref: 'Specialist' }) 
    specialistId: Types.ObjectId; 

    @Prop({ type: Types.ObjectId, ref: 'Service',default: null  }) 
    serviceId: Types.ObjectId; 

    @Prop({ type: Types.ObjectId, ref: 'Invoice',default: null }) 
    invoiceId: Types.ObjectId; 

    @Prop({
        default: 0
    })
    status: number;

    @Prop({
        type: String,
    })
    description: string;

    @Prop({
        type: Types.Decimal128,
        default: 0
        
    })
     price: number;

    @Prop({
        type: Date,
    })
     checkin_date: Date;

     @Prop({
        type: Date,
     })
      checkout_date: Date;

      @Prop({
        type: Date,
      })
       lastreminder_date: Date;  


}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);