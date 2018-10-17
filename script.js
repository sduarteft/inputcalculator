

    function operadorGlobal(somaGeral){
        // Calculo Gato
        var gato = document.querySelector(".gato").value;
        var x = 200/1000;
        var totalGato = gato * x;
    
        // Calculo Cachorro
        var cachorro = document.querySelector(".cachorro").value;
        var y = 300/1000;
        var totalCachorro = cachorro * y;
     
    
        var leao = document.querySelector(".leao").value;
        var z = 500/1000;
        var totalleao = leao * z;
    
    //TESTE
    
    
         somaGeral = totalCachorro + totalGato + totalleao;
        document.querySelector(".resultado").innerHTML = somaGeral.toFixed(2);
        
    console.log(somaGeral);



    function valida(event)
    {
        if(somaGeral >=4){
            document.querySelector(".hide").innerHTML = "Passou do limite";
            
         }
         else{
             document.querySelector('.hide').innerHTML = "";
         }
     
    }
    valida();
    
    
    }





   


    


   
   

   











  










   



   
 



   
       
    

        



 
    
    
        
   
   
  





    
    