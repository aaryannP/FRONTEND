import ProfileCard from "./ProfileCard";
import SocialLinks from "./SocialLinks";
import ProjectCard from "./ProjectCard";

function App() {
  const links = [
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
    },
  ];

  return (
    <div>
      <ProfileCard
        name="Aryan Parmar"
        profilePic="https://picsum.photos/150"
        bio="React Developer | Python Developer | Video Editor"
      />

      <SocialLinks links={links} theme="light" />

      <ProjectCard
        title="Portfolio Website"
        description="A simple React portfolio project."
      />
    </div>
  );
}

export default App;