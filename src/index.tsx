// index.tsx
import * as React from "react"
import * as ReactDOM from "react-dom"
import App from './App';
import "../public/root.css";

/** Chrome Extension 의 Content Script */
const app = document.createElement('div');
app.id = "my-extension";
document.body.appendChild(app);
app.style.display = "block";

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

var serverDate = xmlHttpRequest.getResponseHeader("Date");
var dttm = new Date(serverDate);

let url = document.location.href;
let divname = "default";
if(url.includes("interpark"))
{
  divname = "interpark";
}
else if(url.includes("yes24"))
{
  divname = "yes24";
}
else if(url.includes("melon"))
{
  divname = "melon";
}
else
{
  divname = "default";
}

chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
      if( request.message === "click") {
        toggle();
      }
   }
);

function toggle(){
   if(app.style.display === "none"){
     app.style.display = "block";
   }else{
     app.style.display = "none";
   }
}

/**
 * local => documnet.getElementById("app")
 * extension => app
 */

ReactDOM.render(<App contentdiv={divname} current={dttm}/>, app);