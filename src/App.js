import React , { useState } from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import CreateForm from './components/form-components/form'
import CardList from './components/team-member-components/team-member-card-list'
import teamMembers from './components/form-components/form'

function App() {

  const [memberInfo, setMemberInfo] = useState({
    firstName:'',
    aka:'',
    lastName:'',
    age:'',
    role:'',
    hobby:'',
    favoriteDrink: '',
    favoriteFood:''
  })

  const [members, setMembers] = useState([])
  
  const handleChange = (event => {
    const updatedUser = {...memberInfo, [event.target.name]: event.target.value}
    setMemberInfo(updatedUser)
 })

  const handleSubmit = (event) => {
    event.preventDefault()
    setMembers([...members, {...memberInfo}])
 } 

  return (
    <div className="App">
        <h1 onClick= {() => console.log(teamMembers)}>Lambda Team Members</h1>
        <CreateForm personInfo = {memberInfo} handleChangeFunc = {handleChange} handleSubmitFunc = {handleSubmit}/>
        <div className = 'members-container'>
  
        <CardList membersArr = {members}/>
        
        </div>
        <div>
      </div>
    </div>
  );
}

export default App;
