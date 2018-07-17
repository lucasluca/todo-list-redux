import React from 'react';
import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className='tableActions'>
                    <IconButton estilo='success' icon='check' 
                    onClick={() => props.handleDone(todo)}
                    hide={todo.done} />
                    <IconButton estilo='warning' icon='undo' 
                    onClick={() => props.handlePending(todo)} 
                    hide={!todo.done}/>
                    <IconButton estilo='danger' icon='trash-o' 
                    onClick={() => props.handleRemove(todo)}
                    hide={!todo.done} />
                </td>
            </tr>
        )) 
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

