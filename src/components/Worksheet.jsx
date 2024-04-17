import { useState } from "react";
import labs from "../assets/image/labs.png";
import cloopp from "../assets/image/cloopp.png";
import nexai from "../assets/image/nexai.png";
import exgames from "../assets/image/exclusivegame.png";
import dino from "../assets/image/dino.png";
import furniture from "../assets/image/furniture.png";
import calculator from "../assets/image/calculater.png";
import plane from "../assets/image/plane.png";
import lemon from "../assets/image/lemon.png";
import form from "../assets/image/form.png";
import next from "../assets/image/next-js.svg";
import logovite from "../assets/image/vitelogo.png";
import noble from "../assets/image/noblemind.png";
import email from "../assets/image/email-jsss.png";

const Worksheet = () => {
  function getdate(){
    const today = new Date();
    const month = today.getMonth()
    return month
  }
  const [first, setFirst] = useState(getdate());

  const tabChange = (tabIndex) => {
    setFirst(tabIndex);
  };

  const workData = [
    {
      month: "January",
      projects: [
        {
          id: 1,
          title: "plane",
          gitHubLink: "https://github.com/prince-372/ft-plane",
          liveLink: "https://ft-plane-gamma.vercel.app/",
          image: plane,
          date: 9,
        },
        {
          id: 2,
          title: "Furniture",
          gitHubLink: "https://github.com/prince-372/furniture",
          liveLink: "https://furniture-eight-tau.vercel.app/",
          image: furniture,
          date: 16,
        },
        {
          id: 3,
          title: "Lemon-Wares",
          gitHubLink: "https://github.com/prince-372/lemonwares",
          liveLink: "https://lemonwares-g91m.vercel.app/",
          image: lemon,
          date: 25,
        },
      ],
    },
    {
      month: "February",
      projects: [
        {
          id: 1,
          title: "Exclusive Games",
          gitHubLink: "https://github.com/prince-372/exclusive-games",
          liveLink: "https://exclusive-games-alpha.vercel.app/",
          image: exgames,
          date: 5,
        },
        {
          id: 2,
          title: "Dino-LFG",
          gitHubLink: "https://github.com/prince-372/dino",
          liveLink: "https://dino-gamma.vercel.app/",
          image: dino,
          date: 10,
        },
        {
          id: 3,
          title: "NEXAI",
          gitHubLink: "https://github.com/prince-372/nexai",
          liveLink: "https://nexai-five.vercel.app/#Tokens",
          image: nexai,
          date: 19,
        },
        {
          id: 4,
          title: "Calculator",
          gitHubLink: "https://github.com/prince-372/calculater",
          liveLink: "https://calculater-seven-xi.vercel.app/",
          image: calculator,
          date: 22,
        },
        {
          id: 5,
          title: "NEXAI with html-bootstrap",
          gitHubLink: "https://github.com/prince-372/NexAi2",
          liveLink: "https://nex-ai2.vercel.app/",
          image: nexai,
          date: 29,
        },
      ],
    },
    {
      month: "March",
      projects: [
        {
          id: 1,
          title: "Cloopp",
          gitHubLink: "https://github.com/prince-372/cloopp",
          liveLink: "https://cloopp-two.vercel.app/",
          image: cloopp,
          date: 4,
        },
        {
          id: 2,
          title: "2048-Labs",
          gitHubLink: "https://github.com/prince-372/labs",
          liveLink: "https://labs-cyan.vercel.app/",
          image: labs,
          date: 22,
        },
        {
          id: 3,
          title: "NextJs-topics",
          gitHubLink: "https://github.com/prince-372/nextjs-practice",
          liveLink: "https://next-swiper.vercel.app/",
          image: next,
          date: 21,
        },
        {
          id: 4,
          title: "html with vite",
          gitHubLink: "https://github.com/prince-372/project-vite",
          liveLink: "https://vite-practice-two.vercel.app/",
          image: logovite,
          date: 23,
        },
        {
          id: 5,
          title: "html form-validater",
          gitHubLink: "https://github.com/prince-372/validation2",
          liveLink: "https://validation2.vercel.app/",
          image: form,
          date: 21,
        },
      ],
    },
    {
      month: "April",
      projects: [
        {
          id: 1,
          title: "noblemind",
          gitHubLink: "https://github.com/prince-372/noble-mind",
          liveLink: "https://noble-mind-omega.vercel.app/",
          image: noble,
          date: 6,
        },
        {
          id: 2,
          title: "emailjs",
          gitHubLink: "https://github.com/prince-372/task-email",
          liveLink: "https://task-email.vercel.app/",
          image: email,
          date: 6,
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-8">
        <div className="col-span-2 bg-white rounded-lg shadow-md">
          <h1 className="pt-10 text-3xl font-medium text-center text-black">
            WorkSheet 2024
          </h1>
          <div className="flex flex-col items-center justify-center gap-6 pt-16">
            <button
              onClick={() => tabChange(0)}
              className={`${
                first === 0 && "text-white bg-blue-600"
              } text-base capitalize py-3 px-10 rounded-lg`}
            >
              January
            </button>
            <button
              onClick={() => tabChange(1)}
              className={`${
                first === 1 && "text-white bg-blue-600"
              } text-base capitalize py-3 px-10 rounded-lg`}
            >
              February
            </button>
            <button
              onClick={() => tabChange(2)}
              className={`${
                first === 2 && "text-white bg-blue-600"
              } text-base capitalize py-3 px-10 rounded-lg`}
            >
              March
            </button>
            <button
              onClick={() => tabChange(3)}
              className={`${
                first === 3 && "text-white bg-blue-600"
              } text-base capitalize py-3 px-10 rounded-lg`}
            >
              April
            </button>
          </div>
        </div>
        <div className="col-span-6 p-20 overflow-y-scroll">
          {workData.map((monthData, index) => (
            <div
              key={index}
              className={`${first === index ? "block" : "hidden"}`}
            >
              <div className="p-4 bg-white shadow-xl rounded-2xl">
                <h2 className="text-2xl text-black opacity-90">
                  {monthData.month} Topics :-
                </h2>
                <div className="flex flex-col gap-5">
                  {monthData.projects.map((project, projectIndex) => (
                    <div
                      key={projectIndex}
                      className="flex gap-3 items-center pt-5 min-h-20"
                    >
                      <span className="flex w-5 h-5 items-center justify-center p-2 text-xs text-white bg-blue-500 rounded-full">
                        {project.id}
                      </span>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-xl max-w-[200px] w-full"
                      />
                      <div className="flex flex-col max-w-[470px] w-full gap-2">
                        <h3 className="text-xl font-bold capitalize">
                          {project.title}
                          <span className="ml-5 text-sm font-light opacity-90">
                            Date of submission:- {project.date}
                          </span>
                        </h3>
                        <a
                          href={project.gitHubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-600"
                        >
                          GitHub link:-{" "}
                          <span className="text-blue-500">
                            {project.gitHubLink}
                          </span>
                        </a>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-600"
                        >
                          Live link:-{" "}
                          <span className="text-blue-500">
                            {project.liveLink}
                          </span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Worksheet;
