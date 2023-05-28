export const HomeContactlist = (list) => {
    let arr = [];
   
    for (let i = 0; i < list.length; i++) {
        arr.push(
            <div className="contactlist" key={list[i].id}>
                <div >
                    <span className={0 === 1 ? "contactstoryactive" : "contactstoryinactive"}>
                        <img src={list[i].profile===null?"https://scontent.fmaa2-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=102P-6BNVGYAX9PhaGK&_nc_ht=scontent.fmaa2-3.fna&oh=00_AfBJfHAOAHCpIjDVzbVRZv32tEowlIEUIib16O4f3hkRxw&oe=6454E0B8":list[i].profile} alt="" />
                    </span>
                    <span className={list[i].active === 1 ? "contactactive" : "contactinactive"}></span>
                </div>
                <span>{list[i].first_name} {list[i].last_name}</span>
            </div>)
    }
    return (
        arr
    )
}

