
let button=document.querySelector('#mode');
let span = document.querySelector('span');
let nom=document.querySelector('#nom');
let ris=document.querySelector('#ris');

if(localStorage.getItem('prenom')){ //si le localstorage prenom existe
    document.body.append(' bonjour ' + localStorage.getItem('prenom'))//on l'ajoute dans le html
    

}

else {

    let prenom = prompt('Quel est votre prénom ?');//onn demande le prenom

    localStorage.setItem('prenom ', prenom); // on crée une donnée
    nom.style.color="red";
    nom.textContent=prenom;//on l'ajoute dans le dom
}
localStorage.clear();


if(localStorage.getItem('theme')){//on verfie si localstorage existe ca veut dire qu'il a déja une preference
 if (localStorage.getItem('theme') =='sombre'){
      //on verfie si la preference est égal  ou pas a la valeur (sombre)
      modeSombre();
 }
}
button.addEventListener('click', ()=>{//on detecte la couleur du body
if(document.body.classList.contains('dark')){//classList=tableau content toute nos class on verifie si il y une class dark dans le body
   //mode clair 
   document.body.className="";//on vide le body
   span.textContent='Thème sombre';//on change le texte
   localStorage.setItem('theme', 'clair');//on definit la preference de l'utilisdateur
   ris.style.color="black";
}

else{
    
modeSombre();
ris.style.color="blackj";

}

});

function modeSombre(){

    document.body.className="dark";// on rajoute la class dark(css)
    span.textContent="Thème clair";
    localStorage.setItem('theme', 'sombre');//on defint la préfrence de l'utilisateur
    ris.style.color="white";


}