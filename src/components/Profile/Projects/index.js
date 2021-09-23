import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import CardData from "./card.json"

const useStyles = makeStyles({
  header: {
    padding: 20,
    textDecoration: 'underline'
  },
  root: {
    margin: 50,
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  discription: {
    height: 80,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  return (
    <>
    <h3 className={classes.header}>Projects</h3>
    <Grid container spacing={4} justifyContent="space-evenly">
      {
    CardData.map((props) => {
      return (
    <Grid item>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography className={classes.discription}variant="body2" color="textSecondary" component="p">
            {props.discription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton>
      <Link href={props.link} target="_blank">
          <LinkIcon />
          </Link>
      </IconButton>
      <IconButton>
      <Link href={props.github} target="_blank">
          <GitHubIcon />
          </Link>
      </IconButton>
      </CardActions>
    </Card>
    </Grid>
    )})
    }</Grid>
    </>
  );
}