# Description of Issue and Resolution

[Please also read the README!](README.md)

## Current Issue

In order to grab an image, the current app uses a OS-dependant image handling system based on the `input` tag.

From line 151 of [the app](https://wwwinvisalign-staging-us.herokuapp.com/smileview-store#start)'s HTML (use _View Page Source_):

```html
<input accept="image/*" capture="camera" id="smile_visualization_image" style="display:none" type="file">
```

This input will attempt to request access to the client's file system. In order to increase ease of use and convenience for the user, mobile web browsers will bypass this request. _This is unavoidable using the `input` tag._

If the client allows access to its file system, like in the case of a desktop's browser, it will use the file browser.

## Reason It's an Issue

This feature is actually very convenient when requesting photos from a mobile user (which is why it was implemented), but when requesting images from a desktop browser it results in a clunky experience.

The idea behind not implementing this in a desktop OS is that everyone uses a different image-taking software and usually prefer to upload specific photos from their file system over using their web cams.

## Proposed Resolution

This specific application will take the file and use modify it anyway (regardless of OS). In this repo, a implementation of a popup viewfinder and photo-taking system was implemented to alleviate the above issue. Please read the [README](README.md) for a description of the technology.