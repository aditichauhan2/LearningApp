import CourseCard from "../components/CourseCard";
import Pagination from "../components/Pagination";

/* Course Details */
const courses = [
  { image: "/images/course1.png", 
    tag: "Web", 
    title: "Basics of Angular", 
    description: "Introductory course for Angular and framework basics", 
    rating: 4.4, 
    reviews: "1.23k" },

  { image: "/images/course2.png", 
    tag: "UI/UX", 
    title: "Figma & More", 
    description: "Keyword suggestion tool provides comprehensive & keyword suggestions", 
    rating: 4.2, 
    reviews: 424 },

  { image: "/images/course3.png", 
    tag: "SEO", 
    title: "Keyword Research", 
    description: "Introductory course for Angular and framework basics", 
    rating: 5, 
    reviews: 12 },

  { image: "/images/course4.png", 
    tag: "Music", 
    title: "Basic to Advanced", 
    description: "20 more lessons like this about music production, writing, mixing, mastering", 
    rating: 3.8, 
    reviews: 634 },

  { image: "/images/course5.png", 
    tag: "Painting", 
    title: "Art & Drawing", 
    description: "Easy-to-follow video & guides show you how to draw animals & people.", 
    rating: 4.7, 
    reviews: 34 },

  { image: "/images/course6.png", 
    tag: "UI/UX", 
    title: "Basic Fundamentals", 
    description: "This guide will help you develop a systematic approach user interface.", 
    rating: 5, 
    reviews: 12 },
];

const getTagColor = (tag) => {
  switch (tag) {
    case "SEO":
      return "text-green-500 bg-green-100";
    case "UI/UX":
      return "text-red-500 bg-red-100";
    case "Web":
      return "text-indigo-500 bg-indigo-100";
    case "Music":
      return "text-cyan-500 bg-cyan-100";
    case "Painting":
      return "text-amber-500 bg-amber-100";
    default:
      return "text-gray-500 bg-gray-100";
  }
};

export default function eCommerce() {
  return (
    <div className="p-1 bg-gray-100 min-h-screen flex justify-center">
      {/* Bacgkround Container */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">My Courses</h2>
            <p className="text-gray-500">Total 6 courses you have purchased</p>
          </div>
          <select className="p-2 border rounded text-gray-600 bg-gray-50 px-10">
            <option>All Courses</option>
          </select>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} course={{ ...course, tagColor: getTagColor(course.tag) }} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
