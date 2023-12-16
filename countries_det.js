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
    document.getElementById("countries_list").innerHTML += "Country Name:   "+data[x].name.common+"<br/> Region:   "+data[x].region+"<br/> Sub Region:   "+data[x].subregion+"<br/>Population:   "+data[x].population+"<br/><br/>";
  }
}