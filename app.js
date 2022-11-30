let container=document.getElementById('container');
let search=document.getElementById('search');
search.addEventListener("keyup",render)

function render(){
  fetch(`https://rickandmortyapi.com/api/character/?name=${search.value}`)
  .then(a=>a.json())
  .then(data=>{

    
    const {info,results}=data
    let items=``
    for(let item of results){

      if(item.status=="Dead"){
        items+=`<div class="item">
      <div class="item-img"><img src="${item.image}" alt=""></div>
      <div class="item-info">
       <h2 class="name" >${item.name}</h2>
       <div class="item-info-status"><div class="dead" ></div><h5>${item.status}</h5><h5>-</h5><h5>${item.species}</h5></div>
       <div class="item-info-location">
         <h5>Last known location:</h5>
         <p>${item.location.name}</p>
       </div>
       <div class="item-info-seen">
         <h5>First seen in:</h5>
         <p>${item.origin.name}</p>
         <h5>Gender:</h5>
         <p>${item.gender}</p>
        </div>        
       </div>                             
      </div>`
      }else if(item.status == "Alive"){
        items+=`<div class="item">
      <div class="item-img"><img src="${item.image}" alt=""></div>
      <div class="item-info">
       <h2 class="name" >${item.name}</h2>
       <div class="item-info-status"><div class="alive" ></div><h5>${item.status}</h5><h5>-</h5><h5>${item.species}</h5></div>
       <div class="item-info-location">
         <h5>Last known location:</h5>
         <p>${item.location.name}</p>
       </div>
       <div class="item-info-seen">
         <h5>First seen in:</h5>
         <p>${item.origin.name}</p>
         <h5>Gender:</h5>
         <p>${item.gender}</p>
      </div>        
       </div>                             
     </div>`
    }else if(item.status=="unknown"){
      items+=`<div class="item">
      <div class="item-img"><img src="${item.image}" alt=""></div>
      <div class="item-info">
       <h2 class="name" >${item.name}</h2>
       <div class="item-info-status"><div class="unknown"></div><h5>${item.status}</h5><h5>-</h5><h5>${item.species}</h5></div>
       <div class="item-info-location">
         <h5>Last known location:</h5>
         <p>${item.location.name}</p>
       </div>
       <div class="item-info-seen">
         <h5>First seen in:</h5>
         <p>${item.origin.name}</p>
         <h5>Gender:</h5>
         <p>${item.gender}</p>
     </div>        
       </div>                             
    </div>`
    }
   container.innerHTML=items
    
  }})
    
}


