import {ErrorParser, ICustomErrorType} from "./interfaces";
import {ServerErrorParser, UnknownErrorParser, ValidationErrorParser} from "./parsers";

export class ErrorParsersFactory {
  static createParser(type: ICustomErrorType): ErrorParser {
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
