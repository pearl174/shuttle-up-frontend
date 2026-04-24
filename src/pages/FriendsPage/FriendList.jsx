import { useState } from "react";

export default function FriendList() {
    const [friends, setFriends] = useState(['john', 'amy', 'hardin']);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <input type="text" 
                    placeholder="Search"
                    className="search-bar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
            <ul className="friend-list">
                {friends.filter((friend) => friend.includes(searchTerm)).map(friend => (
                    <li className="friend" key={friend}>{friend} 
                    <div className="friend-actions">
                        <button className="primary-btn">Play</button>
                        <button className="primary-btn">View</button>
                        <button className="primary-btn">Remove</button>
                    </div>
                    </li>
                ))}
            </ul>
        </>
    )
}