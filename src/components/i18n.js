import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

var en = require('../data/enevents.json').events;
var fr = require('../data/frevents.json').events;

const resources = {
    en: {
      translation: {
        index: "ARMY WEEK 2022",
        Calendar: "Agenda",
        Venueinfo: "Venue Info",
        Help: "Help",
        dashboards: "Dashboards",
        presentations: "Presentations",
        help_more:"Still have questions?",
        help_email: "Send an Email to",
        help_data: {
            title: "FAQ",
            rows: [
                {
                    title: "Where can I find the presentations?",
                    content: `From the calendar you can click on a particular event which will show you further information about that event,
                    including the presentation, or you can view all the presentations by clicking the presentation button in the menu.`,
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
            "img": "armyweekregss.JPG"
            },
            {"title": "Canadian Army Modernization Strategy",
            "description": "Tracking progress of initiatives and sub-initiatives on the road to modernization.",
            "file_title": "CAMS Placemat Desktop",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=0cdaec13-9fa7-425f-bd70-6b21a74a7f94&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "camsss.JPG"
            },
            {"title": "Army 101 Dashboard",
            "description": "Dashboards and placemats that describe the Canadian Army and its structure.",
            "file_title": "Army 101",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=12d0edf4-365c-4965-9892-c29be534591c&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "army101ss.JPG"
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
            "img": "CAGenOffss.JPG"
            },
        ],
        cal_week: "week",
        cal_day: "day", 
        cal_list: "list",
        cal_pagetitle: "Agenda",
        langSwitch: "Fran??ais",
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
      },
    },
    fr: {
      translation: {
        index: "SEMAINE DE L'ARM??E 2022",
        Calendar: "Agenda",
        Venueinfo: "Informations sur le lieu",
        Help: "Aide",
        dashboards: "Tableaux de bord",
        presentations: "Pr??sentations",
        help_more:"Encore des questions?",
        help_email: "Envoyez un message ??",
        help_data: {
            title: "FAQ",
            rows: [
                {
                    title: "O?? puis-je trouver les pr??sentations?",
                    content: `Dans le calendrier, vous pouvez cliquer sur un ??v??nement en particulier qui vous montrera plus d'informations sur cet ??v??nement, y compris la pr??sentation. Vous pouvez aussi consulter toutes les pr??sentations en cliquant sur le bouton pr??sentation dans le menu.`,
                },
                {
                    title: "Dois-je m'inscrire?",
                    content:"Oui, vous devez vous inscrire au webinaire Zoom pour chaque partie de la Semaine de l'Arm??e, que vous participiez virtuellement ou en personne. Vous devriez d??j?? avoir re??u une invitation de calendrier Outlook pour chaque partie de la Semaine de l'Arm??e qui comprenait un lien pour vous inscrire au webinaire Zoom.",
                },
                {
                    title: "O?? puis-je trouver l'endroit d'un ??v??nement?",
                    content: "Dans le calendrier, vous pouvez cliquer sur un ??v??nement en particulier qui vous montrera plus d'informations sur cet ??v??nement, y compris l'endroit.",
                },
                {
                    title: "Comment puis-je contacter l'organisateur de l'??v??nement?",
                    content: `Si vous avez des questions auxquelles cette FAQ ne r??pond pas, vous pouvez contacter les organisateurs ?? CAHQ.IMIT@gmail.com.`,
                },
                {
                    title: "Quels protocoles Covid sont en place?",
                    content: `Bien qu'encourag??, l'utilisation de masques n'est plus n??cessaire ?? moins que la distance physique ne puisse ??tre maintenue pendant de longues p??riodes.` ,
                },
                {
                    title: "Les ??v??nements en personne ont-ils une capacit?? limit??e?",
                    content: `Oui. La participation en personne est limit??e aux personnes invit??es ?? participer en personne conform??ment ?? l'ordre d'op??ration de la Semaine de l'Arm??e 2022.` ,
                },
                {
                    title: "Est-ce que les ??v??nements sont ouverts ?? tous?",
                    content: `Non. La participation est limit??e aux personnes invit??es conform??ment ?? l'ordre d'op??ration de la Semaine de l'Arm??e 2022.` ,
                },
            ],
        },
        venue_pagetitle: "Lieu",
        venue_name: "Ottawa Conference and Event Centre",
        venue_address: "200 Coventry Road, Ottawa, ON",
        venue_moreinfo: "Plus d'information",
        venue_floorplantitle: "Plan d'??tage d'installation",
        dashboards_view: "Affichez", 
        dashboards_pagetitle: "Tableaux de bord",
        dashboard_list: [
            {"title": "Inscription pour la Semaine de l???Arm??e 2022",
            "description": "Regardez les statistiques sur les inscriptions pour la Semaine de l???Arm??e.",
            "file_title": "Inscription pour la Semaine de l???Arm??e 2022",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=5a75de14-c141-463c-9509-80d3c17d98e9&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "armyweekregss.JPG"
            },
            {"title": "Strat??gie de modernisation de l'Arm??e canadienne",
            "description": "Suivi des progr??s des initiatives et des sous-initiatives sur la voie de la modernisation.",
            "file_title": "CAMS Placemat Desktop",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=0cdaec13-9fa7-425f-bd70-6b21a74a7f94&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "camsss.JPG"
            },
            {"title": "Tableau de bord Arm??e 101",
            "description": "Tableaux de bord qui d??crivent l'Arm??e canadienne et sa structure.",
            "file_title": "Army 101",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=12d0edf4-365c-4965-9892-c29be534591c&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "army101ss.JPG"
            },
            {"title": "Organigramme interactif de l'AC",
            "description": "Voyez comment l'AC est structur??e et o?? se trouvent les diff??rentes organisations.",
            "file_title": "CA Org Structure",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=dad185ad-5fd1-4c2f-b56d-bbc512e52025&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "orgstructss.jpg"
            },
            {"title": "Tableau de bord du commandant et de l'??quipe des ahuts dirigeants",
            "description": "Consultez les biographies du commandant et des hauts dirigeants de l'AC.",
            "file_title": "CA General Officers",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=98a139c3-e995-41a5-9acf-bcfdf554e6f2&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "CAGenOffss.JPG"
            },
        ],
        cal_week: "semaine", 
        cal_day: "jour",
        cal_list: "liste",
        cal_pagetitle: "Programme",
        langSwitch: "English",
        langSwitchShort: "EN",
        event_pagetitle: "D??tails sur l'??v??nement",
        event_presenter: "Pr??sentateur:",
        event_category: "Cat??gorie:",
        event_date: "Date:",
        event_time: "Heure:",
        event_location: "Lieu",
        event_lookupmaterials: "Documents",
        event_zoomlink: "Lien pour Zoom",
        event_floorplan: "Plan d'??tage",
        event_download: "T??l??chargez",
        event_display: "Afficher le PDF",
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