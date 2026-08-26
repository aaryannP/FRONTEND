/* 
GitHub Copilot Suggestion:
Create a reusable ProjectCard component that accepts title,
description, and project link as props, and displays them inside
a styled card layout.
*/

function ProjectCard({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        width: "250px",
      }}
    >
      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;