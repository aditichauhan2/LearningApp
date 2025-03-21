export default function Pagination() {
    return (
      <div className="flex justify-center space-x-2 mt-6">
        <button className="px-3 py-1 border rounded">&laquo;</button>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <button key={num} className={`px-3 py-1 border rounded ${num === 3 ? "bg-indigo-500 text-white" : ""}`}>
            {num}
          </button>
        ))}
        <button className="px-3 py-1 border rounded">&raquo;</button>
      </div>
    );
  }
  