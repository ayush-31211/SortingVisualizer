function getInsertionSort(params) {
    var arr=params.slice();
    var temp=[];
    console.log("Temp Initial",temp,arr);
    /*for(let i=1;i<arr.length;i++)
    {
        let j=0;
        while(j<temp.length&&arr[i]>temp[j])
        {
            j++;
        }
        if(j>=temp.length)
        temp.push(arr[i]);
        else
        {
            temp.push(temp[temp.length-1]);
            for(let k=temp.length-1;k>j;k--)
            temp[k]=temp[k-1];
            temp[j]=arr[i];
        }
        console.log(i,arr[i],j,"Temp",temp);
    }
    return temp;*/
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i;j>0;j--)
        {
            if(arr[j]<arr[j-1])
            {
                [arr[j],arr[j-1]]=[arr[j-1],arr[j]];
                temp.push([j,j-1]);
            }
        }
    }
    return {
        arr:arr,
        animation:temp
    }

}
export default getInsertionSort;