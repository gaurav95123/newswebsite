import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    return (
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card">
          <img
            src={this.props.pics}
            height="200px"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title ">
              {this.props.title.slice(0, 70) + "..."}
            </h5>
            <h6 className="card-source">
              {this.props.source}-
              {`${new Date(this.props.date).getDate()}/${new Date(
                this.props.date
              ).getMonth()}/${new Date(this.props.date).getFullYear()}`}
            </h6>
            <p className="card-text">
              {this.props.description.slice(0, 200) + "..."}
            </p>
            <a
              href={this.props.url}
              className="btn background text-light w-100 btn-sm "
            >
              Read full article
            </a>
          </div>
        </div>
      </div>
    );
  }
}
