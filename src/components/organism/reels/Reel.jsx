import { Video } from "@/components/molecules/Videos/Video";
import useFetchAllVideos from "@/hooks/apis/useFetchAllVideos";
import { QueryClient } from "@tanstack/react-query";    
import { useEffect, useState } from "react";

export const Reels = () => {

    

    const [playing, setPlaying] = useState(1);
    const [videoDownload, setVideoDownload] = useState([]);

    const { isVideoFetching, isVideoError, isVideoFetched, videos } = useFetchAllVideos();

    useEffect(() => {
        if(isVideoFetched && videos){
        setVideoDownload([...videos])
        }
    },[videos, isVideoFetched]);

    if(isVideoFetching){
        return <div>Loading...</div>
    }
    if(isVideoError){
        return <div>Error fetching videos</div>
    }

    return (
        <div className='app'>
            { isVideoFetched && videoDownload.map((currentvideo) => (
            <Video 
                url={currentvideo.url}
                key={currentvideo.id}
                id={currentvideo.id}
                caption={currentvideo.caption}
                playing={playing}
                setPlaying={setPlaying}
            />
            ))}
        </div>
    );
}