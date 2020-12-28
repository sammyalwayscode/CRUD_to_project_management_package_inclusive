import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import HourglassEmptyRoundedIcon from '@material-ui/icons/HourglassEmptyRounded';
import SelectOpp from './SelectOpp';
import ButtonCall from './ButtonCall';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function TextFieldess() {
  const classes = useStyles();

  return (
    <div>
      {/* <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      /> */}
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Input Your Name" />
          </Grid>
        </Grid>
      </div>


      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <ContactMailRoundedIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Your Contact(Email)" />
          </Grid>
        </Grid>
      </div>

      <SelectOpp />

      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountTreeRoundedIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Project" />
          </Grid>
        </Grid>
      </div>


      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <HourglassEmptyRoundedIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Project Duration" />
          </Grid>
        </Grid>
      </div>


      <ButtonCall />

    </div>
  );
}
