import { useState } from "react";

export default function FriendList() {
    const [friends, setFriends] = useState(['john', 'amy', 'hardin']);
    return (
        <>
            <ul className="friend-list">
                {friends.map(friend => (
                    <li className="friend" key={friend}>{friend} <button>hi</button></li>
                ))}
            </ul>
        </>
    )
}