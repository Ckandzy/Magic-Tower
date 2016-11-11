// 事件触发
//开门，打怪，吃道具
function eventTrigger(nowPos){
  var map_event = eval('(' + ("map_event_"+obj_hero.now_floor).toString() + ')');
  if($(getIdByPos(nowPos)).firstChild.className === "S_1"){
     obj_hero.now_floor++;
     door_cutover(1);
     $("menu").removeChild($("map_level_1"));
     var new_interface = document.createElement("div");
     $("menu").appendChild(new_interface);
     new_interface.id = "map_level_1";
     new_interface.style = "width:416px;height:416px;display:inline-block;";
     obj_hero.x = floor_hero[obj_hero.now_floor-1].x_up;
     obj_hero.y = floor_hero[obj_hero.now_floor-1].y_up;
     init_map(eval('(' + ("map_"+obj_hero.now_floor).toString() + ')'));
     map_event_display(eval('(' + ("map_event_"+obj_hero.now_floor).toString() + ')'));
     return 0;
  }
  if($(getIdByPos(nowPos)).firstChild.className === "S_2"){
     obj_hero.now_floor--;
     door_cutover(0);
     $("menu").removeChild($("map_level_1"));
     var new_interface = document.createElement("div");
     $("menu").appendChild(new_interface);
     new_interface.id = "map_level_1";
     new_interface.style = "width:416px;height:416px;display:inline-block;";
     obj_hero.x = floor_hero[obj_hero.now_floor-1].x_down;
     obj_hero.y = floor_hero[obj_hero.now_floor-1].y_down;
     init_map(eval('(' + ("map_"+obj_hero.now_floor).toString() + ')'));
     map_event_display(eval('(' + ("map_event_"+obj_hero.now_floor).toString() + ')'));
     return 0;
  }
  if($(getIdByPos(nowPos)).firstChild.className === "T_5_1"){
    changeToRoad(map_event,obj_hero);
    changeToRoad(map_event,nowPos);
    obj_hero.x = obj_hero.x + direction.x;
    obj_hero.y = obj_hero.y + direction.y;
    changeToHero(nowPos);
    obj_hero.KEY_YELLOW++;
  }
  if($(getIdByPos(nowPos)).firstChild.className === "T_5_2"){
    changeToRoad(map_event,obj_hero);
    changeToRoad(map_event,nowPos);
    obj_hero.x = obj_hero.x + direction.x;
    obj_hero.y = obj_hero.y + direction.y;
    changeToHero(nowPos);
    obj_hero.KEY_BLUE++;
  }
  if($(getIdByPos(nowPos)).firstChild.className === "T_5_3"){
    changeToRoad(map_event,obj_hero);
    changeToRoad(map_event,nowPos);
    obj_hero.x = obj_hero.x + direction.x;
    obj_hero.y = obj_hero.y + direction.y;
    changeToHero(nowPos);
    obj_hero.KEY_RED++;
  }
  if($(getIdByPos(nowPos)).firstChild.className === "T_5_4"){
    changeToRoad(map_event,obj_hero);
    changeToRoad(map_event,nowPos);
    obj_hero.x = obj_hero.x + direction.x;
    obj_hero.y = obj_hero.y + direction.y;
    changeToHero(nowPos);
    obj_hero.KEY_YELLOW++;
    obj_hero.KEY_BLUE++;
    obj_hero.KEY_RED++;
  }
  if($(getIdByPos(nowPos)).firstChild.className === "T_22_1"){
    changeToRoad(map_event,obj_hero);
    changeToRoad(map_event,nowPos);
    obj_hero.x = obj_hero.x + direction.x;
    obj_hero.y = obj_hero.y + direction.y;
    changeToHero(nowPos);
    obj_hero.HP = obj_hero.HP + 200;
  }
  if($(getIdByPos(nowPos)).firstChild.className === "T_22_2"){
    changeToRoad(map_event,obj_hero);
    changeToRoad(map_event,nowPos);
    obj_hero.x = obj_hero.x + direction.x;
    obj_hero.y = obj_hero.y + direction.y;
    changeToHero(nowPos);
    obj_hero.HP = obj_hero.HP + 500;
  }
  if($(getIdByPos(nowPos)).firstChild.className === "T_23_1"){
    changeToRoad(map_event,obj_hero);
    changeToRoad(map_event,nowPos);
    obj_hero.x = obj_hero.x + direction.x;
    obj_hero.y = obj_hero.y + direction.y;
    changeToHero(nowPos);
    obj_hero.ATT = obj_hero.ATT+10;
  }
  if($(getIdByPos(nowPos)).firstChild.className === "T_23_3"){
    changeToRoad(map_event,obj_hero);
    changeToRoad(map_event,nowPos);
    obj_hero.x = obj_hero.x + direction.x;
    obj_hero.y = obj_hero.y + direction.y;
    changeToHero(nowPos);
    obj_hero.DEF = obj_hero.DEF+10;
  }
  if($(getIdByPos(nowPos)).firstChild.className === "T_24_1"){
    changeToRoad(map_event,obj_hero);
    changeToRoad(map_event,nowPos);
    obj_hero.x = obj_hero.x + direction.x;
    obj_hero.y = obj_hero.y + direction.y;
    changeToHero(nowPos);
    obj_hero.ATT = obj_hero.ATT + 3;
  }
  if($(getIdByPos(nowPos)).firstChild.className === "T_24_2"){
    changeToRoad(map_event,obj_hero);
    changeToRoad(map_event,nowPos);
    obj_hero.x = obj_hero.x + direction.x;
    obj_hero.y = obj_hero.y + direction.y;
    changeToHero(nowPos);
    obj_hero.DEF = obj_hero.DEF + 3;
  }
}
function determine_doors(nowPos){
  var map_event = eval('(' + ("map_event_"+obj_hero.now_floor).toString() + ')');
  if($(getIdByPos(nowPos)).firstChild.className === "D_1"){
      if(obj_hero.KEY_YELLOW > 0){
        changeToRoad(map_event,obj_hero);
        changeToRoad(map_event,nowPos);
        obj_hero.x = obj_hero.x + direction.x;
        obj_hero.y = obj_hero.y + direction.y;
        changeToHero(nowPos);
        obj_hero.KEY_YELLOW--;
        door();
    }
  }
  if($(getIdByPos(nowPos)).firstChild.className === "D_2"){
      if(obj_hero.KEY_BLUE > 0){
        changeToRoad(map_event,obj_hero);
        changeToRoad(map_event,nowPos);
        obj_hero.x = obj_hero.x + direction.x;
        obj_hero.y = obj_hero.y + direction.y;
        changeToHero(nowPos);
        obj_hero.KEY_BLUE--;
        door();
    }
  }
  if($(getIdByPos(nowPos)).firstChild.className === "D_3"){
      if(obj_hero.KEY_RED > 0){
        changeToRoad(map_event,obj_hero);
        changeToRoad(map_event,nowPos);
        obj_hero.x = obj_hero.x + direction.x;
        obj_hero.y = obj_hero.y + direction.y;
        changeToHero(nowPos);
        obj_hero.KEY_RED--;
        door();
    }
  }
  if($(getIdByPos(nowPos)).firstChild.className === "D_6_2"){
    switch_store_interface();
    now_status = 3;
  }
}
