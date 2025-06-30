import { useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react';

interface SearchFormProps {
  suggestedSearches: string[];
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ suggestedSearches, onSearch }) => {
  const [query, setQuery] = useState<string>("");
  const [suggestions] = useState<string[]>(suggestedSearches);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(true);
  const formRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
    setQuery("");
    setShowSuggestions(false);
  };

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  const handleClear = () => {
    setQuery("");
    setShowSuggestions(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto" ref={formRef}>
      <form onSubmit={handleSubmit} className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          className="w-full px-4 py-2 border border-gray-300 bg-white bg-opacity-90 rounded-lg shadow-sm focus:outline-none"
          placeholder="Search legal docs or view suggestions"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute top-1/2 transform -translate-y-1/2 right-14 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        )}
        <button
          type="submit"
          className={`absolute top-1/2 transform -translate-y-1/2 -right-14 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-violet-700 to-purple-900 text-white rounded-full ${!query ? 'opacity-50 bg-gray-600 cursor-not-allowed' : ''}`}
          disabled={!query}
        >
          ➔
        </button>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute mt-2 w-full bg-gray-900 border border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
            <div className="px-4 py-2 text-pink-500 font-semibold border-b border-gray-600">Popular searches</div>
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-4 py-2 border-b border-gray-600 hover:bg-gray-700 cursor-pointer text-gray-200 last:border-b-0"
                onClick={() => setQuery(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchForm;
