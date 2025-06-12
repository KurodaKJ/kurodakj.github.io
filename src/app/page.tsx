"use client"; // This directive marks the file as a Client Component

import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 flex flex-col items-center">
        <Image
          src="/images/profile.jpg"
          alt="Jack Kaeorahan"
          width={200}
          height={200}
          className="rounded-full mb-4"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4">Jack Kaeorahan</h1>
          <p className="text-lg">Software Development Student</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          Hi, I&apos;m Jack Kaeorahan, a passionate Software Development student at
          Gilde ICT College in Roermond. Our curriculum is unique – we learn by
          doing, mirroring real-world client interactions. This hands-on
          approach gives me a significant advantage, preparing me for the
          challenges and dynamics of the professional tech world. I&apos;ve already
          gained experience with a variety of programming languages and I&apos;m
          constantly seeking new knowledge to expand my skillset. I&apos;m excited
          about the future of software development and eager to contribute to
          innovative projects.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="shadow-md rounded-lg p-6 card">
            <h3 className="text-xl font-bold mt-4">
              Website for advertising an Arduino project
            </h3>
            <p>
              This website was created to showcase our Arduino project, an IoT
              People Counter with Emergency Features. It&apos;s built using HTML, CSS
              and PHP for a simple and effective presentation. Learn more about
              the project via the Tinkercad link below.
            </p>
            <a
              href="https://www.tinkercad.com/things/79qmO2bw327-iot-people-counter-emegency-include"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
            <a
              href="https://github.com/KurodaKJ/iot-product-site"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Project
            </a>
          </div>

          {/* Project Card 2 */}
          <div className="shadow-md rounded-lg p-6 card">
            <h3 className="text-xl font-bold mt-4">Time Registration System</h3>
            <p>
              This Time Registration System is a web application built with
              HTML, CSS and PHP to efficiently track and manage work hours.
            </p>
            <a
              href="https://github.com/KurodaKJ/time-registration-system"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Project
            </a>
          </div>

          {/* Project Card 3 */}
          <div className="shadow-md rounded-lg p-6 card">
            <h3 className="text-xl font-bold mt-4">Menu Ordering System</h3>
            <p>
              This Android-based menu ordering system, built with Java, Kotlin,
              and PostgreSQL, streamlines the ordering process on tablet
              devices. Customers can easily browse the menu, place orders, and
              conveniently calculate their total bill using the integrated
              payout functionality.
            </p>
            <a
              href="https://github.com/Chriotjuh1/Tappasrestaurant"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Project
            </a>
          </div>

          {/* Project Card 4 */}
          <div className="shadow-md rounded-lg p-6 card">
            <h3 className="text-xl font-bold mt-4">Simple Search Engine</h3>
            <p>
              This project is a simple search engine built with Laravel. It
              allows users to quickly and easily search for information within a
              defined dataset, providing relevant results in a user-friendly
              format.
            </p>
            <a
              href="https://github.com/KurodaKJ/gilde-search"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Project
            </a>
          </div>

          {/* Project Card 5 */}
          <div className="shadow-md rounded-lg p-6 card">
            <h3 className="text-xl font-bold mt-4">
              Inventory Management System
            </h3>
            <p>
              This Inventory Management System build with Python-Flask, aims to
              combat food waste by enabling efficient inventory tracking and
              providing recipe suggestions based on available ingredients.
              Minimize waste and maximize your culinary creativity!
            </p>
            <a
              href="https://github.com/KurodaKJ/kookkelder-api"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Project
            </a>
          </div>

          {/* Project Card 6 */}
          <div className="shadow-md rounded-lg p-6 card">
            <h3 className="text-xl font-bold mt-4">Simple Web Crawler</h3>
            <p>
              This project is a simple web crawler built with C++. It
              efficiently navigates websites and extracting and their content
              for further analysis or processing.
            </p>
            <a
              href="https://github.com/KurodaKJ/simple-web-crawler"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience Card 1 */}
          <div className="shadow-md rounded-lg p-6 card">
            <h3 className="text-xl font-bold mb-2">Het Beginstation</h3>
            <p className="text-600">Intern</p>
            <p className="text-600 dark:text-gray-400">February - July</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Developed functionalities for a new bike management system to
              streamline the management and sales of bicycles. Utilized a
              combination of frontend and backend development skills using .NET
              Frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Me!</h2>
        {isClient && (
          <div className="flex justify-center items-center space-x-4">
            <a
              href="mailto:hiso8155@gmail.com"
              className="text-blue-300 hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/kurodakj/"
              className="text-blue-300 hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/KurodaKJ"
              className="text-blue-300 hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        )}
      </section>
    </main>
  );
}