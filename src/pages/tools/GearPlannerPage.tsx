import * as React from 'react';
import {useEffect} from 'react';
import {Item} from "../../domain/item";
import {useSelector} from "../indexes/ItemIndexPage";
import {useDispatch} from "react-redux";
import {loadItems} from "../../store/itemActions";
import {Grid, Typography} from "@material-ui/core";
import {Quality} from "../../domain/quality";
import {ItemSlot} from "../../domain/ItemSlot";
import {ItemSelectorCard} from "./ItemSelectorCard";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Stat} from "../../domain/stat";

function notUndefined<T>(x: T | undefined): x is T {
    return x !== undefined;
}

interface GearTemplate {
    helm?: Item,
    chest?: Item,
    gloves?: Item,
    boots?: Item,
    necklace?: Item,
    ring?: Item,
    talisman?: Item,
    healthCollections: (Item | undefined)[],
    attackCollections: (Item | undefined)[],
    defenseCollections: (Item | undefined)[],
    magicCollections: (Item | undefined)[],
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        itemList: {
            paddingTop: theme.spacing(1),
        }
    })
);

export const GearPlannerPage: React.FC<{}> = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const gridSize = 6;
    const items: Item[] = useSelector(state => state.itemState.items.filter(item => item.quality === Quality.Legendary));
    const [selectedGear, setSelectedGear] = React.useState<GearTemplate>({
        attackCollections: [undefined, undefined, undefined, undefined, undefined],
        defenseCollections: [undefined, undefined, undefined, undefined, undefined],
        healthCollections: [undefined, undefined, undefined, undefined, undefined],
        magicCollections: [undefined, undefined, undefined, undefined, undefined],
    });

    useEffect(() => {
        dispatch(loadItems());
    }, [dispatch]);

    const getItemLinks = (item?: Item) => {
        if (!item) {
            return [];
        } else {
            const itemLinkIds: number[] = [item.itemLink1, item.itemLink2, item.itemLink3].filter(notUndefined);
            return itemLinkIds.map(id => items.find(item => item.id === id)).filter(notUndefined)
        }
    };

    const getEquippedItemIds = () => {
        return [
            selectedGear?.helm?.id,
            selectedGear?.chest?.id,
            selectedGear?.gloves?.id,
            selectedGear?.boots?.id,
            selectedGear?.necklace?.id,
            selectedGear?.ring?.id,
            selectedGear?.talisman?.id,
        ].concat(selectedGear.healthCollections.map(item => item?.id))
            .concat(selectedGear.attackCollections.map(item => item?.id))
            .concat(selectedGear.defenseCollections.map(item => item?.id))
            .concat(selectedGear.magicCollections.map(item => item?.id))
            .filter(notUndefined);
    };

    const arrayUpdater = (items: (Item | undefined)[], index: number, value: Item | undefined) => {
        items[index] = value;
        return items;
    };

    return (
        <>
            <h1>Gear Planner</h1>
            <Typography variant="body1" color="textSecondary" component="p">
                Legendary items available for gear design: {items.length}
            </Typography>
            <h2>Equipment</h2>
            <Grid container spacing={3}>
                <Grid item xs={gridSize}>
                    <ItemSelectorCard
                        title={ItemSlot.Helm.toString()}
                        slotFilter={ItemSlot.Helm}
                        items={items}
                        selectedItem={selectedGear?.helm}
                        setSelectedItem={(item?: Item) => setSelectedGear({...selectedGear, helm: item})}
                        selectedItemLinks={getItemLinks(selectedGear?.helm)}
                        equippedItemIds={getEquippedItemIds()}
                    />
                </Grid>
                <Grid item xs={gridSize}>
                    <ItemSelectorCard
                        title={ItemSlot.Chest.toString()}
                        slotFilter={ItemSlot.Chest}
                        items={items}
                        selectedItem={selectedGear?.chest}
                        setSelectedItem={(item?: Item) => setSelectedGear({...selectedGear, chest: item})}
                        selectedItemLinks={getItemLinks(selectedGear?.chest)}
                        equippedItemIds={getEquippedItemIds()}
                    />
                </Grid>
                <Grid item xs={gridSize}>
                    <ItemSelectorCard
                        title={ItemSlot.Gloves.toString()}
                        slotFilter={ItemSlot.Gloves}
                        items={items}
                        selectedItem={selectedGear?.gloves}
                        setSelectedItem={(item?: Item) => setSelectedGear({...selectedGear, gloves: item})}
                        selectedItemLinks={getItemLinks(selectedGear?.gloves)}
                        equippedItemIds={getEquippedItemIds()}
                    />
                </Grid>
                <Grid item xs={gridSize}>
                    <ItemSelectorCard
                        title={ItemSlot.Boots.toString()}
                        slotFilter={ItemSlot.Boots}
                        items={items}
                        selectedItem={selectedGear?.boots}
                        setSelectedItem={(item?: Item) => setSelectedGear({...selectedGear, boots: item})}
                        selectedItemLinks={getItemLinks(selectedGear?.boots)}
                        equippedItemIds={getEquippedItemIds()}
                    />
                </Grid>
                <Grid item xs={gridSize}>
                    <ItemSelectorCard
                        title={ItemSlot.Necklace.toString()}
                        slotFilter={ItemSlot.Necklace}
                        items={items}
                        selectedItem={selectedGear?.necklace}
                        setSelectedItem={(item?: Item) => setSelectedGear({...selectedGear, necklace: item})}
                        selectedItemLinks={getItemLinks(selectedGear?.necklace)}
                        equippedItemIds={getEquippedItemIds()}
                    />
                </Grid>
                <Grid item xs={gridSize}>
                    <ItemSelectorCard
                        title={ItemSlot.Ring.toString()}
                        slotFilter={ItemSlot.Ring}
                        items={items}
                        selectedItem={selectedGear?.ring}
                        setSelectedItem={(item?: Item) => setSelectedGear({...selectedGear, ring: item})}
                        selectedItemLinks={getItemLinks(selectedGear?.ring)}
                        equippedItemIds={getEquippedItemIds()}
                    />
                </Grid>
                <Grid item xs={gridSize}>
                    <ItemSelectorCard
                        title={ItemSlot.Talisman.toString()}
                        slotFilter={ItemSlot.Talisman}
                        items={items}
                        selectedItem={selectedGear?.talisman}
                        setSelectedItem={(item?: Item) => setSelectedGear({...selectedGear, talisman: item})}
                        selectedItemLinks={getItemLinks(selectedGear?.talisman)}
                        equippedItemIds={getEquippedItemIds()}
                    />
                </Grid>
            </Grid>
            <h2>Attack Collections</h2>
            <Grid container spacing={3}>
                {selectedGear.attackCollections.map((item, index) =>
                    <Grid item xs={gridSize} key={index}>
                        <ItemSelectorCard
                            title={`Attack Collection ${index + 1}`}
                            statFilter={Stat.Attack}
                            items={items}
                            selectedItem={selectedGear?.attackCollections[index]}
                            setSelectedItem={(item?: Item) => setSelectedGear({
                                ...selectedGear,
                                attackCollections: arrayUpdater(selectedGear.attackCollections, index, item)
                            })}
                            selectedItemLinks={getItemLinks(selectedGear.attackCollections[index])}
                            equippedItemIds={getEquippedItemIds()}
                        />
                    </Grid>
                )}
            </Grid>
            <h2>Magic Collections</h2>
            <Grid container spacing={3}>
                {selectedGear.magicCollections.map((item, index) =>
                    <Grid item xs={gridSize} key={index}>
                        <ItemSelectorCard
                            title={`Magic Collection ${index + 1}`}
                            statFilter={Stat.Magic}
                            items={items}
                            selectedItem={selectedGear?.magicCollections[index]}
                            setSelectedItem={(item?: Item) => setSelectedGear({
                                ...selectedGear,
                                magicCollections: arrayUpdater(selectedGear.magicCollections, index, item)
                            })}
                            selectedItemLinks={getItemLinks(selectedGear.magicCollections[index])}
                            equippedItemIds={getEquippedItemIds()}
                        />
                    </Grid>
                )}
            </Grid>
            <h2>Defense Collections</h2>
            <Grid container spacing={3}>
                {selectedGear.defenseCollections.map((item, index) =>
                    <Grid item xs={gridSize} key={index}>
                        <ItemSelectorCard
                            title={`Defense Collection ${index + 1}`}
                            statFilter={Stat.Defense}
                            items={items}
                            selectedItem={selectedGear?.defenseCollections[index]}
                            setSelectedItem={(item?: Item) => setSelectedGear({
                                ...selectedGear,
                                defenseCollections: arrayUpdater(selectedGear.defenseCollections, index, item)
                            })}
                            selectedItemLinks={getItemLinks(selectedGear.defenseCollections[index])}
                            equippedItemIds={getEquippedItemIds()}
                        />
                    </Grid>
                )}
            </Grid>
            <h2>Health Collections</h2>
            <Grid container spacing={3}>
                {selectedGear.healthCollections.map((item, index) =>
                    <Grid item xs={gridSize} key={index}>
                        <ItemSelectorCard
                            title={`Health Collection ${index + 1}`}
                            statFilter={Stat.Health}
                            items={items}
                            selectedItem={selectedGear?.healthCollections[index]}
                            setSelectedItem={(item?: Item) => setSelectedGear({
                                ...selectedGear,
                                healthCollections: arrayUpdater(selectedGear.healthCollections, index, item)
                            })}
                            selectedItemLinks={getItemLinks(selectedGear.healthCollections[index])}
                            equippedItemIds={getEquippedItemIds()}
                        />
                    </Grid>
                )}
            </Grid>
        </>
    );
};

