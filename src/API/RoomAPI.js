import axios from "axios";
import {API_BASE, AUTH} from "../Utils/config.js";

const api = axios.create({
    baseURL: API_BASE,
    headers: { "Content-Type": "application/json" },
});

// Get Active Rooms
export const getRooms = async () => {
    // const res = await api.post("get_room_list_demo.php", AUTH);
    // return res.data;
    try {
        const response = await fetch("https://xpresshotelpos.com/cloudpms/get_room_list_demo.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ApiUser: "pmsuser",
                ApiPass: "pms@123",
                HotelId: 1,
                FromDevice: "Mobile",
                NetworkType: "WiFi",
                ClientIp: "203.0.113.45",
                CreatedBy: 101,
            }),
        });

        if (!response.ok) throw new Error("Network response was not ok");
        return  await response.json();
    } catch (error) {
        console.error("Error fetching rooms:", error);
        return [];
    }
};

// Get Deleted Rooms
export const getDeletedRooms = async () => {
    const res = await api.post("get_room_list_deleted_demo.php", AUTH);
    return res.data;
};

// Save Room (Add / Delete / Activate / Modify)
export const saveRoom = async (roomData, actionFlag) => {
    const res = await api.post("save_room_demo.php", {
        ...AUTH,
        HotelId: 1,
        FromDevice: "Web",
        NetworkType: "WiFi",
        ClientIp: "203.0.113.45",
        CreatedBy: 101,
        EntryDate: new Date().toISOString().split("T")[0],
        ...roomData,
        action_flag: actionFlag,
    });
    return res.data;
};
