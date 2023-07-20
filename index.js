const fox_result = document.getElementById("dog")
const fox_bttn = document.getElementById("get")

fox_bttn.addEventListener("click",getFox)


function getFox(){
 fetch("https://dog.ceo/api/breeds/image/random")
 .then(res=>res.json())
 .then(data =>{ console.log(data)
  fox_result.innerHTML =`<img src=${data.message} ${data.status}/>`
 })

}


