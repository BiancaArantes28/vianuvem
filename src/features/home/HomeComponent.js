import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CardComponent from '../../common/card/Card';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

const HomeComponent = ({ addItemChart, items, products, removeItemChart }) => {
    const classes = useStyles();
    
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    {products.map((product) => (
                        <Grid key={product.id} item>
                            <CardComponent 
                                addItemChart={addItemChart} 
                                card={product} 
                                items={items.filter(i => i.id === product.id).map(q => q.qtd)}
                                removeItemChart={removeItemChart} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default HomeComponent;