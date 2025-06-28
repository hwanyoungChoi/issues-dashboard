import styled from "@emotion/styled";

export const Container = styled.div`
  > h2 {
    font-size: 24px;
    font-weight: 700;
  }
`;

export const InnerContainer = styled.div`
  margin-top: 20px;
  position: relative;
  border-radius: 20px;
  border: 1px solid black;
  padding: 40px 20px 20px;
  min-height: 300px;
`;

export const MoreWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;

export const Date = styled.div`
  margin-top: 10px;
`;

export const Content = styled.div`
  min-height: 300px;
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
