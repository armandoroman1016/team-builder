import React from 'react'
import { Card } from 'semantic-ui-react'

const CreateTeamMemberCard = ({
    firstNameVal, 
    akaVal, 
    lastNameVal,
    roleVal,
    ageVal, 
    hobbyVal, 
    favoriteDrinkVal, 
    favoriteFoodVal
    }) => {

        
    return (
        <Card>
    <Card.Content>
      <Card.Header>{firstNameVal} {lastNameVal}</Card.Header>
      <Card.Meta>
        <span className='date'>Also Known As : {akaVal}</span>
      </Card.Meta>
      <Card.Description>
        <p>Role : {roleVal}</p>
        <p>Age : {ageVal}</p>
        <p>Favorite Food : {favoriteFoodVal}</p>
        <p>Favorite Drink : {favoriteDrinkVal}</p>
        <p>Favorite Food : {favoriteFoodVal}</p>
        <p>Hobby : {hobbyVal}</p>
      </Card.Description>
    </Card.Content>
  </Card>
    )

}

export default CreateTeamMemberCard;