// components/atoms/Button.js
import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const StyledButtonEl = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function StyledButton({
  children,
  onClick,
}: PropsWithChildren<{ onClick?: () => void }>) {
  return <StyledButtonEl onClick={onClick}>{children}</StyledButtonEl>;
}