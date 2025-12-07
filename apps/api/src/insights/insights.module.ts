import { Module } from '@nestjs/common';
import { InsightsController } from './insights.controller';
import { InsightsService } from './insights.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { InsightEntity } from './entities/insight.entity';
@Module({
  imports:[TypeOrmModule.forFeature([InsightEntity])],
  controllers: [InsightsController],
  providers: [InsightsService],
})
export class InsightsModule {}
