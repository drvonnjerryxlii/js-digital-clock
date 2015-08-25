// Your code here

function getTime(whatZone) {
  var displayLocale; var timeZone;
  switch (whatZone) {
    case "us-east":
      displayLocale = "EN-US"; timeZone = "America/New_York"; break;
    case "sk-seoul":
      displayLocale = "KO"; timeZone = "Asia/Seoul"; break;
    case "us-west":
      displayLocale = "EN-US"; timeZone = "America/Los_Angeles"; break;
    case "de-berlin":
      displayLocale = "DE"; timeZone = "Europe/Berlin"; break;
  }
  return new Date().toLocaleString(displayLocale, { timeZone: timeZone });
}

function displayTime() {
  var zones = ["us-east", "sk-seoul", "us-west", "de-berlin"];
  for (var i = 0; i < zones.length; i++) {
    // set the current zone
    var currentZone = zones[i];

    // get the time for the current zone
    var rightNow = getTime(currentZone);

    // display the time on the page
    var clock = document.getElementById(currentZone).innerHTML = rightNow;
  }
}

// update the displayed time on a regular basis
function updateTime() {
  window.setInterval(displayTime, 500);
}
