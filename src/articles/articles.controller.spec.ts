import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';


describe('ArticlesController', () => {
  let controller: ArticlesController;
  const article = { title: "article test", author: 1, body: "content data" };
  const mockRepository = {
    create: jest.fn((articleData: CreateArticleDto) => articleData),
    findOne: jest.fn((id: number) => article),
    findAll: jest.fn(() => [article]),
    update: jest.fn((id: number, updates: UpdateArticleDto) => 1),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [
        {
          provide: ArticlesService,
          useValue: mockRepository,
        }],
    }).compile();

    controller = module.get<ArticlesController>(ArticlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return created article data', () => {
    expect(controller.create(article)).toBe(article);
  });

  it('should return array with all articles', () => {
    expect(controller.findAll()).toStrictEqual([article]);
  });

  it('should return specific article data', () => {
    expect(controller.findOne("1")).toBe(article);
  });

  it('should return article likes count', () => {
    expect(controller.update("1", { like: true })).toBe(1);
  });
});
