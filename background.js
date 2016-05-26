chrome.browserAction.onClicked.addListener(function(tabID, info, tab) {
    chrome.tabs.executeScript(tabID, {file: "content_script.js"});
});
document.getElementById("gotoboydbtn").addEventListener("click", gotoboyd());
function gotoboyd() {
  chrome.tabs.create({url:"http://mbhs.mckinneyisd.net"});
}
