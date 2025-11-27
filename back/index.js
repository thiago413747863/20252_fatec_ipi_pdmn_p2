require('dotenv').config();
const cors = require('cors');

const express = require('express');
const app = express();
const axios = require('axios');

app.use(cors());
app.get('/pic-day', async (req, res) => {
  const result = await axios.get('https://api.nasa.gov/planetary/apod', {
    params: {
      api_key: process.env.NASA_KEY,
    },
  });

  res.json({ picDay: result.data });
});


app.get('/search', async (req, res) => {
  const result = await axios.get('https://images-api.nasa.gov/search', {
    params: {
      q: req.query.term,
      year_start: req.query.year,
      year_end: req.query.year,
      page_size: 10,
    },
  });

  const { items } = result?.data?.collection;

  const formattedImages = items.map(img => {
    const image = img.data?.[0];
    const links = img.links || [];

    return {
      title: image.title || '',
      description: image.description || '',
      url: links[0]?.href || '',
    };
  });

  res.json({ images: formattedImages });
});

const port = 3000;
app.listen(port, () => console.log(`Back. Porta ${port}.`));