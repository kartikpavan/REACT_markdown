import React from 'react';

function App() {
  const [markdown, setMarkdown] = React.useState('');

  return (
    <main>
      <section className="markdown">
        <textarea className="input"></textarea>
      </section>
    </main>
  );
}

export default App;
