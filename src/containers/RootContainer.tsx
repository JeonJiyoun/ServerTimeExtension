// Content.tsx
import * as React from "react";
import Draggable from "react-draggable";
import { ContentLayout } from "../layouts/ContentLayout";
import TimerContainer from "../containers/TimerContainer";
import UrlInputPresenter from "../presentationals/UrlInputPresenter";

interface ThemeType {
  background : string,
  border : string
}

function RootContainer() {
  const [url, setUrl] = React.useState<string>(window.location.href.toString());
  console.log(url);
  /** 서버시간 가져오기 */
  var xmlHttpRequest;
  /** Firefox, Mozilla, IE7, etc */
  if (window.XMLHttpRequest) {
    xmlHttpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    /** IE5, IE6 */
    xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlHttpRequest.open("Head", url, false);
  xmlHttpRequest.setRequestHeader("ContentType", "text/html");
  xmlHttpRequest.send("");

  var ServerDate = xmlHttpRequest.getResponseHeader("Date");
  var dateTime = new Date(ServerDate);

  let domain = document.location.href.split(".com", 1);

  let theme : ThemeType = {
    background : "black",
    border : "none"
  }
  
  if (domain[0].includes("interpark")) {
    theme = {
      background : "#ef3f43",
      border : "1px solid #ef3f43"
    }
  } else if (domain[0].includes("yes24")) {
    theme = {
      background : "#f43142",
      border : "2px solid #f43142"
    }
  } else if (domain[0].includes("melon")) {
    theme = {
      background : "#41d26b",
      border : "1px solid #41d26b"
    }
  } else {
    ;
  }

  return (
    <Draggable defaultPosition={{ x: 0, y: -100 }}>
      <ContentLayout theme={theme}>
        <UrlInputPresenter onSubmit={setUrl} />
        <TimerContainer current={dateTime} />
      </ContentLayout>
    </Draggable>
  );
}

export default RootContainer;
