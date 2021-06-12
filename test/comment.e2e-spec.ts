import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CommentsController } from '../src/comments/comments.controller';
import { CommentsService } from '../src/comments/comments.service';
import { CreateCommentDto } from '../src/comments/dto/create-comment.dto';

describe('CommentsController (e2e)', () => {
    let app: INestApplication;
    const comment = { comment: "comment test", user: 1, article: 1 };
    const mockCommentService = {
        create: jest.fn((commentData: CreateCommentDto) => commentData),
    };

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CommentsController],
            providers: [{
                provide: CommentsService,
                useValue: mockCommentService
            }],
        }).compile();

        app = module.createNestApplication();
        await app.init();
    });

    it('(POST) /comments', () => {
        return request(app.getHttpServer())
            .post('/comments')
            .send(comment)
            .expect(201)
    });


    afterAll(async () => {
        await app.close();
    });
});
