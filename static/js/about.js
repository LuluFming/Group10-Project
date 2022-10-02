/*
  GROUP: Lulu Fokming, Francisco Reyes, Anri Ferris
  Author: Lulu Fokming
  DATE 9/30/2022
  DESCRIPTION: This is ISM6225.360F22  Assignment2
*/


let athletecounts=setInterval(athletes);
let athlete_upto=0;
let athlete_target_val=0;

let sportcounts=setInterval(sports);
let sports_upto=0;
let sports_target_val=0;

let potentialcounts=setInterval(potential);
let potential_upto=0;
let potential_target_val=0;

/*Counter for Stats card: Athletes*/
function athletes(){
    var count= document.getElementById("athletecounter");
    /* get the attribute values for the id=athletecounter*/
    let athlete_target_val = count.getAttribute("athlete-target"); 
    let dtype = count.getAttribute("athlete-type"); 

    counterval = String(++athlete_upto) + dtype
    /*Display the updated count values*/
    count.innerHTML=counterval;
    if(athlete_upto==athlete_target_val)
    {
        clearInterval(athletecounts);
    }
}

/*Counter for Stats card: Sports*/
function sports(){
  var count= document.getElementById("sportscounter");
  let sports_target_val = count.getAttribute("sports-target"); 
  let dtype = count.getAttribute("sports-type"); 

  counterval = String(++sports_upto) + dtype
  count.innerHTML=counterval;
  if(sports_upto==sports_target_val)
  {
      clearInterval(sportcounts);
  }
}

/*Counter for Stats card: Poteantial*/
function potential(){
  var count= document.getElementById("potentialcounter");
  let potential_target_val = count.getAttribute("potential-target"); 
  let dtype = count.getAttribute("potential-type"); 

  counterval = String(++potential_upto) + dtype
  count.innerHTML=counterval;
  if(potential_upto==potential_target_val)
  {
      clearInterval(potentialcounts);
  }
}

