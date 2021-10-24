
// this is the centre card

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 900,
        textAlign: 'left',
        padding: 0.2,
        height: 500,
        position: 'centre',
        aligncontent: 'centre',
        width: 300,
        borderRadius: 15,
    },

    media: {
        height: 100,
        paddingTop: '56.25%', // 16:9
        borderRadius: 15,
        padding: '0 20px',
        paddingright: 30,
        paddingleft: 30,

        button: {
            fontFamily: 'Futura',
            fontSize: 20,
            color: 'white',
            background:'#FF645A',
            textAlign: 'left',
        },
    },

    typography: {
        fontFamily: 'Futura',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#5C284F',
    }




}));

export default function Hotel6() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <Grid container spacing={3}

            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}

        >
            <Grid item xs={12} lg={12}>

                <Card className={classes.root}>

                    <CardHeader className={classes.typography}
                        title="Hurrycane"
                        // changed the title
                        subheader="20% off the first booking"
                    />

                    <CardMedia
                        className={classes.media}
                        image="https://imgmedia.lbb.in/media/2019/08/5d43d83bca10992d055cc50d_1564727355126.jpg"

                    />
                    <CardContent>
                        {/* the text below the card */}
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
                        Address
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">
                          10, Grand Road
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">
                         Kandivali East
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">
                        Mumbai- 02
                        </Typography>

                        

                        <Button className={classes.typography}> 
                        explore
                        </Button>


                    </CardContent>

                </Card>
            </Grid>
        </Grid>
    );
}
