import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CropDinIcon from "@material-ui/icons/CropDin";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import RemoveIcon from "@material-ui/icons/Remove";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CloseIcon from "@material-ui/icons/Close";
import ColorizeIcon from "@material-ui/icons/Colorize";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { DropzoneArea } from "material-ui-dropzone";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";

const frequencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const medicions = [
  {
    value: "Select Diagnosis",
    label: "Panadol",
  },
  {
    value: "Select Diagnosis",
    label: "Solocip",
  },
  {
    value: "Select Diagnosis",
    label: "scyleain",
  },
  {
    value: "Select Diagnosis",
    label: "Calpol",
  },
];

const currencies = [
  {
    value: "Select Diagnosis",
    label: "12",
  },
  {
    value: "Select Diagnosis",
    label: "21",
  },
  {
    value: "Select Diagnosis",
    label: "32",
  },
  {
    value: "Select Diagnosis",
    label: "78",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
  BtnDiv: {
    paddingBottom: theme.spacing(4),
    "& > *": {
      margin: theme.spacing(1),
      backgroundColor: "#DDDDDD",
    },
  },
  headDiv: {
    backgroundColor: "lightgrey",
    "& > *": {
      // margin: 'auto',
      justifyContent: "center",
      textAlign: "center",
    },
  },
  FlowSheetDiv: {
    marginTop: "0px",
    border: "1px solid lightgray ",
    width: "33.33%",
    "& > *": {
      margin: theme.spacing(1.0),
      marginTop: "8px",
    },
  },
  dense: {
    marginTop: theme.spacing(0.8),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(0.2),
    marginRight: theme.spacing(0.2),
    // width: 200,
  },
  ThirdBtnDiv: {
    paddingBottom: theme.spacing(2),
    "& > *": {
      margin: theme.spacing(1),
      justifyContent: "flex-end",
      backgroundColor: "#DDDDDD",
      color: "#000",
    },
  },
  button: {
    // float: 'right',
    margin: theme.spacing(1),
    color: "#46C191",
  },
  Radiobuttons: {
    marginLeft: "10px",
  },
}));

export function EMR() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [frequency, setFrequency] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR",
  });

  const frequencyChange = (name) => (event) => {
    setFrequency({ ...values, [name]: event.target.value });
  };

  const [medicion, setMedicion] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR",
  });
  const medicionChange = (name) => (event) => {
    setMedicion({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <Paper style={{ display: "flex" }}>
        {/* ///////////Avatar start ////////// */}
        <div style={{ display: "flex", width: "30%" }}>
          <div className='d-flex align-items-center'>
            <div className='symbol symbol-60 symbol-xxl-100 mr-1 align-self-start align-self-xxl-center'>
              <div className='symbol symbol-60 symbol-xxl-100 mr-1 align-self-start align-self-xxl-center'>
                <div
                  className='symbol-label'
                  style={{
                    backgroundImage: `url(${"/media/users/300_24.jpg"})`,
                  }}
                ></div>
                <i className='symbol-badge bg-success'></i>
              </div>
            </div>
          </div>
          {/* ////////// Avatar end ///////// */}

          {/* /////information start // */}

          <div style={{ align: "left" }}>
            <Typography variant='body2'>
              MR # :<span style={{ color: "red" }}> SZH-302160</span>, Hosp MR #
              :<span style={{ color: "red" }}> 730711</span>
            </Typography>

            <Typography variant='body2'>
              Name :<span style={{ color: "#000" }}> Waqas Akram</span>{" "}
              <span style={{ color: "#61B3E1" }}> S/O </span>
              <span style={{ color: "#000" }}>Akram Mirza</span>
            </Typography>

            <Typography variant='body2'>
              Age :<span style={{ color: "#000" }}> 21</span> year(s), D.O.B :
              <span style={{ color: "#000" }}> 24/04/1998 </span>
            </Typography>

            <Typography variant='body2'>
              Gender :<span style={{ color: "#000" }}> Male</span>
            </Typography>

            <Typography variant='body2'>
              Patient Type :<span style={{ color: "#000" }}> Public</span>
            </Typography>
          </div>

          {/* ////information end //// */}
        </div>
        {/* ////papers starts //// */}
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "70%" }}
        >
          <Paper
            style={{
              width: "30%",
              height: "100%",
              border: "1px solid #C0BBC4",
              marginLeft: "5px",
            }}
          >
            <div style={{ align: "left", padding: "5px" }}>
              <Typography variant='body2'>CARDIO-THROCIC /CPO</Typography>

              <Typography variant='body2'>
                <span style={{ color: "blue" }}> Mr. OPD (Consultant)</span>
              </Typography>
            </div>
          </Paper>

          <Paper
            style={{
              width: "30%",
              height: "100%",
              border: "1px solid #C0BBC4",
              marginLeft: "5px",
            }}
          >
            <div style={{ align: "left", paddingLeft: "10px" }}>
              <Typography variant='body2'>
                Temp(<span>&#8457;</span>)
              </Typography>
              <Typography variant='body2'>Pulse</Typography>
              <Typography variant='body2'>BP:</Typography>
              <Typography variant='body2'>Height:</Typography>
              <Typography variant='body2'>Weight:</Typography>
            </div>
          </Paper>

          <Paper
            style={{
              width: "30%",
              height: "100%",
              border: "1px solid #C0BBC4",
              marginLeft: "5px",
            }}
          >
            <div style={{ align: "left", padding: "5px" }}>
              <Typography variant='body2'>Alerts!!!</Typography>
            </div>
          </Paper>
        </div>
      </Paper>

      {/* //////////appbar///////// */}

      <div style={{ marginTop: "8px" }}>
        <Paper>
          <Button color='primary' style={{ margin: "1px" }}>
            Emr
          </Button>

          <Button color='primary' style={{ margin: "1px" }}>
            History
          </Button>

          <Button color='primary' style={{ margin: "1px" }}>
            Diagrams
          </Button>

          <Button color='primary' style={{ margin: "1px" }}>
            Immunization
          </Button>
          <Button color='primary' style={{ margin: "1px", float: "right" }}>
            Print
          </Button>
          <Button color='primary' style={{ margin: "1px", float: "right" }}>
            Visit History
          </Button>
        </Paper>
      </div>

      {/* BODY STARTS HERE */}
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: "8px", width: "50%", padding: "5px" }}>
          <div>
            <AppBar position='static' style={{ color: "#FFF" }}>
              <Toolbar>
                <OpenInNewIcon style={{ marginRight: "10px" }} />

                <Typography variant='h6' className={classes.title}>
                  Presenting complaints
                </Typography>
                <CropDinIcon />
                <RemoveIcon style={{ marginLeft: "10px" }} />
              </Toolbar>
            </AppBar>
            <Paper>
              <div style={{ paddingTop: "10px" }}>
                <Typography
                  style={{ marginTop: "8px", marginLeft: "10px" }}
                  variant='body1'
                >
                  Chief Complaint
                </Typography>
                <TextField
                  style={{ width: "70%", marginLeft: "10px", marginTop: "5px" }}
                  label=''
                  id='outlined-size-small'
                  defaultValue=''
                  variant='outlined'
                  size='small'
                />
                <div
                  style={{
                    float: "right",
                    marginRight: "20px",
                    marginTop: "5px",
                  }}
                >
                  <Button variant='contained' color='primary'>
                    Save
                  </Button>
                </div>
                <div
                  style={{ marginTop: "8px", marginLeft: "10px" }}
                  className={classes.BtnDiv}
                >
                  <Button
                    variant='outlined'
                    href='#outlined-buttons'
                    style={{ margin: "1px" }}
                  >
                    Backache
                  </Button>

                  <Button
                    variant='outlined'
                    href='#outlined-buttons'
                    style={{ margin: "1px" }}
                  >
                    Burn
                  </Button>

                  <Button
                    variant='outlined'
                    href='#outlined-buttons'
                    style={{ margin: "1px" }}
                  >
                    Abdominal Pain
                  </Button>

                  <Button
                    variant='outlined'
                    href='#outlined-buttons'
                    style={{ margin: "1px" }}
                  >
                    Asthema
                  </Button>

                  <Button
                    variant='outlined'
                    href='#outlined-buttons'
                    style={{ margin: "1px" }}
                  >
                    Dog Bite
                  </Button>
                </div>
              </div>
            </Paper>
          </div>
          {/* //////////////////////// */}
          <div style={{ paddingTop: "10px" }}>
            <AppBar position='static' style={{ color: "#FFF" }}>
              <Toolbar>
                <OpenInNewIcon style={{ marginRight: "10px" }} />

                <Typography variant='h6' className={classes.title}>
                  Flowsheets
                </Typography>
                <CropDinIcon />
                <RemoveIcon style={{ marginLeft: "10px" }} />
              </Toolbar>
            </AppBar>
            <Paper>
              <div style={{ paddingTop: "10px" }}>
                <Typography
                  style={{ marginTop: "8px", marginLeft: "10px" }}
                  variant='body1'
                >
                  - Vitals
                </Typography>
              </div>
              <div style={{ padding: "10px", border: "2px" }}>
                <div className={classes.headDiv}>
                  <Typography>27-06-2021</Typography>
                  <Typography>04:12 PM</Typography>
                </div>
                <div style={{ display: "flex" }}>
                  <div className={classes.FlowSheetDiv}>
                    <Typography>Visit Date Time</Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}></div>
                  <div className={classes.FlowSheetDiv}>
                    <form className={classes.container} noValidate>
                      <TextField
                        id='datetime-local'
                        // label="Date & Time"
                        type='datetime-local'
                        defaultValue='2017-05-24T10:30'
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </form>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className={classes.FlowSheetDiv}>
                    <Typography>
                      Temperature(<span>&#8457;</span>)
                    </Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <Typography style={{ color: "darkblue" }}>
                      {" "}
                      114 (<span>&#8457;</span>)
                    </Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <TextField
                      id='outlined-dense'
                      label='Temprature(F)'
                      className={clsx(classes.textField, classes.dense)}
                      margin='dense'
                      variant='outlined'
                    />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className={classes.FlowSheetDiv}>
                    <Typography>Respiratory Rate</Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <Typography style={{ color: "darkblue" }}>
                      {" "}
                      22 bpm
                    </Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <TextField
                      id='outlined-dense'
                      label='Respiratory Rate'
                      className={clsx(classes.textField, classes.dense)}
                      margin='dense'
                      variant='outlined'
                    />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className={classes.FlowSheetDiv}>
                    <Typography>Pulse Rate</Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <Typography style={{ color: "darkblue" }}> 64</Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <TextField
                      id='outlined-dense'
                      label='Pulse Rate'
                      className={clsx(classes.textField, classes.dense)}
                      margin='dense'
                      variant='outlined'
                    />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className={classes.FlowSheetDiv}>
                    <Typography>Blood Pressure</Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <Typography style={{ color: "darkblue" }}>
                      {" "}
                      120/85 mmHg
                    </Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}></div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className={classes.FlowSheetDiv}>
                    <Typography>O₂ Saturation</Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <Typography style={{ color: "darkblue" }}> 35%</Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <TextField
                      id='outlined-dense'
                      label='O2 saturation (%)'
                      className={clsx(classes.textField, classes.dense)}
                      margin='dense'
                      variant='outlined'
                    />
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div className={classes.FlowSheetDiv}>
                    <Typography>Pain value</Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <Typography style={{ color: "#000" }}> 4</Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <TextField
                      id='outlined-dense'
                      label='Pain value'
                      className={clsx(classes.textField, classes.dense)}
                      margin='dense'
                      variant='outlined'
                    />
                  </div>
                </div>

                {/* ////information end //// */}
                <div style={{ display: "flex" }}>
                  <div className={classes.FlowSheetDiv}>
                    <Typography>Head Circum(cm)</Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <Typography style={{ color: "#000" }}> 100cm</Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <TextField
                      id='outlined-dense'
                      label='Head Circum (cm)'
                      className={clsx(classes.textField, classes.dense)}
                      margin='dense'
                      variant='outlined'
                    />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className={classes.FlowSheetDiv}>
                    <Typography>Height(cm)</Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <Typography style={{ color: "darkblue" }}>
                      {" "}
                      85 cm
                    </Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <TextField
                      id='outlined-dense'
                      label='Height'
                      className={clsx(classes.textField, classes.dense)}
                      margin='dense'
                      variant='outlined'
                    />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className={classes.FlowSheetDiv}>
                    <Typography>Weight(kg)</Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <Typography style={{ color: "darkblue" }}>
                      {" "}
                      58 kg
                    </Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}>
                    <TextField
                      id='outlined-dense'
                      label='Enter Weight'
                      className={clsx(classes.textField, classes.dense)}
                      margin='dense'
                      variant='outlined'
                    />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className={classes.FlowSheetDiv}>
                    <Typography>BMI Percentile</Typography>
                  </div>
                  <div className={classes.FlowSheetDiv}></div>
                  <div className={classes.FlowSheetDiv}></div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className={classes.FlowSheetDiv}></div>
                  <div className={classes.FlowSheetDiv}></div>
                  <div className={classes.FlowSheetDiv}></div>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <Button
                    variant='contained'
                    color='primary'
                    style={{ marginRight: "10px" }}
                  >
                    Save
                  </Button>
                  <Button variant='contained' style={{ color: "red" }}>
                    Cancel
                  </Button>
                </div>
              </div>
            </Paper>
          </div>
          {/* //////////////////// */}
          <div style={{ paddingTop: "10px" }}>
            <AppBar position='static' style={{ color: "#FFF" }}>
              <Toolbar>
                <OpenInNewIcon style={{ marginRight: "10px" }} />

                <Typography variant='h6' className={classes.title}>
                  Diagnosis
                </Typography>
                <CropDinIcon />
                <RemoveIcon style={{ marginLeft: "10px" }} />
              </Toolbar>
            </AppBar>
            <Paper style={{ padding: "10px" }}>
              <div style={{ paddingTop: "10px" }}>
                <TextField
                  id='outlined-select-currency'
                  select
                  label='Select Diagnosis'
                  className={classes.textField}
                  value={values.currency}
                  onChange={handleChange("currency")}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  margin='normal'
                  variant='outlined'
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <div
                  style={{
                    marginTop: "5px",
                    float: "right",
                    paddingBottom: "5px",
                  }}
                >
                  <Button
                    variant='contained'
                    color='primary'
                    style={{ marginRight: "10px" }}
                  >
                    Save
                  </Button>
                  <Button variant='contained' color='Secondary'>
                    Print
                  </Button>
                </div>
                <Grid
                  container
                  justify={"space-between"}
                  style={{
                    borderBottom: "1px solid gray",
                    paddingBottom: "1px",
                    marginBottom: "5px",
                  }}
                >
                  <Grid item style={{ marginLeft: "10px" }}>
                    <div>
                      <Typography variant='body1'>
                        Classic Cholera{" "}
                        <span style={{ color: "red" }}>A00.0</span>
                      </Typography>
                      <Typography variant='body2' style={{ color: "gray" }}>
                        start : 24/07/2019 04:13:12 PM
                      </Typography>
                    </div>
                    {/* //////////////////////// */}
                  </Grid>
                  <Grid item style={{ marginRight: "5px" }}>
                    <ButtonGroup
                      variant='contained'
                      color='primary'
                      aria-label='contained primary button group'
                    >
                      <Button>Provisional</Button>
                      <Button>Final</Button>
                      <Button>Cancel</Button>
                    </ButtonGroup>{" "}
                  </Grid>
                </Grid>
                <Grid
                  container
                  justify={"space-between"}
                  style={{
                    borderBottom: "1px solid gray",
                    paddingBottom: "1px",
                    marginBottom: "5px",
                  }}
                >
                  <Grid item style={{ marginLeft: "10px" }}>
                    <div>
                      <Typography variant='body1'>
                        infectious &parasitic diseases
                        <span style={{ color: "red" }}>A00.0</span>
                      </Typography>
                      <Typography variant='body2' style={{ color: "gray" }}>
                        start : 24/07/2019 04:13:12 PM
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item style={{ marginRight: "5px" }}>
                    <ButtonGroup
                      variant='contained'
                      color='primary'
                      aria-label='contained primary button group'
                    >
                      <Button>Provisional</Button>
                      <Button>Final</Button>
                      <Button>Cancel</Button>
                    </ButtonGroup>{" "}
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </div>

          {/* ///////////////////////// */}
          <div style={{ paddingTop: "10px" }}>
            <AppBar position='static' style={{ color: "#FFF" }}>
              <Toolbar>
                <OpenInNewIcon style={{ marginRight: "10px" }} />

                <Typography variant='h6' className={classes.title}>
                  Prescription
                </Typography>
                <CropDinIcon />
                <RemoveIcon style={{ marginLeft: "10px" }} />
              </Toolbar>
            </AppBar>
            <Paper style={{ padding: "10px" }}>
              <div style={{ paddingTop: "10px" }}>
                <TextField
                  id='outlined-select-currency'
                  select
                  label='Select Medision'
                  className={classes.textField}
                  value={medicion}
                  onChange={medicionChange}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  margin='normal'
                  variant='outlined'
                >
                  {medicions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <div style={{ display: "flex" }}>
                  <TextField
                    style={{ width: "150px" }}
                    id='outlined-select-currency'
                    select
                    label='Frequency'
                    value={frequency}
                    onChange={frequencyChange}
                    //   helperText="Please select your currency"
                    variant='outlined'
                    size='small'
                  >
                    {frequencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    style={{ width: "70px", marginLeft: "10px" }}
                    label='Now'
                    id='outlined-size-small'
                    defaultValue=''
                    variant='outlined'
                    size='small'
                  ></TextField>
                  <Typography
                    variant='body1'
                    style={{
                      marginLeft: "10px",
                      fontSize: "12px",
                      marginTop: "8px",
                    }}
                  >
                    For
                  </Typography>

                  <TextField
                    style={{ width: "100px", marginLeft: "10px" }}
                    label='Day'
                    id='outlined-size-small'
                    defaultValue=''
                    variant='outlined'
                    size='small'
                  ></TextField>
                </div>
                <div
                  style={{
                    marginTop: "5px",
                    float: "right",
                    paddingBottom: "5px",
                  }}
                >
                  <Button
                    variant='contained'
                    color='primary'
                    style={{ marginRight: "10px" }}
                  >
                    Save
                  </Button>
                  <Button variant='contained' color='Secondary'>
                    Print
                  </Button>
                </div>
                <Grid
                  container
                  justify={"space-between"}
                  style={{
                    borderBottom: "1px solid gray",
                    paddingBottom: "1px",
                    marginBottom: "5px",
                  }}
                >
                  <Grid item style={{ marginLeft: "10px" }}>
                    <div>
                      <Typography variant='body1'>
                        PANADOL <span style={{ color: "red" }}>GSK</span>
                      </Typography>
                      <Typography variant='body2' style={{ color: "gray" }}>
                        start : 24/07/2019 04:13:12 PM
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item style={{ marginRight: "5px" }}>
                    <EditIcon color='secondary' fontSize='small' />

                    <ColorizeIcon color='primary' fontSize='small' />
                    <CloseIcon style={{ color: "red" }} fontSize='small' />
                  </Grid>
                </Grid>
                <Grid
                  container
                  justify={"space-between"}
                  style={{
                    borderBottom: "1px solid gray",
                    paddingBottom: "1px",
                    marginBottom: "5px",
                  }}
                >
                  <Grid item style={{ marginLeft: "10px" }}>
                    <div>
                      <Typography variant='body1'>
                        Co-amoxiclav <span style={{ color: "red" }}>30 ug</span>
                      </Typography>
                      <Typography variant='body2' style={{ color: "gray" }}>
                        start : 24/07/2019 04:13:12 PM
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item style={{ marginRight: "5px" }}>
                    <EditIcon color='secondary' fontSize='small' />

                    <ColorizeIcon color='primary' fontSize='small' />
                    <CloseIcon style={{ color: "red" }} fontSize='small' />
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </div>

          {/* ///////////// */}
          <div style={{ paddingTop: "10px" }}>
            <AppBar position='static' style={{ color: "#FFF" }}>
              <Toolbar>
                <OpenInNewIcon style={{ marginRight: "10px" }} />

                <Typography variant='h6' className={classes.title}>
                  Documents
                </Typography>
                <CropDinIcon />
                <RemoveIcon style={{ marginLeft: "10px" }} />
              </Toolbar>
            </AppBar>
            <Paper style={{ padding: "10px" }}>
              <div style={{ paddingTop: "10px" }}>
                <DropzoneArea
                  onChange={(files) => console.log("Files:", files)}
                />
                <Button
                  variant='contained'
                  // color="secondary"
                  className={classes.button}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload
                </Button>
              </div>
            </Paper>
          </div>
        </div>
        {/* div one end////////// */}
        <div
          style={{
            marginTop: "8px",
            width: "50%",
            marginLeft: "5px",
            paddingRight: "20px",
          }}
        >
          <div style={{ paddingTop: "5px" }}>
            <AppBar position='static' style={{ color: "#FFF" }}>
              <Toolbar>
                <OpenInNewIcon style={{ marginRight: "10px" }} />

                <Typography variant='h6' className={classes.title}>
                  SOAP
                </Typography>
                <CropDinIcon />
                <RemoveIcon style={{ marginLeft: "10px" }} />
              </Toolbar>
            </AppBar>
            <Paper style={{ padding: "10px" }}>
              <div style={{ paddingTop: "10px", display: "flex" }}>
                <Grid container justify={"space-between"}>
                  <Grid item style={{ marginLeft: "10px" }}>
                    <div>
                      <Typography variant='body1'>Subjective</Typography>
                    </div>
                  </Grid>
                  <Grid>
                    <div>
                      <TextareaAutosize
                        style={{ width: "330px", height: "40px" }}
                        maxRows={3}
                        aria-label='maximum height'
                        // placeholder="Maximum 4 rows"
                        defaultValue=''
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div style={{ paddingTop: "10px", display: "flex" }}>
                <Grid container justify={"space-between"}>
                  <Grid item style={{ marginLeft: "10px" }}>
                    <div>
                      <Typography variant='body1'>Objective</Typography>
                    </div>
                  </Grid>
                  <Grid>
                    <div>
                      <TextareaAutosize
                        style={{ width: "330px", height: "40px" }}
                        maxRows={3}
                        aria-label='maximum height'
                        // placeholder="Maximum 4 rows"
                        defaultValue=''
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div style={{ paddingTop: "10px", display: "flex" }}>
                <Grid container justify={"space-between"}>
                  <Grid item style={{ marginLeft: "10px" }}>
                    <div>
                      <Typography variant='body1'>Assessment</Typography>
                    </div>
                  </Grid>
                  <Grid>
                    <div>
                      <TextareaAutosize
                        style={{ width: "330px", height: "40px" }}
                        maxRows={3}
                        aria-label='maximum height'
                        // placeholder="Maximum 4 rows"
                        defaultValue=''
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div style={{ paddingTop: "10px", display: "flex" }}>
                <Grid container justify={"space-between"}>
                  <Grid item style={{ marginLeft: "10px" }}>
                    <div>
                      <Typography variant='body1'>Plan</Typography>
                    </div>
                  </Grid>
                  <Grid>
                    <div>
                      <TextareaAutosize
                        style={{ width: "330px", height: "40px" }}
                        maxRows={3}
                        aria-label='maximum height'
                        // placeholder="Maximum 4 rows"
                        defaultValue=''
                      />
                    </div>
                    <div
                      style={{
                        marginTop: "5px",
                        float: "right",
                        paddingBottom: "5px",
                      }}
                    >
                      <Button variant='contained' color='primary'>
                        Save
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </div>

          {/* ////////right one end///// */}

          <div style={{ paddingTop: "10px" }}>
            <AppBar position='static' style={{ color: "#FFF" }}>
              <Toolbar>
                <OpenInNewIcon style={{ marginRight: "10px" }} />

                <Typography variant='h6' className={classes.title}>
                  Diagnostics
                </Typography>
                <CropDinIcon />
                <RemoveIcon style={{ marginLeft: "10px" }} />
              </Toolbar>
            </AppBar>
            <Paper style={{ padding: "10px" }}>
              <div style={{ paddingTop: "10px", display: "flex" }}>
                <Grid container justify={"space-between"}>
                  <Grid item>
                    <div style={{ marginLeft: "10px" }}>
                      <FormControl component='fieldset'>
                        <FormGroup aria-label='position' row>
                          <FormControlLabel
                            value='end'
                            control={<Checkbox color='primary' />}
                            label='US'
                            labelPlacement='end'
                          />
                          <FormControlLabel
                            value='top'
                            control={<Checkbox color='primary' />}
                            label='HL'
                            //   labelPlacement="top"
                          />
                          <FormControlLabel
                            value='start'
                            control={<Checkbox color='primary' />}
                            label='CT'
                            //   labelPlacement="start"
                          />
                          <FormControlLabel
                            value='bottom'
                            control={<Checkbox color='primary' />}
                            label='XRay'
                            //   labelPlacement="bottom"
                          />
                          <FormControlLabel
                            value='end'
                            control={<Checkbox color='primary' />}
                            label='Echo'
                            labelPlacement='end'
                          />
                        </FormGroup>
                      </FormControl>
                    </div>
                    <div>
                      <TextField
                        style={{ width: "35vw" }}
                        id='outlined-select-currency'
                        select
                        label='Select Test'
                        className={classes.textField}
                        value={values.currency}
                        onChange={handleChange("currency")}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        margin='normal'
                        variant='outlined'
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <div className={classes.Radiobuttons}>
                        <FormControl component='fieldset'>
                          <RadioGroup
                            row
                            aria-label='position'
                            name='position'
                            defaultValue='top'
                          >
                            <FormControlLabel
                              value='start'
                              control={<Radio color='primary' />}
                              label='Routine'
                              // labelPlacement="start"
                            />
                            <FormControlLabel
                              value='bottom'
                              control={<Radio color='primary' />}
                              label='Urgent (Today)'
                              // labelPlacement="bottom"
                            />
                            <FormControlLabel
                              value='end'
                              control={<Radio color='primary' />}
                              label='Start Now'
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                      <TextField
                        style={{ width: "35vw" }}
                        id='outlined-select-currency'
                        // select
                        label='Clinical Info'
                        className={classes.textField}
                        // value={values.currency}
                        // onChange={handleChange('currency')}
                        margin='normal'
                        variant='outlined'
                      ></TextField>
                      <div
                        style={{
                          marginTop: "5px",
                          float: "right",
                          paddingBottom: "5px",
                        }}
                      >
                        <Button variant='contained' color='primary'>
                          Save
                        </Button>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    container
                    justify={"space-between"}
                    style={{
                      borderBottom: "1px solid gray",
                      paddingBottom: "1px",
                      marginBottom: "5px",
                    }}
                  >
                    <Grid item style={{ marginLeft: "10px" }}>
                      <div>
                        <Typography variant='body1'>
                          DOPPLER{" "}
                          <span style={{ color: "red" }}> (CAROTID)</span>
                        </Typography>
                        <Typography variant='body2' style={{ color: "gray" }}>
                          start : 24/07/2019 04:13:12 PM
                        </Typography>
                      </div>
                    </Grid>
                    <Grid>
                      <ButtonGroup
                        variant='contained'
                        color='primary'
                        aria-label='contained primary button group'
                      >
                        <Button>Routine</Button>
                        <Button>Urgent</Button>
                        <Button>Start</Button>
                        <CloseIcon style={{ color: "red", marginTop: "5px" }} />
                      </ButtonGroup>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </div>

          {/* ///////////////////////////// */}

          <div style={{ paddingTop: "10px" }}>
            <AppBar position='static' style={{ color: "#FFF" }}>
              <Toolbar>
                <OpenInNewIcon style={{ marginRight: "10px" }} />

                <Typography variant='h6' className={classes.title}>
                  Lab test
                </Typography>
                <CropDinIcon />
                <RemoveIcon style={{ marginLeft: "10px" }} />
              </Toolbar>
            </AppBar>
            <Paper style={{ padding: "10px" }}>
              <div style={{ paddingTop: "10px", display: "flex" }}>
                <Grid container justify={"space-between"}>
                  <Grid item>
                    <div>
                      <TextField
                        style={{ width: "35vw" }}
                        id='outlined-select-currency'
                        select
                        label='Select Test'
                        className={classes.textField}
                        value={values.currency}
                        onChange={handleChange("currency")}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        margin='normal'
                        variant='outlined'
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <div className={classes.Radiobuttons}>
                        <FormControl component='fieldset'>
                          <RadioGroup
                            row
                            aria-label='position'
                            name='position'
                            defaultValue='top'
                          >
                            <FormControlLabel
                              value='start'
                              control={<Radio color='primary' />}
                              label='Routine'
                              // labelPlacement="start"
                            />
                            <FormControlLabel
                              value='bottom'
                              control={<Radio color='primary' />}
                              label='Urgent (Today)'
                              // labelPlacement="bottom"
                            />
                            <FormControlLabel
                              value='end'
                              control={<Radio color='primary' />}
                              label='Start Now'
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                      <TextField
                        style={{ width: "35vw" }}
                        id='outlined-select-currency'
                        // select
                        label='Clinical Info'
                        className={classes.textField}
                        // value={values.currency}
                        // onChange={handleChange('currency')}
                        margin='normal'
                        variant='outlined'
                      ></TextField>
                      <div
                        style={{
                          marginTop: "5px",
                          float: "right",
                          paddingBottom: "5px",
                        }}
                      >
                        <Button variant='contained' color='primary'>
                          Save
                        </Button>
                      </div>{" "}
                    </div>
                  </Grid>
                  <Grid
                    container
                    justify={"space-between"}
                    style={{
                      borderBottom: "1px solid gray",
                      paddingBottom: "1px",
                      marginBottom: "5px",
                    }}
                  >
                    <Grid item style={{ marginLeft: "10px" }}>
                      <div>
                        <Typography variant='body1'>
                          24 Hours Urinary Magnesium{" "}
                          <span style={{ color: "red" }}>34</span>
                        </Typography>
                        <Typography variant='body2' style={{ color: "gray" }}>
                          start : 24/07/2019 04:13:12 PM
                        </Typography>
                      </div>
                    </Grid>
                    <Grid>
                      <ButtonGroup
                        variant='contained'
                        color='primary'
                        aria-label='contained primary button group'
                      >
                        <Button>Routine</Button>
                        <Button>Urgent</Button>
                        <Button>Start</Button>
                        <CloseIcon style={{ color: "red", marginTop: "5px" }} />
                      </ButtonGroup>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justify={"space-between"}
                    style={{
                      borderBottom: "1px solid gray",
                      paddingBottom: "1px",
                      marginBottom: "5px",
                    }}
                  >
                    <Grid item style={{ marginLeft: "10px" }}>
                      <div>
                        <Typography variant='body1'>
                          24 Hours urinary Cortisol
                        </Typography>
                        <Typography variant='body2' style={{ color: "gray" }}>
                          start : 24/07/2019 04:13:12 PM
                        </Typography>
                      </div>
                    </Grid>
                    <Grid>
                      <ButtonGroup
                        variant='contained'
                        color='primary'
                        aria-label='contained primary button group'
                      >
                        <Button>Routine</Button>
                        <Button>Urgent</Button>
                        <Button>Start</Button>
                        <CloseIcon style={{ color: "red", marginTop: "5px" }} />
                      </ButtonGroup>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </div>

          {/* two second  end/////////// */}
          <div style={{ paddingTop: "10px" }}>
            <AppBar position='static' style={{ color: "#FFF" }}>
              <Toolbar>
                <OpenInNewIcon style={{ marginRight: "10px" }} />

                <Typography variant='h6' className={classes.title}>
                  Referral
                </Typography>
                <CropDinIcon />
                <RemoveIcon style={{ marginLeft: "10px" }} />
              </Toolbar>
            </AppBar>
            <Paper style={{ padding: "10px" }}>
              <div style={{ paddingTop: "10px", display: "flex" }}>
                <Grid container justify={"space-between"}>
                  <Grid item>
                    <div>
                      <TextField
                        style={{ width: "35vw" }}
                        id='outlined-select-currency'
                        select
                        label='BLOOD BANK'
                        className={classes.textField}
                        value={values.currency}
                        onChange={handleChange("currency")}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        margin='normal'
                        variant='outlined'
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <div className={classes.Radiobuttons}>
                        <FormControl component='fieldset'>
                          <RadioGroup
                            row
                            aria-label='position'
                            name='position'
                            defaultValue='top'
                          >
                            <FormControlLabel
                              value='start'
                              control={<Radio color='primary' />}
                              label='Reffered for admission '
                              // labelPlacement="start"
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                      <TextField
                        style={{ width: "35vw" }}
                        id='outlined-select-currency'
                        // select
                        label='Notes'
                        className={classes.textField}
                        // value={values.currency}
                        // onChange={handleChange('currency')}
                        margin='normal'
                        variant='outlined'
                      ></TextField>
                      <div
                        style={{
                          marginTop: "5px",
                          float: "right",
                          paddingBottom: "5px",
                        }}
                      >
                        <Button
                          variant='contained'
                          color='primary'
                          style={{ marginRight: "10px" }}
                        >
                          Save
                        </Button>
                        <Button variant='contained' color='Secondary'>
                          Print
                        </Button>
                      </div>{" "}
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </div>
          {/* ////////last///// */}
          <div style={{ paddingTop: "10px" }}>
            <AppBar position='static' style={{ color: "#FFF" }}>
              <Toolbar>
                <OpenInNewIcon style={{ marginRight: "10px" }} />

                <Typography variant='h6' className={classes.title}>
                  Allergies
                </Typography>
                <CropDinIcon />
                <RemoveIcon style={{ marginLeft: "10px" }} />
              </Toolbar>
            </AppBar>
            <Paper style={{ padding: "10px" }}>
              <div style={{ paddingTop: "10px", display: "flex" }}>
                <Grid container justify={"space-between"}>
                  <Grid
                    item
                    style={{
                      width: "100%",
                      marginLeft: "10px",
                      borderBottom: "1px solid gray",
                    }}
                  >
                    <div>
                      <Typography>Select Allergen</Typography>
                      <FormControl component='fieldset'>
                        <FormGroup aria-label='position' row>
                          <FormControlLabel
                            value='end'
                            control={<Checkbox color='primary' />}
                            label='Drug'
                            labelPlacement='end'
                          />
                          <FormControlLabel
                            value='top'
                            control={<Checkbox color='primary' />}
                            label='Food'
                            //   labelPlacement="top"
                          />
                          <FormControlLabel
                            value='start'
                            control={<Checkbox color='primary' />}
                            label='Enviroment'
                            //   labelPlacement="start"
                          />
                        </FormGroup>
                      </FormControl>
                    </div>
                  </Grid>

                  <Grid
                    item
                    style={{
                      width: "100%",
                      marginLeft: "10px",
                      borderBottom: "1px solid gray",
                    }}
                  >
                    <div>
                      <Typography>Select Reaction</Typography>
                      <FormControl component='fieldset'>
                        <FormGroup aria-label='position' row>
                          <FormControlLabel
                            value='end'
                            control={<Checkbox color='primary' />}
                            label='Very Mild'
                            labelPlacement='end'
                          />
                          <FormControlLabel
                            value='top'
                            control={<Checkbox color='primary' />}
                            label='Mild'
                            //   labelPlacement="top"
                          />
                          <FormControlLabel
                            value='start'
                            control={<Checkbox color='primary' />}
                            label='Moderate'
                            //   labelPlacement="start"
                          />
                          <FormControlLabel
                            value='start'
                            control={<Checkbox color='primary' />}
                            label='Severe'
                            //   labelPlacement="start"
                          />
                        </FormGroup>
                      </FormControl>
                    </div>
                  </Grid>

                  <Grid
                    item
                    style={{
                      width: "100%",
                      marginLeft: "10px",
                      borderBottom: "1px solid gray",
                    }}
                  >
                    <div>
                      <Typography>Onset</Typography>
                      <FormControl component='fieldset'>
                        <FormGroup aria-label='position' row>
                          <FormControlLabel
                            value='end'
                            control={<Checkbox color='primary' />}
                            label='Childhood'
                            labelPlacement='end'
                          />
                          <FormControlLabel
                            value='top'
                            control={<Checkbox color='primary' />}
                            label='Adulthood'
                            //   labelPlacement="top"
                          />
                          <FormControlLabel
                            value='start'
                            control={<Checkbox color='primary' />}
                            label='Unknown'
                            //   labelPlacement="start"
                          />
                        </FormGroup>
                      </FormControl>
                    </div>
                  </Grid>

                  <Grid item style={{ width: "100%", marginLeft: "10px" }}>
                    <div>
                      <form className={classes.container} noValidate>
                        <TextField
                          id='datetime-local'
                          label='Date & Time'
                          type='datetime-local'
                          defaultValue='2017-05-24T10:30'
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </form>
                    </div>
                    <div>
                      <TextField
                        style={{ width: "35vw" }}
                        id='outlined-select-currency'
                        // select
                        label='Comments'
                        className={classes.textField}
                        // value={values.currency}
                        // onChange={handleChange('currency')}
                        margin='normal'
                        variant='outlined'
                      ></TextField>
                    </div>
                    <div
                      style={{
                        marginTop: "5px",
                        float: "right",
                        paddingBottom: "5px",
                      }}
                    >
                      <Button variant='contained' color='primary'>
                        Save
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </>
  );
}
