import {ICustomErrorType, IErrorParser} from "../interfaces";

export interface IServerError {
  type: ICustomErrorType;
  message: string;
  code: number;
  details: string[];
}

export class ServerErrorParser implements IErrorParser {
  parse(error: IServerError): string {
    return `Server Error: ${error.code} - ${error.details.join(', ') ?? 'unknown'}`;
  }
}
