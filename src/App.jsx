import React, { useState } from "react";
import RoomList from "./Components/RoomList";
import DeletedRoomList from "./Components/DeletedRoomList";
import AddRoomForm from "./Components/AddRoomForm";
const App = () => {
    const [tab, setTab] = useState("list");

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-5xl mx-auto bg-white shadow rounded-lg p-6">
                <h1 className="text-2xl font-semibold mb-4">🏨 Xpress Hotel — Room Master</h1>

                <div className="flex gap-3 mb-6">
                    <button onClick={() => setTab("list")} className={`px-3 py-1 rounded ${tab === "list" ? "bg-indigo-600 text-white" : "bg-gray-100"}`}>
                        Room List
                    </button>
                    <button onClick={() => setTab("deleted")} className={`px-3 py-1 rounded ${tab === "deleted" ? "bg-indigo-600 text-white" : "bg-gray-100"}`}>
                        Deleted Rooms
                    </button>
                    <button onClick={() => setTab("add")} className={`px-3 py-1 rounded ${tab === "add" ? "bg-indigo-600 text-white" : "bg-gray-100"}`}>
                        Add Room
                    </button>
                </div>

                {tab === "list" && <RoomList />}
                {tab === "deleted" && <DeletedRoomList />}
                {tab === "add" && <AddRoomForm />}
            </div>
        </div>
    );
};

export default App;
