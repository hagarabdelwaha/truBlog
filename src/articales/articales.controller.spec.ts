import { Test, TestingModule } from '@nestjs/testing';
import { ArticalesController } from './articales.controller';
import { ArticalesService } from './articales.service';

describe('ArticalesController', () => {
  let controller: ArticalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticalesController],
      providers: [ArticalesService],
    }).compile();

    controller = module.get<ArticalesController>(ArticalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
