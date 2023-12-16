var TODORequest = new XMLHttpRequest();
TODORequest.open("GET", "https://restcountries.com/v3.1/all");
TODORequest.addEventListener('load', function (){
  console.log(this.response)
  iterate(JSON.parse(this.response))
});
TODORequest.send()
console.log(TODORequest)
function iterate(data = []) {
  for (var x = 0; x < data.length; x++) {
    document.getElementById("flag_list").innerHTML +="<img id='imgsid"+x+"' height='50px;' width='50px;' src='"+data[x].flags.png+"' alt='imgsidName"+x+"'><br/>";
  }
}