import React from 'react';
import Searchbar from './Searchbar';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
<ImageGalleryItem></ImageGalleryItem>
<Button></Button>
      </section>

    );
  }
}
