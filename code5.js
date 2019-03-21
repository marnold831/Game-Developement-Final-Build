gdjs.ControlsCode = {};
gdjs.ControlsCode.GDDirtWallObjects1= [];
gdjs.ControlsCode.GDDirtWallObjects2= [];
gdjs.ControlsCode.GDDirtWallObjects3= [];
gdjs.ControlsCode.GDDirtBlockObjects1= [];
gdjs.ControlsCode.GDDirtBlockObjects2= [];
gdjs.ControlsCode.GDDirtBlockObjects3= [];
gdjs.ControlsCode.GDMoneyObjects1= [];
gdjs.ControlsCode.GDMoneyObjects2= [];
gdjs.ControlsCode.GDMoneyObjects3= [];
gdjs.ControlsCode.GDMoneyValueObjects1= [];
gdjs.ControlsCode.GDMoneyValueObjects2= [];
gdjs.ControlsCode.GDMoneyValueObjects3= [];
gdjs.ControlsCode.GDHealthObjects1= [];
gdjs.ControlsCode.GDHealthObjects2= [];
gdjs.ControlsCode.GDHealthObjects3= [];
gdjs.ControlsCode.GDTitleObjects1= [];
gdjs.ControlsCode.GDTitleObjects2= [];
gdjs.ControlsCode.GDTitleObjects3= [];
gdjs.ControlsCode.GDBackBtnObjects1= [];
gdjs.ControlsCode.GDBackBtnObjects2= [];
gdjs.ControlsCode.GDBackBtnObjects3= [];
gdjs.ControlsCode.GDBackBtntxtObjects1= [];
gdjs.ControlsCode.GDBackBtntxtObjects2= [];
gdjs.ControlsCode.GDBackBtntxtObjects3= [];
gdjs.ControlsCode.GDMainMenuBtnObjects1= [];
gdjs.ControlsCode.GDMainMenuBtnObjects2= [];
gdjs.ControlsCode.GDMainMenuBtnObjects3= [];
gdjs.ControlsCode.GDMainMenuBtntxtObjects1= [];
gdjs.ControlsCode.GDMainMenuBtntxtObjects2= [];
gdjs.ControlsCode.GDMainMenuBtntxtObjects3= [];
gdjs.ControlsCode.GDStatsBtnObjects1= [];
gdjs.ControlsCode.GDStatsBtnObjects2= [];
gdjs.ControlsCode.GDStatsBtnObjects3= [];
gdjs.ControlsCode.GDControlsBtnObjects1= [];
gdjs.ControlsCode.GDControlsBtnObjects2= [];
gdjs.ControlsCode.GDControlsBtnObjects3= [];
gdjs.ControlsCode.GDStatsBtntxtObjects1= [];
gdjs.ControlsCode.GDStatsBtntxtObjects2= [];
gdjs.ControlsCode.GDStatsBtntxtObjects3= [];
gdjs.ControlsCode.GDControlBtntxtObjects1= [];
gdjs.ControlsCode.GDControlBtntxtObjects2= [];
gdjs.ControlsCode.GDControlBtntxtObjects3= [];

gdjs.ControlsCode.conditionTrue_0 = {val:false};
gdjs.ControlsCode.condition0IsTrue_0 = {val:false};
gdjs.ControlsCode.condition1IsTrue_0 = {val:false};


gdjs.ControlsCode.eventsList0x6857a0 = function(runtimeScene) {

{


gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {
{}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}}

}


}; //End of gdjs.ControlsCode.eventsList0x6857a0
gdjs.ControlsCode.mapOfGDgdjs_46ControlsCode_46GDBackBtnObjects2Objects = Hashtable.newFrom({"BackBtn": gdjs.ControlsCode.GDBackBtnObjects2});gdjs.ControlsCode.eventsList0x69da50 = function(runtimeScene) {

{


gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.ControlsCode.eventsList0x69da50
gdjs.ControlsCode.mapOfGDgdjs_46ControlsCode_46GDMainMenuBtnObjects2Objects = Hashtable.newFrom({"MainMenuBtn": gdjs.ControlsCode.GDMainMenuBtnObjects2});gdjs.ControlsCode.eventsList0x69d718 = function(runtimeScene) {

{


gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


}; //End of gdjs.ControlsCode.eventsList0x69d718
gdjs.ControlsCode.mapOfGDgdjs_46ControlsCode_46GDStatsBtnObjects2Objects = Hashtable.newFrom({"StatsBtn": gdjs.ControlsCode.GDStatsBtnObjects2});gdjs.ControlsCode.eventsList0x69cab0 = function(runtimeScene) {

{


gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Stats");
}}

}


}; //End of gdjs.ControlsCode.eventsList0x69cab0
gdjs.ControlsCode.mapOfGDgdjs_46ControlsCode_46GDControlsBtnObjects1Objects = Hashtable.newFrom({"ControlsBtn": gdjs.ControlsCode.GDControlsBtnObjects1});gdjs.ControlsCode.eventsList0x688250 = function(runtimeScene) {

{


gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Controls");
}}

}


}; //End of gdjs.ControlsCode.eventsList0x688250
gdjs.ControlsCode.eventsList0x7ce710 = function(runtimeScene) {

{

gdjs.ControlsCode.GDBackBtnObjects2.createFrom(runtimeScene.getObjects("BackBtn"));

gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ControlsCode.mapOfGDgdjs_46ControlsCode_46GDBackBtnObjects2Objects, runtimeScene, true, false);
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ControlsCode.eventsList0x69da50(runtimeScene);} //End of subevents
}

}


{

gdjs.ControlsCode.GDMainMenuBtnObjects2.createFrom(runtimeScene.getObjects("MainMenuBtn"));

gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ControlsCode.mapOfGDgdjs_46ControlsCode_46GDMainMenuBtnObjects2Objects, runtimeScene, true, false);
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ControlsCode.eventsList0x69d718(runtimeScene);} //End of subevents
}

}


{

gdjs.ControlsCode.GDStatsBtnObjects2.createFrom(runtimeScene.getObjects("StatsBtn"));

gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ControlsCode.mapOfGDgdjs_46ControlsCode_46GDStatsBtnObjects2Objects, runtimeScene, true, false);
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ControlsCode.eventsList0x69cab0(runtimeScene);} //End of subevents
}

}


{

gdjs.ControlsCode.GDControlsBtnObjects1.createFrom(runtimeScene.getObjects("ControlsBtn"));

gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ControlsCode.mapOfGDgdjs_46ControlsCode_46GDControlsBtnObjects1Objects, runtimeScene, true, false);
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ControlsCode.eventsList0x688250(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.ControlsCode.eventsList0x7ce710
gdjs.ControlsCode.eventsList0x69d240 = function(runtimeScene) {

{


{
{gdjs.evtTools.camera.setCameraX(runtimeScene, 435, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 310, "", 0);
}}

}


}; //End of gdjs.ControlsCode.eventsList0x69d240
gdjs.ControlsCode.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.ControlsCode.eventsList0x6857a0(runtimeScene);
}


{


gdjs.ControlsCode.eventsList0x7ce710(runtimeScene);
}


{


gdjs.ControlsCode.eventsList0x69d240(runtimeScene);
}


}; //End of gdjs.ControlsCode.eventsList0xb25a8


gdjs.ControlsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.ControlsCode.GDDirtWallObjects1.length = 0;
gdjs.ControlsCode.GDDirtWallObjects2.length = 0;
gdjs.ControlsCode.GDDirtWallObjects3.length = 0;
gdjs.ControlsCode.GDDirtBlockObjects1.length = 0;
gdjs.ControlsCode.GDDirtBlockObjects2.length = 0;
gdjs.ControlsCode.GDDirtBlockObjects3.length = 0;
gdjs.ControlsCode.GDMoneyObjects1.length = 0;
gdjs.ControlsCode.GDMoneyObjects2.length = 0;
gdjs.ControlsCode.GDMoneyObjects3.length = 0;
gdjs.ControlsCode.GDMoneyValueObjects1.length = 0;
gdjs.ControlsCode.GDMoneyValueObjects2.length = 0;
gdjs.ControlsCode.GDMoneyValueObjects3.length = 0;
gdjs.ControlsCode.GDHealthObjects1.length = 0;
gdjs.ControlsCode.GDHealthObjects2.length = 0;
gdjs.ControlsCode.GDHealthObjects3.length = 0;
gdjs.ControlsCode.GDTitleObjects1.length = 0;
gdjs.ControlsCode.GDTitleObjects2.length = 0;
gdjs.ControlsCode.GDTitleObjects3.length = 0;
gdjs.ControlsCode.GDBackBtnObjects1.length = 0;
gdjs.ControlsCode.GDBackBtnObjects2.length = 0;
gdjs.ControlsCode.GDBackBtnObjects3.length = 0;
gdjs.ControlsCode.GDBackBtntxtObjects1.length = 0;
gdjs.ControlsCode.GDBackBtntxtObjects2.length = 0;
gdjs.ControlsCode.GDBackBtntxtObjects3.length = 0;
gdjs.ControlsCode.GDMainMenuBtnObjects1.length = 0;
gdjs.ControlsCode.GDMainMenuBtnObjects2.length = 0;
gdjs.ControlsCode.GDMainMenuBtnObjects3.length = 0;
gdjs.ControlsCode.GDMainMenuBtntxtObjects1.length = 0;
gdjs.ControlsCode.GDMainMenuBtntxtObjects2.length = 0;
gdjs.ControlsCode.GDMainMenuBtntxtObjects3.length = 0;
gdjs.ControlsCode.GDStatsBtnObjects1.length = 0;
gdjs.ControlsCode.GDStatsBtnObjects2.length = 0;
gdjs.ControlsCode.GDStatsBtnObjects3.length = 0;
gdjs.ControlsCode.GDControlsBtnObjects1.length = 0;
gdjs.ControlsCode.GDControlsBtnObjects2.length = 0;
gdjs.ControlsCode.GDControlsBtnObjects3.length = 0;
gdjs.ControlsCode.GDStatsBtntxtObjects1.length = 0;
gdjs.ControlsCode.GDStatsBtntxtObjects2.length = 0;
gdjs.ControlsCode.GDStatsBtntxtObjects3.length = 0;
gdjs.ControlsCode.GDControlBtntxtObjects1.length = 0;
gdjs.ControlsCode.GDControlBtntxtObjects2.length = 0;
gdjs.ControlsCode.GDControlBtntxtObjects3.length = 0;

gdjs.ControlsCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['ControlsCode'] = gdjs.ControlsCode;
