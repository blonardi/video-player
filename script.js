const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward'); 
const $forward = document.querySelector('#forward');

	$play.onclick = function() {
		$video.play();
		$play.hidden = true;
		$pause.hidden = false;
		console.log("le diste click a play");
	}

	$pause.onclick = function() {
		$video.pause();
		$pause.hidden = true;
		$play.hidden = false;		
		console.log("le diste click a pausa");
	}

	$backward.onclick = function(){
		console.log($video.currentTime);
		$video.currentTime -= 10;
		console.log($video.currentTime);
	}

	$forward.onclick = function(){
		console.log($video.currentTime);
		$video.currentTime += 10;
		console.log($video.currentTime);
	}

	const $progress = document.querySelector('#progress');
	$video.ontimeupdate = function(){
		$progress.value = $video.currentTime;
		//console.log('tiempo actual', $video.currentTime);
	}

	$video.onloadedmetadata = function(){
		$progress.max = $video.duration;
		console.log('tiempo de mi video', $video.duration);
	}

	$progress.addEventListener('input', handleInput);

	function handleInput(){
		$video.currentTime = $progress.value;
		console.log(progress.value);
	}

