import { Module } from '@nestjs/common';
import { ReflectionsController } from './reflections.controller';
import { ReflectionsService } from './reflections.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ReflectionEntity } from './entities/reflections.entity';
@Module({
  imports:[TypeOrmModule.forFeature([ReflectionEntity ])],
  controllers: [ReflectionsController],
  providers: [ReflectionsService],
})
export class ReflectionsModule {}
