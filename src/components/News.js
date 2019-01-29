import React, { Component } from "react";

class News extends Component {
  render() {
    return (
      <div>
      <div class="jumbotron">
  <h1 class="display-3">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
  </p>
</div>
      <div class="card border-danger mb-3">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Danger card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
    );
  }
}
export default News;