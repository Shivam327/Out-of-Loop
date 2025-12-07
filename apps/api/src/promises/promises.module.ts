import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromiseEntity } from './entities/promise.entity';
import { PromisesController } from './promises.controller';
import { PromisesService } from './promises.service';
@Module({
  imports:[TypeOrmModule.forFeature([PromiseEntity])],
  controllers: [PromisesController],
  providers: [PromisesService],
})
export class PromisesModule {}
