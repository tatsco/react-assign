import React, { Component } from "react";
import AlbumCards from "./AlbumCards";
import AlbumTable from "./AlbumTable";

class AlbumsPage extends Component {
  render() {
    // let toggleComponent;
    let { view, getView , isDefault} = this.props;

    // if (view === 'card' && isDefault) {
    //   toggleComponent = <AlbumCards albums={this.props.albums}/>
    // } else if (view === 'table') {
    //   toggleComponent = <AlbumTable albums={this.props.albums}/>
    // }

    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column">
              <h1 className="title is-5">New Albums</h1>
            </div>
            <div className="column">
              <div className="buttons has-addons is-right">
                {/* first button */}
                <span className="button" onClick={()=>{getView('card')}}>
                  <span className="icon is-medium">
                    <i className="fas fa-th fa-1x" />
                  </span>
                </span>
                {/* second button */}
                <span className="button is-selected is-primary" onClick={()=>{getView('table')}}>
                  <span className="icon is-medium">
                    <i className="fas fa-list fa-1x" />
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* {toggleComponent} */}
          {view === 'card' && isDefault ? <AlbumCards albums={this.props.albums}/> : <AlbumTable albums={this.props.albums}/> }
        </div>
      </section>
    );
  }
}

export default AlbumsPage;
