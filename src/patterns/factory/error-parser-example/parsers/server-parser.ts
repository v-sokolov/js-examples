import {ICustomErrorType} from "../parsers-factory";
import {IErrorParser, IParsedError} from "../example/interfaces";

export interface IServerError {
  type: ICustomErrorType;
  message: string;
  code: number;
  details: string[];
}

export class ServerErrorParser implements IErrorParser {
  parse(error: IServerError): IParsedError {
    return {
      ...error,
      type: 'server',
      formattedErrorMessage: `Server Error: ${error.code} - ${error.details.join(', ') ?? 'unknown'}`
    };
  }
}
