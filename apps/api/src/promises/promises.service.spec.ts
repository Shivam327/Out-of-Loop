import { Test, TestingModule } from '@nestjs/testing';
import { PromisesService } from './promises.service';

describe('PromisesService', () => {
  let service: PromisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromisesService],
    }).compile();

    service = module.get<PromisesService>(PromisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
