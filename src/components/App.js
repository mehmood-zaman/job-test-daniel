import React from "react";
import JobCard from "./JobCard";
const App = () => {
  return (
    <div>
      <JobCard
        logoURL="/static/image.png"
        companyName="Oculus"
        position="Software Engineer"
        location="Seattle, WA"
        availability="Full-time"
        description="We are looking for a team technical lead with strong technical
        expertise in the domain of 3D interactive features."
        salary="80K-90K"
      />
    </div>
  );
};

export default App;
