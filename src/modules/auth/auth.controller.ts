import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { User } from '../users/entities/user.entity';

@Controller('auth')
export class AuthController {
    @Post('register')
    registerUser(@Body()userObj : RegisterAuthDto){
        userObj.email
        userObj.password
        userObj.name

    }
}
