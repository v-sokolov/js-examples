import {IAvatar, IBaseContact} from "./interfaces";
import {ALPHABETIC_COLORS_MAP, AlphabetLetter} from "../flyweight/constants";

export const generateKey = (sharedState: IBaseContact): string => {
  return sharedState.name.charAt(0);
};

export const generateIntrinsicState = (sharedState: IBaseContact): IAvatar => ({
  initialLetter: generateKey(sharedState),
  color: ALPHABETIC_COLORS_MAP.get(generateKey(sharedState) as AlphabetLetter) as string,
});
