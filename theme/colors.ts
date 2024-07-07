const brandLight = {
  brandLight1: "#FAFBFF",
  brandLight2: "#F5F7FF",
  brandLight3: "#EBEFFF",
  brandLight4: "#E0E7FF",
  brandLight5: "#CDD8FE",
  brandLight6: "#B9C7F8",
  brandLight7: "#97A9F2",
  brandLight8: "#758EF0",
  brandLight9: "#4368F9",
  brandLight10: "#214CF8",
  brandLight11: "#0732DB",
  brandLight12: "#020F4D",
};

const brandDark = {
  brandDark1: "#0F1324",
  brandDark2: "#14172A",
  brandDark3: "#151C3C",
  brandDark4: "#192452",
  brandDark5: "#18255D",
  brandDark6: "#162769",
  brandDark7: "#162B7E",
  brandDark8: "#173097",
  brandDark9: "#4368F9",
  brandDark10: "#5F81FC",
  brandDark11: "#8A9DFF",
  brandDark12: "#EBEFFE",
};

export const colorToRgb = (color:string)=> {
  if (color.startsWith('#')) {
    return hexToRgb(color);
  }
  // If it's already RGB or an invalid format, return as is
  return color;
}

const hexToRgb = (hex:string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r} ${g} ${b}`;
}

const replaceColorName = (obj: Record<string, string>, oldName: string, newName: string) => {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => {
      if (!k.startsWith(oldName)) {
        throw new Error(`changeColorName: ${k} doesn't start with ${oldName}`);
      }
      return [k.replace(oldName, newName), v];
    }),
  ) as any;
};

const processColor = (colors: Record<string, string>) => {
  return Object.fromEntries(
    Object.entries(colors).map(([k, v]) => {
      return [k, colorToRgb(v)];
    }),
  ) as any;
};

const lightColors: Record<string, string> = {
  ...replaceColorName(brandLight,"brandLight","brand"),
};
const darkColors: Record<string, string> = {
  ...replaceColorName(brandDark,"brandDark","brand"),
};

export const theme = {
  light: processColor(lightColors),
  dark: processColor(darkColors),
}