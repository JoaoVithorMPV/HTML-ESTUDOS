function getVideo(){
	return document.getElementById("video");
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
 	//video.pause();
    //video.currentTime = 0;
	video.load();
}

function volume(){
	var volume = document.getElementById("volume").value;
	if(volume === "100"){
		volume = 1;
	}else{
		volume = parseFloat("0."+volume).toFixed(1);
	}
	var video = getVideo();
    video.volume = volume;
}

function muted(){
	var video = getVideo();
	var mut = document.getElementById("muted");
	if(video.muted) {
		video.muted = false
		mut.style.background = "silver"
		mut.style.color = "black"
	}else{
		video.muted = true
		mut.style.color = "red"
		mut.style.background = "Black"
	}
}

function full(){
	var video = getVideo();
	video.webkitEnterFullScreen()
}

getVideo().onplay = function() {
	console.log("the video has started play")
	if(getVideo().currentTime = 0){
		setStorage("video", {desc:["the video has started play"],time:[0],volume:[getVideo().volume]});
	}else{
		var objVideo = getStorage("video");
		onjVideo.desc.push("the video has started play");
		onjVideo.time.push(getVideo().currentTime);
		onjVideo.desc.push(getVideo().volume)
		setStorage("video", objVideo);
	}
};

getVideo().onpause = function() {
	console.log("the video has been paused")

	var objVideo = getStorage("video");
		onjVideo.desc.push("the video has been paused");
		onjVideo.time.push(getVideo().currentTime);
		onjVideo.desc.push(getVideo().volume)
		setStorage("video", objVideo);
};

getVideo().onabort = function() {
	console.log("the video load aborted")

	var objVideo = getStorage("video");
		onjVideo.desc.push("the video load aborted");
		onjVideo.time.push(getVideo().currentTime);
		onjVideo.desc.push(getVideo().volume)
		setStorage("video", objVideo);

		var listVideo = getStorage("listVideo")

		if(!listVideo.lenght){
			listVideo = [];
		}
		listVideo.push(objVideo);
		setStorage("listVideo",listVideo);
};

getVideo().onvolumechange = function() {
	console.log("the video has been changed")

	var objVideo = getStorage("video");
		onjVideo.desc.push("the video has been changed");
		onjVideo.time.push(getVideo().currentTime);
		onjVideo.desc.push(getVideo().volume)
		setStorage("video", objVideo);
};

function setStorage(id,list){ 
localSetStorage.setItem(is, JSON.stringify(list));
}

function getStorage(id){
	var storage = localStorage.getItem(id);
	if(storage){
		return JSON.parse(storage);
	}else{
		return{};
	}
}
