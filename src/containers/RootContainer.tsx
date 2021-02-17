// Content.tsx
import * as React from "react";
import Draggable from "react-draggable";
import { ContentLayout } from "../layouts/ContentLayout";
import TimerContainer from "../containers/TimerContainer";
import UrlInputPresenter from "../presentationals/UrlInputPresenter";

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
  var dttm = new Date(ServerDate);

  let domain = document.location.href.split(".com", 1);

  let divType = "default";
  if (domain[0].includes("interpark")) {
    divType = "interpark";
  } else if (domain[0].includes("yes24")) {
    divType = "yes24";
  } else if (domain[0].includes("melon")) {
    divType = "melon";
  } else {
    divType = "default";
  }
  console.log(dttm);
  return (
    <Draggable defaultPosition={{ x: 0, y: -100 }}>
      <ContentLayout className={divType}>
        <UrlInputPresenter onSubmit={setUrl} />
        <TimerContainer current={dttm} />
      </ContentLayout>
    </Draggable>
  );
}

export default RootContainer;
