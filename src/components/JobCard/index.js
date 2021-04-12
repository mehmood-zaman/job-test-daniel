import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import RoomIcon from "@material-ui/icons/Room";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 420,
    padding: 20,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  companyName: {
    color: "#A9ACA8",
  },
  jobTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
}));

const Tag = styled.div`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  margin: 20px 10px;
  width: 105px;
  display: flex;
  align-items: flex-end;
  padding: 10px;
  margin-left: 0;
`;

const Button = styled.button`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  margin: 1em;
  margin-left: 0;
  padding: 15px 50px;
  border: none;
  font-weight: bold;
  padding: 15px 50px;
  border: 1px solid #929eaa80;
  font-size: 14px;
  border-radius: 3px;
`;

export default function RecipeReviewCard({
  logoURL,
  companyName,
  position,
  location,
  availability,
  salary,
  description,
}) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Card className={classes.root}>
        <Avatar alt="Remy Sharp" src={logoURL} className={classes.large} />
        <div>
          <Typography
            className={classes.companyName}
            display="block"
            gutterBottom
          >
            {companyName}
          </Typography>
          <Typography variant="h5" className={classes.jobTitle} gutterBottom>
            {position}
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Tag primary bgColor="#F3F9FC" color="#5C74EB">
            <RoomIcon />
            <span>{location}</span>
          </Tag>
          <Tag primary bgColor="#F3F9FC" color="#EB5E1A">
            <BusinessCenterIcon style={{ marginRight: 5 }} />{" "}
            <span>{availability}</span>
          </Tag>
          <Tag primary bgColor="#F3F9FC" color="#65A5B3">
            <AttachMoneyIcon /> <span>{salary}</span>
          </Tag>
        </div>
        <Typography variant="subtitle1" gutterBottom>
          {description}
        </Typography>
        <div style={{ display: "flex" }}>
          <Button bgColor="#56B174" color="white">
            <div>APPLY NOW</div>
          </Button>
          <Button bgColor="white">
            <div style={{ display: "flex", alignItems: "center" }}>
              <BookmarkBorderIcon /> <span> SAVE IT</span>
            </div>
          </Button>
        </div>
      </Card>
    </Container>
  );
}
