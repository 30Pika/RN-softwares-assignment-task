import React, { useState, useEffect } from "react";
import { Button, Tabs, message } from "antd";
import {getDeletedRooms, getRooms, saveRoom} from "../API/RoomAPI.js";
import RoomTable from "../Components/RoomTable.jsx";
import DeletedRoomTable from "../Components/DeletedRoomTable.jsx";
import RoomForm from "../Components/RoomForm.jsx";

const RoomsPage = () => {
    const [rooms, setRooms] = useState([]);
    const [deletedRooms, setDeletedRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const fetchRooms = async () => {
        setLoading(true);
        try {
            const data = await getRooms();
            setRooms(data);
        } catch {
            message.error("Failed to fetch rooms");
        } finally {
            setLoading(false);
        }
    };

    const fetchDeletedRooms = async () => {
        try {
            const data = await getDeletedRooms();
            setDeletedRooms(data);
        } catch {
            message.error("Failed to fetch deleted rooms");
        }
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Rooms Management</h1>
                <Button type="primary" onClick={() => setIsFormOpen(true)}>
                    Add New Room
                </Button>
            </div>

            <Tabs
                defaultActiveKey="1"
                items={[
                    {
                        label: "Active Rooms",
                        key: "1",
                        children: (
                            <RoomTable
                                rooms={rooms}
                                refresh={fetchRooms}
                                onDelete={(room) => saveRoom(room, 3).then(fetchRooms)}
                            />
                        )
                    },
                    {
                        label: "Deleted Rooms",
                        key: "2",
                        children: (
                            <DeletedRoomTable
                                rooms={deletedRooms}
                                refresh={fetchDeletedRooms}
                                onActivate={(room) => saveRoom(room, 4).then(fetchDeletedRooms)}
                            />
                        )
                    }
                ]}
            />

            <RoomForm
                open={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSave={(room) => saveRoom(room, 1).then(fetchRooms)}
            />
        </div>
    );
};

export default RoomsPage;
