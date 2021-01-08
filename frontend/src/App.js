
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      databaseData: [],
      JWTencodedtoken: ""
    }
  }

  updateTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  updateToken = (event) => {
    this.setState({
      JWTencodedtoken: event.target.value
    })
  }

  writeDatabase = (event) => {
    event.preventDefault()
  }

  readDatabase = (event) => {
    event.preventDefault()
  }

  sendToken = (event) => {
    event.preventDefault()
  }    

  render() {
    return (
      <div className="App">
        Input data to stick in database: <input type="text" onChange={this.updateTitle}></input><button onSubmit={this.writeDatabase}>Send Data to Database</button>
        <br/>
        Input encoded JWT token to parse: <textarea type="text" onChange={this.updateToken}></textarea><button onSubmit={this.sendToken}>Send Data to Database</button>
        <br/>
        <button onSubmit={this.readDatabase}>Read data from database</button>
        <h1>DISPLAY</h1>
        <textarea type="text"></textarea>
      </div>
    );
  }
}

export default App;