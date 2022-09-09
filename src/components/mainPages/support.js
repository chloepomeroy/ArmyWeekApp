import React from "react"
import Faq from "react-faq-component"
import { useTranslation } from "react-i18next"

// Styling
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

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
    const { t, i18n } = useTranslation();

    return (
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
    )
}
