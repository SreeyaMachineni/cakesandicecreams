import React from 'react'
import './Form.css'
import Title from './Title'
import Img from './Img'
import RegisterForm from './RegisterForm'

class Register extends React.Component{
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
                        <RegisterForm history={this.props.history}/>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Register