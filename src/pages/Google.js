import { Card, CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import React from 'react'
import './Google.css'

export default function Google() {

  const data = [
    {
      title: 'item 1',
      description: 'Hello world! This is description for item',
      complete: false,
      disable: false,
    },
    {
      title: 'item 2',
      description: 'Hello world! This is description for item 3',
      complete: false,
      disable: false,
    },
    {
      title: 'item 3',
      description: 'Hello world! This is description for item 3',
      complete: false,
      disable: false,
    },
    {
      title: 'item 4',
      description: 'Hello world! This is description for item 4',
      complete: false,
      disable: false,
    },
    {
      title: 'item 5',
      description: 'Hello world! This is description for item 5',
      complete: false,
      disable: false,
    },
    {
      title: 'item 6',
      description: 'Hello world! This is description for item 6',
      complete: false,
      disable: false,
    },
    {
      title: 'item 7',
      description: 'Hello world! This is description for item 7',
      complete: false,
      disable: false,
    },
  ];

  return (
    <div id='list-state'>
      {data.map((e, index) => {
        return (
          <Card key={index} sx={{ width: 200, margin: 1}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>)
      })}
    </div>
  )
}
