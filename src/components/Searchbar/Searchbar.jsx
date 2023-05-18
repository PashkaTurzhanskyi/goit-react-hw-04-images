import React from 'react';
import { useState } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleInputChange = e => setValue(e.target.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') alert('Please enter a search query!');
    else onSubmit(value);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
};

// export class Searchbar extends React.Component {
//   state = {
//     value: '',
//   };

//   handleInputChange = e => {
//     this.setState({ value: e.target.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.value.trim() === '') {
//       alert('Please enter a search query!');
//     } else {
//       this.props.onSubmit(this.state.value);
//       // this.setState({ value: '' });
//     }
//   };

//   render() {
//     return (
//       <header className={css.Searchbar}>
//         <form className={css.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.SearchFormButton}>
//             <span className={css.SearchFormButtonLabel}>Search</span>
//           </button>

//           <input
//             className={css.SearchFormInput}
//             type="text"
//             value={this.state.value}
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleInputChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
