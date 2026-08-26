function UserProfile(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <img
        src={props.profilePic}
        alt="Profile"
        width="100"
        height="100"
      />

      <h2>{props.username}</h2>

      <p>{props.followers} Followers</p>
    </div>
  );
}

UserProfile.defaultProps = {
  followers: 0,
  profilePic: "https://picsum.photos/100",
};

export default UserProfile;