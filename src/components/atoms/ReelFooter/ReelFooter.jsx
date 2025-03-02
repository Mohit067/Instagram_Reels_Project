import './ReelFooter.css'

export const ReelFooter = ({
    channel, 
    caption,
}) => {
    return (
        <div className='reel-footer-left'>
        <div className='reel-footer-bottom'>
            <h3>{channel}</h3>
            {caption}
        </div>
        </div>
    )
}