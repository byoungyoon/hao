import Info from '@/app/icon/info.png';
import Image, { StaticImageData } from 'next/image';

export default function CustomTodayImage() {
  return <Image src={Info as StaticImageData} alt='info' />;
}
