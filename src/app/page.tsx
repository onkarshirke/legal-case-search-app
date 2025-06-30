"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import SearchForm from "@/components/SearchForm";
import DocumentView from "@/components/DocumentView";
import { type Document } from "./types/document";
import { sanitizeString } from "@/lib/utils";

interface SearchResult {
  metadata: Document["metadata"];
  content: string;
}

const runBootstrapProcedure = async () => {
  const response = await fetch("/api/bootstrap", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const body = await response.json();
    console.log(body);
    throw new Error(`API request failed with status ${response.status}`);
  }
};

const checkAndBootstrapIndex = async (
  setIsBootstrapping: (isBootstrapping: boolean) => void,
  setIsIndexReady: (isIndexReady: boolean) => void
) => {
  setIsBootstrapping(true);
  await runBootstrapProcedure();
  setIsBootstrapping(false);
  setIsIndexReady(true);
};

const handleSearch = async (
  query: string,
  setResults: (results: SearchResult[]) => void,
  setIsSearching: (isSearching: boolean) => void
) => {
  setIsSearching(true);
  const response = await fetch("/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    const body = await response.json();
    console.log(body);
    throw new Error(`API request failed with status ${response.status}`);
  }

  const { results } = await response.json();
  setResults(results);
  setIsSearching(false);
};

const suggestedSearches = [
  "Cases about violation of fundamental rights in India",
  "Cases involving the Indian Prime Minister or President",
  "Cases involving arms act or gun-related crimes in India",
  "Cases where Indira Gandhi was a party to the case",
  "How much power does Article 21 give to Indian citizens?",
  "Cases about personal liberty or government overreach?",
  "Cases involving right to legal aid under Indian law",
  "Cases about the right against self-incrimination in India",
  "Landmark cases that shaped Indian free speech laws",
  "Cases where accused was found with illegal firearm",
  "What cases involved misuse of state powers in India?",
  "Cases where Supreme Court expressed serious concerns",
];

export default function Home() {
  const [isBootstrapping, setIsBootstrapping] = useState(false);
  const [isIndexReady, setIsIndexReady] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<SearchResult | null>(
    null
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    checkAndBootstrapIndex(setIsBootstrapping, setIsIndexReady);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    // Check scroll position on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const clearResults = () => {
    setQuery("");
    setResults([]);
  };

  if (selectedDocument) {
    return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <DocumentView
          document={selectedDocument}
          quote={selectedDocument.metadata.pageContent}
          onBack={() => setSelectedDocument(null)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Full width fixed container for logo and brand name with scroll background */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-gray-900 bg-opacity-90 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="flex items-center space-x-2 p-3 max-w-7xl mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-cyan-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18m9-9H3"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l3 3 3-3"
            />
          </svg>
          <span className="text-3xl font-semibold text-cyan-500">
            Legalintent
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 py-12">
        <div className="flex flex-col items-center w-full mb-8">
          {isBootstrapping && (
            <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600">Parsing  legal documents....</p>
              <div className="spinner border-4 border-t-transparent border-indigo-600 rounded-full w-5 h-5 animate-spin"></div>
            </div>
          )}
        </div>

        {isIndexReady && !isBootstrapping && (
          <div className="w-full">
            <h1 className="text-5xl font-bold text-center text-orange-300 -mt-4 mb-3">
              Legal Case Exploration
            </h1>
            <p className="text-center text-white/80 text-xl -mt-2 mb-8">
              Leverage natural language to navigate legal cases and precedents
            </p>

            <div className="max-w-3xl mx-auto mb-12">
              <SearchForm
                suggestedSearches={suggestedSearches}
                onSearch={(query: string) => {
                  handleSearch(query, setResults, setIsSearching);
                  setQuery(query);
                }}
              />
            </div>

            {isSearching && (
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-gray-600">Searching documents...</p>
                  <div className="spinner border-3 border-t-transparent border-indigo-600 rounded-full w-4 h-4 animate-spin"></div>
                </div>
              </div>
            )}

            {results.length > 0 && query && (
              <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-700">
                  Found {results.length} result{results.length > 1 ? "s" : ""}{" "}
                  for{" "}
                  <span className="font-semibold text-blue-800">
                    {`"${query}"`}
                  </span>
                </p>
                <button
                  onClick={clearResults}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Clear results"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result, index) => (
                <Card
                  key={index}
                  className="bg-blue-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedDocument(result)}
                >
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-3 text-gray-900">
                      {result.metadata.title}
                    </h2>
                    <blockquote className="relative p-4 mb-4 bg-blue-100 rounded-lg">
                      <p className="text-gray-700 line-clamp-4 italic">
                        {sanitizeString(result.metadata.pageContent)}
                      </p>
                    </blockquote>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900 w-20">
                          Topic:
                        </span>
                        <span className="truncate">
                          {result.metadata.topic}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900 w-20">
                          Verdict:
                        </span>
                        <span className="truncate">
                          {result.metadata.outcome}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900 w-20">
                          Date:
                        </span>
                        <span>
                          {new Date(result.metadata.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
