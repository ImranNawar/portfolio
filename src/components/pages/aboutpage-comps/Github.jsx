import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col items-center justify-center text-white">
        <h1 className="project-heading mb-4 mt-14 text-4xl font-bold">
          Days I <strong className="text-green-500">Code</strong>
        </h1>
      <div className="md:flex md:justify-center">
        <GitHubCalendar
          username="ImranNawar"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </div>
    </div>
  );
}

export default Github;
