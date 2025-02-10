import {ICustomErrorType} from "../parsers-factory";
import {IErrorParser, IParsedError} from "../example/interfaces";

export interface IUnknownError {
  type?: ICustomErrorType;
  message: string;
}

export class UnknownErrorParser implements IErrorParser {
  parse(error: IUnknownError): IParsedError {
    return {
      ...error,
      type: 'unknown',
      formattedErrorMessage: `An unknown error occurred: ${error.message}`,
    };
  }
}
