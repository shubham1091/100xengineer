declare module "bun" {
  interface Env {
    MONGODB_URI: string;
    PORT: number;
    CORS_ORIGIN: string;
  }
}
