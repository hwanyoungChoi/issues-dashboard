import styled from "@emotion/styled";

export const Container = styled.div`
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  overflow-y: auto;
`;

export const Modal = styled.div`
  position: fixed;
  max-width: 400px;
  width: 100%;

  padding: 20px;
  background-color: white;
  border-radius: 8px;
`;
