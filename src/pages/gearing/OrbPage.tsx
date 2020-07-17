import * as React from 'react';
import { Paper } from '@material-ui/core';

export const OrbPage = () => (
  <Paper>
    <h1>Orbs</h1>
    <p>
      Orbs are a special item that can be socketed into one of your equipped
      pieces of gear for additional bonuses. Like pieces of gear, there are
      Rare, Epic, and Legendary versions. Orbs have 3 different types: Health,
      Attack & Magic, and Defense. Each orb also has a particular strength
      associated with it called potential which determines the total power as
      you level it up and enhance its quality. It’s the same idea as with gear.
      An orb with potential 67 won’t provide as much hero power as an orb with
      potential 74.
    </p>

    <h3>Orb Level</h3>
    <p>
      Orbs take gold to level to 100, but if you replace the orb there’s no way
      to recover the gold spent leveling it. Level orbs evenly until you get
      them to 100 if you’re short on gold and decide if an orb is going to be
      used for a long time before you spend on them.
    </p>

    <h3>Orb Quality</h3>
    <p>
      Wait to upgrade orb quality, called enhancing, until you have legendary
      orbs with decent potential and working orb bonuses from linking them with
      your gear. Raising an orb's quality very quickly gets more expensive with
      each level you upgrade it to. However, it can quickly provide some
      powerful bonuses but remember that gold spent on upgrading orbs isn’t
      refundable.
      <br />
      <br />
      When enhancing, pick orbs to:
      <ul>
        <li>
          Support your chosen gear, since gear’s more difficult to replace.
        </li>
        <li>
          Link easily – by using attack & defense orbs for gear links, you’ll be
          able to replace the health orbs with newly released and more powerful
          orbs more easily without breaking the link bonuses.
        </li>
        <li>
          Enhance equally. The cost of a single level of enhancement doubles
          each time. Instead of having one orb at +4, you could have two +3
          orbs.
        </li>
        <li>
          Upgrade those orbs with a gear link bonus first and then upgrade
          attack and defense orbs to get the most value from your upgrades.
        </li>
        <li>
          Stay at the player consensus soft cap of +6 upgrades for orbs.
          Technically, the maximum quality level is 10, but it is too expensive
          for the cost so most players agree that stopping at +6 is a good cost
          to performance ratio.
        </li>
      </ul>
    </p>

    <h3>Calculating Orb Bonus</h3>
    <p>
      The formula for calculating an orb's bonus is as follows:
      <br />
      <br />
      Note: Each level of enhancement brings a 5% bonus to both the base and
      potential of an orb.
      <br />
      Base orb stat + (base orb stat * enhancement percentage) + (potential +
      (potential * enhancement percentage)) * level of orb -1
      <br />
      <br />
      Example: Hope Reborn Orb (potential 62) at a +7 enhancement at level 100
      <br />
      192 + (192 * .35) + (62 + (62 * .35)) * 99 = 8545.5
    </p>

    <h3>Orb equips and leveling</h3>
    <p>
      As a rule of thumb level up and increase potential evenly across all orbs.
      Ensure that every piece of gear you equip is benefiting from the orb
      bonus, and keep in mind that attack + magic orbs will provide the biggest
      boost to your overall power.
    </p>

    <h3>Optimizing your orb bonuses</h3>
    <p>
      Based on your gearing priority you typically want to activate an orb bonus
      using a defense orb. This is because defense is the worst stat on orbs so
      as you get new better orbs you want to upgrade your health and
      attack/magic orbs instead of the defense orbs. Based on the same logic, if
      you need to choose between health and attack/magic, you would choose
      health because attack/magic is the most valuable.
      <br />
      <br />
      NOTE: This logic is about future proofing your upgrades. If you are
      interested in maximum hero power you might be able to do better by
      maximizing your equipped orb potential, but I don't recommend it.
    </p>
  </Paper>
);
