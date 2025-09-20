'use client'


import { css } from '@emotion/css';

const StyledButton1 = {
  self: css({
    backgroundColor: '#525252ff',
    border: '1px solid #eee',
    borderRadius: '0.5rem',
    padding: '1rem',
    '&:hover': { // Use '&:hover' for pseudo-classes within the object
      backgroundColor: 'blueviolet',
    },
  }),
};

export function EmotionStyleObjectTest(){
  return <button className={StyledButton1.self}>Styled with style object</button>;
}
