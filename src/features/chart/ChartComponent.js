import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    table: {
        width: '90%',
        margin: 'auto',
        borderCollapse: 'collapse',
    },
    th: {
        border: '1px solid #c6c5c5',
        textAlign: 'center',
    },
    td: {
        border: '1px solid #c6c5c5',
        textAlign: 'center',
        paddingTop: '10px',
        paddingBottom: '10px',
    },
    buttonCancel: {
        backgroundColor: '#e60014',
        color: '#ffffff',
        marginRight: '10px',
        "&:hover": {
            backgroundColor: '#e60014',
            color: '#ffffff',
        }
    },
    buttonBuy: {
        backgroundColor: 'rgb(102, 206, 2)',
        color: '#ffffff',
        "&:hover": {
            backgroundColor: 'rgb(102, 206, 2)',
            color: '#ffffff',
        }
    }
}));

const ChartComponent = ({ addItemChart, items, removeItemChart, total }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <table className={classes.table}>
                    <thead>
                        <tr>
                            <th className={classes.th}>Produto</th>
                            <th className={classes.th}>Preço do produto</th>
                            <th className={classes.th}>Quantidade</th>
                            <th className={classes.th}>Ação</th>
                            <th className={classes.th}>Preço total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length === 0 ?
                            (
                                <tr>
                                    <td className={classes.td} colSpan={5}>Carrinho Vazio</td>
                                </tr>
                            )
                            :
                            <>
                                {items.map((i) => (
                                    <tr key={i.id}>
                                        <td className={classes.td}>{i.name}</td>
                                        <td className={classes.td}>R$ {i.price}</td>
                                        <td className={classes.td}>{i.qtd}</td>
                                        <td className={classes.td}>
                                            <Button onClick={() => removeItemChart(i)}
                                                className={classes.buttonCancel}
                                                size="small">
                                                <IndeterminateCheckBoxIcon />
                                            </Button>
                                            <Button onClick={() => addItemChart(i)} className={classes.buttonBuy} size="small">
                                                <AddBoxIcon />
                                            </Button>
                                        </td>
                                        <td className={classes.td}>R$ {parseFloat(i.qtd * parseFloat(i.price)).toFixed(2)}</td>
                                    </tr>

                                ))}
                                <tr>
                                    <td colSpan={4}></td>
                                    <td>Valor total: R$ {total}</td>
                                </tr>
                            </>
                        }
                    </tbody>
                </table>
            </Grid>
        </Grid>
    );
}

export default ChartComponent;
