let decrees  = 0;
let incease = 0;
let input = document.querySelector('#celci');
document.querySelector('.btn').addEventListener('click',()=>{

    const person = [
        {name: "m u s t a f e",
          title: 'kiiladoortay'},
        
         {name:" maxamed",
         title: 'magacii nabiga'},
        
         {name:" jaamac",
         title: 'jaamac'},
        
         {name:" maxamuud",
         title: 'maxa uudale'},
        
        
         {name: "cabdilaahi",
         title: 'laangabawday'},
        
        {name: "yaasin",
        title: 'kiis yasan'},
        {name: "faarax",
        title: "farxiye"},
        {name: "maxamed",
        title: "nabiga magaciisa"},
        {name: "cabdiwahaab",
        title: 'wahaab'},
        
          
        ];
        
        let go = Math.floor(Math.random() * person.length);
        
        let ber = person[go].name.split("").sort().join('  . .');
        
        // console.log(ber);
        
        document.querySelector('.text').innerHTML = ber;
        
        document.querySelector('.dol').innerHTML = person[go].title;
        
document.querySelector('.cool').addEventListener('click',()=>{
    if (input === bell) {
        incease ++;
        document.querySelector('.descord').innerHTML = incease;
    }
})
    

});
