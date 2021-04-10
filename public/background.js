// public/background.js
// 사용자가 확장프로그램 아이콘을 클릭할 때에
chrome.browserAction.onClicked.addListener(function (tab) {
  // 현재 사용자가 보고 있는 탭( 웹사이트 )의 정보를 가져와서
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    // 가져온 탭 ( 웹사이트 )에게 메세지( click )를 전송합니다.
    // index.tsx 파일을 보시면 이 메세지를 수신하여 toggle()를 이용하여 해당 컨텐츠를 보여주거나 제거합니다.
    chrome.tabs.sendMessage(activeTab.id, { message: "click" });
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "requestServerTime") {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("Head", request.url, true);
    xmlHttpRequest.setRequestHeader("Content-Type", "text/html");
    xmlHttpRequest.onreadystatechange = function () {
      if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
        // JSON.parse does not evaluate the attacker's scripts.
        var resp = xmlHttpRequest.getResponseHeader("Date");
        sendResponse({ time: resp });
      }
    };
    xmlHttpRequest.send();

    return true;
  }
});
