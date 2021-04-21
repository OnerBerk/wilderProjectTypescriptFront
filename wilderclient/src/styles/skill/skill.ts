import styled from 'styled-components';

type BadgeProps={
    votes:number
}

export const Badge = styled.span<BadgeProps>`

  align-items: center;
  display: flex;
  justify-content: center;

  /* Colors */
  color: #fff;

  /* Rounded border */
  border-radius: 9999px;
  height: 20px;
  width: 20px;
  padding: 0.1em;
  margin-left:0.2em ;
  
  
  background-color: ${({ votes }:BadgeProps) => (votes > 7
    ? '#66afe0'
    : '#ab1c37')
}
`;
