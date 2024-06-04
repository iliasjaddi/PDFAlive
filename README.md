# ChatWithPDFUsingOpenAIGPT

ChatWithPDFUsingOpenAIGPT is an innovative tool that harnesses the power of OpenAI's GPT (Generative Pre-trained Transformer) to create an AI-powered chat experience within your PDF documents. Built with Next.js 13, Vercel's AI SDK, Langchain, and PineconeDB, this tool offers a seamless and dynamic interaction platform for your PDF content.

## Key Features:

- **OpenAI GPT Integration:** Empower your PDF documents with natural and context-aware conversations using OpenAI's state-of-the-art GPT, providing an intelligent and human-like interaction experience.

- **Next.js 13:** Take advantage of the latest features in Next.js for a fast, responsive, and modern web application, ensuring a smooth user experience.

- **Langchain Integration:** Enable multilingual support and linguistic diversity, allowing users to engage with the PDF content in their preferred language seamlessly.

- **PineconeDB:** Ensure efficient and scalable storage for user interactions and chat history with PineconeDB, offering a robust backend infrastructure.

## Getting Started:

1. **Clone the Repository:**
   ```
   git clone https://github.com/yourkidelias/chatwithpdfusingOpenAIGPT.git
   ```

2. **Install Dependencies:**
   ```
   cd chatwithpdfusingOpenAIGPT
   npm install
   ```

3. **Set up Vercel's AI SDK and PineconeDB Credentials:**
   - Follow the provided documentation to configure Vercel's AI SDK and PineconeDB for your specific use case.

4. **Set up Open AI and PineconeDB API keys and information:**
   - Open .env file and insert your OpenAI API key, your PineconeDB API key and rest of the information required.

5. **Embed PDF and store on PineconeDB:**
   ```
   npm run prepare:data
   ```

6. **Run the Application:**
   ```
   npm run dev
   ```

7. **Open Your Browser:**
   Visit `http://localhost:3000` to experience PDFAlive locally.


## License:

This project is licensed under the [MIT License](LICENSE.md) - see the [LICENSE.md](LICENSE.md) file for details.

