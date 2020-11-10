import { useState } from 'react';

const Search  = (props) => {
  // state = {
  //   query: '',
  // };

  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
    // this.setState({ query: e.target.value });
  };

  const handlSubmit = e => {
    e.preventDefault();

    if(query !== "") {
    props.searchMovie(query)
    // this.setState({ query:''})
    setQuery('')
  } else {
    alert('query est vide')
  }
  }


    return (
      <form class="form-inline" onSubmit={handlSubmit}>
        <div class="md-form my-0">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={handleChange}

          />
        </div>
      </form>
    );
}

export default Search;
