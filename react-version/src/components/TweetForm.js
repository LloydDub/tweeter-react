import React from "react"; //optional

function TweetForm() {
  const tweetPlaceholder = "What are you humming about?";

  return (
    <main class="container">
      <section class="newtweet">
        <form method="post" action="/tweets" class="newtweet__form">
          <textarea
            class="form__textarea"
            name="text"
            placeholder={tweetPlaceholder}
          ></textarea>
          <input type="submit" value="Tweet" class="form__input" />
          <span class="form__counter">140</span>
        </form>
      </section>
    </main>
  );
}

export default TweetForm;
