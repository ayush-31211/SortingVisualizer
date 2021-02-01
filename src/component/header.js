import React from 'react';
import { Navbar,Button } from 'react-bootstrap';
import logo from '../images/logo.png'

function Header(props)
{
    return (
        <Navbar variant="dark" id='navbar'>
            <Navbar.Brand href="#home">
            <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            React Bootstrap
            </Navbar.Brand>
            <Button variant="outline-primary" onClick={props.genRandomArray}>Generate Random Array</Button>
            <Button variant="outline-primary" onClick={props.MergeSort}>Merge Sort</Button>
            <Button variant="outline-primary" onClick={props.QuickSort}>Quick Sort</Button>
            <Button variant="outline-primary" onClick={props.BubbleSort}>Bubble Sort</Button>
            <Button variant="outline-primary" onClick={props.InsertionSort}>Insertion Sort</Button>
            <Button variant="outline-primary" onClick={props.SelectionSort}>Selection Sort</Button>

        </Navbar>
    );
}
export default Header;