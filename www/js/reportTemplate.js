        var reportOne = {
            "name": "reportTemplate",
            "title": "reportTemplate",
            "sections": [
                {
                    "title": "Field Notes",
                    "pages": [
                        {
                            "title": "Client Info",
                            "items": [
                                {
                                        "title": "Clientinfo",
                                        "required": true,
                                        "type": "clientinfo",
                                        "value": {
                                            "firstName": "",
                                            "lastName": "",
                                            "address": "",
                                            "addressTwo": "",
                                            "city": "",
                                            "state": "",
                                            "postalCode": ""
                                        }
                                },
                                {
                                    "title": "Report ID",
                                        "required": true,
                                        "type": "text",
                                        "value": ""
                                },
                                {
                                    "title": "Report Date",
                                        "required": true,
                                        "type": "date",
                                        "value": ""
                                },
                                {
                                    "title": "Client Info Images",
                                        "type": "image",
                                        "content": []
                                }

                           ],
                            "showvalue": false
                        },
                        {
                            "title": "Property Specifications",
                            "items": [
                                {
                                "title": "Conditions",

                                    "type": "presettext",
                                    "showvalue": false,
                                    "showcontent": true,
                                    "content": "This Report concerns the visual [INSERT OPTION] inspection of an approximately [CALCULATE & INSERT AGE] old, [INSERT SQFT], [INSERT TYPE OF HOME],[INSERT PROPERTY USE],[INSERT NUMBER OF STORIES],[INSERT HOUSE FRAME],[INSERT PROPERTY TYPE],[INSERT CONFIGURATIONS], built in [INSERT YEAR].  The main entrance, driveway, or street access appeared to be facing predominantely toward the [INSERT PROPERTY ORIENTATION].  The street surface was [INSERT DRIVEWAY TYPE], and vehicle parking was available [INSERT VEHICLE PARKING]. The Utilities servicing the Property identified were [INSERT UTILITES]. [UTILITES OFF] were off at the time of inspection. The locations of the main utility controls, shut-off valves, and or or disconnects are noted in the applicable mechanical sections."

                                },
                                {
                                "title": "Limitations",

                                    "type": "presettext",
                                    "showvalue": false,
                                    "showcontent": true,
                                    "content": "The [INSERT PROPERTY TYPE] was [INSERT PROPERTY OCCUPANCY] at the time of the inspection.  The inspection began at [*INSPECTION START TIME][AM or PM] and ended at roughly [*INSPECTION END TIME][AM or PM].  The weather at the time of the inspeciton was [GRAB WEATHER FORECAST FROM WEATHER.COM: Cloudy, Snowy, Icy, Windy] with [no precipitation, cloudy, sunny, rain, no rain, etc.].  Those in attendance at the time of the inspection were [INSERT PERSONS PRESENT].  Detached outbuildings, seasonally visible defects, poorly accessible components, areas that may have been hidden and or  or areas containing significant furnishings or storage are not included in the scope of this inspection."

                                },
                                {
                                "title": "Inspection Type",

                                    "required": true,
                                    "showvalue": false,
                                    "type": "select",
                                    "content": {
                                        "Full": {
                                            "m": 2
                                        },
                                        "Partial": {
                                            "m": 2
                                        },
                                        "Abbreviated": {
                                            "m": 2
                                        },
                                        "Ancillary": {
                                            "m": 2
                                        },
                                        "Limited": {
                                            "m": 2
                                        },
                                        "203(k)": {
                                            "m": 2
                                        },
                                        "Rehabilitation": {
                                            "m": 2
                                        }
                                    },
                                    "value": ""

                                },
                                {
                                "title": "Year Built",

                                    "required": true,
                                    "showvalue": false,
                                    "type": "number",
                                    "value": ""

                                },
                                {
                                "title": "Squarefeet of the Property",

                                "Squarefeet of the Property": {
                                    "required": true,
                                    "showvalue": false,
                                    "type": "number",
                                    "value": 0
                                }
                                },
                                {
                                "title": "Type of Home",

                                    "required": true,
                                    "showvalue": false,
                                    "type": "radio",
                                    "content": {
                                        "Single Family": {
                                            "m": 2
                                        },
                                        "Single Use": {
                                            "m": 2
                                        },
                                        "Multiple Use": {
                                            "m": 2
                                        },
                                        "Duplex": {
                                            "m": 2
                                        },
                                        "Triplex": {
                                            "m": 2
                                        },
                                        "Multi Family": {
                                            "m": 2
                                        },
                                        "Detatched": {
                                            "m": 2
                                        }
                                    },
                                    "value": ""

                                },
                                {
                                "title": "Property Use",

                                    "required": true,
                                    "type": "radio",
                                    "content": {
                                        "Residential": {
                                            "m": 2
                                        },
                                        "Apartment": {
                                            "m": 2
                                        },
                                        "Retail Store": {
                                            "m": 2
                                        },
                                        "Business": {
                                            "m": 2
                                        },
                                        "Industrial": {
                                            "m": 2
                                        },
                                        "Commercial": {
                                            "m": 2
                                        }
                                    },
                                    "value": ""

                                },
                                {
                                "title": "Number of Stories",

                                    "required": true,
                                    "showvalue": false,
                                    "type": "radio",
                                    "content": {
                                        "Rambler": {
                                            "m": 2
                                        },
                                        "One Level": {
                                            "m": 2
                                        },
                                        "Split-Entry": {
                                            "m": 2
                                        },
                                        "Split-Level": {
                                            "m": 2
                                        },
                                        "One Story": {
                                            "m": 2
                                        },
                                        "1 1 or 2 Story": {
                                            "m": 2
                                        },
                                        "Two-Story": {
                                            "m": 2
                                        },
                                        "Three-Story": {
                                            "m": 2
                                        },
                                        "Mid-Rise": {
                                            "m": 2
                                        },
                                        "Multi-Level": {
                                            "m": 2
                                        }
                                    },
                                    "value": ""

                                },
                                {
                                "title": "House Frame",

                                    "required": true,
                                    "showvalue": false,
                                    "type": "radio",
                                    "content": {
                                        "Wood-Framed": {
                                            "m": 2
                                        },
                                        "Steel-Framed": {
                                            "m": 2
                                        },
                                        "Concrete": {
                                            "m": 2
                                        },
                                        "CMU or Block": {
                                            "m": 2
                                        },
                                        "Masonry": {
                                            "m": 2
                                        },
                                        "Tilt-Up": {
                                            "m": 2
                                        },
                                        "Wood-Frame on Steel Carriage": {
                                            "m": 2
                                        },
                                        "ICF": {
                                            "m": 2
                                        }
                                    },
                                    "value": ""

                                },
                                {
                                "title": "Property Type",

                                    "required": true,
                                    "showvalue": false,
                                    "type": "radio",
                                    "content": {
                                        "Home": {
                                            "m": 2
                                        },
                                        "Twin Home": {
                                            "m": 2
                                        },
                                        "Town Home": {
                                            "m": 2
                                        },
                                        "Mobile Home": {
                                            "m": 2
                                        },
                                        "Log Home": {
                                            "m": 2
                                        },
                                        "Manufactured Home": {
                                            "m": 2
                                        },
                                        "Prefabbed Structure": {
                                            "m": 2
                                        },
                                        "Condominium": {
                                            "m": 2
                                        },
                                        "Building": {
                                            "m": 2
                                        },
                                        "Garage": {
                                            "m": 2
                                        },
                                        "Low-Rise": {
                                            "m": 2
                                        },
                                        "Mid-Rise": {
                                            "m": 2
                                        },
                                        "High-Rise": {
                                            "m": 2
                                        }
                                    },
                                    "value": ""

                                },
                                {
                                "title": "Configurations",

                                    "required": true,
                                    "showvalue": false,
                                    "type": "checkbox",
                                    "value": {
                                        "With Lower Parking Garage": {
                                            "c": false
                                        },
                                        "With Basement & Garage": {
                                            "c": false
                                        },
                                        "With Garage": {
                                            "c": false
                                        },
                                        "With Garage & Crawlspace": {
                                            "c": false
                                        },
                                        "With Full Basement": {
                                            "c": false
                                        },
                                        "With Daylight Basement": {
                                            "c": false
                                        },
                                        "With Basement & Crawlspace(s)": {
                                            "c": false
                                        },
                                        "With Crawlspace": {
                                            "c": false
                                        },
                                        "With Slab-On-Grade": {
                                            "c": false
                                        },
                                        "Over Adjoining Unit(s)": {
                                            "c": false
                                        },
                                        "Over Adjoining Basement Unit": {
                                            "c": false
                                        }
                                    }

                                },
                                {
                                "title": "Property Orientation",

                                    "required": false,
                                    "showvalue": false,
                                    "type": "select",
                                    "content": {
                                        "North": "",
                                        "East": "",
                                        "West": "",
                                        "South": "",
                                        "North-East": "",
                                        "North-West": "",
                                        "South-East": "",
                                        "South-West": ""
                                    },
                                    "value": ""

                                },
                                {
                                "title": "Vehicle Parking",

                                    "required": false,
                                    "showvalue": false,
                                    "type": "checkbox",
                                    "value": {
                                        "At Curbside": {
                                            "c": false
                                        },
                                        "In a Rear Alley": {
                                            "c": false
                                        },
                                        "In the Driveway": {
                                            "c": false
                                        },
                                        "In an Attached Garage(s)": {
                                            "c": false
                                        },
                                        "In a Detached Garage(s)": {
                                            "c": false
                                        },
                                        "In an Attached Carport": {
                                            "c": false
                                        },
                                        "In a Detached Carport": {
                                            "c": false
                                        },
                                        "In a Covered Parking Space": {
                                            "c": false
                                        },
                                        "In an Open Parking Space": {
                                            "c": false
                                        },
                                        "In a Secured Parking Garage": {
                                            "c": false
                                        },
                                        "In an Open Parking Garage": {
                                            "c": false
                                        },
                                        "In an Open, Striped Parking Lot": {
                                            "c": false
                                        }
                                    }

                                },
                                {
                                "title": "Utilities",

                                    "required": false,
                                    "showvalue": false,
                                    "type": "checkbox",
                                    "value": {
                                        "Electricity": {
                                            "c": false
                                        },
                                        "Water": {
                                            "c": false
                                        },
                                        "Gas": {
                                            "c": false
                                        },
                                        "Oil": {
                                            "c": false
                                        },
                                        "Propane": {
                                            "c": false
                                        }
                                    }

                                },
                                {
                                "title": "What Utilities were OFF",

                                    "required": false,
                                    "showvalue": false,
                                    "type": "checkbox",
                                    "value": {
                                        "Electricity": {
                                            "c": false
                                        },
                                        "Water": {
                                            "c": false
                                        },
                                        "Gas": {
                                            "c": false
                                        },
                                        "Oil": {
                                            "c": false
                                        },
                                        "Propane": {
                                            "c": false
                                        }
                                    }

                                },
                                {
                                "title": "Property Occupancy",

                                    "required": true,
                                    "type": "select",
                                    "content": {
                                        "Occupied": "",
                                        "Mostly Occupied": "",
                                        "Mostly Vacant": "",
                                        "Vacant": ""
                                    },
                                    "value": ""

                                },
                                {
                                "title": "Persons Present",

                                    "required": false,
                                    "showvalue": false,
                                    "type": "checkbox",
                                    "value": {
                                        "Inspector": {
                                            "c": false
                                        },
                                        "Buyer": {
                                            "c": false
                                        },
                                        "Resident": {
                                            "c": false
                                        },
                                        "Builder or Builders Rep": {
                                            "c": false
                                        },
                                        "Owner or Seller": {
                                            "c": false
                                        },
                                        "Agent": {
                                            "c": false
                                        },
                                        "Friends or Other": {
                                            "c": false
                                        }
                                    }

                                },
                                {
                                "title": "Person(s) Providing Property Access",

                                    "required": false,
                                    "showvalue": false,
                                    "type": "radio",
                                    "content": {
                                        "Inspector": "",
                                        "Buyer": "",
                                        "Resident": "",
                                        "Builder or Builders Rep": "",
                                        "Owner or Seller": "",
                                        "Agent": "",
                                        "Friends or Other": ""
                                    },
                                    "value": ""

                                },
                                {
                                "title": "Property Specifications Images",

                                    "type": "image",
                                    "content": [
                    ]

                                }
                            ],
                            "showvalue": false


                        }]
                },
                {
                    "title": "Site",
                    "pages": [
                        {
                            "title": "Evaluation",
                            "items": [
                                {
                                 "title": "Conditions",
                                 "required": false,
                                 "showvalue": false,
                                 "type": "presettext",
                                 "showcontent": true,
                                 "content": "The inspection of the site includes the building perimeter, land grade, and water drainage directly adjacent to the foundation; trees and vegetation that adversely affect the structure; walks, grade steps, driveways, patios, and retaining walls contiguous with the structure.\n The report describes the material used for driveways, walkways, patios and other flatwork around the home, the serviceability of the driveways, steps, walkways, patios, flatwork and retaining walls contiguous with the structure, proper grading and drainage slope, vegetation in close proximity to the home, and a description of any deficiencies of these systems or components."
                                },
                                {
                                        "title": "Limitations",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-170 of the Washington State Dept. of Licensing, the inspector is not required to: (1)inspect fences, privacy walls or retaining walls that are not contiguous with the structure, (2)report the condition of soil, trees, shrubs or vegetation unless they adversely affect the structure, (3)evaluate hydrological or geological conditions, (4)determine the adequacy of bulkheads, sea-walls, break- walls, and docks."

                                },
                                {
                                    "title": "Driveway",
                                    "type": "radio",
                                    "content": {
                                        "Not Applicable": {
                                            "m": 2
                                        },
                                        "Concrete": {
                                            "m": 2
                                        },
                                        "Asphalt": {
                                            "m": 2
                                        },
                                        "Pavers or stone or brick": {
                                            "m": 2
                                        },
                                        "Dirt or gravel": {
                                            "m": 2
                                        }
                                    },
                                    "value": ""

                                },
                                {
                                    "title": "Driveway Condition",
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": true,
                                                "i": [". or img or baby.jpg"],
                                                "m": 2
                                            },
                                            "Marginal": {
                                                "c": true,
                                                "i": [". or img or baby1.jpg"],
                                                "m": 2
                                            },
                                            "Poor": {
                                                "c": true,
                                                "i": [". or img or baby1.jpg"],
                                                "m": 2
                                            },
                                            "Pitched towards home": {
                                                "c": false,
                                                "i": [],
                                                "m": 2
                                            },
                                            "Typical cracks": {
                                                "c": false,
                                                "i": [],
                                                "m": 2
                                            },
                                            "Large cracks": {
                                                "c": false,
                                                "i": [],
                                                "m": 2
                                            },
                                            "Root heaving": {
                                                "c": true,
                                                "i": [". or img or baby.jpg"],
                                                "m": 2
                                            },
                                            "Uneven": {
                                                "c": false,
                                                "i": [],
                                                "m": 2
                                            },
                                            "Trip or Falling Hazard": {
                                                "c": false,
                                                "i": [],
                                                "m": 2
                                            }
                                        }

                                },
                                {

                                        "title": "Patio",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "radio",
                                        "content": {
                                            "Not Applicable": {
                                                "m": 2
                                            },
                                            "Concrete": {
                                                "m": 2
                                            },
                                            "Paver or stone or brick": {
                                                "m": 2
                                            },
                                            "Wood or Composite": {
                                                "m": 2
                                            },
                                            "Covered": {
                                                "m": 2
                                            }
                                        },
                                        "value": ""

                                },
                                {
                                    "title": "Patio Condition",
                                    "required": false,
                                    "showvalue": false,
                                    "type": "checkbox",
                                    "value": {
                                        "Satisfactory": {
                                            "c": false
                                        },
                                        "Marginal": {
                                            "c": false
                                        },
                                        "Poor": {
                                            "c": false
                                        },
                                        "Typical cracks": {
                                            "c": false
                                        },
                                        "Large cracks": {
                                            "c": false
                                        },
                                        "Gaps": {
                                            "c": false
                                        },
                                        "Holes": {
                                            "c": false
                                        },
                                        "Mildew": {
                                            "c": false
                                        },
                                        "Damage": {
                                            "c": false
                                        },
                                        "Settled": {
                                            "c": false
                                        },
                                        "Uneven Surface": {
                                            "c": false
                                        },
                                        "Trip or Falling Hazard": {
                                            "c": false
                                        }
                                    }
                                },
                                {
                                        "title": "Walkways and Steps",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Uneven": {
                                                "c": false
                                            },
                                            "Large cracks": {
                                                "c": false
                                            },
                                            "Root heaving": {
                                                "c": false
                                            },
                                            "Moss build-up": {
                                                "c": false
                                            },
                                            "Missing spacers": {
                                                "c": false
                                            },
                                            "Settled": {
                                                "c": false
                                            },
                                            "Trip hazard": {
                                                "c": false
                                            },
                                            "Missing handrails": {
                                                "c": false
                                            },
                                            "Missing safety glass": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                        "title": "Retaining Wall",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "None": {
                                                "c": false
                                            },
                                            "Verify": {
                                                "c": false
                                            },
                                            "Treated Wood": {
                                                "c": false
                                            },
                                            "Railroad Ties": {
                                                "c": false
                                            },
                                            "Concrete": {
                                                "c": false
                                            },
                                            "Concrete Blocks": {
                                                "c": false
                                            },
                                            "CMU or Blocks": {
                                                "c": false
                                            },
                                            "Gabions": {
                                                "c": false
                                            },
                                            "Rockery": {
                                                "c": false
                                            },
                                            "Masonry": {
                                                "c": false
                                            },
                                            "Cemented Stone": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                        "title": "Retaining Wall Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            },
                                            "Leaning": {
                                                "c": false
                                            },
                                            "Leaking or Drainage Concern": {
                                                "c": false
                                            },
                                            "Trip or Falling Hazard": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                    "title": "Safety Fencing Location",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Water Feature": {
                                                "c": false
                                            },
                                            "Drop-off or Retaining Wall": {
                                                "c": false
                                            },
                                            "Steep Slope": {
                                                "c": false
                                            },
                                            "TYPE (Needs Greater Definition)": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                        "title": "Safety Fencing Type",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Concrete": {
                                                "c": false
                                            },
                                            "Wood": {
                                                "c": false
                                            },
                                            "Privacy": {
                                                "c": false
                                            },
                                            "Chainlink": {
                                                "c": false
                                            },
                                            "Masonry": {
                                                "c": false
                                            },
                                            "Rail": {
                                                "c": false
                                            },
                                            "Wire": {
                                                "c": false
                                            },
                                            "Plastic or Vinyl": {
                                                "c": false
                                            }
                                        }
                                },
                                {

                                    "title": "Safety Fencing Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Maginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Missing": {
                                                "c": false
                                            },
                                            "Trip or Falling Hazard": {
                                                "c": false
                                            },
                                            "Leaning": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            },
                                            "Verify Adequate Height": {
                                                "c": false
                                            },
                                            "Hazardous": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                    "title": "Landscaping",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Inspected": {
                                                "c": false
                                            },
                                            "Poor Earth-to-Wood Separation": {
                                                "c": false
                                            },
                                            "Yard Steps": {
                                                "c": false
                                            },
                                            "Drainage": {
                                                "c": false
                                            },
                                            "Negative Surrounding Grade": {
                                                "c": false
                                            },
                                            "Overgrown Foliage": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                    "title": "Safety Concern",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "Uneven edges at settling cracks in concrete drives or walkways may pose potential trip hazards, and should be improved to provide a safe walking surface. Safe and secure handrails and guard rails are recommended at all stairways, and where landing heights pose a potential falling hazard."
                                },
                                {
                                        "title": "Evaluation Images",
                                        "type": "image",
                                        "content": []
                                }

                            ],
                            "showvalue": false
                        },
                        {
                            "title": "Attached Steps or Platforms",
                            "items": [
                                {
                                        "title": "Porch or Stoop",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Concrete": {
                                                "c": false
                                            },
                                            "Pavers or Stone or Brick": {
                                                "c": false
                                            },
                                            "Wood or Composite": {
                                                "c": false
                                            },
                                            "Covered": {
                                                "c": false
                                            }
                                        }
                                },
                                {

                                        "title": "Porch or Stoop Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Verify Attachment": {
                                                "c": false
                                            },
                                            "Loose or Missing Railings": {
                                                "c": false
                                            },
                                            "Trip Hazard(s)": {
                                                "c": false
                                            },
                                            "Typical Cracks": {
                                                "c": false
                                            },
                                            "Large Cracks": {
                                                "c": false
                                            },
                                            "Gaps or Holes": {
                                                "c": false
                                            },
                                            "Weathered Finish": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            },
                                            "Settled": {
                                                "c": false
                                            },
                                            "Earth Contact": {
                                                "c": false
                                            },
                                            "Mildew": {
                                                "c": false
                                            },
                                            "Fungal Rot or Probed": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }
                                },
                                {

                                        "title": "Yard Steps",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Uneven": {
                                                "c": false
                                            },
                                            "Large Cracks": {
                                                "c": false
                                            },
                                            "Root Heaving": {
                                                "c": false
                                            },
                                            "Moss Build-Up": {
                                                "c": false
                                            },
                                            "Missing Spacers": {
                                                "c": false
                                            },
                                            "Settled": {
                                                "c": false
                                            },
                                            "Trip Hazard": {
                                                "c": false
                                            },
                                            "Missing Handrails": {
                                                "c": false
                                            },
                                            "Missing Safety Glass": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                    "title": "Deck or Balcony",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Raised": {
                                                "c": false
                                            },
                                            "Roof-top": {
                                                "c": false
                                            },
                                            "Covered": {
                                                "c": false
                                            },
                                            "Wood or Composite": {
                                                "c": false
                                            },
                                            "PVC": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                   "title": "Deck or Balcony Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Loose or Missing Railings": {
                                                "c": false
                                            },
                                            "Weathered Finish": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            },
                                            "Settled": {
                                                "c": false
                                            },
                                            "Earth Contact": {
                                                "c": false
                                            },
                                            "Mildew": {
                                                "c": false
                                            },
                                            "Fungal Rot or Probed": {
                                                "c": false
                                            },
                                            "Verify Attachment": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                        "title": "Moisture Conditions",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "Undesirable exterior conditions conducive to pest and or or rot concerns may exist, develop, and or or worsen over time. Recommend identification and elimination of all exposed or unprotected wood in outdoor conditions or inadequate earth-to-wood separation (less than 6 to 8 inches), negative grade (ground surfaces sloping toward building), or overgrown foliage (vegetation touching wall surfaces) and maintain improved conditions to minimize risk of pest, moisture or other potential exterior concerns."

                                },
                                {

                                    "title": "Attached Steps or Platforms Images",
                                    "type": "image",
                                    "content": []

                                }
                            ],
                            "showvalue": false
                        }
                ]
                },
                {
                    "title": "Exterior",
                    "pages": [
                        {
                            "title": "Siding  or  Wall Cladding",
                            "items": [
                                {

                                    "title": "Conditions",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "An inspection of the exterior includes the visible wall coverings, trim, protective coatings and sealants, windows and doors, attached porches, decks, steps, balconies, handrails, guard-rails, carports, eaves, soffit(s), fascia(s) and visible exterior portions of chimneys. The findings show whether or not the exterior components were probed where deterioration was suspected or where clear indications of possible deterioration existed, and the manner in which the exterior components were inspected. (Probing is not required or performed when probing would damage any finished surface, or where no deterioration is suspected) The summary section describes some deficiencies of these systems or components. All readily accessible exterior components, visible at the perimeter, are inspected from ground level."

                                },
                                {

                                    "title": "Limitations",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-080 of the Washington State Dept. of Licensing, the inspector is not required to inspect buildings, decks, patios, fences, retaining walls, and other structures detached from the dwelling, safety type glass or the integrity of thermal window seals, flues or verify the presence of flue liners beyond what can be safely and readily seen from the roof or the firebox of a stove or fireplace, test or evaluate the operation of security locks, devices or systems, enter areas beneath decks with less than five feet of clearance from the underside of joists to grade, evaluate the function or condition of shutters, awnings, storm doors, storm windows, screens, and similar accessories."

                                },
                                {

                                    "title": "Type(s) of Wall Cladding",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Brick": {
                                                "c": false
                                            },
                                            "Stone": {
                                                "c": false
                                            },
                                            "Stucco": {
                                                "c": false
                                            },
                                            "Metal": {
                                                "c": false
                                            },
                                            "Vinyl": {
                                                "c": false
                                            },
                                            "Cement Board": {
                                                "c": false
                                            },
                                            "Wood": {
                                                "c": false
                                            },
                                            "Fiberboard": {
                                                "c": false
                                            },
                                            "Hardi-Board or Plank": {
                                                "c": false
                                            },
                                            "Panels or Sheets": {
                                                "c": false
                                            },
                                            "Shingles": {
                                                "c": false
                                            },
                                            "T-111": {
                                                "c": false
                                            },
                                            "Lapped": {
                                                "c": false
                                            },
                                            "T&G": {
                                                "c": false
                                            },
                                            "Vertical Channel": {
                                                "c": false
                                            },
                                            "EIFS": {
                                                "c": false
                                            },
                                            "Pre 1996 EIFS": {
                                                "c": false
                                            },
                                            "Recalled LP": {
                                                "c": false
                                            },
                                            "Friable PACM": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                    "title": "Wall Cladding Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Loose": {
                                                "c": false
                                            },
                                            "Gaps or Holes": {
                                                "c": false
                                            },
                                            "Buckled": {
                                                "c": false
                                            },
                                            "Tight Butt Joints": {
                                                "c": false
                                            },
                                            "Missing Joint Flashing": {
                                                "c": false
                                            },
                                            "Broken or Damaged": {
                                                "c": false
                                            },
                                            "Inadequate Coverage": {
                                                "c": false
                                            },
                                            "Peeling Paint": {
                                                "c": false
                                            },
                                            "Weathered": {
                                                "c": false
                                            },
                                            "Pest Issues": {
                                                "c": false
                                            },
                                            "Cracked or Bulging": {
                                                "c": false
                                            },
                                            "Mildew": {
                                                "c": false
                                            },
                                            "Deteriorated": {
                                                "c": false
                                            },
                                            "Fungal Rot or Probed": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                    "title": "Flashing at Fenestrations",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Missing": {
                                                "c": false
                                            },
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Defective": {
                                                "c": false
                                            },
                                            "Loose": {
                                                "c": false
                                            },
                                            "Gaps or Holes": {
                                                "c": false
                                            },
                                            "Exposed Structure": {
                                                "c": false
                                            },
                                            "Recommend Re-Evaluate or Repair": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                    "title": "Trim or Soffit or Fascia",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Wood": {
                                                "c": false
                                            },
                                            "Fiberboard": {
                                                "c": false
                                            },
                                            "Masonry": {
                                                "c": false
                                            },
                                            "EIFS": {
                                                "c": false
                                            },
                                            "Metal": {
                                                "c": false
                                            },
                                            "Vinyl": {
                                                "c": false
                                            },
                                            "Enclosed Soffit": {
                                                "c": false
                                            },
                                            "Open Eaves": {
                                                "c": false
                                            },
                                            "Screened Ventilation": {
                                                "c": false
                                            },
                                            "Unflashed BRT or Out-Lookers": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                    "title": "Trim or Soffit or Fascia Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Loose": {
                                                "c": false
                                            },
                                            "Gaps or Holes": {
                                                "c": false
                                            },
                                            "Missing Pieces": {
                                                "c": false
                                            },
                                            "Exposed Wood": {
                                                "c": false
                                            },
                                            "Loose or Missing Flashing": {
                                                "c": false
                                            },
                                            "Poor Protection or Coverage": {
                                                "c": false
                                            },
                                            "Stains": {
                                                "c": false
                                            },
                                            "Peeling Paint": {
                                                "c": false
                                            },
                                            "Weathered or Worn": {
                                                "c": false
                                            },
                                            "Deterioration": {
                                                "c": false
                                            },
                                            "Fungal Rot": {
                                                "c": false
                                            },
                                            "Broken or Damaged": {
                                                "c": false
                                            },
                                            "Pest Issues": {
                                                "c": false
                                            },
                                            "Foliage Contact": {
                                                "c": false
                                            },
                                            "Potential Hidden Damage": {
                                                "c": false
                                            },
                                            "Recommend Re-Evaluation": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                    "title": "Siding  or  Wall Cladding Images",
                                        "type": "image",
                                        "content": [
                    ]

                                }
                            ]
                        },
                        {
                            "title": "Wall Fenestrations",
                            "items": [
                                {
                                    "title": "Show Value",
                                    "type": "hidden",
                                    "showvalue": false
                                },
                                {

                                   "title": "Window Frame or Trim",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Wood": {
                                                "c": false
                                            },
                                            "Aluminum or Metal": {
                                                "c": false
                                            },
                                            "Clad": {
                                                "c": false
                                            },
                                            "Vinyl": {
                                                "c": false
                                            },
                                            "Fiberglass": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                    "title": "Window Frame or Trim Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Gaps": {
                                                "c": false
                                            },
                                            "Missing Pieces": {
                                                "c": false
                                            },
                                            "Exposed Wood": {
                                                "c": false
                                            },
                                            "Missing Flashing": {
                                                "c": false
                                            },
                                            "Weathered or Worn Finish": {
                                                "c": false
                                            },
                                            "Peeling Paint or Inadequate Coverage": {
                                                "c": false
                                            },
                                            "Missing Caulking": {
                                                "c": false
                                            },
                                            "Broken Glass": {
                                                "c": false
                                            },
                                            "Failed Thermal Seal": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            },
                                            "Deteriorated": {
                                                "c": false
                                            },
                                            "Fungal Rot": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                        "title": "Exterior Doors",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Metal": {
                                                "c": false
                                            },
                                            "Wood": {
                                                "c": false
                                            },
                                            "Fiberglass": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                    "title": "Exterior Doors Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Missing or Inadequate Threshold": {
                                                "c": false
                                            },
                                            "Missing or Inadequate Weather-Strip": {
                                                "c": false
                                            },
                                            "Missing or Inadequate Hardware": {
                                                "c": false
                                            },
                                            "Repairs Needed": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                    "title": "Caulking",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Weathered": {
                                                "c": false
                                            },
                                            "Stretched": {
                                                "c": false
                                            },
                                            "Cracked": {
                                                "c": false
                                            },
                                            "Gaps": {
                                                "c": false
                                            },
                                            "Missing": {
                                                "c": false
                                            },
                                            "Recommend sealing all perforations through the exterior wall surface": {
                                                "c": false
                                            }
                                        }

                                },
                                {

                                    "title": "Wall Fenestrations Images",
                                        "type": "image",
                                        "content": [
                    ]

                                }
                            ]
                        },
                        {
                            "title": "Attached Garage or Carport",
                            "items": [
                                {
                                        "title":"Conditions",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "The inspection of attached garages and carports includes their framing, siding, roof, doors, windows, and installed electrical  or  mechanical systems pertaining to the operation of the home, and describes any deficiencies of these systems or components. The report shows the condition and function of the overhead garage doors and associated hardware, the tested function of the garage door openers, their auto-reverse systems and secondary entrapment devices (photoelectric and edge sensors) when present, the condition and installation of any pedestrian door(s), and or or fire separation between the house and garage when applicable, and the presence of any fire hazard or ignition source (gas and electric water heaters, electrical receptacles, electronic air cleaners, motors of installed appliances, etc.) that is within eighteen inches of the garage floor."
                                },
                                {
                                        "title":"Limitations",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "showcontent": true,
                                        "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-180 of the Washington State Dept. of Licensing, the inspector is not required to: (1)determine whether or not a solid core pedestrian door that is not labeled is fire rated, (2)verify the functionality of garage door opener remote controls, (3)move vehicles or personal property, (4)operate any equipment unless otherwise addressed in the standards of practice."
                                },
                                {
                                        "title":"Vehicle Parking",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Curbside": {
                                                "c": false
                                            },
                                            "Space": {
                                                "c": false
                                            },
                                            "Public Garage": {
                                                "c": false
                                            },
                                            "Carport": {
                                                "c": false
                                            },
                                            "Garage": {
                                                "c": false
                                            },
                                            "Attached": {
                                                "c": false
                                            },
                                            "Detached": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                        "title":"Floor",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Concrete Slab": {
                                                "c": false
                                            },
                                            "Sealed": {
                                                "c": false
                                            },
                                            "Asphalt": {
                                                "c": false
                                            },
                                            "Pavers or Cobblestone": {
                                                "c": false
                                            },
                                            "Gravel": {
                                                "c": false
                                            },
                                            "Dirt": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                        "title":"Floor Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Sloping": {
                                                "c": false
                                            },
                                            "Typical Cracks": {
                                                "c": false
                                            },
                                            "Large Cracks": {
                                                "c": false
                                            },
                                            "Trip Hazards": {
                                                "c": false
                                            },
                                            "Efflorescence": {
                                                "c": false
                                            },
                                            "Not Visible": {
                                                "c": false
                                            },
                                            "Excessive Storage": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Firewall Location",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Above Living Space": {
                                                "c": false
                                            },
                                            "Below Living Space": {
                                                "c": false
                                            },
                                            "Adjoining Walls": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Firewall Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Penetrations": {
                                                "c": false
                                            },
                                            "Pet Door": {
                                                "c": false
                                            },
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                        "title":"Firedoor Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Door": {
                                                "c": false
                                            },
                                            "Threshod": {
                                                "c": false
                                            },
                                            "Hinges": {
                                                "c": false
                                            },
                                            "Seal": {
                                                "c": false
                                            },
                                            "Repairs Needed": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Exterior Service Door",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Blocked or Inoperable": {
                                                "c": false
                                            },
                                            "Wood": {
                                                "c": false
                                            },
                                            "Metal": {
                                                "c": false
                                            },
                                            "Fiberglass": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Exterior Service Door Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            },
                                            "Needs Adjustment": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Car Door",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Overhead": {
                                                "c": false
                                            },
                                            "Sliding": {
                                                "c": false
                                            },
                                            "Roll-Up Panels": {
                                                "c": false
                                            },
                                            "Tilt-Up Slab": {
                                                "c": false
                                            },
                                            "Lites": {
                                                "c": false
                                            },
                                            "Wood": {
                                                "c": false
                                            },
                                            "Hardboard": {
                                                "c": false
                                            },
                                            "Metal": {
                                                "c": false
                                            },
                                            "Fiberglass": {
                                                "c": false
                                            },
                                            "Solid": {
                                                "c": false
                                            },
                                            "Hollow": {
                                                "c": false
                                            },
                                            "Insulated": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Car Door Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Gaps": {
                                                "c": false
                                            },
                                            "Security Concerns": {
                                                "c": false
                                            },
                                            "Blocked or Inaccessible": {
                                                "c": false
                                            },
                                            "Locked Shut": {
                                                "c": false
                                            },
                                            "Stained": {
                                                "c": false
                                            },
                                            "De-Laminated": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                        "title":"Automatic Door Opener",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Blocked": {
                                                "c": false
                                            },
                                            "No Access": {
                                                "c": false
                                            },
                                            "No Remote": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                        "title":"Safety Reverse",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Disconnected or Inoperable": {
                                                "c": false
                                            },
                                            "Door Stops": {
                                                "c": false
                                            },
                                            "Intermittent Function": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            },
                                            "Needs Adjustment": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Attached Garage or Carport Images",
                                        "type": "image",
                                        "content": []
                                }
                            ],
                            "showvalue": false
                        }
                ]


                },
                {
                    "title": "Roofing",
                    "pages": [
                        {
                            "title": "Roof Covering(s)",
                            "items": [
                                {
                                    "title": "Conditions",
                                    "required": false,
                                    "showvalue": false,
                                    "type": "presettext",
                                    "showcontent": true,
                                    "content": "An inspection of the roof(s) includes traversing the roof surface to inspect the roof covering materials (unless in the opinion of the inspector, walking on the roof could damage roofing materials or be unsafe) gutters and downspout systems, visible flashing(s), roof vents, skylights, and any other roof penetrations, the portions of the chimney(s) and or or flue(s) visible from the exterior, describes the type of roof coverings used & their general condition, as well as any deficiencies of these systems or components, and reports on the presence of multiple layers of roofing, and the manner in which the roof is ventilated."
                                },
                                {
                                    "title": "Limitations",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-090 of the Washington State Dept. of Licensing, the inspector is not required to: traverse unsafe or vulnerable roof surfaces, remove snow, ice, debris or other material(s) that obscure the roof surface or prevents access to the roof, inspect gutter and downspout systems concealed within the structure, inspect related underground drainage piping; and or or antennas, lightning arresters, or similar attachments, operate powered roof ventilators, or predict remaining life expectancy of roof coverings."
                                },
                                {
                                    "title": "Roof Covering(s)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Inspected or Walked on (Traversed) Roof": {
                                                "c": false
                                            },
                                            "Inspected or NOT Traversed": {
                                                "c": false
                                            },
                                            "NOT Inspected": {
                                                "c": false
                                            },
                                            "Vulnerable to Traversing Damage": {
                                                "c": false
                                            },
                                            "Unsafe Traversing Condition(s)": {
                                                "c": false
                                            },
                                            "Not Visible": {
                                                "c": false
                                            }
                                        }
                                  },
                                {
                                    "title": "Viewed Roof From",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Ground w or  Binoculars": {
                                                "c": false
                                            },
                                            "Ladder": {
                                                "c": false
                                            },
                                            "Eaves": {
                                                "c": false
                                            },
                                            "Interior": {
                                                "c": false
                                            },
                                            "Other Building": {
                                                "c": false
                                            }
                                        }
                                 },
                                {
                                    "title": "Style(s)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Gable": {
                                                "c": false
                                            },
                                            "Hip": {
                                                "c": false
                                            },
                                            "Mansard": {
                                                "c": false
                                            },
                                            "Shed": {
                                                "c": false
                                            },
                                            "Flat": {
                                                "c": false
                                            },
                                            "Dutch Hip": {
                                                "c": false
                                            },
                                            "Combination": {
                                                "c": false
                                            }
                                        }
                                 },
                                {
                                    "title": "Pitch",
                                         "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Steep": {
                                                "c": false
                                            },
                                            "Medium": {
                                                "c": false
                                            },
                                            "Low": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title": "Age of Roof Covering",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "number",
                                        "value": ""
                                },
                                {
                                    "title": "Number of Layers of Roof Covering",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "number",
                                        "value": ""
                                },
                                {
                                    "title": "Roof Covering",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Asphalt or Comp": {
                                                "c": false
                                            },
                                            "Rolled": {
                                                "c": false
                                            },
                                            "3-Tab": {
                                                "c": false
                                            },
                                            "Multiple Thickness": {
                                                "c": false
                                            },
                                            "Presidential": {
                                                "c": false
                                            },
                                            "Corrugated Fiber Glass": {
                                                "c": false
                                            },
                                            "Modified Bitumen": {
                                                "c": false
                                            },
                                            "Torch-Down or Hot Tar": {
                                                "c": false
                                            },
                                            "Metal or Standing Seam": {
                                                "c": false
                                            },
                                            "Metal Shingle": {
                                                "c": false
                                            },
                                            "Wood Shingle": {
                                                "c": false
                                            },
                                            "Cedar Shake": {
                                                "c": false
                                            },
                                            "Clay Tile": {
                                                "c": false
                                            },
                                            "Concrete Tile": {
                                                "c": false
                                            },
                                            "Slate": {
                                                "c": false
                                            },
                                            "PVC Membrane": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title": "Roof Covering Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Granule Loss": {
                                                "c": false
                                            },
                                            "Broken or Damaged": {
                                                "c": false
                                            },
                                            "Missing (Tabs)": {
                                                "c": false
                                            },
                                            "Cupping or Curling": {
                                                "c": false
                                            },
                                            "Aligned Gaps": {
                                                "c": false
                                            },
                                            "Cracked": {
                                                "c": false
                                            },
                                            "Lifting": {
                                                "c": false
                                            },
                                            "Moss": {
                                                "c": false
                                            },
                                            "Fungal Rot": {
                                                "c": false
                                            },
                                            "Rusted": {
                                                "c": false
                                            },
                                            "Exposed Fasteners": {
                                                "c": false
                                            },
                                            "Recommend Professional Re-Evaluation or Remediation": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title": "Valley(s)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Metal": {
                                                "c": false
                                            },
                                            "Woven Asphalt": {
                                                "c": false
                                            },
                                            "Cut Asphalt": {
                                                "c": false
                                            },
                                            "Tile": {
                                                "c": false
                                            },
                                            "Concrete": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title": "Valley(s) Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Maginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Defective": {
                                                "c": false
                                            },
                                            "Broken or Damaged": {
                                                "c": false
                                            },
                                            "Rusted": {
                                                "c": false
                                            },
                                            "Holes or Gaps": {
                                                "c": false
                                            },
                                            "Leaks": {
                                                "c": false
                                            },
                                            "Installation Defects": {
                                                "c": false
                                            },
                                            "Vulnerable Areas": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title": "Roof Covering(s) Images",
                                        "type": "image",
                                        "content": []
                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title": "Fenestrations",
                            "items": [
                                {
                                    "title": "Perforations (through-roof)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "No Access": {
                                                "c": false
                                            },
                                            "Not Visible": {
                                                "c": false
                                            },
                                            "Walls or Dormers": {
                                                "c": false
                                            },
                                            "Chimney Chase(s)": {
                                                "c": false
                                            },
                                            "Class 'B' Vent(s)": {
                                                "c": false
                                            },
                                            "Dryer Vent": {
                                                "c": false
                                            },
                                            "Fan Vent(s)": {
                                                "c": false
                                            },
                                            "Plumbing DWV Pipes": {
                                                "c": false
                                            },
                                            "Antennae or Satellite Dish": {
                                                "c": false
                                            },
                                            "Cable or Wiring": {
                                                "c": false
                                            },
                                            "Electical Mast": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title": "Perforations Condition(s)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Defective": {
                                                "c": false
                                            },
                                            "Broken or Damaged": {
                                                "c": false
                                            },
                                            "Rusted": {
                                                "c": false
                                            },
                                            "Raised Holes or Gaps": {
                                                "c": false
                                            },
                                            "Leaks": {
                                                "c": false
                                            },
                                            "Installation Defects": {
                                                "c": false
                                            },
                                            "Vulnerable Areas": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title": "Skylights or Skywalls",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "No Access": {
                                                "c": false
                                            },
                                            "Not Visible": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title": "Skylights or Skywalls Condition",
                                           "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Defective": {
                                                "c": false
                                            },
                                            "Broken or Damaged": {
                                                "c": false
                                            },
                                            "Rusted": {
                                                "c": false
                                            },
                                            "Holes or Gaps": {
                                                "c": false
                                            },
                                            "Leaks": {
                                                "c": false
                                            },
                                            "Installation Defects": {
                                                "c": false
                                            },
                                            "Security Concern": {
                                                "c": false
                                            },
                                            "Vulnerable Areas": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title": "Flashing(s)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Missing": {
                                                "c": false
                                            },
                                            "Installation Defects": {
                                                "c": false
                                            },
                                            "Rusted": {
                                                "c": false
                                            },
                                            "Potential Future Concern": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title": "Flashing(s) Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Defective": {
                                                "c": false
                                            },
                                            "Broken or Damaged": {
                                                "c": false
                                            },
                                            "Raised": {
                                                "c": false
                                            },
                                            "Holes or Gaps": {
                                                "c": false
                                            },
                                            "Leaks": {
                                                "c": false
                                            },
                                            "Vulnerable Areas": {
                                                "c": false
                                            },
                                            "Repair or Re-Evaluate": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title": "Fenestrations Images",
                                        "type": "image",
                                        "content": []
                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title": "Gutters & Down-Spouts",
                            "items": [
                                {
                                    "title":"Type",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Eave-Mounted": {
                                                "c": false
                                            },
                                            "Internal with Scuppers": {
                                                "c": false
                                            },
                                            "Metal": {
                                                "c": false
                                            },
                                            "Plastic or Vinyl": {
                                                "c": false
                                            },
                                            "Wood": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Gutters & Down-Spouts Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Missing": {
                                                "c": false
                                            },
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Loose or Sagging": {
                                                "c": false
                                            },
                                            "Fallen or Pulled Away": {
                                                "c": false
                                            },
                                            "Reversed Slope or Ponding": {
                                                "c": false
                                            },
                                            "Clogged": {
                                                "c": false
                                            },
                                            "Debris": {
                                                "c": false
                                            },
                                            "Granule Wash": {
                                                "c": false
                                            },
                                            "Spillover Stains": {
                                                "c": false
                                            },
                                            "Deteriorated Wood": {
                                                "c": false
                                            },
                                            "Cracked or Split": {
                                                "c": false
                                            },
                                            "Holes": {
                                                "c": false
                                            },
                                            "Leaking Joints": {
                                                "c": false
                                            },
                                            "Rust": {
                                                "c": false
                                            },
                                            "Moss": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Down-Spout Discharge",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "No Down-Spouts": {
                                                "c": false
                                            },
                                            "Above Grade": {
                                                "c": false
                                            },
                                            "Below Grade": {
                                                "c": false
                                            },
                                            "Not Visible": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Down-Spout Discharge Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Missing": {
                                                "c": false
                                            },
                                            "Loose or Disconnected": {
                                                "c": false
                                            },
                                            "Clogged": {
                                                "c": false
                                            },
                                            "Open Gaps Around Downspout-to-Drain Connections": {
                                                "c": false
                                            },
                                            "Poor Extensions or Splash Blocks": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                        "title":"Gutters or Down Spouts Images",
                                        "type": "image",
                                        "content": []
                                }
                            ],
                            "showvalue": false
                        }
                    ]
                },
                {
                    "title": "Structural",
                    "pages": [
                        {
                            "title": "Roof Framing (Visible In Attic)",
                            "items": [
                                {
                                        "title":"Conditions",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "An inspection of the structure includes traversing attics and subfloor crawl-spaces to inspect the building materials comprising the major structural components, the visible foundation; floor framing; roof framing and diaphragm; other support and substructure  or  superstructure components; stairs; ventilation (when applicable); and exposed concrete slabs in habitable areas, and describes any deficiencies of these systems or components. The report describes the condition and serviceability of visible, exposed foundations and grade slabs, walls, posts, piers, beams, joists, trusses, sub-floors, chimney foundations, stairs and the visible roof structure and attic components where readily and safely accessible, subfloor crawl-spaces and basements for indications of flooding and moisture penetration, and where deterioration is suspected or where clear indications of possible deterioration exist, a representative number of structural components were probed, and any pest-conducive conditions or wood-rot are reported. Probing is not required when probing will damage any finished surface or where no deterioration is suspected."
                                },
                                {
                                        "title":"Limitations",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-070 of the Washington State Dept. of Licensing, The inspector is not required to enter: sub-floor crawl-spaces that require excavation or have an access opening less than eighteen inches by twenty-four inches or headroom less than eighteen inches beneath floor joists and twelve inches beneath girders (beams). Any areas that are not readily accessible due to obstructions, inadequate clearances or have conditions which, in the inspector's opinion, are hazardous to the health and safety of the inspector or will cause damage to components of the home, move stored items or debris or perform excavation to gain access. (BOLD THIS)Please refer to a licensed structural pest inspector (SPI) or pest control operator (PCO) to re-evaluate all issues that are suspected to be insect-related.(BOLD THIS)"
                                },
                                {
                                    "title":"Roof System",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Vaulted or No Attic": {
                                                "c": false
                                            },
                                            "Partial Attic": {
                                                "c": false
                                            },
                                            "No Access": {
                                                "c": false
                                            },
                                            "Sealed Access": {
                                                "c": false
                                            },
                                            "Trusses": {
                                                "c": false
                                            },
                                            "Stick-Framed": {
                                                "c": false
                                            },
                                            "Rafters & Joists": {
                                                "c": false
                                            },
                                            "Beams & Purlins": {
                                                "c": false
                                            },
                                            "Hips": {
                                                "c": false
                                            },
                                            "Valleys": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Diaphragm Sheathing",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Plywood": {
                                                "c": false
                                            },
                                            "OSB": {
                                                "c": false
                                            },
                                            "H-Clipped": {
                                                "c": false
                                            },
                                            "Plank": {
                                                "c": false
                                            },
                                            "1x Skip Sheathing": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Diaphragm Sheathing Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Sagging or Over-Spanned": {
                                                "c": false
                                            },
                                            "Broken or Damaged": {
                                                "c": false
                                            },
                                            "Structural Defect (Design Related)": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                        "title":"Missing or Inadequate",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Bracing": {
                                                "c": false
                                            },
                                            "Collar Ties": {
                                                "c": false
                                            },
                                            "Knee Walls": {
                                                "c": false
                                            },
                                            "Stains": {
                                                "c": false
                                            },
                                            "Deterioration": {
                                                "c": false
                                            },
                                            "Hazardous or Unsafe": {
                                                "c": false
                                            },
                                            "Recommend Professional Re-Evaluation": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                        "title":"Roof Framing Images",
                                        "type": "image",
                                        "content": []
                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title": "Floor Framing",
                            "items": [
                                {
                                    "title":"Notice",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "Seismic (earthquake) evaluation is typically dictated by building codes, outside the scope of this inspection, and was NOT performed. For seismic evaluation or other desirable structural improvements, refer to a specialist."
                                },
                                {
                                    "title":"Sub-Floor System",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "4X Beams & Plank Diaphragm": {
                                                "c": false
                                            },
                                            "2X Joists & Diaphragm": {
                                                "c": false
                                            },
                                            "Flat Truss": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Beams (Girders)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Steel": {
                                                "c": false
                                            },
                                            "Concrete": {
                                                "c": false
                                            },
                                            "Laminated or Engineered": {
                                                "c": false
                                            },
                                            "Dimensional Lumber": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Joists & Sheathing",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "No Joists": {
                                                "c": false
                                            },
                                            "Lumber": {
                                                "c": false
                                            },
                                            "Sleepers": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"I-Beams",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Wood or TJI": {
                                                "c": false
                                            },
                                            "Metal": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Diaphragm",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Foam-Crete": {
                                                "c": false
                                            },
                                            "Diagonal": {
                                                "c": false
                                            },
                                            "Plank": {
                                                "c": false
                                            },
                                            "T&G or Shiplap": {
                                                "c": false
                                            },
                                            "Plywood": {
                                                "c": false
                                            },
                                            "OSB": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                        "title":"Posts(Columns)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Covered or Not Visible": {
                                                "c": false
                                            },
                                            "Wood": {
                                                "c": false
                                            },
                                            "Steel": {
                                                "c": false
                                            },
                                            "Concrete": {
                                                "c": false
                                            },
                                            "CMU (block)": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                        "title":"Posts(Columns) Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Visible": {
                                                "c": false
                                            },
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Sagging or Over-Spanned": {
                                                "c": false
                                            },
                                            "Broken": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            },
                                            "Structural Defects (Design Related)": {
                                                "c": false
                                            },
                                            "Missing or Inadequate Bracing": {
                                                "c": false
                                            },
                                            "Stains": {
                                                "c": false
                                            },
                                            "Deterioration": {
                                                "c": false
                                            },
                                            "Hazardous or Unsafe": {
                                                "c": false
                                            },
                                            "Recommend Professional Evaluation or Remediation": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Stairs",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Open": {
                                                "c": false
                                            },
                                            "Enclosed": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Stairs Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Missing Handrail": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Inadequate",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Rails": {
                                                "c": false
                                            },
                                            "Headroom": {
                                                "c": false
                                            },
                                            "Support": {
                                                "c": false
                                            },
                                            "Uneven Risers": {
                                                "c": false
                                            },
                                            "Over-Height Step(s)": {
                                                "c": false
                                            },
                                            "Missing Firewall": {
                                                "c": false
                                            },
                                            "Hazardous or Unsafe": {
                                                "c": false
                                            },
                                            "Recommend Professional Evaluation or Remediation": {
                                                "c": false
                                            }
                                    }
                                },
                                {
                                    "title":"Basement or Crawl Floor",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Concrete": {
                                                "c": false
                                            },
                                            "Dirt or Gravel": {
                                                "c": false
                                            },
                                            "Wood": {
                                                "c": false
                                            },
                                            "Covered or Not Visible": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Basement or Crawl Floor Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Typical Settling Cracks": {
                                                "c": false
                                            },
                                            "Large Cracks": {
                                                "c": false
                                            },
                                            "Stains": {
                                                "c": false
                                            },
                                            "Efflorescence": {
                                                "c": false
                                            },
                                            "Storage": {
                                                "c": false
                                            },
                                            "Damage": {
                                                "c": false
                                            },
                                            "Hazardous or Unsafe": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Floor Framing Images",
                                        "type": "image",
                                        "content": []
                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title": "Foundation",
                            "items": [
                                {
                                    "title":"Type of Foundation",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Perimeter Walls": {
                                                "c": false
                                            },
                                            "Post or Beam": {
                                                "c": false
                                            },
                                            "Columns": {
                                                "c": false
                                            },
                                            "Poured Concrete": {
                                                "c": false
                                            },
                                            "CMU(Block)": {
                                                "c": false
                                            },
                                            "Masonry": {
                                                "c": false
                                            },
                                            "Unmortared Stone or Brick": {
                                                "c": false
                                            },
                                            "Logs": {
                                                "c": false
                                            },
                                            "Treated Wood": {
                                                "c": false
                                            },
                                            "Strip Footings": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Condition of Foundation",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Imbedded Wood": {
                                                "c": false
                                            },
                                            "Rock Pockets": {
                                                "c": false
                                            },
                                            "No Tie-Downs": {
                                                "c": false
                                            },
                                            "Stains": {
                                                "c": false
                                            },
                                            "Damage": {
                                                "c": false
                                            },
                                            "Deterioration": {
                                                "c": false
                                            },
                                            "Efflorescence": {
                                                "c": false
                                            },
                                            "EWC": {
                                                "c": false
                                            },
                                            "Fungal Rot or Probed": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Limited By",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Storage": {
                                                "c": false
                                            },
                                            "Perimeter Cover": {
                                                "c": false
                                            },
                                            "Obstacles": {
                                                "c": false
                                            },
                                            "Inaccessible Area": {
                                                "c": false
                                            },
                                            "Pests": {
                                                "c": false
                                            },
                                            "Tight or Limited Mobility": {
                                                "c": false
                                            },
                                            "Hazards or Unsafe": {
                                                "c": false
                                            },
                                            "Recommend Re-Evaluation or Remediation": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"WDI or WDO (Wood-Destroying)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "None": {
                                                "c": false
                                            },
                                            "Exit Holes": {
                                                "c": false
                                            },
                                            "Frass": {
                                                "c": false
                                            },
                                            "Galleries": {
                                                "c": false
                                            },
                                            "Damage": {
                                                "c": false
                                            },
                                            "Mildew or Bio-Growth": {
                                                "c": false
                                            },
                                            "Mold Sampled or Tested": {
                                                "c": false
                                            },
                                            "Fungal Rot or Probed": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Cracks",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Typical Settling": {
                                                "c": false
                                            },
                                            "Vertical": {
                                                "c": false
                                            },
                                            "Step": {
                                                "c": false
                                            },
                                            "Horizontal": {
                                                "c": false
                                            },
                                            "V-Cracking": {
                                                "c": false
                                            },
                                            "Displaced": {
                                                "c": false
                                            },
                                            "Inactive": {
                                                "c": false
                                            },
                                            "Active": {
                                                "c": false
                                            },
                                            "Larger than one fourth inch": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Drainage",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Evidence of Flooding": {
                                                "c": false
                                            },
                                            "Not Visible": {
                                                "c": false
                                            },
                                            "Efflorescence": {
                                                "c": false
                                            },
                                            "Humidity": {
                                                "c": false
                                            },
                                            "Old Stains": {
                                                "c": false
                                            },
                                            "Silt Deposits": {
                                                "c": false
                                            },
                                            "Soil on Vapor Barrier": {
                                                "c": false
                                            },
                                            "Fresh Stains": {
                                                "c": false
                                            },
                                            "Standing Water": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Sump Pump",
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Missing": {
                                                "c": false
                                            },
                                            "Not Tested": {
                                                "c": false
                                            },
                                            "Operable": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Foundation Images",
                                        "type": "image",
                                        "content": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "Thermal",
                    "pages": [
                        {
                            "title": "Attic",
                            "items": [
                                {
                                    "title":"Conditions",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "The inspection of the insulation and ventilation includes the type and condition of the insulation and ventilation in viewable unfinished attics and sub-grade areas as well as any installed mechanical ventilation systems, reports missing or inadequate vapor barriers in subfloor crawl-spaces with earth floors, the absence of insulation at the interface between conditioned and unconditioned spaces where visible, the absence of insulation on heating system ductwork and supply plumbing in unconditioned spaces, and describes any deficiencies of these systems or components."
                                },
                                {
                                    "title":"Limitations",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-150 of the Washington State Dept. of Licensing, the inspector is not required to determine the presence, extent, and type of insulation and vapor barriers concealed in the exterior walls, the thickness or R-value of insulation above the ceiling, in the walls or below the floors, or evaluate whether the type of material used to insulate pipes, ducts, jackets and boilers is a health hazard. (BOLD THIS)The efficiency and quantity of air ventilation and mechanical systems is not measured, calculated, or controls tested, other than to confirm that they exist, or actually turn a system on or off.(BOLD THIS)"
                                },
                                {
                                    "title":"Access",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "No Attic": {
                                                "c": false
                                            },
                                            "No Access": {
                                                "c": false
                                            },
                                            "Door": {
                                                "c": false
                                            },
                                            "Pull Down Stair": {
                                                "c": false
                                            },
                                            "Scuttle-Hole(s)": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Location",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Hall": {
                                                "c": false
                                            },
                                            "Bedroom": {
                                                "c": false
                                            },
                                            "Closet": {
                                                "c": false
                                            },
                                            "Laundry Room": {
                                                "c": false
                                            },
                                            "Garage": {
                                                "c": false
                                            },
                                            "Exterior": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Viewed",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Near Access": {
                                                "c": false
                                            },
                                            "From Ladder": {
                                                "c": false
                                            },
                                            "At Roof Apex": {
                                                "c": false
                                            },
                                            "Limited Accessibility": {
                                                "c": false
                                            },
                                            "Inspected (Traversed) Attic": {
                                                "c": false
                                            },
                                            "Entered but NOT Traversed": {
                                                "c": false
                                            },
                                            "NOT Entered or NOT Inspected": {
                                                "c": false
                                            },
                                            "Vulnerable to Traversing Damage": {
                                                "c": false
                                            },
                                            "Unsafe Traversing Condition(s)": {
                                                "c": false
                                            },
                                            "Not Visible": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Attic Insulation Location",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "None": {
                                                "c": false
                                            },
                                            "Rafters": {
                                                "c": false
                                            },
                                            "Ceiling Joists": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Attic Insulation Quantity (in)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Installed": {
                                                "c": false
                                            },
                                            "Not Determined": {
                                                "c": false
                                            },
                                            "Inadequate": {
                                                "c": false
                                            },
                                            "Varied": {
                                                "c": false
                                            },
                                            "<2 inches R 5": {
                                                "c": false
                                            },
                                            "<3 inches R-9+": {
                                                "c": false
                                            },
                                            "3 inches R-11": {
                                                "c": false
                                            },
                                            "4 inches R-13": {
                                                "c": false
                                            },
                                            "5 inches R-15": {
                                                "c": false
                                            },
                                            "6 inches R-19": {
                                                "c": false
                                            },
                                            "2 hard foam R20": {
                                                "c": false
                                            },
                                            "8-10 inches R-28+": {
                                                "c": false
                                            },
                                            "10-12 inches R-32+": {
                                                "c": false
                                            },
                                            "12-14 inches R-36+": {
                                                "c": false
                                            },
                                            "14-16 inches R-38+": {
                                                "c": false
                                            },
                                            "16-18 inches R- 40+": {
                                                "c": false
                                            },
                                            "18-20 inches R- 42+": {
                                                "c": false
                                            },
                                            "20-22 inches R- 44+": {
                                                "c": false
                                            },
                                            "22-24 inches R- 46+": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Attic Insulation Type",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Fiber Glass": {
                                                "c": false
                                            },
                                            "Cellulose": {
                                                "c": false
                                            },
                                            "Vermiculite": {
                                                "c": false
                                            },
                                            "Mineral or Rock Wool": {
                                                "c": false
                                            },
                                            "Batts": {
                                                "c": false
                                            },
                                            "Loose": {
                                                "c": false
                                            },
                                            "Wood Shavings": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Attic Insulation Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Missing Areas": {
                                                "c": false
                                            },
                                            "Uneven Placement": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Attic Ventilation",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Eaves": {
                                                "c": false
                                            },
                                            "Gable": {
                                                "c": false
                                            },
                                            "Top": {
                                                "c": false
                                            },
                                            "Ridge": {
                                                "c": false
                                            },
                                            "Powered Vent(s)": {
                                                "c": false
                                            },
                                            "Attic Fan(s)": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Condition of Ventilation",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "None": {
                                                "c": false
                                            },
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor or Missing": {
                                                "c": false
                                            },
                                            "Odors": {
                                                "c": false
                                            },
                                            "Excessive Heat": {
                                                "c": false
                                            },
                                            "Ventilation Appears Inadequate": {
                                                "c": false
                                            },
                                            "Effectiveness NOT Evaluated": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Humidity",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "None": {
                                                "c": false
                                            },
                                            "Condensation": {
                                                "c": false
                                            },
                                            "Roof Leaks": {
                                                "c": false
                                            },
                                            "Old Stains or Inactive": {
                                                "c": false
                                            },
                                            "Fresh Stains or Active": {
                                                "c": false
                                            },
                                            "Mildew or Mold": {
                                                "c": false
                                            },
                                            "Stained Diaphragm": {
                                                "c": false
                                            },
                                            "Wet Insulation": {
                                                "c": false
                                            },
                                            "Damage": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Infestation",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "None": {
                                                "c": false
                                            },
                                            "Prior or Inactive": {
                                                "c": false
                                            },
                                            "Live or Active": {
                                                "c": false
                                            },
                                            "Nesting Materials": {
                                                "c": false
                                            },
                                            "Scat": {
                                                "c": false
                                            },
                                            "Insect": {
                                                "c": false
                                            },
                                            "Bee or Wasp": {
                                                "c": false
                                            },
                                            "Bird": {
                                                "c": false
                                            },
                                            "Rodent": {
                                                "c": false
                                            },
                                            "Racoon": {
                                                "c": false
                                            },
                                            "Potential Points of Pest Entry": {
                                                "c": false
                                            },
                                            "Hazardous or Unsafe": {
                                                "c": false
                                            },
                                            "Recommend Professional Evaluation or Remediation": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Ventiliation Notice",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "Ventilation is important in maintaining healthy uninhabited areas (attics, crawl spaces), and a key consideration before adding or altering insulation quantity. Recommend frequent seasonal checks to be certain ventilation ports do not become inadvertently blocked by pests, wind currents, or the movement or addition of new insulation."
                                },
                                {
                                    "title":"Attic Images",
                                        "type": "image",
                                        "content": []
                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title": "Crawl Spaces or Unfinished Basements",
                            "items": [
                                {
                                    "title":"Access",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Door or Panel": {
                                                "c": false
                                            },
                                            "Scuttle-Hole": {
                                                "c": false
                                            },
                                            "No Access": {
                                                "c": false
                                            },
                                            "No Crawl-Space": {
                                                "c": false
                                            },
                                            "Not Visible": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Location",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Hall": {
                                                "c": false
                                            },
                                            "Bedroom": {
                                                "c": false
                                            },
                                            "Closet": {
                                                "c": false
                                            },
                                            "Laundry Room": {
                                                "c": false
                                            },
                                            "Garage": {
                                                "c": false
                                            },
                                            "Exterior": {
                                                "c": false
                                            },
                                            "Inspected Basement or Crawl": {
                                                "c": false
                                            },
                                            "NOT Entered or NOT Inspected": {
                                                "c": false
                                            },
                                            "Limited Accessibility": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Viewed",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Near Access": {
                                                "c": false
                                            },
                                            "From Exterior": {
                                                "c": false
                                            },
                                            "At Center Only": {
                                                "c": false
                                            },
                                            "Vulnerable": {
                                                "c": false
                                            },
                                            "Unsafe": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Sub-Floor Insulation Location",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "None Visible": {
                                                "c": false
                                            },
                                            "Floor": {
                                                "c": false
                                            },
                                            "Rim Joists": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Sub-Floor Insulation Type",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Fiberglass Batts": {
                                                "c": false
                                            },
                                            "Blown-in Cellulose": {
                                                "c": false
                                            },
                                            "Foam Board": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Sub-Floor Insulation Retention",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "None Visible": {
                                                "c": false
                                            },
                                            "Wired": {
                                                "c": false
                                            },
                                            "Stapled": {
                                                "c": false
                                            },
                                            "Twine": {
                                                "c": false
                                            },
                                            "Lathe": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Sub-Floor Insulation Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Missing Areas": {
                                                "c": false
                                            },
                                            "Fallen Down": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            },
                                            "Installed Upside-Down": {
                                                "c": false
                                            },
                                            "Ineffective Installation or Gaps": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Crawl-Space Ventilation",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "None": {
                                                "c": false
                                            },
                                            "Foundation Vents": {
                                                "c": false
                                            },
                                            "Powered Vent(s)": {
                                                "c": false
                                            },
                                            "Fan(s)": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Condition of Crawl-Space Ventilation",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Effectiveness NOT Evaluated": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Vapor Barrier",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "None": {
                                                "c": false
                                            },
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            },
                                            "Gaps or Displaced Areas": {
                                                "c": false
                                            },
                                            "Exposed Earth": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Moisture",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "None": {
                                                "c": false
                                            },
                                            "Condensation": {
                                                "c": false
                                            },
                                            "Efflorescence": {
                                                "c": false
                                            },
                                            "Old Stains": {
                                                "c": false
                                            },
                                            "Fresh": {
                                                "c": false
                                            },
                                            "Standing Water": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Drainage",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "To Out-Fall": {
                                                "c": false
                                            },
                                            "Interior Plane": {
                                                "c": false
                                            },
                                            "None Apparent": {
                                                "c": false
                                            },
                                            "Sump Pump": {
                                                "c": false
                                            },
                                            "Functional": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Infestation",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "None": {
                                                "c": false
                                            },
                                            "Prior or Inactive": {
                                                "c": false
                                            },
                                            "Live or Active": {
                                                "c": false
                                            },
                                            "Nesting Materials": {
                                                "c": false
                                            },
                                            "Scat": {
                                                "c": false
                                            },
                                            "Insect": {
                                                "c": false
                                            },
                                            "Bee or Wasp": {
                                                "c": false
                                            },
                                            "Bird": {
                                                "c": false
                                            },
                                            "Rodent": {
                                                "c": false
                                            },
                                            "Racoon": {
                                                "c": false
                                            },
                                            "Potential Point Pest Entry": {
                                                "c": false
                                            },
                                            "Hazardous or Unsafe": {
                                                "c": false
                                            },
                                            "Recommend Professional Evaluation or Remediation": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Crawl Space or Basement Images",
                                        "type": "image",
                                        "content": [
                    ]

                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title":"Interior Ventilation or Exhaust Fans",
                            "items": [
                                {
                                    "title":"Whole House Ventiliation",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Whole House Fan(s)": {
                                                "c": false
                                            },
                                            "Make-Up Air Vent(s)": {
                                                "c": false
                                            },
                                            "Furnace Blower(s)": {
                                                "c": false
                                            },
                                            "Ceiling-Mounted Fan(s)": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Whole House Ventiliation Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor or Missing": {
                                                "c": false
                                            },
                                            "Open Blade": {
                                                "c": false
                                            },
                                            "Caged": {
                                                "c": false
                                            },
                                            "Remote Control": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Moisture Reduction Fans",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Bathroom Exhaust Fan(s)": {
                                                "c": false
                                            },
                                            "Kitchen Fan(s)": {
                                                "c": false
                                            },
                                            "Laundry Fan(s)": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Weak or Noisy": {
                                                "c": false
                                            },
                                            "Unsafe": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Condition Moisture Reduction Fans",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor or Missing": {
                                                "c": false
                                            },
                                            "Vented Improperly (Inside Building Envelope)": {
                                                "c": false
                                            },
                                            "Not Visible": {
                                                "c": false
                                            },
                                            "Recirculating-Only Type": {
                                                "c": false
                                            },
                                            "Clogged Grease Filter": {
                                                "c": false
                                            },
                                            "Restricted (Collapsed or Blocked)": {
                                                "c": false
                                            },
                                            "Venting Into Attic Space": {
                                                "c": false
                                            },
                                            "Aimed at Gable, Eave, or Roof Vents": {
                                                "c": false
                                            },
                                            "Fallen Loose": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Moisture Notice",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "To minimize unwanted moisture accumulation or humidity concerns, recommend regular use of adequate exhaust fans in kitchens, laundries, bathrooms, and other moisture producing areas with sealed venting to outside the building envelope. Routine maintenance is recommended to ensure that noisy, worn, or dirty fans are serviced or replaced as needed."

                                },
                                {
                                    "title":"Interior Ventilation or Exhaust Fan Images",
                                        "type": "image",
                                        "content": []

                                }
                            ],
                            "showvalue": false
                        }
                    ]
                },
                {
                    "title": "Plumbing",
                    "pages": [
                        {
                            "title": "Plumbing System",
                            "items": [
                                {
                                    "title":"Conditions",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "An inspection of the plumbing system includes visible water supply lines; visible drain or waste or soil and vent lines; fixtures and faucets; domestic hot water system and fuel source, and includes operating fixtures in order to observe functional flow, check for functional drainage from fixtures, and describe the visible water supply and distribution piping materials; drain, waste and vent materials; water-heating equipment, and any deficiencies of these systems or components. This section reports: (1)The presence and location of the main water shutoff valve or fuel shutoff valve(s), or reports that they were not found, (2)The presence and functionality of sump pumps or waste ejector pumps when visible or confirms the float switch activates the pump when the sump is dry, and (3)Whether or not the water temperature was tested, and the presence of the temperature and pressure relief (TPR) valve and associated piping. The generally accepted maximum safe water temperature is one hundred twenty degrees (120&#176;) Fahrenheit."

                                },
                                {
                                    "title":"Limitations",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-100 of the Washington State Dept. of Licensing, the inspector is not required to operate any valves, including faucets of freestanding or built-in appliances or fixtures, (if the outlet end of the valve or faucet is connected or intended to be connected to an appliance), any plumbing components not readily accessible, or inspect any system that is shut down or winterized; or determine the quantity of water from on-site water supplies, the condition and operation of private water supply systems or water wells and related pressure tanks and pumps, the potability of any water supply whether public or private, or water-conditioning equipment, including softeners and filter systems; or test pressure or temperature or pressure relief valves, gas supply systems, ignite pilot lights, test fire sprinkler systems, or ancillary systems or components such as, but not limited to, those related to solar water heating and hot water circulation; or test shower pans for leaks, or use special equipment to test or scan shower or tub surrounds for moisture in surrounding substrate materials; or test exterior drain systems or floor drains, including but not limited to, exterior stairwell drains and driveway drains; or test interior components of exterior pumps, or sealed sanitary waste lift systems, or the quality or the condition and operation of on-site sewage disposal systems such as waste ejector pumps, cesspools, septic tanks, drain fields, related underground piping, conduit, cisterns, and related equipment."

                                },
                                {
                                    "title":"Water Supply Source",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Unknown or Verify": {
                                                "c": false
                                            },
                                            "Public Water": {
                                                "c": false
                                            },
                                            "Shared Well": {
                                                "c": false
                                            },
                                            "Private Well": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Main Water Shut Off Valve Location",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Closet": {
                                                "c": false
                                            },
                                            "Well House": {
                                                "c": false
                                            },
                                            "Verify": {
                                                "c": false
                                            },
                                            "Not Found": {
                                                "c": false
                                            },
                                            "Garage": {
                                                "c": false
                                            },
                                            "Above Waterheater": {
                                                "c": false
                                            },
                                            "Yard Box": {
                                                "c": false
                                            },
                                            "Basement": {
                                                "c": false
                                            },
                                            "Crawl Space": {
                                                "c": false
                                            },
                                            "Exterior Wall": {
                                                "c": false
                                            },
                                            "Interior Utility Closet": {
                                                "c": false
                                            },
                                            "Inside Cabinet": {
                                                "c": false
                                            },
                                            "Laundry Closet": {
                                                "c": false
                                            },
                                            "Bedroom": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Water Pressure",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Unknown": {
                                                "c": false
                                            },
                                            "Verify": {
                                                "c": false
                                            },
                                            "OFF": {
                                                "c": false
                                            },
                                            "Inadequate (<45psi)": {
                                                "c": false
                                            },
                                            "Adequate (45-85psi)": {
                                                "c": false
                                            },
                                            "Excessive (>85psi)": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Water Temperature",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Varies Per Unit": {
                                                "c": false
                                            },
                                            "See WH Schedule": {
                                                "c": false
                                            },
                                            "WH OFF or Verify Function": {
                                                "c": false
                                            },
                                            "WH on Vacation Mode": {
                                                "c": false
                                            },
                                            "See Interior Section": {
                                                "c": false
                                            },
                                            "Inadequate (65-85 degrees)": {
                                                "c": false
                                            },
                                            "Normal (85-115 degrees)": {
                                                "c": false
                                            },
                                            "Hot (115-120 degrees)": {
                                                "c": false
                                            },
                                            "Scalding Hazard (>120 degrees)": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Waste System",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Public Sewer": {
                                                "c": false
                                            },
                                            "Shared Septic": {
                                                "c": false
                                            },
                                            "Private Septic & Drainfield": {
                                                "c": false
                                            },
                                            "Private Septic & Mound": {
                                                "c": false
                                            },
                                            "Private Septic & Leech Line": {
                                                "c": false
                                            },
                                            "Unknown or Verify": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Main Entry Piping",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Copper": {
                                                "c": false
                                            },
                                            "Galvanized": {
                                                "c": false
                                            },
                                            "Plastic or CPVC": {
                                                "c": false
                                            },
                                            "Polybutylene": {
                                                "c": false
                                            },
                                            "PEX": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Main Entry Piping Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Visible": {
                                                "c": false
                                            },
                                            "Leaking": {
                                                "c": false
                                            },
                                            "Unprotected or Freezing": {
                                                "c": false
                                            },
                                            "Discolered Water": {
                                                "c": false
                                            },
                                            "Odor": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Pressure",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "LIST PRESSURE?": {
                                                "c": false
                                            },
                                            "Low": {
                                                "c": false
                                            },
                                            "High": {
                                                "c": false
                                            },
                                            "Normal": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Shut-Off": {
                                                "c": false
                                            },
                                            "Winterized": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Water Lines",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Copper": {
                                                "c": false
                                            },
                                            "Galvanized": {
                                                "c": false
                                            },
                                            "Plastic or CPVC": {
                                                "c": false
                                            },
                                            "Polybutylene": {
                                                "c": false
                                            },
                                            "PEX": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Condition of Water Lines",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Fully Visible": {
                                                "c": false
                                            },
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Cross Connections": {
                                                "c": false
                                            },
                                            "Leaks": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Lead (other than solder joints)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Service Entry": {
                                                "c": false
                                            },
                                            "Unknown": {
                                                "c": false
                                            },
                                            "Unlikely": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Disimilar Metal Connection (Potential Electrolysis)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Yes": {
                                                "c": false
                                            },
                                            "No": {
                                                "c": false
                                            },
                                            "Not Visible": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"DMV Piping",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Copper": {
                                                "c": false
                                            },
                                            "Cast Iron": {
                                                "c": false
                                            },
                                            "Galvanized": {
                                                "c": false
                                            },
                                            "Plastic or ABS or PVC": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Condition of DMV Piping",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Fully Visible": {
                                                "c": false
                                            },
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Maginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Leaks": {
                                                "c": false
                                            },
                                            "Unsupported": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Plumbing System Images",
                                        "type": "image",
                                        "content": [
                    ]

                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title": "Faucets or Fixtures",
                            "items": [
                                {
                                        "title":"Faucets",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Functional": {
                                                "c": false
                                            },
                                            "Intermittent Function": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Missing or Incomplete": {
                                                "c": false
                                            },
                                            "Loose": {
                                                "c": false
                                            },
                                            "Broken or Damaged": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Leaking",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Hose Bibb": {
                                                "c": false
                                            },
                                            "Wall Stop": {
                                                "c": false
                                            },
                                            "Faucet": {
                                                "c": false
                                            },
                                            "Sprayer": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Faucets or Fixtures Location",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Kitchen": {
                                                "c": false
                                            },
                                            "Master Bath": {
                                                "c": false
                                            },
                                            "Main Bath": {
                                                "c": false
                                            },
                                            "Half Bath": {
                                                "c": false
                                            },
                                            "Laundry": {
                                                "c": false
                                            },
                                            "Bar": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Accessories",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Vegetable Sink": {
                                                "c": false
                                            },
                                            "Insta-Hot": {
                                                "c": false
                                            },
                                            "Water Filter": {
                                                "c": false
                                            },
                                            "Ice Maker": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Disposer",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Noisy": {
                                                "c": false
                                            },
                                            "Defective": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Dishwasher",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Airgap": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Dishwasher Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Functional": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Intermittent Function": {
                                                "c": false
                                            },
                                            "Defects or Damage": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Sinks or Fixtures",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Functional": {
                                                "c": false
                                            },
                                            "Surface Damage": {
                                                "c": false
                                            },
                                            "Cabinet Damage": {
                                                "c": false
                                            },
                                            "Cross Connection": {
                                                "c": false
                                            },
                                            "Improve Caulking at Sink, Back-Splash, Tub Deck, Shower Surround, Floor, Wood or MDF Molding": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Grout Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Unsealed (Recommend Sealing)": {
                                                "c": false
                                            },
                                            "Cracked, Loose, or Missing Grout": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Drainage",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Functional": {
                                                "c": false
                                            },
                                            "Missing Stopper": {
                                                "c": false
                                            },
                                            "Missing or Inoperable Overflow": {
                                                "c": false
                                            },
                                            "Clog or Slow Drain": {
                                                "c": false
                                            },
                                            "Stained Drainpipe": {
                                                "c": false
                                            },
                                            "Drips or Leaks": {
                                                "c": false
                                            },
                                            "Defects or Damage": {
                                                "c": false
                                            },
                                            "Unsafe": {
                                                "c": false
                                            },
                                            "Re-Evaluate": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Sinks or Fixtures Location",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Kitchen": {
                                                "c": false
                                            },
                                            "Master Bath": {
                                                "c": false
                                            },
                                            "Main Bath": {
                                                "c": false
                                            },
                                            "Half Bath": {
                                                "c": false
                                            },
                                            "Laundry": {
                                                "c": false
                                            },
                                            "Bar": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Toilet",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Runs Continuously": {
                                                "c": false
                                            },
                                            "Leaks": {
                                                "c": false
                                            },
                                            "Loose Bowl": {
                                                "c": false
                                            },
                                            "Damage": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Tub or Shower Surround(s)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Ceramic": {
                                                "c": false
                                            },
                                            "FG": {
                                                "c": false
                                            },
                                            "Masonite or Laminate": {
                                                "c": false
                                            },
                                            "Slab": {
                                                "c": false
                                            },
                                            "Jacuzzi": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Condition of Tub or Shower Surround(s)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Functional": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Stains": {
                                                "c": false
                                            },
                                            "Cross Connection": {
                                                "c": false
                                            },
                                            "Defective": {
                                                "c": false
                                            },
                                            "Loose Tile": {
                                                "c": false
                                            },
                                            "Cracked or Broken": {
                                                "c": false
                                            },
                                            "Leaky Shower Head": {
                                                "c": false
                                            },
                                            "Leaky Faucet": {
                                                "c": false
                                            },
                                            "Leaky Sprayer": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Faucet or Fixtures Images",
                                        "type": "image",
                                        "content": [
                    ]

                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title":"Water Heater",
                            "items": [
                                {
                                    "title":"Energy Source",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Gas or Propane": {
                                                "c": false
                                            },
                                            "Electric": {
                                                "c": false
                                            },
                                            "Oil": {
                                                "c": false
                                            },
                                            "Solar": {
                                                "c": false
                                            },
                                            "Geo Thermal": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Brand Name",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Unknown": {
                                                "c": false
                                            },
                                            "A O Smith": {
                                                "c": false
                                            },
                                            "American": {
                                                "c": false
                                            },
                                            "American Standard": {
                                                "c": false
                                            },
                                            "Amtrol": {
                                                "c": false
                                            },
                                            "Aqua Star  or  Bosch": {
                                                "c": false
                                            },
                                            "Bosch": {
                                                "c": false
                                            },
                                            "Bradford White": {
                                                "c": false
                                            },
                                            "Briggs": {
                                                "c": false
                                            },
                                            "Craftmaster": {
                                                "c": false
                                            },
                                            "Eccotemp": {
                                                "c": false
                                            },
                                            "GE": {
                                                "c": false
                                            },
                                            "Hoyt": {
                                                "c": false
                                            },
                                            "Kenmore": {
                                                "c": false
                                            },
                                            "KD Navien": {
                                                "c": false
                                            },
                                            "Lochinvar": {
                                                "c": false
                                            },
                                            "Munchkin": {
                                                "c": false
                                            },
                                            "Navien America": {
                                                "c": false
                                            },
                                            "Navion": {
                                                "c": false
                                            },
                                            "Noritz": {
                                                "c": false
                                            },
                                            "Polaris": {
                                                "c": false
                                            },
                                            "Reliance": {
                                                "c": false
                                            },
                                            "Rheem": {
                                                "c": false
                                            },
                                            "Ruud": {
                                                "c": false
                                            },
                                            "Richmond": {
                                                "c": false
                                            },
                                            "Rinnai": {
                                                "c": false
                                            },
                                            "Sears Roebuck": {
                                                "c": false
                                            },
                                            "State": {
                                                "c": false
                                            },
                                            "State Select": {
                                                "c": false
                                            },
                                            "Takagi": {
                                                "c": false
                                            },
                                            "True Value": {
                                                "c": false
                                            },
                                            "US Craftmaster": {
                                                "c": false
                                            },
                                            "Whirlpool": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Approximate Age (Years Old)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "number",
                                        "value": ""

                                },
                                {
                                    "title":"Capacity (in Gallons)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "10": {
                                                "c": false
                                            },
                                            "20": {
                                                "c": false
                                            },
                                            "30": {
                                                "c": false
                                            },
                                            "40": {
                                                "c": false
                                            },
                                            "50": {
                                                "c": false
                                            },
                                            "OTHER (NEEDS MORE DATA)": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Model Number",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "textbox",
                                        "value": ""
                                },
                                {
                                    "title":"Serial Number",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "textbox",
                                        "value": ""
                                },
                                {
                                    "title":"Water Temperature",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "number",
                                        "value": ""
                                },
                                {
                                    "title":"Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Data Plate Inaccessible or Illegible": {
                                                "c": false
                                            },
                                            "Missing or Loose Seismic Restraints": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"TPRV Connection",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Missing": {
                                                "c": false
                                            },
                                            "Reduced Extension": {
                                                "c": false
                                            },
                                            "Poor Extension Termination": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Exhaust",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Metal": {
                                                "c": false
                                            },
                                            "Flex Ducting": {
                                                "c": false
                                            },
                                            "PVC": {
                                                "c": false
                                            },
                                            "Condensate": {
                                                "c": false
                                            },
                                            "Rust": {
                                                "c": false
                                            },
                                            "Corrosion": {
                                                "c": false
                                            },
                                            "Verify Proper Pitch": {
                                                "c": false
                                            },
                                            "Disconnected": {
                                                "c": false
                                            },
                                            "Into Masonry Chase": {
                                                "c": false
                                            },
                                            "Missing Liner": {
                                                "c": false
                                            },
                                            "Back-Drafting": {
                                                "c": false
                                            },
                                            "Unsafe": {
                                                "c": false
                                            },
                                            "Recommend Professional Re-Evaluation or Remediation": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Water Heater Images",
                                        "type": "image",
                                        "content": []
                                }
                            ],
                            "showvalue": false
                        }
                    ]
                },
                {
                    "title": "Heating",
                    "pages": [
                        {
                            "title": "Heating System",
                            "items": [
                                {
                                    "title":"Conditions",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "The inspection of the heating system includes the fuel source; heating equipment; heating distribution; operating controls; visible portions of flue pipes, chimneys and venting, installed auxiliary heating units, deficiencies of the systems or components, and reports any evidence that indicates the possible presence of an underground storage tank. Each habitable space in the home was inspected to determine whether or not there was a functioning heat source present and operable, using normal readily accessible control devices. Access panels or covers provided by the manufacturer or installer, if readily accessible and detachable, were opened. The report describes the existing operation of: electric baseboard and in-wall heaters to ensure they are functional, central heating units and distribution systems, visible flue pipes and related components to ensure functional operation and proper clearance from combustibles, spaces where fossil fuel burning heating devices are located to ensure there is air for combustion."

                                },
                                {
                                    "title":"Limitations",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-120 of the Washington State Dept. of Licensing, the inspector is not required to determine adequacy of combustion air, or the capacity, adequacy, or efficiency of a heating system, or evaluate thermostats or controls other than to confirm that they actually turn a system on or off. The inspector did not remove covers or panels that were not readily accessible or removable, or dismantle any equipment, controls, or gauges except readily identifiable access covers designed to be removed by users. The inspector is not required to ignite pilot lights, or operate heating devices or systems that have been shut down, do not respond to normal controls, or any heating system when circumstances are not conducive to safe operation or when doing so will damage the equipment, inspect or evaluate heat exchangers concealed inside furnaces and boilers, the interior of chimneys and flues, and or or any heating equipment that is not readily accessible, or installed heating system accessories, such as humidifiers, air purifiers, motorized dampers, heat reclaimers; solar heating systems; or concealed distribution systems."

                                },
                                {
                                    "title":"Energy Source(s)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Gas": {
                                                "c": false
                                            },
                                            "LP": {
                                                "c": false
                                            },
                                            "Electric": {
                                                "c": false
                                            },
                                            "Oil": {
                                                "c": false
                                            },
                                            "Solar": {
                                                "c": false
                                            },
                                            "Wind": {
                                                "c": false
                                            },
                                            "Geo Thermal": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"System Type",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Central Forced Air": {
                                                "c": false
                                            },
                                            "In-Wall Space Heaters": {
                                                "c": false
                                            },
                                            "Baseboard Wall": {
                                                "c": false
                                            },
                                            "Radiant": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Boiler",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Water": {
                                                "c": false
                                            },
                                            "Steam": {
                                                "c": false
                                            },
                                            "Radiator": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Heat Pump",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Air": {
                                                "c": false
                                            },
                                            "Water": {
                                                "c": false
                                            },
                                            "Ground": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Stove",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Wood": {
                                                "c": false
                                            },
                                            "Solid Fuel(Pellet)": {
                                                "c": false
                                            },
                                            "Gas Log": {
                                                "c": false
                                            },
                                            "Verify Clearance to Combustibles": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Solar",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Passive": {
                                                "c": false
                                            },
                                            "Heat Sink": {
                                                "c": false
                                            },
                                            "Photo-Voltaic": {
                                                "c": false
                                            },
                                            "Panels": {
                                                "c": false
                                            },
                                            "Convection": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                        "title":"Heating System Images",
                                        "type": "image",
                                        "content": []

                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title": "Central Furnace or Heat Pump",
                            "items": [
                                {
                                        "title":"Brand Name",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Bryant": {
                                                "c": false
                                            },
                                            "OTHER (NEED MORE DATA)": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Capacity",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Text Entry?": {
                                                "c": false
                                            },
                                            "OTHER (NEED MORE DATA)": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Year of Manufacture",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "number",
                                        "value": ""
                                },
                                {
                                    "title":"Model Number",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "textbox",
                                        "value": ""
                                },
                                {
                                    "title":"Serial Number",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "textbox",
                                        "value": ""
                                },
                                {
                                    "title":"Posted Service History",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory (Annual Safety)": {
                                                "c": false
                                            },
                                            "Missing or Old": {
                                                "c": false
                                            },
                                            "Last Serviced Not Visible": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Posted Service History Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Dusty Cabinet": {
                                                "c": false
                                            },
                                            "Rust": {
                                                "c": false
                                            },
                                            "Corrosion": {
                                                "c": false
                                            },
                                            "Flame Distortion": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Central Furnace or Heat Pump Images",
                                        "type": "image",
                                        "content": []
                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title": "NEW SECTION?",
                            "items": [
                                {
                                    "title":"Ducting",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Plenum & Cold Air Returns": {
                                                "c": false
                                            },
                                            "Metal Duct": {
                                                "c": false
                                            },
                                            "Insulated Flex Duct": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Reduced Vent",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Metal": {
                                                "c": false
                                            },
                                            "PVC": {
                                                "c": false
                                            },
                                            "Verify Proper Pitch": {
                                                "c": false
                                            },
                                            "Rusted": {
                                                "c": false
                                            },
                                            "Deteriorated": {
                                                "c": false
                                            },
                                            "Disconnected": {
                                                "c": false
                                            },
                                            "Not Applicable": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Filter",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Electrostatic": {
                                                "c": false
                                            },
                                            "Paper": {
                                                "c": false
                                            },
                                            "Filter Fabric": {
                                                "c": false
                                            },
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor or Dirty": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Disconnect or Typical Safety Controls",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Functional": {
                                                "c": false
                                            },
                                            "Verify Location or Function": {
                                                "c": false
                                            },
                                            "Hazard": {
                                                "c": false
                                            },
                                            "Recommend Professional HVAC Re-Evaluation, Safety Inspection, and or or Remediation": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"NEW SECTION??? Images",
                                        "type": "image",
                                        "content": []

                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title": "Fireplaces or Stoves",
                            "items": [
                                {

                                    "title":"Conditions",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "The inspection of solid fuel and gas fireplaces, or heating stoves includes the readily visible components, the fuel source, damper, fire-box, and hearth. Each fireplace or heating stove in the home, including dampers, fire-boxes and hearths was inspected using normal readily accessible control devices to determine whether or not there was a functional and operable heat source present, and to ensure there was air for combustion in spaces where fossil fuel burning heating devices were located. The findings area describes the heating units, visible flue pipes and related components to ensure functional operation and proper clearance from combustibles, and describes any deficiencies of these systems or components."
                                },
                                {
                                    "title":"Limitations",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-160 of the Washington State Dept. of Licensing, the inspector is not required to: (1)inspect flues or verify the presence of flue liners beyond what can be safely and readily seen from the roof or the firebox of a stove or fireplace, (2)inspect any solid fuel device being operated at the time of the inspection, (3)dismantle fireplaces or stoves to inspect fire-boxes or remove rain caps to inspect chimney flues, (3)evaluate the installation or adequacy of fireplace inserts, or modifications to a fireplace, stove, or chimney, or (4)ignite fires in a fireplace or stove, perform a chimney smoke test or determine the adequacy of draft."

                                },
                                {
                                    "title":"Fireplace or Stove Type",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Masonry Firebox": {
                                                "c": false
                                            },
                                            "Metal FP Insert": {
                                                "c": false
                                            },
                                            "Direct Vent Gas FP": {
                                                "c": false
                                            },
                                            "Wood or Pellet Stove": {
                                                "c": false
                                            },
                                            "Masonry Flue Liner": {
                                                "c": false
                                            },
                                            "Metal Flue Liner": {
                                                "c": false
                                            },
                                            "Unlined Chase": {
                                                "c": false
                                            },
                                            "Venting Into Chimney Chase": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Mantle or Hearth",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Loose": {
                                                "c": false
                                            },
                                            "Settling Cracks": {
                                                "c": false
                                            },
                                            "Burned": {
                                                "c": false
                                            },
                                            "Verify Clearance to Combustibles": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Firebox",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "No Access": {
                                                "c": false
                                            },
                                            "Missing Liner": {
                                                "c": false
                                            },
                                            "Cracked Refractory Brick": {
                                                "c": false
                                            },
                                            "Missing or Loose Mortar": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Damper",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Missing": {
                                                "c": false
                                            },
                                            "No Access": {
                                                "c": false
                                            },
                                            "Inoperable or DTO": {
                                                "c": false
                                            },
                                            "Rusted": {
                                                "c": false
                                            },
                                            "Damaged or Broken": {
                                                "c": false
                                            },
                                            "Creosote Build-Up": {
                                                "c": false
                                            },
                                            "Deterioration": {
                                                "c": false
                                            },
                                            "Recommend Cleaning or Re-Evaluation or Repairs": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Chimney",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Framed": {
                                                "c": false
                                            },
                                            "Masonry": {
                                                "c": false
                                            },
                                            "Metal": {
                                                "c": false
                                            },
                                            "Class 'B'": {
                                                "c": false
                                            },
                                            "DV Wall Hood": {
                                                "c": false
                                            },
                                            "Cracked Wash": {
                                                "c": false
                                            },
                                            "Loose Mortar": {
                                                "c": false
                                            },
                                            "No Liner": {
                                                "c": false
                                            },
                                            "No Spark Arrestor": {
                                                "c": false
                                            },
                                            "Rust": {
                                                "c": false
                                            },
                                            "Creosote": {
                                                "c": false
                                            },
                                            "Missing Cricket": {
                                                "c": false
                                            },
                                            "Inadequate or Missing Flashing": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            },
                                            "Missing Burn Guard": {
                                                "c": false
                                            },
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Recommend Professional Re-Evaluation or Remediation": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Fireplaces or Stoves Images",
                                        "type": "image",
                                        "content": []
                                }
                            ],
                            "showvalue": false
                        }
                    ]
                },
                {
                    "title": "Cooling",
                    "pages": [
                        {
                            "title": "Cooling Systems",
                            "items": [
                                {
                                    "title":"Conditions",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "The inspection of the air conditioning system includes the cooling equipment; cooling distribution equipment, the energy sources, and a description noted in this report of any deficiencies of these systems or components: (1)Where an air conditioning system is present, readily accessible access panels or covers provided by the manufacturer or installer were opened to inspect the air conditioning system. (2)Where conditions allowed use of normal control devices, function of the controls and operative components of the complete system were inspected, and temperature differential was measured and recorded. (3)Interior exhaust fans or furnace blower motors may be present and or or operational at the time of the inspection but do not provide cooling. (BOLD THIS)Heat pump cycles were NOT reversed, and if outdoor temperatures were below 60 degrees during the past 72hrs, Air Conditioning systems were NOT tested.(BOLD THIS)"

                                },
                                {
                                    "title":"Limitations",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-130 of the Washington State Dept. of Licensing, the inspector is not required to determine the efficiency, or adequacy of the system, activate cooling systems that have been shut down, or operate cooling system components if the exterior temperature is below sixty degrees Fahrenheit, when doing so might damage the equipment, or when other circumstances are not conducive to safe operation, remove covers or panels that are not readily accessible or dismantle any equipment, controls, or gauges except readily identifiable access covers designed to be removed by users, check the coolant pressure  or  charge, or inspect the system for refrigerant leaks, inspect gas-fired refrigeration systems, evaporative coolers, wall or window-mounted air-conditioning units, evaluate digital-type thermostats or controls, or determine how much current the unit is drawing."
                                },
                                {
                                    "title":"Temperature Differential",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "number",
                                        "value": ""
                                },
                                {
                                    "title":"Air Conditioner Type",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "OTHER (NEEDS MORE DATA)": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                        "title":"Energy Source",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Natural Gas": {
                                                "c": false
                                            },
                                            "Propane": {
                                                "c": false
                                            },
                                            "Electric": {
                                                "c": false
                                            },
                                            "Central Air": {
                                                "c": false
                                            },
                                            "Heat Pump": {
                                                "c": false
                                            },
                                            "Fan Cooled": {
                                                "c": false
                                            },
                                            "Water": {
                                                "c": false
                                            },
                                            "Gas Chiller": {
                                                "c": false
                                            },
                                            "Swamp Cooler": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                        "title":"Cooling Systems Images",
                                        "type": "image",
                                        "content": []
                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title": "Evaporative Coil or Heat Pump (Inside)",
                            "items": [
                                {
                                        "title":"Brand Name",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "textbox",
                                        "value": {
                                            "Bryant": {
                                                "c": false
                                            },
                                            "OTHER (NEEDS MORE DATA)": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Capacity",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "textbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "OTHER (NEEDS MORE DATA)": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                        "title":"Year of Manufacture",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "number",
                                        "value": ""
                                },
                                {
                                        "title":"Model Number",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "textbox",
                                        "value": ""
                                },
                                {
                                        "title":"Serial Number",
                                        "type": "textbox",
                                        "value": ""
                                },
                                {
                                    "title":"Evaporative Coil or Heat Pump Images",
                                        "type": "image",
                                        "content": []
                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title": "Compressor or Condenser (Outside)",
                            "items": [
                                {
                                    "title":"Compressor or Condenser Brand Name",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Bryant": {
                                                "c": false
                                            },
                                            "OTHER (NEEDS MORE DATA)": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Compressor or Condenser Capacity",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "OTHER (NEEDS MORE DATA)": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Compressor or Condenser Year of Manufacture",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "number",
                                        "value": ""
                                },
                                {
                                    "title":"Model Number of Compressor or Condenser",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "textbox",
                                        "value": ""
                                },
                                {
                                    "title":"Serial Number of Compressor or Condenser",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "textbox",
                                        "value": ""
                                },
                                {
                                    "title":"Condition Compressor or Condenser",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Uneven Base": {
                                                "c": false
                                            },
                                            "Inadequate Base Height": {
                                                "c": false
                                            },
                                            "Obstructed Flow": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Refrigerant Lines",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Leaking": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            },
                                            "Worn": {
                                                "c": false
                                            },
                                            "Insulation Missing": {
                                                "c": false
                                            }
                                    }
                                },
                                {
                                    "title":"Compressor or Condensor Images",
                                        "type": "image",
                                        "content": []
                                    }
                            ],
                            "showvalue": false
                        }
                    ]
                },
                {
                    "title": "Electrical",
                    "pages": [
                        {
                            "title": "Electrical System",
                            "items": [
                                {
                                    "title":"Conditions",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "The inspection of the readily visible electrical system includes the service drop through the main panel; sub- panels including feeders; branch circuits, connected devices, and lighting fixtures, and describes any deficiencies of these systems or components. The report defines the type of primary service, whether overhead or underground, voltage, amperage, over-current protection devices (fuses or breakers) by inspecting the main and branch circuit conductors for proper over-current protection and condition by visual observation after removal of the readily accessible electrical main and sub-panel cover(s) where applicable, any circuit breaker panel or sub-panel known within the home inspection profession to have safety concerns, identifies whether or not existence of a connected service- grounding conductor and service-grounding electrode can be confirmed, and the presence or absence of solid conductor aluminum branch circuits, verifies the operation of a representative number of accessible switches, receptacles and light fixtures, the grounding and polarity of a representative number of receptacles (particularly in close proximity to plumbing fixtures or at the exterior), the function or absence of ground fault circuit interrupter (GFCI) protection and arc-fault circuit interrupter (AFCI) protection where recommended by industry standards."
                                },
                                {
                                    "title":"Limitations",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-110 of the Washington State Dept. of Licensing, the inspector is not required to: insert any tool, probe or testing device into the main or sub-panels, activate electrical systems or branch circuits that are not energized, operate circuit breakers, service disconnects or remove fuses, verify the continuity of connected service ground(s), or test every switch, receptacle, and fixture, move any objects, furniture, or appliances to gain access to any electrical component, remove switch and receptacle cover plates, dismantle any electrical device or control, except for the removal of the dead-front covers from the main service panel and sub-panels, or inspect electrical equipment thatAPOSTRPHEs not readily accessible, or ancillary systems, including but not limited to: timers, security systems, low voltage relays, smoke or heat detectors, antennas, intercoms, electrical de- icing tapes, lawn sprinkler wiring, swimming pool or spa wiring, central vacuum systems.(BOLD THIS) Solid conductor aluminum wiring may be hazardous and if reported, a licensed electrician should inspect the system to ensure itAPOSTROPHEs safe. Homes without ground fault protection should have GFCI devices installed, replaced, or upgraded where recommended by industry standards.(BOLD THIS)"
                                },
                                {
                                    "title":"Main Service Entry",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Underground": {
                                                "c": false
                                            },
                                            "Yard Post": {
                                                "c": false
                                            },
                                            "Not Visible or Accessible": {
                                                "c": false
                                            },
                                            "In Conduit": {
                                                "c": false
                                            },
                                            "Overhead": {
                                                "c": false
                                            },
                                            "Pole Unstable": {
                                                "c": false
                                            },
                                            "3 Cables": {
                                                "c": false
                                            },
                                            "4 Cables": {
                                                "c": false
                                            },
                                            "Copper": {
                                                "c": false
                                            },
                                            "Aluminum": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Condition of Main Service Entry",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Inadequate Clearances": {
                                                "c": false
                                            },
                                            "Damage": {
                                                "c": false
                                            },
                                            "Hazard": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Service Size",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "AMPS (NEED MORE DATA)": {
                                                "c": false
                                            },
                                            "VOLTS (NEED MORE DATA)": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Ground Connection",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Visible": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Meter Location",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Exterior Wall": {
                                                "c": false
                                            },
                                            "Yard Post": {
                                                "c": false
                                            },
                                            "Mechanical Closet": {
                                                "c": false
                                            },
                                            "Not Visible or Locked": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Meter Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Inadequate Access": {
                                                "c": false
                                            },
                                            "Damage": {
                                                "c": false
                                            },
                                            "Hazard": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Grounding",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Visible": {
                                                "c": false
                                            },
                                            "Ground Rods": {
                                                "c": false
                                            },
                                            "Ufer": {
                                                "c": false
                                            },
                                            "Bonded to Water or Gas Piping": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Ground Wiring",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Copper": {
                                                "c": false
                                            },
                                            "Aluminum": {
                                                "c": false
                                            },
                                            "Missing": {
                                                "c": false
                                            },
                                            "Not Visible or Accessible": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Condition of Main Electrical Disconnect",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Loose Clamp or Lug": {
                                                "c": false
                                            },
                                            "Missing": {
                                                "c": false
                                            },
                                            "Improper Bond": {
                                                "c": false
                                            },
                                            "Too Far From Entry": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Main Electrical Disconnect Location",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "With Meter": {
                                                "c": false
                                            },
                                            "Inside Main Panel": {
                                                "c": false
                                            },
                                            "Near Panel": {
                                                "c": false
                                            },
                                            "Fuse": {
                                                "c": false
                                            },
                                            "Breaker": {
                                                "c": false
                                            },
                                            "Switch": {
                                                "c": false
                                            },
                                            "Split-Bus": {
                                                "c": false
                                            },
                                            "Overloaded (>6 Hand Motions)": {
                                                "c": false
                                            }
                                    }
                                },
                                {
                                    "title":"Main Panel",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Visible or Accessible": {
                                                "c": false
                                            },
                                            "Blocked": {
                                                "c": false
                                            },
                                            "Not Evaluated": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Reason for Non Evaluation",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "OTHER (NEED MORE DATA)": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Breakers or Fuses",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Breakers": {
                                                "c": false
                                            },
                                            "Fuses": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Amps",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "NEED MORE DATA": {
                                                "c": false
                                            }
                                    }
                                },
                                {
                                    "title":"Volts",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "240": {
                                                "c": false
                                            },
                                            "OTHER (NEED MORE DATA)": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Breaker(s)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "GFCI Breakers": {
                                                "c": false
                                            },
                                            "AFCI Breakers": {
                                                "c": false
                                            },
                                            "Not Applicable": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Location",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Garage": {
                                                "c": false
                                            },
                                            "Basement": {
                                                "c": false
                                            },
                                            "With Meter": {
                                                "c": false
                                            },
                                            "Exterior Wall": {
                                                "c": false
                                            },
                                            "Yard Post": {
                                                "c": false
                                            },
                                            "Interior Wall": {
                                                "c": false
                                            },
                                            "Mechanical Room": {
                                                "c": false
                                            },
                                            "Laundry Room": {
                                                "c": false
                                            },
                                            "Utility Area": {
                                                "c": false
                                            },
                                            "Crawl Space": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Branch Wiring",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Copper": {
                                                "c": false
                                            },
                                            "Almuninum": {
                                                "c": false
                                            },
                                            "Tin Clad Copper": {
                                                "c": false
                                            },
                                            "Copper Clad Aluminum": {
                                                "c": false
                                            },
                                            "Non-Metallic Sheathed": {
                                                "c": false
                                            },
                                            "BX Cable": {
                                                "c": false
                                            },
                                            "Condiut": {
                                                "c": false
                                            },
                                            "Cloth-Wrapped": {
                                                "c": false
                                            },
                                            "Knob & Tube": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Condition of Branch Wiring",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Inadequate Access Clearances": {
                                                "c": false
                                            },
                                            "Dangling Wires": {
                                                "c": false
                                            },
                                            "Excessive Sheathing in Panel": {
                                                "c": false
                                            },
                                            "Double-Tapping": {
                                                "c": false
                                            },
                                            "Undersized Wiring": {
                                                "c": false
                                            },
                                            "Damage": {
                                                "c": false
                                            },
                                            "Rust": {
                                                "c": false
                                            },
                                            "Buried In Insulation": {
                                                "c": false
                                            },
                                            "Burned Breakers": {
                                                "c": false
                                            },
                                            "Dangerous Panel Type": {
                                                "c": false
                                            },
                                            "Improper Splicing": {
                                                "c": false
                                            },
                                            "Hazardous or Unsafe": {
                                                "c": false
                                            },
                                            "Recommend Professional Evaluation or Repairs": {
                                                "c": false
                                            }
                                    }
                                },
                                {
                                    "title":"Electrical System Images",
                                        "type": "image",
                                        "content": [
                    ]
                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title": "Fixtures, Switches, or Detectors",
                            "items": [
                                {
                                    "title":"Fixtures",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Missing or Removed": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Missing Bulbs": {
                                                "c": false
                                            },
                                            "Missing Covers": {
                                                "c": false
                                            },
                                            "Gaps": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Fixtures Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Inadequate Clearances": {
                                                "c": false
                                            },
                                            "Damage": {
                                                "c": false
                                            },
                                            "Hazard": {
                                                "c": false
                                            }
                                    }
                                },
                                {
                                    "title":"Switches or Receptacles",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Typical Grounded": {
                                                "c": false
                                            },
                                            "Some Grounded": {
                                                "c": false
                                            },
                                            "Typical Un-Grounded": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Condition of Switches or Receptacles",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Weak or Loose": {
                                                "c": false
                                            },
                                            "Missing or Removed": {
                                                "c": false
                                            },
                                            "Missing Cover Plates": {
                                                "c": false
                                            },
                                            "Dangling or Unmounted": {
                                                "c": false
                                            },
                                            "External Splicing": {
                                                "c": false
                                            },
                                            "Gaps Into Boxes": {
                                                "c": false
                                            },
                                            "Burned": {
                                                "c": false
                                            },
                                            "Open Ground": {
                                                "c": false
                                            },
                                            "Open Neutral": {
                                                "c": false
                                            },
                                            "Reverse Polarity": {
                                                "c": false
                                            },
                                            "Ungrounded 3-Prong": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            },
                                            "Hazardous or Unsafe": {
                                                "c": false
                                            },
                                            "Recommend Repair or Evaluation by Professional Electrician": {
                                                "c": false
                                            }
                                    }
                                },
                                {
                                    "title":"Carbon Monoxide Detectors",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Installed": {
                                                "c": false
                                            },
                                            "Missing or Recommended": {
                                                "c": false
                                            },
                                            "NOT Tested": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Smoke Detectors",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Installed": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Chirping or Low Batteries": {
                                                "c": false
                                            },
                                            "Missing": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Caution Label",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "CAUTION: Testing Detectors by pushing test buttons may be inconclusive"
                                },
                                {
                                    "title":"Fixtures, Switches, or Detectors Images",
                                        "type": "image",
                                        "content": [
                    ]
                                }
                            ],
                            "showvalue": false
                        }
                    ]
                },
                {
                    "title": "Interior",
                    "pages": [
                        {
                            "title": "Living Room",
                            "items": [
                                {
                                    "title":"Conditions",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "The inspection of the interior includes the walls, ceilings, floors, windows, and doors; steps, stairways, balconies and railings. The interior walls, ceilings, and floors were inspected for indications of concealed structural deficiencies, water infiltration, or major damage. The report verifies that steps, handrails, guard-rails, stairways and landings are installed wherever necessary, and indicates when they are missing or in need of repair, or when baluster spacing exceeds four inches, the condition and operation of a representative number of windows and doors, the overall general condition of cabinets and countertops, grout, and caulking at kitchen and bathroom counters, describes any non-cosmetic deficiencies of these systems or components, and comments on the presence or absence of smoke detectors."
                                },
                                {
                                    "title":"Limitations",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-140 of the Washington State Dept. of Licensing, the inspector is not required to verify whether all walls, floors, ceilings, doorways, cabinets and window openings are square, straight, level or plumb, operate any system or component that is shut down, not connected or otherwise inoperable, or that does not respond to normal user controls, the strength, adequacy, effectiveness, or efficiency of any system or component; causes of any condition, or deficiency the remaining service life of any system or component; or the methods, materials, or cost of corrections; future conditions including, but not limited to, failure of systems and components or report on cosmetic conditions related to the condition of interior components."
                                },
                                {
                                    "title":"Entry Door(s)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Solid Wood": {
                                                "c": false
                                            },
                                            "Metal": {
                                                "c": false
                                            },
                                            "Fiberglass": {
                                                "c": false
                                            },
                                            "Panel": {
                                                "c": false
                                            },
                                            "Hollow Core": {
                                                "c": false
                                            }
                                    }
                                },
                                {
                                    "title":"Entry Door(s) Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Sagging or Settled": {
                                                "c": false
                                            },
                                            "Rubbing or Binding": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            },
                                            "Hardware Issues": {
                                                "c": false
                                            },
                                            "Doorbell Inoperable": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Weatherstrip",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Missing or Damaged": {
                                                "c": false
                                            },
                                            "Poor Seal": {
                                                "c": false
                                            },
                                            "Ineffective Threshold": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Window(s)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Inaccessible": {
                                                "c": false
                                            },
                                            "Difficult To Operate (Needs Adjustment or Lubrication)": {
                                                "c": false
                                            },
                                            "Missing Hardware": {
                                                "c": false
                                            },
                                            "Inadequate Security": {
                                                "c": false
                                            },
                                            "Failed Thermal Seals": {
                                                "c": false
                                            },
                                            "Broken Panes": {
                                                "c": false
                                            },
                                            "Stained": {
                                                "c": false
                                            },
                                            "Weathered Sills": {
                                                "c": false
                                            },
                                            "Mold or Mildew": {
                                                "c": false
                                            },
                                            "Damage": {
                                                "c": false
                                            },
                                            "Deterioration": {
                                                "c": false
                                            }
                                    }
                                },
                                {
                                    "title":"Ceiling Fan",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Satisfactory": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Heat Source",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Missing or Inadequate": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Lights, Switches, or Receptacles (Refer To Electrical Section or SUB-HEADING? or DO WE NEED THIS SECTION?)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Appeared Functional": {
                                                "c": false
                                            },
                                            "Loose or Worn": {
                                                "c": false
                                            },
                                            "Missing": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Missing Cover Plates": {
                                                "c": false
                                            },
                                            "Ungrounded 3-Prong": {
                                                "c": false
                                            },
                                            "Inoperable GFCI": {
                                                "c": false
                                            },
                                            "Missing GFCI Protection": {
                                                "c": false
                                            },
                                            "Reversed Polarity": {
                                                "c": false
                                            },
                                            "OG or RP Within 6 Feet": {
                                                "c": false
                                            },
                                            "Burned": {
                                                "c": false
                                            },
                                            "Exposed Wires": {
                                                "c": false
                                            },
                                            "Hazardous or Unsafe": {
                                                "c": false
                                            },
                                            "Refer To Electrical Section": {
                                                "c": true
                                            },
                                            "Recommend Professional Evaluation": {
                                                "c": false
                                            }
                                    }
                                },
                                {
                                    "title":"Comments",
                                        "type": "textbox",
                                        "value": {}
                                },
                                {
                                    "title":"Living Room Images",
                                        "type": "image",
                                        "content": [
                    ]
                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title": "Kitchen",
                            "items": [
                                {
                                    "title":"Appliances",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Sink Disposer": {
                                                "c": false
                                            },
                                            "Fridge": {
                                                "c": false
                                            },
                                            "Dishwasher": {
                                                "c": false
                                            },
                                            "Oven": {
                                                "c": false
                                            },
                                            "Range": {
                                                "c": false
                                            },
                                            "Microwave": {
                                                "c": false
                                            },
                                            "Warmer": {
                                                "c": false
                                            },
                                            "Trash Compactor": {
                                                "c": false
                                            },
                                            "Cooler": {
                                                "c": false
                                            },
                                            "Water Filter": {
                                                "c": false
                                            },
                                            "Instant Hot": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Cabinets",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            },
                                            "Worn Finish": {
                                                "c": false
                                            },
                                            "Loose Drawers or Hinges": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Countertops",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Granite": {
                                                "c": false
                                            },
                                            "Laminate": {
                                                "c": false
                                            },
                                            "Tile": {
                                                "c": false
                                            },
                                            "Slab": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Countertops Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Worn": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            }
                                    }
                                },
                                {
                                    "title":"Backsplash & Self Edge",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal or Worn": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            }
                                    }
                                },
                                {
                                    "title":"Caulking",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Worn or Cracked or Gaps": {
                                                "c": false
                                            },
                                            "Improve at Sink, Back-Splash, Counters, or Fixtures": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Grout",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Cracked or Missing": {
                                                "c": false
                                            },
                                            "Loose": {
                                                "c": false
                                            },
                                            "Water Damage": {
                                                "c": false
                                            },
                                            "Recommend Sealing": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Exhaust Fan",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Missing": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                        "title":"Heat Source",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Missing or Inadequate": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Lights or Switches or Receptacles (Refer To Electrical Section)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Appeared Functional": {
                                                "c": false
                                            },
                                            "Loose or Worn": {
                                                "c": false
                                            },
                                            "Missing": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Missing Cover Plates": {
                                                "c": false
                                            },
                                            "Ungrounded 3-Prong": {
                                                "c": false
                                            },
                                            "Inoperable GFCI": {
                                                "c": false
                                            },
                                            "Missing GFCI Protection": {
                                                "c": false
                                            },
                                            "Reversed Polarity": {
                                                "c": false
                                            },
                                            "OG or RP Within 6 Feet": {
                                                "c": false
                                            },
                                            "Burned": {
                                                "c": false
                                            },
                                            "Exposed Wires": {
                                                "c": false
                                            },
                                            "Hazardous or Unsafe": {
                                                "c": false
                                            },
                                            "Recommend Professional Evaluation": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Kitchen Images",
                                        "type": "image",
                                        "content": [
                    ]
                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title": "Laundry",
                            "items": [
                                {
                                    "title":"Appliances",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "None": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Washer": {
                                                "c": false
                                            },
                                            "Dryer": {
                                                "c": false
                                            },
                                            "WH": {
                                                "c": false
                                            },
                                            "Furnace": {
                                                "c": false
                                            },
                                            "Conditioner": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Dryer",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Electric": {
                                                "c": false
                                            },
                                            "Gas": {
                                                "c": false
                                            },
                                            "Inoperable or OFF": {
                                                "c": false
                                            },
                                            "Cap Needed": {
                                                "c": false
                                            },
                                            "Hazard(s)": {
                                                "c": false
                                            },
                                            "Recommend Re-Evaluation": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Exhausted",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Wall": {
                                                "c": false
                                            },
                                            "Ceiling": {
                                                "c": false
                                            },
                                            "Floor": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Exhaust Appears",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Clogged or Loose or Poor": {
                                                "c": false
                                            }
                                    }
                                },
                                {
                                    "title":"Exhaust Fan",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Weak or Noisy": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Missing": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Laundry Images",
                                        "type": "image",
                                        "content": [
                    ]
                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title": "Bathroom(s)",
                            "items": [
                                {
                                    "title":"Walls or Ceilings",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "GWB": {
                                                "c": false
                                            },
                                            "Lath & Plaster": {
                                                "c": false
                                            },
                                            "Acoustic Tile": {
                                                "c": false
                                            },
                                            "Paneling": {
                                                "c": false
                                            },
                                            "Open Beam": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Condition of Walls or Ceilings",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Stains or Mildew": {
                                                "c": false
                                            },
                                            "Cracks": {
                                                "c": false
                                            },
                                            "Repairs": {
                                                "c": false
                                            },
                                            "PACM": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Floors",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Covered": {
                                                "c": false
                                            },
                                            "Sloping": {
                                                "c": false
                                            },
                                            "Squeaks": {
                                                "c": false
                                            },
                                            "Damaged": {
                                                "c": false
                                            },
                                            "Fungal Rot": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Caulking",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Worn or Cracked or Gaps": {
                                                "c": false
                                            },
                                            "Improve At Sink, Back-Splash, Tub or Shower Surround or  or Floor": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Heat",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Yes": {
                                                "c": false
                                            },
                                            "No": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            }
                                    }
                                },
                                {
                                    "title":"Exhaust Fan",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Yes": {
                                                "c": false
                                            },
                                            "No": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Lights or Switches or Receptacles (Refer To Electrical Section)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Appeared Functional": {
                                                "c": false
                                            },
                                            "Loose or Worn": {
                                                "c": false
                                            },
                                            "Missing": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Missing Cover Plates": {
                                                "c": false
                                            },
                                            "Ungrounded 3-Prong": {
                                                "c": false
                                            },
                                            "Inoperable GFCI": {
                                                "c": false
                                            },
                                            "Missing GFCI Protection": {
                                                "c": false
                                            },
                                            "Reversed Polarity": {
                                                "c": false
                                            },
                                            "OG or RP Within 6 Feet": {
                                                "c": false
                                            },
                                            "Burned": {
                                                "c": false
                                            },
                                            "Exposed Wires": {
                                                "c": false
                                            },
                                            "Hazardous or Unsafe": {
                                                "c": false
                                            },
                                            "Recommend Professional Evaluation": {
                                                "c": false
                                            }
                                        }
                                },
                                {
                                    "title":"Bathroom Images",
                                        "type": "image",
                                        "content": []
                                }
                            ],
                            "showvalue": false
                        },
                        {
                            "title": "General",
                            "items": [
                                {
                                    "title":"Walls or Ceilings",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "GWB": {
                                                "c": false
                                            },
                                            "Lath & Plaster": {
                                                "c": false
                                            },
                                            "Acoustic Tile": {
                                                "c": false
                                            },
                                            "Paneling": {
                                                "c": false
                                            },
                                            "Open Beam": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Walls or Ceilings Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Stains": {
                                                "c": false
                                            },
                                            "Moisture or Mildew": {
                                                "c": false
                                            },
                                            "Water Damage": {
                                                "c": false
                                            },
                                            "Settling": {
                                                "c": false
                                            },
                                            "Truss Uplift": {
                                                "c": false
                                            },
                                            "Nail Pops": {
                                                "c": false
                                            },
                                            "Holes": {
                                                "c": false
                                            },
                                            "Cracks": {
                                                "c": false
                                            },
                                            "Inadequate Repairs or Texture": {
                                                "c": false
                                            },
                                            "Sooting": {
                                                "c": false
                                            },
                                            "PACM": {
                                                "c": false
                                            },
                                            "Hazardous or Unsafe": {
                                                "c": false
                                            },
                                            "Recommend Professional Evaluation": {
                                                "c": false
                                            }
                                    }
                                },
                                {
                                    "title":"Floor Coverings",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Hard Surfaces (Tile or Stone)": {
                                                "c": false
                                            },
                                            "Hardwood or Laminate": {
                                                "c": false
                                            },
                                            "Vinyl": {
                                                "c": false
                                            },
                                            "Carpet": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Floor Coverings Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Excessive Wear": {
                                                "c": false
                                            },
                                            "Squeaks": {
                                                "c": false
                                            },
                                            "Stains": {
                                                "c": false
                                            },
                                            "Damage": {
                                                "c": false
                                            },
                                            "Sloping": {
                                                "c": false
                                            },
                                            "Uneven Surfaces": {
                                                "c": false
                                            },
                                            "Holes": {
                                                "c": false
                                            },
                                            "Wrinkled Carpet": {
                                                "c": false
                                            },
                                            "Trip Hazard(s)": {
                                                "c": false
                                            },
                                            "Repair(s)": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Interior Doors",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Passage": {
                                                "c": false
                                            },
                                            "Pocket": {
                                                "c": false
                                            },
                                            "Double": {
                                                "c": false
                                            },
                                            "Bi-Fold": {
                                                "c": false
                                            },
                                            "Bi-Pass": {
                                                "c": false
                                            },
                                            "Accordion": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Interior Doors Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Inaccessible": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Missing or Removed": {
                                                "c": false
                                            },
                                            "Missing Hardware": {
                                                "c": false
                                            },
                                            "Settled or Rubbing": {
                                                "c": false
                                            },
                                            "Improperly Hung or Sagging": {
                                                "c": false
                                            },
                                            "Holes": {
                                                "c": false
                                            },
                                            "Stains": {
                                                "c": false
                                            },
                                            "Cracked or Split Jambs": {
                                                "c": false
                                            },
                                            "Damage": {
                                                "c": false
                                            },
                                            "Inadequate Repairs": {
                                                "c": false
                                            },
                                            "Recommend Servicing or Adjusting": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Window Type(s)",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Sliders": {
                                                "c": false
                                            },
                                            "Fixed": {
                                                "c": false
                                            },
                                            "Single Hung": {
                                                "c": false
                                            },
                                            "Double Hung": {
                                                "c": false
                                            },
                                            "Awning": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                    "title":"Window(s) Condition",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Satisfactory": {
                                                "c": false
                                            },
                                            "Marginal": {
                                                "c": false
                                            },
                                            "Poor": {
                                                "c": false
                                            },
                                            "Difficult To Operate": {
                                                "c": false
                                            },
                                            "Improve Security": {
                                                "c": false
                                            },
                                            "Missing Hardware": {
                                                "c": false
                                            },
                                            "Broken Panes": {
                                                "c": false
                                            },
                                            "Failed Thermal Seals": {
                                                "c": false
                                            },
                                            "Verify Bedroom Egress": {
                                                "c": false
                                            },
                                            "Stained": {
                                                "c": false
                                            },
                                            "Weathered Sills": {
                                                "c": false
                                            },
                                            "Mold or Mildew": {
                                                "c": false
                                            },
                                            "Damage": {
                                                "c": false
                                            },
                                            "Deterioration": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                        "title":"Safety Concern",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "Where Bedrooms lack a door directly to the outside, a window should serve as an emergency egress.  Recommend regular evaluation and service (lubrication, adjustment) of bedroom windows to verify smooth operation and to ensure adequate emergency egress."

                                },
                                {
                                    "title":"Lights or Switches or Receptacles (Refer To Electrical Section) or DUPLICATE?!?!",
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Appeared Functional": {
                                                "c": false
                                            },
                                            "Loose or Worn": {
                                                "c": false
                                            },
                                            "Missing": {
                                                "c": false
                                            },
                                            "Inoperable": {
                                                "c": false
                                            },
                                            "Missing Cover Plates": {
                                                "c": false
                                            },
                                            "Ungrounded 3-Prong": {
                                                "c": false
                                            },
                                            "Inoperable GFCI": {
                                                "c": false
                                            },
                                            "Missing GFCI Protection": {
                                                "c": false
                                            },
                                            "Reversed Polarity": {
                                                "c": false
                                            },
                                            "OG or RP Within 6 Feet": {
                                                "c": false
                                            },
                                            "Burned": {
                                                "c": false
                                            },
                                            "Exposed Wires": {
                                                "c": false
                                            },
                                            "Hazardous or Unsafe": {
                                                "c": false
                                            },
                                            "Recommend Professional Evaluation": {
                                                "c": false
                                            }
                                        }

                                },
                                {
                                        "title":"General Images",
                                        "type": "image",
                                        "content": [
                    ]

                                }
                            ],
                            "showvalue": false
                        }
                    ]
                },
                {
                    "title": "Life or Safety",
                    "pages": [
                        {
                            "title": "Potential Safety Concerns",
                            "items": [
                                {
                                    "title":"Conditions","item": {
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "This list of potential hazards is not complete, and provides only a general notification of some of the possible life safety or health concerns associated with building materials, systems, components, and the forces of nature that may impact them. Those particular safety concerns, which fall within the scope of a specific category, may be noted here, or in their applicable section(s). In addition, the inspection report may exclude those systems or components that a client specifically requests not to be included in the scope of the inspection. Comments and information in this section are provided in an effort to help educate the client regarding possible safety risks, which may need further evaluation, and are NOT to take the place of expert or professional advice."
                                    }
                                },
                                {
                                    "title":"Limitations","item": {
                                        "required": false,
                                        "showvalue": false,
                                        "type": "presettext",
                                        "showcontent": true,
                                        "content": "The Home Inspection Standards of Practice of the Washington State Department of Licensing state that the inspector is NOT required to report the presence of potentially hazardous plants or animals including, but not limited to, wood destroying insects or diseases harmful to humans; the presence of any environmental hazards including, but not limited to mold, toxins, carcinogens, noise, contaminants, asbestos, lead, water, soil, air quality, or other environmental issues, or the effectiveness of any system installed or methods utilized to control or remove suspected hazardous substances. Unless specifically stated in the standards of practice, or in writing in the pre-inspection agreement, no safety hazards are included in the investigation."
                                    }
                                },
                                {
                                    "title":"Tripping or Falling Hazard(s)","item": {
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "Unsafe or Uneven Walking Surfaces": {
                                                "c": false
                                            },
                                            "Re-Evaluate": true,
                                            "Interior": {
                                                "c": false
                                            },
                                            "Exterior": {
                                                "c": false
                                            },
                                            "Steep Slope or Drop-Off": {
                                                "c": false
                                            },
                                            "Retaining Wall": {
                                                "c": false
                                            },
                                            "Driveway or Walkway(s)": {
                                                "c": false
                                            },
                                            "Landing": {
                                                "c": false
                                            },
                                            "Balcony": {
                                                "c": false
                                            },
                                            "Patio": {
                                                "c": false
                                            },
                                            "Deck": {
                                                "c": false
                                            },
                                            "Steps or Stairs": {
                                                "c": false
                                            },
                                            "Missing Guard or Handrail(s)": {
                                                "c": false
                                            },
                                            "Low Guard or Handrail(s)": {
                                                "c": false
                                            },
                                            "Root Heaving": {
                                                "c": false
                                            },
                                            "Erosion": {
                                                "c": false
                                            },
                                            "Cracks or Gaps or Missing Dividers": {
                                                "c": false
                                            }
                                        }
                                    }
                                },
                                {
                                    "title":"Fire Hazards","item": {
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Not Applicable": {
                                                "c": false
                                            },
                                            "None": {
                                                "c": false
                                            },
                                            "Missing or Inadequate Firewall": {
                                                "c": false
                                            },
                                            "Missing or Inadequate Fire-Door": {
                                                "c": false
                                            },
                                            "Excessive Storage": {
                                                "c": false
                                            },
                                            "Excessive Heat": {
                                                "c": false
                                            },
                                            "Cellulose Debris": {
                                                "c": false
                                            },
                                            "Roof Tear-Off Debris": {
                                                "c": false
                                            },
                                            "Entrapment or Locks": {
                                                "c": false
                                            },
                                            "Improve Bedroom Egress": {
                                                "c": false
                                            },
                                            "Verify Adequate CO & Fire Alarms": {
                                                "c": false
                                            }
                                        }
                                    }
                                },
                                {
                                    "title":"Pest Related","item": {
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "None": {
                                                "c": false
                                            },
                                            "Ponding or Breeding Water": {
                                                "c": false
                                            },
                                            "Potential Points of Pest Entry": {
                                                "c": false
                                            },
                                            "Rat Droppings Toxins": {
                                                "c": false
                                            },
                                            "Bee or Wasp Nests": {
                                                "c": false
                                            },
                                            "Racoon": {
                                                "c": false
                                            }
                                        }
                                    }
                                },
                                {
                                    "title":"Poisen Baits","item": {
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Insect": {
                                                "c": false
                                            },
                                            "Rodent": {
                                                "c": false
                                            }
                                        }
                                    }
                                },
                                {
                                    "title":"Building Materials (Refer To Specific Sections)","item": {
                                        "required": false,
                                        "showvalue": false,
                                        "type": "checkbox",
                                        "value": {
                                            "Missing Window Safety Glass": {
                                                "c": false
                                            },
                                            "Electrical Shock Hazard(s)": {
                                                "c": false
                                            },
                                            "Bio-Growth or Mold or Mildew": {
                                                "c": false
                                            },
                                            "PACM": {
                                                "c": false
                                            },
                                            "Friable ACM": {
                                                "c": false
                                            },
                                            "Lead": {
                                                "c": false
                                            },
                                            "Airborne or VOCs": {
                                                "c": false
                                            },
                                            "Potential Hidden Hazard(s)": {
                                                "c": false
                                            }
                                        }
                                    }
                                },
                                {
                                    "title":"Comments","item": {
                                        "required": false,
                                        "showvalue": false,
                                        "type": "textbox",
                                        "value": {}
                                    }
                                },
                                {
                                    "title":"Potential Safety Concern Images","item": {
                                        "type": "image",
                                        "content": [
                    ]
                                    }
                                }
                            ],
                            "showvalue": false
                        }
                    ]
                },
                {
                    "title": "Photo Appendix",
                    "pages": [
                        {
                            "title": "Additional Photos for Further Clarification",
                            "items": [
                                {
                                    "title":"Photo Appendix Images",
                                    "item": {
                                        "type": "photoAppendix",
                                        "content": []
                                    }
                                }

                            ]
                        }
                    ],
                    "showvalue": false

                }

            ]
    };
