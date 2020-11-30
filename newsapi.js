// fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?q=coronavirus&language=en&category=health&country=in&apikey=ed43be13f27c45bd88ad0e2edace56fd',{headers:new Headers({"X-Requested-With":"vsjvjdv"}) })
// .then(a => a.json())
// .then(response => {
// for(var i = 0; response.articles.length; i++){
// document.getElementById("output").innerHTML+="<div style = 'padding: 10px;border: 7px outset black; background-color: lightblue; text-align: center;'> <img style = 'float:top; width: 290px;' src ='" + response.articles[i].urlToImage+"'><h1>"+response.articles[i].title+"</h1>"+response.articles[i].source.name+"<br>"+response.articles[i].description+"<a href = '"+response.articles[i].url+"'target = '_blank'>"+response.articles[i].url+"</a></div>";
// }
// })