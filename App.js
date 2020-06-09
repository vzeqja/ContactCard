import React, { Component } from "react";
import ContactCard from "./ContactCard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
       <ContactCard
        name="John"
        mobile="2547899652"
        work="123456789"
        email="john@gmail.com"
       />
       <ContactCard
        name="Annaa"
        mobile="2547899652"
        work="123456789"
        email="anna@gmail.com"
       />
       <ContactCard
        name="Lisa"
        mobile="2547899652"
        work="123456789"
        email="lisa@gmail.com"
       />
      </>
    );
  }
  
}

export default App;
