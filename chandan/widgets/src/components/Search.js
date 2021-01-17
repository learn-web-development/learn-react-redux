import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        }
      })
      setResults(data.query.search);
    }
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    }
  }, [term]);

  const renderedResults = results.map(result => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            { result.title }
          </div>
          <div className="description">
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          </div>
        </div>
      </div>
    )
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search</label>
          <input value={term} onChange={ e => setTerm(e.target.value) } type="text"></input>
        </div>
      </div>
      <div className="ui relaxed divided list">
        { renderedResults }
      </div>
    </div>
  )
}

export default Search;
