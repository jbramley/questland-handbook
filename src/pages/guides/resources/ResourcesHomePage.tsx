import * as React from 'react';
import { Divider, Paper } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentPaper: {
      background: '#303030'
    }
  })
);

export const ResourcesHomePage = () => {
  const classes = useStyles();
  /*
  TODO add a right side panel for larger screens to help with navigation
  */

  return (
    <Paper className={classes.contentPaper}>
      <h1>Questland Resources Overview</h1>
      <h2>Understanding the different types of resources and how they work</h2>
      {/* image here would be great */}
      <Divider />
      <h2>Primary Currencies</h2>
      <h3>Eternium</h3>
      <p>
        This is the core currency needed to upgrade gear levels. It is easily
        acquired by collecting Idle Rewards. Completing campaign sections will
        increase amount collected.
      </p>
      <h3>Gold</h3>
      <p>
        Gold is the main currency for upgrading your orb's level from 1 to 100
        and will also be primarily gathered from idle rewards.
      </p>
      <h3>Gems</h3>
      <p>
        These are a premium currency that can only be gotten in bulk from
        spending money. Make sure you spend your gems wisely.
      </p>
      <Divider />
      <h2>Secondary Currencies</h2>
      <h3>Arena Tickets</h3>
      <p>This ticket lets you participate in an arena battle.</p>
      <h3>Energy</h3>
      <p>
        Energy is currently only used to run the campaign so early on in the
        game you will need more of it and later on it will just build up. You
        can also get 10 free energy per day by clicking on the + icon.
      </p>
      <h3>Stews</h3>
      <p>
        Stews will give you an additional 12 energy and can be purchased with
        barrels from the Trade Shop.
      </p>
      <h3>Loot Tokens</h3>
      <p>
        These tokens let you collect 10 runs of loot from a single campaign
        level that you have previously completed with 3 stars. These are
        typically used to farm either purple materials for orbs or rare
        essences.
        <br />
        For loot tokens a popular trick is to run a level 9 times on energy and
        then use a loot token so you can get level loot 19 times instead of 10.
      </p>
      <h3>Scrolls</h3>
      <p>
        Scrolls are either for Collection 1 or Collection 2 and will simply
        raise the power of a collection slot when used. Originally they are also
        used to unlock a slot which is much more important than leveling a slot.
        Leveling a slot has 3 phases and in each phase a scroll be comes less
        effective.
        <br />
        <br />
        75% -> 190% 1 scroll is an average of 1% increase.
        <br />
        190% -> 220% is a .6% increase.
        <br />
        220% -> 250% is a .2% increase.
      </p>
      <h3>Reforge Powder</h3>
      <p>
        Reforge Powder is used to reforge your gear and grant it extra stats.
        Even though it seems like you get a decent amount of reforge powder you
        should save it for your end game gear.
      </p>
      <h3>Extract Tools</h3>
      <p>
        Extract's primary purpose is to help you build up more copies of a piece
        of gear that you already own with the goal of making artifact gear for
        your build. Since the extract option is limited to once per month and
        items are pretty expensive make sure you use these wisely.
      </p>
      <h3>Divide Tokens</h3>
      <p>
        These come in a lesser and a superior form. Typically you will only ever
        want to use the superior ones. These tokens are used to break down gear
        you have put resources into (eternium, reforge powder, and empowering
        stones). You will only get a percentage of the resources you put in back
        so make sure to only invest large amounts of resources in gear you will
        be using for a while. The lesser divide tokens with give you 80% of your
        resources back while the superior tokens will give you 95%. It is
        recommended to focus on dividing old gear so you can use the resources
        on your new more powerful gear.
      </p>
      <h3>Empowering Stones</h3>
      <p>
        These work exclusively with artifact gear to assist in awakening an
        item. You can only awaken an artifact once at each level and since
        artifacts have 4 levels this means you can awaken each piece of your
        gear for an increasingly more expensive amount of empowering stones.
      </p>
      <h3>Essences</h3>
      <p>
        Essences are the primary currency for enhancing your orbs to make them
        even more powerful. This currency comes in four types (common, rare,
        epic, legendary) each of which have a stronger effect on raising your
        power
      </p>
      <Divider />
      <h2>Shop Currencies</h2>
      <h3>Barrels</h3>
      <p>
        Barrels are collected from voyages and can only be used in the barrel
        shop.
      </p>
      <h3>Stamp</h3>
      <p>
        Stamps are collected from the daily boss fights and completing your
        daily quests and are only used in the stamp shop.
      </p>
      <h3>Guild Coins</h3>
      <p>
        Guild coins can be collected by donating to your guild and as rewards
        from Battle Events that your guild leader will distribute. These can
        also only be spent in the guild shop.
      </p>
    </Paper>
  );
};
