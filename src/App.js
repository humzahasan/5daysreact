import React from 'react';
import './App.css';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
  answer: {
    fontSize: 25,
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className='App'>
      <h1>
        The 5-Days React Javascript Challenge
        <span role='img' aria-label='fire'>
          🔥
        </span>
      </h1>
      <h3>
        Team CP{' '}
        <span role='img' aria-label='rocket'>
          🚀
        </span>
      </h3>
      <hr />
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            Why you want to join this challenge?
          </Typography>

          <Typography variant='body2' className={classes.answer} component='p'>
            I consider myself an intermediate in JS! Taking this challenge will
            help me push myself over the boundry of that intermediate JS to
            Intermediate in Reactjs.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            3 things more important than money?
          </Typography>

          <Typography variant='body2' className={classes.answer} component='p'>
            <ul>
              <li>Peace Of Mind</li>
              <li>Family Presence</li>
              <li>Acing my passion</li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            What can making money as JS Developer help you achieve in your life?
          </Typography>

          <Typography variant='body2' className={classes.answer} component='p'>
            Well it's not just about the money, i have taught for free for 3
            months to a group of young frontend enthusiast. I love teaching and
            the money will definetly help me achieve more.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            Full Time vs Freelancer ?
          </Typography>

          <Typography variant='body2' className={classes.answer} component='p'>
            Proud to be part of one of the top 10 company in Fortune 500 List.
            So hell yes to Full Time, but will definetly consider Freelance as
            side hustle.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            Why Reactjs is for me?
          </Typography>

          <Typography variant='body2' className={classes.answer} component='p'>
            No Fancy words here, just beecause I LOVE IT!!! Also because its
            ducking amazing
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            What have i done with React till date?
          </Typography>

          <Typography variant='body2' className={classes.answer} component='p'>
            <ul>
              <li>Covid Tracker</li>
              <li>Messenger Clone</li>
              <li>Instagram Clone</li>
              <li>Working on Whatsapp Clone</li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
      <Card></Card>
    </div>
  );
}

export default App;
