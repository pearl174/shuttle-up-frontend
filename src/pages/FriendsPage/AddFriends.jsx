import { useEffect, useState } from "react"
import { getUsers } from "../../api/friends";
import { useNavigate } from "react-router-dom";
import { API_BASE } from "../../../config";

export default function AddFriends() {
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState([]);
    const username = localStorage.getItem("username");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async() => {
            const { res, data } = await getUsers();
            if (res.status === 401) {
                alert("Something went wrong. Please login again.");
                localStorage.removeItem("token");
                navigate("/login");
            } else if (res.status === 500) {
                alert("Something went wrong");
                navigate(`/profile/${username}`);
            } else if (res.status === 200) {
                setUsers(data.users);
                console.log("Here are your potential friends :D.");
            } else {
                console.log("lol idk what's happening");
                navigate(`/profile/${username}`);
            }
        }
        fetchUsers().catch(err => console.error(err));
    }, []);

    const sendFriendRequest = async(friendUsername) => {
        try {
            const res = await fetch(`${API_BASE}api/friends/requests/${friendUsername}`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            const data = await res.json();
            if (res.status === 401) {
                console.log(data);
                alert("Something went wrong. Please login again.");
                localStorage.removeItem("token");
                navigate("/login");
            } else if (res.status === 500) {
                alert("Something went wrong");
            } else if (res.status === 200) {
                console.log(`Sent friend request to ${friendUsername}!`);
                setUsers(users.filter((profile) => profile.user.username != friendUsername))
            } else {
                console.log("lol idk what's happening");
            }
        } catch(err) {
            console.error(err);
        }
    }
    return (
        <>
            <input 
                type="text" 
                className="search-bar" 
                placeholder="Search" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="friend-user-list">
                {users.filter(profile => profile.user.username.includes(searchTerm)).map((profile) => (
                    <li className="friend-user" key={profile.user.username}>{profile.user.username}
                    <div className="user-friend-actions">
                        <button className="primary-btn" onClick={() => sendFriendRequest(profile.user.username)}>Send Request</button>
                        <button className="primary-btn" onClick={() => viewUserFriend(profile.user.username)}>View</button>
                    </div>
                    </li>
                ))}
            </ul>
        </>
    )
}