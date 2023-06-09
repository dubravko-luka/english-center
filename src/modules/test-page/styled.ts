import styled from "styled-components";

export const LinkTest = styled.div`
  .test-link {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background: #000;
      transition: width .3s linear
    }

    &:hover {
      &:before {
        width: 100%;;
      }
    }
  }
`;