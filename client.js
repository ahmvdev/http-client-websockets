import { WebSocket } from "ws"

const ws = new WebSocket("ws://localhost:8080")

ws.onopen = () => {
    console.log("connected to server")
    ws.send("hey")
    console.log("message sent")
}