import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  GridList,
  GridListTile
} from '@material-ui/core';

export interface TileData {
  title: string;
  to: string;
}

export const NavTileList: React.FC<{
  tileDataList: TileData[];
}> = ({ tileDataList }) => (
  <GridList cellHeight={160} cols={3}>
    {tileDataList.map(tile => (
      <GridListTile key={tile.title} cols={1}>
        <Card>
          <CardHeader title={tile.title} />
          <CardContent>content</CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="primary"
              component={NavLink}
              to={tile.to}
            >
              {`Go to ${tile.title} Guides`}
            </Button>
          </CardActions>
        </Card>
      </GridListTile>
    ))}
  </GridList>
);