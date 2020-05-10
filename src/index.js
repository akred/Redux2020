import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 3:00PM"
        comment={faker.lorem.words()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="John"
        timeAgo="Yesterday at 6:00PM"
        comment={faker.lorem.words()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="2 days ago at 1:00PM"
        comment={faker.lorem.words()}
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
