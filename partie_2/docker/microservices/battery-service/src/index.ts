import cors from "cors";
import { configDotenv } from "dotenv";
import express from "express";
import { BatteryRouter } from "./Router/BatteryRouter";
import { ServiceRouter } from "./Router/ServiceRouter";

// Créer et configurer l'application Express
const createApp = async () => {
  configDotenv({
    path: `.env${
      process.env.NODE_ENV != "production" ? `.${process.env.NODE_ENV}` : ""
    }`,
    override: true,
  });

  const portAssigned = Number(process.env.PORT) || 3000;
  const hostAssigned = process.env.HOST || "0.0.0.0";
  const app = express();

  app.use("/images", express.static(__dirname + "/../images"));

  const options: cors.CorsOptions = {
    origin: process.env.CORS_ORIGIN,
  };

  // Then pass these options to cors:
  app.use(cors(options));
  app.use(express.json());
  app.use(BatteryRouter.init());
  app.use(ServiceRouter.init());

  return app;
};

// Démarrer le serveur si le fichier est exécuté directement (via yarn start par exemple)
if (require.main === module) {
  const startServer = async (portAssigned: number, hostAssigned: string) => {
    const app = await createApp();
    app.listen(portAssigned, hostAssigned, () => {
      console.log(`🚀 Server ready at http://${hostAssigned}:${portAssigned}`);
    });
  };

  // Obtenez les valeurs de port et d'hôte à partir des variables d'environnement
  const portAssigned = Number(process.env.PORT) || 3000;
  const hostAssigned = process.env.HOST || "0.0.0.0";

  startServer(portAssigned, hostAssigned).catch((err) => {
    console.error("Failed to start server");
    console.error(err);
    process.exit(1);
  });
}

// Exportez la fonction de création de l'application Express
export { createApp };
