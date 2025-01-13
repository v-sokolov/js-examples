import {ALPHABETIC_COLORS_MAP, AlphabetLetter, IAvatar, IBaseContact} from "./";

export const generateKey = (sharedState: IBaseContact): string => {
  return sharedState.name.charAt(0);
};

export const generateIntrinsicState = (sharedState: IBaseContact): IAvatar => ({
  initialLetter: generateKey(sharedState),
  color: ALPHABETIC_COLORS_MAP.get(generateKey(sharedState) as AlphabetLetter) as string,
});
