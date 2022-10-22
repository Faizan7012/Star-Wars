let parent = document.querySelector(".searchbox");
let cont = document.querySelector(".cont");
let main = document.querySelector(".main")
let id;
let query = document.querySelector("input").value;
async function getdata(){
let res = await fetch(`https://swapi.dev/api/people/?search=${query}`);
let data = await res.json();
   show(data.results);
}



function show(arr){
    cont.style.display = "block"
  parent.innerHTML = null;
 arr.forEach(function(ele){
   let p =  document.createElement("p");
   p.innerText = ele.name;
   p.addEventListener("click",function(){
    show2(ele);
   })
   parent.append(p)
 })
}
function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
   id= setTimeout(function(){
        func();
    },delay);
}
let personal = document.querySelector(".per")
let anatomy = document.querySelector(".ana")
function show2(ele){
    personal.innerHTML =null;
    anatomy.innerHTML =null;
let name = document.querySelector("#h1")
    cont.style.display = "none";
    main.style.display = "block";
    let tag = x("h1");
    tag.innerText ="Personal Info"
    let birth = x("h3")
    birth.innerText ="Birth : "+ele.birth_year;
    let gen = x("h3")
    gen.innerText = "Gender : "+ele.gender;
    let hie = x("h3")
    hie.innerText = "Height : "+ele.height
    let tag2 = x("h1");
    tag2.innerText = "Anatomy"
    let eyec = x("h3")
    eyec.innerText = ele.eye_color;
    let mass = x("h3")
    mass.innerText = "Mass : "+ele.mass;
    let hiarc = x("h3")
    hiarc.innerText = "Hair Color : "+ele.hair_color;
    personal.append(tag,birth,gen,hie);
    anatomy.append(tag2,eyec,mass,hiarc)
    name.innerText = ele.name;
}
function x(val){
    return document.createElement(val)
}

function press(){
    main.style.display = "none";
    cont.style.display = "block";
    parent.innerHTML = "";
}