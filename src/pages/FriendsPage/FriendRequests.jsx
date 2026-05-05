import { useEffect, useState } from "react";
import { getFriendRequests } from "../../api/friends";
import { useNavigate, useParams } from "react-router-dom";
import AddFriends from "./AddFriends";
import { API_BASE } from "../../../config";

export default function FriendRequests({setMode}) {
    const [friendRequests, setFriendRequests] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const fetchFriendRequests = async() => {
            const {res, data} = await getFriendRequests(params.username);
            if (res.status === 401) {
                alert("Something went wrong. Please login again.");
                localStorage.removeItem("token");
                navigate("/login");
            } else if (res.status === 500) {
                alert("Something went wrong");
                navigate(`/profile/${username}`);
            } else if (res.status === 200) {
                setFriendRequests(data.friendRequests);
                console.log("Here are your friend requests :D.");
            } else {
                console.log("lol idk what's happening");
                navigate(`/profile/${username}`);
            }
        }
        fetchFriendRequests().catch((err) => {
            console.error(err);
        })
    }, []);

    const acceptFriendRequest = async (friend) => {
        try {
            const res = await fetch(`${API_BASE}api/friends/${friend}`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }
            );
            const data = res.json();
            if (res.status === 401) {
                alert("Something went wrong. Please login again.");
                localStorage.removeItem("token");
                navigate("/login");
            } else if (res.status === 500) {
                alert("Something went wrong. Please try again.");
                // navigate(`/profile/${username}`);
            } else if (res.status === 200) {
                console.log("Heh you're frens now");
                setMode("friends");
            } else {
                console.log("lol idk what's happening");
                alert("ahem. smth is wrong here");
                // navigate(`/profile/${username}`);
            }
        } catch(err) {
            console.error(err);
        }
    }

    const declineFriendRequest = async (friend) => {
        // use decline friend route 
    }
    return (
        <>
            <input type="text" 
                    placeholder="Search"
                    className="search-bar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
            <ul className="friend-request-list">
                {friendRequests.filter((friendRequest) => friendRequest.user.username.includes(searchTerm)).map(friendRequest => (
                    <li className="friend-request" key={friendRequest.user.username}>{friendRequest.user.username} 
                    <div className="friend-request-actions">
                        <button className="primary-btn accept" onClick={() => acceptFriendRequest(friendRequest.user.username)}>Accept</button>
                        <button className="primary-btn decline" onClick={() => declineFriendRequest(friendRequest.user.username)}>Decline</button>
                    </div>
                    </li>
                ))}
            </ul>
        </>
    )
}