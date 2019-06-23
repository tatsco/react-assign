import React, { Component } from "react";

class AlbumPopularity extends Component {
  render() {
    const { popularity } = this.props;
    const starRating = Math.round(popularity/100 * 5);
    const maxStars = 5;

    const solidStar = <span>&#9733;</span>;
    const outlinedStar = <span>&#9734;</span>;

    let starArray = [];

    for (let i = 0; i < starRating; i++) {
      starArray.push(solidStar)
    }
    for (let i = 0; i < maxStars - starRating; i++) {
      starArray.push(outlinedStar)
    }

   return starArray;
  }
}

export default AlbumPopularity;

