gdjs.Level_323Code = {};
gdjs.Level_323Code.GDDirtWallObjects1= [];
gdjs.Level_323Code.GDDirtWallObjects2= [];
gdjs.Level_323Code.GDDirtBlockObjects1= [];
gdjs.Level_323Code.GDDirtBlockObjects2= [];
gdjs.Level_323Code.GDMoneyObjects1= [];
gdjs.Level_323Code.GDMoneyObjects2= [];
gdjs.Level_323Code.GDMoneyValueObjects1= [];
gdjs.Level_323Code.GDMoneyValueObjects2= [];
gdjs.Level_323Code.GDQuitbtnObjects1= [];
gdjs.Level_323Code.GDQuitbtnObjects2= [];
gdjs.Level_323Code.GDHealthObjects1= [];
gdjs.Level_323Code.GDHealthObjects2= [];
gdjs.Level_323Code.GDPlayerObjects1= [];
gdjs.Level_323Code.GDPlayerObjects2= [];
gdjs.Level_323Code.GDNullifiteOreObjects1= [];
gdjs.Level_323Code.GDNullifiteOreObjects2= [];
gdjs.Level_323Code.GDIronOreObjects1= [];
gdjs.Level_323Code.GDIronOreObjects2= [];
gdjs.Level_323Code.GDDiamondObjects1= [];
gdjs.Level_323Code.GDDiamondObjects2= [];
gdjs.Level_323Code.GDFlyObjects1= [];
gdjs.Level_323Code.GDFlyObjects2= [];
gdjs.Level_323Code.GDSlimeObjects1= [];
gdjs.Level_323Code.GDSlimeObjects2= [];
gdjs.Level_323Code.GDLeftBlockObjects1= [];
gdjs.Level_323Code.GDLeftBlockObjects2= [];
gdjs.Level_323Code.GDRighBlockObjects1= [];
gdjs.Level_323Code.GDRighBlockObjects2= [];
gdjs.Level_323Code.GDladderObjects1= [];
gdjs.Level_323Code.GDladderObjects2= [];
gdjs.Level_323Code.GDHealthValueObjects1= [];
gdjs.Level_323Code.GDHealthValueObjects2= [];
gdjs.Level_323Code.GDnumBlocksInSceneObjects1= [];
gdjs.Level_323Code.GDnumBlocksInSceneObjects2= [];
gdjs.Level_323Code.GDDigTimerObjects1= [];
gdjs.Level_323Code.GDDigTimerObjects2= [];
gdjs.Level_323Code.GDTimeToDigObjects1= [];
gdjs.Level_323Code.GDTimeToDigObjects2= [];
gdjs.Level_323Code.GDNumEnemiesObjects1= [];
gdjs.Level_323Code.GDNumEnemiesObjects2= [];
gdjs.Level_323Code.GDVersionNumObjects1= [];
gdjs.Level_323Code.GDVersionNumObjects2= [];
gdjs.Level_323Code.GDDebugInfoObjects1= [];
gdjs.Level_323Code.GDDebugInfoObjects2= [];
gdjs.Level_323Code.GDHoleObjects1= [];
gdjs.Level_323Code.GDHoleObjects2= [];
gdjs.Level_323Code.GDEndObjects1= [];
gdjs.Level_323Code.GDEndObjects2= [];

gdjs.Level_323Code.conditionTrue_0 = {val:false};
gdjs.Level_323Code.condition0IsTrue_0 = {val:false};
gdjs.Level_323Code.condition1IsTrue_0 = {val:false};


gdjs.Level_323Code.eventsList0x8944e8 = function(runtimeScene) {

{


gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.Level_323Code.eventsList0x8944e8
gdjs.Level_323Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.Level_323Code.eventsList0x8944e8(runtimeScene);
}


}; //End of gdjs.Level_323Code.eventsList0xb25a8


gdjs.Level_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Level_323Code.GDDirtWallObjects1.length = 0;
gdjs.Level_323Code.GDDirtWallObjects2.length = 0;
gdjs.Level_323Code.GDDirtBlockObjects1.length = 0;
gdjs.Level_323Code.GDDirtBlockObjects2.length = 0;
gdjs.Level_323Code.GDMoneyObjects1.length = 0;
gdjs.Level_323Code.GDMoneyObjects2.length = 0;
gdjs.Level_323Code.GDMoneyValueObjects1.length = 0;
gdjs.Level_323Code.GDMoneyValueObjects2.length = 0;
gdjs.Level_323Code.GDQuitbtnObjects1.length = 0;
gdjs.Level_323Code.GDQuitbtnObjects2.length = 0;
gdjs.Level_323Code.GDHealthObjects1.length = 0;
gdjs.Level_323Code.GDHealthObjects2.length = 0;
gdjs.Level_323Code.GDPlayerObjects1.length = 0;
gdjs.Level_323Code.GDPlayerObjects2.length = 0;
gdjs.Level_323Code.GDNullifiteOreObjects1.length = 0;
gdjs.Level_323Code.GDNullifiteOreObjects2.length = 0;
gdjs.Level_323Code.GDIronOreObjects1.length = 0;
gdjs.Level_323Code.GDIronOreObjects2.length = 0;
gdjs.Level_323Code.GDDiamondObjects1.length = 0;
gdjs.Level_323Code.GDDiamondObjects2.length = 0;
gdjs.Level_323Code.GDFlyObjects1.length = 0;
gdjs.Level_323Code.GDFlyObjects2.length = 0;
gdjs.Level_323Code.GDSlimeObjects1.length = 0;
gdjs.Level_323Code.GDSlimeObjects2.length = 0;
gdjs.Level_323Code.GDLeftBlockObjects1.length = 0;
gdjs.Level_323Code.GDLeftBlockObjects2.length = 0;
gdjs.Level_323Code.GDRighBlockObjects1.length = 0;
gdjs.Level_323Code.GDRighBlockObjects2.length = 0;
gdjs.Level_323Code.GDladderObjects1.length = 0;
gdjs.Level_323Code.GDladderObjects2.length = 0;
gdjs.Level_323Code.GDHealthValueObjects1.length = 0;
gdjs.Level_323Code.GDHealthValueObjects2.length = 0;
gdjs.Level_323Code.GDnumBlocksInSceneObjects1.length = 0;
gdjs.Level_323Code.GDnumBlocksInSceneObjects2.length = 0;
gdjs.Level_323Code.GDDigTimerObjects1.length = 0;
gdjs.Level_323Code.GDDigTimerObjects2.length = 0;
gdjs.Level_323Code.GDTimeToDigObjects1.length = 0;
gdjs.Level_323Code.GDTimeToDigObjects2.length = 0;
gdjs.Level_323Code.GDNumEnemiesObjects1.length = 0;
gdjs.Level_323Code.GDNumEnemiesObjects2.length = 0;
gdjs.Level_323Code.GDVersionNumObjects1.length = 0;
gdjs.Level_323Code.GDVersionNumObjects2.length = 0;
gdjs.Level_323Code.GDDebugInfoObjects1.length = 0;
gdjs.Level_323Code.GDDebugInfoObjects2.length = 0;
gdjs.Level_323Code.GDHoleObjects1.length = 0;
gdjs.Level_323Code.GDHoleObjects2.length = 0;
gdjs.Level_323Code.GDEndObjects1.length = 0;
gdjs.Level_323Code.GDEndObjects2.length = 0;

gdjs.Level_323Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Level_323Code'] = gdjs.Level_323Code;
