import styled from 'styled-components';

export * from './Steps';

export const Header = styled.h1`
  background-color: ${p => p.theme.colors.primary};
  box-shadow: 0.5em 0 0 ${p => p.theme.colors.primary},
    -0.5em 0 0 ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.onPrimary};
  display: inline;
  text-transform: uppercase;
`;
