import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const CreateForm = ({personInfo, handleChangeFunc, handleSubmitFunc}) => {
    return(
        <Form onSubmit={handleSubmitFunc}>
        <Form.Field>
        <label>First Name</label>
      <input 
      placeholder='First Name'
      type = 'text'
      value = {personInfo.firstName}
      name = 'firstName'
      onChange = {handleChangeFunc} />
      </Form.Field>
      <Form.Field>
      <label>Last Name</label>
      <input 
      placeholder='Last Name' 
      type = 'text'
      value = {personInfo.lastName}
      name = 'lastName'
      onChange = {handleChangeFunc}/>
      </Form.Field>
      <Form.Field>
      <label>Nick Name</label>
      <input 
      placeholder='Nick Name'
      type = 'text'
      value = {personInfo.aka}
      name = 'aka'
      onChange = {handleChangeFunc} />
      </Form.Field>
      <Form.Field>
      <label>Age</label>
      <input 
      placeholder='Age'
      type = 'text'
      value = {personInfo.age}
      name = 'age'
      onChange = {handleChangeFunc} />
      </Form.Field>
      <Form.Field>
      <label>Role</label>
      <input placeholder='Role' 
      type = 'text'
      value = {personInfo.role}
      name = 'role'
      onChange = {handleChangeFunc}/>
      </Form.Field>
      <Form.Field>
      <label>Hobby</label>
      <input placeholder='Hobby' 
      type = 'text'
      value = {personInfo.hobby}
      name = 'hobby'
      onChange = {handleChangeFunc}/>
      </Form.Field>
      <Form.Field>
      <label>Favorite Drink</label>
      <input 
      placeholder='Favorite Drink' 
      type = 'text'
      value = {personInfo.favoriteDrink}
      name = 'favoriteDrink'
      onChange = {handleChangeFunc}/>
      </Form.Field>
      <Form.Field>
      <label>Favorite Food</label>
      <input 
      placeholder='Favorite Food'
      type = 'text'
      value = {personInfo.favoriteFood}
      name = 'favoriteFood'
      onChange = {handleChangeFunc} />
    </Form.Field>
    <Button type='submit'>Submit</Button>
    </Form>
    
    )
    }
    export default CreateForm