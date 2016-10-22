// 地图事件元素初始化
var event_floor = [];
var obj_hero = new hero();
// var monster_group_1 = new monster_group();
var monster_group_1 = new monster_group();
function init_event(map_event){
  changeToHero(obj_hero);
  for(var i = 0;i < 169; i++){
    var place = $(("x"+i%13+"y"+Math.floor(i/13)).toString());
    if(map_event[i] === "T_5_1"){
      var key = document.createElement("div");
      key.setAttribute("class","T_5_1");
      place.appendChild(key);
    }
    if(map_event[i] === "T_5_2"){
      var key = document.createElement("div");
      key.setAttribute("class","T_5_2");
      place.appendChild(key);
    }
    if(map_event[i] === "T_5_3"){
      var key = document.createElement("div");
      key.setAttribute("class","T_5_3");
      place.appendChild(key);
    }
    if(map_event[i] === "T_5_4"){
      var key = document.createElement("div");
      key.setAttribute("class","T_5_4");
      place.appendChild(key);
    }
    if(map_event[i] === "T_22_1"){
      var key = document.createElement("div");
      key.setAttribute("class","T_22_1");
      place.appendChild(key);
    }
    if(map_event[i] === "T_22_2"){
      var key = document.createElement("div");
      key.setAttribute("class","T_22_2");
      place.appendChild(key);
    }
    if(map_event[i] === "T_23_1"){
      var key = document.createElement("div");
      key.setAttribute("class","T_23_1");
      place.appendChild(key);
    }
    if(map_event[i] === "T_23_3"){
      var key = document.createElement("div");
      key.setAttribute("class","T_23_3");
      place.appendChild(key);
    }
    if(map_event[i] === "T_24_1"){
      var key = document.createElement("div");
      key.setAttribute("class","T_24_1");
      place.appendChild(key);
    }
    if(map_event[i] === "T_24_2"){
      var key = document.createElement("div");
      key.setAttribute("class","T_24_2");
      place.appendChild(key);
    }
    if(map_event[i] === "D_1")
    {
      var door = document.createElement("div");
      door.setAttribute("class","D_1");
      place.appendChild(door);
    }
    if(map_event[i] === "D_2")
    {
      var door = document.createElement("div");
      door.setAttribute("class","D_2");
      place.appendChild(door);
    }
    if(map_event[i] === "D_3")
    {
      var door = document.createElement("div");
      door.setAttribute("class","D_3");
      place.appendChild(door);
    }
    if(map_event[i] === "D_4")
    {
      var door = document.createElement("div");
      door.setAttribute("class","D_4");
      place.appendChild(door);
    }
    if(map_event[i] === "D_5")
    {
      var door = document.createElement("div");
      door.setAttribute("class","D_5");
      place.appendChild(door);
    }
    if(map_event[i] === "M_6_1")
    {
      var monster = document.createElement("div");
      monster.setAttribute("class","M_6_1");
      place.appendChild(monster);
      monster.setAttribute("id","M");
      // var obj_monster = new M_6_1();
      // obj_monster.x = i%13;
      // obj_monster.y = Math.floor(i/13);
      // obj_monster.now_floor = hero.now_floor;
      // monster_group_1.event_floor[obj_hero.now_floor - 1].push(obj_monster);
      var obj_monster = new M_6_1();
      obj_monster.x = i%13;
      obj_monster.y = Math.floor(i/13);
      monster_group_1.event_floor.push(obj_monster);

    }
    if(map_event[i] === "M_6_2")
    {
      var monster = document.createElement("div");
      monster.setAttribute("class","M_6_2");
      place.appendChild(monster);
      monster.setAttribute("id","M");
      var obj_monster = new M_6_2();
      obj_monster.x = i%13;
      obj_monster.y = Math.floor(i/13);
      monster_group_1.event_floor.push(obj_monster);
    }
    if(map_event[i] === "M_6_3")
    {
      var monster = document.createElement("div");
      monster.setAttribute("class","M_6_3");
      place.appendChild(monster);
      monster.setAttribute("id","M");
      var obj_monster = new M_6_3();
      obj_monster.x = i%13;
      obj_monster.y = Math.floor(i/13);
      monster_group_1.event_floor.push(obj_monster);
    }
    if(map_event[i] === "M_7_1")
    {
      var monster = document.createElement("div");
      monster.setAttribute("class","M_7_1");
      place.appendChild(monster);
      monster.setAttribute("id","M");
      var obj_monster = new M_7_1();
      obj_monster.x = i%13;
      obj_monster.y = Math.floor(i/13);
      monster_group_1.event_floor.push(obj_monster);
    }
    if(map_event[i] === "M_7_2")
    {
      var monster = document.createElement("div");
      monster.setAttribute("class","M_7_2");
      place.appendChild(monster);
      monster.setAttribute("id","M");
      var obj_monster = new M_7_2();
      obj_monster.x = i%13;
      obj_monster.y = Math.floor(i/13);
      monster_group_1.event_floor.push(obj_monster);
    }
    if(map_event[i] === "M_8_1")
    {
      var monster = document.createElement("div");
      monster.setAttribute("class","M_8_1");
      place.appendChild(monster);
      monster.setAttribute("id","M");
      var obj_monster = new M_8_1();
      obj_monster.x = i%13;
      obj_monster.y = Math.floor(i/13);
      monster_group_1.event_floor.push(obj_monster);
    }
    if(map_event[i] === "M_9_1")
    {
      var monster = document.createElement("div");
      monster.setAttribute("class","M_9_1");
      place.appendChild(monster);
      monster.setAttribute("id","M");
      var obj_monster = new M_9_1();
      obj_monster.x = i%13;
      obj_monster.y = Math.floor(i/13);
      monster_group_1.event_floor.push(obj_monster);
    }
    if(map_event[i] === "M_9_2")
    {
      var monster = document.createElement("div");
      monster.setAttribute("class","M_9_2");
      place.appendChild(monster);
      monster.setAttribute("id","M");
      var obj_monster = new M_9_2();
      obj_monster.x = i%13;
      obj_monster.y = Math.floor(i/13);
      monster_group_1.event_floor.push(obj_monster);
    }
    if(map_event[i] === "M_9_3")
    {
      var monster = document.createElement("div");
      monster.setAttribute("class","M_9_3");
      place.appendChild(monster);
      monster.setAttribute("id","M");
      var obj_monster = new M_9_3();
      obj_monster.x = i%13;
      obj_monster.y = Math.floor(i/13);
      monster_group_1.event_floor.push(obj_monster);
    }
    if(map_event[i] === "M_10_1")
    {
      var monster = document.createElement("div");
      monster.setAttribute("class","M_10_1");
      place.appendChild(monster);
      monster.setAttribute("id","M");
      var obj_monster = new M_10_1();
      obj_monster.x = i%13;
      obj_monster.y = Math.floor(i/13);
      monster_group_1.event_floor.push(obj_monster);
    }
    if(map_event[i] === "M_11_1")
    {
      var monster = document.createElement("div");
      monster.setAttribute("class","M_11_1");
      place.appendChild(monster);
      monster.setAttribute("id","M");
      var obj_monster = new M_11_1();
      obj_monster.x = i%13;
      obj_monster.y = Math.floor(i/13);
      monster_group_1.event_floor.push(obj_monster);
    }
    if(map_event[i] === "M_11_2")
    {
      var monster = document.createElement("div");
      monster.setAttribute("class","M_11_2");
      place.appendChild(monster);
      monster.setAttribute("id","M");
      var obj_monster = new M_11_2();
      obj_monster.x = i%13;
      obj_monster.y = Math.floor(i/13);
      monster_group_1.event_floor.push(obj_monster);
    }
    if(map_event[i] === "M_11_3")
    {
      var monster = document.createElement("div");
      monster.setAttribute("class","M_11_3");
      place.appendChild(monster);
      monster.setAttribute("id","M");
      var obj_monster = new M_11_3();
      obj_monster.x = i%13;
      obj_monster.y = Math.floor(i/13);
      monster_group_1.event_floor.push(obj_monster);
    }
    if(map_event[i] === "M_12_1")
    {
      var monster = document.createElement("div");
      monster.setAttribute("class","M_12_1");
      place.appendChild(monster);
      monster.setAttribute("id","M");
      var obj_monster = new M_12_1();
      obj_monster.x = i%13;
      obj_monster.y = Math.floor(i/13);
      monster_group_1.event_floor.push(obj_monster);
    }
    if(map_event[i] === "M_12_2")
    {
      var monster = document.createElement("div");
      monster.setAttribute("class","M_12_2");
      place.appendChild(monster);
      monster.setAttribute("id","M");
      var obj_monster = new M_12_2();
      obj_monster.x = i%13;
      obj_monster.y = Math.floor(i/13);
      monster_group_1.event_floor.push(obj_monster);
    }
    if(map_event[i] === "S_1")
    {
      var floor = document.createElement("div");
      floor.setAttribute("class","S_1");
      place.appendChild(floor);
    }
    if(map_event[i] === "S_2")
    {
      var floor = document.createElement("div");
      floor.setAttribute("class","S_2");
      place.appendChild(floor);
    }
  }
}
