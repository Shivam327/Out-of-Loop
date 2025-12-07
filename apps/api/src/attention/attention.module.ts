import { Module } from '@nestjs/common';
import { AttentionService } from './attention.service';
import { AttentionController } from './attention.controller';

@Module({
  controllers: [AttentionController],
  providers: [AttentionService],
})
export class AttentionModule {}
