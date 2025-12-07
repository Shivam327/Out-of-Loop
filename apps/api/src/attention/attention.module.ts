import { Module } from '@nestjs/common';
import { AttentionController } from './attention.controller';
import { AttentionService } from './attention.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AttentionSessionEntity } from './entities/attention.entity';
@Module({
  imports:[TypeOrmModule.forFeature([AttentionSessionEntity])],
  controllers: [AttentionController],
  providers: [AttentionService],
})
export class AttentionModule {}
