import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'
 
let quizData = require('./quiz_data.json')

class Quiz extends Component {

    constructor(props){
        super(props);
        this.state={
             quiz_position : 1,
             quiz_data1 : quizData
        }
      }

        showNextQuestion(){

        this.setState(state => ({
          quiz_position : state.quiz_position +1 
        }));
  
      }

      handleResetClick(){
        this.setState(state => ({
          quiz_position : 1 
        }))

      }

      addItem(){

        const {quiz_data1} =this.state ; 
    
        const newObject  = {
          
            "id": 6,
            "instruction_text": "Q2 : How many continents are there on Planet Earth?",
            "answer_options": ["5", "6", "7", "8"],
            "answer": "7"
         }
    
      this.setState( {
          quiz_data1 : [...this.state.quiz_data1,newObject]
        } )
    
      }

      
    render(props) {

      const isQuizEnd = ((this.state.quiz_position-1) === this.state.quiz_data1.quiz_questions.length) ;
     // let our_component ;

/*
      if (!isQuizEnd) {
        our_component = <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]} />

      }
       else {
        our_component =  <QuizEnd />

      }*/

      return (
 <div>
       

          <div>
          {
            isQuizEnd ?  <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} /> : <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={this.state.quiz_data1.quiz_questions[this.state.quiz_position-1]} />

          }
          </div>
</div>
         
         )
    }

  }

export default Quiz