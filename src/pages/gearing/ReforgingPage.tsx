import * as React from 'react';
import {Paper} from '@material-ui/core';
import ReactPlayer from "react-player";

export const ReforgingPage = () => (
    <Paper>
        <h1>Reforging</h1>
        <ReactPlayer url={'https://youtu.be/X6mw_F6u-4E'}/>
        <p>
            Reforging is one of the last steps in gearing your hero. Wait to reforge until you have planned out your
            build and know the pieces of gear you are going to wear for a long time. You don't want to waste resources
            by dividing too often because it's hard to collect enough reforge powder.
        </p>
        <br/>
        <p>
            Reforge powder is precious and you’ll need about several million powder to fully reforge.
        </p>
        <br/>
        <p>
            Note: any reforge points applied will be affected by gear link bonuses so concentrate your reforge points on
            that stat for maximum impact.
        </p>
        <br/>
        <p>
            We’ll go over the basics of reforging and then move into theory.
        </p>
        <br/>
        <p>
            Reforging works with a points system and it’s based on half the potential of a piece of gear, rounded up,
            per level.
        </p>
        <br/>
        <p>
            On the Pax, for example, the potential is 186 and the reforge points are 93.
        </p>
        <br/>
        <img src='/pax.PNG' alt={'pax'}/>
        <p>
            For every level, past the first, there are 93 reforge points. To calculate the total reforge points, you’ll
            need to take half the potential times the level of the gear minus 1 because the first level doesn’t have any
            points.
        </p>
        <br/>
        <p>
            In the forge, there are 2 options – normal paid for with gold and super which is paid for with gems. The
            difference is that the gem option provides a higher reforge point result possibility.
        </p>
        <br/>
        <p>
            Both options using the reforge X100 button will use 1000 reforge powder.
        </p>
        <br/>
        <p>
            With the normal reforge, you’ll have a chance to get up to 100-200 reforge points. If you use gems, you’ll
            have a chance to get up to 200, 300, or 400 reforge points.
        </p>
        <br/>
        <p>
            The next step is to decide which reforge offers to accept. If you’re new and don’t have a final build yet,
            it might be better to wait to reforge once you have a complete set. You can also accept every offer for any
            stat if you don’t have a lot.
        </p>
        <br/>
        <p>
            Players who are looking to optimize their builds can accept only specific offers to maximize 1-2 stats. If
            you’re only interested in increasing health, you’d cancel the reforge offer for any stat but health.
            Warning: not accepting the reforge offer will still spend the reforge powder.
        </p>
        <br/>
        <p>
            Dividing the gear will get 95% of the reforge powder back with use of a blue divide token and 80% with the
            lesser divide tokens.
        </p>
        <br/>
        <p>
            For advanced players, the current meta tends to be attack and health builds so there are a lot of reforges
            for attack and health. The popular ratios are: 60% attack to 40% health, 50% attack to 50% health, or 40%
            attack to 60% health.
        </p>
        <br/>
        <p>
            The gear bonus also applies to the reforge – so if a 30% gear bonus is active, it will also include the
            additional reforge points. Weapons tend to be reforged entirely with health which could allow the rest of
            the gear to be reforged with a 50/50 split.
        </p>
    </Paper>
);
