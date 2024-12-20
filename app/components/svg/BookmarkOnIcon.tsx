type Props = {
  color?: string;
  borderColor?: string;
};

export default function BookmarkOnIcon({ color, borderColor }: Props) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.3816 2.74146H7.81837C7.25059 2.74146 6.70606 2.96701 6.30458 3.36849C5.9031 3.76997 5.67755 4.31449 5.67755 4.88227V21.2952L12.1 15.5864L18.5225 21.2952V4.88227C18.5225 4.31449 18.2969 3.76997 17.8954 3.36849C17.494 2.96701 16.9494 2.74146 16.3816 2.74146Z'
        fill={color}
        stroke={borderColor}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
