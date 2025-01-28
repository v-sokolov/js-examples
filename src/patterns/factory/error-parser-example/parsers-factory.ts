import {ICustomErrorType, IErrorParser} from "./interfaces";
import {ServerErrorParser, UnknownErrorParser, ValidationErrorParser} from "./parsers";

export class ErrorParsersFactory {
  static createParser(type: ICustomErrorType): IErrorParser {
    switch (type) {
      case "server":
        return new ServerErrorParser();
      case "validation":
        return new ValidationErrorParser();
      default:
        return new UnknownErrorParser();
    }
  }
}
