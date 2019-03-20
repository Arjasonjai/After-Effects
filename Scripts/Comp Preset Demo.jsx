createLowerThirds();
function createLowerThirds() {

app.beginUndoGroup("exp_Comp");

try {

var tempStartingComp = app.project.activeItem;
if (!tempStartingComp || !(tempStartingComp instanceof CompItem)) {
	alert("Please select a composition first");
	return;
}


// CREATE COMPOSITIONS START
	var exp_comp = tempStartingComp;
	var lowerThirds_comp_properties = {"name":"Lower Thirds", "height":1080, "width":1920, "label":10, "bgColor":[0,0,0]/255};
	var lowerThirds_comp = app.project.items.addComp(lowerThirds_comp_properties.name, lowerThirds_comp_properties.width, lowerThirds_comp_properties.height, 1, 10.0, 29.97);
		lowerThirds_comp.bgColor = lowerThirds_comp_properties.bgColor;
		lowerThirds_comp.dropFrame = true;
        lowerThirds_comp.label = lowerThirds_comp_properties.label;
		lowerThirds_comp.workAreaDuration = 1.25;
		lowerThirds_comp.resolutionFactor = [1, 1];
// CREATE COMPOSITIONS END

//Adding composition starts
    var lowerThirds = exp_comp.layers.add(lowerThirds_comp);
    lowerThirds.label = 12;
    lowerThirds.moveToEnd();
    lowerThirds.selected = false;
// Adding composition ends

// What's inside the comp?
    // Setting text properties
	var arjasonjai = lowerThirds_comp.layers.addText("Arjasonjai");
		arjasonjai.name = "Arjasonjai";
		arjasonjai.moveToEnd();
		var arjasonjai_TextProp = arjasonjai.property("ADBE Text Properties").property("ADBE Text Document");
		var arjasonjai_TextDocument = arjasonjai_TextProp.value;
			arjasonjai_TextDocument.font = "BebasKai";
			arjasonjai_TextDocument.fontSize = 195;
			arjasonjai_TextDocument.applyFill = true;
			arjasonjai_TextDocument.fillColor = [0,150,100]/255;
			arjasonjai_TextDocument.applyStroke = false;
			arjasonjai_TextDocument.tracking = 0;
			arjasonjai_TextProp.setValue(arjasonjai_TextDocument);
		arjasonjai.property("ADBE Text Properties").property("ADBE Text Animators").addProperty("ADBE Text Animator").name = "Scale IN";
		arjasonjai.property("ADBE Text Properties").property("ADBE Text Animators").property(1).property("ADBE Text Animator Properties").addProperty("ADBE Text Scale 3D").setValue([0,0]);
		arjasonjai.property("ADBE Text Properties").property("ADBE Text Animators").property(1).property("ADBE Text Selectors").addProperty("ADBE Text Selector").name = "Animaton";
		var arjasonjaiStart = arjasonjai.property("ADBE Text Properties").property("ADBE Text Animators").property(1).property("ADBE Text Selectors").property(1).property("ADBE Text Percent Start");
			var arjasonjaiStart_keyTimesArray = [0,1.1];
			var arjasonjaiStart_valuesArray = [1,100];
			arjasonjaiStart.setValuesAtTimes(arjasonjaiStart_keyTimesArray, arjasonjaiStart_valuesArray);
			var arjasonjaiStart_easeInSpeedArray = [0,0];
			var arjasonjaiStart_easeInInfluArray = [33.333,71];
			var arjasonjaiStart_easeOutSpeedArray = [0,0];
			var arjasonjaiStart_easeOutInfluArray = [65,75];
			var arjasonjaiStart_keyInInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			var arjasonjaiStart_keyOutInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			applyEasing(arjasonjaiStart, arjasonjaiStart_keyTimesArray, [arjasonjaiStart_easeInSpeedArray, arjasonjaiStart_easeInInfluArray], [arjasonjaiStart_easeOutSpeedArray, arjasonjaiStart_easeOutInfluArray], [arjasonjaiStart_keyInInterpolationType, arjasonjaiStart_keyOutInterpolationType]);
            
		arjasonjai.property("ADBE Transform Group").property("ADBE Position").setValue([18.5,16.9]);
		arjasonjai.selected = false;

    // Shape Layer Rectangle Properties
    var shapeLayer = lowerThirds_comp.layers.addShape();
        shapeLayer.name = "Rectangle";
        shapeLayer.moveToEnd();
        shapeLayer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group").name = "My Rectangle";
        shapeLayer.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect").name = "Rect Path";
        shapeLayer.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").property(1).property("ADBE Vector Rect Size").setValue([500,500]);
        shapeLayer.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill").name = "Color";
        shapeLayer.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").property(2).property("ADBE Vector Fill Color").setValue([41,10,120]/255);
        shapeLayer.property("ADBE Root Vectors Group").property(1).property("ADBE Vector Transform Group").property("ADBE Vector Position").setValue([20,17]);
        shapeLayer.property("ADBE Effect Parade").addProperty("ADBE Slider Control").name = "Size Control";
        shapeLayer.property("ADBE Effect Parade").property(1).property("ADBE Slider Control-0001").setValue(55);
        shapeLayer.selected = false;
    // Shape Lyaer Rectangle Ends

    // Parents
        arjasonjai.setParentWithJump(shapeLayer);
    // Parents Ends

    // Expression for Text
        try {
			arjasonjai.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "a = thisComp.layer(\"Arjasonjai\").sourceRectAtTime();" + "\n" + 
				"" + "\n" + 
				"Height = a.height;" + "\n" + 
				"Width = a.width;" + "\n" + 
				"Left = a.left;" + "\n" + 
				"Top = a.top;" + "\n" + 
				"" + "\n" + 
				"x = Left+Width/2;" + "\n" + 
				"y = Top+Height/2;" + "\n" + 
				"" + "\n" + 
				"[x,y]";
		} catch (err) {
            alert(err)
        }
    // Expression for Text Ends

    // Expression for Rectangle
        try {
			shapeLayer.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "a = thisComp.layer(\"Arjasonjai\").sourceRectAtTime();" + "\n" + 
				"" + "\n" + 
				"Height = a.height;" + "\n" + 
				"Width = a.width;" + "\n" + 
				"" + "\n" + 
				"p = effect(\"Size Control\")(\"Slider\");" + "\n" + 
				"x = Width+p;" + "\n" + 
				"y=Height+p;" + "\n" + 
				"" + "\n" + 
				"[x,y]";
		} catch (err) {}
		try {
			shapeLayer.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "a = thisComp.layer(\"Arjasonjai\").sourceRectAtTime();" + "\n" + 
				"" + "\n" + 
				"Height = a.height;" + "\n" + 
				"Width = a.width;" + "\n" + 
				"Left = a.left;" + "\n" + 
				"Top = a.top;" + "\n" + 
				"" + "\n" + 
				"x = 0;" + "\n" + 
				"y = Height/-2-Top;" + "\n" + 
				"" + "\n" + 
				"[x,y]";
		} catch (err) {
            alert(err)
        }

} catch (e) {
	alert(e)
}
app.endUndoGroup();


function applyEasing(property, keyTimesArray, easeInArray, easeOutArray, keyInterpolationArray) {
	var easeIn, easeOut, easeIn0, easeOut0, easeIn1, easeOut1, easeIn2, easeOut2;
	for (var i = 0, il = keyTimesArray.length; i < il; i ++) {
		if (property.propertyValueType === PropertyValueType.TwoD) {
			easeIn0 = new KeyframeEase(easeInArray[0][i][0], easeInArray[1][i][0]);
			easeOut0 = new KeyframeEase(easeOutArray[0][i][0], easeOutArray[1][i][0]);
			easeIn1 = new KeyframeEase(easeInArray[0][i][1], easeInArray[1][i][1]);
			easeOut1 = new KeyframeEase(easeOutArray[0][i][1], easeOutArray[1][i][1]);
			property.setTemporalEaseAtKey(i+1, [easeIn0, easeIn1], [easeOut0, easeOut1]);
		} else if (property.propertyValueType === PropertyValueType.ThreeD) {
			easeIn0 = new KeyframeEase(easeInArray[0][i][0], easeInArray[1][i][0]);
			easeOut0 = new KeyframeEase(easeOutArray[0][i][0], easeOutArray[1][i][0]);
			easeIn1 = new KeyframeEase(easeInArray[0][i][1], easeInArray[1][i][1]);
			easeOut1 = new KeyframeEase(easeOutArray[0][i][1], easeOutArray[1][i][1]);
			easeIn2 = new KeyframeEase(easeInArray[0][i][2], easeInArray[1][i][2]);
			easeOut2 = new KeyframeEase(easeOutArray[0][i][2], easeOutArray[1][i][2]);
			property.setTemporalEaseAtKey(i+1, [easeIn0, easeIn1, easeIn2], [easeOut0, easeOut1, easeOut2]);
		} else {
			easeIn = new KeyframeEase(easeInArray[0][i], easeInArray[1][i]);
			easeOut = new KeyframeEase(easeOutArray[0][i], easeOutArray[1][i]);
			if (keyInterpolationArray[1][i] !== KeyframeInterpolationType.HOLD) {
				property.setTemporalEaseAtKey(i+1, [easeIn], [easeOut]);
			} else {
				property.setTemporalEaseAtKey(i+1, [easeIn]);
			}
		}
		property.setInterpolationTypeAtKey(i+1, keyInterpolationArray[0][i], keyInterpolationArray[1][i]);
	}
}

}
