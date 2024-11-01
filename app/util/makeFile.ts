export const makeFile = (base64String: string, filename: string) => {
  const byteCharacters = atob(base64String);
  const byteNumbers = new Uint8Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const blob = new Blob([byteNumbers], { type: 'image/png' });
  return new File([blob], filename, { type: blob.type });
};
