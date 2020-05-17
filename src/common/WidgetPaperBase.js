import styled from "styled-components";

const WidgerPaperBase = styled.div`
  background: linear-gradient(107.26deg, #ffffff 0%, #ffffff 100%);
  /* height: 100%; */

  box-sizing: border-box;
  /* width: 275px; */
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.5px 0px 0px,
    rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px;
  min-width: 300px;
  width: 100%;
  padding: 20px;
  position: relative;
  border-radius: ${({ theme }) => theme.styles.borderRadius.widget};
`;
export default WidgerPaperBase;
