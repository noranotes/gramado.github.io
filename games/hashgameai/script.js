/*
	Author: Filipe Chagas Ferraz
	Nationality: Brazil
	Email: filipe.ferraz0@gmail.com
	GitHub: github.com/FilipeChagasDev
*/

// =============================================
// ============= graphic functions =============
// =============================================

var cv = document.getElementById('cv');
var context = cv.getContext('2d');

var d = 100; //default offset

function drawLine(pi,pf)
{
	context.beginPath();
	context.moveTo(pi[0],pi[1]);
	context.lineTo(pf[0],pf[1]);
	context.lineWidth = 5;
	context.strokeStyle = '#000000';
	context.stroke();
}

function drawColorLine(pi,pf,color)
{
	context.beginPath();
	context.moveTo(pi[0],pi[1]);
	context.lineTo(pf[0],pf[1]);
	context.lineWidth = 2;
	context.strokeStyle = color;
	context.stroke();
}

function drawCircle(p,r)
{	context.beginPath();
	context.ellipse(p[0], p[1], r, r, Math.PI/4, 0, 2*Math.PI);
	context.stroke();
}   

function drawGrid()
{
	context.beginPath();
	context.fillStyle = "#FFFFFF";
	context.fillRect(0,0,d*3,d*3);
	context.stroke();

	for(var i=0;i<=3;i++)
	{	// v lines
		var x = i*d;
		drawLine([x,0], [x,d*3]);
	}

	
	for(var j=0;j<=3;j++)
	{	// h lines
		var y = j*d;
		drawLine([0,y], [d*3,y]);
	}
}

function drawX(col,lin)
{
	var x = col*d, y = lin*d, x1 = (col+1)*d, y1 = (lin+1)*d;
	var bound = 20;
	drawLine([x+bound,y+bound], [x1-bound,y1-bound]);
	drawLine([x1-bound,y+bound], [x+bound,y1-bound]);  	
}

function drawO(col,lin)
{
	var x = col*d + d/2, y = lin*d + d/2;
	var r = 30;
	drawCircle([x,y],r);  	
}

function resetGrid()
{
	//context.clearRect(0, 0, cv.width, cv.height);
	drawGrid();
}

// =============================================
// ============= state functions ===============
// =============================================

var currentState = [ ['','',''], ['','',''], ['','',''] ]; //state[col][lin]
var gameReseted = false;
var gameEnd = false;

function stateIsFull(state) // returns true or false
{
	for(var c=0; c<3; c++)
	{
		for(var l=0; l<3; l++)
		{
			if(state[c][l] == '') return false; 
		}
	}
	return true;
}


function resetGame()
{
	currentState = [ ['','',''], ['','',''], ['','',''] ];
	gameReseted = true;
	gameEnd = false;
	resetGrid();
}

function forEachGap(state, callback)
{
	for(var c=0; c<3; c++)
	{
		for(var l=0; l<3; l++)
		{
			if(state[c][l] == '')
			{ 
				callback(c,l);
			}
		}
	}
}

function cloneState(state)
{
	var new_state = [ ['','',''], ['','',''], ['','',''] ];
	for(var c=0;c<3;c++)
	{
		for(var l=0;l<3;l++)
		{
			new_state[c][l] = state[c][l];
		}	
	}
	return new_state;
}

function stateX(state, col,lin) //return a new state array with a X 
{
	//var new_state = [...state];
	var new_state = cloneState(state);
	new_state[col][lin] = 'x';
	return new_state;
}

function stateO(state, col,lin) //return a new state array with a O 
{
	//var new_state = [...state];
	var new_state = cloneState(state);
	//var new_state = state.map((n)=>(n));
	new_state[col][lin] = 'o';
	return new_state;
}

function drawState(state)
{
	resetGrid();

	for(var c=0;c<3;c++)
	{
		for(var l=0;l<3;l++)
		{
			if(state[c][l] == 'x') drawX(c,l);
			else if(state[c][l] == 'o') drawO(c,l);
		}
	}
}

function whoWin(state) // returns 'x' or 'o' or '' 
{

	// -------- O wins ? ----------
	// strategically, the rival should be analyzed first

	//diags
	if(state[0][0] == 'o' && state[1][1] == 'o' && state[2][2] == 'o') return 'o';
	if(state[2][0] == 'o' && state[1][1] == 'o' && state[0][2] == 'o') return 'o';

	//cols
	for(var c=0; c<3; c++)
	{
		if(state[c][0] == 'o' && state[c][1] == 'o' && state[c][2] == 'o') return 'o';
	}

	//lines
	for(var l=0; l<3; l++)
	{
		if(state[0][l] == 'o' && state[1][l] == 'o' && state[2][l] == 'o') return 'o';
	}

	// ---------- X wins ? -------------

	//diags
	if(state[0][0] == 'x' && state[1][1] == 'x' && state[2][2] == 'x') return 'x';	
	if(state[2][0] == 'x' && state[1][1] == 'x' && state[0][2] == 'x') return 'x';

	//cols
	for(var c=0; c<3; c++)
	{
		if(state[c][0] == 'x' && state[c][1] == 'x' && state[c][2] == 'x') return 'x';
	}

	//lines
	for(var l=0; l<3; l++)
	{
		if(state[0][l] == 'x' && state[1][l] == 'x' && state[2][l] == 'x') return 'x';
	}

	return '';
}

function detectEnd()
{
	//diags
	if( (currentState[0][0] == 'o' && currentState[1][1] == 'o' && currentState[2][2] == 'o') 
		|| (currentState[0][0] == 'x' && currentState[1][1] == 'x' && currentState[2][2] == 'x') )
	{
		console.log('line formed in main diagonal');
		gameEnd = true;
		drawColorLine([0,0], [d*3,d*3], '#FF0000'); //diag line
	}

	if( (currentState[2][0] == 'o' && currentState[1][1] == 'o' && currentState[0][2] == 'o') 
		|| (currentState[2][0] == 'x' && currentState[1][1] == 'x' && currentState[0][2] == 'x') )
	{
		console.log('line formed in secondary diagonal');
		gameEnd = true;
		drawColorLine([d*3,0], [0,d*3], '#FF0000'); //diag line
	}

	//cols
	for(var c=0; c<3; c++)
	{
		if( (currentState[c][0] == 'x' && currentState[c][1] == 'x' && currentState[c][2] == 'x') 
			|| (currentState[c][0] == 'o' && currentState[c][1] == 'o' && currentState[c][2] == 'o') )
		{
			console.log('line formed in column=' + c);
			gameEnd = true;
			drawColorLine([d*c+d/2, 0], [d*c+d/2, d*3], '#FF0000') //vertical line
		}
	}

	//lines
	for(var l=0; l<3; l++)
	{
		if( (currentState[0][l] == 'x' && currentState[1][l] == 'x' && currentState[2][l] == 'x')
			|| (currentState[0][l] == 'o' && currentState[1][l] == 'o' && currentState[2][l] == 'o') )
		{
			console.log('line formed in line=' + l);
			gameEnd = true;
			drawColorLine([0, d*l+d/2],[d*3, d*l+d/2], '#FF0000'); //horizontal line
		}
	}

	if(stateIsFull(currentState) == true)
	{ 
		console.log('all gaps were filled');
		gameEnd = true;
	}
}


// =============================================
// =============== AI agent ====================
// =============================================



const playerO = false;
const playerX = true;

function minmax(state, player)
{
	var winner = whoWin(state);
	if(winner != '' || stateIsFull(state)) return (winner == '' ? [0,NaN,NaN] : (winner == 'x' ? [1,NaN,NaN] : [-1,NaN,NaN]) );

	if(player == playerO)
	{
		var maxFound = -2;
		var c_found, l_found;

		forEachGap(state,function(c,l)
		{
			var currentV, currentC, currentL;
			[currentV, NaN, NaN] = minmax(stateX(state,c,l), !player);
			if(currentV > maxFound) [maxFound, c_found, l_found] = [currentV, c, l];
		});

		return [maxFound, c_found, l_found];
	}
	else //if(player == playerX)
	{
		var minFound = 2;
		var c_found, l_found;

		forEachGap(state,function(c,l)
		{
			var currentV, currentC, currentL;
			[currentV, NaN, NaN] = minmax(stateO(state,c,l), !player);
			if(currentV < minFound) [minFound, c_found, l_found] = [currentV, c, l];
		});

		return [minFound, c_found, l_found];
	}

}

function bestX(state) // [col,lin] = bestX(state)
{	
	var bestC, bestL;
	[NaN, bestC, bestL] = minmax(state, playerO);
	return [bestC, bestL];
}

// =======================================================
// ============= Action Interface ========================
// =======================================================

// returns the column and the line where the hash was clicked
function detectCL(x,y)	// [col,lin] = detectCL(x,y)
{
	return [ x/d|0, y/d|0]; 
}




function randomMove()
{
	do
	{
		xc = (Math.random()*100|0)%3;
		xl = (Math.random()*100|0)%3;
		console.log("loop:" + [xc,xl]);
	}while(currentState[xc][xl] != '');

	console.log('AI randomly chose: ' + [xc,xl]);
	return [xc,xl];
}

var gameLocked = false; //mutex to timeout

cv.addEventListener('click', function(e)
{
	gameReseted = false;
	if(gameLocked == true) return;

	if(gameEnd == true)
	{
		alert('Game is over');
		return;
	}

	var x = e.pageX - cv.offsetLeft;
	var y = e.pageY - cv.offsetTop;
	var c,l;
	[c,l] = detectCL(x,y);
	if(currentState[c][l] == '')
	{
		//user play
		console.log('User chose: ' + [c,l]);
		currentState[c][l] = 'o';
		drawState(currentState);
		
		// verify whether the 'o' win
		detectEnd(); 
		if(gameEnd == true) return; //stop the play if so
		// --------------------------

		gameLocked = true;

		setTimeout(function() //delay
		{
			//verify whether the user has just requested a reset
			if(gameReseted == true) return;
			//---------------------------------------

			//AI play
			var xc = -1, xl = -1;
			[xc,xl] = bestX(currentState);	
			console.log('AI chose: ' + [xc,xl]);

			if(xc != -1 && xl != -1) currentState[xc][xl] = 'x';
			else 
			{
				[xc,xl] = randomMove();
				currentState[xc][xl] = 'x';
			}

			drawState(currentState);
			detectEnd();
			gameLocked = false;

		}, 100);
	}	
});


// Reset button
var resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGame);



// =============================================
// ================ Initialization =============
// =============================================

drawGrid();
