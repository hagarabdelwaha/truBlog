import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UsersService } from '../src/users/users.service';
import { CreateUserDto } from '../src/users/dto/create-user.dto';
import { UsersController } from '../src/users/users.controller';

describe('UsersController (e2e)', () => {
    let app: INestApplication;
    const user = { name: "test user", jobTitle: "writer", id: 1 };
    let mockUsersService = {
        create: jest.fn((userData: CreateUserDto) => userData),
        findOne: jest.fn((id: number) => user),
        findAll: jest.fn(() => [user]),
    };

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [
                {
                    provide: UsersService,
                    useValue: mockUsersService,
                },]
        }).compile();

        app = module.createNestApplication();
        await app.init();
    });

    it('(GET) /users', () => {
        return request(app.getHttpServer())
            .get('/users')
            .expect(200)
            .expect([user]);
    });


    it('(GET) /users/:id', () => {
        return request(app.getHttpServer())
            .get('/users/1')
            .expect(200)
            .expect(user);
    });

    it('(POST) /users', () => {
        return request(app.getHttpServer())
            .post('/users')
            .send(user)
            .expect(201)
    });


    afterAll(async () => {
        await app.close();
    });
});
