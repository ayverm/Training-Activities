const arr1 = [1,2,3,4,4];

function duplicates()
{
    const arr2 = new Array();
    for(let i =0;i<arr1.length;i++)
    {
        if(arr2.includes(arr1[i]))
        {
            continue;
        }
        else
        {
            arr2.push(arr1[i])
        }
    }

    console.log(arr2);
    
}

duplicates();