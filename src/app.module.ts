import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmConfig } from './typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    AuthModule
  ]
})
export class AppModule {}
