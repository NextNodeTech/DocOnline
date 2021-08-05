import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import ApartmentIcon from "@material-ui/icons/Apartment";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import EmojiNatureIcon from "@material-ui/icons/EmojiNature";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LaunchIcon from "@material-ui/icons/Launch";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import useStyles from "./styles";
import Image1 from "./doctor.jpg";
import Image2 from "./medical.jpg";
import Image3 from "./running_fitness.png";
import Carousel from "./Carousel"

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        {/* <<<<<<<<<<<<<<<grid root >>>>>>>>>>>>>>>>>> */}
        <div className={classes.rootscroll}>
        <Grid style={{paddingLeft: "2vw", justifyContent: "left" }} container className={classes.root}>
          <div className={classes.carousel}>
          <Carousel  show={6.5} >
            <Paper style={{margin: 12, width: "140px", height: "140px"}} elevation={3} className={classes.rootpapers}>
              <AddCircleOutlineIcon className={classes.PaperIcons} />
              <Typography
                style={{padding: 12}}
                variant='body1'
                align='center'
                className={classes.PaperIconsTypo}
              >
                Add readings
              </Typography>
            </Paper>
            <Paper style={{margin: 12, width: "140px", height: "140px"}} elevation={3} className={classes.rootpapers}>
              <FavoriteBorderIcon className={classes.PaperIcons} />
              <Typography
                variant='body1'
                align='center'
                className={classes.PaperIconsTypo}
              >
                100 BPM
              </Typography>
              <Typography
                variant='body1'
                align='center'
                className={classes.PaperIconsTypo2}
              >
                Health
              </Typography>
            </Paper>
            <Paper style={{margin: 12, width: "140px", height: "140px"}} elevation={3} className={classes.rootpapers}>
              <ChildCareIcon className={classes.PaperIcons} />
              <Typography
                variant='body1'
                align='center'
                className={classes.PaperIconsTypo}
              >
                BWeight
              </Typography>
              <Typography
                variant='body1'
                align='center'
                className={classes.PaperIconsTypo2}
              >
                Baby Care
              </Typography>
            </Paper>
            <Paper style={{margin: 12, width: "140px", height: "140px"}} elevation={3} className={classes.rootpapers}>
              <EmojiNatureIcon className={classes.PaperIcons} />
              <Typography
                variant='body1'
                align='center'
                className={classes.PaperIconsTypo}
              >
                1200 KCal
              </Typography>
              <Typography
                variant='body1'
                align='center'
                className={classes.PaperIconsTypo2}
              >
                Natural Food
              </Typography>
            </Paper>
            <Paper style={{margin: 12, width: "140px", height: "140px"}} elevation={3} className={classes.rootpapers}>
              <AttachFileIcon className={classes.PaperIcons} />
              <Typography
                variant='body1'
                align='center'
                className={classes.PaperIconsTypo}
              >
                5 Days
              </Typography>
              <Typography
                variant='body1'
                align='center'
                className={classes.PaperIconsTypo2}
              >
                Diet
              </Typography>
            </Paper>
            <Paper style={{margin: 12, width: "140px", height: "140px"}} elevation={3} className={classes.rootpapers}>
              <ApartmentIcon className={classes.PaperIcons} />
              <Typography
                variant='body1'
                align='center'
                className={classes.PaperIconsTypo}
              >
                Visit 
              </Typography>
              <Typography
                variant='body1'
                align='center'
                className={classes.PaperIconsTypo2}
              >
                Hospital Care
              </Typography>
            </Paper>
            <Paper style={{margin: 12, width: "140px", height: "140px"}} elevation={3} className={classes.rootpapers}>
              <AirportShuttleIcon className={classes.PaperIcons} />
              <Typography
                variant='body1'
                align='center'
                className={classes.PaperIconsTypo}
              >
                5 PM, Today
              </Typography>
              <Typography
                variant='body1'
                align='center'
                className={classes.PaperIconsTypo2}
              >
                Visit
              </Typography>
            </Paper>
            <Paper style={{margin: 12, width: "140px", height: "140px"}} elevation={3} className={classes.rootpapers}>
              <AirportShuttleIcon className={classes.PaperIcons} />
              <Typography
                variant='body1'
                align='center'
                className={classes.PaperIconsTypo}
              >
                5 PM, Today
              </Typography>
              <Typography
                variant='body1'
                align='center'
                className={classes.PaperIconsTypo2}
              >
                Visit
              </Typography>
            </Paper>
            </Carousel>
            </div>
          </Grid>
        </div>

        {/* <<<<<<<<<<<<<<grid root one>>>>>>>>>>>>>>> */}

        {/* <<<<<<<<<<<<<<<<<root1 part (a) >>>>>>>>>>>>>>>>>>> */}

        <Grid container className={classes.root1}>
          <Grid component={Paper} elevation={2}>
            <AppBar position='static' style={{ backgroundColor: "#00C4DB" }}>
              <Toolbar>
                <Typography variant='h6' className={classes.title}>
                  Appointments
                </Typography>
                <IconButton
                  edge='start'
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='menu'
                >
                  <LaunchIcon />
                </IconButton>
              </Toolbar>
            </AppBar>

            {/* ////////   root one inner content (a) ///////// */}

            {/* (1) */}

            <Grid component={Paper} elevation={0} className={classes.paperitem}>
              <div>
                {" "}
                <Avatar
                  alt='Aemy Sharp'
                  src='/static/images/avatar.jpg'
                  className={classes.paperitemsAvatar}
                />
              </div>
              <div className={classes.divsec}>
                <Typography variant='h6' style={{ color: "Black" }}>
                  Doctor Name
                </Typography>
                <Typography style={{ color: "#00C4DB" }}>
                  Dermatologist
                </Typography>
              </div>
              <div className={classes.divthird}>
                <Typography style={{ fontWeight: "bold" }}>
                  Mon, 04:00 AM
                </Typography>
              </div>
            </Grid>

            {/* (2) */}

            <Grid component={Paper} elevation={0} className={classes.paperitem}>
              <div>
                {" "}
                <Avatar
                  alt='Kemy Sharp'
                  src='/static/images/avatar.jpg'
                  className={classes.paperitemsAvatar}
                />
              </div>
              <div className={classes.divsec}>
                <Typography variant='h6' style={{ color: "Black" }}>
                  Doctor Name
                </Typography>
                <Typography style={{ color: "#00C4DB" }}>
                  Dermatologist
                </Typography>
              </div>
              <div className={classes.divthird}>
                <Typography style={{ fontWeight: "bold" }}>
                  Mon, 04:00 AM
                </Typography>
              </div>
            </Grid>

            {/* (3) */}

            <Grid component={Paper} elevation={0} className={classes.paperitem}>
              <div>
                {" "}
                <Avatar
                  alt='Jemy Sharp'
                  src='/static/images/avatar.jpg'
                  className={classes.paperitemsAvatar}
                />
              </div>
              <div className={classes.divsec}>
                <Typography variant='h6' style={{ color: "Black" }}>
                  Doctor Name
                </Typography>
                <Typography style={{ color: "#00C4DB" }}>
                  Dermatologist
                </Typography>
              </div>
              <div className={classes.divthird}>
                <Typography style={{ fontWeight: "bold" }}>
                  Mon, 04:00 AM
                </Typography>
              </div>
            </Grid>
          </Grid>

          {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<root1 part (b) >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

          <Grid component={Paper} elevation={3}>
            <AppBar position='static' style={{ backgroundColor: "#00C4DB" }}>
              <Toolbar>
                <Typography variant='h6' className={classes.title}>
                  Medical Reminder
                </Typography>
                <IconButton
                  edge='start'
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='menu'
                >
                  <LaunchIcon />
                </IconButton>
              </Toolbar>
            </AppBar>

            {/* <<<<<<<<<<<<<<<root 1 part (b) content >>>>>>>>>>>>>>>>>> */}

            {/* (1) */}

            <Grid component={Paper} elevation={0} className={classes.paperitem}>
              <div className={classes.divOneb}>
                <Avatar
                  alt='Nemy Sharp'
                  src='/static/images/medicine.jpg'
                  className={classes.paperitemsAvatarsec}
                />
                <Typography
                  variant='h6'
                  className={classes.medName}
                  style={{ color: "black" }}
                >
                  Rosuvastatin (20mg){" "}
                </Typography>
              </div>
              <div className={classes.divTwob}>
                <Typography className={classes.Tabcount}>1 Tablet</Typography>
                <Typography className={classes.Timecount}>08:00 AM</Typography>
              </div>
              <div>
                <CloseIcon
                  className={classes.Bicons}
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: "100px",
                  }}
                />
              </div>
            </Grid>

            {/* (2) */}
            <Grid component={Paper} elevation={0} className={classes.paperitem}>
              <div className={classes.divOneb}>
                <Avatar
                  alt='Bemy Sharp'
                  src='/static/images/medicine.jpg'
                  className={classes.paperitemsAvatarsec}
                />
                <Typography
                  variant='h6'
                  className={classes.medName}
                  style={{ color: "black" }}
                >
                  Augmentin (85mg){" "}
                </Typography>
              </div>
              <div className={classes.divTwob}>
                <Typography className={classes.Tabcount}>2 Tablets</Typography>
                <Typography className={classes.Timecount}>12:00 pM</Typography>
              </div>
              <div>
                <CheckIcon
                  className={classes.Bicons}
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "100px",
                  }}
                />
              </div>
            </Grid>

            {/* (3) */}

            <Grid component={Paper} elevation={0} className={classes.paperitem}>
              <div className={classes.divOneb}>
                <Avatar
                  alt='Remy Sharp'
                  src='/static/images/medicine.jpg'
                  className={classes.paperitemsAvatarsec}
                />
                <Typography
                  variant='h6'
                  className={classes.medName}
                  style={{ color: "black" }}
                >
                  Panadol (50mg){" "}
                </Typography>
              </div>
              <div className={classes.divTwob}>
                <Typography className={classes.Tabcount}>2 Tablets</Typography>
                <Typography className={classes.Timecount}>06:00 PM</Typography>
              </div>
              <div>
                <CheckIcon
                  className={classes.Bicons}
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "100px",
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* <<<<<<<<<<<<<<<<Grid root two >>>>>>>>>>> */}

        {/* ///////////////////// root two a /////////////////////////// */}

        <Grid container className={classes.root2}>
          <Grid component={Paper} elevation={3}>
            <AppBar position='static' style={{ backgroundColor: "#00C4DB" }}>
              <Toolbar>
                <Typography variant='h6' className={classes.title}>
                  Pharmacy
                </Typography>
                <IconButton
                  edge='start'
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='menu'
                >
                  <LaunchIcon />
                </IconButton>
              </Toolbar>
            </AppBar>

            {/* (1) */}
            <Grid component={Paper} elevation={0} className={classes.paperitem}>
              <div className={classes.divOneC}>
                <Typography variant='h6' className={classes.OrderTypo}>
                  ORDER # 1
                </Typography>

                <Typography color='textSecondary'>
                  09/Nov/2020 09:00 am
                </Typography>
              </div>
              <div className={classes.divTwoC}>
                <Typography style={{ color: "#00C4DB" }}>Pending</Typography>
              </div>
              <div>
                <CheckIcon
                  className={classes.Bicons}
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "100px",
                    fontSize: "16px",
                  }}
                />
              </div>
            </Grid>

            {/* (2) */}

            <Grid component={Paper} elevation={0} className={classes.paperitem}>
              <div className={classes.divOneC}>
                <Typography variant='h6' className={classes.OrderTypo}>
                  ORDER # 1
                </Typography>

                <Typography color='textSecondary'>
                  09/Nov/2020 09:00 am
                </Typography>
              </div>
              <div className={classes.divTwoC}>
                <Typography style={{ color: "#00C4DB" }}>Pending</Typography>
              </div>
              <div>
                <CheckIcon
                  className={classes.Bicons}
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "100px",
                    fontSize: "16px",
                  }}
                />
              </div>
            </Grid>

            {/* (3) */}

            <Grid component={Paper} elevation={0} className={classes.paperitem}>
              <div className={classes.divOneC}>
                <Typography variant='h6' className={classes.OrderTypo}>
                  ORDER # 1
                </Typography>

                <Typography color='textSecondary'>
                  09/Nov/2020 09:00 am
                </Typography>
              </div>
              <div className={classes.divTwoC}>
                <Typography style={{ color: "#00C4DB" }}>Pending</Typography>
              </div>
              <div>
                <CheckIcon
                  className={classes.Bicons}
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "100px",
                    fontSize: "16px",
                  }}
                />
              </div>
            </Grid>
          </Grid>
          <Grid component={Paper} elevation={3}>
            <AppBar position='static' style={{ backgroundColor: "#00C4DB" }}>
              <Toolbar>
                <Typography variant='h6' className={classes.title}>
                  Articles
                </Typography>
                <IconButton
                  edge='start'
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='menu'
                >
                  <LaunchIcon />
                </IconButton>
              </Toolbar>
            </AppBar>

            {/* (a) */}
            <Grid component={Paper} elevation={0} className={classes.paperitem}>
              <div className={classes.ArticaldivOne}>
                <Typography variant='body1' className={classes.ArticalTypo}>
                  Una medición es comparar la cantidad desconocida misma
                  magnitud
                </Typography>
              </div>
              <div className={classes.ArticaldivTwo}>
                <img className={classes.articleimg} src={Image1} alt='Article 1' />
              </div>
            </Grid>

            {/* (b) */}

            <Grid component={Paper} elevation={0} className={classes.paperitem}>
              <div className={classes.ArticaldivOne}>
                <Typography variant='body1' className={classes.ArticalTypo}>
                  Una medición es comparar la cantidad desconocida misma
                  magnitud
                </Typography>
              </div>
              <div className={classes.ArticaldivTwo}>
                <img className={classes.articleimg} src={Image2} alt='Article2' />
              </div>
            </Grid>
          </Grid>

          {/* //////////////////////////////////// root two (c)/////////////////// */}
          <Grid component={Paper} elevation={3}>
            <AppBar position='static' style={{ backgroundColor: "#00C4DB" }}>
              <Toolbar>
                <Typography variant='h6' className={classes.title}>
                  Community Forums
                </Typography>
                <IconButton
                  edge='start'
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='menu'
                >
                  <LaunchIcon />
                </IconButton>
              </Toolbar>
            </AppBar>

            {/* (a) */}

            <Grid component={Paper} elevation={0} className={classes.paperitem}>
              <div className={classes.CommunityDiv}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      src='/static/images/avatar.jpg'
                      alt='name'
                      className={classes.CommunityAvatar}
                    />
                  </ListItemAvatar>
                  <ListItemText primary='Name' className={classes.AvatarText} />
                  <ListItemText
                    primary='15 min ago'
                    className={classes.AvatarText}
                  />
                </ListItem>
              </div>
            </Grid>

            {/* (b) */}

            <Grid component={Paper} elevation={0} className={classes.paperitem}>
              <div className={classes.CommunityDiv}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      src='/static/images/avatar.jpg'
                      alt='name'
                      className={classes.CommunityAvatar}
                    />
                  </ListItemAvatar>
                  <ListItemText primary='Name' className={classes.AvatarText} />
                  <ListItemText
                    primary='Jan 7, 2014'
                    className={classes.AvatarText}
                  />
                </ListItem>
              </div>
            </Grid>

            {/* (c) */}

            <Grid component={Paper} elevation={0} className={classes.paperitem}>
              <div className={classes.CommunityDiv}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      src='/static/images/avatar.jpg'
                      alt='name'
                      className={classes.CommunityAvatar}
                    />
                  </ListItemAvatar>
                  <ListItemText primary='Name' className={classes.AvatarText} />
                  <ListItemText
                    primary='30 min ago'
                    className={classes.AvatarText}
                  />
                </ListItem>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* <<<<<<<<<<<<<<<<< Grid root three >>>>>>>>>>>>>>>>> */}

        <Grid container className={classes.root3}>
          <Grid component={Paper} elevation={3}>
            <AppBar position='static' style={{ backgroundColor: "#00C4DB" }}>
              <Toolbar>
                <Typography variant='h6' className={classes.title}>
                  Health Care Tips
                </Typography>
                {/* <Button color="inherit">Login</Button> */}
                <IconButton
                  edge='start'
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='menu'
                >
                  <LaunchIcon />
                </IconButton>
              </Toolbar>
            </AppBar>

            <Grid component={Paper} elevation={0} className={classes.paperitem}>
              <div className={classes.ThirdRootDiv}>
                <div style={{ display: "flex" }}>
                  <div>
                    <Typography variant='h5' className={classes.ThirdRootTypo1}>
                      Tips For Fitness Success{" "}
                    </Typography>
                    <Typography
                      variant='body1'
                      className={classes.ThirdRootTypo2}
                    >
                      1. Eat a healthy diet.
                      <br />
                      2. Consume less salt and sugar.
                      <br />
                      3. Reduce intake of harmful fats. Reduce intake of harmful
                      fats. Reduce intake of harmful fats. Reduce intake of
                      harmful fats. <br />
                      4. Avoid harmful use of alcohol.
                      <br />
                      5. Don't smoke.
                      <br />
                      6. Be active.
                      <br />
                      7. Check your blood pressure regularly.
                      <br />
                      8. Get tested.
                    </Typography>
                  </div>
                  <img
                    style={{
                      width: "400px",
                      float: "right",
                      paddingLeft: "10%",
                    }}
                    src={Image3}
                    alt='Article 1'
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
