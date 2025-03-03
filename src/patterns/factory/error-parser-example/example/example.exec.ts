import {RANDOM_ERRORS_MOCK} from "./example.mocks";
import {IError, IErrorParser, IParsedError} from "./interfaces";
import {ErrorParsersFactory} from "../parsers-factory";

export function getParsedErrors(): IParsedError<unknown>[] {
  const parsedErrors: IParsedError<unknown>[] = [];

  RANDOM_ERRORS_MOCK.forEach((error: IError) => {
    const parser: IErrorParser<unknown> = ErrorParsersFactory.createParser(error);

    const parsedError: IParsedError<unknown> = parser.parse(error);

    return parsedErrors.push(parsedError);
  });

  return parsedErrors;
}

export function getFormattedTableData() {
  return getParsedErrors().map((parsedError: IParsedError<unknown>) => ({
    'Error Type': parsedError.type,
    'Parsed Error': parsedError.formattedErrorMessage,
  }));
}

console.table(getFormattedTableData(), ['Error Type', 'Parsed Error']);
