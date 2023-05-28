import {Reellist} from "../../Assert/List/List"
import {Link} from "react-router-dom"
export const Storysetlist = (list) => {
    let arr = [];
    for (let i = 0; i <list.length; i++) {
        arr.push(<Link to="" className="storysetview" key={list[i].story_id}>
            <img className="storyviewbackgroungimg"src={list[i].story} alt="" />
            <div className="storysetviewouter"><img className="storyviewdpimg"id={1?"storycontaineractive":""} src={list[i].profile} alt="" />
            <div>{list[i].first_name+" "+list[i].last_name}</div>
            </div>
        </Link>)
    }
    return arr;
}
export const Reels=()=>{
    let arr=[];
for(let i=0;i<Reellist.length;i++){
    arr.push(<Link to="" className="storysetview">
        <img className="storyviewbackgroungimg" src={"https://res.cloudinary.com/dfvkaaj5l/image/upload/v1677646734/cld-sample-5.jpg"} alt=""/>
        <div className="storyviewinreels">{Reellist[i].views}</div>
    </Link>)
}
return arr
}