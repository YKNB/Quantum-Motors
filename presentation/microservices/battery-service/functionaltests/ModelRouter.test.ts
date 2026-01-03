import request from 'supertest';
import { createApp } from '../src/index';

describe('Endpoints', () => {
  let app;
  let modelIdToDelete;

  beforeAll(async () => {
    app = await createApp(); // Obtenez une instance de l'application Express
  });

  beforeEach(async () => {
    // Créez un modèle avant chaque test et enregistrez son ID
    const createModelResponse = await request(app)
      .post('/model')
      .set('Authorization', 'P@ssw0rd!')
      .send({
        name: 'TestModel',
        description: 'Test description',
        price: 1000,
        type: 'sedan',
      });

    modelIdToDelete = createModelResponse.body.id;
  });

  afterEach(async () => {
    // Supprimez le modèle créé après chaque test
    await request(app)
      .delete(`/model/${modelIdToDelete}`)
      .set('Authorization', 'P@ssw0rd!');
  })

  it('should create a model', async () => {
    const response = await request(app)
      .post('/model')
      .set('Authorization', 'P@ssw0rd!')
      .send({
        name: 'Model1',
        description: 'This is a model',
        price: 1000,
        type: 'sedan',
      });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Model1');
  });

  it('should list models', async () => {
    const response = await request(app)
      .get('/models')

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should get one model by id', async () => {
    const response = await request(app)
      .get('/model/1')

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should update one model by id', async () => {
    const response = await request(app)
      .put(`/model/${modelIdToDelete}`)
      .set('Authorization', 'P@ssw0rd!')
      .send({
        name: 'UpdatedModel',
        description: 'Updated description',
        price: 1500,
        type: 'hatch',
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('UpdatedModel');
  });

  it('should delete one model by id', async () => {
    const response = await request(app)
      .delete(`/model/${modelIdToDelete}`)
      .set('Authorization', 'P@ssw0rd!')

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Model deleted');
  });
});
