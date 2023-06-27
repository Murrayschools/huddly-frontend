import { useEffect, useState } from "react";
import Notification from "./Notification";

function ClientDisconnected(props) {
    const [disconnected, setDisconnected] = useState(false);

    useEffect(() => {
        props.socket.on("connect_error", () => {
            setDisconnected(true);
        });

        props.socket.on("connect", () => {
            setDisconnected(false);
        })
    }, [props.socket, disconnected]);
        
    return (
        <Notification interval={3000} solved={!disconnected} 
        id="connected-panel"> 
        {
            disconnected ? "Disconnected from Server" : "Connected!"
        }
        </Notification>
    )
}

export default ClientDisconnected;