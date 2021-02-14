// App.tsx
import * as React from 'react';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import Content from './Content';

function App() {

  /** 서버시간 가져오기 */
  var xmlHttpRequest;
  /** Firefox, Mozilla, IE7, etc */
  if (window.XMLHttpRequest) {
    xmlHttpRequest = new XMLHttpRequest();
  }
  /** IE5, IE6 */
  else if (window.ActiveXObject) {
    xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlHttpRequest.open('Head', window.location.href.toString(), false);
  xmlHttpRequest.setRequestHeader("ContentType", "text/html");
  xmlHttpRequest.send('');

  var ServerDate = xmlHttpRequest.getResponseHeader("Date");
  var dttm = new Date(ServerDate);

  let url = document.location.href.split('.com', 1);

  let divType = "default";
  if(url[0].includes("interpark"))
  {
    divType = "interpark";
  }
  else if(url[0].includes("yes24"))
  {
    divType = "yes24";
  }
  else if(url[0].includes("melon"))
  {
    divType = "melon";
  }
  else
  {
    divType = "default";
  }

  return (
    <Content divType={divType} current = {dttm}/> 
  );
}

export default App;