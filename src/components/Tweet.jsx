import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import TimeStamps from "./TimeStamps";
import User from "./User";


function Tweet({ tweet }) {
  return (
    <div className="tweet">

      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">

      <User user={tweet.user} />

          <TimeStamps timestamp={tweet.timestamp} />
        </div>

      <Message message={tweet.message} />

      <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;