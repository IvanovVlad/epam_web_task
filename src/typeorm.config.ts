import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const TypeOrmConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgre',
    database: 'ewt',
    entities: [__dirname + '/./**/*.entity.{js,ts}'],
    synchronize: true
}