
import { EventEmitter } from "events";
const emisor = new EventEmitter();

emisor.on("disparar", () => {
    console.log("Bang 🔫");
});

emisor.emit("disparar");