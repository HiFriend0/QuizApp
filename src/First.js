import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'
import Home from './Home'

let quizData = require('./quiz_data.json')

class Quiz extends Component {

    constructor(props){
        super(props);
        this.state={
             quiz_position : 1,
             quiz_data1 : quizData
        }
      }
 
      
    render(props) {
 
      return (
      <Home quiz_data_global={this.state.quiz_data1}></Home>
         
         )
    }

  }

export default Quiz