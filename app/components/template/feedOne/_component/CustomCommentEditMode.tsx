'use client';

import Body from '@/app/components/text/Body';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { putFeedCommentUpdate } from '@/app/components/template/feedOne/_lib/putFeedCommentUpdate';

import * as styles from './customCommentEditMode.css';

type Props = {
  isEditMode?: boolean;
  defaultComment: string;
  id: number;

  onTrackable?: () => void;
};

export default function CustomCommentEditMode({
  isEditMode = false,
  defaultComment,
  id,
  onTrackable,
}: Props) {
  const [localValue, setLocalValue] = useState(defaultComment);

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setLocalValue(event.target.value);
  };

  const { mutate: onAction } = useMutation({
    mutationKey: ['feed', 'comment', id],
    mutationFn: putFeedCommentUpdate,
    onSuccess: () => {
      if (onTrackable) onTrackable();
    },
  });

  const onResult = () => {
    onAction({ id: id, body: localValue });
  };

  useEffect(() => {
    setLocalValue(defaultComment);
  }, [defaultComment]);

  return !isEditMode ? (
    <Body size='6' className={styles.commentText}>
      {defaultComment}
    </Body>
  ) : (
    <div className={styles.inputLayer}>
      <input
        type='text'
        className={styles.input}
        placeholder='수정할 댓글을 입력해줘!'
        value={localValue}
        onChange={onChangeInput}
      />
      <button
        type='button'
        color='orange'
        className={styles.button}
        onClick={onResult}
      >
        수정
      </button>
    </div>
  );
}
