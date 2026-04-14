import { useNavigate, useParams } from "react-router-dom";
import {API_BASE} from "../../../config.js";
import "./Profile.css";
import ProfilePic from "./ProfilePic.jsx";
import ProgressGraph from "./ProgressGraph.jsx";
import ButtonTray from "./ButtonTray.jsx";
import HeatMap from "./HeatMap.jsx";
import { useEffect, useState } from "react";

const Profile = () => {
    const navigate = useNavigate();
    const { username } = useParams();
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
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
            const profile = data.data;
            // console.log(data);
            if (res.status === 401) {
                alert("Something went wrong. Please login again.");
                localStorage.removeItem("token");
                navigate("/login");
            } else if (res.status === 404) {
                alert("Profile not found. Please login again.");
                navigate("/login");
            } 
            else if (res.status === 500) {
                alert("Something went wrong");
                navigate("/login");
            } else if (res.status === 200) {
                console.log("You are logged in :D.");
                setProfileData(profile);
            } else {
                console.log("I don't understand what has gone wrong!");
                navigate("/");
            }
        }
        fetchProfile().catch((err) => {
            console.error(err);
        });
    }, [username]);

    
    
    return (
        <div className="profile-grid-container">
            <div className="left-side">
                <div className="profilepic-bio-container">
                    <ProfilePic />
                    <div className="bio-text">If you're gonna hit it, hit it until it breaks!</div>
                    <button className="primary-btn friends">Friends</button>
                    <button className="primary-btn friend-requests">Friend Requests</button>
                </div>
                <ButtonTray />
                {/* <div className="metrics">
                    Insert Metrics
                </div> */}
            </div>
            <div className="right-side">
                <div className="progress-graph-container"><ProgressGraph /></div>
                <div className="heatmap-padding-box">
                    <div className="progress-heatmap-container"><HeatMap activityLogs={profileData?.activityLogs} /></div>
                </div>
            </div>
        </div>
    )
}

export default Profile;