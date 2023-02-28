function getVideo(){
	return document.getElementById('video1');
}

function play(){
	var video = getVideo();
	video.play();
}

function pause(){
	var video = getVideo();
	video.pause();
}

function stop(){
	var video = getVideo();
	video.load();
}