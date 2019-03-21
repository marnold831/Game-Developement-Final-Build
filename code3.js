gdjs.PauseMenuCode = {};
gdjs.PauseMenuCode.GDDirtWallObjects1= [];
gdjs.PauseMenuCode.GDDirtWallObjects2= [];
gdjs.PauseMenuCode.GDDirtWallObjects3= [];
gdjs.PauseMenuCode.GDDirtBlockObjects1= [];
gdjs.PauseMenuCode.GDDirtBlockObjects2= [];
gdjs.PauseMenuCode.GDDirtBlockObjects3= [];
gdjs.PauseMenuCode.GDMoneyObjects1= [];
gdjs.PauseMenuCode.GDMoneyObjects2= [];
gdjs.PauseMenuCode.GDMoneyObjects3= [];
gdjs.PauseMenuCode.GDMoneyValueObjects1= [];
gdjs.PauseMenuCode.GDMoneyValueObjects2= [];
gdjs.PauseMenuCode.GDMoneyValueObjects3= [];
gdjs.PauseMenuCode.GDHealthObjects1= [];
gdjs.PauseMenuCode.GDHealthObjects2= [];
gdjs.PauseMenuCode.GDHealthObjects3= [];
gdjs.PauseMenuCode.GDTitleObjects1= [];
gdjs.PauseMenuCode.GDTitleObjects2= [];
gdjs.PauseMenuCode.GDTitleObjects3= [];
gdjs.PauseMenuCode.GDBackBtnObjects1= [];
gdjs.PauseMenuCode.GDBackBtnObjects2= [];
gdjs.PauseMenuCode.GDBackBtnObjects3= [];
gdjs.PauseMenuCode.GDBackBtntxtObjects1= [];
gdjs.PauseMenuCode.GDBackBtntxtObjects2= [];
gdjs.PauseMenuCode.GDBackBtntxtObjects3= [];
gdjs.PauseMenuCode.GDMainMenuBtnObjects1= [];
gdjs.PauseMenuCode.GDMainMenuBtnObjects2= [];
gdjs.PauseMenuCode.GDMainMenuBtnObjects3= [];
gdjs.PauseMenuCode.GDMainMenuBtntxtObjects1= [];
gdjs.PauseMenuCode.GDMainMenuBtntxtObjects2= [];
gdjs.PauseMenuCode.GDMainMenuBtntxtObjects3= [];
gdjs.PauseMenuCode.GDStatsBtnObjects1= [];
gdjs.PauseMenuCode.GDStatsBtnObjects2= [];
gdjs.PauseMenuCode.GDStatsBtnObjects3= [];
gdjs.PauseMenuCode.GDControlsBtnObjects1= [];
gdjs.PauseMenuCode.GDControlsBtnObjects2= [];
gdjs.PauseMenuCode.GDControlsBtnObjects3= [];
gdjs.PauseMenuCode.GDStatsBtntxtObjects1= [];
gdjs.PauseMenuCode.GDStatsBtntxtObjects2= [];
gdjs.PauseMenuCode.GDStatsBtntxtObjects3= [];
gdjs.PauseMenuCode.GDControlBtntxtObjects1= [];
gdjs.PauseMenuCode.GDControlBtntxtObjects2= [];
gdjs.PauseMenuCode.GDControlBtntxtObjects3= [];

gdjs.PauseMenuCode.conditionTrue_0 = {val:false};
gdjs.PauseMenuCode.condition0IsTrue_0 = {val:false};
gdjs.PauseMenuCode.condition1IsTrue_0 = {val:false};


gdjs.PauseMenuCode.eventsList0x6881b0 = function(runtimeScene) {

{


gdjs.PauseMenuCode.condition0IsTrue_0.val = false;
{
gdjs.PauseMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PauseMenuCode.condition0IsTrue_0.val) {
{}{gdjs.evtTools.window.setCanvasSize(runtimeScene, 870, 620, false);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.8, "", 0);
}}

}


}; //End of gdjs.PauseMenuCode.eventsList0x6881b0
gdjs.PauseMenuCode.mapOfGDgdjs_46PauseMenuCode_46GDBackBtnObjects2Objects = Hashtable.newFrom({"BackBtn": gdjs.PauseMenuCode.GDBackBtnObjects2});gdjs.PauseMenuCode.eventsList0x7ce730 = function(runtimeScene) {

{


gdjs.PauseMenuCode.condition0IsTrue_0.val = false;
{
gdjs.PauseMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.PauseMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.PauseMenuCode.eventsList0x7ce730
gdjs.PauseMenuCode.mapOfGDgdjs_46PauseMenuCode_46GDMainMenuBtnObjects2Objects = Hashtable.newFrom({"MainMenuBtn": gdjs.PauseMenuCode.GDMainMenuBtnObjects2});gdjs.PauseMenuCode.eventsList0x69d680 = function(runtimeScene) {

{


gdjs.PauseMenuCode.condition0IsTrue_0.val = false;
{
gdjs.PauseMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.PauseMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


}; //End of gdjs.PauseMenuCode.eventsList0x69d680
gdjs.PauseMenuCode.mapOfGDgdjs_46PauseMenuCode_46GDStatsBtnObjects2Objects = Hashtable.newFrom({"StatsBtn": gdjs.PauseMenuCode.GDStatsBtnObjects2});gdjs.PauseMenuCode.eventsList0x685828 = function(runtimeScene) {

{


gdjs.PauseMenuCode.condition0IsTrue_0.val = false;
{
gdjs.PauseMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.PauseMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Stats");
}}

}


}; //End of gdjs.PauseMenuCode.eventsList0x685828
gdjs.PauseMenuCode.mapOfGDgdjs_46PauseMenuCode_46GDControlsBtnObjects1Objects = Hashtable.newFrom({"ControlsBtn": gdjs.PauseMenuCode.GDControlsBtnObjects1});gdjs.PauseMenuCode.eventsList0x69ccf0 = function(runtimeScene) {

{


gdjs.PauseMenuCode.condition0IsTrue_0.val = false;
{
gdjs.PauseMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.PauseMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Controls");
}}

}


}; //End of gdjs.PauseMenuCode.eventsList0x69ccf0
gdjs.PauseMenuCode.eventsList0x69cf18 = function(runtimeScene) {

{

gdjs.PauseMenuCode.GDBackBtnObjects2.createFrom(runtimeScene.getObjects("BackBtn"));

gdjs.PauseMenuCode.condition0IsTrue_0.val = false;
{
gdjs.PauseMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseMenuCode.mapOfGDgdjs_46PauseMenuCode_46GDBackBtnObjects2Objects, runtimeScene, true, false);
}if (gdjs.PauseMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PauseMenuCode.eventsList0x7ce730(runtimeScene);} //End of subevents
}

}


{

gdjs.PauseMenuCode.GDMainMenuBtnObjects2.createFrom(runtimeScene.getObjects("MainMenuBtn"));

gdjs.PauseMenuCode.condition0IsTrue_0.val = false;
{
gdjs.PauseMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseMenuCode.mapOfGDgdjs_46PauseMenuCode_46GDMainMenuBtnObjects2Objects, runtimeScene, true, false);
}if (gdjs.PauseMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PauseMenuCode.eventsList0x69d680(runtimeScene);} //End of subevents
}

}


{

gdjs.PauseMenuCode.GDStatsBtnObjects2.createFrom(runtimeScene.getObjects("StatsBtn"));

gdjs.PauseMenuCode.condition0IsTrue_0.val = false;
{
gdjs.PauseMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseMenuCode.mapOfGDgdjs_46PauseMenuCode_46GDStatsBtnObjects2Objects, runtimeScene, true, false);
}if (gdjs.PauseMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PauseMenuCode.eventsList0x685828(runtimeScene);} //End of subevents
}

}


{

gdjs.PauseMenuCode.GDControlsBtnObjects1.createFrom(runtimeScene.getObjects("ControlsBtn"));

gdjs.PauseMenuCode.condition0IsTrue_0.val = false;
{
gdjs.PauseMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseMenuCode.mapOfGDgdjs_46PauseMenuCode_46GDControlsBtnObjects1Objects, runtimeScene, true, false);
}if (gdjs.PauseMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PauseMenuCode.eventsList0x69ccf0(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.PauseMenuCode.eventsList0x69cf18
gdjs.PauseMenuCode.eventsList0x69d480 = function(runtimeScene) {

{


{
{gdjs.evtTools.camera.setCameraX(runtimeScene, 435, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 310, "", 0);
}}

}


}; //End of gdjs.PauseMenuCode.eventsList0x69d480
gdjs.PauseMenuCode.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.PauseMenuCode.eventsList0x6881b0(runtimeScene);
}


{


gdjs.PauseMenuCode.eventsList0x69cf18(runtimeScene);
}


{


gdjs.PauseMenuCode.eventsList0x69d480(runtimeScene);
}


}; //End of gdjs.PauseMenuCode.eventsList0xb25a8


gdjs.PauseMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.PauseMenuCode.GDDirtWallObjects1.length = 0;
gdjs.PauseMenuCode.GDDirtWallObjects2.length = 0;
gdjs.PauseMenuCode.GDDirtWallObjects3.length = 0;
gdjs.PauseMenuCode.GDDirtBlockObjects1.length = 0;
gdjs.PauseMenuCode.GDDirtBlockObjects2.length = 0;
gdjs.PauseMenuCode.GDDirtBlockObjects3.length = 0;
gdjs.PauseMenuCode.GDMoneyObjects1.length = 0;
gdjs.PauseMenuCode.GDMoneyObjects2.length = 0;
gdjs.PauseMenuCode.GDMoneyObjects3.length = 0;
gdjs.PauseMenuCode.GDMoneyValueObjects1.length = 0;
gdjs.PauseMenuCode.GDMoneyValueObjects2.length = 0;
gdjs.PauseMenuCode.GDMoneyValueObjects3.length = 0;
gdjs.PauseMenuCode.GDHealthObjects1.length = 0;
gdjs.PauseMenuCode.GDHealthObjects2.length = 0;
gdjs.PauseMenuCode.GDHealthObjects3.length = 0;
gdjs.PauseMenuCode.GDTitleObjects1.length = 0;
gdjs.PauseMenuCode.GDTitleObjects2.length = 0;
gdjs.PauseMenuCode.GDTitleObjects3.length = 0;
gdjs.PauseMenuCode.GDBackBtnObjects1.length = 0;
gdjs.PauseMenuCode.GDBackBtnObjects2.length = 0;
gdjs.PauseMenuCode.GDBackBtnObjects3.length = 0;
gdjs.PauseMenuCode.GDBackBtntxtObjects1.length = 0;
gdjs.PauseMenuCode.GDBackBtntxtObjects2.length = 0;
gdjs.PauseMenuCode.GDBackBtntxtObjects3.length = 0;
gdjs.PauseMenuCode.GDMainMenuBtnObjects1.length = 0;
gdjs.PauseMenuCode.GDMainMenuBtnObjects2.length = 0;
gdjs.PauseMenuCode.GDMainMenuBtnObjects3.length = 0;
gdjs.PauseMenuCode.GDMainMenuBtntxtObjects1.length = 0;
gdjs.PauseMenuCode.GDMainMenuBtntxtObjects2.length = 0;
gdjs.PauseMenuCode.GDMainMenuBtntxtObjects3.length = 0;
gdjs.PauseMenuCode.GDStatsBtnObjects1.length = 0;
gdjs.PauseMenuCode.GDStatsBtnObjects2.length = 0;
gdjs.PauseMenuCode.GDStatsBtnObjects3.length = 0;
gdjs.PauseMenuCode.GDControlsBtnObjects1.length = 0;
gdjs.PauseMenuCode.GDControlsBtnObjects2.length = 0;
gdjs.PauseMenuCode.GDControlsBtnObjects3.length = 0;
gdjs.PauseMenuCode.GDStatsBtntxtObjects1.length = 0;
gdjs.PauseMenuCode.GDStatsBtntxtObjects2.length = 0;
gdjs.PauseMenuCode.GDStatsBtntxtObjects3.length = 0;
gdjs.PauseMenuCode.GDControlBtntxtObjects1.length = 0;
gdjs.PauseMenuCode.GDControlBtntxtObjects2.length = 0;
gdjs.PauseMenuCode.GDControlBtntxtObjects3.length = 0;

gdjs.PauseMenuCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['PauseMenuCode'] = gdjs.PauseMenuCode;
