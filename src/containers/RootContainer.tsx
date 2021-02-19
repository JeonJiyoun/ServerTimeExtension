// Content.tsx
import * as React from "react";
import Draggable from "react-draggable";
import { ContentLayout } from "../layouts/ContentLayout";
import TimerContainer from "../containers/TimerContainer";
import UrlInputPresenter from "../presentationals/UrlInputPresenter";

function RootContainer() {
  const [url, setUrl] = React.useState<string>(window.location.href.toString());
  const [dateTime, setDateTime] = React.useState(new Date());
  const [divType, setDivType] = React.useState("default");
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
          setDivType("interpark");
        } else if (domain[0].includes("yes24")) {
          setDivType("yes24");
        } else if (domain[0].includes("melon")) {
          setDivType("melon");
        } else {
          setDivType("default");
        }

        setDateTime(new Date(response.time));
      }
    );
  }, [url]);

  return (
    <Draggable defaultPosition={{ x: 0, y: -100 }}>
      <ContentLayout className={divType}>
        <UrlInputPresenter onSubmit={inputOnSubmit} />
        <TimerContainer current={dateTime} />
      </ContentLayout>
    </Draggable>
  );
}

export default RootContainer;
