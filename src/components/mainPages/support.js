import React from "react"
import Faq from "react-faq-component"
import { useTranslation } from "react-i18next"

// Styling
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const styles = {
    titleTextColor: 'green',
    rowTitleColor: 'black',
    rowContentTextSize: '16px',
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function Support() {
    const { t, i18n } = useTranslation();

    return (
        <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white', paddingTop: '30px' }}>
            <Grid container spacing={2} textAlign="left">
                <Grid item xs={12} >
                    <Box m={5}>
                        <Faq
                            data={t("help_data", { returnObjects: true })}
                            styles={styles}
                            config={config}
                        />
                    </Box>
                </Grid>
                <Box sx={{marginLeft:'56px', marginBottom: '76px'}}>
                    <Typography variant="h6" style={{marginRight: '10px'}}>{t("help_more")}</Typography>
                    <Button variant="contained" color="success" href="mailto:ArmyGovernanceCalendar-CalendriergouvernancedArmee@forces.gc.ca">
                        {t("contact_us")}
                    </Button><br></br>
                    <Typography variant="body1">Call or Text: 613-292-9646</Typography>
                </Box>
            </Grid>
        </Box>
    )
}
