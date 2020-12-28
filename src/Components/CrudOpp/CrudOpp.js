import React, { useEffect, useState } from 'react'
import { app } from "../Firebase/Firebase"
import "./CrudOpp.css"
import paxxx from "../Img/dd.jpeg"
import { v4 as uuidv4 } from "uuid"
import InfoIcon from '@material-ui/icons/Info';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';

function CrudOpp() {

  const db = app.firestore()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mProj, setmProj] = useState("")
  const [proj, setProj] = useState("")
  const [dduration, setDduration] = useState("")
  const [fileUrl, setFileUrl] = useState(null)
  const [upload, setUpload] = useState([])

  const uploadImage = async (e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL())

  }

  const uploadData = async () => {
    await db.collection("project_store_manage")
      .doc()
      .set({
        date: Date.now(),
        name,
        email,
        projectField: mProj,
        project: proj,
        duration: dduration,
        avatar: await fileUrl,
        id: uuidv4(),
      })
  }

  const onDelete = async (id) => {
    if (window.confirm("Are you sure you want to do this?")) {
      await db.collection("project_store_manage")
        .doc(id).delete();
    }
    console.log(id);
  };

  const editData = async (id) => {
    const newPosition = prompt()
    await db.collection("project_store_manage")
      .doc(id)
      .update({ project: newPosition })
  }



  // const getData = async () => {
  //   await db.collection("project_store_manage")
  //     .onSnapshot((snap) => {
  //       const item = []
  //       snap.forEach(doc => {
  //         item.push(doc.data())
  //       })
  //       setUpload(item)
  //     })
  // }

  console.log(upload);


  useEffect(() => {
    const db = app.firestore()
    const getData = async () => {
      await db.collection("project_store_manage")
        .orderBy("date", "desc")
        .onSnapshot((snap) => {
          const item = []
          snap.forEach(doc => {
            item.push({ ...doc.data(), id: doc.id })
          })
          setUpload(item)
        })
    }
    getData()
  }, [])


  return (
    // <>
    //   <div className="parentDiv">
    //     <div className="subParentDiv">
    //       <input placeholder="What is your name" type="text" onChange={(e) => { setName(e.target.value) }} />
    //       <input placeholder="Enter your email" type="email" onChange={(e) => { setEmail(e.target.value) }} />
    //       <input type="file" onChange={uploadImage} />
    //       <input placeholder="Your job" type="text" onChange={(e) => { setJob(e.target.value) }} />
    //       <button onClick={uploadData}>Upload</button>
    //     </div>
    //   </div>

    //   {
    //     upload.map(({ name, avatar, email, id, job }) => (
    //       <div key={id}
    //         style={{
    //           border: "solid 1px",
    //           width: "400px",
    //           marginTop: "40px"
    //         }}>
    //         {/* <img src={avatar} alt={name}
    //           style={{
    //             height: "200px",
    //             width: "200px",
    //             objectFit: "cover"
    //           }} /> */}
    //         <img src={avatar} alt=""
    //           style={{
    //             height: "200px",
    //             width: "200px",
    //             objectFit: "cover"
    //           }} />
    //         <h5>{name}</h5>
    //         <p>{email}</p>
    //         {/* <p>{id}</p> */}
    //         <p>{job}</p>
    //         <div onClick={() => { onDelete(id) }}>⚔️</div>
    //         <div onClick={() => { editData(id) }}>📜</div>
    //       </div>
    //     ))
    //   }

    // </>


    <>
      <div className="parentDiv" >
        <div className="subParentDiv1">

          <div className="headerDiv">
            <div className="disProject">
              <p>All Projects</p>
              <input placeholder="What is your name" type="text" onChange={(e) => { setName(e.target.value) }} className="inputsss" />
              <input placeholder="Enter your email" type="email" onChange={(e) => { setEmail(e.target.value) }} className="inputsss" />
              <input placeholder="Project Field" type="text" onChange={(e) => { setmProj(e.target.value) }} className="inputsss" />
              <input placeholder="Your Project" type="text" onChange={(e) => { setProj(e.target.value) }} className="inputsss" />
              <input placeholder="Duration" type="text" onChange={(e) => { setDduration(e.target.value) }} className="inputsss" />
              <input type="file" onChange={uploadImage} style={{
                marginTop: "12px",
              }} />
              <button className="button" onClick={uploadData} >+ New Project</button>
            </div>
            <InfoIcon className="about" style={{
              marginTop: "45px",
              width: "40px",
              // backgroundColor: "green",
              marginRight: "40px"
            }} />
          </div>
        </div>

        {
          upload.map(({ name, avatar, email, id, projectField, project, duration }) => (
            <div key={id} >
              <div className="subParentDiv2" >
                <div className="insideSubParentDiv">
                  <div className="cardDiv">
                    <div className="subClassDiv">
                      <div style={{ display: "flex", }}>
                        <p className="firstProjectField">{projectField}</p>
                        <ClearIcon onClick={() => { onDelete(id) }} style={{ marginTop: "10px", marginLeft: "10px" }} />
                      </div>

                      <img src={avatar} alt="" className="imageee" />
                      <p className="firstName">{name}</p>
                      <p className="firstContact">{email}</p>
                      <div style={{ display: "flex", }}>
                        <p className="firstProject">{project}</p>
                        <EditIcon onClick={() => { editData(id) }} />
                      </div>
                      <p className="firstDuration">{duration}</p>
                    </div>
                  </div>



                </div>

              </div>

            </div>
          ))
        }


      </div>

    </>

  )
}

export default CrudOpp
