import styled from "styled-components";

const WidgerPaperBase = styled.div`
  background: linear-gradient(107.26deg, #494f74 0%, #434865 100%);
  height: 100%;

  box-sizing: border-box;
  /* width: 275px; */
  min-width: 300px;
  width: 100%;
  padding: 20px;
  position: relative;
  border-radius: ${({ theme }) => theme.styles.borderRadius.widget};
`;
export default WidgerPaperBase;
