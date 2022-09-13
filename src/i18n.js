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
                    including the presentation and resources or you can view all the presentations by clicking the resources button in the menu.`,
                },
                {
                    title: "Do I need to register?",
                    content:
                        `Yes, you need to register for the Zoom Webinar for each part of Army Week, regardless if you are participating virtually or in-person. The link to the meeting gets sent to you once you register. You would have received an Outlook calendar invite for each part of Army Week that included a link to register for the Zoom Webinar.`,
                },
                {
                    title: "Where can I see the event's location?",
                    content: `From the calendar you can click on a particular event which will show you further information about that event,
                    including the location.` ,
                },
                {
                    title: "How can I contact the event's organizer?",
                    content: `If you have questions not answered by this FAQ you can contact the organizers using the contact button or phone number at bottom of the page.` ,
                },
                {
                    title: "What COVID protocols are in place?",
                    content: `Although encouraged, the use of masks is no longer required unless physical distancing cannot be maintained for prolonged periods of time.` ,
                },
                {
                    title: "Do in-person events have limited capacity?",
                    content: `Yes. Participation in-person is limited to those invited to participate in person as per the Army Week 2022 Operation Order.` ,
                },
                {
                    title: "Are all events open to anyone?",
                    content: `No. Participation is limited to those invited as per the Army Week 2022 Operation Order.` ,
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
        army_council_resources_list: [
            {
            "id": 1,
            "title": "DAS Intro Slides",
            "description": "Ser 1: 13 0830-0850 Sep 22",
            "file_title": "DAS Intro Slides",
            "url": "https://caarmydata.blob.core.windows.net/resources/01%20-%20AC%2022-04%20DAS%20Intro%20Slides.pdf",
            "img": "DAS-Intro-Slides.png"
            },
            {
            "id": 2,
            "title": "Business Planning and Risk",
            "description": "Ser 5: 13 1035-1105 Sep 22",
            "file_title": "Business Planning and Risk",
            "url": "https://caarmydata.blob.core.windows.net/resources/DAS%202%20-%20Army%20Council%20Brief%20(Sep%2022).pdf",
            "img": "fin-update.png"
            },
            {
            "id": 3,
            "title": "CAMS Annual Report",
            "description": "Ser 6-8: 13 1105-1345 Sep 22",
            "file_title": "CAMS Annual Report",
            "url": "https://caarmydata.blob.core.windows.net/resources/20220913-U-DAS4-AC_CAMS_Annual_Report.pdf",
            "img": "cams-annual.png"
            },
            {"id": 9,
            "title": "Reconstitution",
            "description": "Ser 9: 13 1345-1445 Sep 22",
            "file_title": "Reconstitution",
            "url": "https://caarmydata.blob.core.windows.net/resources/CA%20Reconstitution%20Brief%20V5.pdf",
            "img": "reconstitution.png"
            },
            {"id": 4,
            "title": "Reconstitution (IT/CT Blend)",
            "description": "Ser 9: 13 1345-1445 Sep 22",
            "file_title": "Reconstitution",
            "url": "https://caarmydata.blob.core.windows.net/resources/CA%20IT%20CT%20Blend%20Placemat_9%20Sep%202022%20v3.pdf",
            "img": "it-ct-blend.png"
            },
            {"id": 5,
            "title": "Force 2025",
            "description": "Ser 10-12: 13 1445-1615 Sep 22",
            "file_title": "Force 2025",
            "url": "https://caarmydata.blob.core.windows.net/resources/20220831-3185-1-U-CA_HQ_DLFD_SI-F2025-AC_Sep_22v3.1.BIL.pdf",
            "img": "F2025.png"
            },
            {"id": 6,
            "title": "FTSE Results (English)",
            "description": "Ser 13: 13 1445-1615 Sep 22",
            "file_title": "FTSE Results English",
            "url": "https://caarmydata.blob.core.windows.net/resources/FTSE%20Update%20for%20AC%20-%202022_EN.pdf",
            "img": "ftse-en.png"
            },
            {"id": 7,
            "title": "FTSE Results (French)",
            "description": "Ser 13: 13 1445-1615 Sep 22",
            "file_title": "FTSE Results (French)",
            "url": "https://caarmydata.blob.core.windows.net/resources/FTSE%20Update%20for%20AC%20-%202022_FR.pdf",
            "img": "ftse-fr.png"
            },
            {"id": 8,
            "title": "Defence Policy Update",
            "description": "Ser 17: 14 0840-0940 Sep 22",
            "file_title": "Defence Policy Update",
            "url": "https://caarmydata.blob.core.windows.net/resources/20220902-UU-3120-CA_HQ_DLFD-AC_Sep_22-DPU.BIL.pdf",
            "img": "dpu-update.png"
            },
        ],
        placemat_resources_list: [
            {"id": 1,
            "title": "Digital Training, Solutions, and Policies",
            "description": "Digital and data training opportunities for CA Defence Team members, solutions, and relevant policies.",
            "file_title": "Digital Training, Solutions, and Policies",
            "url": "https://caarmydata.blob.core.windows.net/resources/CA%20Digital%20Placemat%20BIL.pdf",
            "img": "digitalPlacemat.png"
            },
            {"id": 2,
            "title": "The Digital Policy Landscape (English)",
            "description": "Overview of the important policies, directives and guidance in the data/digital environment.",
            "file_title": "The Digital Policy Landscape",
            "url": "https://caarmydata.blob.core.windows.net/resources/CA%20Data%20and%20Digital%20Policy%20Placemat.pdf",
            "img": "dig-policy.png"
            },
            {"id": 3,
            "title": "CA Data Governance Framework",
            "description": "Nested in the ADM(DIA) Data Governance Framework, this is how the CA is addressing Data Governance.",
            "file_title": "CA Data Governance Framework",
            "url": "https://caarmydata.blob.core.windows.net/resources/20211207-U-CA_Data_Governance.pdf",
            "img": "data-governance.png"
            },
            {"id": 4,
            "title": "Defence X (formerly DRMIS Mod)",
            "description": "An overview of the Defence-X projects, scope, and timeline.",
            "file_title": "Defence X (formerly DRMIS Mod)",
            "url": "https://caarmydata.blob.core.windows.net/resources/20220121-UNCLASS-DefenceX_Placemat.pdf",
            "img": "defencex.png"
            },
        ],
        orders_resources_list: [
            {"id": 1,
            "title": "Army Week 2022 Order",
            "description": "Complete order for Army Week (Bilingual)",
            "file_title": "Army Week 2022 Order",
            "url": "https://caarmydata.blob.core.windows.net/resources/202200815_1110-1_DAS_U_Army_Week_2022_Operation_Order_Bil.pdf",
            "img": "army-week-order.png"
            },
        ],
        sals_resources_list: [
            {"id": 1,
            "title": "SALS Participant and DA Bios",
            "description": "Learn about our participants and DAs",
            "file_title": "SALS Participant and DA Bios",
            "url": "https://caarmydata.blob.core.windows.net/resources/SALS%20-%20DA%20and%20FVEY%20SM%20Participant%20-%20Bios.pdf",
            "img": "sals-bios.png"
            },
        ],
        dashboard_list: [
            {
            "id": 1,
            "title": "Commander and Senior Leader Dashboard",
            "description": "Peruse the Commander and Senior Leader Bios of the CA.",
            "file_title": "CA General Officers",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=98a139c3-e995-41a5-9acf-bcfdf554e6f2&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "CAGenOffss.jpg"
            },
            {
            "id": 2,
            "title": "Canadian Army Modernization Strategy",
            "description": "Tracking progress of initiatives and sub-initiatives on the road to modernization.",
            "file_title": "CAMS Placemat Desktop",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=0cdaec13-9fa7-425f-bd70-6b21a74a7f94&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "camsss.jpg"
            },
            {
            "id": 3,
            "title": "Army 101 Dashboard",
            "description": "Dashboards and placemats that describe the Canadian Army and its structure.",
            "file_title": "Army 101",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=12d0edf4-365c-4965-9892-c29be534591c&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "army101ss.jpg"
            },
            {
            "id": 4,
            "title": "2022 Army Week Registration",
            "description": "Take a look at Army Week attendance metrics.",
            "file_title": "2022 Army Week Registration",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=5a75de14-c141-463c-9509-80d3c17d98e9&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "armyweekregss.jpg"
            },
            {
            "id": 5,
            "title": "CA Interactive Org Chart",
            "description": "See how the CA is structured and where the various organizations are located.",
            "file_title": "CA Org Structure",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=dad185ad-5fd1-4c2f-b56d-bbc512e52025&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "orgstructss.jpg"
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
        event_zoomlink: "Meeting Link",
        event_floorplan: "Floorplan",
        event_download: "Download",
        event_display: "View PDF",
        event_details: "Event Details",
        strong_proud_ready: "Strong, Proud, Ready",
        sign_in: "Sign In",
        contact_us: "Contact Us",
        resources_view: "View"
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
        resources_view: "Affichez",
        dashboards_pagetitle: "Tableaux de bord",
        army_council_resources_list: [
            {
            "id": 1,
            "title": "DAS Intro Slides",
            "description": "Ser 1: 13 0830-0850 Sep 22",
            "file_title": "DAS Intro Slides",
            "url": "https://caarmydata.blob.core.windows.net/resources/01%20-%20AC%2022-04%20DAS%20Intro%20Slides.pdf",
            "img": "DAS-Intro-Slides.png"
            },
            {
            "id": 2,
            "title": "Business Planning and Risk",
            "description": "Ser 5: 13 1035-1105 Sep 22",
            "file_title": "Business Planning and Risk",
            "url": "https://caarmydata.blob.core.windows.net/resources/DAS%202%20-%20Army%20Council%20Brief%20(Sep%2022).pdf",
            "img": "fin-update.png"
            },
            {
            "id": 3,
            "title": "CAMS Annual Report",
            "description": "Ser 6-8: 13 1105-1345 Sep 22",
            "file_title": "CAMS Annual Report",
            "url": "https://caarmydata.blob.core.windows.net/resources/20220913-U-DAS4-AC_CAMS_Annual_Report.pdf",
            "img": "cams-annual.png"
            },
            {"id": 4,
            "title": "Reconstitution (IT/CT Blend)",
            "description": "Ser 9: 13 1345-1445 Sep 22",
            "file_title": "Reconstitution",
            "url": "https://caarmydata.blob.core.windows.net/resources/CA%20IT%20CT%20Blend%20Placemat_9%20Sep%202022%20v3.pdf",
            "img": "it-ct-blend.png"
            },
            {"id": 9,
            "title": "Reconstitution",
            "description": "Ser 9: 13 1345-1445 Sep 22",
            "file_title": "Reconstitution",
            "url": "https://caarmydata.blob.core.windows.net/resources/CA%20Reconstitution%20Brief%20V5.pdf",
            "img": "reconstitution.png"
            },
            {"id": 5,
            "title": "Force 2025",
            "description": "Ser 10-12: 13 1445-1615 Sep 22",
            "file_title": "Force 2025",
            "url": "https://caarmydata.blob.core.windows.net/resources/20220831-3185-1-U-CA_HQ_DLFD_SI-F2025-AC_Sep_22v3.1.BIL.pdf",
            "img": "F2025.png"
            },
            {"id": 6,
            "title": "FTSE Results (English)",
            "description": "Ser 13: 13 1445-1615 Sep 22",
            "file_title": "FTSE Results English",
            "url": "https://caarmydata.blob.core.windows.net/resources/FTSE%20Update%20for%20AC%20-%202022_EN.pdf",
            "img": "ftse-en.png"
            },
            {"id": 7,
            "title": "FTSE Results (French)",
            "description": "Ser 13: 13 1445-1615 Sep 22",
            "file_title": "FTSE Results (French)",
            "url": "https://caarmydata.blob.core.windows.net/resources/FTSE%20Update%20for%20AC%20-%202022_FR.pdf",
            "img": "ftse-fr.png"
            },
            {"id": 8,
            "title": "Defence Policy Update",
            "description": "Ser 17: 14 0840-0940 Sep 22",
            "file_title": "Defence Policy Update",
            "url": "https://caarmydata.blob.core.windows.net/resources/20220902-UU-3120-CA_HQ_DLFD-AC_Sep_22-DPU.BIL.pdf",
            "img": "dpu-update.png"
            },
        ],
        placemat_resources_list: [
            {"id": 1,
            "title": "Digital Training, Solutions, and Policies",
            "description": "Digital and data training opportunities for CA Defence Team members, solutions, and relevant policies.",
            "file_title": "Digital Training, Solutions, and Policies",
            "url": "https://caarmydata.blob.core.windows.net/resources/CA%20Digital%20Placemat%20BIL.pdf",
            "img": "digitalPlacemat.png"
            },
            {"id": 2,
            "title": "The Digital Policy Landscape (English)",
            "description": "Overview of the important policies, directives and guidance in the data/digital environment.",
            "file_title": "The Digital Policy Landscape",
            "url": "https://caarmydata.blob.core.windows.net/resources/CA%20Data%20and%20Digital%20Policy%20Placemat.pdf",
            "img": "dig-policy.png"
            },
            {"id": 3,
            "title": "CA Data Governance Framework",
            "description": "Nested in the ADM(DIA) Data Governance Framework, this is how the CA is addressing Data Governance.",
            "file_title": "CA Data Governance Framework",
            "url": "https://caarmydata.blob.core.windows.net/resources/20211207-U-CA_Data_Governance.pdf",
            "img": "data-governance.png"
            },
            {"id": 4,
            "title": "Defence X (formerly DRMIS Mod)",
            "description": "An overview of the Defence-X projects, scope, and timeline.",
            "file_title": "Defence X (formerly DRMIS Mod)",
            "url": "https://caarmydata.blob.core.windows.net/resources/20220121-UNCLASS-DefenceX_Placemat.pdf",
            "img": "defencex.png"
            },
        ],
        orders_resources_list: [
            {"id": 1,
            "title": "Army Week 2022 Order",
            "description": "Complete order for Army Week (Bilingual)",
            "file_title": "Army Week 2022 Order",
            "url": "https://caarmydata.blob.core.windows.net/resources/202200815_1110-1_DAS_U_Army_Week_2022_Operation_Order_Bil.pdf",
            "img": "army-week-order.png"
            },
        ],
        sals_resources_list: [
            {"id": 1,
            "title": "SALS Participant and DA Bios",
            "description": "Learn about our participants and DAs",
            "file_title": "SALS Participant and DA Bios",
            "url": "https://caarmydata.blob.core.windows.net/resources/SALS%20-%20DA%20and%20FVEY%20SM%20Participant%20-%20Bios.pdf",
            "img": "sals-bios.png"
            },
        ],
        dashboard_list: [
            {
            "id": 1,
            "title": "Tableau de bord du commandant et de l'équipe des hauts dirigeants",
            "description": "Consultez les biographies du commandant et des hauts dirigeants de l'AC.",
            "file_title": "CA General Officers",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=98a139c3-e995-41a5-9acf-bcfdf554e6f2&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "CAGenOffss.jpg"
            },
            {
            "id": 2,
            "title": "Stratégie de modernisation de l'Armée canadienne",
            "description": "Suivi des progrès des initiatives et des sous-initiatives sur la voie de la modernisation.",
            "file_title": "CAMS Placemat Desktop",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=0cdaec13-9fa7-425f-bd70-6b21a74a7f94&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "camsss.jpg"
            },
            {
            "id": 3,
            "title": "Tableau de bord Armée 101",
            "description": "Tableaux de bord qui décrivent l'Armée canadienne et sa structure.",
            "file_title": "Army 101",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=12d0edf4-365c-4965-9892-c29be534591c&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "army101ss.jpg"
            },
            {
            "id": 4,
            "title": "Inscription pour la Semaine de l’Armée 2022",
            "description": "Regardez les statistiques sur les inscriptions pour la Semaine de l’Armée.",
            "file_title": "Inscription pour la Semaine de l’Armée 2022",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=5a75de14-c141-463c-9509-80d3c17d98e9&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "armyweekregss.jpg"
            },
            {
            "id": 5,
            "title": "Organigramme interactif de l'AC",
            "description": "Voyez comment l'AC est structurée et où se trouvent les différentes organisations.",
            "file_title": "CA Org Structure",
            "embed_url": "https://app.powerbi.com/reportEmbed?reportId=dad185ad-5fd1-4c2f-b56d-bbc512e52025&autoAuth=true&ctid=325b4494-1587-40d5-bb31-8b660b7f1038",
            "img": "orgstructss.jpg"
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
        event_zoomlink: "Lien pour reunion",
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