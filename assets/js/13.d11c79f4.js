(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{436:function(e,t,a){e.exports=a.p+"assets/img/eas-update-terminal.21147642.png"},437:function(e,t,a){e.exports=a.p+"assets/img/eas-update-preview.f40476fd.png"},494:function(e,t,a){"use strict";a.r(t);var o=a(53),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("PageHeader"),e._v(" "),o("h2",{attrs:{id:"more-about-react-native-production-builds"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#more-about-react-native-production-builds"}},[e._v("#")]),e._v(" More about React Native Production Builds")]),e._v(" "),o("ul",[o("li",[e._v("Expo is a great tool for developing and testing your React Native Apps")]),e._v(" "),o("li",[e._v("Expo CLI lets you quickly and easily create a project and also test things on an iOS simulator or Android Emulator.")]),e._v(" "),o("li",[e._v("The Expo client app lets you test your app in live devices that are on the same wifi network.")]),e._v(" "),o("li",[e._v("However, eventually you want to be able to test the app on real devices that are not on the same network.")]),e._v(" "),o("li",[e._v("That is where the Expo website comes into play.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.expo.io/versions/latest/distribution/building-standalone-apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("Expo Native Build documentation"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("In more recent versions of Expo, the Expo publish command process has been replaced with the "),o("strong",[e._v("EAS")]),e._v(" service.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.expo.dev/guides/overview/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official Reference for EAS and the update command"),o("OutboundLink")],1)])]),e._v(" "),o("h3",{attrs:{id:"expo-eas-account"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#expo-eas-account"}},[e._v("#")]),e._v(" Expo/EAS Account")]),e._v(" "),o("ul",[o("li",[e._v("You will need to go to "),o("a",{attrs:{href:"https://expo.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Expo.io"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("SIGN UP for an account. Use your @algonquinlive.com address for now. You can create another account with your personal email address later, for work that you do after graduation.")]),e._v(" "),o("li",[e._v("Once you have this account created and are logged in you will be able to visit the builds for your projects.")]),e._v(" "),o("li",[e._v("We will use the EAS CLI to upload the project.")]),e._v(" "),o("li",[e._v("EAS is the "),o("strong",[e._v("Expo Application Services")]),e._v(" and uses the same Expo account.")]),e._v(" "),o("li",[e._v("The URL for your project will be something like the following. The first one is the older version with expo publish and the second one is the newer one that uses EAS:")])]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("https://expo.io/@<your-User-Name>/<your-slug>/builds\nhttps://expo.dev/accounts/<your-User-Name>/projects/<your-slug>/builds\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br")])]),o("ul",[o("li",[e._v("Replace the "),o("code",[e._v("<your-User-Name>")]),e._v(" with your own Expo username")]),e._v(" "),o("li",[e._v("Replace the "),o("code",[e._v("<your-slug>")]),e._v(" with the "),o("code",[e._v("slug name")]),e._v(" for your project from your "),o("code",[e._v("app.json")]),e._v(" file.")]),e._v(" "),o("li",[e._v("You can find the "),o("code",[e._v("slug name")]),e._v(" inside your "),o("code",[e._v("app.json")]),e._v(" file with the rest of the settings for your React Native project.")]),e._v(" "),o("li",[e._v("This page will show a list of the different builds that you have done for your project as well as the status of each build. ie. Pending, In Progress, Complete...")])]),e._v(" "),o("h2",{attrs:{id:"app-config"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#app-config"}},[e._v("#")]),e._v(" App Config")]),e._v(" "),o("p",[e._v("If you want to learn more about the configuration settings for your Expo React Native app, then here is "),o("a",{attrs:{href:"https://docs.expo.dev/workflow/configuration/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the official guide to config settings"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("There are several commands that we use with the EAS CLI - "),o("code",[e._v("update")]),e._v(", "),o("code",[e._v("build")]),e._v(", and "),o("code",[e._v("submit")]),e._v(". It is important to understand these commands and what they each do.")]),e._v(" "),o("h2",{attrs:{id:"eas-update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#eas-update"}},[e._v("#")]),e._v(" EAS Update")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://docs.expo.dev/eas-update/introduction/",target:"_blank",rel:"noopener noreferrer"}},[e._v("EAS Update reference guide"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("EAS update")]),e._v(" commands will update the images, assets, TS and JS code that you have been writing, testing and altering with the expo cli commands in the Simulators, Emulators, and your personal\ndevices.")]),e._v(" "),o("p",[e._v("These commands are not updating anything locally, it is updating your project on the EAS Cloud servers.")]),e._v(" "),o("p",[e._v("Once you have the EAS project created on expo.dev and connected to your local project then install the "),o("code",[e._v("expo-updates")]),e._v(" modules.")]),e._v(" "),o("div",{staticClass:"language-bash line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("npx expo "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" expo-updates\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("Then run these config commands in the terminal which will update your project "),o("code",[e._v("app.json")]),e._v(" file and create the "),o("code",[e._v("eas.json")]),e._v(" file.")]),e._v(" "),o("div",{staticClass:"language-bash line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("eas update:configure\neas build:configure\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br")])]),o("p",[e._v("Select the "),o("code",[e._v("All")]),e._v(" option")]),e._v(" "),o("p",[e._v("Once these steps are done you will be able to run the build commands and generate the binaries for both Android and iOS.")]),e._v(" "),o("p",[e._v("Now you will continue to edit and test your React Native app as per normal. Start your local build process with "),o("code",[e._v("npm run start")]),e._v(". Then you can edit your app and see the changes in a simulator,\nemulator, or local device.")]),e._v(" "),o("p",[e._v("To push those changes to the EAS cloud server we run a command like this:")]),e._v(" "),o("div",{staticClass:"language-bash line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("eas update --branch "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("branch"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" --message "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("message"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("Where "),o("code",[e._v("[branch]")]),e._v(" is "),o("code",[e._v("preview")]),e._v(" or "),o("code",[e._v("production")]),e._v(" and the "),o("code",[e._v("[message]")]),e._v(" is a message like a git commit message.")]),e._v(" "),o("p",[e._v("After running the "),o("code",[e._v("eas update")]),e._v(" command you will see output in your terminal similar to this:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(436),alt:"terminal eas update output"}})]),e._v(" "),o("p",[e._v("If you click on the link to visit the expo website with the settings for the project, then you will see the "),o("code",[e._v("Updates")]),e._v(" tab on the left selected and a list of binary builds for iOS and Android. Each\nbuild will have a preview button that you can click and see a QR code that you can open with an appropriate device.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(437),alt:"update preview"}})]),e._v(" "),o("p",[e._v("If you open the preview or production version via the QR code then you can have a preview or production version of the app running on a device.")]),e._v(" "),o("p",[e._v("Each time you are running the "),o("code",[e._v("eas update")]),e._v(" command, you are uploading a new version of the assets and your scripts. It does not change things on the native side of the app.")]),e._v(" "),o("h2",{attrs:{id:"eas-build"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#eas-build"}},[e._v("#")]),e._v(" EAS Build")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://docs.expo.dev/build/introduction/",target:"_blank",rel:"noopener noreferrer"}},[e._v("EAS Build reference guide"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("EAS build")]),e._v(" command will create the binary files and actual deployable version of your Android and iOS app.")]),e._v(" "),o("div",{staticClass:"language-bash line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("eas build --platform ios\neas build --platform android\neas build --platform all\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br"),o("span",{staticClass:"line-number"},[e._v("3")]),o("br")])]),o("p",[e._v("When the command is run you will be prompted for details about the build.")]),e._v(" "),o("p",[e._v("For Android:")]),e._v(" "),o("ul",[o("li",[e._v("you will need to provide or confirm an application id.")]),e._v(" "),o("li",[e._v("you will be asked about creating a new Keystore.")])]),e._v(" "),o("p",[e._v("For iOS:")]),e._v(" "),o("ul",[o("li",[e._v("you will need to confirm or provide a bundle identifier.")]),e._v(" "),o("li",[e._v("you will be prompted to login with your Apple Developer account credentials. If you have a personal Apple Developer account then you will be able to do everything including create an Apple\nDistribution Certificate. If you log in with your Algonquin Media & Design Apple Developer account credentials then you can do everything except create an Apple Distribution Certificate. However,\nwithout the distribution certificate it means that you cannot upload your app to the App Store.")])]),e._v(" "),o("p",[e._v("So with EAS build we can build the Android apps but not the iOS ones.")]),e._v(" "),o("h2",{attrs:{id:"eas-submit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#eas-submit"}},[e._v("#")]),e._v(" EAS Submit")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://docs.expo.dev/submit/introduction/",target:"_blank",rel:"noopener noreferrer"}},[e._v("EAS Submit reference guide"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("EAS Submit")]),e._v(" command is how you submit your binary app files that you created with the "),o("code",[e._v("eas build")]),e._v(" command to the actual app stores.")]),e._v(" "),o("h3",{attrs:{id:"sharing-with-clients-older-version-of-expo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sharing-with-clients-older-version-of-expo"}},[e._v("#")]),e._v(" Sharing with clients (Older version of EXPO)")]),e._v(" "),o("ul",[o("li",[e._v("If you want a friend or a client to see your app using the Expo client app as the loader then you can give them this version of the URL. "),o("strong",[e._v("THIS IS FOR THE OLDER VERSION of EXPO")]),e._v(".")])]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("https://expo.io/@yourUserName/slug-name/\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("ul",[o("li",[e._v("If you send someone to that URL they will see the QR code, which can be scanned with the Expo client to install and run your App.")]),e._v(" "),o("li",[e._v("You "),o("strong",[e._v("WILL")]),e._v(" have to get your client to install the Expo client app.")]),e._v(" "),o("li",[e._v("In your "),o("code",[e._v("app.json")]),e._v(" file you can set the "),o("code",[e._v('"privacy"')]),e._v(" setting to "),o("code",[e._v('"unlisted"')]),e._v(" or "),o("code",[e._v('"public"')]),e._v(".")]),e._v(" "),o("li",[e._v("If the project is set to public then people can search for your app.")]),e._v(" "),o("li",[e._v("If it is unlisted then they need to know the URL.")]),e._v(" "),o("li",[e._v("There is a link to use the browser to see the code but this requires the purchase of another supporting program - "),o("code",[e._v("Appetize")]),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"sharing-with-clients-through-eas"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sharing-with-clients-through-eas"}},[e._v("#")]),e._v(" Sharing with Clients (through EAS)")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("If you are using "),o("code",[e._v("EAS")]),e._v(" and you want to share a demo version of your app, the client will still need to install the "),o("code",[e._v("Expo Go")]),e._v(" app on their own device.")])]),e._v(" "),o("li",[o("p",[e._v("All you need to do is run the "),o("code",[e._v("eas update")]),e._v(" command for your project, after having run the commands to connect with and configure EAS for your project. Then you will have the preview buttons that\nshow the QR code. You can share the QR codes or the "),o("code",[e._v("exp://")]),e._v(" link with your client to open on their phone.")])])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);