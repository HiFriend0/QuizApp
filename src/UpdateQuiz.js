import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class UpdateQuiz extends Component {

    constructor(props){
        super(props);
        this.state={
             quiz_position : 1,
             quiz_data1 : quizData
        }
      }
  
   addItem(){

    const quiz_data1 =this.state.quiz_data1 ; 

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

      return (
       <button onClick={this.addItem.bind(this) } >
         blati
       </button>
         )
    }

  }

export default UpdateQuiz
/* <form>
        <label>
          Question :
          <input type="text" name="name" />
        </label>

        <input type="submit" value="Envoyer" />
      </form>*/