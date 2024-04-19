import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { User } from "../entities/user.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {  ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(

        @InjectModel(User.name) 
    private readonly userModel:Model<User>,

      configService:ConfigService
    ) {

        super({
            secretOrKey: configService.get<string>('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }

    async validate(payload: JwtPayload): Promise<User> {

        const {username} = payload;

        const user = await this.userModel.findOne({username});

        if(!user)
        {
            throw new Error('User not found');
        }

        if(!user.isActive)                  
        {   
            throw new Error('User not active');

        }
        return ;

    }


    }