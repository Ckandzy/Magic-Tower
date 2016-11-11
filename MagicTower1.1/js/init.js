// 地图初始化
var FLOOR_COUNT = 6;
//地形初始化函数
function init_map(map){
  var map_level_1 = document.getElementById("map_level_1");
  map_level_1.style.display = "block";
  for(var i = 0;i < 169; i++){
    var place;
    if(map[i] == 0)
    {
      place = document.createElement("div");
      place.setAttribute("class","road");
      place.id = "x"+i%13+"y"+Math.floor(i/13);
      map_level_1.appendChild(place);
    }
    else if(map[i] == 1){
      place = document.createElement("div");
      place.setAttribute("class","wall");
      place.id = "x"+i%13+"y"+Math.floor(i/13);
      map_level_1.appendChild(place);
    }
  }
}
//战斗画面canvas模块
function draw_fight(){
  var hero_image = new Image();
  var brick_image = new Image();
  var map_level_2 = $("map_level_2");
  map_level_2.style.display = "none";
  var canvas = $("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 416;
  canvas.height = 416;
  ctx.save();
  ctx.rect(72,30,64,64);
  ctx.rect(280,30,64,64);
  ctx.font="700 20px Microsoft YaHei";
  ctx.textAlign="center";
  ctx.fillText("NAME",208,153);
  ctx.font="700 15px Microsoft YaHei";
  ctx.fillText("HP",208,202);
  ctx.fillText("ATT",208,232);
  ctx.fillText("DEF",208,262);
  ctx.stroke();
  ctx.restore();
  brick_image.src = "./images/Brick.png";
  brick_image.onload =  function()
  {
      ctx.drawImage(brick_image, 0, 0, 32, 32, 72, 30, 32, 32);
      ctx.drawImage(brick_image, 0, 0, 32, 32, 72, 62, 32, 32);
      ctx.drawImage(brick_image, 0, 0, 32, 32, 104, 30, 32, 32);
      ctx.drawImage(brick_image, 0, 0, 32, 32, 104, 62, 32, 32);
      ctx.drawImage(brick_image, 0, 0, 32, 32, 280, 30, 32, 32);
      ctx.drawImage(brick_image, 0, 0, 32, 32, 280, 62, 32, 32);
      ctx.drawImage(brick_image, 0, 0, 32, 32, 312, 30, 32, 32);
      ctx.drawImage(brick_image, 0, 0, 32, 32, 312, 62, 32, 32);
  }
  hero_image.src = "./images/Hero.png";
  hero_image.onload =  function()
  {
      ctx.drawImage(hero_image, 0, 0, 32, 32, 88, 46, 32, 32);
  }
}
//商店界面模块
function draw_store(){
  var canvas = $("canvas_events");
  var ctx = canvas.getContext("2d");
  var map_level_3 = $("map_level_3");
  map_level_3.style.display = "none";
  canvas.width = 416;
  canvas.height = 416;
  ctx.save();
  ctx.font="600 20px 宋体";
  ctx.fillText("你要来搞点什么事情,25块搞一次。",50,70);
  ctx.fillText("加 3 点攻击        [Q]",100,120);
  ctx.fillText("加 3 点防御        [W]",100,170);
  ctx.fillText("买 1000 Blood   [E]",100,220);
  ctx.fillText("先走一步            [R]",100,270);
  ctx.stroke();
  ctx.restore();
}
//战斗画面开关
function switch_fight_interface(){
  var map_level_1 = $("map_level_1");
  var map_level_2 = $("map_level_2");
  map_level_1.style.display = (map_level_1.style.display == "block" ? "none" : "block");
  map_level_2.style.display = (map_level_2.style.display == "block" ? "none" : "block");
}
//商店画面开关
function switch_store_interface(){
  var map_level_1 = $("map_level_1");
  var map_level_3 = $("map_level_3");
  map_level_1.style.display = (map_level_1.style.display == "block" ? "none" : "block");
  map_level_3.style.display = (map_level_3.style.display == "block" ? "none" : "block");
}
//战斗画面数据
function fight_data(obj_monster){
  var canvas = $("canvas");
  var ctx = canvas.getContext("2d");
  ctx.font = "700 20px Microsoft YaHei";
  ctx.textAlign = "center";
  ctx.clearRect(50, 100, 110, 350);
  ctx.clearRect(252, 100, 110, 350);
  ctx.fillText(obj_hero.NAME, 104, 152);
  ctx.fillText(obj_monster.NAME, 312, 152);
  ctx.font = "700 15px Microsoft YaHei";
  ctx.fillText(obj_hero.HP.toString(), 104, 202);
  ctx.fillText(obj_hero.ATT.toString(), 104, 232);
  ctx.fillText(obj_hero.DEF.toString(), 104, 262);
  ctx.fillText(obj_monster.HP.toString(), 312, 202);
  ctx.fillText(obj_monster.ATT.toString(), 312, 232);
  ctx.fillText(obj_monster.DEF.toString(), 312, 262);
}
var monster_group = new monster_group();
for(var i = 1; i <= FLOOR_COUNT; i++){
  var map_event = eval("map_event_" + i.toString());
  monster_group["event_floor_" + i.toString()] = new Array();
  init_event(map_event,monster_group["event_floor_" + i.toString()]);
}
draw_fight();//绘制战斗界面并隐藏
draw_store();//绘制商店界面并隐藏
bgm_sound();//背景bgm初始化
init_map(map_1);//地形初始化
map_event_display(map_event_1);//事件地图初始化
setInterval("refresh()", 100);//左边栏刷新
setInterval("sequence_frame()",300);//地图序列帧动画
// setInterval(function(){
//   if(monster_group[""])
// },100)
