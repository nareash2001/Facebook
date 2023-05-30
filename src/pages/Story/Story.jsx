import React from 'react'
import { useParams } from 'react-router-dom';
import Create from "../../components/Story/pages/Create/Create"
import Home from '../../components/Story/pages/Home/Home';
const Story = () => {
  const { id } = useParams();
  return (
    <div>
      {
        id!=="create" && <Home/>
      }
      {
        id==="create" && <Create/>
      }
    </div>
  )
}

export default Story
