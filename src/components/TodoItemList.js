import React, { Component } from 'react';
import TodoItem from './TodoItem';
import '../styles/_todoitemlist.scss';

class TodoItemList extends Component {
    render() {
        const { items, onToggle, onRemove } = this.props;
        const itemList = items.map(
            item => (
                <TodoItem
                    key={item.id}
                    name={item.name}
                    finished={item.finished}
                    id={item.id}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            )
        )
        return (
            <ul className="list">
                {itemList}
            </ul>
        );
    }
}

export default TodoItemList;