import styled, { css } from "styled-components";

interface ThemeType {
  background : string,
  border : string
}

const ContentLayout = styled.div`
  font-family: 'Play', sans-serif;
  width: 300px;
  height: 100px;
  box-shadow: 0 6px 18px 0 rgb(51 51 51 / 30%);
  border-radius: 1rem;
  background-color: ${($props: { theme : ThemeType}) => $props.theme.background};
  border:  ${($props: { theme : ThemeType}) => $props.theme.border};
  padding: 10px;
`;

const TimerLayout = styled.div`
  color: #fff;
`;
const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
`;

const DateLayout = styled.div`
  font-size: 30px;
  font-weight : bold;
`;

const TimeLayout = styled.div`
  font-size: 65px;
  font-weight : 600;
  float: right;
  line-height: 75px;
`;

const InputLayout = styled.input`
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export { ContentLayout, TimerLayout, DateContainer, DateLayout, TimeLayout, InputLayout };
