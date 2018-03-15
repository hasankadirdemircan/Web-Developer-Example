/* matematiksel operatorler */
var x = 10;
var y = 20;
var z = 10;

console.log(x+y);
console.log(x*y);
console.log(x/y);
console.log(x*y+z);
console.log(x*(y+z));

x++;
x = x+1;
console.log(x);

var k = 10
/* karşılaştırma operatorleri */

var sonuc = x>y;
console.log(sonuc);

console.log(x<y);
/*  iki eşittir icerige bakar, uc esittir  ilk tiplerine daha sonra icerige bakar. */
console.log(k=="10"); //true
console.log(k==="10");//false
console.log(k != z); //false
console.log(k===z)//true

/*  mantiksal operatorler */
/*  AND */ 
console.log((z>k) && (y>z)) // false and true  = false;
console.log((10>20) && (40>30)); //false
/*  OR */
console.log((10>20) || (40>30)); //true
/* NOT */
console.log(!(10<20)); //false