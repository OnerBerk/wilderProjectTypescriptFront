import styled from 'styled-components';

export type ButtonProps={
  loading:boolean
}

export const Button = styled.button<ButtonProps>`
  color: snow;
  font-weight: bold;
  padding: 0.80em;
  border-radius: 5px;
  border: none;
  outline: none;

  background-color: ${({ loading }) => (loading
    ? '#ab1c37'
    : '#66afe0')
}
`;
