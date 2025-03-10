import axiosInstance from "@/config/axiosConfig";

export const getAllVideos = async () => {
    try {
        const response = await axiosInstance.get('/videos');
        console.log(response.data);
        return response?.data;
        
    } catch (error) {
        console.log("something went wrong", error);
    }
}