{cards.map((card) => (
  <div
    key={card.id}
    className={`rounded-xl p-4 shadow-md transition-transform ${
      card.favorite
        ? 'bg-gradient-to-br from-[#d8d7f3] to-[#fce6e6] hover:scale-105 hover:shadow-lg'
        : 'bg-white'
    }`}
  >
    <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
    <p className="text-sm text-gray-600">{card.explanation}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {card.tags.map((tag) => (
        <span
          key={tag}
          className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
        >
          #{tag}
        </span>
      ))}
    </div>
  </div>
))}