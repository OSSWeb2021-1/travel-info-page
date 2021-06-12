var idx= document.getElementsByClassName('total');

function clicking(value) {

  for(var j=0;j<8;j++) {
    if(value == "o"+j) {
      document.getElementById('popup'+j).style.display = 'block';
      for(var i=0; i<8; i++) {
        idx[i].style.opacity = "0.5";
        document.body.style.overflowY = "hidden";
      }
    }
  }

}

function closing(value) {
  for(var j=0;j<8;j++) {
    if (value == "c"+j) {
      document.getElementById("popup"+j).style.display = 'none';
      for(var i=0; i<8; i++) {
        idx[i].style.opacity = "1";
        document.body.style.overflowY = "auto";
      }
    }
  }
}

function increase() {
  alert("voted!");
}
