import React from 'react';
import { connect } from 'react-redux';

import { HexColorPicker } from 'react-colorful';
import { addTask } from '../../redux/todoList/todoList.actions';

import './task-form.styles.scss';
import 'react-colorful/dist/index.css';

class TaskForm extends React.Component { 

    // constructor() {
    //     super()
    //     this.state = {
    //         task: {
    //             name: '',
    //             description: '',
    //             color: ''
    //         }
    //     }
    // }
    
    handleName = (taskName) => {
        //this.setState({name: taskName});
    }

    handleDescription = (taskDescription) => {
        //this.setState({description: taskDescription});
    }

    handleColor = (taskColor) => {
        //this.setState({color: taskColor});
    }

    render() {
        return (
            <div className='form'>
                <label className='label_name'>Task name</label>
                <div>
                    <input placeholder='Give your task a name' type='text' name='taskname' className='input_task'/>
                </div>
            
                <label className='label_description'>Description</label>
                <div>
                    <input className='input_description' name='taskdescription' type='text' placeholder='What is the task about?'/>                
                </div>
            
                <label className='label_color'>Color</label>
                <div>
                    <HexColorPicker />
                </div>
            
                <div className='btn-container'>
                    {/* <button type='button' name='save' className='btnSave' onClick={this.props.addTaskToTODO(this.state.task)}>Save</button> */}
                    <button type='button' name='save' className='btnSave' >Save</button>
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
