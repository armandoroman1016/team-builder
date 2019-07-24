import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const CreateForm = () => {

    const [memberInfo, setMemberInfo] = useState({
        firstName:'',
        aka:'',
        lastName:'',
        age:'',
        hobby:'',
        favoriteDrink: '',
        favoriteFood:''
      })

    const handleChange = (event => {
        const updatedUser = {...memberInfo, [event.target.name]: event.target.value}
        setMemberInfo(updatedUser)
        console.log(memberInfo)
    })

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return(
    <Form onSubmit={handleSubmit}>
    <Form.Field>
      <label>First Name</label>
      <input 
      placeholder='First Name'
      type = 'text'
      value = {memberInfo.firstName}
      name = 'firstName'
      onChange = {handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input 
      placeholder='Last Name' 
      type = 'text'
      value = {memberInfo.lastName}
      name = 'lastName'
      onChange = {handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>Nick Name</label>
      <input 
      placeholder='Nick Name'
      type = 'text'
      value = {memberInfo.aka}
      name = 'aka'
      onChange = {handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Age</label>
      <input 
      placeholder='Age'
      type = 'text'
      value = {memberInfo.age}
      name = 'age'
      onChange = {handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Hobby</label>
      <input placeholder='Hobby' 
      type = 'text'
      value = {memberInfo.hobby}
      name = 'hobby'
      onChange = {handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>Favorite Drink</label>
      <input 
      placeholder='Favorite Drink' 
      type = 'text'
      value = {memberInfo.favoriteDrink}
      name = 'favoriteDrink'
      onChange = {handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>Favorite Food</label>
      <input 
      placeholder='Favorite Food'
      type = 'text'
      value = {memberInfo.favoriteFood}
      name = 'favoriteFood'
      onChange = {handleChange} />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>

)}

export default CreateForm