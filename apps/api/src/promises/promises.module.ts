import { Module } from '@nestjs/common';
import { PromisesService } from './promises.service';
import { PromisesController } from './promises.controller';

@Module({
  controllers: [PromisesController],
  providers: [PromisesService],
})
export class PromisesModule {}
