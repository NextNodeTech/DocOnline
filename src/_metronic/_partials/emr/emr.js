import React from "react";
import clsx from 'clsx';
import Paper from "@material-ui/core/Paper";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CropDinIcon from '@material-ui/icons/CropDin';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const currencies = [
    {
        value: 'Select Diagnosis',
        label: '12',
    },
    {
        value: 'Select Diagnosis',
        label: '21',
    },
    {
        value: 'Select Diagnosis',
        label: '32',
    },
    {
        value: 'Select Diagnosis',
        label: '78',
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
        '& > *': {
            margin: theme.spacing(1),
            backgroundColor: '#DDDDDD'
        }
    },
    headDiv: {
        backgroundColor: 'lightgrey',
        '& > *': {
            // margin: 'auto',
            justifyContent: 'center',
            textAlign: 'center',
        }
    },
    FlowSheetDiv: {
        marginTop: "0px",
        border: '1px solid lightgray ',
        width: '33.33%',
        '& > *': {
            margin: theme.spacing(1.0),
            marginTop: '8px'
        }
    },
    dense: {
        marginTop: theme.spacing(0.8),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(0.2),
        marginRight: theme.spacing(0.2),
        // width: 200,
    },
    ThirdBtnDiv: {
        paddingBottom: theme.spacing(4),
        '& > *': {
            margin: theme.spacing(1),
            backgroundColor: '#DDDDDD',
            color: '#fff'
        }
    }
}));

export function EMR() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    return (
        <>
            <Paper style={{ display: 'flex' }} >
                {/* ///////////Avatar start ////////// */}
                <div style={{ display: "flex", width: '30%' }} >
                    <div className="d-flex align-items-center">
                        <div className="symbol symbol-60 symbol-xxl-100 mr-1 align-self-start align-self-xxl-center">
                            <div className="symbol symbol-60 symbol-xxl-100 mr-1 align-self-start align-self-xxl-center">
                                <div style={{ align: "left" }}
                                    className="symbol-label"
                                    style={{ backgroundImage: `url(${"/media/users/300_24.jpg"})` }}
                                ></div>
                                <i className="symbol-badge bg-success"></i>
                            </div>
                        </div>
                    </div>
                    {/* ////////// Avatar end ///////// */}

                    {/* /////information start // */}




                    <div style={{ align: "left" }}>
                        <Typography variant="body2">MR # :
                            <span style={{ color: 'red' }} > SZH-302160</span>, Hosp MR # :
                            <span style={{ color: 'red' }}> 730711</span></Typography>

                        <Typography variant="body2">Name :
                            <span style={{ color: '#000' }} > Waqas Akram</span> <span style={{ color: '#61B3E1' }}> S/O </span>
                            <span style={{ color: '#000' }}>Akram Mirza</span></Typography>

                        <Typography variant="body2">Age :
                            <span style={{ color: '#000' }} > 21</span> year(s), D.O.B :<span style={{ color: '#000' }}> 24/04/1998 </span>
                        </Typography>

                        <Typography variant="body2">Gender :
                            <span style={{ color: '#000' }} > Male</span>
                        </Typography>

                        <Typography variant="body2">Patient Type :
                            <span style={{ color: '#000' }} > Public</span>
                        </Typography>
                    </div>



                    {/* ////information end //// */}
                </div>
                {/* ////papers starts //// */}
                <div style={{ display: 'flex', justifyContent: "flex-end", width: '70%' }}>
                    <Paper style={{ width: "30%", height: "100%", border: '1px solid #C0BBC4', marginLeft: '5px' }} >

                    </Paper>

                    <Paper style={{ width: "30%", height: "100%", border: '1px solid #C0BBC4', marginLeft: '5px' }} >

                    </Paper>

                    <Paper style={{ width: "30%", height: "100%", border: '1px solid #C0BBC4', marginLeft: '5px', }} >

                    </Paper>
                </div>
            </Paper>

            {/* //////////appbar///////// */}

            <div style={{ marginTop: "8px" }}>
                <Paper >

                    <Button color="primary" style={{ margin: '1px' }} >
                        Emr
                    </Button>

                    <Button color="primary" style={{ margin: '1px' }}>
                        History
                    </Button>


                    <Button color="primary" style={{ margin: '1px' }}>
                        Diagrams
                    </Button>


                    <Button color="primary" style={{ margin: '1px' }}>
                        Immunization
                    </Button>
                    <Button color="primary" style={{ margin: '1px', float: "right" }}>
                        Print
                    </Button>
                    <Button color="primary" style={{ margin: '1px', float: "right" }}>
                        Visit History
                    </Button>

                </Paper>
            </div>


            <div>
                <div style={{ marginTop: "8px", width: '50%' }}>
                    <AppBar position="static" style={{ color: "#FFF" }} >
                        <Toolbar>

                            <OpenInNewIcon style={{ marginRight: '10px' }} />

                            <Typography variant="h6" className={classes.title}>
                                Presenting complaints
                            </Typography>
                            < CropDinIcon />
                            <RemoveIcon style={{ marginLeft: '10px' }} />
                        </Toolbar>
                    </AppBar>
                    <Paper>
                        <div style={{ paddingTop: '10px' }} >
                            <Typography style={{ marginTop: '8px', marginLeft: '10px' }} variant="body1">Presenting Complaints</Typography>
                            <TextField style={{ width: "70%", marginLeft: '10px', marginTop: '5px' }}
                                label=""
                                id="outlined-size-small"
                                defaultValue=""
                                variant="outlined"
                                size="small"
                            />
                            <div style={{ float: "right", marginRight: '20px', marginTop: '5px' }}>
                                <Button variant="contained" color="primary" >
                                    Save
                                </Button>
                            </div>
                            <div style={{ marginTop: '8px', marginLeft: '10px' }} className={classes.BtnDiv}  >
                                <Button variant="outlined" href="#outlined-buttons" style={{ margin: '1px' }}>
                                    Backache
                                </Button>

                                <Button variant="outlined" href="#outlined-buttons" style={{ margin: '1px' }}>
                                    Burn
                                </Button>


                                <Button variant="outlined" href="#outlined-buttons" style={{ margin: '1px' }}>
                                    Abdominal Pain
                                </Button>


                                <Button variant="outlined" href="#outlined-buttons" style={{ margin: '1px' }}>
                                    Asthema
                                </Button>

                                <Button variant="outlined" href="#outlined-buttons" style={{ margin: '1px' }}>
                                    Dog Bite
                                </Button>

                            </div>
                        </div>

                    </Paper>
                </div>
                {/* //////////////////////// */}
                <div style={{ marginTop: "8px", width: '50%' }}>
                    <AppBar position="static" style={{ color: "#FFF" }} >
                        <Toolbar>

                            <OpenInNewIcon style={{ marginRight: '10px' }} />

                            <Typography variant="h6" className={classes.title}>
                                Flowsheets
                            </Typography>
                            < CropDinIcon />
                            <RemoveIcon style={{ marginLeft: '10px' }} />
                        </Toolbar>
                    </AppBar>
                    <Paper>
                        <div style={{ paddingTop: '10px' }} >
                            <Typography style={{ marginTop: '8px', marginLeft: '10px' }} variant="body1">- Vitals</Typography>
                        </div>
                        <div>
                            <div className={classes.headDiv}>
                                <Typography>27-06-2021</Typography>
                                <Typography>04:12 PM</Typography>
                            </div>
                            <div style={{ display: 'flex' }} >
                                <div className={classes.FlowSheetDiv}>
                                    <Typography >Visit Date Time</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>

                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <form className={classes.container} noValidate>
                                        <TextField
                                            id="datetime-local"
                                            // label="Date & Time"
                                            type="datetime-local"
                                            defaultValue="2017-05-24T10:30"
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </form>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }} >
                                <div className={classes.FlowSheetDiv}>
                                    <Typography >Temperature(F)</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <Typography style={{ color: 'lightblue' }}>  114 F</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <TextField
                                        id="outlined-dense"
                                        label="Temprature(F)"
                                        className={clsx(classes.textField, classes.dense)}
                                        margin="dense"
                                        variant="outlined"
                                    />

                                </div>
                            </div>

                            <div style={{ display: 'flex' }} >
                                <div className={classes.FlowSheetDiv}>
                                    <Typography >Respiratory Rate</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <Typography style={{ color: 'lightblue' }}>  22 bpm</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <TextField
                                        id="outlined-dense"
                                        label="Respiratory Rate"
                                        className={clsx(classes.textField, classes.dense)}
                                        margin="dense"
                                        variant="outlined"
                                    />

                                </div>
                            </div>

                            <div style={{ display: 'flex' }} >
                                <div className={classes.FlowSheetDiv}>
                                    <Typography >Pulse Rate</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <Typography style={{ color: 'lightblue' }}> 64</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <TextField
                                        id="outlined-dense"
                                        label="Pulse Rate"
                                        className={clsx(classes.textField, classes.dense)}
                                        margin="dense"
                                        variant="outlined"
                                    />

                                </div>
                            </div>

                            <div style={{ display: 'flex' }} >
                                <div className={classes.FlowSheetDiv}>
                                    <Typography >Blood Pressure</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <Typography style={{ color: 'lightblue' }}> 120/85 mmHg</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>


                                </div>
                            </div>

                            <div style={{ display: 'flex' }} >
                                <div className={classes.FlowSheetDiv}>
                                    <Typography >O₂ Saturation</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <Typography style={{ color: 'lightblue' }}> 35%</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <TextField
                                        id="outlined-dense"
                                        label="O2 saturation (%)"
                                        className={clsx(classes.textField, classes.dense)}
                                        margin="dense"
                                        variant="outlined"
                                    />

                                </div>
                            </div>

                            <div style={{ display: 'flex' }} >
                                <div className={classes.FlowSheetDiv}>
                                    <Typography >Pain value</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <Typography style={{ color: '#000' }}> 4</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <TextField
                                        id="outlined-dense"
                                        label="Pain value"
                                        className={clsx(classes.textField, classes.dense)}
                                        margin="dense"
                                        variant="outlined"
                                    />

                                </div>
                            </div>

                            <div style={{ display: 'flex' }} >
                                <div className={classes.FlowSheetDiv}>
                                    <Typography >Head Circum(cm)</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <Typography style={{ color: '#000' }}> 100cm</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <TextField
                                        id="outlined-dense"
                                        label="Head Circum (cm)"
                                        className={clsx(classes.textField, classes.dense)}
                                        margin="dense"
                                        variant="outlined"
                                    />

                                </div>
                            </div>

                            <div style={{ display: 'flex' }} >
                                <div className={classes.FlowSheetDiv}>
                                    <Typography >Height(cm)</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <Typography style={{ color: 'lightblue' }}> 85 cm</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <TextField
                                        id="outlined-dense"
                                        label="Height"
                                        className={clsx(classes.textField, classes.dense)}
                                        margin="dense"
                                        variant="outlined"
                                    />

                                </div>
                            </div>

                            <div style={{ display: 'flex' }} >
                                <div className={classes.FlowSheetDiv}>
                                    <Typography >Weight(kg)</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <Typography style={{ color: 'lightblue' }}>  58 kg</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <TextField
                                        id="outlined-dense"
                                        label="Enter Weight"
                                        className={clsx(classes.textField, classes.dense)}
                                        margin="dense"
                                        variant="outlined"
                                    />

                                </div>
                            </div>

                            <div style={{ display: 'flex' }} >
                                <div className={classes.FlowSheetDiv}>
                                    <Typography >BMI (kg/m)</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                    <Typography style={{ color: 'lightblue' }}> 207.52</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>


                                </div>
                            </div>

                            <div style={{ display: 'flex' }} >
                                <div className={classes.FlowSheetDiv}>
                                    <Typography >BMI Percentile</Typography>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                </div>
                                <div className={classes.FlowSheetDiv}>


                                </div>
                            </div>

                            <div style={{ display: 'flex' }} >
                                <div className={classes.FlowSheetDiv}>
                                </div>
                                <div className={classes.FlowSheetDiv}>
                                </div>
                                <div className={classes.FlowSheetDiv}>


                                </div>
                            </div>
                        </div>

                    </Paper>
                </div>
                {/* //////////////////// */}
                <div style={{ marginTop: "8px", width: '50%' }}>
                    <AppBar position="static" style={{ color: "#FFF" }} >
                        <Toolbar>

                            <OpenInNewIcon style={{ marginRight: '10px' }} />

                            <Typography variant="h6" className={classes.title}>
                                Diagnosis
                            </Typography>
                            < CropDinIcon />
                            <RemoveIcon style={{ marginLeft: '10px' }} />
                        </Toolbar>
                    </AppBar>
                    <Paper>
                        <div style={{ paddingTop: '10px' }} >
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select Diagnosis"
                                className={classes.textField}
                                value={values.currency}
                                onChange={handleChange('currency')}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}

                                margin="normal"
                                variant="outlined"
                            >
                                {currencies.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <div style={{ marginTop: '8px', marginLeft: '10px' }} className={classes.ThirdBtnDiv}  >
                                <Button variant="contained" color="primary" >
                                    Final
                                </Button>

                                <Button variant="contained" color="primary" >
                                    Save
                                </Button>

                            </div>
                        </div>

                    </Paper>
                </div>
            </div>
        </>
    )

}
