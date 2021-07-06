import React, { Component, useState } from 'react';
import './App.css';

const json = {
  "count": 21,
  "results": [
    { "id": 1, "firstName": "David", "lastName": "Wallace" },
    { "id": 2, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 3, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 4, "firstName": "David", "lastName": "Wallace" },
    { "id": 5, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 6, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 7, "firstName": "David", "lastName": "Wallace" },
    { "id": 8, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 9, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 10, "firstName": "David", "lastName": "Wallace" },
    { "id": 11, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 12, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 13, "firstName": "David", "lastName": "Wallace" },
    { "id": 14, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 15, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 16, "firstName": "David", "lastName": "Wallace" },
    { "id": 16, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 18, "firstName": "Anthony", "lastName": "Thomson" },
    { "id": 19, "firstName": "David", "lastName": "Wallace" },
    { "id": 20, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 21, "firstName": "Anthony", "lastName": "Thomson" }
  ]
}

class App extends Component {
componentDidMount() {
  const apiUrl = 'http://localhost:8081/page=1';
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log('This is your data', data)
      return data;
    });
}
  
firstPage(){
}

lastPage(){
  //
}

previous(){
//
}

next(){
  alert("new");
}

  render() {
    return (
      <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
        {Object.keys(json.results).map((k, i) => {
          let data = json.results[k];
          return (
            <tr key={i}>
              <td>{data.id}</td>
              <td>{data.firstName}</td>
              <td>{data.firstName}</td>
            </tr>
          );   
        })}
        </tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn" onClick={this.firstPage}>first</button>
        <button className="previous-page-btn" onClick={this.previous}>previous</button>
        <button className="next-page-btn" onClick={this.next}>next</button>
        <button className="last-page-btn" onClick={this.lastPage}>last</button>
      </section>
    </div>
    );
  }
}

export default App;
