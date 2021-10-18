gdjs.helpCode = {};
gdjs.helpCode.GDhelpObjects1= [];
gdjs.helpCode.GDhelpObjects2= [];
gdjs.helpCode.GDbackObjects1= [];
gdjs.helpCode.GDbackObjects2= [];
gdjs.helpCode.GDhelp1Objects1= [];
gdjs.helpCode.GDhelp1Objects2= [];
gdjs.helpCode.GDhelp2Objects1= [];
gdjs.helpCode.GDhelp2Objects2= [];
gdjs.helpCode.GDNewObjectObjects1= [];
gdjs.helpCode.GDNewObjectObjects2= [];

gdjs.helpCode.conditionTrue_0 = {val:false};
gdjs.helpCode.condition0IsTrue_0 = {val:false};
gdjs.helpCode.condition1IsTrue_0 = {val:false};
gdjs.helpCode.condition2IsTrue_0 = {val:false};


gdjs.helpCode.mapOfGDgdjs_46helpCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.helpCode.GDbackObjects1});gdjs.helpCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.helpCode.GDbackObjects1);

gdjs.helpCode.condition0IsTrue_0.val = false;
gdjs.helpCode.condition1IsTrue_0.val = false;
{
gdjs.helpCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.helpCode.mapOfGDgdjs_46helpCode_46GDbackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.helpCode.condition0IsTrue_0.val ) {
{
gdjs.helpCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.helpCode.condition1IsTrue_0.val) {
/* Reuse gdjs.helpCode.GDbackObjects1 */
{for(var i = 0, len = gdjs.helpCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.helpCode.GDbackObjects1[i].setAnimationName("backhover");
}
}}

}


{


gdjs.helpCode.condition0IsTrue_0.val = false;
{
gdjs.helpCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.helpCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.helpCode.GDbackObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}{for(var i = 0, len = gdjs.helpCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.helpCode.GDbackObjects1[i].setAnimationName("back");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.helpCode.GDNewObjectObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.helpCode.GDNewObjectObjects1.length !== 0 ? gdjs.helpCode.GDNewObjectObjects1[0] : null), true, "", 0);
}}

}


};

gdjs.helpCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.helpCode.GDhelpObjects1.length = 0;
gdjs.helpCode.GDhelpObjects2.length = 0;
gdjs.helpCode.GDbackObjects1.length = 0;
gdjs.helpCode.GDbackObjects2.length = 0;
gdjs.helpCode.GDhelp1Objects1.length = 0;
gdjs.helpCode.GDhelp1Objects2.length = 0;
gdjs.helpCode.GDhelp2Objects1.length = 0;
gdjs.helpCode.GDhelp2Objects2.length = 0;
gdjs.helpCode.GDNewObjectObjects1.length = 0;
gdjs.helpCode.GDNewObjectObjects2.length = 0;

gdjs.helpCode.eventsList0(runtimeScene);
return;

}

gdjs['helpCode'] = gdjs.helpCode;
