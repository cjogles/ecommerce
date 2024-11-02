import dotenv from "dotenv";

dotenv.config();

interface Config {
  PORT: string;
}

const getEnvVar = (key: string) => {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is undefined.`);
  }
  return value;
};

const config: Config = {
  PORT: getEnvVar("PORT"),
};

export default config;
