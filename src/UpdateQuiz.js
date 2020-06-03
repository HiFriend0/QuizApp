import React, { Component } from 'react'
 
class UpdateQuiz extends Component {

    constructor(props){
        super(props);
        this.state={
             quiz_position : 1,
              
        }
      }
  

    render(props) {

      return (
        <form>
        <label>
          Question :
          <input type="text" name="name" />
        </label>

        <input type="submit" value="Envoyer" />
      </form>
         )
    }

  }

export default UpdateQuiz