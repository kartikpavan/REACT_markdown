import React from 'react';
import ReactMarkdown from 'react-markdown';
function App() {
  const [markdown, setMarkdown] = React.useState('');

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <article className="result">
          <h1> MarkDown Preview</h1>
          <hr />
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
