import React from 'react';

const CaseStudy = () => {
  return (
    <div>
      <div className="bg-blue-800 text-center py-32">
        <h1 className="text-4xl">Project Title</h1>
        <h2 className="text-xl">Project Subtitle</h2>
        <div className="mt-10 flex justify-center gap-5">
          <button className="bg-black text-white py-2 px-5 rounded">Live</button>
          <button className="bg-black text-white py-2 px-5 rounded">Repo</button>
        </div>
      </div>
      <div className="p-5 max-w-screen-lg m-auto">
        <div className="rounded">
          <img className="rounded" src="./images/flow-with-megmo.png" />
        </div>
        <h3 className="text-center">Summary</h3>
        <p>
          Ex occaecat reprehenderit laboris magna amet culpa aliqua consequat do aliqua ex.
          Voluptate sunt proident nulla adipisicing sit elit enim. Do sunt eu aute anim elit
          occaecat. Deserunt velit et mollit minim ullamco tempor aliquip mollit qui. dolor. Mollit
          anim fugiat officia occaecat cupidatat fugiat culpa cillum Lorem culpa irure proident
          laborum. Sint eu dolore culpa id proident qui elit culpa.
        </p>
        <h3>Technologies</h3>
        <ul>
          <li>react</li>
          <li>tailwind css</li>
          <li>react</li>
          <li>tailwind css</li>
          <li>react</li>
          <li>tailwind css</li>
          <li>react</li>
          <li>tailwind css</li>
          <li>react</li>
          <li>tailwind css</li>
          <li>react</li>
          <li>tailwind css</li>
          <li>react</li>
          <li>tailwind css</li>
        </ul>
      </div>
    </div>
  );
};

export default CaseStudy;
