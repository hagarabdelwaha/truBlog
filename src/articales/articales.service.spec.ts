import { Test, TestingModule } from '@nestjs/testing';
import { ArticalesService } from './articales.service';

describe('ArticalesService', () => {
  let service: ArticalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticalesService],
    }).compile();

    service = module.get<ArticalesService>(ArticalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
