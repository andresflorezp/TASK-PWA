import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: "95%",
  },
  media: {
    height: 140,
  },
});

export default function CardTask(props) {
  const classes = useStyles();

  return (
    <>
    <br/><br/>
    <Card style={{marginLeft:"2%"}} className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageS}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.date} {props.state}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.assign}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    <br/>

    </>
  );
}
