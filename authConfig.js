
export const msalConfig = {
    auth: {
      clientId: "c28f6ed2-531f-4b07-b711-096b24d1191a",
      authority: "https://login.microsoftonline.com/325b4494-1587-40d5-bb31-8b660b7f1038", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "https://armyweek.azurewebsites.net",
      postLogoutRedirectUri: "https://armyweek.azurewebsites.net"
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };

export const msalLocalConfig = {
  auth: {
    clientId: "c28f6ed2-531f-4b07-b711-096b24d1191a",
    authority: "https://login.microsoftonline.com/325b4494-1587-40d5-bb31-8b660b7f1038", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "http://localhost:3000",
    postLogoutRedirectUri: "http://localhost:3000"
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read", "openid", "profile", "calendars.read"]
  };

  let start_datetime = new Date()
  console.log('start_datetime', start_datetime)
  let start = start_datetime.toISOString()
  console.log('start', start)
  let end_datetime = start_datetime.setDate(start_datetime.getDate() + 30)
  console.log('end_datetime', end_datetime)
  let anotherDate = new Date(end_datetime)
  console.log('another date', anotherDate)
  let end = anotherDate.toISOString()
  console.log('end', end)

  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
      graphMePhotoEndpoint: "https://graph.microsoft.com/v1.0/me/photos/48x48/$value",
      graphMeCalendarEndpoint: `https://graph.microsoft.com/v1.0/me/calendarview?startDateTime=${start}&endDateTime=${end}`,
  };