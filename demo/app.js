/*global document:false*/
import React from 'react';
import subClass from '../src/subClass';

@subClass
class App extends React.Component {
  render() {
    return (
      <div>
        <div subClass='main'>
          <div subClass='title'>
            Hello !
          </div>
        </div>
        <div subClass='aside'>
          Aside
        </div>
      </div>
    );
  }
}

const content = document.getElementById('content');

React.render(<App/>, content);
