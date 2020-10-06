import * as React from 'react';
import { Link, Paper } from '@material-ui/core';

export const PublicAPIPage = () => (
  <Paper>
    <h1>Questland Public API</h1>
    <p>
      This project is all about exporting Questland game data in a reliable and
      easy to use way that respect's the game data. This project is intended to
      primarily be used by developers so if you are interested in making a new
      tool and sharing it with the community reach out to Mandalorian007#0214 on
      discord.
    </p>
    <h3>Public API Endpoints</h3>
    <ul>
      <li>Items (gear)</li>
      <li>Orbs</li>
      <li>Battle Location Data</li>
    </ul>

    <h3>Public API Swagger Documentation</h3>
    <Link href="https://questland-public-api-dot-questland-tools.uc.r.appspot.com/swagger-ui.html">
      Swagger API docs
    </Link>
  </Paper>
);
