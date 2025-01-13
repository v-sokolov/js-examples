export type AlphabetLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' |
  'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

export const ALPHABETIC_COLORS_MAP = new Map<AlphabetLetter | 'default', string>([
  ['A', 'Azure'],
  ['B', 'Beige'],
  ['C', 'Crimson'],
  ['D', 'Denim'],
  ['E', 'Emerald'],
  ['F', 'Fuchsia'],
  ['G', 'Gold'],
  ['H', 'Honeydew'],
  ['I', 'Ivory'],
  ['J', 'Jade'],
  ['K', 'Khaki'],
  ['L', 'Lavender'],
  ['M', 'Magenta'],
  ['N', 'Navy'],
  ['O', 'Olive'],
  ['P', 'Peach'],
  ['Q', 'Quartz'],
  ['R', 'Ruby'],
  ['S', 'Silver'],
  ['T', 'Teal'],
  ['U', 'Umber'],
  ['V', 'Violet'],
  ['W', 'White'],
  ['X', 'Xanthic'],
  ['Y', 'Yellow'],
  ['Z', 'Zaffre'],
  ['default', 'White'],
]);

export const CONTACTS = [
  {name: "Alice", phone: "123-456-7890"},
  {name: "Adam", phone: "987-654-3210"},
  {name: "Brian", phone: "456-789-0123"},
  {name: "Bella", phone: "654-321-0987"},
  {name: "Charlie", phone: "789-012-3456"},
  {name: "Catherine", phone: "321-098-7654"},
  {name: "David", phone: "012-345-6789"},
  {name: "Diana", phone: "678-901-2345"},
  {name: "Ethan", phone: "345-678-9012"},
  {name: "Ella", phone: "234-567-8901"}
] as const;
