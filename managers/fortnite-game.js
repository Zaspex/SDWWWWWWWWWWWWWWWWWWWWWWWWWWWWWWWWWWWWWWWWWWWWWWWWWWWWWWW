module.exports = (app) => {
    app.get("/content/api/pages/fortnite-game", function (req, res) {

        var season
        if (req.headers["user-agent"]) {
            try {
                season = req.headers["user-agent"].split("-")[1].split(".")[0]
                if (season == 10) season = "x"
            } catch {
                season = 2
            }
        } else season = 2

        res.json({
            "jcr:isCheckedOut": true,
            _title: "Fortnite Game",
            "jcr:baseVersion": "a7ca237317f1e7883b3279-c38f-4aa7-a325-e099e4bf71e5",
            _activeDate: "2017-08-30T03:20:48.050Z",
            lastModified: new Date(),
            _locale: "en-US",
            battleroyalenewsv2: {
                news: {
                    motds: [
                        {
                            entryType: "Rift Sucks lol",
                            image: config.newsimage,
                            titleImage: config.newstitleImage,
                            hidden: false,
                            videoMute: false,
                            tabTitleOverride: "ZPXDev",
                            _type: "CommonUI Simple Message MOTD",
                            title: config.newstitle,
                            body: config.newsbody,
                            videoLoop: false,
                            videoStreamingEnabled: false,
                            sortingPriority: 0,
                            id: `ZPXDevNews`,
                            spotlight: false
                        }
                    ]
                }
            },
            emergencynoticev2: {
                news: {
                    platform_messages: [],
                    _type: "Battle Royale News",
                    messages: [
                        {
                            hidden: false,
                            _type: "CommonUI Simple Message Base",
                            subgame: "br",
                            title: config.newacnoncementtitle,
                            body: config.newsanoncement,
                            spotlight: true
                        }
                    ]
                },
                _title: "emergencynoticev2",
                _activeDate: new Date(),
                lastModified: new Date(),
                _locale: "en-US"
            },
            dynamicbackgrounds: {
                "jcr:isCheckedOut": true,
                backgrounds: {
                    backgrounds: [
                        {
                            stage: `season${season}`,
                            _type: "DynamicBackground",
                            key: "lobby"
                        },
                        {
                            stage: `season${season}`,
                            _type: "DynamicBackground",
                            key: "vault"
                        }
                    ],
                    "_type": "DynamicBackgroundList"
                },
                _title: "dynamicbackgrounds",
                _noIndex: false,
                "jcr:baseVersion": "a7ca237317f1e71f17852c-bccd-4be6-89a0-1bb52672a444",
                _activeDate: new Date(),
                lastModified: new Date(),
                _locale: "en-US"
            },
            "shopSections": {
                "jcr:isCheckedOut": true,
                "_title": "shop-sections",
                "sectionList": {
                    "_type": "ShopSectionList",
                    "sections": [
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 94,
                            "bHidden": false,
                            "sectionId": "SurvivorsInArms",
                            "bShowTimer": true,
                            "sectionDisplayName": "Survivors In Arms",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 95,
                            "bHidden": false,
                            "sectionId": "MasterChief",
                            "bShowTimer": true,
                            "sectionDisplayName": "Master Chief",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 95,
                            "bHidden": false,
                            "sectionId": "Kratos",
                            "bShowTimer": true,
                            "sectionDisplayName": "Kratos",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 100,
                            "bHidden": false,
                            "sectionId": "PizoLocker",
                            "bShowTimer": true,
                            "sectionDisplayName": "Pizo\u0027s Locker",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 100,
                            "bHidden": false,
                            "sectionId": "BenjyfishyLocker",
                            "bShowTimer": true,
                            "sectionDisplayName": "Benjyfishy\u0027s Locker",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 100,
                            "bHidden": false,
                            "sectionId": "NickEh30Locker",
                            "bShowTimer": true,
                            "sectionDisplayName": "NickEh30\u0027s Locker",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 50,
                            "bHidden": false,
                            "sectionId": "Featured",
                            "bShowTimer": true,
                            "sectionDisplayName": "Featured",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 49,
                            "bHidden": false,
                            "sectionId": "Featured2",
                            "bShowTimer": false,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": false,
                            "sectionId": "CustomizeHero",
                            "bShowTimer": true,
                            "sectionDisplayName": "Customize Your Hero!",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 64,
                            "bHidden": false,
                            "sectionId": "HeroGear",
                            "bShowTimer": true,
                            "sectionDisplayName": "Hero Gear",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 60,
                            "bHidden": false,
                            "sectionId": "RepYourTeam",
                            "bShowTimer": true,
                            "sectionDisplayName": "Rep Your Team",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 59,
                            "bHidden": false,
                            "sectionId": "RepYourTeam2",
                            "bShowTimer": true,
                            "sectionDisplayName": "Rep Your Team",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 58,
                            "bHidden": false,
                            "sectionId": "Referees",
                            "bShowTimer": true,
                            "sectionDisplayName": "Referees",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 50,
                            "bHidden": false,
                            "sectionId": "Icons",
                            "bShowTimer": true,
                            "sectionDisplayName": "Icons",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 40,
                            "bHidden": false,
                            "sectionId": "Daily",
                            "bShowTimer": true,
                            "sectionDisplayName": "Daily",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 39,
                            "bHidden": false,
                            "sectionId": "Daily2",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 95,
                            "bHidden": false,
                            "sectionId": "MasterChiefB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Master Chief",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 95,
                            "bHidden": false,
                            "sectionId": "KratosB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Kratos",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 100,
                            "bHidden": false,
                            "sectionId": "PizoLockerB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Pizo\u0027s Locker",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 60,
                            "bHidden": false,
                            "sectionId": "Special",
                            "bShowTimer": true,
                            "sectionDisplayName": "Special Offers",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 59,
                            "bHidden": false,
                            "sectionId": "Special2",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 58,
                            "bHidden": false,
                            "sectionId": "Special3",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": false,
                            "sectionId": "StarWars",
                            "bShowTimer": true,
                            "sectionDisplayName": "Star Wars",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 93,
                            "bHidden": false,
                            "sectionId": "SurvivorsInArmsB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Survivors In Arms",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 40,
                            "bHidden": false,
                            "sectionId": "Season",
                            "bShowTimer": true,
                            "sectionDisplayName": "\u0027Tis the Season",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 0,
                            "bHidden": false,
                            "sectionId": "Season2",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 0,
                            "bHidden": false,
                            "sectionId": "Season3",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 0,
                            "bHidden": false,
                            "sectionId": "Season4",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 0,
                            "bHidden": false,
                            "sectionId": "Season5",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 0,
                            "bHidden": false,
                            "sectionId": "Season6",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 0,
                            "bHidden": false,
                            "sectionId": "Season7",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 0,
                            "bHidden": false,
                            "sectionId": "Season8",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 0,
                            "bHidden": false,
                            "sectionId": "Season9",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 0,
                            "bHidden": false,
                            "sectionId": "Season10",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 95,
                            "bHidden": false,
                            "sectionId": "KratosC",
                            "bShowTimer": true,
                            "sectionDisplayName": "Kratos",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "bHidden": false,
                            "sectionId": "MasterChiefC",
                            "bShowTimer": true,
                            "sectionDisplayName": "Master Chief",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 100,
                            "bHidden": false,
                            "sectionId": "BenjyfishyLockerB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Benjyfishy\u0027s Locker",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 100,
                            "bHidden": false,
                            "sectionId": "NickEh30LockerB",
                            "bShowTimer": true,
                            "sectionDisplayName": "NickEh30\u0027s Locker",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 50,
                            "bHidden": false,
                            "sectionId": "IconsB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Icons",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 60,
                            "bHidden": false,
                            "sectionId": "RepYourTeamB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Rep Your Team",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 59,
                            "bHidden": false,
                            "sectionId": "RepYourTeam2B",
                            "bShowTimer": true,
                            "sectionDisplayName": "Rep Your Team",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 58,
                            "bHidden": false,
                            "sectionId": "RefereesB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Referees",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": false,
                            "sectionId": "StarWarsB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Star Wars",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": false,
                            "sectionId": "StartParty",
                            "bShowTimer": true,
                            "sectionDisplayName": "Start the Party!",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 64,
                            "bHidden": false,
                            "sectionId": "PartyGear",
                            "bShowTimer": true,
                            "sectionDisplayName": "Party Gear",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 64,
                            "bHidden": false,
                            "sectionId": "TurnMusicUp",
                            "bShowTimer": true,
                            "sectionDisplayName": "Turn The Music Up!",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": false,
                            "sectionId": "SpookyOffers",
                            "bShowTimer": true,
                            "sectionDisplayName": "Spooky Offers",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 64,
                            "bHidden": false,
                            "sectionId": "SpookyOffers2",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": false,
                            "sectionId": "Fortnitemares",
                            "bShowTimer": true,
                            "sectionDisplayName": "Fortnitemares",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": false,
                            "sectionId": "Ghostbusters",
                            "bShowTimer": true,
                            "sectionDisplayName": "Ghostbusters",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 64,
                            "bHidden": false,
                            "sectionId": "GhostbustersGear",
                            "bShowTimer": true,
                            "sectionDisplayName": "Ghostbusters Gear",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 70,
                            "bHidden": false,
                            "sectionId": "Marvel",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 69,
                            "bHidden": false,
                            "sectionId": "Marvel2",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": false,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 68,
                            "bHidden": false,
                            "sectionId": "Marvel3",
                            "bShowTimer": false,
                            "bShowIneligibleOffers": false
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 67,
                            "bHidden": false,
                            "sectionId": "Marvel4",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 66,
                            "bHidden": false,
                            "sectionId": "Marvel5",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": false,
                            "sectionId": "Marvel6",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": false,
                            "sectionId": "BannerBrigade",
                            "bShowTimer": true,
                            "sectionDisplayName": "Banner Brigade",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 64,
                            "bHidden": false,
                            "sectionId": "BannerGear",
                            "bShowTimer": true,
                            "sectionDisplayName": "Banner Gear",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": false,
                            "sectionId": "Bundles",
                            "bShowTimer": true,
                            "sectionDisplayName": "Bundles",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": false,
                            "sectionId": "Characters",
                            "bShowTimer": true,
                            "sectionDisplayName": "Outfits",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": false,
                            "sectionId": "Backpacks",
                            "bShowTimer": true,
                            "sectionDisplayName": "Back Blings",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 0,
                            "bHidden": false,
                            "sectionId": "Pickaxes",
                            "bShowTimer": true,
                            "sectionDisplayName": "Harvesting Tools",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": false,
                            "sectionId": "Gliders",
                            "bShowTimer": true,
                            "sectionDisplayName": "Gliders",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": false,
                            "sectionId": "MusicPacks",
                            "bShowTimer": true,
                            "sectionDisplayName": "Music Packs",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": false,
                            "sectionId": "Wraps",
                            "bShowTimer": true,
                            "sectionDisplayName": "Wraps",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 80,
                            "bHidden": false,
                            "sectionId": "LimitedTime",
                            "bShowTimer": false,
                            "sectionDisplayName": "Limited Time",
                            "bShowIneligibleOffers": false
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": false,
                            "background": {
                                "stage": "default",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 90,
                            "bHidden": false,
                            "sectionId": "Battlepass",
                            "bShowTimer": false,
                            "sectionDisplayName": "Battle Pass",
                            "bShowIneligibleOffers": false
                        },
                        {
                            "bSortOffersByOwnership": false,
                            "bShowIneligibleOffersIfGiftable": false,
                            "bEnableToastNotification": false,
                            "background": {
                                "_type": "DynamicBackground"
                            },
                            "_type": "ShopSection",
                            "bHidden": false,
                            "sectionId": "Subscription",
                            "bShowTimer": false,
                            "sectionDisplayName": "Fortnite Crew",
                            "bShowIneligibleOffers": true
                        }
                    ]
                },
                "_noIndex": false,
                "jcr:baseVersion": "a7ca237317f1e79f5be10f-3d65-477f-8367-b3160c690cfe",
                "_activeDate": "2020-10-28T00:00:00.000Z",
                "lastModified": "2020-12-27T02:40:33.410Z",
                "_locale": "en-US"
            },
            shopCarousel: {
                "jcr:isCheckedOut": true,
                itemsList: {
                    _type: "ShopCarouselItemList",
                    items: [{
                        tileImage: "",
                        fullTitle: "ZPXDev",
                        hidden: false,
                        _type: "ShopCarouselItem",
                        landingPriority: 100,
                        action: "ShowOfferDetails",
                        offerId: "v2:/cc29bec6d0bdd2876fb412cf674a7960003bbb76b2eb9b930833a61b604a3b4e",
                        title: "ZPXDev"
                    }]
                },
                _title: "shop-carousel",
                _noIndex: false,
                "jcr:baseVersion": "a7ca237317f1e76d4c1405-e84c-4ece-bc50-7112ba557b33",
                _activeDate: "2020-09-25T12:00:00.000Z",
                lastModified: "2020-10-26T15:37:05.775Z",
                _locale: "en-US"
            },
            _suggestedPrefetch: []
        })
    })
}