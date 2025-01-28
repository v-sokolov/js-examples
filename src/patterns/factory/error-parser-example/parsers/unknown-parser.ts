import {ErrorParser} from "../interfaces";

export interface IUnknownError {
  type?: undefined;
  message: string;
}

export class UnknownErrorParser implements ErrorParser {
  parse(error: IUnknownError): string {
    return `An unknown error occurred: ${error.message}`;
  }
}
