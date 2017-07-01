import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import ListContacts from './listContacts.js'
import CreateContact from './CreateContact'
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
      <div className="app">
          <Route exact path="/" render= {()=>(
            <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}/>
        )}/>

        <Route path="/create" component= {CreateContact}/>
      </div>
    )}
}

export default App;
