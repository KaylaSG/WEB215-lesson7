import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import axios from "./axios";

function App() {
const[videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data);

      return response;
    }

    fetchPosts();
    
  }, []);

  console.log(videos);
  
  return (
    //BEM naming convention: changed default uppercase "A" in app to lowercase "a"
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({url, channel, song, likes, messages, description, shares}) => (
          <Video 
            url={url}
            channel={channel}
            song={song}
            likes={likes}
            messages={messages}
            description={description}
            shares={shares}
          />
        ))}
        
      </div>
      {/* app container: holds videos */}
      {/* videos: lists the videos */}
    </div>
  );
}

export default App;

//FRONTEND consists of React, Material UI, Flexbox, 3rd party Ticker, Scroll Snap, and hosted on Firebase
//BACKEND consists of Node.js, Express.js server, MongoDB, Mongoose, and hosted on Heroku
