import React, { useState, useEffect } from "react";
import { loadScript } from './loadScript';
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";
import {updateSessionCount} from "../../../Controllers/actions/userActions";
import {useSelector} from "react-redux";

const Meet = ({match}) => {
  const { roomName, displayName } = match.params
  const [jitsi, setJitsi] = useState({});
  const history = useHistory();
  const userOnPage = useSelector(state=>state.sessionReducer.status);

  const initialize = async () => {
    await loadScript("https://meet.jit.si/external_api.js", true);
    setJitsi(createMeet()); 
  };
    
  const destroy = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Nos vemos pronto!',
      showConfirmButton: false,
      timer: 1500
    }).then(()=>{
      let profId = roomName.slice(18);
      updateSessionCount(profId,userOnPage.token);
    })
  }
    
  const createMeet = () => {
    return new window.JitsiMeetExternalAPI("meet.jit.si", {
      parentNode: document.getElementById("jitsi-root"),
      onMeetingEnd: ()=>{history.push('/home')},
      roomName,
      userInfo: {
        displayName
      },
      interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        SHOW_CHROME_EXTENSION_BANNER: false,
        SHOW_POWERED_BY: false,
      },
      configOverwrite: {
        disableSimulcast: false,
      },
    });
  };

  useEffect(() => {
    initialize();
    return () => destroy();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log('JITSI HERE=>>> ',jitsi);
  return (
        <div className='h-screen' id="jitsi-root"/>
  );
}
export default Meet;