import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { IoCalendarOutline, IoTimeOutline } from "react-icons/io5";
import "react-circular-progressbar/dist/styles.css";
import "boxicons/css/boxicons.min.css";
import Pagination from "./Pagination";

const Dashboard = () => {
  /* Course Details */
  const courses = [
    { icon: "bx bx-video", 
      title: "Videography Basic Design", 
      views: "1.2k", 
      color: "text-indigo-500 bg-indigo-100 size-10 text-center" },

    { icon: "bx bx-code-alt", 
      title: "Basic Front-end Development", 
      views: "834", 
      color: "text-cyan-500 bg-cyan-100 size-10 text-center" },

    { icon: "bx bx-camera", 
      title: "Basic Fundamentals of Photography", 
      views: "3.7k", 
      color: "text-lime-500 bg-lime-100 size-10 text-center" },

    { icon: "bx bx-basketball", 
      title: "Advance Dribble Base Visual Design", 
      views: "2.5k", 
      color: "text-amber-500 bg-amber-100 size-10 text-center" },

    { icon: "bx bx-microphone", 
      title: "Basic Singing Techniques", 
      views: "1.1k", 
      color: "text-red-500 bg-red-100 size-10 text-center" },
  ];
  /* Assignment Progress Details */
  const assignmentProgress = [
    { title: "User Experience Design", 
      percentage: 72, 
      tasks: 120, 
      color: "#696CFF" },

    { title: "Basic Fundamentals", 
      percentage: 48, 
      tasks: 32, 
      color: "#71DD37" },
      
    { title: "React Native Components", 
      percentage: 15, 
      tasks: 182, 
      color: "#FF3E1D" },

    { title: "Basic of Music Theory", 
      percentage: 28, 
      tasks: 56, 
      color: "#03C3EC" },
  ];

  const [searchTerm, setSearchTerm] = useState(""); // Store search input
  
  /* Courses You Are Taking Details */ 
  const coursesTaking = [
    {
      icon: "bxl-angular",
      title: "Basics of Angular",
      instructor: "Tommy Sicilia",
      instructorImg: "/images/avatar.png",
      time: "24h 13m",
      progress: 88,
      completed: 8,
      total: 12,
      color: "text-red-500 bg-red-100",
      status: { people: "1.2k", books: 12, videos: 43 },
    },
    {
      icon: "bx-palette",
      title: "UI/UX Design",
      instructor: "Waldemar Mannering",
      instructorImg: "/images/avatar2.png",
      time: "234h 13m",
      progress: 21,
      completed: 12,
      total: 34,
      color: "text-amber-500 bg-amber-100",
      status: { people: "456", books: 8, videos: 116 },
    },
    {
      icon: "bxl-react",
      title: "React Native",
      instructor: "Louetta Esses",
      instructorImg: "/images/avatar3.png",
      time: "47h 13m",
      progress: 23,
      completed: 7,
      total: 16,
      color: "text-cyan-500 bg-cyan-100",
      status: { people: "2.4k", books: 24, videos: 89 },
    },
    {
      icon: "bx-pencil",
      title: "Art & Drawing",
      instructor: "Tressa Gass",
      instructorImg: "/images/avatar4.png",
      time: "458h 13m",
      progress: 67,
      completed: 20,
      total: 26,
      color: "text-green-500 bg-green-100",
      status: { people: "348", books: 45, videos: 110 },
    }, 
    {
      icon: "bx-star",
      title: "Basic Fundamentals",
      instructor: "Ardis Balderson",
      instructorImg: "/images/avatar5.png",
      time: "12h 13m",
      progress: 25,
      completed: 2,
      total: 8,
      color: "text-indigo-500 bg-indigo-100",
      status: { people: "8.6k", books: 13, videos: 69 },
    },
  ];
  
const [progressValues, setProgressValues] = useState(
  coursesTaking.map((course) => 0)
  );
  
  const [starredAssignments, setStarredAssignments] = useState({});

useEffect(() => {
  setTimeout(() => {
    setProgressValues(coursesTaking.map((course) => course.progress));
    }, 500);
  }, []);
  

const toggleStar = (title) => {
  setStarredAssignments((prev) => ({
    ...prev,
    [title]: !prev[title],
  }));
};

  return (
    <div className="p-1 bg-gray-100 min-h-screen">
      {/* Top Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Top Courses */}
        <div className="bg-white p-4 shadow rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold mt-2">Top Courses</h2>
          <i className="bx bx-dots-vertical-rounded text-gray-500 text-xl cursor-pointer"></i>
        </div>
            {courses.map((course, index) => (
              <div key={index} className="flex justify-between items-center gap-3 mt-3 p-2">
                {/* Icon & Title */}
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-md ${course.color} size-12 flex items-center justify-center`}>
                    <i className={`${course.icon} text-2xl`} />
                  </div>
                  <p className="font-medium">{course.title}</p>
                </div>

                {/* Views Count */}
                <div className="bg-gray-100 text-gray-400 text-xs px-2 py-1 rounded-md w-fit flex whitespace-nowrap">
                  {course.views} Views
                </div>
              </div>
            ))}
         </div>

        {/* Upcoming Webinar */}
        <div className="bg-white p-4 shadow rounded-lg">
          <img src="/images/webinar.png" alt="Webinar" className="w-full rounded-md mt-2" />
          <h2 className="text-xl font-semibold mt-3 ml-2">Upcoming Webinar</h2>
          <p className="text-gray-500 mt-2 p-2">
            Next Generation Frontend Architecture Using Layout Engine And React Native Web.
          </p>
          <div className="flex items-center gap-4 mt-3">
            <IoCalendarOutline className="text-indigo-500 bg-indigo-100 p-2 size-12 rounded-md"/>
            <span>17 Nov 23</span>
            <IoTimeOutline className="text-indigo-500  bg-indigo-100 p-2 size-12 rounded-md" />
            <span>32 minutes</span>
          </div>
          <button className="mt-10 bg-indigo-500 text-white px-4 py-3 rounded-lg w-full">
            Join the event
          </button>
        </div>

        {/* Assignment Progress */}
        <div className="bg-white p-4 shadow rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mt-2">Assignment Progress</h2>
          <i className="bx bx-dots-vertical-rounded text-gray-500 text-xl cursor-pointer"></i>
        </div>
        
        {assignmentProgress.map((task, index) => {
          const [progress, setProgress] = useState(0);
          useEffect(() => {
            setTimeout(() => setProgress(task.percentage), 500);
          }, []);

          return (
            <div key={index} className="flex items-center gap-4 mt-3 p-2">
            {/* Circular Progress Bar */}
            <div className="flex items-center justify-center w-20 h-20">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                <CircularProgressbar 
                  value={progress} 
                  text={`${progress}%`}
                  styles={buildStyles({ textColor: "#333", pathColor: task.color, trailColor: "#E5E7EB" })} 
                />
              </motion.div>
            </div>

            {/* Assignment Title & Star */}
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col justify-center">
                <p className="font-medium">{task.title}</p>
                <p className="text-gray-500 text-sm">{task.tasks} Tasks</p>
              </div>
              <i className={`bx ${starredAssignments[task.title] ? 'bxs-star text-yellow-500 bg-yellow-100' : 'bx-star text-gray-400 bg-gray-100'} text-2xl cursor-pointer`}
                onClick={() => toggleStar(task.title)}
              />
            </div>
          </div>
          );
        })}

        </div>
      </div>

      {/* Course You Are Taking */}
      <div className="bg-white p-6 mt-6 shadow rounded-lg">
        <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">Course You Are Taking</h2>
          <input
            type="text"
            placeholder="Search courses"
            className="p-2 border rounded w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="w-full mt-3">
          <thead>
            <tr className="border-b">
              <th className="pb-2 text-left w-1/3">COURSE NAME</th>
              <th className="pb-2 text-left relative w-1/6">
                <span className="absolute left-[-35px] top-1/2 -translate-y-1/2 border-l border-gray-300 h-4"></span>
                TIME
              </th>
              <th className="pb-2 text-left relative w-2/5">
                <span className="absolute left-[-35px] top-1/2 -translate-y-1/2 border-l border-gray-300 h-4"></span>
                PROGRESS
              </th>
              <th className="pb-2 text-left relative w-1/4">
                <span className="absolute left-[-35px] top-1/2 -translate-y-1/2 border-l border-gray-300 h-4"></span>
                STATUS
              </th>
            </tr>
          </thead>

          <tbody>
          {coursesTaking
            .filter((course) =>
              course.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((course, index) => {
              return (
                <tr key={index} className="border-b">
                  <td className="flex items-center gap-3 py-3">
                    <div className={`p-2 rounded-md ${course.color}`}>
                      <i className={`bx ${course.icon} text-2xl`} />
                    </div>
                    <div>
                      <p className="font-medium">{course.title}</p>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <img
                          src={course.instructorImg}
                          alt={course.instructor}
                          className="w-6 h-6 rounded-full"
                        />
                        <span>{course.instructor}</span>
                      </div>
                    </div>
                  </td>
                  <td>{course.time}</td>
                  <td className="flex items-center gap-3 w-56"> 
                    {/* Percentage */}
                    <span className="text-sm font-medium w-10 text-left">
                      {progressValues[index]}%
                    </span>

                    {/* Progress Bar + Fraction Wrapper */}
                    <div className="flex items-center w-full">
                      {/* Progress Bar Container */}
                      <div className="relative w-64 flex items-center shadow-md">  
                        {/* Progress Bar Background */}
                        <div className="w-full h-2 bg-gray-300 rounded absolute"></div>

                        {/* Animated Progress Bar */}
                        <motion.div
                          className="h-2 bg-indigo-500 rounded"
                          initial={{ width: "0%" }}
                          animate={{ width: `${progressValues[index]}%` }}
                          transition={{ duration: 1.5 }}
                          style={{ position: "relative" }}
                        />
                      </div>

                      {/* Courses Fraction */}
                      <span className="text-sm text-gray-500 min-w-[60px] text-right ml-16">
                        {course.completed ?? 0}/{course.total ?? 0}  
                      </span>
                    </div>
                    
                  </td>
                  <td className="py-3">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <i className="bx bx-user text-indigo-500 mr-5 text-lg align-text-top" />
                        <span>{course.status.people}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <i className="bx bx-book-open text-cyan-500 mr-5 text-lg" />
                        <span>{course.status.books}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <i className="bx bx-video text-red-500 mr-5 text-lg" />
                        <span>{course.status.videos}</span>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-2">
            <p className="flex items-center text-gray-400 mt-3">Showing 1 to 5 of 25 entries</p>
            <div className="flex items-center mb-2">
              <Pagination />
            </div>
         </div>
      </div>

      <footer className="mt-6 flex justify-between text-gray-500 text-sm">
      </footer>

    </div>
  );
};

export default Dashboard;
