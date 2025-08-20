import { useParams } from "react-router-dom";
import API_BASE from "../../../config.js";
import "./Profile.css";

const Profile = () => {
    const { username } = useParams();
    const token = localStorage.getItem("token");
    const fetchProfile = async () => {
        const res = await fetch(`${API_BASE}api/profile/${username}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await res.json();
        console.log(data);
    }
    // fetchProfile().catch(() => {
    //     console.log("Something went wrong")
    // })

    
    
    return (
        <h1>Profile page for {username}</h1>
    )
}

export default Profile;