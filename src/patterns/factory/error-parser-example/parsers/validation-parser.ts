import {ErrorParser, ICustomErrorType} from "../interfaces";

export interface IValidationError {
  type: ICustomErrorType;
  message: string;
  fieldName: string;
  fieldMessage: string;
}

export class ValidationErrorParser implements ErrorParser {
  parse(error: IValidationError): string {
    return `Validation Error: ${error.fieldName} - ${error.fieldMessage}`;
  }
}
