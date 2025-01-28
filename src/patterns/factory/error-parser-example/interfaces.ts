import {IServerError, IUnknownError, IValidationError} from "./parsers";

export type ICustomErrorType = 'server' | 'validation' | undefined;

export type IErrorObject = IServerError | IValidationError | IUnknownError;

export interface ErrorParser {
  parse(error: IErrorObject): string;
}
