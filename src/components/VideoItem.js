import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelected }) => {
    return <div className='item' onClick={() => onVideoSelected(video)}>
        <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        <div className='content'>
            <div className='header'>{video.snippet.title}</div>
        </div>
    </div>
}

export default VideoItem