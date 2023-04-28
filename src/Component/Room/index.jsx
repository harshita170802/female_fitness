import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const RoomPage=()=>{
    const {roomId} =useParams();
    const myMeeting=async(element)=>{
        const appID=1158260653;
        const serverSecret='595ddc29cf544e6eaf7b89999ce8a931';
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            'Fitness Room'
        );
        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
           container:element,
           sharedLinks:[
            {
                name:'Copy Link',
                url:`http://localhost:3000/room/${roomId}`
            },
           ],
           scenario:{
            mode:ZegoUIKitPrebuilt.OneONoneCall,
           },
           showScreenSharingButton:true,
        });
    };
    return(
        <div className='fitnessroomcontainer'>
            <div ref={myMeeting}/>
        </div>
    )
}
export default RoomPage