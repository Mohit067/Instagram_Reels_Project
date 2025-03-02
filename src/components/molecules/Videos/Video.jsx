import { useEffect, useRef } from "react"
import './Video.css'
import {ReelFooter}  from "@/components/atoms/ReelFooter/ReelFooter";
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
    },[playing, id]);

    useEffect(() => {
        const videoElement = videoRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && playing !== id) {
                    videoElement.play();
                    setPlaying(id);
                } else {
                    videoElement.pause();
                    setPlaying(null);
                }
            });
        }, { threshold: 0.5 });
    
        if (videoElement) {
            observer.observe(videoElement);
        }
    
        return () => {
            if (videoElement) observer.unobserve(videoElement);
        };
    }, [id, setPlaying, playing]);
    

    return (
        <div className="vider-wrapper">
            <video 
                className="vider-player" 
                loop 
                onClick={handleClick}
                ref={videoRef} 
                src={url}
            >
            </video>
            <div className="bottom">
                <ReelFooter channel={"@mohit067"} caption={caption}/>
            </div>
        </div>
    )
}