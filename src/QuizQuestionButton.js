import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class QuizQuestionButton extends Component {

    constructor(props){
        
        super(props);
        this.state={
               
        }
      }

       handleClick(){
        this.props.clickHandler(this.props.button_text);
         
    }
    
    render(props) {

       

      return (
            <li>
            <Button variant="contained" color="primary" onClick={this.handleClick.bind(this)} > 
            { this.props.button_text}
            </Button>
            </li>
 
        )
    }

  }

export default QuizQuestionButton