import {ICustomErrorType} from "../parsers-factory";
import {IErrorParser, IParsedError} from "../example/interfaces";

export interface IValidationError {
  type: ICustomErrorType;
  message: string;
  fieldName: string;
  fieldMessage: string;
}

export class ValidationErrorParser implements IErrorParser {
  parse(error: IValidationError): IParsedError {
    return {
      ...error,
      type: 'validation',
      formattedErrorMessage: `Validation Error: ${error.fieldName} - ${error.fieldMessage}`
    };
  }
}
