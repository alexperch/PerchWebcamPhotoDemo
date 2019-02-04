/**
 * Code taken from:
 * https://davidwalsh.name/browser-camera
 * https://codepen.io/Palestinian/pen/mDKkG?editors=1010 -- sparingly
 */

// Grab elements, create settings, etc.
var video = document.getElementById('video');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}

/* ** For multiple cameras **
navigator.mediaDevices.getUserMedia({
  video: {
    deviceId: { exact: camera1Id }
  }
});
*/
else if(navigator.getUserMedia) { // Standard
    navigator.getUserMedia({ video: true }, function(stream) {
        video.src = stream;
        video.play();
    }, errBack);
} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
    navigator.webkitGetUserMedia({ video: true }, function(stream){
        video.src = window.webkitURL.createObjectURL(stream);
        video.play();
    }, errBack);
} else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
    navigator.mozGetUserMedia({ video: true }, function(stream){
        video.srcObject = stream;
        video.play();
    }, errBack);
}

// Elements for taking the snapshot
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
    context.drawImage(video, 0, 0, video.videoWidth/3, video.videoHeight/3);
    var download = document.getElementById("snap");
    var image = document.getElementById("canvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
    download.setAttribute("download", "image.png");
});


function showPopup() {
    $('#popup').show();
    $('#main').addClass('blurred');
    $('#popupButton').attr('disabled', true);
}

function hidePopup() {
    $('#popup').hide();
    $('#main').removeClass('blurred');
    $('#popupButton').attr('disabled', false);
}

$(document).ready(()=>{
    $('#popup').hide();
});