//属性文件
function monster_group(){
    //存放每层怪物的对象数组
}
function hero(){
  this.NAME = "善于搞事"
  this.ATT = 10000; //攻击
  this.DEF = 1000; //防御
  this.HP = 1000;//生命
  this.KEY_YELLOW = 0;//黄钥匙
  this.KEY_BLUE = 0;//蓝钥匙
  this.KEY_RED = 0;//红钥匙
  this.x = 6;//英雄所在坐标位置
  this.y = 11;
  this.now_floor = 1;//英雄所在层数
  this.money = 0;
}
//TYPE:攻击种类[0普通][1连击][2破甲][3魔法][4嗜血][5尖刺][6中毒][8圣盾]
function M_6_1(){
  this.NAME = "绿色史莱姆"
  this.CRT = 0.05;              //CritRate暴击几率
  this.Type = 0;
  this.HP = 35;
  this.ATT = 18;
  this.DEF = 1;
  this.GOLD = 1;
  this.EXP = 1;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_6_2(){
  this.NAME = "红色史莱姆"
  this.CRT = 0.05;
  this.Type = 0;
  this.HP = 45;
  this.ATT = 20;
  this.DEF = 2;
  this.GOLD = 2;
  this.EXP = 2;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_6_3(){
  this.NAME = "变异史莱姆"
  this.CRT = 0.05;
  this.Type = 6;
  this.HP = 130;
  this.ATT = 60;
  this.DEF = 3;
  this.GOLD = 8;
  this.EXP = 8;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_6_4(){
  this.NAME = "史莱姆国王"
  this.CRT = 0.05;
  this.Type = 6;
  this.HP = 130;
  this.ATT = 60;
  this.DEF = 3;
  this.GOLD = 8;
  this.EXP = 8;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
// 骷髅类怪物
function M_7_1(){
  this.NAME = "骷髅"
  this.CRT = 0.05;
  this.Type = 2;
  this.HP = 50;
  this.ATT = 42;
  this.DEF = 6;
  this.GOLD = 6;
  this.EXP = 6;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_7_2(){
  this.NAME = "骷髅士兵"
  this.CRT = 0.05;
  this.Type = 2;
  this.HP = 55;
  this.ATT = 52;
  this.DEF = 12;
  this.GOLD = 8;
  this.EXP = 8;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_7_3(){
  this.NAME = "骷髅勇士"
  this.CRT = 0.05;
  this.Type = 2;
  this.HP = 100;
  this.ATT = 65;
  this.DEF = 15;
  this.GOLD = 30;
  this.EXP = 30;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_7_4(){
  this.NAME = "冥血骷髅"
  this.CRT = 0.05;
  this.Type = 2;
  this.HP = 220;
  this.ATT = 180;
  this.DEF = 30;
  this.GOLD = 35;
  this.EXP = 35;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
// 法师类
function M_8_1(){
  this.NAME = "膜法师"
  this.CRT = 0.05;
  this.Type = 3;
  this.HP = 125;
  this.ATT = 50;
  this.DEF = 25;
  this.GOLD = 7;
  this.EXP = 7;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_8_2(){
  this.NAME = "首席膜法师"
  this.CRT = 0.05;
  this.Type = 3;
  this.HP = 400;
  this.ATT = 260;
  this.DEF = 47;
  this.GOLD = 45;
  this.EXP = 45;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_8_3(){
  this.NAME = "占卜师"
  this.CRT = 0.05;
  this.Type = 3;
  this.HP = 400;
  this.ATT = 260;
  this.DEF = 47;
  this.GOLD = 45;
  this.EXP = 45;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_8_4(){
  this.NAME = "大预言家"
  this.CRT = 0.05;
  this.Type = 3;
  this.HP = 400;
  this.ATT = 260;
  this.DEF = 47;
  this.GOLD = 45;
  this.EXP = 45;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
// 蝙蝠类怪物
function M_9_1(){
  this.NAME = "小蝙蝠"
  this.CRT = 0.05;
  this.Type = 4;
  this.HP = 35;
  this.ATT = 38;
  this.DEF = 3;
  this.GOLD = 3;
  this.EXP = 3;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_9_2(){
  this.NAME = "大蝙蝠"
  this.CRT = 0.05;
  this.Type = 4;
  this.HP = 60;
  this.ATT = 100;
  this.DEF = 8;
  this.GOLD = 12;
  this.EXP = 12;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_9_3(){
  this.NAME = "吸血蝙蝠"
  this.CRT = 0.05;
  this.Type = 4;
  this.HP = 200;
  this.ATT = 390;
  this.DEF = 90;
  this.GOLD = 50;
  this.EXP = 50;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
// 兽人类
function M_10_1(){
  this.NAME = "野蛮人"
  this.CRT = 0.05;
  this.Type = 5;
  this.HP = 300;
  this.ATT = 75;
  this.DEF = 45;
  this.GOLD = 10;
  this.EXP = 10;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_10_2(){
  this.NAME = "蛮族勇士"
  this.CRT = 0.05;
  this.Type = 5;
  this.HP = 900;
  this.ATT = 450;
  this.DEF = 330;
  this.GOLD = 50;
  this.EXP = 50;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_10_2(){
  this.NAME = "变异蛮妖"
  this.CRT = 0.05;
  this.Type = 5;
  this.HP = 900;
  this.ATT = 450;
  this.DEF = 330;
  this.GOLD = 50;
  this.EXP = 50;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_10_2(){
  this.NAME = "嗜血蛮妖"
  this.CRT = 0.05;
  this.Type = 4;
  this.HP = 900;
  this.ATT = 450;
  this.DEF = 330;
  this.GOLD = 50;
  this.EXP = 50;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
//  卫兵类
function M_11_1(){
  this.NAME = "精甲卫兵"
  this.CRT = 0.05;
  this.Type = 7;
  this.HP = 450;
  this.ATT = 150;
  this.DEF = 90;
  this.GOLD = 22;
  this.EXP = 22;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_11_2(){
  this.NAME = "冥血卫兵"
  this.CRT = 0.05;
  this.Type = 7;
  this.HP = 1250;
  this.ATT = 500;
  this.DEF = 400;
  this.GOLD = 55;
  this.EXP = 55;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
//骑士类
function M_12_1(){
  this.NAME = "见习骑士"
  this.CRT = 0.05;
  this.Type = 1;
  this.HP = 850;
  this.ATT = 350;
  this.DEF = 200;
  this.GOLD = 45;
  this.EXP = 45;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_12_2(){
  this.NAME = "皇家骑士"
  this.CRT = 0.05;
  this.Type = 1;
  this.HP = 900;
  this.ATT = 750;
  this.DEF = 650;
  this.GOLD = 77;
  this.EXP = 77;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_12_3(){
  this.NAME = "湛蓝"
  this.CRT = 0.05;
  this.Type = 1;
  this.HP = 900;
  this.ATT = 750;
  this.DEF = 650;
  this.GOLD = 77;
  this.EXP = 77;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
//守塔家族 黑·系列
function M_13_1(){
  this.NAME = "黑·武士"
  this.CRT = 0.05;
  this.Type = 2;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_13_2(){
  this.NAME = "黑·双刃"
  this.CRT = 0.05;
  this.Type = 1;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_13_3(){
  this.NAME = "黑·百夫长"
  this.CRT = 0.05;
  this.Type = 4;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_13_4(){
  this.NAME = "黑·异界长老"
  this.CRT = 0.05;
  this.Type = 3;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_13_5(){
  this.NAME = "黑·暗黑法师"
  this.CRT = 0.05;
  this.Type = 3;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_13_6(){
  this.NAME = "黑·暗黑女巫"
  this.CRT = 0.05;
  this.Type = 3;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_13_7(){
  this.NAME = "黑·嗜血之镰"
  this.CRT = 0.05;
  this.Type = 4;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
//石系怪物
function M_14_1(){
  this.NAME = "熔岩巨兽"
  this.CRT = 0.05;
  this.Type = 8;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_14_2(){
  this.NAME = "钢铁巨兽"
  this.CRT = 0.05;
  this.Type = 8;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_14_3(){
  this.NAME = "花岗岩巨兽"
  this.CRT = 0.05;
  this.Type = 8;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_14_4(){
  this.NAME = "钢铁之心"
  this.CRT = 0.05;
  this.Type = 8;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
//守塔家族 魔教
function M_15_1(){
  this.NAME = "魔·初阶教徒"
  this.CRT = 0.05;
  this.Type = 3;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_15_2(){
  this.NAME = "魔·高阶教徒"
  this.CRT = 0.05;
  this.Type = 3;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_15_3(){
  this.NAME = "魔·护法"
  this.CRT = 0.05;
  this.Type = 3;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_15_4(){
  this.NAME = "魔·精英教徒"
  this.CRT = 0.05;
  this.Type = 3;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_15_5(){
  this.NAME = "魔·执道者"
  this.CRT = 0.05;
  this.Type = 3;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_15_6(){
  this.NAME = "魔·教主"
  this.CRT = 0.05;
  this.Type = 3;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
//不死族
function M_16_1(){
  this.NAME = "不死战士"
  this.CRT = 0.05;
  this.Type = 7;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
function M_16_2(){
  this.NAME = "不死勇者"
  this.CRT = 0.05;
  this.Type = 7;
  this.HP = 1500;
  this.ATT = 11;
  this.DEF = 460;
  this.GOLD = 60;
  this.EXP = 60;
  this.x = 0;
  this.y = 0;
  this.now_floor = 0;
}
var floor_hero = [{x_down:6,y_down:2},{x_up:6,y_up:10,x_down:2,y_down:1},
  {x_up:1,y_up:2,x_down:1,y_down:10},{x_up:2,y_up:11,x_down:11,y_down:10},
  {x_up:11,y_up:10,x_down:1,y_down:10},{x_up:1,y_up:10,x_down:10,y_down:10},
  {x_up:10,y_up:10,x_down:5,y_down:10}];
