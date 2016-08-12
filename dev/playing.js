preferences.rulerUnits = Units.PIXELS;
preferences.typeUnits = TypeUnits.PIXELS;

var d = app.activeDocument;

	// MAKE A NEW LAYER AND ADD SOME TEXT
	var layerMaker = function() {
		/*
			make a new layer
			set it to a TEXT layer
			give it a name
		*/ 
		var nl = d.artLayers.add();
		nl.kind = LayerKind.TEXT;
		nl.name = "My Layer Test"
		/*
			t is the textItem in the created layer
			myString is the contents of t
			justify it LEFT
		*/
		var t = d.artLayers[nl.name].textItem;
		var myString = "This is a long string going onto the page.";
		t.contents = myString;
		t.justification = Justification.LEFT;		
	}

	// ADD ALL LAYERS TO AN ARRAY AND ALERT
	var listLayers = function() {
		for(var i=0;i<=artLayers.length;i++) {
			alert(artLayers[i]);
		}
	}


	// FIND A LAYER AND HIDE IT
	/*
	Would need to loop through the PSD, 
	push all names to an array
	check the user input against the array items
	if matches, continue, 
	else, provide user feedback
	*/
	var hideLayer = function(layerName) {
		var r = prompt("Type a layer name", "Bob");
		if (typeof r != "undefined") {
			var targetLayer = d.artLayers.getByName(r);
			targetLayer.visible = false;	
		} else {
			alert("Sorry, that layer does not exist");
		}
		
	}

// hideLayer();
listLayers();