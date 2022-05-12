export default function CaseStudyHeader({ headerDetails }) {
  return (
    <div className="bg-blue-800 text-center py-32">
      {/* <h1 className="text-4xl mb-3">Flow with Megmo</h1> */}
      <h1 className="text-4xl mb-3">{headerDetails.title}</h1>
      {/* <h2 className="text-xl">Full Stack Marketing Page + Scheduling Tool</h2> */}
      <h2 className="text-xl">{headerDetails.subtitle}</h2>
      <div className="mt-10 flex justify-center gap-5">
        <button className="bg-black text-white py-2 px-5 rounded">Live</button>
        <button className="bg-black text-white py-2 px-5 rounded">Repo</button>
      </div>
    </div>
  );
}
