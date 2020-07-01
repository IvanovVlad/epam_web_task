import { Controller, Get, Req, Body, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredential } from './authCredential';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Get()
    getAllUsers(): Promise<User[]>
    {
        return this.authService.getAllUsers();
    }

    @Post('/signup')
    signUp(@Body(ValidationPipe) ac: AuthCredential): Promise<void> {
        return this.authService.signUp(ac);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) ac: AuthCredential): Promise<User> {
        return this.authService.signIn(ac);
    }
}
