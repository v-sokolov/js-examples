import {IError, IErrorParser, IParsedError} from "../example/interfaces";

export type IServerErrorType = 'server';

interface IServerError extends IError {
  type: IServerErrorType;
  message: string;
  code: number;
  details: string[];
}

export class ServerErrorParser implements IErrorParser<IServerErrorType> {
  parse(error: IServerError): IParsedError<IServerErrorType> {
    return {
      ...error,
      type: 'server',
      formattedErrorMessage: `Server Error: ${error.code} - ${error.details.join(', ') ?? 'unknown'}`
    };
  }
}
