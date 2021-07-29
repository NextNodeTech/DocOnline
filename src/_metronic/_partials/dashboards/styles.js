import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        '& > *': {
            margin: "1%",
            width: "1200px",
            height: "140px"
        },
    },
    PaperIcons: {
        paddingTop: "15px",
        paddingBottom: "10px",
        fontSize: "8vh",
        display: 'flex',
        margin: 'auto',
        padding: '5px',
        color: '#00C4DB'
    },
    PaperIconsTypo: {
        fontWeight: "bold",
        color: "rgb(34, 47, 62)",
        fontSize: '12px'
    },
    PaperIconsTypo2: {
        color: "rgb(34, 47, 62)",
        paddingTop: "2px",
        fontSize: '12px'
    },
    rootpapers: {
        padding: '10px',
        borderRadius: "23px",
        cursor: "pointer",
        "&:hover": {
            boxShadow: "2px 5px 7px  rgba(0,0,0,0.1)",
            transform: 'scale(1.0)',

        }
    },
    root1: {
        display: 'flex',
        flexWrap: 'wrap',
        minHeight: "12vh",
        justifyContent: "center",
        '& > *': {
            paddingBottom: '12px',
            margin: theme.spacing(3),
            width: "550px",
            minHeight: theme.spacing(20),  //  remove this when content comes//
        },
    },
    //--------------------Root one divs --------------------------//
    /////////div (1) has avatar

    divsec: {
        marginLeft: '5px',
        marginTop: '3vh'
    },

    divthird: {
        float: 'right', marginLeft: '210px',
        marginTop: '3.5vh'
    },
    paperitemsAvatar: {
        margin: theme.spacing(2),
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    ////////////////////////////

    //////////////////////////root one part (b)////////////////////////////////

    paperitemsAvatarsec: {
        margin: theme.spacing(2),
        marginTop: theme.spacing(4),
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    divOneb: {
        width: '50%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    medName: {
        marginTop: '4vh',
        width: '55%',
        marginLeft: '3%',
        color: 'gray'
    },
    divTwob: {
        width: '50%',
        display: 'flex',
        flexWrap: 'wrap',
    },

    Tabcount: {
        width: '30%',
        marginTop: '4vh',
        color: 'green'

    },
    Timecount: {
        width: '40%',
        marginTop: '4vh',
        float: 'right',
        marginLeft: '70px',
        color: 'red'
    },
    Bicons: {
        marginRight: '30px', marginTop: '3.5vh',
    },

    paperitem: {

        display: 'flex',
        flexWrap: 'nowrap',
        flex: 1
    },

    ////////////////////////////////////////////////////////////////////////////////


    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

    /////////////////////////////////root two a ////////////////////////////////////

    root2: {
        minHeight: "12vh",
        justifyContent: "center",
        display: 'flex',
        flexWrap: 'wrap',
        // marginTop: '2.5%',
        '& > *': {
            margin: theme.spacing(3),
            width: "370px",
            minHeight: theme.spacing(34), //  remove this when content comes//
        },
    },

    divOneC: {
        width: '50%',
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '12px',
        marginTop: '2vh',
        '& > *': {
            margin: theme.spacing(0),

        },
    },
    divTwoC: {
        width: '30%',
        display: 'flex',
        float: 'right',
        marginLeft: '12px',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(5),

        },
    },
    //////////////////////////////////////root two part b///////////////

    ArticaldivOne: {
        width: '65%',
        margin: theme.spacing(2)
    },
    ArticaldivTwo: {
        width: '20%',
        marginTop: '3.5vh'

        // margin: theme.spacing(2)

    },
    ArticalTypo: {
        color: 'gray',
        fontSize: "17px",
    },
    OrderTypo: {

    },
    paperitemsAvatarThird: {

    },

    CommunityDiv: {
        width: '100%',
        margin: theme.spacing(1),

    },
    CommunityAvatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),
    },
    AvatarText: {
        marginLeft: '15px',

    },

    //////////////////////////////////////
    root3: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        paddingBottom: "10px",
        '& > *': {
            margin: theme.spacing(3),
            width: "94%",
            height: "33%",   //  remove this when content comes//
        },
    },
    ThirdRootDiv: {
        margin: theme.spacing(2),
    },
    ThirdRootTypo1: {
        margin: theme.spacing(1),
        color: '#08AAC9',
        fontSize: '30px'

    },
    ThirdRootTypo2: {
        margin: theme.spacing(2),
        color: 'gray',
        fontSize: '20px'
    }


}));