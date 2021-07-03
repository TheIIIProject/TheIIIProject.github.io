if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	alert("We're sorry but your device is not supported")
	window.location.href = "https://www.google.com/search?q=cute+cat+videos"
}

function arrowPressed() {
	document.getElementById("here").scrollIntoView()
}
function openTwtr() { window.open("https://www.twitter.com/theiiisociety") }
function openIG() { window.open("https://www.instagram.com/the_iii_society/") }
function openDC() { window.open("https://discord.gg/iii") }
function openMail() { window.location.href = "mailto:theiiisociety.help@gmail.com?Subject=I%20need%20help%20with%3A" }