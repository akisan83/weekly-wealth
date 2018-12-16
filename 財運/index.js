// $("h1").css("color", "red")


// imgList - change up-gua picture according to dropdown
document.getElementById("imgList").onchange = setClassUp;

function setClassUp(e) {
  var img = document.getElementById("imageUpGua");
  var text = document.getElementById("textUpGua");

  var select = e.target;
  img.src = select.options[select.selectedIndex].value;
  text.innerHTML = select.options[select.selectedIndex].dataset.description;
  // console.log(e.target);
  guaName();
  return false;
}

// imgList2 - change down-gua picture according to dropdown
document.getElementById("imgList2").onchange = setClassDown;

function setClassDown(e) {
  var img = document.getElementById("imageDownGua");
  var text = document.getElementById("textDownGua");

  var select = e.target;
  img.src = select.options[select.selectedIndex].value;
  text.innerHTML = select.options[select.selectedIndex].dataset.description;
  // console.log(e.target);
  guaName();
  return false;
}




function guaName() {

  if ((document.getElementById('imgList').value == 'images/qian.png') &&
    (document.getElementById('imgList2').value == 'images/qian.png')) {
    document.getElementById("guaName").innerHTML ="乾";
  }

  if (document.getElementById('imgList').value == 'images/dui.png' &&
    document.getElementById('imgList2').value == 'images/dui.png') {
    document.getElementById("guaName").innerHTML = "澤";
  }

  if (document.getElementById('imgList').value == 'images/zhen.png' &&
    document.getElementById('imgList2').value == 'images/kun.png') {
    document.getElementById("guaName").innerHTML = "欲";
  }
}
