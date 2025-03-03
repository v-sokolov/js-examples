import {IError} from "./interfaces";

export const RANDOM_ERRORS_MOCK: IError[] = [
  {
    message: "Internal Server Error",
    code: 500,
    details: ["Database connection failed", "Timeout while processing request"],
  },
  {
    message: "Invalid input",
    fieldName: "email",
    fieldMessage: "Email format is incorrect",
  },
  {
    message: "Resource not found",
    code: 404,
    details: ["Requested URL does not exist"],
  },
  {
    message: "Required field missing",
    fieldName: "password",
    fieldMessage: "Password must not be empty",
  },
  {
    message: "An unexpected error occurred",
  },
  {
    message: "Unauthorized access",
    code: 401,
    details: ["User token expired", "Access to resource denied"],
  },
  {
    message: "Out of range",
    fieldName: "age",
    fieldMessage: "Age must be between 18 and 65",
  },
] as const;
