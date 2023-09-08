import { useEffect, useState } from 'react'
import Friend from './Friend'
import './Friends.css'

export default function Friends (){
    const [Friends, setFriends] = useState([])

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    return (
        <div className="box">
            <h3>Friends:  {Friends.length} </h3>
            {
                Friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}