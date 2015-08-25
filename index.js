// Your code here

function getTime(whatZone) {
  switch (whatZone) {
    case "us-east":
      return new Date().toLocaleString("EN-US", { timeZone: "America/New_York" });
    case "sk-seoul":
      return new Date().toLocaleString("KO", { timeZone: "Asia/Seoul" });
    case "us-west":
      return new Date().toLocaleString("EN-US", { timeZone: "America/Los_Angeles" });
    case "de-berlin":
      return new Date().toLocaleString("DE", { timeZone: "Europe/Berlin" });
  }
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
