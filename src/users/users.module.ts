import { Inject, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  controllers: [UsersController],
  providers: [UsersService,JwtStrategy],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: (configService: ConfigService) => {
        //console.log(configService.get('JWT_SECRET'));
       //   console.log(process.env.JWT_SECRET);
      
      return { 
        secret: configService.get('JWT_SECRET') || 'SECRET',
        signOptions: {
          expiresIn: '2h',
        }
       }
      }
    })
  
    // JwtModule.register({
    //   secret: process.env.JWT_SECRET || 'SECRET',
    //   signOptions: {
    //     expiresIn: '2h',
    //   },
    // }),
  ],
  exports:[JwtStrategy, PassportModule,JwtModule]
})
export class UsersModule {}
