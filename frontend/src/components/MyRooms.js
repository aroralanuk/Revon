import React, { Component } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
// import CreateRoomPage from "./CreateRoomPage";
// import MusicPlayer from "./MusicPlayer";
import Axios from 'axios'
import {useState,useEffect} from 'react';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     height: 140,
//     width: 100
//   },
//   control: {
//     padding: theme.spacing(2)
//   }
// }));

export default function MyRooms() {
  const [rooms, setRooms] = useState([])
  useEffect(() => {
    fetchRooms();
  }, [])
  useEffect(() => {
    console.log(rooms)
  }, [rooms])
  const fetchRooms=async()=>{
    const response=await Axios("/api/my-rooms");
    setRooms(response.data)    
  }
  return (
    <Grid container className="MyRooms">
      {
        rooms && rooms.map(room=>{
          return(
            <Grid item align="center" xs={8}>
              <Typography component="h5" variant="h5">
                {room.code}
              </Typography>
              <Typography color="textSecondary" variant="subtitle1">
                {room.host}
              </Typography>
            </Grid>
          )

        })
      }
    </Grid>

  );
}

//   authenticateSpotify() {
//     fetch("/spotify/is-authenticated")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ spotifyAuthenticated: data.status });
//         console.log(data.status);
//         if (!data.status) {
//           fetch("/spotify/get-auth-url")
//             .then((response) => response.json())
//             .then((data) => {
//               window.location.replace(data.url);
//             });
//         }
//       });
//   }


// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

// export default function MyRooms() {
//   const [spacing, setSpacing] = React.useState(2);
//   const classes = useStyles();

//   const handleChange = (event) => {
//     setSpacing(Number(event.target.value));
//   };

//   return (
//     <Grid container className={classes.root} spacing={2}>
//       <Grid item xs={12}>
//         <Grid container justify="center" spacing={spacing}>
//           {[0, 1, 2, 3, 4, 5, 6].map((value) => (
//             <Grid key={value} item>
//               <Paper className={classes.paper} />
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }
