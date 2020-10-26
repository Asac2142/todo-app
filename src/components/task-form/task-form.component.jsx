import React from 'react';
import { connect } from 'react-redux';

import { HexColorPicker } from 'react-colorful';
import { addTask } from '../../redux/todoList/todoList.actions';

import './task-form.styles.scss';
import 'react-colorful/dist/index.css';

class TaskForm extends React.Component { 

    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            color: '',
            dateCreated: null
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleColor = (taskColor) => {        
        this.setState({color: taskColor});
    }

    display = () => {
        const {name, description, color} = this.state;
        if (name && description && color) {
            this.setState({dateCreated: new Date()}, () => {console.log('TASK CREATED:', this.state); this.clearForm()});
        } else {
            alert('Faltan datos para tarea');
        }
    }

    clearForm = () => {
        this.setState({
            name: '',
            description: '',
            color: '',
            dateCreated: null
        })
    }

    render() {
        const { name, description } = this.state;
        return (
            <div className='form'>
                <label className='label_name'>Task name</label>
                <div>
                    <input
                        autoComplete='off' 
                        onChange={this.handleChange} 
                        placeholder='Give your task a name' 
                        type='text' 
                        name='name'
                        value={name}
                        className='input_task'
                    />
                </div>
            
                <label className='label_description'>Description</label>
                <div>
                    <input 
                        autoComplete='off' 
                        onChange={this.handleChange} 
                        className='input_description' 
                        name='description'
                        type='text' 
                        value={description}
                        placeholder='What is the task about?'
                    />                
                </div>
            
                <label className='label_color'>Color</label>
                <div className='hexcolor'>
                    <HexColorPicker onChange={this.handleColor}/>
                </div>
            
                <div className='btn-container'>
                    {/* <button type='button' name='save' className='btnSave' onClick={this.props.addTaskToTODO(this.state.task)}>Save</button> */}
                    <button 
                        type='button' 
                        name='save' 
                        className='btnSave' 
                        onClick={this.display}>Save
                    </button>
                </div>
            </div>
        )
    }    
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTaskToTODO: (task) => dispatch(addTask(task))
    }
}

//export default connect(null, mapDispatchToProps)(TaskForm);
export default TaskForm;
