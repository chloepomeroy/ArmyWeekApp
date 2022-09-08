import React from "react"

//Components
import Faq from "react-faq-component";
import Layout from "../components/layout"

//MUI
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { t} from "i18next";
import { useTranslation } from "react-i18next";


const styles = {
    // bgColor: 'white',
    titleTextColor: 'green',
    // titleTextSize: '48px',
    rowTitleColor: 'black',
    // rowTitleTextSize: 'medium',
    // rowContentColor: 'grey',
    rowContentTextSize: '16px',
    // rowContentPaddingTop: '10px',
    //rowContentPaddingBottom: '10px',
    //rowContentPaddingLeft: '150px',
    //rowContentPaddingRight: '150px',
    // arrowColor: "red",
    //transitionDuration: "1s",
    // timingFunc: "ease"
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function Help() {
    const { i18n } = useTranslation();

    return (
        <Layout pageTitle={t("Help")}>
     
            <Grid container spacing={2} textAlign="left">
                <Grid item xs={12}>
                    <Box m={5}>
                        <Faq
                            data={t("help_data", { returnObjects: true })}
                            styles={styles}
                            config={config}
                        />
                    </Box>
                </Grid>
                <Box m="auto" mb={7}>
                <h5>{t("help_more")}</h5>
                <div>{t("help_email")}<br /><h5>CAHQ.IMIT@gmail.com</h5>
                </div>
                    {/* <Button variant="contained" color="success" href="/contact">
                    Contact Us
                    </Button> */}
                </Box>
            </Grid>
        </Layout>
    );
}
