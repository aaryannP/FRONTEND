function SocialLinks({ links, theme = "light" }) {
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f2f2f2",
        color: theme === "dark" ? "white" : "black",
        padding: "15px",
        width: "250px",
        marginBottom: "20px",
      }}
    >
      <h3>Social Links</h3>

      {links.map((link, index) => (
        <p key={index}>
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.name}
          </a>
        </p>
      ))}
    </div>
  );
}

export default SocialLinks;