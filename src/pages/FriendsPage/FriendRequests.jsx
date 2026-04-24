import { useState } from "react";
import check from "../../assets/check.svg";
import cross from "../../assets/cross.svg";

export default function FriendRequests() {
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
                    <div className="friend-request-actions">
                        <button className="primary-btn check"><img src={check} alt="Add Friend" /></button>
                        <button className="primary-btn cross"><img src={cross} alt="Decline Friend" /></button>
                    </div>
                    </li>
                ))}
            </ul>
        </>
    )
}