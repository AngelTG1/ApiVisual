import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "54.243.199.128";
export const DB_USER = process.env.DB_USER || "Angel";
export const DB_PASSWORD = process.env.DB_PASSWORD || "1980";
export const DB_DATABASE = process.env.DB_DATABASE || "clothing";
export const DB_PORT = process.env.DB_PORT || 3306;

