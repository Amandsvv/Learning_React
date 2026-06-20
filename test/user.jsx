import { useEffect,useState } from "react";

function user(){
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchUser = async() => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = res.json();
            setData(data);
        }
        fetchUser();
    },[setData])


    return(
        <>
            <div>
                <h1>User List</h1>
                {data.map((user) => {
                    <div>
                        <p>User : <b>{user.name}</b></p>
                        <p>City : {user.city}</p>
                    </div>
                })}
            </div>
        </>
    )
}
export default user;