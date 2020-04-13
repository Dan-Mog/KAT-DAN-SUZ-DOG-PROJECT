var results = [12];

document.getElementById("form1").onsubmit=function() {
   
   if (document.querySelectorAll('input[type="radio"]:checked').length == 0){
      document.getElementById("answer").innerHTML = "Please answer all questions";
      return false;
   } 
   
   house = document.querySelector('input[name = "house"]:checked').value;
   animal = document.querySelector('input[name = "animal"]:checked').value;
   child = document.querySelector('input[name = "child"]:checked').value;
   walk = document.querySelector('input[name = "walk"]:checked').value;

  if((animal == "dog" || animal == "none") && child == "none" && walk == "short") {
     document.getElementById("answer").innerHTML = "You got Gosha!";
     results = [2];
  }
  else if(house == "flat") {
     document.getElementById("answer").innerHTML = "You got Max or Peppy!";
     results = [11,6];
  }
  else if((child == "baby" || child == "young") && (animal == "dog" || animal == "none")) {
     document.getElementById("answer").innerHTML = "You got Ellie!";
     results = [10];
  }   
  else if((child == "baby" || child == "young") && (house == "cithou" || house == "couhou") && animal == "none") {
     document.getElementById("answer").innerHTML = "You got Mishka!";
     results = [9];
  }     
  else if((child == "baby" || child == "young") && (house == "cithou" || house == "couhou")) {
     document.getElementById("answer").innerHTML = "You got Prosh!";  
     results = [0];
  } 
  else if(child == "none" && (house == "cithou" || house == "couhou")) {
     document.getElementById("answer").innerHTML = "You got Cora!";
     results = [1];
  }
  else if((animal == "dog" || animal == "none") && child == "none") {
     document.getElementById("answer").innerHTML = "You got Frankie!";
     results = [3];
  }
  else if(child == "young" || child == "none") {
     document.getElementById("answer").innerHTML = "You got Daizy"
     results = [7];
  }
  else if(child == "none" && (animal == "dog" || animal == "none") && walk == "long") {
     document.getElementById("answer").innerHTML = "You got Cooper!"
     results = [8];
  }
  else {
      document.getElementById("answer").innerHTML = "You got Sasha or Pasha!";
      results = [5,4];
  }

for (iTemp = 0; iTemp < results.length; iTemp++) {
   node = (`<div class="Img"  onClick="change(${results[iTemp]})"><figure><img src="../img/${dogs[results[iTemp]].pic[0]}" alt="${dogs[results[iTemp]].name}"><figcaption>${dogs[results[iTemp]].name}</figcaption></figure></div>`);
   if (iTemp == 0){
      document.getElementById("Gallery").innerHTML = node;
   }
   else {
      document.getElementById("Gallery").innerHTML += node;
   }
};

   return false;
} 

function change(iTemp) {
   document.getElementById("ExtraPics").innerHTML = "" ;
   document.getElementById("Name").innerHTML = dogs[iTemp].name;
   document.getElementById("ProfilePic").src = "../img/"+dogs[iTemp].pic[0];
   if (dogs[iTemp].pic.length > 1){
      for (let jTemp = 1; jTemp < dogs[iTemp].pic.length; jTemp ++) {
         document.getElementById("ExtraPics").innerHTML += "<img id=\"ProfilePic\" src=\"../img/" + dogs[iTemp].pic[jTemp] + "\" alt=\"Dog\"></img>";
      }
   }
   document.getElementById("Bio").innerHTML = dogs[iTemp].bio+"<br /><br />";
};