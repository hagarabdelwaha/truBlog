import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ArticlesController } from '../src/articles/articles.controller';
import { ArticlesService } from '../src/articles/articles.service';
import { CreateArticleDto } from '../src/articles/dto/create-article.dto';
import { UpdateArticleDto } from '../src/articles/dto/update-article.dto';

describe('ArticlesController (e2e)', () => {
    let app: INestApplication;
    const article = { title: "article test", author: 1, body: "content data" };
    const mockArticleService = {
        create: jest.fn((articleData: CreateArticleDto) => articleData),
        findOne: jest.fn((id: number) => article),
        findAll: jest.fn(() => [article]),
        update: jest.fn((id: number, updates: UpdateArticleDto) => 1),
    };

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ArticlesController],
            providers: [
                {
                    provide: ArticlesService,
                    useValue: mockArticleService,
                }],
        }).compile();

        app = module.createNestApplication();
        await app.init();
    });

    it('(GET) /articles', () => {
        return request(app.getHttpServer())
            .get('/articles')
            .expect(200)
            .expect([article]);
    });


    it('(GET) /articles/:id', () => {
        return request(app.getHttpServer())
            .get('/articles/1')
            .expect(200)
            .expect(article);
    });

    it('(POST) /articles', () => {
        return request(app.getHttpServer())
            .post('/articles')
            .send(article)
            .expect(201)
    });


    afterAll(async () => {
        await app.close();
    });
});
