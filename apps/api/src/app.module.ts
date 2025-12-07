import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttentionModule } from './attention/attention.module';
import { InsightsModule } from './insights/insights.module';
import { PromisesModule } from './promises/promises.module';
import { ReflectionsModule } from './reflections/reflections.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, PromisesModule, ReflectionsModule, AttentionModule, InsightsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
