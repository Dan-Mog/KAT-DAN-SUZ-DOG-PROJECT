
for (iTemp = 0; iTemp < dogs.length; iTemp++) {
   node = (`<div class="Img"  onClick="change(${iTemp})"><figure><img src="img/${dogs[iTemp].pic[0]}" alt="${dogs[iTemp].name}"><figcaption>${dogs[iTemp].name}</figcaption></figure></div>`);
   document.getElementById("Gallery").innerHTML += node;
};

function change(iTemp) {
   document.getElementById("ExtraPics").innerHTML = "" ;
   document.getElementById("Name").innerHTML = dogs[iTemp].name;
   document.getElementById("ProfilePic").src = "./img/"+dogs[iTemp].pic[0];
   if (dogs[iTemp].pic.length > 1){
      for (let jTemp = 1; jTemp < dogs[iTemp].pic.length; jTemp ++) {
         document.getElementById("ExtraPics").innerHTML += "<img id=\"ProfilePic\" src=\"./img/" + dogs[iTemp].pic[jTemp] + "\" alt=\"Dog\"></img>";
      }
   }
   document.getElementById("Bio").innerHTML = dogs[iTemp].bio+"<br /><br />";
};


