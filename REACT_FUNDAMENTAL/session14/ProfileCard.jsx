function ProfileCard({ name, profilePic, bio }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        width: "250px",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      <img
        src={profilePic}
        alt={name}
        width="120"
        height="120"
      />

      <h2>{name}</h2>

      <p>{bio}</p>
    </div>
  );
}

export default ProfileCard;