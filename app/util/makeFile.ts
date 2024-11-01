export const makeFile = (base64String: string, filename: string) => {
  const byteCharacters = atob(base64String);
  const byteNumbers = new Uint8Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const blob = new Blob([byteNumbers], { type: 'image/png' });
  return new File([blob], filename, { type: blob.type });
};

export const makeBase64 = async (url: string) => {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  return Buffer.from(buffer).toString('base64');
};
