import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredential } from "./authCredential";
import { ConflictException, InternalServerErrorException, BadRequestException } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(authCredential: AuthCredential): Promise<void> {
        const { login, password } = authCredential;

        const user = new User();
        user.username = login;
        user.password = password;

        try {
            await user.save();
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async signIn(authCredential: AuthCredential): Promise<User> {
        const { login, password } = authCredential;

        const u = await this.findOne({ where: {username: login }});
        if (!u) {
            throw new BadRequestException('User does not exists');
        } else {
            if (u.password === password) {
                return u;
            } else {
                throw new BadRequestException('Wrong password');
            }
        }
    }

    async getAllUsers(): Promise<User[]> {
        return await this.find();
    }
}