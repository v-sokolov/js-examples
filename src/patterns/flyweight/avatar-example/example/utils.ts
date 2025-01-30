import {ALPHABETIC_COLORS_MAP, AlphabetLetter, IAvatar, IBaseContact} from "./";

export const generateKey = (sharedState: IBaseContact): AlphabetLetter => {
  return sharedState.name.charAt(0) as AlphabetLetter;
};

export const generateIntrinsicState = (sharedState: IBaseContact): IAvatar => {
  const key = generateKey(sharedState);

  return ({
    initialLetter: key,
    color: ALPHABETIC_COLORS_MAP.get(key) ?? ALPHABETIC_COLORS_MAP.get('default')!,
  });
};
