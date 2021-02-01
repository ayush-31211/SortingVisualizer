import React, { useState } from 'react';
import Header from './header';
import getMergeSort from './algo/mergesort';
import getBubbleSort from './algo/bubblesort';
import getSelectionSort from './algo/selectionsort';
import getInsertionSort from './algo/insertionsort';
import getQuickSort from "./algo/quicksort";
import Bar from "./Bar";
import getBubbleSortAnime from './animation/bubblesort';
import getSelectionSortAnime from './animation/selectionsort';
import getMergeAnime from './animation/mergesort';
import getInsertionAnime from './animation/insertionsort';
import getQuickSortAnime from './animation/quicksort';



function Container()
{
    /* Function to set Array */
    // var [width,setWidth]=useState(2);
    var width=1.5,ANIM_SPEED=500;
    function getRandomArray() 
    {
        let temp=[];
        for(let i=0;i<10;i++)
        temp.push(Math.floor(Math.random()*50)+1);
        return temp;
    }
    var [arr,setArr]=useState(getRandomArray());

    function setArrUtil(temp)
    {
        arr=temp;
        setArr(arr);
    }
    /**
     * generate random array starts
     */
    function genRandomArray()
    {
        
        setArrUtil(getRandomArray());
        // document.querySelector("#sec_array").style.display="none";


    }
    /**
     * generate random array ends
     */

    /**
     * Functions for Merge sort starts
     */
    function MergeSort() {
        document.getElementsByClassName("barContainer").sec_array.style.display='flex';
        console.log("Merge",arr);
        let array=getMergeSort(arr);
        console.log(array);
        getMergeAnime(arr,array.animation,ANIM_SPEED);
        arr=array.arr;
        // setArrUtil(array.arr);
    }

    /**
     * Functions for Merge sort ends
     */

    /**
     * Functions for Bubble Sort starts
     */
    


    function BubbleSort()
    {
        console.log("Bubble",arr);
        let array=getBubbleSort(arr);
        console.log(array.arr,arr);
        arr=getBubbleSortAnime(arr.slice(),array.animation,ANIM_SPEED);

    }

    /**
     * Functions for Bubble Sort ends
     */

     
    /**
     * Functions for Selection Sort starts
     */
    function SelectionSort()
    {
        console.log("Selection",arr);
        let array=getSelectionSort(arr);
        console.log(array);
        getSelectionSortAnime(array.animation,ANIM_SPEED);
        arr=array.arr;
        // setArrUtil(array.arr);

    }
    
    /**
     * Functions for Selection Sort ends
     */
    
    /**
     * Function for Insertion Sort starts
     */
    function InsertionSort()
    {
        console.log("Insertion",arr);
        let array=getInsertionSort(arr);
        console.log(array);
        getInsertionAnime(array.animation.array,array.animation.temp,ANIM_SPEED)
        // setArrUtil(array.arr);

    }

    /**
     * Functions for Quick Sort ends
     */
    
    /**
     * Function for Insertion Sort starts
     */
    function QuickSort()
    {
        console.log("Quick",arr);
        let array=getQuickSort(arr);
        console.log(array);
        getQuickSortAnime(array.animation,ANIM_SPEED);
        arr=array.arr;
        // setArrUtil(array.arr);

    }

    /**
     * Functions for Quick Sort ends
     */







    
    return (
        <>
        <Header 
        genRandomArray={genRandomArray}
        MergeSort={MergeSort}
        BubbleSort={BubbleSort}
        SelectionSort={SelectionSort}
        InsertionSort={InsertionSort}
        QuickSort={QuickSort}
        />

        <div className="container">
            {
                <div className="barContainer" id="primary_array">
                {arr.map((value,index)=>{return <Bar
                    key={index}
                    width={width}
                    height={value}
                    />})}
                </div>
            }
            <br></br>
            {
                <div className="barContainer" id="sec_array">
                {[0,0,0,0,0,0,0,0,0,0].map((value,index)=>{return <Bar
                    key={index}
                    width={width}
                    height={value}
                    />})}
                </div>
            }
        </div>
        

        </>
    );
}
export default Container;