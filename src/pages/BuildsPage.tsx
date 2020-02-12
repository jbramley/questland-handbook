import * as React from 'react';
import {
  createStyles,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Paper,
  Theme,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  })
);

export const BuildsPage = () => {
  const classes = useStyles();

  return (
    <Paper>
      <h1>Popular Builds</h1>
      <p>
        This section is dedicated to covering the popular and meta builds in
        Questland and is a great starting place for new players who simply need
        to know a good build to get started.
      </p>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>The Hecatombus</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p>
              This is the defacto go to build for anyone focusing on attack and
              offers and impressive level of healing and damage.
            </p>

            <h4>Weapons</h4>
            <ul>
              <li>Hecatombus</li>
              <li>Azazel Shield</li>
            </ul>

            <h4>Talents</h4>
            <ul>
              <li>BloodLust</li>
              <li>Transcendental Tornado</li>
              <li>Crest Guardian</li>
            </ul>

            <h4>Playstyle</h4>
            <p>
              Hit 1 white or 1 blue to trigger a heal which will add 2 red to
              your board from Hecatombus. Repeat this until you have one or more
              4 red available. Use 4 red which will deal damage and heal you as
              well as trigger a heal and damage boost from Azazel which procs
              the 1 white. Since you heal twice it will trigger Hecatombus twice
              and add 4 red to your board ensuring you will replenish or gain
              red spirits to continue comboing.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>The Turtle</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p>
              This build is the exact opposite of the Hectacombus build and
              focuses on magic damage first. It's referred to as the turtle
              because it regenerates a large amount of armor and some health
              every turn making it extremely difficult to kill.
            </p>

            <h4>Weapons</h4>
            <ul>
              <li>Malachite Truncheon</li>
              <li>Depth of Despair</li>
            </ul>

            <h4>Talents</h4>
            <ul>
              <li>Inner Fire</li>
              <li>Chilling Cold</li>
              <li>Magic Thief</li>
            </ul>

            <h4>Playstyle</h4>
            <p>
              Hit 1 red to trigger a heal which will add 2 blue to your board
              and generate 1 blue intensity. When you have 3 blue intensity
              instead of hitting 1 red switch to 1 white to potentially generate
              4 blue instead of just 2. Once you have one or more 4 blue
              available, Continuously use 4 blue which will generate significant
              armour regen. This will also trigger Depth of Despair to proc 1
              red which will heal you and keep your blue intensity high. Since
              this build doesn't recover a full 4 blue you can go back to
              hitting 1 white if you have 3 intensity or 1 red if you don't to
              recover additional blue spirits.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Ratchet Rush</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p>
              This build is the old attack king build before Hecatombus was
              released. It is ideal for situations where you need to avoid
              healing, but still need a strong damage output.
            </p>

            <h4>Weapons</h4>
            <ul>
              <li>Ratchet Hatchet</li>
              <li>Azazel Shield</li>
            </ul>

            <h4>Talents</h4>
            <ul>
              <li>Inner Fire</li>
              <li>Faerie Flame</li>
              <li>Elevation</li>
            </ul>

            <h4>Playstyle</h4>
            <p>
              This build has a slower start than Hecatombus, but it works by
              spamming 1 blue or 1 white until you have 4 red available. Once
              you have 4 red available spam 4 red as often as possible. When you
              use 4 red you will add 1 red to the board and trigger 1 blue and 1
              white from Ratchet Hachet and Azazels which additionally gives you
              armour and 2 more reds on the board.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>The PAX</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p>
              This build is famous for it's insanely high RNG based damage and
              it's ability to clear almost any level in the campaign when RNG is
              in your favor.
            </p>

            <h4>Weapons</h4>
            <ul>
              <li>The Pax</li>
              <li>Depth of Despair</li>
            </ul>

            <h4>Talents</h4>
            <ul>
              <li>Fist of Frenzy</li>
              <li>Faerie Flame</li>
              <li>Magic Thief</li>
            </ul>

            <h4>Playstyle</h4>
            <p>
              This build is extremely heavy on chance based triggers, but when
              everything triggers it can pull some insane dps, but the healing
              is very unreliable and there is no armor recovery. You open the
              build with spamming 1 white to generate blue spirits until you
              have 4 blue available. Then you spam 4 blue as often as possible
              which will grant you blue intensity and when your blue intensity
              builds up you have a change to trigger 2 red which can heal you
              and grant 1 blue to the board. Since both Pax and Depth of Despair
              are equipped both a 1 white and 1 red will be triggered. 1 red
              will grant you an additional 1 blue to the board. The 1 white will
              grant you 1-2 blue to the board and when your intensity reaches
              level 3 you will also have a high chance at an additional 1 red
              triggering.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
};
