import type {IServerErrorType, IUnknownErrorType, IValidationErrorType} from "../parsers";

export type IParsersFactoryErrorType = IServerErrorType | IValidationErrorType | IUnknownErrorType;
