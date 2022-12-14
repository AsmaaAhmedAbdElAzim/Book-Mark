var nameInput = document.getElementById('urlName');
var nameWeb = document.getElementById('nameWeb');
var submitInput = document.getElementById('submitInput');
var displayData = document.getElementById('displayData');
var vistInput = document.getElementById('vistInput');
var closeInput = document.getElementById('closeInput')
// console.log(urlName);
// console.log(nameWeb);
// console.log(visitInput);
var websiteContainer =[];


if(localStorage.getItem('webSites') != null){
    websiteContainer=JSON.parse(localStorage.getItem('webSites'));
    displayUrl()

}


submitInput.addEventListener('click',function(){
    var website={
        name:nameInput.value,
        url:nameWeb.value
    }
   websiteContainer.push(website) ;
    displayData.classList.replace('d-none','d-flex');
    localStorage.setItem('webSites',JSON.stringify(websiteContainer))
    displayUrl()
    
})

function displayUrl(){
    var cartona='';
    for(var i =0 ; i<websiteContainer.length;i++){
        cartona +=` <div class="col-md-6 bg-black card p-5 ">
        <div class="w-25 img-card ">
            <img src="img/—Pngtree—bookmark favorite icon use for_8863130.png" alt="" class="w-100 m-0 p">
       </div>
       <div class="content text-center">
        <h2 class="mb-5">${websiteContainer[i].name}</h2>
        <div class=" d-flex justify-content-center align-items-center">
        <button id="vistInput" class="me-4"><a target='_blank' href='${websiteContainer[i].url}' >Visit</a></button>
        <button id="closeInput"  onclick='deletedUrl(${i})' class=" ">Delet</button>
        </div>
        
       </div>
    </div>`
   
    }
    displayData.innerHTML=cartona;
   
}



function deletedUrl(indexDeleted){
    websiteContainer.splice(indexDeleted,1);
    localStorage.setItem('webSites', JSON.stringify(websiteContainer));
    displayUrl();
}

let nameRegx=/^[a-z]{1,}$/;
function isNameValid(){
    if(nameRegx.test( nameInput.value)){
        return true;
    }else{
        return false;
    }
}
let urlRegx=/^(http:\/\/)?(https:\/\/)?(www\.)?[a-z_ \.]{1,}\.[a-z]{2,3}$/;
console.log(urlRegx.test('https://www.google.com'));
function isUrlValid(){
    if(urlRegx.test(nameWeb.value)){
        return true;
    }else{
        return false;
    }
}
nameInput.onkeyup = function(){
    if(isNameValid() && isUrlValid() ){
        submitInput.removeAttribute('disabled');
    }else{
        submitInput.disabled = 'true'
    }
}
nameWeb.onkeyup = function(){
    if(isNameValid() && isUrlValid() ){
        submitInput.removeAttribute('disabled');
    }else{
        submitInput.disabled = 'true'
    }
}
