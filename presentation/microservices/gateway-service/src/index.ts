import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware CORS pour permettre les requêtes provenant du frontend
app.use(cors({
  origin: 'http://localhost:4200', // Autorise les requêtes du frontend
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
}));

// Middleware pour rediriger les requêtes vers les différents microservices
app.use('/battery', createProxyMiddleware({
  target: process.env.BATTERY_SERVICE_URL,
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*'; // Permet les requêtes cross-origin
  }
}));

app.use('/batteries', createProxyMiddleware({
  target: process.env.BATTERY_SERVICE_URL,
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

app.use('/car', createProxyMiddleware({
  target: process.env.CAR_SERVICE_URL,
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));


app.use('/car/configure', createProxyMiddleware({
  target: process.env.CAR_SERVICE_URL,
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

app.use('/cars', createProxyMiddleware({
  target: process.env.CAR_SERVICE_URL,
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

app.use('/color', createProxyMiddleware({
  target: process.env.COLOR_SERVICE_URL,
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

app.use('/colors', createProxyMiddleware({
  target: process.env.COLOR_SERVICE_URL,
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

app.use('/finish', createProxyMiddleware({
  target: process.env.FINISH_SERVICE_URL,
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

app.use('/finishes', createProxyMiddleware({
  target: process.env.FINISH_SERVICE_URL,
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

app.use('/model', createProxyMiddleware({
  target: process.env.MODEL_SERVICE_URL,
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

app.use('/models', createProxyMiddleware({
  target: process.env.MODEL_SERVICE_URL,
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

app.use('/images', createProxyMiddleware({
  target: process.env.MODEL_SERVICE_URL, // ou l'URL correcte du service model
  changeOrigin: true,
  onProxyRes: function (proxyRes) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));


// Serveur pour l'API Gateway
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Gateway service running on port ${PORT}`);
});
