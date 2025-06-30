Below is the README with the requested **Deployed Screenshots** section inserted immediately after **Deployment**.

````markdown
# Legal Case Search App ⚖️

A powerful web/mobile application that enables users to search and filter legal case data efficiently. Built with Next.js, AI retrieval augmentation, and Pinecone (or similar vector database) to deliver accurate, fast, and context‑aware case insights.

---

## 📦 Table of Contents

* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Getting Started](#-getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Environment Variables](#environment-variables)
  * [Running Locally](#running-locally)
* [Usage](#-usage)
* [Testing](#-testing)
* [Deployment](#-deployment)
* [Deployed Screenshots](#-deployed-screenshots)
* [Contributing](#-contributing)
* [License](#-license)
* [Contact](#-contact)

---

## 🔍 Features

* **Semantic Case Search** – Use AI‑powered retrieval to search legal texts by relevance, not just keyword matches.
* **Advanced Filters** – Narrow down results by date, jurisdiction, case type, or other custom data fields.
* **Case Summaries** – Read concise AI‑generated summaries of case documents.
* **Detail View** – Explore full case text with highlighted snippets matching your query.
* **Efficient Indexing** – Index legal datasets using Pinecone, Elasticsearch, or similar vector stores.

---

## 💻 Tech Stack

* **Frontend**: Next.js, React, Tailwind CSS (or Chakra/UIKit)
* **Backend**: Node.js + Express or Next.js API Routes
* **AI Retrieval**: LangChain, OpenAI GPT
* **Vector Database**: Pinecone
* **Hosting / Deployment**: Vercel (Frontend) | Vercel Serverless / AWS Lambda (Backend)

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v16+ recommended)
* Yarn or npm
* Pinecone account and index
* OpenAI (or equivalent) API key

### Installation

```bash
git clone https://github.com/onkarshirke/legal-case-search-app.git
cd legal-case-search-app
npm install  # or yarn install
````

### Environment Variables

Create a `.env.local` file at the root:

```dotenv
PINECONE_API_KEY=your-pinecone-api-key
PINECONE_INDEX=your-index-name
VOYAGE_API_KEY=your-openai-api-key
# PORT is ignored on Vercel (automatically assigned)
```

> ❗ **Note:** Do **not** wrap values in quotes—Vercel and `.env` parsers interpret them literally.

### Running Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the app.

---

## 🧠 Usage

1. Navigate to the search bar on the home page.
2. Enter your case query or keywords.
3. Browse through filtered results with summaries and similarity scores.
4. Click any result to open a detailed view with relevant excerpts.

---

## 🧪 Testing

* **Unit tests** with Jest
* **API route tests** with Supertest

```bash
npm test
```

---

## 📦 Deployment

Built to deploy smoothly on **Vercel**:

1. Push your repo to GitHub.
2. Connect to Vercel, set your env vars (as above).
3. Deploy automatically via GitHub integration.

For backend API Routes, serverless functions will handle search queries and indexing logic without extra setup.

---

## 📸 Deployed Screenshots

![Home Screen](https://github.com/onkarshirke/legal-case-search-app/blob/main/public/legala.png?raw=true)
![Search Results](https://github.com/onkarshirke/legal-case-search-app/blob/main/public/legalb.png?raw=true)
![Filters Panel](https://github.com/onkarshirke/legal-case-search-app/blob/main/public/legalc.png?raw=true)
![Case Detail View](https://github.com/onkarshirke/legal-case-search-app/blob/main/public/legald.png?raw=true)
![Summary View](https://github.com/onkarshirke/legal-case-search-app/blob/main/public/legale.png?raw=true)

---

## ✨ Contributing

Contributions, ideas, and improvements are welcome!

1. **Fork** the project
2. **Create** a branch (`git checkout -b feature/some-feature`)
3. **Commit** with meaningful messages (`git commit -m 'Add X feature'`)
4. **Push** your branch (`git push origin feature/some-feature`)
5. **Open** a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

**Onkar Shirke**

* GitHub: [onkarshirke](https://github.com/onkarshirke)
* Email: [your-email@example.com](mailto:your-email@example.com)

---
*Developed with ❤️ by Onkar Shirke*
