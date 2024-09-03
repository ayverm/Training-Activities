function simpleInterset(p,n,r)
{
    return p*r*n/100;
}

const result = simpleInterset(200,34,2);
console.log(`Simple Interest is : ${result}`);

function areaCircle(pi,r)
{
    return pi*r*r;
}

function circumferenceCircle(pi,r)
{
    return 2*pi*r;
}
const result1 = areaCircle(3.14,4);
const result2 = circumferenceCircle(3.14,4);
console.log(`Simple Interest is : ${result1}`);
console.log(`Circumference is : ${result2}`);

function table()
{
    for(let i=1;i<=10;i++)
    {
        console.log(`7 * ${i} = ${7*i}`);
    }
}
table();

function fibbo()
{
    let num1 = 0;
    let num2 = 1;
    let num3;
    console.log(num1);
    console.log(num2);
    
    for(let i=2;i<=8;i++)
    {
        num3 = num1+num2; 
        console.log(num1+num2);
        num1= num2;
        num2 = num3;
        
    }
}

fibbo();