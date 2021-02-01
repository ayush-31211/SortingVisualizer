function getQuickSortAnime(animation,ANIM_SPEED) {

    let color_range=animation.color_range.slice(),
    bound=animation.bound.slice(),
    compared=animation.compared.slice(),
    positioned=animation.positioned.slice(),
    array=animation.array.slice(),
    dom=document.getElementsByClassName('Bar'),
    time=0,
    n=color_range.length;
    
    for(let i=0;i<=n;i++)
    {
        if(i===n)
        {
            setTimeout(()=>{
                for(let j=0;j<10;j++)
                dom[j].firstChild.style.backgroundColor='white';
            },time+=ANIM_SPEED)
            continue;
        }
        setTimeout(()=>{
            for(let j=0;j<10;j++)
            {
                dom[j].firstChild.style.backgroundColor='white';
                dom[j].firstChild.style.height=`${array[i][j]*5}px`;
                dom[j].lastChild.innerText=array[i][j];
                dom[j].lastChild.style.color='white';
            }
            for(let j=color_range[i][0];j<=color_range[i][1];j++)
            {
                dom[j].firstChild.style.backgroundColor='yellow';
                
            }
            if(bound[i].length!==0)
            {
                dom[bound[i]].firstChild.style.backgroundColor='red';
                dom[bound[i]].lastChild.style.color='red';
                dom[compared[i][0]].firstChild.style.backgroundColor=dom[compared[i][1]].firstChild.style.backgroundColor=(compared[i][2])?"blue":'green';

            }

        },time+=ANIM_SPEED)


    }




}
export default getQuickSortAnime;