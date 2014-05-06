//	COLUMNS AND ROWS: Adds uniform columns and rows as guides.

/*
	A short script which can be applied to an existing PSD file, adding a user specified amount of columns or rows as guides to the PSD file. 
	Columns and rows are added evenly distributed, so an input of 2 columns and 2 rows will result in.

HOW IT WORKS:
	1.	SET initial units to pixels
	2.	GET document dimensions
	3.	PROMPT user for input (how many columns, how many rows)
	4.	LOOP and SET columns
	5.	LOOP and SET rows
	6.	CALL the function
*/


//	1. SET initial units to pixels
preferences.rulerUnits = Units.PIXELS;
preferences.typeUnits = TypeUnits.PIXELS;

//	2. GET document dimensions
var d = app.activeDocument;
var docWidth = d.width;
var docHeight = d.height;

var columnsAndRows = function() {

	//	3. PROMPT for user input
	var howManyCols = parseInt(prompt("How many columns?","4"));
	var howManyRows = parseInt(prompt("How many rows?","4"));

	//	4. LOOP & SET columns
	for(i=0;i<=howManyCols;i++) {
		d.guides.add(Direction.VERTICAL,(docWidth/howManyCols)*i);
	}

	//	5. LOOP & SET rows
	for(i=0;i<=howManyRows;i++) {
		d.guides.add(Direction.HORIZONTAL,(docHeight/howManyRows)*i);
	}
}

//	6. CALL the function
columnsAndRows();


// END //