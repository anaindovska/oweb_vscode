var zborovi=["балон", "торба", "молив", "книга", "мачка", "зајак", "коцка", "табла", "слика", "корпа"];
var obidi=0;
function rzbor(){
    var randomm = Math.floor(Math.random()*10);
    zbor= zborovi[randomm];
    
    prva=Math.floor(Math.random()*5);
    vtora=Math.floor(Math.random()*5);
    while(prva==vtora){
        vtora=Math.floor(Math.random()*5);
    }

    prikaziZbor();
}

function prikaziZbor(){
    var z=zbor.split('');
    for(var i=0; i<5; i++){
        if(i==prva || i==vtora){
            document.write(z[i]);
        }else {
            document.write("_");}
    }
}

rzbor();


function proveri(){
    var zb= document.getElementById("proba").value;
    var por= document.getElementById("poraka");
    var kopce= document.getElementById("nova");
    if(obidi<5){
        obidi++;
        if(zb==zbor){
        por.innerHTML="Честитки! Го погодивте зборот= "+zbor;
        alert("Успешна игра!");
        
        kopce.style.display="block";
    }else{
        por.innerHTML="Обидете се повторно";
    }
    }else {
        alert("Неуспешна игра");
        document.getElementById("proverka").disabled=true;
        kopce.style.display="block";
    }
    
}



function novaIgra(){
    location.reload();
}