import { useEffect, useState } from "react";
import { getFriends, deleteFriend } from "../../api/friends";
import { useNavigate, useParams } from "react-router-dom";

export default function FriendList() {
    const [friends, setFriends] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFriends = async() => {
            const {res, data} = await getFriends(params.username);
            if (res.status === 401) {
                alert("Something went wrong. Please login again.");
                localStorage.removeItem("token");
                navigate("/login");
            } else if (res.status === 500) {
                alert("Something went wrong");
                navigate(`/profile/${username}`);
            } else if (res.status === 200) {
                setFriends(data.friends);
                console.log("Here are your friends :D.");
            } else {
                console.log("lol idk what's happening");
                navigate(`/profile/${username}`);
            }
        }
        fetchFriends().catch((err) => {
            console.error(err);
        });
    }, []);

    const handleRemove = async (friend) => {
        const {res, data} = await deleteFriend(friend);
        if (res.status === 401) {
            alert("Something went wrong. Please login again.");
            localStorage.removeItem("token");
            navigate("/login");
        } else if (res.status === 500) {
            alert("Something went wrong");
        } else if (res.status === 200) {
            setFriends(friends.filter(frnd => frnd.user.username != friend));
            console.log("u murdered ur fren D:")
        } else {
            console.log("Something unexpected happened");
        }
    }
    return (
        <>
            <input type="text" 
                    placeholder="Search"
                    className="search-bar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
            <ul className="friend-list">
                {friends.filter((friend) => friend.user.username.includes(searchTerm)).map(friend => (
                    <li className="friend" key={friend.user.username}>{friend.user.username} 
                    <div className="friend-actions">
                        <button className="primary-btn">Play</button>
                        <button className="primary-btn">View</button>
                        <button className="primary-btn" onClick={() => handleRemove(friend.user.username)}>Remove</button>
                    </div>
                    </li>
                ))}
            </ul>
        </>
    )
}