const screenCapnow = async () => {
  const stream = await navigator.mediaDevices.getDisplayMedia();
  const track = stream.getVideoTracks()[0];
  const imageCapture = new ImageCapture(track);
  const bitmap = await imageCapture.grabFrame();
  
  track.stop();
}

screenCapnow()
