import React from 'react'
import './Form.css'
import Title from './Title'
import Img from './Img'
import Login from './Login'
import Nav from './Nav'

class Form extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div>
             <Title/>
                <div className="imgForm">
                    <Img/>
                    <div className="formBox">
                        <Login history={this.props.history}/>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Form