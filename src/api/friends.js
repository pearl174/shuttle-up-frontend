import { API_BASE } from "../../config.js";

const getFriends = async (username) => {
    const res = await fetch(`${API_BASE}api/friends/${username}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });
    const data = await res.json();
    return { res, data }
}

export { getFriends };