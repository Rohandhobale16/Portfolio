import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Rohan, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        {/* <span>
          [Degree/Certification], [Institution], [Year] [Degree/Certification],
          [Institution], [Year] [Relevant Course], [Platform/Institution],
          [Year]
        </span> */}
        <ul className="list-disc list-inside">
  <li className="mb-2">G. H. Raisoni College of Engineering And Management, Pune | Aug 2020 – May 2024<br />Bachelor of Technology in Computer Science, 8.82 CGPA, Pune, Maharashtra</li>
  <li className="mb-2">Bharat English Jr. College, Shivajinager, Pune | Aug 2019 – Feb 2020<br />12th, HSC, 84.31%, Pune, Maharashtra</li>
  <li className="mb-2">Shree Sangameshwar High School, Pune | June 2017 – March 2018<br />10th, SSC, 92.60%, Pune, Maharashtra</li>
</ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <ul className="list-disc list-inside">
  <li className="mb-2">Languages: Python, Java, HTML/CSS, JavaScript, MySQL</li>
  <li className="mb-2">Developer Tools: VS Code, PyCharm</li>
  <li className="mb-2">Frameworks: Django</li>
</ul>

      
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <ul className="list-disc list-inside">
  <li className="mb-4">
    Apricitas Technologies PVT. LTD., Pune | June 2023 – Dec 2023
    <br />
    <span className="font-bold">Python Developer Intern</span>
    <ul className="list-disc list-inside ml-4">
      <li className="mb-2">Developed and maintained Python-based Web Application, demonstrating proficiency in Python programming and software development.</li>
      <li className="mb-2">Designed and implemented using frameworks like Django, enabling seamless communication between various components of the application.</li>
      <li className="mb-2">Collaborated on the development of a database schema, utilizing SQL databases to store and retrieve data efficiently.</li>
    </ul>
  </li>
</ul>

       <br />
        
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative IT Field solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;