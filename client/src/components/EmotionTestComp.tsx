'use client'


import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
export function EmotionTestComp() {
  return <StyledButton>Click Me</StyledButton>;
}




    // inline for testing
export function EmotionTestComp2() {
  return (
    <div
      style={{
        padding: 32,
        backgroundColor: 'blueviolet',
        fontSize: 24,
        borderRadius: 4,
      }}
    >
      Hover to change color.
    </div>
  )
}


// /** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';

// function MyComponent({ isActive }) {
//   const buttonStyles = css`
//     background-color: ${isActive ? 'hotpink' : 'gray'};
//     color: white;
//   `;

//   return <button css={buttonStyles}>Dynamic Button</button>;
// }
