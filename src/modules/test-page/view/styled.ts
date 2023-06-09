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
      background-image: url('/images/svg/circle-blue.svg');
      background-size: 100% 100%;
      background-position: center;
    }
  }

  &.choose-wrong {
    
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: calc(-25px / 3.5);
      transform: translateY(-55%);
      width: 25px;
      height: 30px;
      background-image: url('/images/svg/circle-red.svg');
      background-size: 100% 100%;
      background-position: center;
    }
  }

  &.choose {
    
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: calc(-25px / 3.5);
      transform: translateY(-55%);
      width: 25px;
      height: 30px;
      background-image: url('/images/svg/circle-black.svg');
      background-size: 100% 100%;
      background-position: center;
    }
  }
`;