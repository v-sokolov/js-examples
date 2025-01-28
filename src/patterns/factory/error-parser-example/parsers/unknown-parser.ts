import {IErrorParser} from "../interfaces";

export interface IUnknownError {
  type?: undefined;
  message: string;
}

export class UnknownErrorParser implements IErrorParser {
  parse(error: IUnknownError): string {
    return `An unknown error occurred: ${error.message}`;
  }
}
