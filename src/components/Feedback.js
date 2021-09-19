import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import { useState } from 'react';
import { Button, makeStyles, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    form: {
        marginTop: "100px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '500px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
        heading: {
            top:"10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
    },
}));

export default function Feedback() {
    const classes = useStyles();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setcontactNumber] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    };
    return (
        <div>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h4">
                Share Your Ideas and feedback!!
                </Typography>
                <Typography variant="h6" style={{marginTop:20,marginBottom:20, color:"#3f51b5"}}>
                    Thanks For taking out time to provide us your valueable ideas and feedback. If we like your idea we will reach out to hear more about it!!
                </Typography>
                <TextField
                    label="First Name"
                    variant="filled"
                    required
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <TextField
                    label="Last Name"
                    variant="filled"
                    required
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <TextField
                    label="Email"
                    variant="filled"
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    label="Contact Number"
                    variant="filled"
                    required
                    value={contactNumber}
                    onChange={e => setcontactNumber(e.target.value)}
                />
                <TextField
                    label="Tell us What we can do better?"
                    variant="filled"
                    required
                    multiline
                    value={feedback}
                    rows="5"
                    onChange={e => setFeedback(e.target.value)}
                />
                <div>
                    <Button variant="contained" href="/">
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Submit Feedback
                    </Button>
                </div>
            </form>

        </div>

    );
}