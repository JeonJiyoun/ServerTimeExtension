// Content.tsx
import * as React from "react";
import Draggable from "react-draggable";
import { ContentLayout } from "../layouts/ContentLayout";
import TimerContainer from "../containers/TimerContainer";
import UrlInputPresenter from "../presentationals/UrlInputPresenter";

interface ThemeType {
  background: string;
  border: string;
}

function RootContainer() {
  const [url, setUrl] = React.useState<string>(window.location.href.toString());
  const [dateTime, setDateTime] = React.useState(new Date());
  const [theme, setTheme] = React.useState<ThemeType>({
    background: "black",
    border: "none",
  });
  const inputOnSubmit = (value: string) => {
    if (value === "") {
      setUrl(window.location.href.toString());
    } else {
      setUrl(value);
    }
  };

  React.useEffect(() => {
    // background.js 의 getServerTime 실행
    chrome.runtime.sendMessage(
      { message: "requestServerTime", url: url },
      function (response) {
        let domain = url.split(".com", 1);

        if (domain[0].includes("interpark")) {
          setTheme({ background: "#ef3f43", border: "1px solid #ef3f43" });
        } else if (domain[0].includes("yes24")) {
          setTheme({
            background: "#f43142",
            border: "2px solid #f43142",
          });
        } else if (domain[0].includes("melon")) {
          setTheme({
            background: "#41d26b",
            border: "1px solid #41d26b",
          });
        }

        setDateTime(new Date(response.time));
      }
    );
  }, [url]);

  return (
    <Draggable defaultPosition={{ x: 0, y: -100 }}>
      <ContentLayout theme={theme}>
        <UrlInputPresenter onSubmit={inputOnSubmit} />
        <TimerContainer current={dateTime} />
      </ContentLayout>
    </Draggable>
  );
}

export default RootContainer;
