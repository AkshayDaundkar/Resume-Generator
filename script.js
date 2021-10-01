
function addNewWEField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Work Experience Here");


    let weOb=document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAEField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Acedemic Qualification here");


    let eqOb=document.getElementById("eq");
    let eqAddButtonOb = document.getElementById("eqAddButton");

    eqOb.insertBefore(newNode,eqAddButtonOb);
}

function addNewASField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('esField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Skills Here");


    let esOb=document.getElementById("es");
    let esAddButtonOb = document.getElementById("esAddButton");

    esOb.insertBefore(newNode,esAddButtonOb);
}



//Generate CV
function  generateCV(){

    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");

    nameT1.innerHTML = nameField;
    //document

    document.getElementById("nameT2").innerHTML= nameField;
    document.getElementById("contactT1").innerHTML= document.getElementById("contactField").value;
    document.getElementById("emailT1").innerHTML= document.getElementById("emailField").value;

    document.getElementById("addressT1").innerHTML= document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML= document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML= document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML= document.getElementById("linkedField").value;

    //objective t
    document.getElementById("objectiveT").innerHTML= document.getElementById("objectiveField").value;

    
    let wes=document.getElementsByClassName("weField");
    let str="";
    for(let e of wes){
        str= str + `<li> ${e.value}</li>`
    }
    document.getElementById("weT").innerHTML=str;



    let qes=document.getElementsByClassName("eqField");
    let strr="";
    for(let e of qes){
        strr= strr + `<li> ${e.value}</li>`
    }
    document.getElementById("aqT").innerHTML=strr;

    let qess=document.getElementsByClassName("esField");
    let strrr="";
    for(let e of qess){
        strrr= strrr + `<li> ${e.value}</li>`
    }
    document.getElementById("asT").innerHTML=strrr;


    //image setting for CV
    let file=document.getElementById("imgField").files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);

    console.log(reader.result);

    //set the image
    reader.onloadend=function(){
        document.getElementById("imgTemplate").src=reader.result;
    }


    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
    
}


function printCV(){
    document.getElementById('pri').style.display='none';
    window.print()
}