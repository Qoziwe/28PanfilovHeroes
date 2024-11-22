window.onload = function () {
  console.log("ADad");
  var top = document.getElementById("MembersList").offsetTop;
  console.log(top);
  window.scrollTo(0, top);
};
var viewAllButton = false
document.getElementById("MS-Button").onclick = function(){
  if(!viewAllButton){
document.getElementById("ML-Container").style.display = "flex";
  viewAllButton = true
  }else{
    document.getElementById("ML-Container").style.display = "none";
  viewAllButton = false
  }
}
