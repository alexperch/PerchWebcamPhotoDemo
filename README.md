# Webcam Demo

## Description

This is a demo of how to use a webcam to take a photo with a viewfinder. [Demo is live on GH pages](https://alexperch.github.io/PerchWebcamPhotoDemo/)!

[About the Issue](DESCRIPTION.md)

## To Use

* Open index.html in a web browser -- this should support most if not all browsers
* Click the popup from your browser to allow the webcam
* Click the `Click Me!` button to bring up interface.
* Click `Snap Photo` button to take a photo, this should
  1. Show the photo in a `canvas` element
  2. Download the photo
* Click the `X` button on the top left to exit view

## What this Demos

* Blur functionality
* Viewfinder functionality
* Video frame manipulation
* File downloading

## Technology Description

Instead of using the problematic method [examined in the problem description document](DESCRIPTION.md), this implements the following code to grab the webcam video stream for the viewfinder:

```js
var video = document.getElementById('video');
navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
    video.srcObject = stream;
    video.play();
});
```

It then snaps a photo and stores it in a canvas element using the following code:

```js
// Elements for taking the snapshot
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
document.getElementById("snap").addEventListener("click", function() {
    context.drawImage(video, 0, 0, video.videoWidth/3, video.videoHeight/3);
});
```

The image is then downloaded to the user's local with the following code:

```js
var download = document.getElementById("snap");
var image = document.getElementById("canvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
download.setAttribute("href", image);
download.setAttribute("download", "image.png");
```

## Notes

* The blur affect uses the CSS filter style attributes. These are all fairly specific to their respective browsers. The CSS in [index.html](index.html) between the `<script>` tags under the `.blurred` style definition is pretty comprehensive.
* This code uses the proper method of requesting access to the webcam, please follow the `if` chain of requests for media access for best results.
* Included is a way of accessing multiple cameras if they're available. Little consideration was given to implementation so far.

## Questions

* References
  * [Camera](https://davidwalsh.name/browser-camera)
  * [Blur](https://codepen.io/Palestinian/pen/mDKkG?editors=1010 )
* [Contact the developer](mailto:alex@perchinteractive.com)

## DISCLAIMER

_This demo is not for distribution and the media it includes is not intended to reflect the work of Perch Interactive or its affiliates._

**Photo Reference**: [Medium.com](https://medium.com/rta902/humans-of-new-york-social-media-simplicity-59e951b8b561)