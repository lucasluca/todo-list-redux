import React, { Component } from 'react';
import Grid from './grid';
import IconButton from '../template/iconButton';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search, add, clear } from './todoActions'

class TodoForm extends Component {
    constructor() {
        super()
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
        console.log('search done')
    }

    keyHandler(e) {
        const { add, search, description, clear } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, description, clear } = this.props
        return (
            <div role="form" className="todoForm">
                <Grid cols='12 9 10'>
                    <input
                        id="description"
                        className="form-control"
                        placeholder="Adicione uma tarefa"
                        type="text"
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler} />
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton onClick={() => add(description)} estilo='primary' icon='plus' />
                    <IconButton onClick={() => search()} estilo='info' icon='search' />
                    <IconButton onClick={clear} estilo='default' icon='close' />
                </Grid>
            </div>
        )
    }
}


const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
