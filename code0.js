gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDlogoObjects1= [];
gdjs.New_32sceneCode.GDlogoObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.New_32sceneCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDlogoObjects1[i].setOpacity(0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.New_32sceneCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDlogoObjects1[i].setOpacity(gdjs.New_32sceneCode.GDlogoObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 75));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.New_32sceneCode.GDlogoObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDlogoObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDlogoObjects1[i].getOpacity() >= 250 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDlogoObjects1[k] = gdjs.New_32sceneCode.GDlogoObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDlogoObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.New_32sceneCode.GDlogoObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.New_32sceneCode.GDlogoObjects1.length !== 0 ? gdjs.New_32sceneCode.GDlogoObjects1[0] : null), true, "", 0);
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDlogoObjects1.length = 0;
gdjs.New_32sceneCode.GDlogoObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
