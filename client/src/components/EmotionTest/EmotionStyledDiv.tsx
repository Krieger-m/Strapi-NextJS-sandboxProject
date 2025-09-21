'use client';

/** @jsxImportSource @emotion/react */

import { css } from '@emotion/css';
import { EmotionButton } from './EmotionStyledButton';

export const EmotionDiv = () => {
  return (
    <div
      className={css({
        backgroundColor: '#525252ff',
        border: '1px solid #eee',
        borderRadius: '0.5rem',
        padding: '1rem',
        margin: '50px',
        '&:hover': {
          backgroundColor: 'grey',
        },
      })}
    >
      Emotion Div
      <EmotionButton />
    </div>
  );
}
