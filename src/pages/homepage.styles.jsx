import styled from "styled-components";

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* Needed so the children can sticky */
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
`;
