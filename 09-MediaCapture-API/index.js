function getUserMedia(options, successCallback, failureCallback) {
  var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia;
  if (api) {
    return api.bind(navigator)(options, successCallback, failureCallback);
  }
  alert('User Media API not supported.');
}

var theStream;

function getStream() {
  var constraints = {video : true};
  getUserMedia(constraints, function(stream) {
    var mediaControl = document.querySelector('video');
    if (navigator.mozGetUserMedia) {
      mediaControl.mozSrcObject = stream;
    } else {
      mediaControl.srcObject = stream;
      mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
    }
    theStream = stream;
  }, function(err) {
    alert('Error: ' + err);
  });
}

function takePhoto() {
  var theImageCapturer = new ImageCapture(theStream.getVideoTracks()[0]);

  var theImageTag = document.getElementById("imageTag");
  if (!!window.chrome) {
    theImageCapturer.takePhoto().then((blob) => {
      theImageTag.src = URL.createObjectURL(blob);
    }).catch((err) => { alert('Error: ' + err); });
  } else {
    alert('Browser doesn\'t support ImageCapture.takePhoto()'):
  }
}

