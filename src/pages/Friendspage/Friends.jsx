import React from 'react'
import { useParams } from 'react-router-dom';
import Homefriend from "../../components/Friends/Pages/Homefriend/Homefriend"
import Friendrequest from "../../components/Friends/Pages/Friendrequest/Friendrequest"
import Customlist from "../../components/Friends/Pages/Customlist/Customlist"
import Birthdays from "../../components/Friends/Pages/Birthdays/Birthdays"
import Allfriends from "../../components/Friends/Pages/Allfriends/Allfriends"
import Suggestion from "../../components/Friends/Pages/Suggestion/Suggestion"
const Friends = () => {
  const { id } = useParams();
  document.title="Friends | Facebook"
  return (
    <div>
      {
        id===undefined &&<Homefriend/>
      }
      {
        id==="requests" &&<Friendrequest/>
      }
      {
        id==="friendlist" &&<Customlist/>
      }
      {
        id==="birthdays" && <Birthdays/>
      }
      {
        id==="list" && <Allfriends/>
      }
      {
        id==="suggestions" &&<Suggestion/>
      }
    </div>
  )
}

export default Friends
