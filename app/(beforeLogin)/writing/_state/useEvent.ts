import { useWritingForm } from '@/app/store/useTranslate';
import { useEffect, useState } from 'react';

const target = '너에게 주는 겨울 선물!';

export const useEvent = () => {
  const { body } = useWritingForm();
  const [isEvent, setIsEvent] = useState(false);

  useEffect(() => {
    if (!body.startsWith(target)) return;

    setIsEvent(true);
  }, [body]);

  return { isEvent };
};
