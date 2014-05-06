//  removeAllGuides: Removes all guides currently applied to the active document

/*
    An adaptation of a script found in this thread: https://forums.adobe.com/message/5712262

HOW IT WORKS:
    1.  COUNT and ALERT the current number of guides
    2.  CONFIRM and DELETES all guides
*/


//  1.  GET the active document, then the number of guides
var d = app.activeDocument;
var guideCount = d.guides.length;

//  2. CONFIRM and DELETE all guides
var answer = confirm("You currently have " + guideCount + " guides." + "\nDelete all guides?\nCareful, there's no going back.");
if (answer) {
    d.guides.removeAll();
}

// END //