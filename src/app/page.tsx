import Image from 'next/image';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8"> 

      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4">Jack Kaeorahan</h1>
        <p className="text-lg">Software Development Student</p>
      </section>

      {/* About Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
        Hi, I'm Jack Kaeorahan, a passionate Software Development student at Gilde ICT College in Roermond.  Our curriculum is unique – we learn by doing, mirroring real-world client interactions. This hands-on approach gives me a significant advantage, preparing me for the challenges and dynamics of the professional tech world.
        I've already gained experience with a variety of programming languages and I'm constantly seeking new knowledge to expand my skillset. I'm excited about the future of software development and eager to contribute to innovative projects.
        </p>
      </section>  

      {/* Projects Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <Image src="/project-placeholder.jpg" alt="Project 1" width={400} height={300} />
            <h3 className="text-xl font-bold mt-4">Project Title 1</h3>
            <p>Brief description of the project and technologies used.</p>
            <a href="https://example.com/" className="text-blue-500 hover:underline">View Project</a>
          </div>

          {/* Add more project cards as needed */}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Het Beginstation</h3>
            <p className="text-gray-600">Intern</p>
            <p className="text-gray-600">February - July</p>
            <p className="text-gray-600">Description of the role and responsibilities.</p>
          </div>

          {/* Add more experience cards as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>Provide email and social media linkshere.</p>
      </section>

    </main>
  );
}