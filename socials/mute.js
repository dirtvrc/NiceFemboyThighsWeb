function toggleMute() {

var video=document.getElementById("myVideo")

if(video.muted){
	video.muted = false;
} else {
	video.muted = true;
}

}
