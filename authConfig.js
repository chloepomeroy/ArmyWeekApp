
export const msalConfig = {
  auth: {
    clientId: "46c77928-d87b-47be-86d7-f1db71395644",
    authority: "https://login.microsoftonline.com/325b4494-1587-40d5-bb31-8b660b7f1038", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "https://armyweek.cloud.forces.gc.ca",
    postLogoutRedirectUri: "https://armyweek.cloud.forces.gc.ca"
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

export const msalLocalConfig = {
auth: {
  clientId: "46c77928-d87b-47be-86d7-f1db71395644",
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
   scopes: ["User.Read", "profile"]
  };

  // Times for calendar (not implemented)
  let start_datetime = new Date()
  let start = start_datetime.toISOString()
  let end_datetime = start_datetime.setDate(start_datetime.getDate() + 30)
  let anotherDate = new Date(end_datetime)
  let end = anotherDate.toISOString()

  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
      graphMePhotoEndpoint: "https://graph.microsoft.com/v1.0/me/photos/48x48/$value",
      graphMeCalendarEndpoint: `https://graph.microsoft.com/v1.0/me/calendarview?startDateTime=${start}&endDateTime=${end}`,
  };