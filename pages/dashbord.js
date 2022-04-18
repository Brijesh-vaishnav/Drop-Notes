import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react'
import { storage } from './config.js'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import Button from "@mui/material/Button";

const dashbord = () => {
  const [progress, setPreogress] = useState(0);

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFile(file)
  }

  const uploadFile = (file) => {

    if (!file) return;

    const storageRef = ref(storage, `/file/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      )

      setPreogress(prog);

    }, (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(url => <a href='url'>download link</a>)
      })
  }

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h2>Upload your file :</h2>
        <form onSubmit={formHandler}>
          <label For="selectFile" style={{cursor:'pointer'}}><AttachFileIcon /></label>
          <input type='file' id="selectFile" style = {
            {
              display: "none",
              visibility:"none"
            }
          }>
               
          </input>
        
          <Button variant='contained' type='submit'>Upload</Button>
        </form>
        <hr />
        <h3>
          uploading done {progress} %
        </h3>
      </div>

    </div>
  )
}

export default dashbord