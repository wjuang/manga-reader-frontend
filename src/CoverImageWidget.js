import React, { Component } from "react";

class CoverImageWidget extends Component {
  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_cloudName,
        uploadPreset: process.env.REACT_APP_uploadPreset,
        // apiKey: 379466524187146
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info)
          this.props.setCover(result.info.url)
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button id="upload_widget" className="cloudinary-button">
        Upload Cover
      </button>
    );
  }
}

export default CoverImageWidget;
