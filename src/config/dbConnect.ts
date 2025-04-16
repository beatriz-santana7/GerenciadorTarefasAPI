//mongodb+srv://admin:<db_password>@cluster0.3tpqnja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import mongoose, { Connection } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function conectaNaDatabase(): Promise<Connection> {
  const DB_URI: string | undefined = process.env.DB_CONNECTION_STRING;

  if (!DB_URI) {
    throw new Error("Variável DB_CONNECTION_STRING não definida. Verifique o .env");
  }

  console.log("Tentando conectar ao MongoDB...");

  try {
    await mongoose.connect(DB_URI);
    console.log("Mongoose.connect() resolveu a Promise");
  } catch (error) {
    console.error("Erro ao conectar no MongoDB:", error);
  }

  return mongoose.connection;
}

export default conectaNaDatabase;