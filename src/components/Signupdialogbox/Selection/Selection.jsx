
export const Date1 = ({handler}) => {
    let arr=[];
    const current = new Date();
    let today=current.getDate()
    for(let i=1;i<=31;i++){

      arr.push(<option key={i} value={i}>{i}</option>);
   
    }
  return (
      <select defaultValue={today}
       name="day" onChange={handler} >
        {arr}</select>
  )
 
}
export const Month1 = ({handler}) => {
  let montharr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  let arr=[];
  const current = new Date();
  let today=current.getMonth()
  for(let i=0;i<12;i++){
  
    arr.push(<option key={i+1} value={i+1}>{montharr[i]}</option>);
   
  }
return (
    <select defaultValue={today+1}
    name="month" onChange={handler} >{arr}</select>
)

}
export const Year1 = ({handler}) => {
  let arr=[];
  const current = new Date();
  let today=current.getFullYear()

  for(let i=today;i>=1905;i--){
  
    arr.push(<option key={i} value={i}>{i}</option>);
    
  }
return (
    <select defaultValue={today}
    name="year" onChange={handler} >
      {arr}</select>
)

}
