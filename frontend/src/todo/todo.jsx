import React, { Component } from 'react';
import axios from 'axios'

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor() {
        super()
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handlePending = this.handlePending.bind(this)
        this.handleDone = this.handleDone.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }
    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp => this.setState({...this.state, description, list: resp.data}))
    }
    handleSearch() {
        this.refresh(this.state.description)
    }
    handleAdd() {
        const description = this.state.description
        axios.post(URL, {description})
        .then(resp => this.refresh())
    }
    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleDone(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => this.refresh(this.state.description))
    }

    handlePending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }
    handleClear() {
        this.refresh()
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                handleChange={this.handleChange} 
                description={this.state.description} 
                handleAdd={this.handleAdd}
                handleSearch={this.handleSearch} 
                handleClear={this.handleClear} 
                 />
                <TodoList 
                handleDone={this.handleDone} 
                handlePending={this.handlePending}
                handleRemove={this.handleRemove}
                list={this.state.list} />
            </div>
        )
    }
}