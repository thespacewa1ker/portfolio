import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <section>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-100 mt-28">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden mb-4">
                    <Image
                      src="/sanjay.jpeg"
                      layout="fill"
                      objectFit="cover"
                      alt="Sanjay N's profile picture"
                    />
                  </div>
                  <h1 className="text-xl font-bold">Sanjay N</h1>
                  <p className="text-gray-600">Software Engineer</p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      href="#"
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Contact
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1IMJhnlj4GzioxTVDCnN2Jje8RxVFXf4Q/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                    >
                      Resume
                    </a>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-sky-600 uppercase font-bold tracking-wider mb-2">
                    Skills
                  </span>
                  <ul>
                    <li className="mb-3 text-sm text-bold text-teal-600">
                      Python, C++, C#
                    </li>
                    <li className="mb-3 text-sm text-bold text-pink-600">
                      PostgresSQL, MongoDB, AzureDB
                    </li>
                    <li className="mb-3 text-sm text-bold text-teal-600">
                      HTML/CSS, JavaScript, TypeScript
                    </li>
                    <li className="mb-3 text-sm text-bold text-pink-600">
                      Node.js, Django, Flask, .NET.
                    </li>
                    <li className="mb-3 text-sm text-bold text-teal-600">
                      Statistical Modelling, Simulation
                    </li>
                    <li className="mb-3 text-sm text-bold text-pink-600">
                      Machine Learning, Data Mining
                    </li>
                    <li className="mb-3 text-sm text-bold text-teal-600">
                      REST APIs, AWS S3, Lambda, DMS, Glue
                    </li>
                    <li className="mb-3 text-sm text-bold text-pink-600">
                      Tableau, Excel, PowerBI
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl text-sky-600 font-bold mb-4">
                  About Me
                </h2>
                <p className="text-gray-700 flex-grow text-justify">
                  I am a highly motivated individual with a strong background in
                  statistics and a deep interest in the fascinating worlds of
                  economics and finance. Armed with a good understanding of data
                  analysis,I thrive on unraveling complex problems and deriving
                  valuable insights from data.My curiosity in finance has driven
                  me to explore various aspects of these fields, including
                  Fundamental Ration analysis, market trends, and investment
                  strategies.
                </p>
                <p className="text-gray-700 mt-3">
                  As a freelancer, I am open to exciting opportunities in the
                  technology domain. My expertise in statistics and data
                  analysis equips me to work on diverse projects, ranging from
                  data-driven decision-making to financial modeling and
                  algorithmic trading. I am passionate about combining my
                  analytical abilities with the realms of economics and finance
                  to create meaningful solutions.
                </p>
                <p className="text-gray-700 mt-3">
                  My relentless drive for knowledge and innovation keeps me
                  constantly seeking opportunities to grow and learn. If you
                  share my enthusiasm for the intersection of data, economics,
                  and finance, I am excited to collaborate with you on thrilling
                  projects. Let&apos s embark on an extraordinary journey
                  together.
                </p>

                <h3 className="font-semibold text-center mt-4 -mb-2">
                  Find me on
                </h3>
                <div className="flex justify-center items-center gap-6 my-6">
                  <a
                    className="text-gray-700 hover:text-orange-600"
                    aria-label="Visit TrendyMinds LinkedIn"
                    href=""
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-6"
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="text-gray-700 hover:text-orange-600"
                    aria-label="Visit TrendyMinds Instagram"
                    href=""
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-6"
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="text-gray-700 hover:text-orange-600"
                    aria-label="Visit TrendyMinds Twitter"
                    href=""
                    target="_blank"
                  >
                    <svg
                      className="h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                  </a>
                </div>

                <h2 className="text-xl text-sky-600 font-bold mt-6 mb-4">
                  Experience
                </h2>
                <div className="mb-6">
                  <div className="flex justify-between">
                    <p className="text-gray-600 text-teal-600 hover:text-pink-500 font-bold">
                      Software Engineer Intern
                    </p>
                    <span>
                      <span className="text-sky-600 font-bold mr-2 hover:text-pink-500">
                        @ Microsoft.
                      </span>
                      <span className="text-gray-600">
                        May(&apos;)22 - July(&apos;)22
                      </span>
                    </span>
                  </div>
                  <ul className="mt-2 text-gray-600">
                    <li>
                      - Created REST APIs, leveraging Azure NoSQL database, for
                      Rule Management System.
                    </li>
                    <li>
                      - Contributed to a large-scale impact project focoused on
                      back-end, resulting in an 10x reduction in overall system
                      complexity.
                    </li>
                    <li>
                      - Optimized data query time from 6-7 hours to 1 hour &
                      enabling to process 900TB of data.
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between">
                    <p className="text-gray-600 text-teal-600 hover:text-pink-500 font-bold">
                      Data Engineer Intern
                    </p>
                    <span>
                      <span className="text-sky-600 font-bold mr-2 hover:text-pink-500">
                        @ Ganit.inc
                      </span>
                      <span className="text-gray-600">Jan-23 - Jun-23</span>
                    </span>
                  </div>
                  <ul className="mt-2 text-gray-600">
                    <li>
                      - Designed and executed ETL job scripts to handle diverse
                      data sources and deliver reliable data to meet business
                      requirements.
                    </li>
                    <li>
                      - Contributed to a large-scale impact project focoused on
                      back-end, resulting in an 10x reduction in overall system
                      complexity.
                    </li>
                    <li>
                      - Provided documentation and training to end-users on new
                      data migration processes.
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between">
                    <p className="text-gray-600 text-teal-600 hover:text-pink-500 font-bold">
                      Software Engineer Intern
                    </p>
                    <span>
                      <span className="text-sky-600 font-bold mr-2 hover:text-pink-500">
                        @ Artemis Network
                      </span>
                      <span className="text-gray-600">
                        May(&apos;)22 - July(&apos;)22
                      </span>
                    </span>
                  </div>
                  <ul className="mt-2 text-gray-600">
                    <li>
                      - Designed and developed a Crypto Currency converter tool,
                      providing real-time conversion rates for various
                      cryptocurrencies.
                    </li>
                    <li>
                      - Developed a robust RESTApis, enhancing job management
                      and scalability.
                    </li>
                    <li>
                      - Skills Learnt: REST APIs,Django,Django-Rest framework
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
