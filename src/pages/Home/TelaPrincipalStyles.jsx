import React from 'react'

import {flexbox, styled} from "@mui/system";
import TelaPrincipal from './TelaPrincipal';
import theme from '../../Theme/Theme'

const Div = styled('div') ({
    background: "white",
    color: "blue",
    fontWeight: "bold",
    fontSize: "2em",
});

const Div2 = styled('div') ({
    background: "#eee",
    color: "yellow",
    fontWeight: "bold",
    fontSize: "5em",
});

const DivFooter = styled('div')(({ theme }) => ({
    color: 'white',
    fontWeight: 'bold',
    margin: "0 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "15%",
    backgroundColor: theme.palette.colors.default_dark
}))

const TelaPrincipalStyles = () => {

    return {Div, Div2, DivFooter};
}

export default TelaPrincipalStyles;
