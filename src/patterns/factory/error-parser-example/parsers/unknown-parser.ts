import {IError, IErrorParser, IParsedError} from "../example/interfaces";

export type IUnknownErrorType = 'unknown';

interface IUnknownError extends IError {
  type: IUnknownErrorType;
  message: string;
}

export class UnknownErrorParser implements IErrorParser<IUnknownErrorType> {
  parse(error: IUnknownError): IParsedError<IUnknownErrorType> {
    return {
      ...error,
      type: 'unknown',
      formattedErrorMessage: `An unknown error occurred: ${error.message}`,
    };
  }
}
