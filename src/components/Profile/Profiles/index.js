import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import CardData from "./card.json"

const useStyles = makeStyles({
  header: {
    color: 'white',
    textAlign: 'center',
    padding: 20,
    textDecoration: 'underline'
  },
  root: {
    margin: 50,
    height: 250,
    maxWidth: 345,
  },
  media: {
    height: 100,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  return (
    <>
    <h3 className={classes.header}>Profiles</h3>
    <Grid container spacing={2} justifyContent="center">
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
          <Typography gutterBottom variant="h5" component="h2">
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
      </CardActions>
    </Card>
    </Grid>
    )})
    }</Grid>
    </>
  );
}