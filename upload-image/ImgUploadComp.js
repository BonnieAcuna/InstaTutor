import React from "react";

export function ImgUpload(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input type="file" id="upload" name={props.name} ref={props.fileRef}></input>
        </div>
    );
  };

  export default ImgUpload;