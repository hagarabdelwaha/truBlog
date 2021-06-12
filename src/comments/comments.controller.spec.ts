import { Test, TestingModule } from '@nestjs/testing';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

describe('CommentsController', () => {
  let controller: CommentsController;
  const comment = { comment: "comment test", user: 1, article: 1 };
  const mockRepository = {
    create: jest.fn((commentData: CreateCommentDto) => commentData),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentsController],
      providers: [{
        provide: CommentsService,
        useValue: mockRepository
      }],
    }).compile();

    controller = module.get<CommentsController>(CommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return created comment ', () => {
    expect(controller.create(comment)).toBe(comment);
  });

});
