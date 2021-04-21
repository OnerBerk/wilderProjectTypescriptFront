import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

import { DisplayMap } from './utils/diplayMap';
import { PostRequest, GetRequest } from './utils/request';

import Wilder from './component/wilder';
import Header from './component/header';

import { Button } from './styles/button/button';
import './App.css';

const App: React.FC = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState<number>(+false);
  const [skills, setSkills] = useState({});

  GetRequest('http://localhost:5000/api/wilders', setData);
  useEffect(() => {
    setSkills([
      { title: 'Html', votes: '8' },
      { title: 'Css', votes: '18' },
      { title: 'Next', votes: '15' },
      { title: 'Typescript', votes: '3' },
    ]);
  }, []);

  const postWilder = async (e: any) => {
    await PostRequest(
      e,
      'http://localhost:5000/api/wilder/create',
      name,
      city,
      skills,
      error,
      setError,
      setLoading,
    );
  };

  return (
    <div className="App">
      <div>
        <Header title="Wilder book" />
        <main className="container">
          <form onSubmit={postWilder}>
            <fieldset>
              <legend> Add a Wilder</legend>
              <label htmlFor="name-input">
                <input
                  id="name-input"
                  type="text"
                  placeholder="Type your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label htmlFor="name-input">
                <input
                  id="city-input"
                  type="text"
                  placeholder="Type your city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>

              <Button loading={!!loading}>
                {loading ? (
                  <Loader
                    type="Circles"
                    color="snow"
                    height={20}
                    width={20}
                    timeout={3000}
                  />
                ) : (
                  'Add'
                )}
              </Button>
            </fieldset>
          </form>
          <div>{error && <p className="error">{error}</p>}</div>
          <section className="card-row">
            {DisplayMap(data, Wilder)}
          </section>
        </main>
        <footer>
          <div className="container">
            <p>&copy; 2020 Wild Code School</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
