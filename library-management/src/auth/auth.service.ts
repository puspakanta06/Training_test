import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService, private jwtService: JwtService) { }

    async register(name: string,email:string, password: string,isAdmin:boolean) {
        const existingUser = await this.usersService.findOne(email);
        if (existingUser) {
            return { message: 'User already exists' };
        }
        const hashedPassword = await bcrypt.hash(password, 10); 
        await this.usersService.create(name,email, hashedPassword,isAdmin); 
        return { message: 'User registered successfully' };
    }

    async login(email: string, password: string) {
        const user = await this.usersService.findOne(email);
        if (!user) {
            return { message: 'Invalid credentials' };        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            const payload = { email: user.email, sub: user.id,isAdmin: user.isAdmin  };            
            const access_token = this.jwtService.sign(payload);
            return {
                message: 'Login successful',
                access_token,
            };
        }
        return { message: 'Invalid credentials' };
    }

   
}

