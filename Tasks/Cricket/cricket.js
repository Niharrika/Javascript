document.getElementById("play2").disabled = true;
class cric{
	constructor (balls,score,wickets,players){
		this.balls=balls;
		this.score=score;
		this.wickets=wickets;
		this.players=players;
	}
	
	
	Team1(){
	var d=0;
	if(this.balls>0&&this.wickets<6&&this.players<=6){
		var runs = Math.floor(Math.random() * 7);
		if(runs==0){
			this.balls=this.balls-1;
			this.wickets=this.wickets+1;
			this.players=this.players+1;
	}
		else{
			this.balls=this.balls-1;
			this.score =this.score+runs;
			d=d+1;
			if(d==6){
			this.players=this.players+1;
			var d=0;
			}
	}
	
	document.getElementById("players1").value=this.players;
	document.getElementById("wickets1").value=this.wickets;
	document.getElementById("score1").value=this.score;
	document.getElementById("bl1").value=this.balls;
	
	if(this.balls==0||this.wickets==6||this.players==7){
	document.getElementById("play1").disabled = true;
	document.getElementById("play2").disabled = false;
	}
}

	else{
		alert("Team A is over");
	}
	}
	
	Team2(){
	
	var d=0;
	if(this.balls>0&&this.wickets<6&&this.players<7){
		var runs = Math.floor(Math.random() * 7);
		if(runs==0){
			this.balls=this.balls-1;
			this.wickets=this.wickets+1;
			this.players=this.players+1;
	}
		else{
			this.balls=this.balls-1;
			this.score =this.score+runs;
			d=d+1;
			if(d==6){
			this.players=this.players+1;
			var d=0;
			}
	}
	
	document.getElementById("players2").value=this.players;
	document.getElementById("wickets2").value=this.wickets;
	document.getElementById("score2").value=this.score;
	document.getElementById("bl2").value=this.balls;
	
	if(this.balls==0||this.wickets==6||this.players==7){
	document.getElementById("play2").disabled = true;
	window.location.href="scores.html"
	}
}
	else{
		alert("Team B is over");
	}
	}
}
var obj = new cric(36,0,0,1);
var obj1 = new cric(36,0,0,1);
function solve(){
var team1=obj.Team1();
}
function solve2(){
var team2=obj1.Team2();
}
localStorage.setItem("t1",obj.score);
localStorage.setItem("t2",obj1.score);