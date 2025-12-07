import { Test, TestingModule } from '@nestjs/testing';
import { PromisesController } from './promises.controller';
import { PromisesService } from './promises.service';

describe('PromisesController', () => {
  let controller: PromisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromisesController],
      providers: [PromisesService],
    }).compile();

    controller = module.get<PromisesController>(PromisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
