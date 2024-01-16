import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { CheklistController } from './cheklist/cheklist.controller';
import { CheklistService } from './cheklist/cheklist.service';
import { CheklistModule } from './cheklist/cheklist.module';
import { CheklistitemController } from './cheklistitem/cheklistitem.controller';
import { CheklistitemService } from './cheklistitem/cheklistitem.service';
import { CheklistitemModule } from './cheklistitem/cheklistitem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'temp123',
      database: 'db_developer',
      entities: [User],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    CheklistModule,
    CheklistitemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
