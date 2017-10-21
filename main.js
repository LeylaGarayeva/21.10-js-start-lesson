function kv(a){
     sum=  a*a;
// 	console.log(sum)
}


///////////////////////////////////////////////////////////////////

function prime(num) {

  if (num === 2) {
    return num+":sade ededdir";
  }
  else if(num > 1){
    for (var i = 2;  i < num; i++) {

      if (num % i !== 0 ) {
        return num+":sade ededdir";
      }
      else {
        return num+":murekkeb ededdir";
      }
    }
  }
  else if(num<0){
  	return "musbet eded daxil edin";

  }
  else if(num==1){
  	return num+":ne sade ne murekkeb ededdir";
  }
  else {
    return num+":murekkeb ededdir";
  }

}

// console.log(prime(48));


/////////////////////////////////////////////////////////////////////

function kv(a,b){
	return a*b;
}

function perimetr(a,b){
	return (a+b)*2;
}

function cem(a,b){
    var cem = kv(a,b) + perimetr(a,b); 	
    return cem;
}
console.log(cem(2,3));