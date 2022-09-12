import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

var en = require('./components/data/enevents.json').events;
var fr = require('./components/data/frevents.json').events;

const resources = {
    en: {
      translation: {
        index: "ARMY WEEK 2022",
        calendar: "Agenda",
        venueInfo: "Venue Info",
        info: "Info",
        agenda: "Agenda",
        help: "Help",
        dashboards: "Dashboards",
        resources: "Resources",
        support: "Support",
        settings: "Settings",
        feedback: "Feedback",
        help_more:"More questions?",
        help_email: "Send an Email to",
        responsible: "OPI",
        cams: "CAMS",
        presentation_and_resources: "Presentation and Resources",
        help_data: {
            title: "FAQ",
            rows: [
                {
                    title: "Where can I find the presentations?",
                    content: `From the calendar you can click on an event which will show you further information about that event,
                    including the presentation, or you can view all the presentations by clicking the resources button in the menu.`,
                },
                {
                    title: "Do I need to register?",
                    content:
                        `Yes, you need to register for the Zoom Webinar for each part of Army Week, regardless if you are participating virtually or in-person. You would have received an Outlook calendar invite for each part of Army Week that included a link to register for the Zoom Webinar.`,
                },
                {
                    title: "Where can I see the event's location?",
                    content: `From the calendar you can click on a particular event which will show you further information about that event,
                    including the location.` ,
                },
                {
                    title: "How can I contact the event's organizer?",
                    content: `If you have questions not answered by this FAQ you can contact the organizers at CAHQ.IMIT@gmail.com.` ,
                },
                {
                    title: "What Covid protocols are in place?",
                    content: `Although encouraged, the use of masks is no longer required unless physical distancing cannot be maintained for prolonged periods of time.` ,
                },
                {
                    title: "Do in-person events have limited capacity?",
                    content: `Yes. Participation in-person is limited to those invited to participate in person as per the Army Week 2022 Operation Order.` ,
                },
                {
                    title: "Are all events open to anyone?",
                    content: `No. Participation is limited to those invited as per the Army Week 2022 Operation Order. ` ,
                },
            ],
        },
        venue_pagetitle: "Venue",
        venue_name: "Ottawa Conference and Event Centre",
        venue_address: "200 Coventry Road, Ottawa, ON",
        venue_moreinfo: "More Information",
        venue_floorplantitle: "Facilities Floorplan",
        dashboards_view: "View", 
        dashboards_pagetitle: "Dashboards",
        dashboard_list: [
            {"title": "2022 Army Week Registration",
            "description": "Take a look at Army Week attendance metrics.",
            "file_title": "2022 Army Week Registration",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=5a75de14-c141-463c-9509-80d3c17d98e9&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "armyweekregss.jpg"
            },
            {"title": "Canadian Army Modernization Strategy",
            "description": "Tracking progress of initiatives and sub-initiatives on the road to modernization.",
            "file_title": "CAMS Placemat Desktop",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=0cdaec13-9fa7-425f-bd70-6b21a74a7f94&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "camsss.jpg"
            },
            {"title": "Army 101 Dashboard",
            "description": "Dashboards and placemats that describe the Canadian Army and its structure.",
            "file_title": "Army 101",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=12d0edf4-365c-4965-9892-c29be534591c&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "army101ss.jpg"
            },
            {"title": "CA Interactive Org Chart",
            "description": "See how the CA is structured and where the various organizations are located.",
            "file_title": "CA Org Structure",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=dad185ad-5fd1-4c2f-b56d-bbc512e52025&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "orgstructss.jpg"
            },
            {"title": "Commander and Senior Leader Dashboard",
            "description": "Peruse the Commander and Senior Leader Bios of the CA.",
            "file_title": "CA General Officers",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=98a139c3-e995-41a5-9acf-bcfdf554e6f2&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "CAGenOffss.jpg"
            },
        ],
        cal_week: "week",
        cal_day: "day", 
        cal_list: "list",
        cal_pagetitle: "Agenda",
        langSwitch: "Français",
        langSwitchShort: "FR",
        event_pagetitle: "Event Details",
        event_presenter: "Presenter:",
        event_category: "Category:",
        event_date: "Date:",
        event_time: "Time:",
        event_location: "Location",
        event_lookupmaterials: "Documents",
        event_zoomlink: "Zoom Link",
        event_floorplan: "Floorplan",
        event_download: "Download",
        event_display: "View PDF",
        event_details: "Event Details",
        strong_proud_ready: "Strong, Proud, Ready",
        sign_in: "Sign In",
        contact_us: "Contact Us"
      },
    },
    fr: {
      translation: {
        index: "SEMAINE DE L'ARMÉE 2022",
        calendar: "ordre du jour",
        venueInfo: "lieu",
        info: "info",
        agenda: "ordre du jour",
        help: "aide",
        dashboards: "tableaux de bord",
        resources: "ressources",
        support: "aide",
        feedback: "réaction",
        settings: "réglages",
        help_more:"Encore des questions?",
        help_email: "Envoyez un message à",
        responsible: "OPI",
        cams: "CAMS",
        presentation_and_resources: "Présentation et Ressources",
        help_data: {
            title: "FAQ",
            rows: [
                {
                    title: "Où puis-je trouver les présentations?",
                    content: `Dans le calendrier, vous pouvez cliquer sur un événement en particulier qui vous montrera plus d'informations sur cet événement, y compris la présentation. Vous pouvez aussi consulter toutes les présentations en cliquant sur le bouton présentation dans le menu.`,
                },
                {
                    title: "Dois-je m'inscrire?",
                    content:"Oui, vous devez vous inscrire au webinaire Zoom pour chaque partie de la Semaine de l'Armée, que vous participiez virtuellement ou en personne. Vous devriez déjà avoir reçu une invitation de calendrier Outlook pour chaque partie de la Semaine de l'Armée qui comprenait un lien pour vous inscrire au webinaire Zoom.",
                },
                {
                    title: "Où puis-je trouver l'endroit d'un évènement?",
                    content: "Dans le calendrier, vous pouvez cliquer sur un événement en particulier qui vous montrera plus d'informations sur cet événement, y compris l'endroit.",
                },
                {
                    title: "Comment puis-je contacter l'organisateur de l'événement?",
                    content: `Si vous avez des questions auxquelles cette FAQ ne répond pas, vous pouvez contacter les organisateurs à CAHQ.IMIT@gmail.com.`,
                },
                {
                    title: "Quels protocoles Covid sont en place?",
                    content: `Bien qu'encouragé, l'utilisation de masques n'est plus nécessaire à moins que la distance physique ne puisse être maintenue pendant de longues périodes.` ,
                },
                {
                    title: "Les événements en personne ont-ils une capacité limitée?",
                    content: `Oui. La participation en personne est limitée aux personnes invitées à participer en personne conformément à l'ordre d'opération de la Semaine de l'Armée 2022.` ,
                },
                {
                    title: "Est-ce que les événements sont ouverts à tous?",
                    content: `Non. La participation est limitée aux personnes invitées conformément à l'ordre d'opération de la Semaine de l'Armée 2022.` ,
                },
            ],
        },
        venue_pagetitle: "Lieu",
        venue_name: "Ottawa Conference and Event Centre",
        venue_address: "200 Coventry Road, Ottawa, ON",
        venue_moreinfo: "Plus d'information",
        venue_floorplantitle: "Plan d'étage d'installation",
        dashboards_view: "Affichez", 
        dashboards_pagetitle: "Tableaux de bord",
        dashboard_list: [
            {"title": "Inscription pour la Semaine de l’Armée 2022",
            "description": "Regardez les statistiques sur les inscriptions pour la Semaine de l’Armée.",
            "file_title": "Inscription pour la Semaine de l’Armée 2022",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=5a75de14-c141-463c-9509-80d3c17d98e9&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "armyweekregss.jpg"
            },
            {"title": "Stratégie de modernisation de l'Armée canadienne",
            "description": "Suivi des progrès des initiatives et des sous-initiatives sur la voie de la modernisation.",
            "file_title": "CAMS Placemat Desktop",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=0cdaec13-9fa7-425f-bd70-6b21a74a7f94&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "camsss.jpg"
            },
            {"title": "Tableau de bord Armée 101",
            "description": "Tableaux de bord qui décrivent l'Armée canadienne et sa structure.",
            "file_title": "Army 101",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=12d0edf4-365c-4965-9892-c29be534591c&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "army101ss.jpg"
            },
            {"title": "Organigramme interactif de l'AC",
            "description": "Voyez comment l'AC est structurée et où se trouvent les différentes organisations.",
            "file_title": "CA Org Structure",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=dad185ad-5fd1-4c2f-b56d-bbc512e52025&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "orgstructss.jpg"
            },
            {"title": "Tableau de bord du commandant et de l'équipe des ahuts dirigeants",
            "description": "Consultez les biographies du commandant et des hauts dirigeants de l'AC.",
            "file_title": "CA General Officers",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=98a139c3-e995-41a5-9acf-bcfdf554e6f2&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "CAGenOffss.jpg"
            },
        ],
        cal_week: "semaine", 
        cal_day: "jour",
        cal_list: "liste",
        cal_pagetitle: "Programme",
        langSwitch: "English",
        langSwitchShort: "EN",
        event_pagetitle: "Détails sur l'évènement",
        event_presenter: "Présentateur:",
        event_category: "Catégorie:",
        event_date: "Date:",
        event_time: "Heure:",
        event_location: "Lieu",
        event_lookupmaterials: "Documents",
        event_zoomlink: "Lien pour Zoom",
        event_floorplan: "Plan d'étage",
        event_download: "Téléchargez",
        event_display: "Afficher le PDF",
        event_details: "Détails sur l'évènement",
        strong_proud_ready: "Forts, Fiers, Prêts",
        sign_in: "connexion",
        contact_us: "nous contacter"
      },
    },
  };


  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources,
      lng: "en",
      interpolation: {
        escapeValue: false,
      },
      fallbackLng: "en",
      nonExplicitSupportedLngs: true,
    });
  export default i18next;