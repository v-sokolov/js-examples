export type IError = Record<'message' | string, unknown>;

export interface IParsedError<T> extends IError {
  type: T;
  formattedErrorMessage: string;
}

export interface IErrorParser<T> {
  parse(error: IError): IParsedError<T>;
}
