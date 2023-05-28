import { Link } from "react-router-dom";
export const Mutualfrilist=(list)=>{
    let arr=[];
for(let i=0;i<list.length;i++){
arr.push(<Link to="" key={i}>
    <img src={list[i].img} alt=""/>
    </Link>)
}
return arr
}