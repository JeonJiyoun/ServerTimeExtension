import styled, { css } from "styled-components";

const TimerLayout = styled.div`
  font-family: 'Play', sans-serif !important;
  color: #fff;
`;
const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
`;

const DateLayout = styled.div`
  font-family: 'Play', sans-serif !important;
  font-size: 30px;
  font-weight : bold;
`;

const TimeLayout = styled.div`
  font-family: 'Play', sans-serif !important;
  font-size: 65px;
  font-weight : 600;
  float: right;
  line-height: 75px;
  letter-spacing: 0;
`;

export { TimerLayout, DateContainer, DateLayout, TimeLayout };