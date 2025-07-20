const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:-translate-y-1">
      <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <div className="text-4xl mb-2"></div>
          <div className="text-sm">Event {news.id}</div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-800 hover:text-blue-600 transition-colors">
          {news.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-3">{news.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">News #{news.id}</span>
          <button className="text-xs text-blue-600 font-medium hover:text-blue-800 transition-colors">
            Read more →
          </button>
        </div>
      </div>
    </div>
  );
};