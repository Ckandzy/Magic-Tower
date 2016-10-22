// 控制英雄移动
var obj_monster;
var event_floor_position = 0;
var fight_switch;
window.onkeydown = function(event){
	// console.log(event.keyCode);
  if(is_fight == false){
    direction = {x:0,y:0};
  	switch(event.keyCode){
  		case 87: //up
  			direction.x = 0;
  			direction.y = -1;
  			break;
  		case 68: 	//right
  			direction.x = 1;
  			direction.y = 0;
  			break;
  		case 83: 	//down
  			direction.x = 0;
  			direction.y = 1;
  			break;
  		case 65:
  			direction.x = -1;
  			direction.y = 0;
  			break;
  	}
    move();
  }
}
function move(){
  var map_event = eval('(' + ("map_event_"+obj_hero.now_floor).toString() + ')');
  var nowPos={
    x:obj_hero.x+direction.x,
    y:obj_hero.y+direction.y
  }
  if($(getIdByPos(nowPos)).className == "wall")
    return 0;
  else if($(getIdByPos(nowPos)).firstChild != null){
    if($(getIdByPos(nowPos)).firstChild.id=="M"){
      // var result = fight(obj_hero,eval('(' + $(getIdByPos(nowPos)).firstChild.className + ')'));
      // if(result == 1){
      //   changeToRoad(map_event,obj_hero);
      //   changeToRoad(map_event,nowPos);
      //   object_1.x = object_1.x + direction.x;
      //   object_1.y = object_1.y + direction.y;
      //   changeToHero(nowPos);
      // }
      // else{
      //   alert("game over!");
      //   history.go(0) ;
      // }
      for(event_floor_position = 0; event_floor_position < 1000; event_floor_position++){
        if(monster_group_1.event_floor[event_floor_position].x == nowPos.x && monster_group_1.event_floor[event_floor_position].y == nowPos.y){
          obj_monster = monster_group_1.event_floor[event_floor_position];
          break;
        }
      }
        fight_switch = setInterval(function(){
        fight(map_event,nowPos);
      },350);
      switch_fight_interface();
      fight_data(monster_group_1.event_floor[event_floor_position]);
    }
    else{
      if(eventTrigger(nowPos) == 0){
        return 0;
      }
      determine_doors(nowPos);
    }
}
  else{
    changeToRoad(map_event,obj_hero);
    obj_hero.x = obj_hero.x + direction.x;
    obj_hero.y = obj_hero.y + direction.y;
    changeToHero(nowPos);
    walk();
  }
}
