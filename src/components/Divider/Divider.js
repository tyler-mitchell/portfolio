import React from "react";
import styled from "styled-components";
import { darken } from "polished";
const DividerInner = styled.div`
  width: 100%;
  height: 2.44px;
  background: linear-gradient(180deg, #5a6086 0%, rgba(90, 96, 134, 0.48) 100%);
  opacity: 0.8;
`;

export default styled.div`
  background: black;
  opacity: 0.3;
  height: 3.44px;
  border-radius: 1px;
  overflow: hidden;
  width: ${({ width }) => width};
  background: linear-gradient(180deg, #5a6086 0%, rgba(90, 96, 134, 0.48) 100%);
  /* width: 500px; */
  box-shadow: inset 0px 1px 5px 1px #2d324c, inset 0px 0px 1px #5a6086;
`;

// export default () => {
//   return (
//     <>
//       <DividerOuter width="100%" />
//     </>
//   );
// };
