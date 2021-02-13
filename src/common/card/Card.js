import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minHeight: 450,
        maxHeight: 450,
    },
    qtdBox: {
        width: 'calc(100% - 128px)',
        textAlign: 'center',
        border: '1px solid #c6c5c5',
        height: '32px',
        marginTop: '15px',
        display: 'table',
    },
    qtdText: {
        display: 'table-cell',
        verticalAlign: 'middle',
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

const CardComponent = ({ addItemChart, card, items }) => {
    const classes = useStyles();
    const [qtd, setQtd] = useState(0);

    useEffect(() => {
        console.log("aqui = ", items[0]);
        setQtd(items[0] ? items[0] : 0);
    }, [items]);
    
    
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
                <div className={classes.qtdBox}>
                    <div className={classes.qtdText}>{qtd}</div>
                </div>
                <Button onClick={() => addItemChart(card)} className={classes.buttonBuy} size="small">
                    <AddBoxIcon />
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardComponent;
