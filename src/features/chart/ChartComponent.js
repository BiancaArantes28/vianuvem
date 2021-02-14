import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

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
                            <th className={classes.th}>Preço total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length === 0 ?
                            (
                                <tr>
                                    <td className={classes.td} colSpan={4}>Carrinho Vazio</td>
                                </tr>
                            )
                            :
                            <>
                                {items.map((i) => (
                                    <tr key={i.id}>
                                        <td className={classes.td}>{i.name}</td>
                                        <td className={classes.td}>R$ {i.price}</td>
                                        <td className={classes.td}>{i.qtd}</td>
                                        <td className={classes.td}>R$ {i.qtd * parseFloat(i.price)}</td>
                                    </tr>

                                ))}
                                <tr>
                                    <td colSpan={3}></td>
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
