// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  GMAP_KEY: "AIzaSyD6DEW05AQ8M_hrpSI7eTE3jbZB9k7c0Oc",
  // GOOGLE_CLIENT_ID:
  //   "112936390114-hb3eeajuhemp9ls1n4i7cag8apf07mf8.apps.googleusercontent.com",
  // GOOGLE_CLIENT_SECRET: "bohGfi5VZz7Yd4kGgWkUJimF",
  GOOGLE_CLIENT_ID:
    "376011943773-v60garkus5cc78ca6cphrp6bj7mgh69o.apps.googleusercontent.com",
  GOOGLE_CLIENT_SECRET: "NwQBTXbJ5PqhUAQGM13nzzlq",
  // socketUrl: "http://localhost:3000",
  // API_URL: "http://localhost:3000",
  socketUrl: "https://aom.ndever.nyc:3000",
  API_URL: "https://aom.ndever.nyc:3000",
  ARTIST_IMG: "/uploads/artist/",
  USER_IMG: "/uploads/user/",
  ARTIST_MEDIA: "/uploads/media/",
  ARTIST_TRACK: "/uploads/track/",
  // FB_APPID: 1924632120949205,
  FB_APPID: 591838207995165,
  // FB_APPID: 230189408749086,
  STRIPE_PUB_KEY: "pk_test_78OzF2o8zLt5dc5QfPI8hpNS",
};
