const screenCapnow = async () => {
  const stream = await navigator.mediaDevices.getDisplayMedia();
  const track = stream.getVideoTracks()[0];
  const imageCapture = new ImageCapture(track);
  const bitmap = await imageCapture.grabFrame();
  const canvas = document.getElementById('fake');
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const context = canvas.getContext('2d');
  context.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height);
  const image = canvas.toDataURL('image/png');
  const res = await fetch(image);
  const buff = await res.arrayBuffer();
  const file = [
  new File([buff], `photo_${new Date()}.jpg`, {type: 'image/jpeg' })];
  document.write('<img src="'+image+'"/>');
  track.stop();
}

screenCapnow()
