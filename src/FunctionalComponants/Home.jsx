import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";

export default function Home(props) {
  var [articles, setarticles] = useState([]);
  var [totalResults, settoalResults] = useState([0]);
  var [page, setpage] = useState(1);

  const getAPIData = async () => {
    var response = "";

    if (props.search)
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${props.search}&page=1&pageSize=20&language=${props.language}&apiKey=3c3326bc8cdb4965a4c46fdea960dec3`
      );
    else
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${props.q}&page=1&pageSize=20&language=${props.language}&apiKey=3c3326bc8cdb4965a4c46fdea960dec3`
      );
    var result = await response.json();
    // console.log(result);
    setarticles(result.articles);
    settoalResults(result.totalResults);
  };
  const fetchMoreData = async () => {
    setpage(page + 1);
    var response = "";

    if (props.search)
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${props.search}&page=${page}&pageSize=20&language=${props.language}&apiKey=3c3326bc8cdb4965a4c46fdea960dec3`
      );
    else
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${props.q}&page=${page}&page=1&pageSize=20&language=${props.language}&apiKey=3c3326bc8cdb4965a4c46fdea960dec3`
      );
    var result = await response.json();
    setarticles(articles.concat(result.articles));
  };
  useEffect(() => {
    getAPIData();
  }, [props]);

  return (
    <>
      <div className="container-fluid mt-1">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={
            <div className="my-5 text-center">
              <div className="spinner-border text-center" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="row">
            <h5 className=" background text-light text-center m-3">
              {props.q} News Section{" "}
            </h5>
            {articles.map((item, index) => {
              return (
                <NewsItem
                  key={index}
                  pics={item.urlToImage}
                  title={item.title}
                  description={item.description}
                  source={item.source.name}
                  date={item.publishedAt}
                  url={item.url}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
