import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  const user = { name: "test user", jobTitle: "writer", id: 1 };
  const mockRepository = {
    create: jest.fn((userData: CreateUserDto) => userData),
    findOne: jest.fn((id: number) => user),
    findAll: jest.fn(() => [user]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockRepository,
        },]
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return created user data', () => {
    expect(controller.create(user)).toBe(user);
  });

  it('should return array with all users', () => {
    expect(controller.findAll()).toStrictEqual([user]);
  });

  it('should return specific user data', () => {
    expect(controller.findOne("1")).toBe(user);
  });
});
