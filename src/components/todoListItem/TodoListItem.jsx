import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            editText: this.props.title
        };
    }

    toggleEditing = () => {
        this.setState(prevState => ({
            isEditing: !prevState.isEditing
        }));
    }

    handleInputChange = (e) => {
        this.setState({ editText: e.target.value });
    }

    saveEdit = () => {
        const { editText } = this.state;
        if (editText.trim()) {
            this.props.edittext(editText);
            this.toggleEditing(); // После сохранения изменений переключаем режим редактирования обратно
        }
    }

    render() {
        const { imp, done, delTodo, warningTodo, doneTodo } = this.props;
        const { isEditing, editText } = this.state;

        let content;
        if (isEditing) {
            content = (
                <>
                    <input
                        type="text"
                        value={editText}
                        onChange={this.handleInputChange}
                        className="form-control"
                    />
                    <button onClick={this.saveEdit} className='btn btn-outline-success'><i className="bi bi-check"></i></button>
                </>
            );
        } else {
            content = (
                <>
                    <span
                        onClick={() => doneTodo(id)}
                        className={`flex-grow-1 ${done ? 'done' : ''} ${imp ? 'imp' : ''}`}
                    >
                        {editText}
                    </span>
                    <button onClick={this.toggleEditing} className='btn btn-outline-info'><i className="bi bi-pen"></i></button>
                    <button onClick={() => delTodo(id)} className="btn btn-outline-danger"><i className="bi bi-trash-fill"></i></button>
                    <button onClick={() => warningTodo(id)} className="btn btn-outline-warning"><i className="bi bi-exclamation-circle-fill"></i></button>
                </>
            );
        }

        return (
            <span className='d-flex'>
                {content}
            </span>
        );
    }
}