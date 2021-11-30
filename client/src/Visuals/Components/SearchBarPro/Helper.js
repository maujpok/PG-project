export function Filter(obj,arr){
    const {name,profesion, country, min,max, likes} = obj
    // console.log(arr)
    if(name){
        let nameResult = name.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join( ' ');
       let nameResultReverse = nameResult.split(' ').reverse().join(' ')
        let arrOne = name.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1));
        
        arr = arr.filter(e => 
            e.fullname.includes(nameResult) 
            || e.fullname.includes(arrOne[0])
            || e.fullname.includes(nameResultReverse)
            );
    }
    if(profesion){
        arr = arr.filter(e => e.category.name === profesion);
    }
    if(country){
     
        arr = arr.filter(e => e.country.name === country);
      
    }

    //Likes Funciona colocar valor de regla
    if(likes){
        const likesTotal = arr.map(e => e.likes).reduce((a,b) => a + b, 0)
        const dislikesTotal = arr.map(e => e.dislikes).reduce((a,b) => a + b, 0)
       //Los valores de likes y dislikes son demasiado altos. 
        let val = (likesTotal+dislikesTotal)/2;
        switch (likes) {
            case 'Iniciado':
               
                arr = arr.filter(e => e.likes < (val/3))
                break;
            case 'Intermedio':
                
                arr = arr.filter(e => e.likes > (val/3) && e.likes < (val/2));
                break;
            case 'Popular':
              
                arr = arr.filter(e => e.likes > (val/2));
                break;
            default:
                break;
        }
    }
    if(min && max){
       alert('jaja no funciona aun porque no llega precio')
    }
        
     return arr
}