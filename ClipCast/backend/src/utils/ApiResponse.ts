export class ApiResponse {
  constructor(
    public statusCode: number,
    public data: string,
    public message: string = "Success",
    public success: boolean = statusCode < 400
  ) {}
}
