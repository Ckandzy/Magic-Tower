// 战斗模块
//设置战斗结束界面消失延迟
var fight_delay = 1;
//设置战斗结束移动判定延迟
var move_delay = 1;
var now_status = 0;//0为移动状态  1为战斗状态  2为商店状态
function fight(map_event,nowPos){
  var map_event = eval('(' + ("map_event_"+obj_hero.now_floor).toString() + ')');
  var hero_demage;//英雄对怪物造成伤害
  var monster_damage;//怪物对英雄造成伤害
  if(obj_hero.ATT > monster_group[event_floor][event_floor_position].DEF){
    hero_demage = obj_hero.ATT-monster_group[event_floor][event_floor_position].DEF;
  }
  else{
    hero_demage = 0;
  }
  if(monster_group[event_floor][event_floor_position].ATT > obj_hero.DEF){
    monster_demage = monster_group[event_floor][event_floor_position].ATT-obj_hero.DEF;
  }
  else{
    monster_demage = 0;
  }
  if(fight_delay == 1){
      fight_data(monster_group[event_floor][event_floor_position]);






      fight_sound();
      monster_group[event_floor][event_floor_position].HP = monster_group[event_floor][event_floor_position].HP - hero_demage;
      obj_hero.HP = obj_hero.HP - monster_demage;
      if(monster_group[event_floor][event_floor_position].HP < 0){
        monster_group[event_floor][event_floor_position].HP = 0;
        obj_hero.money += monster_group[event_floor][event_floor_position].GOLD;
      }







      fight_data(monster_group[event_floor][event_floor_position]);
      if(monster_group[event_floor][event_floor_position].HP <= 0){
        if(fight_delay != 0){
          fight_delay--;
          return 0;
        }
      }
      else{
        return 0;
      }
  }
  if(move_delay != 0){
    move_delay--;
    changeToRoad(map_event,obj_hero);
    changeToRoad(map_event,nowPos);
    obj_hero.x = obj_hero.x + direction.x;
    obj_hero.y = obj_hero.y + direction.y;
    changeToHero(nowPos);
    switch_fight_interface();
    return 0;
    }
    now_status = 0;
    clearInterval(fight_switch);
    move_delay = 1;//恢复延迟
    fight_delay = 1;//恢复延迟
    //删除这个怪物的对象//
    monster_group[event_floor].splice(event_floor_position, 1);
  if(obj_hero.HP <= 0){
    alert("game over!");
    history.go(0) ;
  }
}
