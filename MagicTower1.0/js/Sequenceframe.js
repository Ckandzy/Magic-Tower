// 序列帧动画实现
var count_animation = 0;
function sequence_frame(){
  if(count_animation == 4){
    count_animation = 0;
  }
  var M_6_1 = document.getElementsByClassName("M_6_1");
  var M_6_2 = document.getElementsByClassName("M_6_2");
  var M_6_3 = document.getElementsByClassName("M_6_3");
  var M_7_1 = document.getElementsByClassName("M_7_1");
  var M_7_2 = document.getElementsByClassName("M_7_2");
  var M_8_1 = document.getElementsByClassName("M_8_1");
  var M_9_1 = document.getElementsByClassName("M_9_1");
  var M_9_2 = document.getElementsByClassName("M_9_2");
  var M_9_3 = document.getElementsByClassName("M_9_3");
  var M_10_1 = document.getElementsByClassName("M_10_1");
  var M_11_1 = document.getElementsByClassName("M_11_1");
  var M_11_2 = document.getElementsByClassName("M_11_2");
  var M_11_3 = document.getElementsByClassName("M_11_3");
  var M_12_1 = document.getElementsByClassName("M_12_1");
  var M_12_2 = document.getElementsByClassName("M_12_2");
  for(var i = 0; i < M_6_1.length; i++){
    M_6_1[i].style.backgroundPositionX= (count_animation * 32).toString() + "px";
}
  for(var i = 0; i < M_6_2.length; i++){
    M_6_2[i].style.backgroundPositionX= (count_animation * 32).toString() + "px";
  }
  for(var i = 0; i < M_6_3.length; i++){
    M_6_3[i].style.backgroundPositionX= (count_animation * 32).toString() + "px";
  }
  for(var i = 0; i < M_7_1.length; i++){
    M_7_1[i].style.backgroundPositionX= (count_animation * 32).toString() + "px";
  }
  for(var i = 0; i < M_7_2.length; i++){
    M_7_2[i].style.backgroundPositionX= (count_animation * 32).toString() + "px";
  }
  for(var i = 0; i < M_8_1.length; i++){
    M_8_1[i].style.backgroundPositionX= (count_animation * 32).toString() + "px";
  }
  for(var i = 0; i < M_9_1.length; i++){
    M_9_1[i].style.backgroundPositionX= (count_animation * 32).toString() + "px";
  }
  for(var i = 0; i < M_9_2.length; i++){
    M_9_2[i].style.backgroundPositionX= (count_animation * 32).toString() + "px";
  }
  for(var i = 0; i < M_9_3.length; i++){
    M_9_3[i].style.backgroundPositionX= (count_animation * 32).toString() + "px";
  }
  for(var i = 0; i < M_10_1.length; i++){
    M_10_1[i].style.backgroundPositionX= (count_animation * 32).toString() + "px";
  }
  for(var i = 0; i < M_11_1.length; i++){
    M_11_1[i].style.backgroundPositionX= (count_animation * 32).toString() + "px";
  }
  for(var i = 0; i < M_11_2.length; i++){
    M_11_2[i].style.backgroundPositionX= (count_animation * 32).toString() + "px";
  }
  for(var i = 0; i < M_11_3.length; i++){
    M_11_3[i].style.backgroundPositionX= (count_animation * 32).toString() + "px";
  }
  for(var i = 0; i < M_12_1.length; i++){
    M_12_1[i].style.backgroundPositionX= (count_animation * 32).toString() + "px";
  }
  for(var i = 0; i < M_12_2.length; i++){
    M_12_2[i].style.backgroundPositionX= (count_animation * 32).toString() + "px";
  }
  count_animation++;
}
//左边栏信息刷新
function refresh(){
  var Attack = $("Attack");
  Attack.innerHTML = obj_hero.ATT.toString();

  var Defense = $("Defense");
  Defense.innerHTML = obj_hero.DEF.toString();

  var HP = $("HP");
  HP.innerHTML = obj_hero.HP.toString();

  var YellowKey = $("YellowKey");
  YellowKey.innerHTML = obj_hero.KEY_YELLOW.toString();

  var BluewKey = $("BlueKey");
  BluewKey.innerHTML = obj_hero.KEY_BLUE.toString();

  var RedKey = $("RedKey");
  RedKey.innerHTML = obj_hero.KEY_RED.toString();
  var RedKey = $("Floor");
  RedKey.innerHTML = obj_hero.now_floor.toString();
}
function door_cutover(option){
  play_floor();
}
