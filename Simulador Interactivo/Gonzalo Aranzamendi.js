

    let serieFibo = parseInt(prompt("cuantos numeros de la serie de fibonacci quiere ver?"))

    NumerosFibo(serieFibo)

    function NumerosFibo (serieFibo){
    
        if( isNaN( serieFibo )){
            alert("ingreso invalido")
            return
    }


if(serieFibo==0){
      console.log("Si no queres ver numeros de la serie de Fibo pa' que viniste ")
    return
    }

    if(serieFibo==1){
        console.log("El primer numero de la serie de fibo es 0")
    return        
    }



    console.log("serie de fibo:")
    console.log(0)

    console.log(1);



for (var i = 2; i < serieFibo; i++) {
  console.log( (i - 2) + (i - 1))
}


    }