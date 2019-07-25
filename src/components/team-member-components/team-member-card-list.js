import React from 'react'
import CreateTeamMemberCard from './team-member-card'


const CardList = ({membersArr}) => {
    return(
    membersArr.map((member) => {
        return(
          <CreateTeamMemberCard 
            firstNameVal = {member.firstName}
            roleVal = {member.role} 
            akaVal = {member.aka}
            lastNameVal = {member.lastName}
            ageVal = {member.age}
            hobbyVal = {member.hobby}
            favoriteDrinkVal = {member.hobby}
            favoriteFoodVal = {member.favoriteFood}
            key = {Math.floor(Math.random() * 10000)}
            />
    )}
))}

export default CardList