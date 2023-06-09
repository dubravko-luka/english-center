import styled from "styled-components";

export const WrapperAnswer = styled.div`
  position: relative;

  &.correct {
    
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: calc(-25px / 3.5);
      transform: translateY(-55%);
      width: 25px;
      height: 30px;
      background-image: url('/images/png/circle-blue.png');
      background-size: 100% 100%;
      background-position: center;
    }
  }
`;