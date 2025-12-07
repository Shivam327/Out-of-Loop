import { Test, TestingModule } from '@nestjs/testing';
import { AttentionController } from './attention.controller';
import { AttentionService } from './attention.service';

describe('AttentionController', () => {
  let controller: AttentionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttentionController],
      providers: [AttentionService],
    }).compile();

    controller = module.get<AttentionController>(AttentionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
