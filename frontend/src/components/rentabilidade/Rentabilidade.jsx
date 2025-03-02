import axios from 'axios'
import React, { Component, useState } from 'react'
import Main from '../template/Main'

import './ProgressBar.css'

const headerProps = {
    icon: 'clientes',
    title: 'Rentabilidade Financeira',
    subtitle: 'Retorno financeiro gerado!'
}

const baseUrl = 'http://localhost:3001/cliente'
const initialState = {
    cliente: { id: parseInt(''), numeroCliente: parseInt(''), nomeCliente: '', 

    usinas: { usinaId: parseInt('1'), nomeUsina: 'Belo Monte', 
              percentualDeParticipacao: parseInt('')}

},
    list: []
}

export default class Rentabilidade extends Component {

    state = { ...initialState, percent: 0, rendimentoTotal: 0}    

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
                      
                      <label >Gráfico de  {this.state.grandeza.nome}</label>
                  
                  </div>
                  
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

    renderForm() {
        
      return (
      
      <div className="form">
          
          <div className="row">
              
              <div className="col-12 col-md-6">
                  
                  <div className="form-group">
                      
                      <label >Clientes e suas respectivas remunerações diárias!</label>
                  
                  </div>
                  
              </div>
          
          </div>
          
      </div>
      
      )
  
  }

    renderTable(){        

        return(            

            <table className="table mt-4">

                <thead>                
                        <th>Nome</th>                        
                        <th>Percentual de Participação</th>
                        <th>Retorno</th>                    
                </thead>
                
                <tbody>

                    {this.renderRows()}
                     
                </tbody>                

            </table>
        )
    }

    renderRows() {

        const data = [
            {
              tempo_h: 5.333333333333333,
              tensao_V: 550.9,
              corrente_A: 0,
              potencia_kW: 0,
              temperatura_C: 26.2
            },
            {
              tempo_h: 5.416666666666667,
              tensao_V: 623.2,
              corrente_A: 0,
              potencia_kW: 0,
              temperatura_C: 29.1
            },
            {
              tempo_h: 5.5,
              tensao_V: 635,
              corrente_A: 0,
              potencia_kW: 0.254,
              temperatura_C: 30.3
            },
            {
              tempo_h: 5.583333333333333,
              tensao_V: 578.2,
              corrente_A: 0,
              potencia_kW: 0.636,
              temperatura_C: 32.4
            },
            {
              tempo_h: 5.666666666666667,
              tensao_V: 577.7,
              corrente_A: 0,
              potencia_kW: 0.924,
              temperatura_C: 33.6
            },
            {
              tempo_h: 5.75,
              tensao_V: 612.7,
              corrente_A: 0,
              potencia_kW: 1.347,
              temperatura_C: 34.5
            },
            {
              tempo_h: 5.833333333333333,
              tensao_V: 630.7,
              corrente_A: 0.2,
              potencia_kW: 1.639,
              temperatura_C: 35.3
            },
            {
              tempo_h: 5.916666666666667,
              tensao_V: 625.2,
              corrente_A: 0.2,
              potencia_kW: 2,
              temperatura_C: 36.1
            },
            {
              tempo_h: 6,
              tensao_V: 642.2,
              corrente_A: 0.3,
              potencia_kW: 2.504,
              temperatura_C: 36.7
            },
            {
              tempo_h: 6.083333333333333,
              tensao_V: 647.2,
              corrente_A: 0.4,
              potencia_kW: 2.912,
              temperatura_C: 37.3
            },
            {
              tempo_h: 6.166666666666667,
              tensao_V: 651.2,
              corrente_A: 0.4,
              potencia_kW: 3.321,
              temperatura_C: 38
            },
            {
              tempo_h: 6.25,
              tensao_V: 655.2,
              corrente_A: 0.4,
              potencia_kW: 3.603,
              temperatura_C: 38.6
            },
            {
              tempo_h: 6.333333333333333,
              tensao_V: 661.2,
              corrente_A: 0.6,
              potencia_kW: 4.562,
              temperatura_C: 39.2
            },
            {
              tempo_h: 6.416666666666667,
              tensao_V: 664.2,
              corrente_A: 0.69,
              potencia_kW: 5.247,
              temperatura_C: 39.7
            },
            {
              tempo_h: 6.5,
              tensao_V: 666.9,
              corrente_A: 0.69,
              potencia_kW: 5.535,
              temperatura_C: 40.3
            },
            {
              tempo_h: 6.583333333333333,
              tensao_V: 670,
              corrente_A: 0.8,
              potencia_kW: 5.963,
              temperatura_C: 40.7
            },
            {
              tempo_h: 6.666666666666667,
              tensao_V: 669,
              corrente_A: 0.8,
              potencia_kW: 6.355,
              temperatura_C: 41.1
            },
            {
              tempo_h: 6.75,
              tensao_V: 673.5,
              corrente_A: 0.89,
              potencia_kW: 7.677,
              temperatura_C: 41.5
            },
            {
              tempo_h: 6.833333333333333,
              tensao_V: 676,
              corrente_A: 1.1,
              potencia_kW: 8.585,
              temperatura_C: 41.8
            },
            {
              tempo_h: 6.916666666666667,
              tensao_V: 677.59,
              corrente_A: 1.29,
              potencia_kW: 9.554,
              temperatura_C: 42.2
            },
            {
              tempo_h: 7,
              tensao_V: 679.2,
              corrente_A: 1.39,
              potencia_kW: 11.003,
              temperatura_C: 42.5
            },
            {
              tempo_h: 7.083333333333333,
              tensao_V: 678.79,
              corrente_A: 1.7,
              potencia_kW: 12.897,
              temperatura_C: 42.8
            },
            {
              tempo_h: 7.166666666666667,
              tensao_V: 677,
              corrente_A: 1.7,
              potencia_kW: 12.795,
              temperatura_C: 43.1
            },
            {
              tempo_h: 7.25,
              tensao_V: 666.29,
              corrente_A: 1.29,
              potencia_kW: 9.994,
              temperatura_C: 43.4
            },
            {
              tempo_h: 7.333333333333333,
              tensao_V: 684.9,
              corrente_A: 2.2,
              potencia_kW: 16.848,
              temperatura_C: 43.8
            },
            {
              tempo_h: 7.416666666666667,
              tensao_V: 678.79,
              corrente_A: 2.29,
              potencia_kW: 18.056,
              temperatura_C: 40
            },
            {
              tempo_h: 7.5,
              tensao_V: 676.4,
              corrente_A: 2.4,
              potencia_kW: 18.059,
              temperatura_C: 35.9
            },
            {
              tempo_h: 7.583333333333333,
              tensao_V: 672.5,
              corrente_A: 2.5,
              potencia_kW: 19.099,
              temperatura_C: 35.3
            },
            {
              tempo_h: 7.666666666666667,
              tensao_V: 676.2,
              corrente_A: 2.7,
              potencia_kW: 20.353,
              temperatura_C: 34.8
            },
            {
              tempo_h: 7.75,
              tensao_V: 681.59,
              corrente_A: 2.79,
              potencia_kW: 22.288,
              temperatura_C: 35.1
            },
            {
              tempo_h: 7.833333333333333,
              tensao_V: 662.79,
              corrente_A: 2.09,
              potencia_kW: 15.907,
              temperatura_C: 35.6
            },
            {
              tempo_h: 7.916666666666667,
              tensao_V: 648.2,
              corrente_A: 2.09,
              potencia_kW: 15.621,
              temperatura_C: 35.6
            },
            {
              tempo_h: 8,
              tensao_V: 684.09,
              corrente_A: 3.79,
              potencia_kW: 29.895,
              temperatura_C: 36
            },
            {
              tempo_h: 8.083333333333334,
              tensao_V: 682.4,
              corrente_A: 3.79,
              potencia_kW: 30.776,
              temperatura_C: 35.9
            },
            {
              tempo_h: 8.166666666666666,
              tensao_V: 664.29,
              corrente_A: 1.89,
              potencia_kW: 14.946,
              temperatura_C: 39.2
            },
            {
              tempo_h: 8.25,
              tensao_V: 663.4,
              corrente_A: 2.4,
              potencia_kW: 18.177,
              temperatura_C: 38.2
            },
            {
              tempo_h: 8.333333333333334,
              tensao_V: 693.5,
              corrente_A: 3.59,
              potencia_kW: 29.569,
              temperatura_C: 36.3
            },
            {
              tempo_h: 8.416666666666666,
              tensao_V: 656.9,
              corrente_A: 2.59,
              potencia_kW: 20.232,
              temperatura_C: 36.7
            },
            {
              tempo_h: 8.5,
              tensao_V: 658.29,
              corrente_A: 3.7,
              potencia_kW: 31.745,
              temperatura_C: 36.4
            },
            {
              tempo_h: 8.583333333333334,
              tensao_V: 657.09,
              corrente_A: 5.19,
              potencia_kW: 39.031,
              temperatura_C: 36.8
            },
            {
              tempo_h: 8.666666666666666,
              tensao_V: 653.7,
              corrente_A: 5.3,
              potencia_kW: 40.006,
              temperatura_C: 37.4
            },
            {
              tempo_h: 8.75,
              tensao_V: 649.4,
              corrente_A: 3.2,
              potencia_kW: 24.287,
              temperatura_C: 38.4
            },
            {
              tempo_h: 8.833333333333334,
              tensao_V: 671.09,
              corrente_A: 3.59,
              potencia_kW: 34.495,
              temperatura_C: 38.8
            },
            {
              tempo_h: 8.916666666666666,
              tensao_V: 658.79,
              corrente_A: 5.59,
              potencia_kW: 42.36,
              temperatura_C: 38.9
            },
            {
              tempo_h: 9,
              tensao_V: 641.4,
              corrente_A: 5.9,
              potencia_kW: 43.743,
              temperatura_C: 39.3
            },
            {
              tempo_h: 9.083333333333334,
              tensao_V: 647.79,
              corrente_A: 5.5,
              potencia_kW: 41.329,
              temperatura_C: 39.9
            },
            {
              tempo_h: 9.166666666666666,
              tensao_V: 652.79,
              corrente_A: 5.69,
              potencia_kW: 41.779,
              temperatura_C: 40.3
            },
            {
              tempo_h: 9.25,
              tensao_V: 649.29,
              corrente_A: 5.8,
              potencia_kW: 42.853,
              temperatura_C: 40.8
            },
            {
              tempo_h: 9.333333333333334,
              tensao_V: 648.2,
              corrente_A: 6,
              potencia_kW: 44.336,
              temperatura_C: 41.3
            },
            {
              tempo_h: 9.416666666666666,
              tensao_V: 642.09,
              corrente_A: 6.3,
              potencia_kW: 46.038,
              temperatura_C: 41.8
            },
            {
              tempo_h: 9.5,
              tensao_V: 649.7,
              corrente_A: 6.5,
              potencia_kW: 47.882,
              temperatura_C: 42.5
            },
            {
              tempo_h: 9.583333333333334,
              tensao_V: 644.9,
              corrente_A: 6.59,
              potencia_kW: 48.238,
              temperatura_C: 43.1
            },
            {
              tempo_h: 9.666666666666666,
              tensao_V: 639.29,
              corrente_A: 6.9,
              potencia_kW: 50.312,
              temperatura_C: 43.7
            },
            {
              tempo_h: 9.75,
              tensao_V: 642.4,
              corrente_A: 7.09,
              potencia_kW: 52.419,
              temperatura_C: 43.6
            },
            {
              tempo_h: 9.833333333333334,
              tensao_V: 633,
              corrente_A: 7.59,
              potencia_kW: 56.147,
              temperatura_C: 44.1
            },
            {
              tempo_h: 9.916666666666666,
              tensao_V: 619.29,
              corrente_A: 3.79,
              potencia_kW: 29.169,
              temperatura_C: 44.8
            },
            {
              tempo_h: 10,
              tensao_V: 629.09,
              corrente_A: 2.9,
              potencia_kW: 20.886,
              temperatura_C: 45.5
            },
            {
              tempo_h: 10.08333333333333,
              tensao_V: 669.9,
              corrente_A: 6.9,
              potencia_kW: 51.416,
              temperatura_C: 45.7
            },
            {
              tempo_h: 10.16666666666667,
              tensao_V: 644.09,
              corrente_A: 8.1,
              potencia_kW: 59.063,
              temperatura_C: 44.4
            },
            {
              tempo_h: 10.25,
              tensao_V: 644.4,
              corrente_A: 7.9,
              potencia_kW: 58.189,
              temperatura_C: 45.2
            },
            {
              tempo_h: 10.33333333333333,
              tensao_V: 662.29,
              corrente_A: 6.4,
              potencia_kW: 42.387,
              temperatura_C: 46
            },
            {
              tempo_h: 10.41666666666667,
              tensao_V: 632.59,
              corrente_A: 7.8,
              potencia_kW: 55.722,
              temperatura_C: 46.2
            },
            {
              tempo_h: 10.5,
              tensao_V: 628.79,
              corrente_A: 7.9,
              potencia_kW: 56.466,
              temperatura_C: 46.5
            },
            {
              tempo_h: 10.58333333333333,
              tensao_V: 625.59,
              corrente_A: 8.1,
              potencia_kW: 57.993,
              temperatura_C: 47.2
            },
            {
              tempo_h: 10.66666666666667,
              tensao_V: 639.9,
              corrente_A: 8.5,
              potencia_kW: 61.664,
              temperatura_C: 48.1
            },
            {
              tempo_h: 10.75,
              tensao_V: 608.59,
              corrente_A: 3.09,
              potencia_kW: 21.787,
              temperatura_C: 49.3
            },
            {
              tempo_h: 10.83333333333333,
              tensao_V: 657.9,
              corrente_A: 8.69,
              potencia_kW: 65.066,
              temperatura_C: 48.4
            },
            {
              tempo_h: 10.91666666666667,
              tensao_V: 617.79,
              corrente_A: 3.29,
              potencia_kW: 23.959,
              temperatura_C: 48.9
            },
            {
              tempo_h: 11,
              tensao_V: 623.2,
              corrente_A: 3.7,
              potencia_kW: 26.922,
              temperatura_C: 49.1
            },
            {
              tempo_h: 11.08333333333333,
              tensao_V: 606.4,
              corrente_A: 3.59,
              potencia_kW: 25.286,
              temperatura_C: 49
            },
            {
              tempo_h: 11.16666666666667,
              tensao_V: 631.9,
              corrente_A: 2.59,
              potencia_kW: 18.704,
              temperatura_C: 49.5
            },
            {
              tempo_h: 11.25,
              tensao_V: 637.59,
              corrente_A: 2.5,
              potencia_kW: 18.617,
              temperatura_C: 49.2
            },
            {
              tempo_h: 11.33333333333333,
              tensao_V: 637,
              corrente_A: 4.4,
              potencia_kW: 32.041,
              temperatura_C: 47.5
            },
            {
              tempo_h: 11.41666666666667,
              tensao_V: 620.7,
              corrente_A: 3.79,
              potencia_kW: 27.062,
              temperatura_C: 47.9
            },
            {
              tempo_h: 11.5,
              tensao_V: 671.29,
              corrente_A: 8.69,
              potencia_kW: 66.324,
              temperatura_C: 48.2
            },
            {
              tempo_h: 11.58333333333333,
              tensao_V: 649.29,
              corrente_A: 3.5,
              potencia_kW: 24.868,
              temperatura_C: 48.4
            },
            {
              tempo_h: 11.66666666666667,
              tensao_V: 664.79,
              corrente_A: 5.3,
              potencia_kW: 38.502,
              temperatura_C: 47.4
            },
            {
              tempo_h: 11.75,
              tensao_V: 612.2,
              corrente_A: 2.5,
              potencia_kW: 17.753,
              temperatura_C: 48.6
            },
            {
              tempo_h: 11.83333333333333,
              tensao_V: 635.29,
              corrente_A: 3,
              potencia_kW: 21.917,
              temperatura_C: 49
            },
            {
              tempo_h: 11.91666666666667,
              tensao_V: 644.59,
              corrente_A: 3.59,
              potencia_kW: 26.541,
              temperatura_C: 47.7
            },
            {
              tempo_h: 12,
              tensao_V: 680.29,
              corrente_A: 8.6,
              potencia_kW: 65.104,
              temperatura_C: 47.7
            },
            {
              tempo_h: 12.08333333333333,
              tensao_V: 626.7,
              corrente_A: 5.5,
              potencia_kW: 43.68,
              temperatura_C: 48.5
            },
            {
              tempo_h: 12.16666666666667,
              tensao_V: 640,
              corrente_A: 3.79,
              potencia_kW: 28.096,
              temperatura_C: 50
            },
            {
              tempo_h: 12.25,
              tensao_V: 623.29,
              corrente_A: 9.1,
              potencia_kW: 64.573,
              temperatura_C: 49.2
            },
            {
              tempo_h: 12.33333333333333,
              tensao_V: 610.7,
              corrente_A: 9.3,
              potencia_kW: 64.489,
              temperatura_C: 50.4
            },
            {
              tempo_h: 12.41666666666667,
              tensao_V: 646.29,
              corrente_A: 9.1,
              potencia_kW: 64.953,
              temperatura_C: 51.5
            },
            {
              tempo_h: 12.5,
              tensao_V: 656.29,
              corrente_A: 8.89,
              potencia_kW: 65.039,
              temperatura_C: 51.8
            },
            {
              tempo_h: 12.58333333333333,
              tensao_V: 570,
              corrente_A: 3.29,
              potencia_kW: 22.407,
              temperatura_C: 52.3
            },
            {
              tempo_h: 12.66666666666667,
              tensao_V: 650,
              corrente_A: 8.89,
              potencia_kW: 65,
              temperatura_C: 51.9
            },
            {
              tempo_h: 12.75,
              tensao_V: 615.79,
              corrente_A: 9.1,
              potencia_kW: 63.673,
              temperatura_C: 52.4
            },
            {
              tempo_h: 12.83333333333333,
              tensao_V: 608.79,
              corrente_A: 9.5,
              potencia_kW: 65.019,
              temperatura_C: 52.9
            },
            {
              tempo_h: 12.91666666666667,
              tensao_V: 606.4,
              corrente_A: 9,
              potencia_kW: 62.58,
              temperatura_C: 53.4
            },
            {
              tempo_h: 13,
              tensao_V: 617.5,
              corrente_A: 4.3,
              potencia_kW: 30.936,
              temperatura_C: 54
            },
            {
              tempo_h: 13.08333333333333,
              tensao_V: 634.5,
              corrente_A: 7.4,
              potencia_kW: 51.385,
              temperatura_C: 52.4
            },
            {
              tempo_h: 13.16666666666667,
              tensao_V: 624,
              corrente_A: 8.8,
              potencia_kW: 63.148,
              temperatura_C: 51.5
            },
            {
              tempo_h: 13.25,
              tensao_V: 606.09,
              corrente_A: 8.89,
              potencia_kW: 62.67,
              temperatura_C: 52.6
            },
            {
              tempo_h: 13.33333333333333,
              tensao_V: 589.29,
              corrente_A: 1.7,
              potencia_kW: 11.727,
              temperatura_C: 53.2
            },
            {
              tempo_h: 13.41666666666667,
              tensao_V: 656.4,
              corrente_A: 2.79,
              potencia_kW: 20.807,
              temperatura_C: 52.2
            },
            {
              tempo_h: 13.5,
              tensao_V: 640.2,
              corrente_A: 2.59,
              potencia_kW: 18.885,
              temperatura_C: 50.8
            },
            {
              tempo_h: 13.58333333333333,
              tensao_V: 631.79,
              corrente_A: 8.3,
              potencia_kW: 61.122,
              temperatura_C: 49.4
            },
            {
              tempo_h: 13.66666666666667,
              tensao_V: 637.5,
              corrente_A: 8.3,
              potencia_kW: 60.052,
              temperatura_C: 49.7
            },
            {
              tempo_h: 13.75,
              tensao_V: 646.5,
              corrente_A: 2.9,
              potencia_kW: 22.25,
              temperatura_C: 50.9
            },
            {
              tempo_h: 13.83333333333333,
              tensao_V: 606.9,
              corrente_A: 2.59,
              potencia_kW: 18.146,
              temperatura_C: 51.5
            },
            {
              tempo_h: 13.91666666666667,
              tensao_V: 617.29,
              corrente_A: 2.4,
              potencia_kW: 17.037,
              temperatura_C: 51.3
            },
            {
              tempo_h: 14,
              tensao_V: 658.29,
              corrente_A: 7.69,
              potencia_kW: 57.667,
              temperatura_C: 50
            },
            {
              tempo_h: 14.08333333333333,
              tensao_V: 627.9,
              corrente_A: 2.29,
              potencia_kW: 17.145,
              temperatura_C: 50.1
            },
            {
              tempo_h: 14.16666666666667,
              tensao_V: 620.7,
              corrente_A: 1.29,
              potencia_kW: 9.186,
              temperatura_C: 50.4
            },
            {
              tempo_h: 14.25,
              tensao_V: 635.9,
              corrente_A: 1.29,
              potencia_kW: 10.047,
              temperatura_C: 49.1
            },
            {
              tempo_h: 14.33333333333333,
              tensao_V: 637.59,
              corrente_A: 1.2,
              potencia_kW: 9.197,
              temperatura_C: 47.9
            },
            {
              tempo_h: 14.41666666666667,
              tensao_V: 645.4,
              corrente_A: 1.29,
              potencia_kW: 9.551,
              temperatura_C: 47
            },
            {
              tempo_h: 14.5,
              tensao_V: 657.29,
              corrente_A: 1.39,
              potencia_kW: 10.911,
              temperatura_C: 46.3
            },
            {
              tempo_h: 14.58333333333333,
              tensao_V: 777.5,
              corrente_A: 0,
              potencia_kW: 0,
              temperatura_C: 46.5
            },
            {
              tempo_h: 14.66666666666667,
              tensao_V: 666.59,
              corrente_A: 2.2,
              potencia_kW: 16.931,
              temperatura_C: 50
            },
            {
              tempo_h: 14.75,
              tensao_V: 679.59,
              corrente_A: 5.5,
              potencia_kW: 43.018,
              temperatura_C: 45.8
            },
            {
              tempo_h: 14.83333333333333,
              tensao_V: 641.9,
              corrente_A: 5.69,
              potencia_kW: 42.8,
              temperatura_C: 46.1
            },
            {
              tempo_h: 14.91666666666667,
              tensao_V: 656.09,
              corrente_A: 5.3,
              potencia_kW: 39.628,
              temperatura_C: 46.2
            },
            {
              tempo_h: 15,
              tensao_V: 634.09,
              corrente_A: 2.09,
              potencia_kW: 15.218,
              temperatura_C: 46.8
            },
            {
              tempo_h: 15.08333333333333,
              tensao_V: 654.09,
              corrente_A: 4.3,
              potencia_kW: 32.116,
              temperatura_C: 46.8
            },
            {
              tempo_h: 15.16666666666667,
              tensao_V: 652.4,
              corrente_A: 3.2,
              potencia_kW: 24.008,
              temperatura_C: 46.8
            },
            {
              tempo_h: 15.25,
              tensao_V: 648.2,
              corrente_A: 3.59,
              potencia_kW: 26.9,
              temperatura_C: 46.7
            },
            {
              tempo_h: 15.41666666666667,
              tensao_V: 645.2,
              corrente_A: 2.9,
              potencia_kW: 21.807,
              temperatura_C: 46.6
            },
            {
              tempo_h: 15.5,
              tensao_V: 639.5,
              corrente_A: 2.5,
              potencia_kW: 18.225,
              temperatura_C: 46.5
            },
            {
              tempo_h: 15.58333333333333,
              tensao_V: 634.5,
              corrente_A: 1.89,
              potencia_kW: 14.276,
              temperatura_C: 46.3
            },
            {
              tempo_h: 15.66666666666667,
              tensao_V: 634.59,
              corrente_A: 1.29,
              potencia_kW: 10.026,
              temperatura_C: 46
            },
            {
              tempo_h: 15.75,
              tensao_V: 628.5,
              corrente_A: 1,
              potencia_kW: 7.416,
              temperatura_C: 45.8
            },
            {
              tempo_h: 15.83333333333333,
              tensao_V: 626,
              corrente_A: 0.8,
              potencia_kW: 5.947,
              temperatura_C: 45.6
            },
            {
              tempo_h: 15.91666666666667,
              tensao_V: 614.09,
              corrente_A: 0.5,
              potencia_kW: 4.237,
              temperatura_C: 45.5
            },
            {
              tempo_h: 16,
              tensao_V: 589.29,
              corrente_A: 0.2,
              potencia_kW: 1.65,
              temperatura_C: 45.2
            },
            {
              tempo_h: 16.08333333333333,
              tensao_V: 582.29,
              corrente_A: 0,
              potencia_kW: 1.048,
              temperatura_C: 44.9
            },
            {
              tempo_h: 16.16666666666667,
              tensao_V: 575.4,
              corrente_A: 0,
              potencia_kW: 0.92,
              temperatura_C: 44.7
            },
            {
              tempo_h: 16.25,
              tensao_V: 583.4,
              corrente_A: 0,
              potencia_kW: 1.108,
              temperatura_C: 44.3
            },
            {
              tempo_h: 16.33333333333333,
              tensao_V: 590.4,
              corrente_A: 0.2,
              potencia_kW: 1.771,
              temperatura_C: 43.9
            },
            {
              tempo_h: 16.41666666666667,
              tensao_V: 615.4,
              corrente_A: 0,
              potencia_kW: 1.538,
              temperatura_C: 43.6
            },
            {
              tempo_h: 16.5,
              tensao_V: 613.4,
              corrente_A: 0,
              potencia_kW: 1.042,
              temperatura_C: 43.2
            },
            {
              tempo_h: 16.58333333333333,
              tensao_V: 598.4,
              corrente_A: 0,
              potencia_kW: 0.718,
              temperatura_C: 42.8
            },
            {
              tempo_h: 16.66666666666667,
              tensao_V: 585.4,
              corrente_A: 0,
              potencia_kW: 1.053,
              temperatura_C: 42.5
            },
            {
              tempo_h: 16.75,
              tensao_V: 587.4,
              corrente_A: 0.2,
              potencia_kW: 1.703,
              temperatura_C: 42.2
            },
            {
              tempo_h: 16.83333333333333,
              tensao_V: 628.4,
              corrente_A: 0.2,
              potencia_kW: 1.885,
              temperatura_C: 41.9
            },
            {
              tempo_h: 16.91666666666667,
              tensao_V: 623.29,
              corrente_A: 0.2,
              potencia_kW: 1.558,
              temperatura_C: 41.6
            },
            {
              tempo_h: 17,
              tensao_V: 620.29,
              corrente_A: 0.2,
              potencia_kW: 1.55,
              temperatura_C: 41.5
            },
            {
              tempo_h: 17.08333333333333,
              tensao_V: 620.29,
              corrente_A: 0,
              potencia_kW: 1.364,
              temperatura_C: 41.4
            },
            {
              tempo_h: 17.16666666666667,
              tensao_V: 604.9,
              corrente_A: 0,
              potencia_kW: 1.27,
              temperatura_C: 41.2
            },
            {
              tempo_h: 17.25,
              tensao_V: 613.79,
              corrente_A: 0,
              potencia_kW: 1.35,
              temperatura_C: 41
            },
            {
              tempo_h: 17.33333333333333,
              tensao_V: 607.79,
              corrente_A: 0,
              potencia_kW: 1.215,
              temperatura_C: 40.8
            },
            {
              tempo_h: 17.41666666666667,
              tensao_V: 612.79,
              corrente_A: 0,
              potencia_kW: 1.103,
              temperatura_C: 40.6
            },
            {
              tempo_h: 17.5,
              tensao_V: 609.9,
              corrente_A: 0,
              potencia_kW: 0.731,
              temperatura_C: 40.4
            },
            {
              tempo_h: 17.58333333333333,
              tensao_V: 590.9,
              corrente_A: 0,
              potencia_kW: 0.413,
              temperatura_C: 40.1
            },
            {
              tempo_h: 17.66666666666667,
              tensao_V: 606.59,
              corrente_A: 0,
              potencia_kW: 0.303,
              temperatura_C: 41.6
            },
            {
              tempo_h: 17.75,
              tensao_V: 592,
              corrente_A: 0,
              potencia_kW: 0,
              temperatura_C: 44.5
            },
            {
              tempo_h: 17.83333333333333,
              tensao_V: 583.09,
              corrente_A: 0,
              potencia_kW: 0,
              temperatura_C: 45.7
            },
            {
              tempo_h: 17.91666666666667,
              tensao_V: 535.09,
              corrente_A: 0,
              potencia_kW: 0,
              temperatura_C: 46.4
            }
          ];     

        return this.state.list.map( cliente => {

            const somaPotencia_kW = parseFloat( data.reduce( (prevValue, objeto) => prevValue + objeto['potencia_kW'], 0)).toFixed(2)

            const tempoDeAmostragem = 5.416666666666667- 5.333333333333333//

            const energiaGeradaDia = tempoDeAmostragem * somaPotencia_kW

            const totalRendimentoProdução = parseFloat(energiaGeradaDia * 0.95).toFixed(2)  
                      
            let valorProducao = valorProducao + data.potencia_kW

            const prod =  data.length
            
            {this.state.rendimentoTotal = totalRendimentoProdução}

            return (              

                <tr key={cliente.id}>

                    <td>{cliente.nomeCliente}</td>
                                     
                    <td>{cliente.usinas.percentualDeParticipacao}%

                        <div className="progress-div" style={{width: 100}}>

                        <div style={{width: `${cliente.usinas.percentualDeParticipacao * 1.1}px`}}className="progress" /></div></td>

                        <td >R$ { parseFloat((cliente.usinas.percentualDeParticipacao/100) * totalRendimentoProdução).toFixed(2) }</td> 

                </tr>
                                              
            )
        })
    }

    renderTotal(){

      return(            

        <table className="table mt-4">

            <thead>                
                    <th></th>                        
                    <th></th>
                    <th>O rendimento total da usina foi de R$ : {this.state.rendimentoTotal}</th>                    
            </thead>             

        </table>
    )

    }

    render() {

        return (

            <Main {...headerProps}>
              
              {this.renderForm()}
              {this.renderTable()}
              {this.renderTotal()}
              
            </Main>
        )
    }
}

