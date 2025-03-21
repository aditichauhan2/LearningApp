export default function CourseCard({ course }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Course Image */}
        <img 
          src={course.image} 
          alt={course.title} 
          className="rounded-lg w-full h-48 object-cover mb-4"
        />
  
        {/* Tag & Rating*/}
        <div className="flex justify-between items-center">
          <span className={`text-xs font-medium px-2 py-1 rounded ${course.tagColor}`}>
          {course.tag}
          </span>

        {/* Ratings*/}
            <div className="flex items-center text-yellow-500">
              <span className="text-base font-medium">{course.rating}</span> 
              <i className="bx bxs-star text-lg ml-1"></i> 
              <span className="text-gray-400 text-sm ml-1">({course.reviews})</span> 
            </div>
        </div>
  
        {/* Course Title & Description */}
        <h3 className="text-lg font-semibold mt-2">{course.title}</h3>
        <p className="text-gray-500 text-sm">{course.description}</p>
  
        {/* Buttons */}
        <div className="mt-4 flex justify-between">
          <button className="text-gray-500 bg-gray-100 px-7 py-2 rounded flex items-center leading-none">
            <i className="bx bx-rotate-right text-lg mr-2 align-middle"/>Start Over</button>
          <button className="text-indigo-500 bg-indigo-100 px-7 py-1 rounded flex items-center leading-none">
            Continue<i className="bx bx-chevron-right text-lg ml-2 align-middle"/></button>
        </div>
      </div>
    );
  }
  