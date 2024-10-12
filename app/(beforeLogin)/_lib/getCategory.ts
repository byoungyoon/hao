import { QueryFunction } from '@tanstack/react-query';
import { GET } from '@/app/sevice/service';

export type CategoryResponseTypes = {
  name: string;
  image: string;
};

export const getCategory: QueryFunction<
  CategoryResponseTypes[],
  [_1: string]
> = async () => {
  return await GET<CategoryResponseTypes[]>({
    url: '/api/category/list',
  });
};
