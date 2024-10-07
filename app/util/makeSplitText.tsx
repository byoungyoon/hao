export const makeSplitText = (text: string, len: number) => {
  return text.length > len ? text.slice(0, len) + '...' : text;
};
