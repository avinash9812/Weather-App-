import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1677105700661-dbfad22793ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title={info.city || "Weather Image"}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city || "N/A"}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Temperature: {info.temp || "N/A"}°C
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Humidity: {info.humidity || "N/A"}%
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Max Temperature: {info.tempMax || "N/A"}°C
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Min Temperature: {info.tempMin || "N/A"}°C
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Weather: {info.weather || "N/A"} - Feels like {info.feelsLike || "N/A"}°C
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}
