import React from 'react';
import Grid from './grid';
import IconButton from '../template/iconButton';

export default props => {
    const keyHandler = (e) => {
        console.log('chamado')
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if(e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="todoForm">
            <Grid cols='12 9 10'>
                <input 
                id="description" 
                className="form-control" 
                placeholder="Adicione uma tarefa" 
                type="text" 
                value={props.description} 
                onChange={props.handleChange}
                onKeyUp={keyHandler} />
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton onClick={props.handleAdd} estilo='primary' icon='plus' />
                <IconButton onClick={props.handleSearch} estilo='info' icon='search' />
                <IconButton onClick={props.handleClear} estilo='default' icon='close' />
            </Grid>
        </div>
    )
}
