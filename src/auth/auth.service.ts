import { Injectable } from '@nestjs/common';
import { AuthCredential } from './authCredential';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ){}

    async getAllUsers(): Promise<User[]>{
        return await this.userRepository.getAllUsers();
    }

    async signUp(user: AuthCredential): Promise<void> {
        return await this.userRepository.signUp(user);
    }

    async signIn(user: AuthCredential): Promise<User> {
        return await this.userRepository.signIn(user);
    }
}
