'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { ReactNode, useMemo, useRef } from 'react';
import Image from 'next/image';
import ArrowRight from '@/app/icon/arrow-right.svg';
import ArrowLeft from '@/app/icon/arrow-left.svg';

import * as styles from './slick.css';

type Props = {
  children: ReactNode | ReactNode[];

  isFade?: boolean;
};

export default function Slick({ children, isFade }: Props) {
  const sliderRef = useRef<Slider>(null);

  const settings = useMemo(() => {
    return {
      dots: false,
      infinite: false,
      fade: isFade,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };
  }, [isFade]);

  const onClickNext = () => {
    sliderRef.current?.slickNext();
  };

  const onClickPrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <>
      <Image
        src={ArrowRight}
        alt='arrow'
        width={18}
        height={18}
        className={styles.arrowRight}
        onClick={onClickPrev}
      />
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
      <Image
        src={ArrowLeft}
        alt='arrow'
        width={18}
        height={18}
        className={styles.arrowLeft}
        onClick={onClickNext}
      />
    </>
  );
}
