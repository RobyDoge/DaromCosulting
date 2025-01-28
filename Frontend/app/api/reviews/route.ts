import { NextResponse } from 'next/server'


import * as AWS from 'aws-sdk';

const s3 = new AWS.S3({ region: 'eu-north-1' });

async function getGoogleMapsAPIKeys() {
  const params = {
    Bucket: 'darom-consulting', 
    Key: 'Enviroment Variables.json'
  };

  try {
    const data = await s3.getObject(params).promise();

    if (!data.Body) {
      throw new Error('S3 object Body is undefined');
    }
    const jsonData = JSON.parse(data.Body.toString('utf-8'));
    return {
      GOOGLE_PLACE_ID: jsonData.GOOGLE_PLACE_ID,
      API_KEY: jsonData.API_KEY
    };
  } catch (err) {
    throw new Error('Failed to retrieve Google Maps API keys');
  }
}


export async function GET() {
  try {
    const { GOOGLE_PLACE_ID, API_KEY } = await getGoogleMapsAPIKeys();
    if (!API_KEY) {
      throw new Error('Google Maps API key is not configured');
    }
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?` +
        `place_id=${GOOGLE_PLACE_ID}` +
        `&fields=reviews,rating,user_ratings_total` +
        `&key=${API_KEY}` +
        `&language=ro` // Set language to Romanian
    );

    if (!response.ok) {
      throw new Error('Failed to fetch from Google Places API');
    }

    const data = await response.json();

    if (!data.result?.reviews) {
      return NextResponse.json({
        reviews: [],
        message: 'Nu există recenzii momentan.'
      });
    }

    return NextResponse.json({
      reviews: data.result.reviews,
      rating: data.result.rating,
      total: data.result.user_ratings_total
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Nu s-au putut încărca recenziile. Vă rugăm încercați mai târziu.' },
      { status: 500 }
    );
  }
}
