import './style.css';
import React from 'react';


class ConverterCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    takeInput = (e)=>{
        this.setState(
            {
                inputValue: e.target.value
            },
            ()=>{
                if (e.target.id === 'celsius-input'){
                    let result = (((9/5)*parseFloat(this.state.inputValue))+32);
                    document.getElementById('fahrenheit-input').value = result;
                }

                if (e.target.id === 'fahrenheit-input'){
                    let result = ((5/9)*(parseFloat(this.state.inputValue)-32));
                    document.getElementById('celsius-input').value = result;
                }
            }
        )
    }

    render(){
        return(
            <div className="main-card-container">
                <div className="card-title-converter">
                    <h1 id={this.props.titleId} className="card-title">{this.props.titleText}</h1>
                </div>
                <div className="input-container">
                    <input id={this.props.inputBoxId} className="input-box" type="number" onChange={this.takeInput}/>
                </div>
            </div>
        );
    }
}

export default ConverterCard;