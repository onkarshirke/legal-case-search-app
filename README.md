Legal Case Search App ⚖️
A powerful web/mobile application that enables users to search and filter legal case data efficiently. Built with Next.js, AI retrieval augmentation, and Pinecone (or similar vector database) to deliver accurate, fast, and context-aware case insights.

📦 Table of Contents
Features

Tech Stack

Getting Started

Prerequisites

Installation

Environment Variables

Running Locally

Usage

Testing

Deployment

Contributing

License

Contact

🔍 Features
Semantic Case Search – Use AI-powered retrieval to search legal texts by relevance, not just keyword matches.

Advanced Filters – Narrow down results by date, jurisdiction, case type, or other custom data fields.

Case Summaries – Read concise AI-generated summaries of case documents.

Detail View – Explore full case text with highlighted snippets matching your query.

Efficient Indexing – Index legal datasets using Pinecone, Elasticsearch, or similar vector stores.

💻 Tech Stack
Frontend: Next.js, React, Tailwind CSS (or Chakra/UIKit)

Backend: Node.js + Express or Next.js API Routes

AI Retrieval: LangChain, OpenAI GPT

Vector Database: Pinecone

Hosting / Deployment: Vercel (Frontend), Vercel Serverless / AWS Lambda (Backend)

🚀 Getting Started
Prerequisites
Node.js (v16+ recommended)

Yarn or npm

Pinecone account and index

OpenAI (or equivalent) API key

Installation
bash
Copy code
git clone https://github.com/onkarshirke/legal-case-search-app.git
cd legal-case-search-app
npm install  # or yarn install
Environment Variables
Create a .env.local file at the root:

dotenv
Copy code
PINECONE_API_KEY=your-pinecone-api-key
PINECONE_INDEX=your-index-name
VOYAGE_API_KEY=your-openai-api-key
# PORT is ignored on Vercel (automatically assigned)
❗ Note: Do not wrap values in quotes—Vercel and .env parsers interpret them literally.

Running Locally
bash
Copy code
npm run dev
Visit http://localhost:3000 to explore the app.

🧠 Usage
Navigate to the search bar on the home page.

Enter your case query or keywords.

Browse through filtered results with summaries and similarity scores.

Click any result to open detailed case view with relevant excerpts.

🧪 Testing
Unit tests with Jest

API route tests with Supertest

Run all tests:

bash
Copy code
npm test
📦 Deployment
Built to deploy smoothly on Vercel:

Push your repo to GitHub.

Connect to Vercel, set your env vars (as above).

Deploy automatically via GitHub integration.

For backend API Routes, serverless functions will handle search queries and indexing logic without extra setup.

✨ Contributing
Contributions, ideas, and improvements are welcome!
To propose changes:

Fork the project

Create a branch (git checkout -b feature/some-feature)

Commit with meaningful messages (git commit -m 'Add X feature')

Push your branch (git push origin feature/some-feature)

Open a Pull Request

📝 License
This project is licensed under the [MIT License], see the LICENSE file for details.

📬 Contact
Onkar Shirke

GitHub: onkarshirke

Email: your-email@example.com

Developed with ❤️ by Onkar Shirke
