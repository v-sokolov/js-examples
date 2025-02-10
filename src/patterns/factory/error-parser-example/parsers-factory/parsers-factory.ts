import {ICustomErrorType} from "./interfaces";
import {ServerErrorParser, UnknownErrorParser, ValidationErrorParser} from "../parsers";
import {IErrorParser} from "../example/interfaces";

function getErrorType(error: unknown): ICustomErrorType {
  let errorType: ICustomErrorType = 'unknown';

  if (error && typeof error === 'object') {
    if ('code' in error && 'details' in error) {
      errorType = 'server';
    }

    if ('fieldName' in error && 'fieldMessage' in error) {
      errorType = 'validation';
    }
  }

  return errorType;
}

export class ErrorParsersFactory {
  static createParser(error: unknown): IErrorParser {
    const errorType: ICustomErrorType = getErrorType(error);

    switch (errorType) {
      case "server":
        return new ServerErrorParser();
      case "validation":
        return new ValidationErrorParser();
      case "unknown":
      default:
        return new UnknownErrorParser();
    }
  }
}
