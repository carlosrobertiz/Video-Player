//Seleccionar elementos
const $video = document.getElementById('video');
const $play = document.getElementById('play');
const $pause = document.getElementById('pause');
const $backward = document.getElementById('backward');
const $forward = document.getElementById('forward');
const $progress = document.getElementById('progress');

//Play
$play.addEventListener('click', handlePlay);

function handlePlay() {
	$video.play();
	console.log('Le diste a play');
	$play.hidden = true;
	$pause.hidden = false;
}

//Pause
$pause.addEventListener('click', handlePause);

function handlePause() {
	$video.pause();
	console.log('Le diste a pause');
	$play.hidden = false;
	$pause.hidden = true;
}

//Retroceder
$backward.addEventListener('click', handleBackward);

function handleBackward() {
	$video.currentTime -= 10;
	console.log($video.currentTime);
}

//Adelantar
$forward.addEventListener('click', handleForward);

function handleForward() {
	$video.currentTime += 10;
	console.log($video.currentTime);
}

//Barra de progreso
//Carga de metadatos del video y se le asigna la maxima duracion al atributo max del input
$video.addEventListener('loadedmetadata', handleLoaded);

function handleLoaded() {
	$progress.max = $video.duration;
}

$video.addEventListener('timeupdate', handleTimeUpdate);

function handleTimeUpdate() {
	$progress.value = $video.currentTime;
}

$progress.addEventListener('input', handleInput);

function handleInput() {
	$video.currentTime = $progress.value;
}
