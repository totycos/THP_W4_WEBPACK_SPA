import React from 'react'
import ReactDOM from 'react-dom'
import Colors from './components/Colors'
import Counter from './components/Counter'
import './index.css'

const App = () => (
  <div>
    <h1>🚀 React Training</h1>
    <Colors />
    <Counter />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root')); 