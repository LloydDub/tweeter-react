import React from "react"; //optional
import Tweet from "./Tweet"; //optional
function TweetList() {
  return (
    <main className="container">
      <section className="tweets">
        <Tweet />
        <Tweet />
      </section>
    </main>
  );
}

export default TweetList;
