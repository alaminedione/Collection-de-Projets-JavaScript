const btnAjouter = document.getElementById('btn-ajouter')
let taches = document.getElementById('taches')
let text = document.getElementById('tache-text')
let nombres =0


// quand la bouton ajouter est clique
btnAjouter.addEventListener('click',()=>{
    if(nombres > 3){
        alert('vous avez atteint le maximum')
        return
    }
    if(text.value === ""){
        alert('veuiller ecrire la tache a ajouter')
    }else {
        //creer l'element p tache
        const tache = document.createElement('p')
        tache.classList.add("tache")
        // creer les elements du tache
        const input = document.createElement('input')
        const p = document.createElement('p')
        const image = document.createElement('img')

        // checkbox
        input.type='checkbox'
        input.checked=false;
        input.addEventListener('click',()=>{
            if(input.checked===true){
                p.style.textDecoration = "line-through"
                // p.style.textDecorationColor="red"
            }else{
                p.style.textDecoration = "none"
            }
        })
        
        
        
        
        //ajouter les classes
        input.classList.add("checkbox")
        p.classList.add("tache-text")
        
        image.src ="./images/remove.png"
        image.id="btn-supprimer"
        image.title="supprimer la tache"

        // ajouter la texte du tache dans la p

        p.innerHTML = text.value;


        // ajouter les element creer dans la balise p qui regroupe les taches
        tache.appendChild(input)
        tache.appendChild(p)
        tache.appendChild(image)

        // ajouter la tache aux taches
        taches.appendChild(tache)
        
        //réinitialisation de la tache
        text.value =""

        //incrementer
        nombres++
}
})


taches.addEventListener('click',(e)=>{
    if(e.target.id==="btn-supprimer"){
        const tache = e.target.closest('.tache')
        tache.remove();
    }
})
