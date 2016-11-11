// 地图事件元素初始化
var event_floor = [];
var obj_hero = new hero();
function map_event_display(map_event){
  changeToHero(obj_hero);
  for(var i = 0;i < 169; i++){
    var place = $(("x"+i%13+"y"+Math.floor(i/13)).toString());
    if(map_event[i] === "T_5_1"){
      var key = document.createElement("div");
      key.setAttribute("class","T_5_1");
      place.appendChild(key);
    }
    else if(map_event[i] === "T_5_2"){
      var key = document.createElement("div");
      key.setAttribute("class","T_5_2");
      place.appendChild(key);
    }
    else if(map_event[i] === "T_5_3"){
      var key = document.createElement("div");
      key.setAttribute("class","T_5_3");
      place.appendChild(key);
    }
    else if(map_event[i] === "T_5_4"){
      var key = document.createElement("div");
      key.setAttribute("class","T_5_4");
      place.appendChild(key);
    }
    else if(map_event[i] === "T_22_1"){
      var key = document.createElement("div");
      key.setAttribute("class","T_22_1");
      place.appendChild(key);
    }
    else if(map_event[i] === "T_22_2"){
      var key = document.createElement("div");
      key.setAttribute("class","T_22_2");
      place.appendChild(key);
    }
    else if(map_event[i] === "T_23_1"){
      var key = document.createElement("div");
      key.setAttribute("class","T_23_1");
      place.appendChild(key);
    }
    else if(map_event[i] === "T_23_3"){
      var key = document.createElement("div");
      key.setAttribute("class","T_23_3");
      place.appendChild(key);
    }
    else if(map_event[i] === "T_24_1"){
      var key = document.createElement("div");
      key.setAttribute("class","T_24_1");
      place.appendChild(key);
    }
    else if(map_event[i] === "T_24_2"){
      var key = document.createElement("div");
      key.setAttribute("class","T_24_2");
      place.appendChild(key);
    }
    else if(map_event[i] === "D_1")
    {
      var door = document.createElement("div");
      door.setAttribute("class","D_1");
      place.appendChild(door);
    }
    else if(map_event[i] === "D_2")
    {
      var door = document.createElement("div");
      door.setAttribute("class","D_2");
      place.appendChild(door);
    }
    else if(map_event[i] === "D_3")
    {
      var door = document.createElement("div");
      door.setAttribute("class","D_3");
      place.appendChild(door);
    }
    else if(map_event[i] === "D_4")
    {
      var door = document.createElement("div");
      door.setAttribute("class","D_4");
      place.appendChild(door);
    }
    else if(map_event[i] === "D_5")
    {
      var door = document.createElement("div");
      door.setAttribute("class","D_5");
      place.appendChild(door);
    }
    else if(map_event[i] === "D_6_1")
    {
      var door = document.createElement("div");
      door.setAttribute("class","D_6_1");
      place.appendChild(door);
    }
    else if(map_event[i] === "D_6_2")
    {
      var door = document.createElement("div");
      door.setAttribute("class","D_6_2");
      place.appendChild(door);
    }
    else if(map_event[i] === "D_6_3")
    {
      var door = document.createElement("div");
      door.setAttribute("class","D_6_3");
      place.appendChild(door);
    }
    else if(map_event[i] === "S_1")
    {
      var door = document.createElement("div");
      door.setAttribute("class","S_1");
      place.appendChild(door);
    }
    if(map_event[i] === "S_2")
    {
      var door = document.createElement("div");
      door.setAttribute("class","S_2");
      place.appendChild(door);
    }
    else if((isNaN(parseInt(map_event[i]))) == true)
    {
      if(map_event[i].substring(0,1) === "M"){
        var monster = document.createElement("div");
        monster.setAttribute("class",map_event[i]);
        place.appendChild(monster);
        monster.setAttribute("id","M");
      }
    }
  }
}
function init_event(map_event,event_floor){
  for(var i = 0;i < 169; i++){
    var place = $(("x"+i%13+"y"+Math.floor(i/13)).toString());
    if((isNaN(parseInt(map_event[i]))) == true)
    {
      if(map_event[i].substring(0,1) === "M"){
      var obj_monster = eval("new " + map_event[i] + "();");
      obj_monster.x = i%13;
      obj_monster.y = Math.floor(i/13);
      event_floor.push(obj_monster);
      }
    }
  }
}
