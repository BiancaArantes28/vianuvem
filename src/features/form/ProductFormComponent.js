import React, { useCallback, useState } from 'react';
import { Alert } from '@material-ui/lab';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const ProductFormComponent = ({ addProduct, message, error, success }) => {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0.00);
    const [qtd, setQtd] = useState(0);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'price':
                setPrice(value);
                break;
            case 'qtd':
                setQtd(value);
                break;
            default:
                break;
        };
    }, []);

    const submitForm = useCallback((e) => {
        e.preventDefault();
        console.log("aqui submit = ", name)
        const payload = {
            name,
            price,
            qtd,
        };

        addProduct(payload);
    }, [name, price, qtd]);
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    <form onSubmit={(e) => submitForm(e)}>
                        {error && (<Alert severity="error">{message}</Alert>)}
                        {success && (<Alert severity="success">{message}</Alert>)}

                        <Grid item>
                            <label>Nome:</label>
                            <input type="text" name="name" value={name} onChange={(e) => handleChange(e)} />
                            <label>Preço:</label>
                            <input type="number" name="price" value={price} onChange={(e) => handleChange(e)} />
                            <label>Quantidade:</label>
                            <input type="number" name="qtd" value={qtd} onChange={(e) => handleChange(e)} />
                            <Button type="submit">Adicionar produto</Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ProductFormComponent;