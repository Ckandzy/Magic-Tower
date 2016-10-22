// 工具函数
function $(argument){
  return document.getElementById(argument);
}
function getIdByPos(pos){
	return "x"+pos.x+"y"+pos.y;
}
//将对应坐标点div变为英雄
function changeToHero(pos){
  var hero = document.createElement("div");
  hero.setAttribute("class","hero_1");
  $(getIdByPos(pos)).appendChild(hero);
}
//将对应坐标点div变成道路
function changeToRoad(map_element,pos){
  var parentnote = $(getIdByPos(pos)).firstChild;
  $(getIdByPos(pos)).removeChild(parentnote);
  map_element[(pos.y)*13+pos.x] = 0;
}
