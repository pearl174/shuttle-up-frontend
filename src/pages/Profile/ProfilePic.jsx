import "./ProfilePic.css";
const ProfilePic = (profilePicPath) => {
    return (
        <div className="profile-container"><img src={profilePicPath} alt="profile-pic" /></div>
    )
}

export default ProfilePic;