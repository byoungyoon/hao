'use client';

import { useMyScrap } from '@/app/(beforeLogin)/my/[text]/scrap/_state/useMyScrap';
import CustomItem from '@/app/(beforeLogin)/my/[text]/scrap/_component/CustomItem';
import { vars } from '@/app/theme.css';
import { useMemo } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const COLORS = [
  vars.color.red['100'],
  vars.color.blue['100'],
  vars.color.purple['100'],
  vars.color.red['100'],
  vars.color.red['100'],
  vars.color.purple['100'],
  vars.color.blue['100'],
  vars.color.red['100'],
];

const LAYOUTS = [
  {
    width: 45,
    height: 28,
  },
  {
    width: 46,
    height: 22,
  },
  {
    width: 32,
    height: 32,
  },
  {
    width: 30,
    height: 30,
  },
  {
    width: 34,
    height: 30,
  },
  {
    width: 39,
    height: 23,
  },
  {
    width: 30,
    height: 30,
  },
  {
    width: 23,
    height: 28,
  },
];

export default function CustomItemGroup() {
  const router = useRouter();
  const pathname = usePathname();

  const { localData } = useMyScrap();

  const scrapData = useMemo(
    () =>
      localData.map((datum, index) => {
        return {
          color: COLORS[index % COLORS.length],
          title: datum.name,
          count: datum.count,
          icon: (
            <Image
              src={`data:image/svg+xml;base64,${datum.image}`}
              alt='scrap'
              width={LAYOUTS[index % LAYOUTS.length].width}
              height={LAYOUTS[index % LAYOUTS.length].height}
            />
          ),
        };
      }),
    [localData],
  );

  const onClickItem = (category: string) => () => {
    router.push(`${pathname}/${category}`);
  };

  return (
    <>
      {scrapData.map((datum) => (
        <CustomItem
          key={datum.title}
          onClick={onClickItem(datum.title)}
          {...datum}
        />
      ))}
    </>
  );
}
