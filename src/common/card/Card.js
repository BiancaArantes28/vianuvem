import React, { useCallback, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

const useStyles = makeStyles({
    root: {
        minWidth: 345,
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

const CardComponent = ({ addItemChart, card, items, removeItemChart }) => {
    const classes = useStyles();
    const [qtd, setQtd] = useState(0);

    useEffect(() => {
        setQtd(items[0] ? items[0] : 0);
    }, [items]);

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    R$ {card.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => {
                        if (qtd > 0) {
                            removeItemChart(card);
                        }
                    }} 
                    className={classes.buttonCancel} 
                    size="small"
                    disabled={qtd === 0}>
                        <IndeterminateCheckBoxIcon />
                </Button>
                <div className={classes.qtdBox}>
                    <div className={classes.qtdText}>{qtd}</div>
                </div>
                <Button onClick={() => {
                    if (qtd < parseInt(card.qtd)) {
                        addItemChart(card);
                    }
                }} className={classes.buttonBuy} size="small">
                    <AddBoxIcon />
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardComponent;
