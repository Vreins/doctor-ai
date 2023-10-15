// import { env } from "$env/dynamic/public";
import { io } from "socket.io-client";
import { readable } from 'svelte/store'
export const DoctorSocket = io("http://127.0.0.1:5000", {autoConnect: false});

export interface TranscriptMessage{
    speaker: number | string;
    text: string;
};

export let connected = readable(false, (set)=>{
    DoctorSocket.on('connect', ()=>{
        console.log('socketio connected')
        set(true);
    })
    DoctorSocket.on('disconnect', ()=>{
        console.log('socketio disconnected')
        set(false);
    })
    DoctorSocket.connect();
})