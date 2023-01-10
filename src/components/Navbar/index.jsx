import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt } from 'react-icons/bi';
import './style.css';

function Navbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch('');
  };

  return (
    <nav id="navbar">
      <div className="container">
        <h2>
          <Link to="/">
            <BiCameraMovie />
            Movies
          </Link>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a movie"
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">
            <BiSearchAlt />
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
