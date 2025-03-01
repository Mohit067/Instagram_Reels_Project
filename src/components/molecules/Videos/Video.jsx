import { useEffect, useRef } from "react"
import './Video.css'
export const Video = ({
    id,
    url,
    caption,
    playing,
    setPlaying
}) => {
    const videoRef = useRef(null);

    function handleClick(){
        if(videoRef.current.paused){
            videoRef.current.play();
            setPlaying(id);
        } else {
            videoRef.current.pause();
            setPlaying(null);
        }
    }
    
    useEffect(() => {
        if(playing != id){
            videoRef.current.pause();
        }
    },[playing])

    return (
        <div className="vider-wrapper">
            <video 
                className="vider-player" 
                loop 
                onClick={handleClick}
                ref={videoRef} 
                // controls 
                src={url}
            >
            </video>
        </div>
    )
}