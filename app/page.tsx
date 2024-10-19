import { redirect } from 'next/navigation';

type Props = {
  searchParams: { [key: string]: string | undefined };
};

export default function Home({ searchParams }: Props) {
  const token = searchParams.toekn;

  redirect(`/auth/${token}`);
}
