declare module "bun" {
  interface Env {
    MONGODB_URI: string;
    PORT: number;
    CORS_ORIGIN: string;
    ACCESS_TOKEN_SECRET: string;
    REFRESH_TOKEN_SECRET: string;
    ACCESS_TOKEN_EXPIRY: string;
    REFRESH_TOKEN_EXPIRY: string;
  }
}
