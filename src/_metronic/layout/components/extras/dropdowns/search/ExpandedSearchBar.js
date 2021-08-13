import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  search: {
    display: "flex",
    // position: "relative",
    // borderRadius: theme.shape.borderRadius,
    // paddigRight: '50%',
    // width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   marginLeft: theme.spacing(1),
    //   width: "auto",
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    maxWidth: '600px',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function ExpandedSearchBar() {
  const classes = useStyles();

  return (
    <div className={ classes.search }>
      <div className={ classes.searchIcon }>
        <SearchIcon style={ { color: '#3699FF' } } />
      </div>
      <InputBase
        placeholder='Search…'
        classes={ {
          root: classes.inputRoot,
          input: classes.inputInput,
        } }
        inputProps={ { "aria-label": "search" } }
      />
    </div>

  );
}
