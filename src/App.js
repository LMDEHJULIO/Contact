import React, {Component} from 'react';
import ListContacts from './listContacts.js';
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {

  state = {
    contacts:[]
  }

  componentDidMount(){
    ContactsAPI.getAll().then((contacts) => {
      this.setState({contacts})
    })
  }

  removeContact = (contact) => {
    this.setState((state)=> ({
      contacts: state.contacts.filter(function(c){
        return c.id !== contact.id;
      })
    }))

    ContactsAPI.remove(contact)
  }



  render(){
    return (
      <div>
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
      </div>
    )

  }
}

export default App;
