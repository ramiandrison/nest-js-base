import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { LoginDto } from 'src/dto/auth/login.dto';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('login')
export class AuthController {
    constructor(private authService: AuthService){}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post()
    login(@Body() loginDto: LoginDto){
        return this.authService.signIn(loginDto);
    }

    @Get('logout')
    logout(){

    }
}
