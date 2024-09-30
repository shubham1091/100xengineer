export class ApiResponse<T> {
  public success: boolean;

  /**
   * Creates an instance of ApiResponse.
   * @param statusCode - HTTP status code of the response
   * @param data - Data to be sent in the response
   * @param message - Response message
   */
  constructor(
    public statusCode: number,
    public data: T,
    public message: string = "Success"
  ) {
    this.success = statusCode < 400;
  }
}
