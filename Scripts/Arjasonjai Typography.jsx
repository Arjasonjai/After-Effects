// #include "D:/Programming/After Effects/HelpEssentials-RoboHelp-ExtendScript-Library/lib.jsxinc"
// function runOnEvent(parameter){
// Code starts with library

(function(thisObj){
   scriptBuildUI(thisObj)

   function scriptBuildUI(thisObj) {
      var win = (thisObj instanceof Panel) ? thisObj : new Window("palette", "ScriptUI Template", undefined);
		win.spacing = 5;
    // win.orientation = "column";
    
      // Drop Down
      var groupTwo = win.add("group", undefined, "GroupTwo");
      groupTwo.orientation = "row";

      var dd = groupTwo.add("dropdownlist", undefined, ["Blur In", "Big Bounce", "Bounce 1", "Animationizer", "IN and OUT"]);  
			dd.selection = 0;
      groupTwo.add("statictext", undefined, "Text Preset");

    //Button
     var groupOne = win.add("group", undefined, "GroupOne");  
		groupOne.orientation = "row";  
			
      var myText = groupOne.add ("edittext", undefined, "");
      myText.characters = 20;
      // myText.active = true;
      myText.helpTip = "Please edit your text here"
      
      var Button = groupOne.add("button", undefined, "Apply");  

            Button.onClick = function(){
              var myEditText = myText.text;
              if (dd.selection == 0){
                main('Bouncing_texts.ffx', myEditText); // FINAL FUNCTION!!!
              } else if (dd.selection == 1){
                main('Big bounce.ffx', myEditText);
              } else if (dd.selection == 2){
                main('Bounce Text Preset IN - 228.ffx', myEditText);
              } else if (dd.selection == 3) {
                main('Animationizer.ffx', myEditText);
              } else if (dd.selection == 4){
                main('IN OUT text animation.ffx', myEditText);
              }
              else {
                alert("There is no presets yet")
              }
                // textDetect();
            };
            
            
      // Edit Before This Line

            win.onResizing = win.onResize = function() {
			this.layout.resize();
		};

		win instanceof Window
			? (win.center(), win.show()) : (win.layout.layout(true), win.layout.resize());
	}

// Add functions below this line

// Applying Presets //
var main = function(myFX, myEditText) {

  //app.project.item.layer.property
  
  var proj = app.project;
  var folder = new Folder('C:/Program Files/Adobe/Adobe After Effects CC 2019/Support Files/Presets/User Presets/' + myFX);
  var folder1 = new Folder('C:/Program Files/Adobe/Adobe After Effects CC 2019/Support Files/Presets/500 Bounce Text Presets/IN/' + myFX);
  
  app.beginUndoGroup('apply preset');

      var Composition = proj.activeItem;
      var myTextLayer = Composition.layers.addText(myEditText);
      var myTextSource = myTextLayer.sourceText;
      var myTextDocument = myTextSource.value;
    
    // var item = proj.activeItem;
    if (folder.exists !== false) {
      myTextLayer.applyPreset(folder);
      myTextSource.setValue(myTextDocument);
    } else if (folder1.exists !== false) {
      myTextLayer.applyPreset(folder1);
      myTextSource.setValue(myTextDocument);
    }
  app.endUndoGroup();
  // return 0;
  
};
// Function "Apply presets" Ends //

/* // Detecting Text // 
function textDetect(){
  app.project.item(1).layers.property("Text").property("Source Text").setValue = (myEditText)
} */
})(this);
// }
