import dotenv from "dotenv";
dotenv.config();

console.log("Mongo URI from .env:", process.env.MONGO_URI);  // Debug line

export const ENV_VARS = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT || 5000,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    TMDB_API_KEY: process.env.TMDB_API_KEY
};