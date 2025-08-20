import { useParams } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
    const { username } = useParams();
    return (
        <h1>Profile page for {username}</h1>
    )
}

export default Profile;