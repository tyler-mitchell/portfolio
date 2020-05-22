import styled from "styled-components";

const WidgerPaperBase = styled.div`
  background: linear-gradient(107.26deg, #ffffff 0%, #ffffff 100%);
  /* height: 100%; */

  box-sizing: border-box;
  /* width: 275px; */
  box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.05),
    inset rgba(0, 0, 0, 0.05) 1px 1px 2px,
    inset -1px -1px rgba(255, 255, 255, 0.8);
  min-width: 300px;
  width: 100%;
  padding: 20px;
  position: relative;
  border-radius: ${({ theme }) => theme.styles.borderRadius.widget};
`;
export default WidgerPaperBase;
