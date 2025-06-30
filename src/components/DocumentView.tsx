import { useEffect, useRef } from 'react';
import { sanitizeString } from '@/lib/utils';

interface DocumentViewProps {
  document: {
    metadata: {
      title: string;
      plaintiff: string;
      defendant: string;
      date: string;
      topic: string;
      outcome: string;
      pageContent: string;
    };
    content: string;
  };
  quote: string;
  onBack: () => void;
}

export default function DocumentView({ document, quote, onBack }: DocumentViewProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const highlight = contentRef.current.querySelector('.highlight');
      if (highlight) {
        highlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [quote]);

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <div className="p-4 bg-gray-900 shadow-md fixed w-full z-10">
        <button onClick={onBack} className="text-cyan-500 hover:underline">&larr; Back to search</button>
        <h1 className="text-2xl font-bold text-orange-400 mt-2">{document.metadata.title}</h1>
        <div className="mt-1">
          <span className="font-semibold text-orange-400">Topic:</span> <span className="text-white">{document.metadata.topic}</span>
        </div>
        <div className="mt-1">
          <span className="font-semibold text-orange-400">Verdict:</span> <span className="text-white">{document.metadata.outcome}</span>
        </div>
        <div className="mt-1">
          <span className="font-semibold text-orange-400">Year:</span> <span className="text-white">{new Date(document.metadata.date).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="mt-24 p-4 overflow-auto flex-1 text-white" style={{ paddingTop: '120px' }} ref={contentRef}>
        <div dangerouslySetInnerHTML={{ __html: sanitizeString(document.metadata.pageContent) }} />
      </div>
    </div>
  );
}
