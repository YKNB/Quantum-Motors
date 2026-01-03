import request from 'supertest';
import { createApp } from '../src/index';

describe('Battery Endpoints', () => {
  let app;
  let batteryIdToDelete;

  beforeAll(async () => {
    app = await createApp(); // Obtenez une instance de l'application Express
  });

  beforeEach(async () => {
    // Créez une batterie avant chaque test et enregistrez son ID
    const createBatteryResponse = await request(app)
      .post('/battery')
      .set('Authorization', 'P@ssw0rd!')
      .send({
        name: 'Battery1',
        description: 'This is a battery',
        price: 1000,
        power: 5000,
        capacity: 5000,
        finishes: [4, 5]
      });

    batteryIdToDelete = createBatteryResponse.body.id;
  });

  afterEach(async () => {
    // Supprimez la batterie créée après chaque test
    await request(app)
      .delete(`/battery/${batteryIdToDelete}`)
      .set('Authorization', 'P@ssw0rd!');
  })

  it('should create a battery', async () => {
    const response = await request(app)
      .post('/battery')
      .set('Authorization', 'P@ssw0rd!')
      .send({
        name: 'Battery2',
        description: 'This is a battery',
        price: 1000,
        power: 5000,
        capacity: 5000,
        finishes: [3]
      });

    expect(response.status).toBe(201);
    // Add additional expectations if needed
  });

  it('should list batteries', async () => {
    const response = await request(app)
      .get('/batteries')

    expect(response.status).toBe(200);
    // Add additional expectations if needed
  });

  it('should get one battery by id', async () => {
    const response = await request(app)
      .get(`/battery/${batteryIdToDelete}`)

    expect(response.status).toBe(200);
    // Add additional expectations if needed
  });

  it('should update one battery by id', async () => {
    const response = await request(app)
      .put(`/battery/${batteryIdToDelete}`)
      .set('Authorization', 'P@ssw0rd!')
      .send({
        name: 'Battery2',
        description: 'This is a battery updated',
        price: 1000,
        power: 5000,
        capacity: 6000,
        finishes: [3]
      });

    expect(response.status).toBe(200);
    // Add additional expectations if needed
  });

  it('should delete one battery by id', async () => {
    const response = await request(app)
      .delete(`/battery/${batteryIdToDelete}`)
      .set('Authorization', 'P@ssw0rd!')

    expect(response.status).toBe(200);
    // Add additional expectations if needed
  });
});
