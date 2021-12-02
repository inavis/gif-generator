
//create like enter fully-qualified domain name such as wikipedia.org, youtube.com, or bbc.co.uk.
//Sometimes, a website doesn't have any icons at all – or that site might not exist. But in your UI, you may want to still show an icon anyway, and a broken image doesn't look too nice.
//For this reason, we automatically serve a fallback icon

//<img src="https://icon.horse/icon/youtube.com"> -->just load image like this
//display like 10 to compare and the search term


let searchbar = document.querySelector("#searchbar");
let content = document.querySelector(".content");
let searchbtn = document.querySelector(".searchbtn");
let value;


function search(){
     value = searchbar.value.trim();
        if(value!=""){
         console.log(value);
         api(value)
        }else{
            appear("Enter any dcategory name to search.It cannot be empty")
            // alert("cannot be empty")
        }
    
}

// //https://api.giphy.com/v1/gifs/search?api_key=9wOPNY7hg3fKaO3WoTtidPM0FBkvgsur&q=food&limit=25&offset=0&rating=g&lang=en

function api(value){
    let url5 =`https://api.giphy.com/v1/gifs/search?api_key=9wOPNY7hg3fKaO3WoTtidPM0FBkvgsur&q=${value}&limit=25&offset=0&rating=g&lang=en`
fetch(url5)
.then((data)=>(data.json()))
.then(function(res){
   console.log(res);
   for(x of res.data){
    console.log(x.embed_url)
    

       console.log(x.id);
    
    //    let url =x.url;
     //  let url = `https://giphy.com/media/${x.id}/giphy-downsized.gif`;
     let url = `https://media0.giphy.com/media/${x.id}/giphy.gif`;
     console.log(url)
    let div = document.createElement("div");
   div.classList="card m-1";
   content.appendChild(div)
   let img = document.createElement("img");
   img.setAttribute("src",url);
   img.setAttribute("height","200px")
   img.setAttribute("width","200px")
   div.appendChild(img)

   searchbar.value=""
   }
   
})
.catch(function(err){
    console.log(err);
    appear("Please check the entered category again");
    // alert("Please check the entered URL again or failed to  load the resource")
})
}

//for error message to appear and disappaear
function appear(value){
    document.querySelector(".message").innerHTML=value;
    document.getElementById("confirm").style.display="block";
    document.querySelector("#searchbar").disabled=true
    document.querySelector(".searchbtn").disabled=true
   
}
function disappear(){
    document.getElementById("confirm").style.display="none";
    searchbar.setAttribute("disabled",false);
    document.querySelector("#searchbar").disabled=false
    document.querySelector(".searchbtn").disabled=false
}

//card positioning