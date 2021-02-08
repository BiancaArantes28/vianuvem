import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minHeight: 500,
        maxHeight: 500,
    },
    media: {
        height: 350,
        width: 340,
    },
});

const CardComponent = ({ card }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={card.img}
                title={card.title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {card.description}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    {card.price}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardComponent;
