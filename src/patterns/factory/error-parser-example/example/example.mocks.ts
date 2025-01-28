import {IServerError, IUnknownError, IValidationError} from "../parsers";

export const RANDOM_ERRORS_MOCK: (IServerError | IValidationError | IUnknownError)[] = [
  {
    type: "server",
    message: "Internal Server Error",
    code: 500,
    details: ["Database connection failed", "Timeout while processing request"],
  },
  {
    type: "validation",
    message: "Invalid input",
    fieldName: "email",
    fieldMessage: "Email format is incorrect",
  },
  {
    type: "server",
    message: "Resource not found",
    code: 404,
    details: ["Requested URL does not exist"],
  },
  {
    type: "validation",
    message: "Required field missing",
    fieldName: "password",
    fieldMessage: "Password must not be empty",
  },
  {
    message: "An unexpected error occurred",
  },
  {
    type: "server",
    message: "Unauthorized access",
    code: 401,
    details: ["User token expired", "Access to resource denied"],
  },
  {
    type: "validation",
    message: "Out of range",
    fieldName: "age",
    fieldMessage: "Age must be between 18 and 65",
  },
] as const;
