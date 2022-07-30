function calcFact( num )
{
fact = 1;
for( i = num; i >= 1; i-- )
{
fact = fact * i;
}
return fact;
}
let num = 5
console.log( calcFact ( num ) )