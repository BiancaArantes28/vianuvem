import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent, TextField, Typography } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minHeight: 450,
        maxHeight: 450,
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
            <CardContent>
                <img src={card.img} width="100%" height="250px" />
                <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                </Typography>
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
