import { getCategory } from '@/app/(beforeLogin)/_lib/getCategory';
import { getToday } from '@/app/(beforeLogin)/_lib/getToday';
import { getUser } from '@/app/(beforeLogin)/_lib/getUser';
import { getPoint } from '@/app/(afterLogin)/point/_lib/getPoint';

export const categoryKey = {
  queryKey: ['category'] as [_1: string],
  queryFn: getCategory,
  staleTime: 1000 * 60 * 60 * 24,
  gcTime: 1000 * 60 * 60 * 24 * 2,
};

export const todayKey = {
  queryKey: ['today'] as [_1: string],
  queryFn: getToday,
  staleTime: 1000 * 60 * 60 * 24,
  gcTime: 1000 * 60 * 60 * 24 * 2,
};

export const userKey = {
  queryKey: ['user'] as [_1: string],
  queryFn: getUser,
  staleTime: 1000 * 60 * 60 * 24,
  gcTime: 1000 * 60 * 60 * 24 * 2,
};

export const pointKey = {
  queryKey: ['point'] as [_1: string],
  queryFn: getPoint,
  staleTime: 1000 * 60 * 60 * 24,
  gcTime: 1000 * 60 * 60 * 24 * 2,
};
