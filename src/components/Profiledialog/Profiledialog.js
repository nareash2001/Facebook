import { Dialog} from '@material-ui/core'
import React from 'react'
import "./Profiledialog.css"
const Profiledialog = (props) => {
  return (
    <Dialog open={props.open}>

        change icon
        <h1 onClick={()=>props.setOpen(false)}>exit</h1>
    </Dialog>
  )
}

export default Profiledialog
