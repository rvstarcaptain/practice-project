import React, { useState } from 'react'
import List from './List';

export default function Loadinglist() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reset, setReset] = useState(false);
    const url = 'https://jsonplaceholder.typicode.com/posts'
    // useEffect(()=>{
    //   fetch(url).then((data)=>(data).json()).then((response)=> setData(response))
    // },[])
    function getdata() {
        setTimeout(() => {


            fetch(url).then((data) => (data).json()).then((response) => setData(response))
            setLoading(true)
        }, 2000)

        setLoading(false)
    }
    function removelist() {
        
        
        console.log(setReset(true))
    }

    return (
        <div >

            <button onClick={() => removelist()}>Reset</button>

            <button onClick={() => getdata()} >getData</button>
            {
                loading ? <List data={data} /> : <p>please wait.....</p>
            }
            {
                !reset? <List data={data}/> :null
            }




        </div>
    )
}
