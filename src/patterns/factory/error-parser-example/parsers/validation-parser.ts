import {IError, IErrorParser, IParsedError} from "../example/interfaces";

export type IValidationErrorType = 'validation';

interface IValidationError extends IError {
  type: IValidationErrorType;
  message: string;
  fieldName: string;
  fieldMessage: string;
}

export class ValidationErrorParser implements IErrorParser<IValidationErrorType> {
  parse(error: IValidationError): IParsedError<IValidationErrorType> {
    return {
      ...error,
      type: 'validation',
      formattedErrorMessage: `Validation Error: ${error.fieldName} - ${error.fieldMessage}`
    };
  }
}
