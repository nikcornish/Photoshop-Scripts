// following this excellent article: https://www.smashingmagazine.com/2013/07/introduction-to-photoshop-scripting/

var originalStem = app.activeDocument.activeLayer;

var stemsAmount = prompt("Processing " + originalStem.name + "How many you want?", 12);
var angle = 360 / stemsAmount;

for(var i=0;i<stemsAmount; i++) {
	var newStem = originalStem.duplicate();
	newStem.rotate(angle * i, AnchorPosition.BOTTOMCENTER);
}