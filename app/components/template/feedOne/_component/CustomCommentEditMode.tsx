'use client';

import Body from '@/app/components/text/Body';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putFeedCommentUpdate } from '@/app/components/template/feedOne/_lib/putFeedCommentUpdate';
import TextareaAutosize from 'react-textarea-autosize';
import VibratingText from '@/app/components/text/VibratingText';

import * as styles from './customCommentEditMode.css';

const LIMIT_TEXT = 100;

type Props = {
  isEditMode?: boolean;
  defaultComment: string;
  id: number;
  feedId: number;
  onTrackable?: (value: string) => void;
};

export default function CustomCommentEditMode({
  isEditMode = false,
  defaultComment,
  id,
  feedId,
  onTrackable,
}: Props) {
  const queryClient = useQueryClient();

  const [localValue, setLocalValue] = useState(defaultComment);
  const [updateKey, setUpdateKey] = useState(0);

  const onChangeInput: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.target.value.length > LIMIT_TEXT) {
      setUpdateKey(updateKey + 1);
      return;
    }

    setLocalValue(event.target.value);
  };

  const { mutate: onAction } = useMutation({
    mutationKey: ['feed', 'comment', id],
    mutationFn: putFeedCommentUpdate,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['feed', feedId, 'comment'],
      });
    },
    onMutate: () => {
      if (onTrackable) onTrackable(localValue);
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
      <div className={styles.inputGroup}>
        <TextareaAutosize
          rows={1}
          className={styles.textarea}
          placeholder='수정할 댓글을 입력해줘!'
          value={localValue}
          onChange={onChangeInput}
        />
        <VibratingText updateKey={updateKey}>
          <Body size='7' className={styles.counting}>
            {localValue.length}/{LIMIT_TEXT}
          </Body>
        </VibratingText>
      </div>
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
