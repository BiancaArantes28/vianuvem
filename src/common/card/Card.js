import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

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
    buttonCancel: {
        marginTop: 15,
        backgroundColor: '#e60014',
        color: '#ffffff',
        "&:hover": {
            backgroundColor: '#e60014',
            color: '#ffffff',
        }
    },
    buttonBuy: {
        marginTop: 15,
        backgroundColor: 'rgb(102, 206, 2)',
        color: '#ffffff',
        "&:hover": {
            backgroundColor: 'rgb(102, 206, 2)',
            color: '#ffffff',
        }
    }
});

const CardComponent = ({ card }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={card.img}
                title={card.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    R$ {card.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.buttonCancel} size="small">
                    <IndeterminateCheckBoxIcon />
                </Button>
                <TextField
                    id="qtd-input"
                    label="Quantidade"
                    defaultValue="1"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <Button className={classes.buttonBuy} size="small">
                    <AddBoxIcon />
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardComponent;
