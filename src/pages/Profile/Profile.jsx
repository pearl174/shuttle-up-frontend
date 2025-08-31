import { useParams } from "react-router-dom";
import API_BASE from "../../../config.js";
import "./Profile.css";
import ProfilePic from "../../components/ProfilePic/ProfilePic.jsx";
import ProgressGraph from "../../components/ProgressGraph/ProgressGraph.jsx";

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
        <div className="profile-grid-container">
            <div className="left-side">
                <div className="profilepic-bio-container">
                    <ProfilePic />
                    <div className="bio-text">If you're gonna hit it, hit it until it breaks!</div>
                    <button className="primary-btn friends">Friends</button>
                    <button className="primary-btn friend-requests">Friend Requests</button>
                </div>
                <div className="metrics">
                    Insert Metrics
                </div>
            </div>
            <div className="right-side">
                <div className="progress-graph-container"><ProgressGraph /></div>
                <div className="heatmap"></div>
            </div>
        </div>
    )
}

export default Profile;