import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('Authentication System', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('handles a signup request', () => {
    const email = 'test@test.com';

    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email: email, password: 'testpassword' })
      .expect(201)
      .then((res) => {
        const { id, email } = res.body;
        expect(id).toBeDefined();
        expect(email).toEqual(email);
      });
  });

  it('signup as new user then get the currently logged in user', async () => {
    const email = 'test1@test.com';

    const res = await request(app.getHttpServer())
      .post('/auth/signup')
      .send({email, password: 'testpass'})
      .expect(201)

    const cookie = res.get('Set-Cookie');

    if (!cookie) throw new Error('No cookie returned from signup');

    const { body } = await request(app.getHttpServer())
      .get('/auth/whoami')
      .set('Cookie', cookie)
      .expect(200)

    expect(body.email).toEqual(email);
  });

});
