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

const deleteFriend = async (username) => {
    const res = await fetch(`${API_BASE}api/friends/${username}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });
    const data = await res.json();
    return {res, data};
}

const getFriendRequests = async(username) => {
    const res = await fetch(`${API_BASE}api/friends/requests/${username}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });
    const data = await res.json();
    return {res, data};
}

const deleteFriendRequest = async(username) => {
    const res = await fetch(`${API_BASE}api/friends/requests/${username}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });
    const data = await res.json();
    return {res, data};
}

const getUsers = async() => {
    const res = await fetch(`${API_BASE}api/friends`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });
    const data = await res.json();
    return { res, data };
}

export { getFriends, deleteFriend, getFriendRequests, deleteFriendRequest, getUsers };