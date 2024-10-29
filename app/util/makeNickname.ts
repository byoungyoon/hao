export const makeNickname = (nickname: string) => {
  const lastChar = nickname.charAt(nickname.length - 1);

  const charCode = lastChar.charCodeAt(0);
  if (charCode < 0xac00 || charCode > 0xd7a3) return '는';

  return (charCode - 0xac00) % 28 !== 0 ? '은' : '는';
};
