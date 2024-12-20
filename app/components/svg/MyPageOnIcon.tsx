type Props = {
  color?: string;
  borderColor?: string;
};

export default function MyPageOnIcon({ color, borderColor }: Props) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.1 14.9249C15.2402 14.9249 17.7859 12.3792 17.7859 9.23898C17.7859 6.09876 15.2402 3.5531 12.1 3.5531C8.95978 3.5531 6.41412 6.09876 6.41412 9.23898C6.41412 12.3792 8.95978 14.9249 12.1 14.9249Z'
        fill={color}
        stroke={borderColor}
        strokeWidth='1.42147'
        strokeMiterlimit='10'
      />
      <path
        d='M3.48236 19.9C4.35562 18.3872 5.61175 17.1309 7.12448 16.2574C8.63721 15.3839 10.3532 14.9241 12.1 14.9241C13.8468 14.9241 15.5628 15.3839 17.0756 16.2574C18.5883 17.1309 19.8444 18.3872 20.7177 19.9'
        fill={color}
      />
      <path
        d='M3.48236 19.9C4.35562 18.3872 5.61175 17.1309 7.12448 16.2574C8.63721 15.3839 10.3532 14.9241 12.1 14.9241C13.8468 14.9241 15.5628 15.3839 17.0756 16.2574C18.5883 17.1309 19.8444 18.3872 20.7177 19.9H3.48236Z'
        stroke={borderColor}
        strokeWidth='1.42147'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
