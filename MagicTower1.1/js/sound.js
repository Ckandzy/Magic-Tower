// 音效实现
function play_floor(){
  var audio = $("audio_floor");
  audio.setAttribute("src","./sound/floor.MP3");
  audio.play();
}
function walk(){
  var audio = $("audio");
  audio.setAttribute("src","./sound/walk.MP3");
  audio.play();
}
function door(){
  var audio = $("door");
  audio.setAttribute("src","./sound/door.MP3");
  audio.play();
}
function fight_sound(){
  var audio = $("audio");
  audio.setAttribute("src","./sound/fight.MP3");
  audio.play();
}
function bgm_sound(){
  var audio = $("audio_bgm");
  audio.setAttribute("src","./sound/bgm.MP3");
  audio.play();
  audio.loop = true;
}
