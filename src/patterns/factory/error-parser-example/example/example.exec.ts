import {ITableError} from "./interfaces";
import {RANDOM_ERRORS_MOCK} from "./example.mocks";
import {IErrorParser} from "../interfaces";
import {ErrorParsersFactory} from "../parsers-factory";

export function getParsedErrors() {
  const parsedErrors: Array<ITableError> = [];

  RANDOM_ERRORS_MOCK.forEach((error) => {
    const parser: IErrorParser = ErrorParsersFactory.createParser(error.type);

    const parsedError: string = parser.parse(error);

    return parsedErrors.push({'Error Type': error.type ?? '', 'Parsed Error': parsedError});
  });

  return parsedErrors;
}

console.table(getParsedErrors(), ['Error Type', 'Parsed Error']);
