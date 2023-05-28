
import { Link } from "react-router-dom";
import {Homeleftnavfooter } from "../../Assert/Homeleftnav/Homeleftnav"
export const Leftnavlist = (i,n,list) => {
    let arr = [];
    for (; i < n; i++) {
            arr.push(<Link to={list[i].link} key={i}>
                <div>
                    {
                list[i].itag?(<i className={`leftnavicon${list[i].name}`}/>):
                <img src={list[i].img} alt=""/> 
                    }
                <span>{list[i].name}</span>
                </div>
                </Link>);
    }
    return arr;
}
export const Footerlist=()=>{
    let arr=[];
    for(let i=0;i<Homeleftnavfooter.length;i++){
        arr.push(<li key={i}><Link to={Homeleftnavfooter[i].link}>{Homeleftnavfooter[i].name} </Link><span>.</span></li> )
    }
    return arr;
}
