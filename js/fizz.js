var numero =100;
for(i= 1 ; i <= 100; i++){
    if(esDivisible(i,3)){
        document.write('fixx');
    }
     if(esDivisible(i,5)){
        document.write('Bozz');
    }
  
     if(!esDivisible(i,3) && !esDivisible(i,5)){
        document.write(i);
        
    }
        
    
document.write('<br />');

}

function esDivisible(num,divisible){
    if(num%divisible==0){
        return true;
    }else{
        return false;
    }
}