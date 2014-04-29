//  FONTSWAP: Swaps the current typeface of all text layers to a new typeface.

/*
    An adaptation of a script found in this great tutorial: http://psd.tutsplus.com/articles/tools/photoshop-scripting/
    For the script work correctly, the Postscript Name of the typeface needs to be entered, without quotation marks, eg. ArialMT and not simply the name Arial.
    On Mac, the Postscript name can be found via FontBook > Preview > Show Font Info
    On Windows, read here: http://blog.webink.com/p-s-i-love-you-including-postscript-font-names-in-your-font-stacks/

HOW IT WORKS:
    1.  PROMPT user for new typeface     
    2.  LOOP through activeDocument and finds all TEXT layers
    3.  SET to the desired typeface
    4.  CALL the function
*/


// START //


//  1. PROMPT user to enter typeface.
var newFont = prompt("Enter New Typeface:\nRemember, you need the Postscript name.");

var fontSwap = function() {
    if(app.documents.length != 0){
        var doc = app.activeDocument;

            //  2. LOOP through the layers, finding all text layers
            for(i = 0; i < doc.artLayers.length; i++){
                var layer = doc.artLayers[i];

            //  3. SET the targeted layer to the new font
                if(layer.kind == LayerKind.TEXT){
                    layer.textItem.font = newFont;
                }
            }
        }
}

//  4.  CALL the function
fontSwap();


// END //