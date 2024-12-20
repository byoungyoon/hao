type Props = {
  color?: string;
  borderColor?: string;
};

export default function FeedOnIcon({ color, borderColor }: Props) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M19.0721 7.60309H8.78758C7.59743 7.60309 6.63263 8.56789 6.63263 9.75804V19.0824C6.63263 20.2726 7.59743 21.2374 8.78758 21.2374H15.4948C16.0422 21.2374 16.569 21.0291 16.9684 20.6548L20.5457 17.3021C20.9804 16.8947 21.2271 16.3255 21.2271 15.7298V9.75804C21.2271 8.56789 20.2623 7.60309 19.0721 7.60309Z'
        fill={color}
        stroke={borderColor}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M17.5295 5.22352L17.4216 4.62114C17.2116 3.44966 16.0884 2.65001 14.9127 2.83507L4.61971 4.45531C3.44404 4.64038 2.66116 5.74008 2.87111 6.91156L4.19931 14.3227'
        stroke={borderColor}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M17.5188 16.3333H19.9925L16.4416 19.9078L16.4414 17.4109C16.4413 16.8158 16.9237 16.3333 17.5188 16.3333Z'
        fill='#FF8F39'
        stroke={borderColor}
        strokeWidth='1.61621'
        strokeLinecap='round'
      />
      <path
        d='M9.81494 11.8228H17.2011'
        stroke={borderColor}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M9.81494 15.0552H13.9298'
        stroke={borderColor}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
}
