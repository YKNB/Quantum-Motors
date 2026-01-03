import request from 'supertest';
import { createApp } from '../src/index';

describe('Car Endpoints', () => {
  let app;
  let carIdToDelete;

  beforeAll(async () => {
    app = await createApp(); // Obtenez une instance de l'application Express
  });

  beforeEach(async () => {
    // Créez une voiture avant chaque test et enregistrez son ID
    const createCarResponse = await request(app)
      .post('/car')
      .set('Authorization', 'P@ssw0rd!')
      .send({
        code: 'ABC',
        model: 2,
        finish: 2,
        battery: 2,
      });

    carIdToDelete = createCarResponse.body.id;
  });

  afterEach(async () => {
    // Supprimez la voiture créée après chaque test
    await request(app)
      .delete(`/car/${carIdToDelete}`)
      .set('Authorization', 'P@ssw0rd!');
  })

  it('should create a car', async () => {
    const response = await request(app)
      .post('/car')
      .set('Authorization', 'P@ssw0rd!')
      .send({
        code: 'ABC',
        model: 2,
        finish: 2,
        battery: 2,
      });

    expect(response.status).toBe(201);
    // Ajoutez d'autres attentes si nécessaire
  });

  it('should list cars', async () => {
    const response = await request(app)
      .get('/cars')

    expect(response.status).toBe(200);
    // Ajoutez d'autres attentes si nécessaire
  });

  it('should get one car by id or code', async () => {
    const response = await request(app)
      .get(`/car/${carIdToDelete}`)
      .set('Authorization', 'P@ssw0rd!')

    expect(response.status).toBe(200);
    // Ajoutez d'autres attentes si nécessaire
  });

  it('should update one car by id', async () => {
    const response = await request(app)
      .put(`/car/${carIdToDelete}`)
      .set('Authorization', 'P@ssw0rd!')
      .send({
        // Fournir des données mises à jour pour la voiture
        // Exemple :
        // year: 2023,
      });

    expect(response.status).toBe(200);
    // Ajoutez d'autres attentes si nécessaire
  });

  it('should delete one car by id', async () => {
    const response = await request(app)
      .delete(`/car/${carIdToDelete}`)
      .set('Authorization', 'P@ssw0rd!')

    expect(response.status).toBe(200);
    // Ajoutez d'autres attentes si nécessaire
  });

  it('should configure a car', async () => {
    const response = await request(app)
      .post(`/car/configure`)
      .send({
        // Fournir des données pour configurer une voiture
      });

    expect(response.status).toBe(200);
    // Ajoutez d'autres attentes si nécessaire
  });
});
