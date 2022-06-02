import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';
import api from './services/';

import Searchbar from './components/Searchbar';
import View from './components/View';
import { toast } from 'react-toastify';

const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;

class App extends Component {
  state = {
    searchQuery: '',
    response: [],
    length: 0,
    status: 'idle',
    showModal: false,
    largeImageUrl: null,
  };

  handleQuery = inputValue => {
    this.setState({ searchQuery: inputValue });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery &&
      this.state.searchQuery.trim() !== ''
    ) {
      this.setState({ status: 'pending' });
      api.resetPage();
      try {
        const data = await api.fetchPictures(this.state.searchQuery);
        if (data.hits.length === 0) {
          toast.error('Sorry! There are no pictures matching your query.');
        }
        this.setState({
          response: data.hits,
          length: data.totalHits,
          status: 'resolved',
        });
      } catch (error) {
        this.setState({ status: 'rejected' });
        console.log(error.message);
        toast.error(`${error.message}`);
      }
    }
  }

  onButtonClickHandler = async () => {
    api.pageIncrement();
    try {
      const data = await api.fetchPictures(this.state.searchQuery);
      this.setState(prevState => {
        return {
          response: [...prevState.response, ...data.hits],
          status: 'resolved',
        };
      });
      scroll.scrollToBottom();
    } catch (error) {
      this.setState({ status: 'rejected' });
      console.log(error.message);
      toast.error(`${error.message}`);
    }
  };

  toggleModal = e => {
    this.setState(prevState => {
      return { showModal: !prevState.showModal };
    });
  };

  getUrl = url => {
    this.setState({ largeImageUrl: url });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleQuery} />
        <View
          response={this.state.response}
          length={this.state.length}
          status={this.state.status}
          showModal={this.state.showModal}
          largeImageUrl={this.state.largeImageUrl}
          toggleModal={this.toggleModal}
          getUrl={this.getUrl}
          onButtonClickHandler={this.onButtonClickHandler}
        ></View>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
