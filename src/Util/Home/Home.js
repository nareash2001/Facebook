import { Postget, Postlikesetup } from "../Getdata/getdata";

export const Logout=(store)=>{
    localStorage.removeItem("token");
    window.location.pathname="/."
    store.Login=0;
}
export const Dropdown=(state,setState,n)=>{
    let arr = state.map(i => i);
    for(let j=0;j<4;j++){
    if(n===j){
        arr[j]=arr[j]?0:1
        continue;
    }
    arr[j]=0;
}
setState(arr);
} 
export const Reactionarr=(list,setState,post_id)=>{
    let arr=[];
    for(let i=0;i<list.length;i++){
        arr.push(<img src={list[i].img}alt="" key={list[i].id} onClick={()=>{Reactionstate(setState,list[i].name,list[i].color ,list[i].icon,post_id,i)}}/>)
    }
    return arr
}
export const Reactionstate=(setState,name,color,icon,post_id,i)=>{

    setState(
        {   value:name,
            name:name,
            color:color,
            img:icon
        }
    )
    Postlikesetup({post_id:post_id,reaction:i+1})
}
export const Likefun=(state,setState,post_id)=>{
if(state.value===null){
    setState({
        value:"Like",
        name:"Like",
        color:"blue",
        img:"https://res.cloudinary.com/dym5bpsql/image/upload/v1685083768/download_ioo2n4.svg"
    })
    Postlikesetup({post_id:post_id,reaction:1})
}
else{
    setState({
        value:null,
        name:"Like",
        color:"gray",
        img:""
    })
    Postlikesetup({post_id:post_id,reaction:"null"})
}

}
export const Postarr=async(store)=>{
    // console.log("postcall..")
    let obj=store.post
    if(obj.arr.length>=10){
        obj.hasMore=false;
        store.post=obj;
        return
    }
    // let k=obj.arr.length;
//     setTimeout(()=>{
//     for(let i=0;i<5;i++){
//         obj.arr.push(k+i)
//     }
//     setState(obj) 
// },-1000)
let res=await Postget();
// console.log(res.length)
     res.map((item)=>obj.arr.push(item))
}