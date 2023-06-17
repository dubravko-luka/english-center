import styled from "styled-components";

export const WrapperAnswer = styled.div`
  position: relative;

  .index-answer {
      position: relative;

      &:before {
        content: '';
        position: absolute;
        top: 40%;
        left: 40%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 30px;
        border-style: solid;
        border-radius: 100%;
      }
    }

  &.correct {
    color: #1400FF;
    
    .index-answer {

      &:before {
        border-width: 1px;
        border-color: #1400FF;
      }
    }
  }

  &.choose-wrong {

    color: #FF0006;
    
    .index-answer {

      &:before {
        border-width: 1px;
        border-color: #FF0006;
      }
    }
  }

  &.choose {
    
    .index-answer {

      &:before {
        border-width: 1px;
        border-color: #000;
      }
    }
  }
`;