export class ApiError extends Error {
  public success: boolean;
  public statusCode: number;
  public errors: Array<{ field: string; message: string }>;
  public data: any;
  public Errormessage: string;

  /**
   * Creates an instance of ApiError.
   * @param statusCode - HTTP status code of the error
   * @param message - Error message
   * @param errors - Array of field-specific error messages
   * @param data - Additional data related to the error
   */
  constructor(
    statusCode: number,
    message: string = "Something went wrong",
    errors: Array<{ field: string; message: string }> = [],
    data: any = null
  ) {
    super(message);
    this.name = this.constructor.name; // Set the error name to the class name
    this.success = false;
    this.statusCode = statusCode;
    this.errors = errors;
    this.data = data;

    this.Errormessage = message;
    // Error.captureStackTrace(this, this.constructor);
  }
}
