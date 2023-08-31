import React, { Component } from 'react'
import spinner from './spinner.gif';
export default class Spinner extends Component{
    render(){
         return(
            <div className='text-center w-100'>
            <img src={spinner} alt="" srcset="" className='h-25' />
            </div>
        )
    }
}