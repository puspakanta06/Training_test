import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService,
        private usereService: UserService
    ) { }

    @Post('register')
    async register(@Body() body: CreateUserDto) {
        const { name, email, password, isAdmin = false } = body;
        return this.authService.register(name, email, password, isAdmin);
    }

    @Post('login')
    async login(@Body() loginDto: CreateUserDto) {
        const { email, password } = loginDto;
        return this.authService.login(email, password);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@Request() req) {
        const userId = req.user.userId;
        return this.usereService.findById(userId);
    }

}
