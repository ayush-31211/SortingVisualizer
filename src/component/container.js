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



function Container()
{
    /* Function to set Array */
    var [width,setWidth]=useState(2);
    
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
    }
    /**
     * generate random array ends
     */

    /**
     * Functions for Merge sort starts
     */
    function MergeSort() {
        console.log("Merge",arr);
        let array=getMergeSort(arr);
        console.log(array);
        setArrUtil(array.arr);
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
        arr=getBubbleSortAnime(arr.slice(),array.animation);

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
        getSelectionSortAnime(array.animation);
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
        setArrUtil(array.arr);

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
        setArrUtil(array);

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

        <div id="container">
            {/* <ul>
            {arr.map((value,index) => {
            return <li key={index} style={{color:"white"}}>{value}</li>;
            })}
            </ul> */}
            {
                <div className="barContainer">
                {arr.map((value,index)=>{return <Bar
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