import React from 'react';

import './Input.css';

class Input extends React.Component {
    constructor(props){
        super(props);
        const {defaultChecked=false} = props;
        this.state = {
            isActive: false,
            defaultChecked
        }
        this.handleClick = this.handleClick.bind(this);
    };

    componentDidMount(){
        this.state.defaultChecked = false;
    }

    handleClick(e){
        const buttonAll = document.getElementById('all');
        buttonAll.id !== this.props.id && buttonAll.setAttribute('class' ,'radio-button');
        this.setState({
            isActive: true
        })
    }

    render() {
        const { id, onClick } = this.props;
        const { isActive, defaultChecked } = this.state;

        return (
            <div 
                id={id} 
                onClick={() => {this.handleClick(); onClick(this);} } 
                className={`radio-button  ${(isActive || defaultChecked) ? 'active' : ''}`}
            >
                {this.props.children}
            </div>
        )
    };
};

export default Input;