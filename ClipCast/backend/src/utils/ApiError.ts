export class ApiError extends Error {
  success: boolean;

  constructor(
    public statusCode: number,
    message: string = "Something went wrong",
    public errors: any[] = [],
    stack?: string,
    public data: any = null
  ) {
    super(message);
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
