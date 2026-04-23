import { useState } from "react";

export default function FriendList() {
    const [friends, setFriends] = useState(['john', 'amy', 'hardin']);
    return (
        <>
            <ul>
                {friends.map(friend => (
                    <li key={friend}>{friend} <button>hi</button></li>
                ))}
            </ul>
        </>
    )
}