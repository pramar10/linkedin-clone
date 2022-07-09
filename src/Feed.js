import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import {
  orderBy,
  query,
  collection,
  getDocs,
  addDoc,
  serverTimestamp 
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [input, setInput] = React.useState("");
  const [posts, setPosts] = React.useState([]);
  const postCol = collection(db,'posts')
  const sortedPost = query(postCol,orderBy('timestamp','desc'));
  const user = useSelector(selectUser)

  React.useEffect(() => {
  
    getDocs(sortedPost).then((snapshot)=>setPosts(
        snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data()
        }))
    ))

  }, [sortedPost]);
  const sendPost = (e) => {
    e.preventDefault();
    addDoc(postCol,{
        name:user.displayName,
        description:user.email,
        message:input,
        photoUrl:user.photoUrl || "",
        timestamp:serverTimestamp() 
    
    })
    setInput('')
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption title={"Photo"} Icon={ImageIcon} color="#70b5f9" />
          <InputOption
            title={"Video"}
            Icon={SubscriptionsIcon}
            color="#e7a33e"
          />
          <InputOption title={"Event"} Icon={EventNoteIcon} color="#c0cbcd" />
          <InputOption
            title={"Write article"}
            Icon={CalendarViewDayIcon}
            color="#7fc15e"
          />
        </div>
      </div>
      {/* Posts */}

     <FlipMove >
     {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
     </FlipMove>
    </div>
  );
};

export default Feed;
