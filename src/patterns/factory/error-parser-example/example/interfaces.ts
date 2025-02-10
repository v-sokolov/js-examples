export type IError = Record<'message' | string, unknown>;

export interface IParsedError extends IError {
  type: string;
  formattedErrorMessage: string;
}

export interface IErrorParser {
  parse(error: unknown): IParsedError;
}
