import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmConfig } from './typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesModule } from './articles/articles.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    AuthModule,
    ArticlesModule
  ]
})
export class AppModule {}
