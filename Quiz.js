class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

 
    //write code to change the background color here
background("yellow")

 this.title2 = createElement("h1");
 this.title2.html("Result of the Game");
 this.title2.position(350, 0);

 contestant = new Contestant()
 contestant.getContestantInfo()



    //write condition to check if contestantInfor is not undefined
    if(allContestant !== undefined){
      fill("blue")
      textSize(20)
      text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230)}
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  for(var plr in allContestants){
    var correctAns = "2";
    if(correctAns === allContestants[plr].answer)
    fill("green");
    else
    fill("red");
    
    
    
  
  }




  
}
}