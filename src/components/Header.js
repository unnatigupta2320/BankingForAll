import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import HeadersRepository from '../repositories/HeadersRepository.js';

const useStyles = makeStyles(() => ({
    header: {
        width: "100%",
        display: "absolute",
        backgroundColor: "#000033",
        paddingRight: "3%",
        paddingLeft: "5%",
        marginBottom: "50px"
    },
    logo: {
        fontFamily: "bold Okra,Helvetica,sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "bold Okra,Helvetica,sans-serif",
        fontWeight: 700,
        fontSize: "15px",
        size: "18px",
        marginLeft: "38px",
    },
    titleWebsite: {
        fontWeight: 700,
        fontSize: "20px",
        marginLeft: "18px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    headerContainer: {
        display: "block",
        width: "100%",
        marginBottom: 10
    }
}));

export default function Header() {
    const { header, logo, menuButton, toolbar, titleWebsite, headerContainer } = useStyles();
    var headersRepository = new HeadersRepository();
    const headersData = headersRepository.getHeaderPagesDetails();
    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {femmecubatorLogo}
                <div textAlign="right">
                    {getMenuButtons()}
                </div>
            </Toolbar>
        );
    };

    const femmecubatorLogo = (
        <Typography variant="h6" className={logo}>
            <Button
                color="inherit"
                className={titleWebsite}
                href="/"
            >
                Go Digital!
            </Button>
        </Typography >
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        href: href,
                        className: menuButton
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <header className={headerContainer}>
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    );
}