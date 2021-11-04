import axios from 'axios'
import React, { Component, useState } from 'react'
import Main from '../template/Main'

import './ProgressBar.css'

const headerProps = {
    icon: 'clientes',
    title: 'Clientes',
    subtitle: 'Cadastro de clientes: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/cliente'
const initialState = {
    cliente: { id: parseInt(''), numeroCliente: parseInt(), nomeCliente: '', 

    usinas: { usinaId: parseInt('1'), nomeUsina: 'Belo Monte', 
              percentualDeParticipacao: parseInt('')}

},
    list: []
}

export default class ClienteCrud extends Component {

    state = { ...initialState, percent: 0}

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ cliente: initialState.cliente })
        this.state.percent = 0
    }

    save() {
        const cliente = this.state.cliente
        const method = cliente.id ? 'put' : 'post'
        const url = cliente.id ? `${baseUrl}/${cliente.id}` : baseUrl
        axios[method](url, cliente)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ cliente: initialState.cliente, list }) 
            })
            this.state.percent = 0
    }

    getUpdatedList(cliente, add = true) {
        const list = this.state.list.filter(t => t.id !== cliente.id)
        if (add) list.unshift(cliente)
        return list
    }

    updateField(event) {
        const cliente = { ...this.state.cliente }
        cliente[event.target.name] = event.target.value
        this.setState({ cliente })
    }
    updateProgress = (field, val) => {
        this.setState({ [field]: val });
       
    };

    renderForm() {
         
        return (
            
            <div className="form">

                <div className="row">

                <div className="col-12 col-md-6">

                        <div className="form-group">

                            <label>Número do Cliente</label>

                            <input 

                                type="number" 

                                className="form-control"

                                name="numeroCliente"

                                value={this.state.cliente.numeroCliente}   

                                onChange={e => this.updateField(e)}

                                placeholder="Digite o número..." 
                                
                                />

                        </div>

                    </div>

                    <div className="col-12 col-md-6">

                        <div className="form-group">

                            <label>Nome</label>

                            <input 

                                type="text" 

                                className="form-control"

                                name="nomeCliente"

                                value={this.state.cliente.nomeCliente} 

                                onChange={e => this.updateField(e)}

                                placeholder="Digite o nome..." 
                                
                                />

                        </div>

                    </div>

                    <div className="col-12 col-md-6">

                        <div className="form-group">

                            <label>Usina</label>

                            <input 

                                type="text" 

                                className="form-control"

                                name="usinas.nomeUsina"

                                value={this.state.cliente.usinas.nomeUsina}

                                onChange={e => this.updateField(e)}
                                
                                />

                        </div>

                    </div>

                    <div className="col-12 col-md-6">

                        <div className="form-group">
                            
                            <input 

                                type="hidden" 

                                className="form-control"

                                name="usinas.usinaId"

                                value={1}           
                                                      
                                onChange={e => this.updateField(e)}
                                
                                />

                        </div>

                    </div>

                    <div className="col-12 col-md-6">

                        <div className="form-group">

                        <label>Percentual de Participação:</label>
                            
                            <div className={"progressComp"}>
                                
                                <h1 className="percent-number">{this.state.percent}%
                                
                                <div className="progress-div" style={{width: 400}}>
                                    
                                    <div

                                        className="progress"   

                                        style={{width: `${this.state.percent * 4}px`}}

                                        onChange={e => this.updateField(e)}
                                        
                                        />

                                    </div>

                                </h1>

</div>

<div className="col-12 col-md-6">

    <div className="form-group">

        <input

            type="hidden"

            className="form-control"

            name="usinas.percentualDeParticipacao"

            value= {this.state.cliente.usinas.percentualDeParticipacao = this.state.percent}

            onChange={e => this.updateField(e)}

                             >

        </input>
    
    </div>

    <div className="row">
    
    <div className="col-12 d-flex justify-content-end">
        
        <button className="btn btn-primary"
        
        onClick={() => this.updateProgress("percent", this.state.percent + 10)}>
                
                +   10%
                
        </button>

        <div></div>
        
        <button 
        
            className="btn btn-primary"
            
            onClick={() => this.updateProgress("percent", this.state.percent - 10)}>
                
                - 10%
                
        </button>
    
    </div>
    
</div>

</div>

</div>

</div>

</div>

<hr/>

<div className="row">
    
    <div className="col-12 d-flex justify-content-end">
        
        <button className="btn btn-primary"
        
            onClick={e => this.save(e)}>
                
                Salvar
                
        </button>
        
        <button 
        
            className="btn btn-secondary ml-2"
            
            onClick={e => this.clear(e)}>
                
                Cancelar
                
        </button>
    
    </div>
    
</div>

</div>

)

}

load(cliente){
    
    this.setState({ cliente })
    
    this.state.percent = cliente.usinas.percentualDeParticipacao                                        }

    remove(cliente){
        
        axios.delete(`${baseUrl}/${cliente.id}`).then(resp => {
        
            const list = this.getUpdatedList(cliente, false)

            this.setState({ list })

        })
    }

    renderTable(){

        return(

            <table className="table mt-4">

                <thead>

                <tr>      

                        <th></th>                        
                        <th></th>
                        <th></th>
                        <th></th>

                    </tr>

                    <tr>

                        <th>Nome</th>
                        <th>Usinas</th>
                        <th>Percentual de Participação</th>
                        <th>Ações</th>
                        
                    </tr>

                </thead>

                <tbody>

                    {this.renderRows()}

                </tbody>

            </table>

        )

    }

    renderRows() {

        return this.state.list.map( cliente => {

            return (

                <tr key={cliente.id}>

                    <td>{cliente.nomeCliente}</td>

                    <td>{cliente.usinas.nomeUsina}</td>
                                     
                    <td>{cliente.usinas.percentualDeParticipacao}%

                        <div className="progress-div" style={{width: 100}}>

                        <div style={{width: `${cliente.usinas.percentualDeParticipacao * 1.1}px`}}className="progress" /></div></td>

                    <td>

                        <button className="btn btn-warning"

                            onClick={() => this.load(cliente)}>

                            <i className="fa fa-pencil"></i>

                        </button>

                        <button className="btn btn-danger ml-2"

                            onClick={() => this.remove(cliente)}>

                            <i className="fa fa-trash"></i>

                        </button>

                    </td>

                </tr>

            )

        })

    }

    render() {

        return (

            <Main {...headerProps}>

                {this.renderForm()}
                {this.renderTable()}

            </Main>

        )

    }

}

