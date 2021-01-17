import React, {Component} from 'react';
import './post-add-form.css';


export default class PostAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            text : ''
        }
        this.changeValue = this.changeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    changeValue(event){
        this.setState({
            text:event.target.value
        });
    }
    onSubmit(event){
        event.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text:''
        });
    }
   

    render(){
        return (
            <form className="d-flex bottom-panel"
                  onSubmit={this.onSubmit}>
               
                <input
                    type="text"
                    placeholder="О чем вы сейчас думаете?"
                    className="form-control new-post-label"
                    onChange={this.changeValue}
                    value={this.state.text}
                  
                />
                <button className="btn btn-outline-secondary">Добавить</button>
            </form>
        )
    }
}

