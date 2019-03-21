gdjs.StatsCode = {};
gdjs.StatsCode.GDDirtWallObjects1= [];
gdjs.StatsCode.GDDirtWallObjects2= [];
gdjs.StatsCode.GDDirtBlockObjects1= [];
gdjs.StatsCode.GDDirtBlockObjects2= [];
gdjs.StatsCode.GDMoneyObjects1= [];
gdjs.StatsCode.GDMoneyObjects2= [];
gdjs.StatsCode.GDMoneyValueObjects1= [];
gdjs.StatsCode.GDMoneyValueObjects2= [];
gdjs.StatsCode.GDHealthObjects1= [];
gdjs.StatsCode.GDHealthObjects2= [];
gdjs.StatsCode.GDTitleObjects1= [];
gdjs.StatsCode.GDTitleObjects2= [];
gdjs.StatsCode.GDtEnemieskilledObjects1= [];
gdjs.StatsCode.GDtEnemieskilledObjects2= [];
gdjs.StatsCode.GDbatsKilledObjects1= [];
gdjs.StatsCode.GDbatsKilledObjects2= [];
gdjs.StatsCode.GDslimesKilledObjects1= [];
gdjs.StatsCode.GDslimesKilledObjects2= [];
gdjs.StatsCode.GDmostMoneyObjects1= [];
gdjs.StatsCode.GDmostMoneyObjects2= [];
gdjs.StatsCode.GDtotalMoneyObjects1= [];
gdjs.StatsCode.GDtotalMoneyObjects2= [];
gdjs.StatsCode.GDtotalblocksMinedObjects1= [];
gdjs.StatsCode.GDtotalblocksMinedObjects2= [];
gdjs.StatsCode.GDtotalNullifiteObjects1= [];
gdjs.StatsCode.GDtotalNullifiteObjects2= [];
gdjs.StatsCode.GDtotalIronObjects1= [];
gdjs.StatsCode.GDtotalIronObjects2= [];
gdjs.StatsCode.GDtotalDiamondObjects1= [];
gdjs.StatsCode.GDtotalDiamondObjects2= [];
gdjs.StatsCode.GDtotalEnemiesKilledNumObjects1= [];
gdjs.StatsCode.GDtotalEnemiesKilledNumObjects2= [];
gdjs.StatsCode.GDbatsKilledNumObjects1= [];
gdjs.StatsCode.GDbatsKilledNumObjects2= [];
gdjs.StatsCode.GDslimesKilledNumObjects1= [];
gdjs.StatsCode.GDslimesKilledNumObjects2= [];
gdjs.StatsCode.GDmostMoneyNumObjects1= [];
gdjs.StatsCode.GDmostMoneyNumObjects2= [];
gdjs.StatsCode.GDtotalMoneyNumObjects1= [];
gdjs.StatsCode.GDtotalMoneyNumObjects2= [];
gdjs.StatsCode.GDtotalBlocksMinedNumObjects1= [];
gdjs.StatsCode.GDtotalBlocksMinedNumObjects2= [];
gdjs.StatsCode.GDtotalNullifiteNumObjects1= [];
gdjs.StatsCode.GDtotalNullifiteNumObjects2= [];
gdjs.StatsCode.GDtotalIronNumObjects1= [];
gdjs.StatsCode.GDtotalIronNumObjects2= [];
gdjs.StatsCode.GDtotalDiamondNumObjects1= [];
gdjs.StatsCode.GDtotalDiamondNumObjects2= [];

gdjs.StatsCode.conditionTrue_0 = {val:false};
gdjs.StatsCode.condition0IsTrue_0 = {val:false};
gdjs.StatsCode.condition1IsTrue_0 = {val:false};


gdjs.StatsCode.eventsList0x7cfdd8 = function(runtimeScene) {

{


gdjs.StatsCode.condition0IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StatsCode.condition0IsTrue_0.val) {
gdjs.StatsCode.GDbatsKilledNumObjects1.createFrom(runtimeScene.getObjects("batsKilledNum"));
gdjs.StatsCode.GDmostMoneyNumObjects1.createFrom(runtimeScene.getObjects("mostMoneyNum"));
gdjs.StatsCode.GDslimesKilledNumObjects1.createFrom(runtimeScene.getObjects("slimesKilledNum"));
gdjs.StatsCode.GDtotalBlocksMinedNumObjects1.createFrom(runtimeScene.getObjects("totalBlocksMinedNum"));
gdjs.StatsCode.GDtotalDiamondNumObjects1.createFrom(runtimeScene.getObjects("totalDiamondNum"));
gdjs.StatsCode.GDtotalEnemiesKilledNumObjects1.createFrom(runtimeScene.getObjects("totalEnemiesKilledNum"));
gdjs.StatsCode.GDtotalIronNumObjects1.createFrom(runtimeScene.getObjects("totalIronNum"));
gdjs.StatsCode.GDtotalMoneyNumObjects1.createFrom(runtimeScene.getObjects("totalMoneyNum"));
gdjs.StatsCode.GDtotalNullifiteNumObjects1.createFrom(runtimeScene.getObjects("totalNullifiteNum"));
{for(var i = 0, len = gdjs.StatsCode.GDtotalEnemiesKilledNumObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDtotalEnemiesKilledNumObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(11)));
}
}{for(var i = 0, len = gdjs.StatsCode.GDbatsKilledNumObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDbatsKilledNumObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)));
}
}{for(var i = 0, len = gdjs.StatsCode.GDslimesKilledNumObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDslimesKilledNumObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(13)));
}
}{for(var i = 0, len = gdjs.StatsCode.GDmostMoneyNumObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDmostMoneyNumObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.StatsCode.GDtotalMoneyNumObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDtotalMoneyNumObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}{for(var i = 0, len = gdjs.StatsCode.GDtotalBlocksMinedNumObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDtotalBlocksMinedNumObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}{for(var i = 0, len = gdjs.StatsCode.GDtotalNullifiteNumObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDtotalNullifiteNumObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)));
}
}{for(var i = 0, len = gdjs.StatsCode.GDtotalIronNumObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDtotalIronNumObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}{for(var i = 0, len = gdjs.StatsCode.GDtotalDiamondNumObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDtotalDiamondNumObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)));
}
}{}}

}


}; //End of gdjs.StatsCode.eventsList0x7cfdd8
gdjs.StatsCode.eventsList0x684840 = function(runtimeScene) {

{


gdjs.StatsCode.condition0IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.StatsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.StatsCode.eventsList0x684840
gdjs.StatsCode.eventsList0x69d180 = function(runtimeScene) {

{


{
{gdjs.evtTools.camera.setCameraX(runtimeScene, 435, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 310, "", 0);
}}

}


}; //End of gdjs.StatsCode.eventsList0x69d180
gdjs.StatsCode.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.StatsCode.eventsList0x7cfdd8(runtimeScene);
}


{


gdjs.StatsCode.eventsList0x684840(runtimeScene);
}


{


gdjs.StatsCode.eventsList0x69d180(runtimeScene);
}


}; //End of gdjs.StatsCode.eventsList0xb25a8


gdjs.StatsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.StatsCode.GDDirtWallObjects1.length = 0;
gdjs.StatsCode.GDDirtWallObjects2.length = 0;
gdjs.StatsCode.GDDirtBlockObjects1.length = 0;
gdjs.StatsCode.GDDirtBlockObjects2.length = 0;
gdjs.StatsCode.GDMoneyObjects1.length = 0;
gdjs.StatsCode.GDMoneyObjects2.length = 0;
gdjs.StatsCode.GDMoneyValueObjects1.length = 0;
gdjs.StatsCode.GDMoneyValueObjects2.length = 0;
gdjs.StatsCode.GDHealthObjects1.length = 0;
gdjs.StatsCode.GDHealthObjects2.length = 0;
gdjs.StatsCode.GDTitleObjects1.length = 0;
gdjs.StatsCode.GDTitleObjects2.length = 0;
gdjs.StatsCode.GDtEnemieskilledObjects1.length = 0;
gdjs.StatsCode.GDtEnemieskilledObjects2.length = 0;
gdjs.StatsCode.GDbatsKilledObjects1.length = 0;
gdjs.StatsCode.GDbatsKilledObjects2.length = 0;
gdjs.StatsCode.GDslimesKilledObjects1.length = 0;
gdjs.StatsCode.GDslimesKilledObjects2.length = 0;
gdjs.StatsCode.GDmostMoneyObjects1.length = 0;
gdjs.StatsCode.GDmostMoneyObjects2.length = 0;
gdjs.StatsCode.GDtotalMoneyObjects1.length = 0;
gdjs.StatsCode.GDtotalMoneyObjects2.length = 0;
gdjs.StatsCode.GDtotalblocksMinedObjects1.length = 0;
gdjs.StatsCode.GDtotalblocksMinedObjects2.length = 0;
gdjs.StatsCode.GDtotalNullifiteObjects1.length = 0;
gdjs.StatsCode.GDtotalNullifiteObjects2.length = 0;
gdjs.StatsCode.GDtotalIronObjects1.length = 0;
gdjs.StatsCode.GDtotalIronObjects2.length = 0;
gdjs.StatsCode.GDtotalDiamondObjects1.length = 0;
gdjs.StatsCode.GDtotalDiamondObjects2.length = 0;
gdjs.StatsCode.GDtotalEnemiesKilledNumObjects1.length = 0;
gdjs.StatsCode.GDtotalEnemiesKilledNumObjects2.length = 0;
gdjs.StatsCode.GDbatsKilledNumObjects1.length = 0;
gdjs.StatsCode.GDbatsKilledNumObjects2.length = 0;
gdjs.StatsCode.GDslimesKilledNumObjects1.length = 0;
gdjs.StatsCode.GDslimesKilledNumObjects2.length = 0;
gdjs.StatsCode.GDmostMoneyNumObjects1.length = 0;
gdjs.StatsCode.GDmostMoneyNumObjects2.length = 0;
gdjs.StatsCode.GDtotalMoneyNumObjects1.length = 0;
gdjs.StatsCode.GDtotalMoneyNumObjects2.length = 0;
gdjs.StatsCode.GDtotalBlocksMinedNumObjects1.length = 0;
gdjs.StatsCode.GDtotalBlocksMinedNumObjects2.length = 0;
gdjs.StatsCode.GDtotalNullifiteNumObjects1.length = 0;
gdjs.StatsCode.GDtotalNullifiteNumObjects2.length = 0;
gdjs.StatsCode.GDtotalIronNumObjects1.length = 0;
gdjs.StatsCode.GDtotalIronNumObjects2.length = 0;
gdjs.StatsCode.GDtotalDiamondNumObjects1.length = 0;
gdjs.StatsCode.GDtotalDiamondNumObjects2.length = 0;

gdjs.StatsCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['StatsCode'] = gdjs.StatsCode;
