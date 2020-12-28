// import React, { useEffect, useState } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import NameTextFi from './NameTextFi';
// import ContactTextFi from './ContactTextFi';
// import SelectOpp from './SelectOpp';
// import ProjectTextFi from './ProjectTextFi';
// import DurationTextFi from './DurationTextFi';
// import ButtonCall from './ButtonCall';
// import { app } from "../Firebase/Firebase"
// import { v4 as uuidv4 } from "uuid"

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     // border: '2px solid #000',
//     border: "none",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     outline: 'none'
//   },
// }));

// export default function Modalbuto() {
//   const classes = useStyles();
//   // getModalStyle is not a pure function, we roll the style only on the first render
//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   // const body = (
//   //   <div style={modalStyle} className={classes.paper}>
//   //     <h2 id="simple-modal-title">Create a Project</h2>
//   //     <NameTextFi />
//   //     <ContactTextFi />
//   //     <SelectOpp />
//   //     <ProjectTextFi />
//   //     <DurationTextFi />
//   //     <input type="file" style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "40px" }} />
//   //     <ButtonCall />

//   //     {/* <p id="simple-modal-description">
//   //       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//   //     </p> */}
//   //     {/* <Modalbuto /> */}
//   //   </div>
//   // );











//   const db = app.firestore()
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [mProj, setmProj] = useState("")
//   const [proj, setProj] = useState("")
//   const [fileUrl, setFileUrl] = useState(null)
//   const [upload, setUpload] = useState([])
//   const [dduration, setDduration] = useState("")

//   const uploadImage = async (e) => {
//     const file = e.target.files[0]
//     const storageRef = app.storage().ref()
//     const fileRef = storageRef.child(file.name)
//     await fileRef.put(file)
//     setFileUrl(await fileRef.getDownloadURL())

//   }

//   const uploadData = async () => {
//     await db.collection("project_store_manage")
//       .doc()
//       .set({
//         date: Date.now(),
//         name,
//         email,
//         projectField: mProj,
//         project: proj,
//         avatar: await fileUrl,
//         id: uuidv4(),
//         duration: dduration,
//       })
//   }

//   const onDelete = async (id) => {
//     if (window.confirm("Are you sure you want to do this?")) {
//       await db.collection("project_store_manage")
//         .doc(id).delete();
//     }
//     console.log(id);
//   };

//   const editData = async (id) => {
//     const newPosition = prompt()
//     await db.collection("project_store_manage")
//       .doc(id)
//       .update({ job: newPosition })
//   }



//   // const getData = async () => {
//   //   await db.collection("project_store_manage")
//   //     .onSnapshot((snap) => {
//   //       const item = []
//   //       snap.forEach(doc => {
//   //         item.push(doc.data())
//   //       })
//   //       setUpload(item)
//   //     })
//   // }

//   console.log(upload);


//   useEffect(() => {
//     const db = app.firestore()
//     const getData = async () => {
//       await db.collection("project_store_manage")
//         .orderBy("date", "desc")
//         .onSnapshot((snap) => {
//           const item = []
//           snap.forEach(doc => {
//             item.push({ ...doc.data(), id: doc.id })
//           })
//           setUpload(item)
//         })
//     }
//     getData()
//   }, [])

//   const body = (
//     <div style={modalStyle} className={classes.paper}>
//       <h2 id="simple-modal-title">Create a Project</h2>
//       <NameTextFi onChange={(e) => { setName(e.target.value) }} />
//       <ContactTextFi onChange={(e) => { setEmail(e.target.value) }} />
//       <SelectOpp onChange={(e) => { setmProj(e.target.value) }} />
//       <ProjectTextFi onChange={(e) => { setProj(e.target.value) }} />
//       <DurationTextFi onChange={(e) => { setDduration(e.target.value) }} />
//       <input type="file" style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "40px" }} />
//       <ButtonCall onClick={uploadData} />

//       {/* <p id="simple-modal-description">
//         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//       </p> */}
//       {/* <Modalbuto /> */}
//     </div>
//   );













//   return (
//     <div>
//       <button type="button" onClick={handleOpen} style={{
//         backgroundColor: "#2ab56f",
//         height: "40px",
//         width: "120px",
//         outline: "none",
//         border: "none",
//         borderRadius: "5px",
//         marginTop: "8px",
//       }}>+ New Project</button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description">
//         {body}
//       </Modal>

//     </div>
//   );
// }
