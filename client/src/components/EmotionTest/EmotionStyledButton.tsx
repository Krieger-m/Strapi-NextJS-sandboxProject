'use client'


import { css } from '@emotion/react';
import styled from '@emotion/styled';


  // maybe not the best approach since it doesnt support most of the ide-features in the interpolated string???
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

export function EmotionStyledButton() {
  return <StyledButton>Styled with string interpolation</StyledButton>;
}


