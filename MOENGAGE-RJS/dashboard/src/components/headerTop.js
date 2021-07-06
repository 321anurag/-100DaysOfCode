import React from "react";

class HeaderTop extends React.Component {
  render() {
    return (
      <div>
        <h1 className="page-title">
          ABC College of engineering
          <a
            className="float-right btn btn-primary btn-lg"
            href="http://13.232.99.42/postman/assignment.postman_collection.json"
            download
          >
            Download Postman Collection
          </a>
        </h1>
      </div>
    );
  }
}

export default HeaderTop;
