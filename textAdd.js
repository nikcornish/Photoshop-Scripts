//  TEXTADD: Appends a new text string to an all existing text layers.

/*
    An adaptation of a script found in this great tutorial: http://psd.tutsplus.com/articles/tools/photoshop-scripting/

HOW IT WORKS:
    1.  PROMPT user for new additional text.
    2.  UPDATE all text fields with additional text.
*/


// START //


//  1. PROMPT user to enter additional text.
var newText = prompt("Enter text to add.\nDon't forget an initial space (if needed).");

var textAdd = function() {
    if(app.documents.length != 0){
        var doc = app.activeDocument;

        //  2. LOOP through the layers, finding all text layers
        for(i = 0; i < doc.artLayers.length; i++){
            var layer = doc.artLayers[i];
            
            //  3. SET the targeted layer to the new font
            if(layer.kind == LayerKind.TEXT){
                layer.textItem.contents += newText;
            }
        }
    } 
}
textAdd();

// END //