import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bulma/css/bulma.css";

import Navbar from "./components/Navbar";
import AlbumDetail from "./components/AlbumDetail";
import AlbumsPage from "./components/AlbumsPage";

import axios from 'axios';
const albumUrl = 'http://prototypes.inamoto.co/album_data.json';

class App extends Component {
  constructor () {
    super();
    this.state = {
      albums : [],
      view: 'card',
      isDefault: true
    }
    this.getView = this.getView.bind(this)
  }
  componentDidMount(){
    this.getAlbums(albumUrl)
  }
  getAlbums(url){
    axios.get(url)
    .then(response => response.data)
    .then(data => this.setState({albums: data}))
    .catch(error => console.log(error))
  }
  getView(view){
    if (view === 'card') {
      this.setState({
        view:view,
        isDefault: true
      })
    } else {
      this.setState({
        view:view,
        isDefault: false
      })
    }
  }

  render() {
    const {albums, view, isDefault} = this.state;

    return (
      <div>
        <Navbar />
        <section className="section">
          <div className="container">
            <BrowserRouter>
              <Switch>
                <Route
                  path="/albums/:albumId"
                  render={props => (
                    <AlbumDetail
                      album={
                        albums.filter(
                          album => album.id === props.match.params.albumId
                        )[0]
                      }
                      view={view}
                      isDefault={isDefault}
                      getView={this.getView}
                    />
                  )}
                />
                <Route
                  path="/albums"
                  render={(props) =>
                  <AlbumsPage
                    albums={albums}
                    view={view}
                    isDefault={isDefault}
                    getView={this.getView}
                    />}

                />

                <Route render={() => <Redirect to="/albums" />} />
              </Switch>
            </BrowserRouter>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
