import request from 'supertest';
import { createApp } from '../src/index';

describe('Endpoints', () => {
  let app;
  let finishId;

  beforeAll(async () => {
    app = await createApp(); // Obtenez une instance de l'application Express
  });

  beforeEach(async () => {
    const finishData = {
        name: 'Model1',
        description: 'This is a model',
        price: 1000,
        models: [1, 2]
    };
    // Créez un finish avant chaque test et enregistrez son ID
    const createModelResponse = await request(app)
      .post('/finish')
      .set('Authorization', 'P@ssw0rd!')
      .send(finishData);

    finishId = createModelResponse.body.id;
  });

  afterEach(async () => {
    // Supprimez le finish créé après chaque test
    await request(app)
      .delete(`/finish/${finishId}`)
      .set('Authorization', 'P@ssw0rd!');
  })

  it('should create a finish', async () => {
    const finishData = {
        name: 'Model1',
        description: 'This is a model',
        price: 1000,
        models: [1, 2]
    };

    const response = await request(app)
      .post('/finish')
      .set('Authorization', 'P@ssw0rd!')
      .send(finishData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });


  it('should list all finishes', async () => {
    const response = await request(app)
      .get('/finishes')
      .set('Authorization', 'P@ssw0rd!');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should get one finish by id', async () => {
    const response = await request(app)
      .get(`/finish/${finishId}`)
      .set('Authorization', 'P@ssw0rd!');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', finishId);
    // Ajoutez d'autres assertions selon vos besoins
  });

  it('should update one finish by id', async () => {
    const updatedFinishData = {
      name: 'Model2',
      description: 'This is a new model',
      price: 2000,
      models: [4,5]
    };

    const response = await request(app)
      .put(`/finish/${finishId}`)
      .set('Authorization', 'P@ssw0rd!')
      .send(updatedFinishData);

    expect(response.status).toBe(200);
  });

  it('should delete one finish by id', async () => {
    const response = await request(app)
      .delete(`/finish/${finishId}`)
      .set('Authorization', 'P@ssw0rd!');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Finish deleted');
    // Ajoutez d'autres assertions selon vos besoins
  });

});
