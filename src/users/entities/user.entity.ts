import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class User extends Document {

    @Prop({
        required: true,
        unique: true,
        index: true
    })
    fullname: string;

    @Prop({
        unique: true,
        index: true
    })
    email: string;

    @Prop({
        required: true,
        unique: true,
        index: true
    })
    username: string;

    @Prop({
        required: true,
        unique: true,
        min: 6,
        max: 10
    })
    password: string;

    @Prop({
        default: true})
    isActive: boolean;

    @Prop({
        default: Date.now
    })
    createdAt: Date;

    
}

export const UserSchema = SchemaFactory.createForClass(User);

