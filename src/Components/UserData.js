import React from 'react'
import { useState } from 'react'
import User from './UserApi'
import UserCard from './UserCard'
import Filter from './Filter'



const uniqueList = [
  ...new Set(
    User.map((curElem)=>{
      return curElem.category
    })
  ),
  "All",
]
const UserData = () => {
  const [data,setData]=useState(User)
  const [userList,setUserList] = useState(uniqueList)

  const filterItem = (category)=>{
    if (category==="All"){
      setData(User)
      return ;
    }
    const updateList = User.filter((curElem)=>{
      return curElem.category===category
    })

    setData(updateList)

  }
  return (
    <>
    <Filter filterItem={filterItem} userList={userList}></Filter>
    <UserCard data={data}></UserCard>
    </>
  )
}

export default UserData
