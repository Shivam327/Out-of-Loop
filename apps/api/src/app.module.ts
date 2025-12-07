import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttentionModule } from './attention/attention.module';
import { InsightsModule } from './insights/insights.module';
import { PromisesModule } from './promises/promises.module';
import { ReflectionsModule } from './reflections/reflections.module';
import { UsersModule } from './users/users.module';

import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT || 5432),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      migrations: ["src/migrations/*.{ts,js}"],
      synchronize: true,
      autoLoadEntities: true,
      
    }),
    UsersModule, PromisesModule, ReflectionsModule, AttentionModule, InsightsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
