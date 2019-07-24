import React , {useEffect, useState} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import CreateForm from './components/form-components/form'

function App() {
  
  return (
    <div className="App">
        <h1>Lambda Team Members</h1>
        <CreateForm />
    </div>
  );
}

export default App;
