import React from 'react';
import Searchbar from './Searchbar';
import ImageList from './ImageList';
import { Button } from './Button';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>

      </section>

    );
  }
}
