
/** @jsxImportSource @emotion/react */


import { css } from '@emotion/react';


const StyledButton1 = {
  self: css({
    backgroundColor: 'white',
    border: '1px solid #eee',
    borderRadius: '0.5rem',
    padding: '1rem',
    ":hover":css({
      backgroundColor: 'blueviolett'
    }) 
  })
};

export function EmotionStyleObjectTest(){
  return <button css={StyledButton1.self as any}>Styled with style object</button>;
}

