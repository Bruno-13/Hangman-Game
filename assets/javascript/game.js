Words = {};
Words.List = [];

Words.List[0] = "superman";
Words.List[1] = "batman";
Words.List[2] = "ironman";
Words.List[3] = "wolverine";
Words.List[4] = "spiderman";
Words.List[5] = "hulk";
Words.List[6] = "thor";
Words.List[7] = "storm";
Words.List[8] = "deadpool";
Words.List[9] = "rogue";
Words.List[10] = "beast";
Words.List[11] = "cyclops";
Words.List[12] = "green-lantern";
Words.List[13] = "wonder-woman";
Words.List[14] = "flash";
Words.List[15] = "black-widow";
Words.List[16] = "daredevil";
Words.List[17] = "captain-america";
Words.List[18] = "gambit";
Words.List[19] = "silver-surfer";


$(function(){
	$("#a").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("a");
	});
	}
);

$(function(){
	$("#b").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("b");
	});
	}
);

$(function(){
	$("#c").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("c");
	});
	}
);

$(function(){
	$("#d").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("d");
	});
	}
);

$(function(){
	$("#e").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("e");
	});
	}
);

$(function(){
	$("#f").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("f");
	});
	}
);

$(function(){
	$("#g").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("g");
	});
	}
);

$(function(){
	$("#h").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("h");
	});
	}
);

$(function(){
	$("#i").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("i");
	});
	}
);

$(function(){
	$("#j").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("j");
	});
	}
);

$(function(){
	$("#k").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("k");
	});
	}
);$(function(){
	$("#l").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("l");
	});
	}
);

$(function(){
	$("#m").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("m");
	});
	}
);

$(function(){
	$("#n").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("n");
	});
	}
);

$(function(){
	$("#o").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("o");
	});
	}
);

$(function(){
	$("#p").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("p");
	});
	}
);

$(function(){
	$("#q").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("q");
	});
	}
);

$(function(){
	$("#r").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("r");
	});
	}
);

$(function(){
	$("#s").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("s");
	});
	}
);

$(function(){
	$("#t").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("t");
	});
	}
);

$(function(){
	$("#u").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("u");
	});
	}
);

$(function(){
	$("#v").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("v");
	});
	}
);$(function(){
	$("#w").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("w");
	});
	}
);

$(function(){
	$("#x").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("x");
	});
	}
);

$(function(){
	$("#y").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("y");
	});
	}
);

$(function(){
	$("#z").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("z");
	});
	}
);

Main = {};
Main.WordArray = [];
Main.WordUArray = [];
Main.Lives = 10;

Main.NumberInWordbank = 20;

Main.Word = "test";

Main.WordU = "";

Main.PullWord = function(){
	Main.Word = Words.List[(Math.floor(Math.random() * Main.NumberInWordbank))];
}

Main.SetUnderline = function(){
	Main.PullWord();
	for(i=0; i < Main.Word.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		Main.WordUArray[i] = "-";
	}
	Main.WordU = Main.WordUArray.join("");
	document.getElementById("word").innerHTML = Main.WordU;
	document.getElementById("Letters").innerHTML = Main.Word.length;
}

Main.UpdateLetter = function(letter) {
	Main.Changes = 0;
	for(i=0; i < Main.Word.length; i++) {
		Main.WordArray[i] = Main.Word.charAt(i);
		if(Main.Word.charAt(i) == letter) {
		Main.WordUArray[i] = letter;
		Main.Changes += 1;
		}
	}
	if(Main.Changes < 1) {
		Main.Lives -= 1;
		document.getElementById("lives").innerHTML = Main.Lives;
	}
	Main.WordU = Main.WordUArray.join("");
	document.getElementById("word").innerHTML = Main.WordU;
	
	Main.Word1 = Main.WordArray.join("");
	Main.Word2 = Main.WordUArray.join("");
	
	if(Main.Lives < 1){
		document.getElementById("word").innerHTML = Main.Word1;
		alert("GAME OVER. Click OK and try again");
		window.location.reload();
		
	}
	if(Main.Word1 === Main.Word2){
		alert("You Guessed It! Click OK for the next one");
		window.location.reload();
	}
}

Main.PullWord();

Main.SetUnderline();