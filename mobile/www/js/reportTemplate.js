var reportOne = 
    
{
  "name": "Name of the Report",
  "title": "Name of the Report",
  "date":"3/22/2016",
  "type":"template",
  "inspectiontype":"",
  "status":"",
  "sections": [
    {
      "title": "Field Notes",
      "color": "#000000",
      "pages": [
        {
          "title": "Client Info",
          "items": [
            {
              "title": "Clientinfo",
              "required": true, "answered":false,
              "type": "clientinfo",
              "value": {
                "firstName": "Cameron",
                "lastName": "Lilly",
                "address": "4119 E Juanita Ave",
                "addressTwo": "",
                "city": "Gilbert",
                "state": "AZ",
                "postalCode": "85234"
              }
            },
            {
              "title": "Report ID",
              "required": true, "answered":false,
              "type": "text",
              "value": "111222"
            },
            {
              "title": "Report Date",
              "required": true, "answered":false,
              "type": "date",
              "value": "02-02-2016"
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
              "required": true, "answered":false,
              "showvalue": false,
              "type": "select",
              "content": [
                {
                  "title": "Full",
                  "rrTitle": 1,
                  "rrVal": 2

                },
                {
                  "title": "Partial",
                  "rrTitle": 1,
                  "rrVal": 2
                },
                {
                  "title": "Abbreviated",
                  "rrTitle": 1,
                  "rrVal": 2
                },
                {
                  "title": "Ancillary",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Limited",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "203(k)",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Rehabilitation",
                  "rrTitle": 0,
                  "rrVal": 2
                }
              ],
              "value": ""
            },
            {
              "title": "Year Built",
              "required": true, "answered":false,
              "showvalue": false,
              "type": "number",
              "value": ""
            },
            {
              "title": "Squarefeet of the Property",
              "required": true, "answered":false,
              "showvalue": false,
              "type": "number",
              "value":0
            },
            {
              "title": "Type of Home",
              "required": true, "answered":false,
              "showvalue": false,
              "type": "radio",
              "content": [
                {
                  "title": "Single Family",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Single Use",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Multiple Use",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Duplex",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Triplex",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Multi Family",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Detatched",
                  "rrTitle": 0,
                  "rrVal": 2
                }
              ],
              "value": ""
            },
            {
              "title": "Property Use",
              "required": true, "answered":false,
              "type": "radio",
              "content": [
                {
                  "title": "Residential",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Apartment",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Retail Store",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Business",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Industrial",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Commercial",
                  "rrTitle": 0,
                  "rrVal": 2
                }
              ],
              "value": ""
            },
            {
              "title": "Number of Stories",
              "required": true, "answered":false,
              "showvalue": false,
              "type": "radio",
              "content": [
                {
                  "title": "Rambler",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "One Level",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Split-Entry",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Split-Level",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "One Story",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "1 1 or 2 Story",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Two-Story",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Three-Story",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Mid-Rise",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Multi-Level",
                  "rrTitle": 0,
                  "rrVal": 2
                }
              ],
              "value": ""
            },
            {
              "title": "House Frame",
              "required": true, "answered":false,
              "showvalue": false,
              "type": "radio",
              "content": [
                {
                  "title": "Wood-Framed",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Steel-Framed",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Concrete",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "CMU or Block",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Masonry",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Tilt-Up",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Wood-Frame on Steel Carriage",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "ICF",
                  "rrTitle": 0,
                  "rrVal": 2
                }
              ],
              "value": ""
            },
            {
              "title": "Property Type",
              "required": true, "answered":false,
              "showvalue": false,
              "type": "radio",
              "content": [
                {
                  "title": "Home",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Twin Home",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Town Home",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Mobile Home",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Log Home",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Manufactured Home",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Prefabbed Structure",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Condominium",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Building",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Garage",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Low-Rise",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Mid-Rise",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "High-Rise",
                  "rrTitle": 0,
                  "rrVal": 2
                }
              ],
              "value": ""
            },
            {
              "title": "Configurations",
              "required": true, "answered":false,
              "showvalue": true,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "With Lower Parking Garage",
                  "c": true,
                  "i":["./img/Studphen.png", "./img/Studphen.png", "./img/Studphen.png"],
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "With Basement & Garage",
                  "c": true,
                  "i":["./img/rod.png", "./img/rod.png", "./img/rod.png"],
                  "rrTitle": 1,
                  "rrVal": 2
                },
                {
                  "title": "With Garage",
                  "c": true,
                  "rrTitle": 0,
                  "rrVal": 3
                },
                {
                  "title": "With Garage & Crawlspace",
                  "c": true
                },
                {
                  "title": "With Full Basement",
                  "c": false
                },
                {
                  "title": "With Daylight Basement",
                  "c": false
                },
                {
                  "title": "With Basement & Crawlspace(s)",
                  "c": false
                },
                {
                  "title": "With Crawlspace",
                  "c": false
                },
                {
                  "title": "With Slab-On-Grade",
                  "c": false
                },
                {
                  "title": "Over Adjoining Unit(s)",
                  "c": false
                },
                {
                  "title": "Over Adjoining Basement Unit",
                  "c": false
                }
              ]
            },
            {
              "title": "Property Orientation",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "select",
              "content": [
                {
                  "title": "North",
                  "rrTitle": ""
                },
                {
                  "title": "East",
                  "rrTitle": ""
                },
                {
                  "title": "West",
                  "rrTitle": ""
                },
                {
                  "title": "South",
                  "rrTitle": ""
                },
                {
                  "title": "North-East",
                  "rrTitle": ""
                },
                {
                  "title": "North-West",
                  "rrTitle": ""
                },
                {
                  "title": "South-East",
                  "rrTitle": ""
                },
                {
                  "title": "South-West",
                  "rrTitle": ""
                }
              ],
              "value": ""
            },
            {
              "title": "Vehicle Parking",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "At Curbside",
                  "c": false
                },
                {
                  "title": "In a Rear Alley",
                  "c": false
                },
                {
                  "title": "In the Driveway",
                  "c": false
                },
                {
                  "title": "In an Attached Garage(s)",
                  "c": false
                },
                {
                  "title": "In a Detached Garage(s)",
                  "c": false
                },
                {
                  "title": "In an Attached Carport",
                  "c": false
                },
                {
                  "title": "In a Detached Carport",
                  "c": false
                },
                {
                  "title": "In a Covered Parking Space",
                  "c": false
                },
                {
                  "title": "In an Open Parking Space",
                  "c": false
                },
                {
                  "title": "In a Secured Parking Garage",
                  "c": false
                },
                {
                  "title": "In an Open Parking Garage",
                  "c": false
                },
                {
                  "title": "In an Open, Striped Parking Lot",
                  "c": false
                }
              ]
            },
            {
              "title": "Utilities",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Electricity",
                  "c": false
                },
                {
                  "title": "Water",
                  "c": false
                },
                {
                  "title": "Gas",
                  "c": false
                },
                {
                  "title": "Oil",
                  "c": false
                },
                {
                  "title": "Propane",
                  "c": false
                }
              ]
            },
            {
              "title": "What Utilities were OFF",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Electricity",
                  "c": false
                },
                {
                  "title": "Water",
                  "c": false
                },
                {
                  "title": "Gas",
                  "c": false
                },
                {
                  "title": "Oil",
                  "c": false
                },
                {
                  "title": "Propane",
                  "c": false
                }
              ]
            },
            {
              "title": "Property Occupancy",
              "required": true, "answered":false,
              "type": "select",
              "content": [
                {
                  "title": "Occupied",
                  "rrTitle": ""
                },
                {
                  "title": "Mostly Occupied",
                  "rrTitle": ""
                },
                {
                  "title": "Mostly Vacant",
                  "rrTitle": ""
                },
                {
                  "title": "Vacant",
                  "rrTitle": ""
                }
              ],
              "value": ""
            },
            {
              "title": "Persons Present",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Inspector",
                  "c": false
                },
                {
                  "title": "Buyer",
                  "c": false
                },
                {
                  "title": "Resident",
                  "c": false
                },
                {
                  "title": "Builder or Builders Rep",
                  "c": false
                },
                {
                  "title": "Owner or Seller",
                  "c": false
                },
                {
                  "title": "Agent",
                  "c": false
                },
                {
                  "title": "Friends or Other",
                  "c": false
                }
              ]
            },
            {
              "title": "Person(s) Providing Property Access",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "radio",
              "content": [
                {
                  "title": "Inspector",
                  "rrTitle": ""
                },
                {
                  "title": "Buyer",
                  "rrTitle": ""
                },
                {
                  "title": "Resident",
                  "rrTitle": ""
                },
                {
                  "title": "Builder or Builders Rep",
                  "rrTitle": ""
                },
                {
                  "title": "Owner or Seller",
                  "rrTitle": ""
                },
                {
                  "title": "Agent",
                  "rrTitle": ""
                },
                {
                  "title": "Friends or Other",
                  "rrTitle": ""
                }
              ],
              "value": ""
            },
            {
              "title": "Property Specifications Images",
              "type": "image",
              "content": []
            }
          ],
          "showvalue": false
        }
      ]
    },
    {
      "title": "Site",
      "color": "#EC407A",
      "pages": [
        {
          "title": "Evaluation",
          "items": [
            {
              "title": "Conditions",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "The inspection of the site includes the building perimeter, land grade, and water drainage directly adjacent to the foundation; trees and vegetation that adversely affect the structure; walks, grade steps, driveways, patios, and retaining walls contiguous with the structure.\n The report describes the material used for driveways, walkways, patios and other flatwork around the home, the serviceability of the driveways, steps, walkways, patios, flatwork and retaining walls contiguous with the structure, proper grading and drainage slope, vegetation in close proximity to the home, and a description of any deficiencies of these systems or components."
            },
            {
              "title": "Limitations",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-170 of the Washington State Dept. of Licensing, the inspector is not required to: (1)inspect fences, privacy walls or retaining walls that are not contiguous with the structure, (2)report the condition of soil, trees, shrubs or vegetation unless they adversely affect the structure, (3)evaluate hydrological or geological conditions, (4)determine the adequacy of bulkheads, sea-walls, break- walls, and docks."
            },
            {
              "title": "Driveway",
              "type": "radio",
              "content": [
                {
                  "title": "Not Applicable",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Concrete",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Asphalt",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Pavers or stone or brick",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Dirt or gravel",
                  "rrTitle": 0,
                  "rrVal": 2
                }
              ],
              "value": ""
            },
            {
              "title": "Driveway Condition",
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Pitched towards home",
                  "c": false
                },
                {
                  "title": "Typical cracks",
                  "c": false
                },
                {
                  "title": "Large cracks",
                  "c": false
                },
                {
                  "title": "Root heaving",
                  "c": false
                },
                {
                  "title": "Uneven",
                  "c": false
                },
                {
                  "title": "Trip or Falling Hazard",
                  "c": false
                }
              ]
            },
            {
              "title": "Patio",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "radio",
              "content": [
                {
                  "title": "Not Applicable",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Concrete",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Paver or stone or brick",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Wood or Composite",
                  "rrTitle": 0,
                  "rrVal": 2
                },
                {
                  "title": "Covered",
                  "rrTitle": 0,
                  "rrVal": 2
                }
              ],
              "value": ""
            },
            {
              "title": "Patio Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Typical cracks",
                  "c": false
                },
                {
                  "title": "Large cracks",
                  "c": false
                },
                {
                  "title": "Gaps",
                  "c": false
                },
                {
                  "title": "Holes",
                  "c": false
                },
                {
                  "title": "Mildew",
                  "c": false
                },
                {
                  "title": "Damage",
                  "c": false
                },
                {
                  "title": "Settled",
                  "c": false
                },
                {
                  "title": "Uneven Surface",
                  "c": false
                },
                {
                  "title": "Trip or Falling Hazard",
                  "c": false
                }
              ]
            },
            {
              "title": "Walkways and Steps",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Uneven",
                  "c": false
                },
                {
                  "title": "Large cracks",
                  "c": false
                },
                {
                  "title": "Root heaving",
                  "c": false
                },
                {
                  "title": "Moss build-up",
                  "c": false
                },
                {
                  "title": "Missing spacers",
                  "c": false
                },
                {
                  "title": "Settled",
                  "c": false
                },
                {
                  "title": "Trip hazard",
                  "c": false
                },
                {
                  "title": "Missing handrails",
                  "c": false
                },
                {
                  "title": "Missing safety glass",
                  "c": false
                }
              ]
            },
            {
              "title": "Retaining Wall",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "None",
                  "c": false
                },
                {
                  "title": "Verify",
                  "c": false
                },
                {
                  "title": "Treated Wood",
                  "c": false
                },
                {
                  "title": "Railroad Ties",
                  "c": false
                },
                {
                  "title": "Concrete",
                  "c": false
                },
                {
                  "title": "Concrete Blocks",
                  "c": false
                },
                {
                  "title": "CMU or Blocks",
                  "c": false
                },
                {
                  "title": "Gabions",
                  "c": false
                },
                {
                  "title": "Rockery",
                  "c": false
                },
                {
                  "title": "Masonry",
                  "c": false
                },
                {
                  "title": "Cemented Stone",
                  "c": false
                }
              ]
            },
            {
              "title": "Retaining Wall Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                },
                {
                  "title": "Leaning",
                  "c": false
                },
                {
                  "title": "Leaking or Drainage Concern",
                  "c": false
                },
                {
                  "title": "Trip or Falling Hazard",
                  "c": false
                }
              ]
            },
            {
              "title": "Safety Fencing Location",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Water Feature",
                  "c": false
                },
                {
                  "title": "Drop-off or Retaining Wall",
                  "c": false
                },
                {
                  "title": "Steep Slope",
                  "c": false
                },
                {
                  "title": "TYPE (Needs Greater Definition)",
                  "c": false
                }
              ]
            },
            {
              "title": "Safety Fencing Type",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Concrete",
                  "c": false
                },
                {
                  "title": "Wood",
                  "c": false
                },
                {
                  "title": "Privacy",
                  "c": false
                },
                {
                  "title": "Chainlink",
                  "c": false
                },
                {
                  "title": "Masonry",
                  "c": false
                },
                {
                  "title": "Rail",
                  "c": false
                },
                {
                  "title": "Wire",
                  "c": false
                },
                {
                  "title": "Plastic or Vinyl",
                  "c": false
                }
              ]
            },
            {
              "title": "Safety Fencing Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Maginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Missing",
                  "c": false
                },
                {
                  "title": "Trip or Falling Hazard",
                  "c": false
                },
                {
                  "title": "Leaning",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                },
                {
                  "title": "Verify Adequate Height",
                  "c": false
                },
                {
                  "title": "Hazardous",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Landscaping",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Inspected",
                  "c": false
                },
                {
                  "title": "Poor Earth-to-Wood Separation",
                  "c": false
                },
                {
                  "title": "Yard Steps",
                  "c": false
                },
                {
                  "title": "Drainage",
                  "c": false
                },
                {
                  "title": "Negative Surrounding Grade",
                  "c": false
                },
                {
                  "title": "Overgrown Foliage",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Safety Concern",
              "required": false, "answered":false,
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
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Concrete",
                  "c": false
                },
                {
                  "title": "Pavers or Stone or Brick",
                  "c": false
                },
                {
                  "title": "Wood or Composite",
                  "c": false
                },
                {
                  "title": "Covered",
                  "c": false
                }
              ]
            },
            {
              "title": "Porch or Stoop Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Verify Attachment",
                  "c": false
                },
                {
                  "title": "Loose or Missing Railings",
                  "c": false
                },
                {
                  "title": "Trip Hazard(s)",
                  "c": false
                },
                {
                  "title": "Typical Cracks",
                  "c": false
                },
                {
                  "title": "Large Cracks",
                  "c": false
                },
                {
                  "title": "Gaps or Holes",
                  "c": false
                },
                {
                  "title": "Weathered Finish",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                },
                {
                  "title": "Settled",
                  "c": false
                },
                {
                  "title": "Earth Contact",
                  "c": false
                },
                {
                  "title": "Mildew",
                  "c": false
                },
                {
                  "title": "Fungal Rot or Probed",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Yard Steps",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Uneven",
                  "c": false
                },
                {
                  "title": "Large Cracks",
                  "c": false
                },
                {
                  "title": "Root Heaving",
                  "c": false
                },
                {
                  "title": "Moss Build-Up",
                  "c": false
                },
                {
                  "title": "Missing Spacers",
                  "c": false
                },
                {
                  "title": "Settled",
                  "c": false
                },
                {
                  "title": "Trip Hazard",
                  "c": false
                },
                {
                  "title": "Missing Handrails",
                  "c": false
                },
                {
                  "title": "Missing Safety Glass",
                  "c": false
                }
              ]
            },
            {
              "title": "Deck or Balcony",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Raised",
                  "c": false
                },
                {
                  "title": "Roof-top",
                  "c": false
                },
                {
                  "title": "Covered",
                  "c": false
                },
                {
                  "title": "Wood or Composite",
                  "c": false
                },
                {
                  "title": "PVC",
                  "c": false
                }
              ]
            },
            {
              "title": "Deck or Balcony Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Loose or Missing Railings",
                  "c": false
                },
                {
                  "title": "Weathered Finish",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                },
                {
                  "title": "Settled",
                  "c": false
                },
                {
                  "title": "Earth Contact",
                  "c": false
                },
                {
                  "title": "Mildew",
                  "c": false
                },
                {
                  "title": "Fungal Rot or Probed",
                  "c": false
                },
                {
                  "title": "Verify Attachment",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Moisture Conditions",
              "required": false, "answered":false,
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
      "color": "#795649",
      "pages": [
        {
          "title": "Siding  or  Wall Cladding",
          "items": [
            {
              "title": "Conditions",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "An inspection of the exterior includes the visible wall coverings, trim, protective coatings and sealants, windows and doors, attached porches, decks, steps, balconies, handrails, guard-rails, carports, eaves, soffit(s), fascia(s) and visible exterior portions of chimneys. The findings show whether or not the exterior components were probed where deterioration was suspected or where clear indications of possible deterioration existed, and the manner in which the exterior components were inspected. (Probing is not required or performed when probing would damage any finished surface, or where no deterioration is suspected) The summary section describes some deficiencies of these systems or components. All readily accessible exterior components, visible at the perimeter, are inspected from ground level."
            },
            {
              "title": "Limitations",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-080 of the Washington State Dept. of Licensing, the inspector is not required to inspect buildings, decks, patios, fences, retaining walls, and other structures detached from the dwelling, safety type glass or the integrity of thermal window seals, flues or verify the presence of flue liners beyond what can be safely and readily seen from the roof or the firebox of a stove or fireplace, test or evaluate the operation of security locks, devices or systems, enter areas beneath decks with less than five feet of clearance from the underside of joists to grade, evaluate the function or condition of shutters, awnings, storm doors, storm windows, screens, and similar accessories."
            },
            {
              "title": "Type(s) of Wall Cladding",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Brick",
                  "c": false
                },
                {
                  "title": "Stone",
                  "c": false
                },
                {
                  "title": "Stucco",
                  "c": false
                },
                {
                  "title": "Metal",
                  "c": false
                },
                {
                  "title": "Vinyl",
                  "c": false
                },
                {
                  "title": "Cement Board",
                  "c": false
                },
                {
                  "title": "Wood",
                  "c": false
                },
                {
                  "title": "Fiberboard",
                  "c": false
                },
                {
                  "title": "Hardi-Board or Plank",
                  "c": false
                },
                {
                  "title": "Panels or Sheets",
                  "c": false
                },
                {
                  "title": "Shingles",
                  "c": false
                },
                {
                  "title": "T-111",
                  "c": false
                },
                {
                  "title": "Lapped",
                  "c": false
                },
                {
                  "title": "T&G",
                  "c": false
                },
                {
                  "title": "Vertical Channel",
                  "c": false
                },
                {
                  "title": "EIFS",
                  "c": false
                },
                {
                  "title": "Pre 1996 EIFS",
                  "c": false
                },
                {
                  "title": "Recalled LP",
                  "c": false
                },
                {
                  "title": "Friable PACM",
                  "c": false
                }
              ]
            },
            {
              "title": "Wall Cladding Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Loose",
                  "c": false
                },
                {
                  "title": "Gaps or Holes",
                  "c": false
                },
                {
                  "title": "Buckled",
                  "c": false
                },
                {
                  "title": "Tight Butt Joints",
                  "c": false
                },
                {
                  "title": "Missing Joint Flashing",
                  "c": false
                },
                {
                  "title": "Broken or Damaged",
                  "c": false
                },
                {
                  "title": "Inadequate Coverage",
                  "c": false
                },
                {
                  "title": "Peeling Paint",
                  "c": false
                },
                {
                  "title": "Weathered",
                  "c": false
                },
                {
                  "title": "Pest Issues",
                  "c": false
                },
                {
                  "title": "Cracked or Bulging",
                  "c": false
                },
                {
                  "title": "Mildew",
                  "c": false
                },
                {
                  "title": "Deteriorated",
                  "c": false
                },
                {
                  "title": "Fungal Rot or Probed",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Flashing at Fenestrations",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Missing",
                  "c": false
                },
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Defective",
                  "c": false
                },
                {
                  "title": "Loose",
                  "c": false
                },
                {
                  "title": "Gaps or Holes",
                  "c": false
                },
                {
                  "title": "Exposed Structure",
                  "c": false
                },
                {
                  "title": "Recommend Re-Evaluate or Repair",
                  "c": false
                }
              ]
            },
            {
              "title": "Trim or Soffit or Fascia",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Wood",
                  "c": false
                },
                {
                  "title": "Fiberboard",
                  "c": false
                },
                {
                  "title": "Masonry",
                  "c": false
                },
                {
                  "title": "EIFS",
                  "c": false
                },
                {
                  "title": "Metal",
                  "c": false
                },
                {
                  "title": "Vinyl",
                  "c": false
                },
                {
                  "title": "Enclosed Soffit",
                  "c": false
                },
                {
                  "title": "Open Eaves",
                  "c": false
                },
                {
                  "title": "Screened Ventilation",
                  "c": false
                },
                {
                  "title": "Unflashed BRT or Out-Lookers",
                  "c": false
                }
              ]
            },
            {
              "title": "Trim or Soffit or Fascia Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Loose",
                  "c": false
                },
                {
                  "title": "Gaps or Holes",
                  "c": false
                },
                {
                  "title": "Missing Pieces",
                  "c": false
                },
                {
                  "title": "Exposed Wood",
                  "c": false
                },
                {
                  "title": "Loose or Missing Flashing",
                  "c": false
                },
                {
                  "title": "Poor Protection or Coverage",
                  "c": false
                },
                {
                  "title": "Stains",
                  "c": false
                },
                {
                  "title": "Peeling Paint",
                  "c": false
                },
                {
                  "title": "Weathered or Worn",
                  "c": false
                },
                {
                  "title": "Deterioration",
                  "c": false
                },
                {
                  "title": "Fungal Rot",
                  "c": false
                },
                {
                  "title": "Broken or Damaged",
                  "c": false
                },
                {
                  "title": "Pest Issues",
                  "c": false
                },
                {
                  "title": "Foliage Contact",
                  "c": false
                },
                {
                  "title": "Potential Hidden Damage",
                  "c": false
                },
                {
                  "title": "Recommend Re-Evaluation",
                  "c": false
                }
              ]
            },
            {
              "title": "Siding  or  Wall Cladding Images",
              "type": "image",
              "content": []
            }
          ]
        },
        {
          "title": "Wall Fenestrations",
          "items": [
            {
              "title": "Window Frame or Trim",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Wood",
                  "c": false
                },
                {
                  "title": "Aluminum or Metal",
                  "c": false
                },
                {
                  "title": "Clad",
                  "c": false
                },
                {
                  "title": "Vinyl",
                  "c": false
                },
                {
                  "title": "Fiberglass",
                  "c": false
                }
              ]
            },
            {
              "title": "Window Frame or Trim Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Gaps",
                  "c": false
                },
                {
                  "title": "Missing Pieces",
                  "c": false
                },
                {
                  "title": "Exposed Wood",
                  "c": false
                },
                {
                  "title": "Missing Flashing",
                  "c": false
                },
                {
                  "title": "Weathered or Worn Finish",
                  "c": false
                },
                {
                  "title": "Peeling Paint or Inadequate Coverage",
                  "c": false
                },
                {
                  "title": "Missing Caulking",
                  "c": false
                },
                {
                  "title": "Broken Glass",
                  "c": false
                },
                {
                  "title": "Failed Thermal Seal",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                },
                {
                  "title": "Deteriorated",
                  "c": false
                },
                {
                  "title": "Fungal Rot",
                  "c": false
                }
              ]
            },
            {
              "title": "Exterior Doors",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Metal",
                  "c": false
                },
                {
                  "title": "Wood",
                  "c": false
                },
                {
                  "title": "Fiberglass",
                  "c": false
                }
              ]
            },
            {
              "title": "Exterior Doors Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Missing or Inadequate Threshold",
                  "c": false
                },
                {
                  "title": "Missing or Inadequate Weather-Strip",
                  "c": false
                },
                {
                  "title": "Missing or Inadequate Hardware",
                  "c": false
                },
                {
                  "title": "Repairs Needed",
                  "c": false
                }
              ]
            },
            {
              "title": "Caulking",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Weathered",
                  "c": false
                },
                {
                  "title": "Stretched",
                  "c": false
                },
                {
                  "title": "Cracked",
                  "c": false
                },
                {
                  "title": "Gaps",
                  "c": false
                },
                {
                  "title": "Missing",
                  "c": false
                },
                {
                  "title": "Recommend sealing all perforations through the exterior wall surface",
                  "c": false
                }
              ]
            },
            {
              "title": "Wall Fenestrations Images",
              "type": "image",
              "content": []
            }
          ]
        },
        {
          "title": "Attached Garage or Carport",
          "items": [
            {
              "title": "Conditions",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "The inspection of attached garages and carports includes their framing, siding, roof, doors, windows, and installed electrical  or  mechanical systems pertaining to the operation of the home, and describes any deficiencies of these systems or components. The report shows the condition and function of the overhead garage doors and associated hardware, the tested function of the garage door openers, their auto-reverse systems and secondary entrapment devices (photoelectric and edge sensors) when present, the condition and installation of any pedestrian door(s), and or or fire separation between the house and garage when applicable, and the presence of any fire hazard or ignition source (gas and electric water heaters, electrical receptacles, electronic air cleaners, motors of installed appliances, etc.) that is within eighteen inches of the garage floor."
            },
            {
              "title": "Limitations",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-180 of the Washington State Dept. of Licensing, the inspector is not required to: (1)determine whether or not a solid core pedestrian door that is not labeled is fire rated, (2)verify the functionality of garage door opener remote controls, (3)move vehicles or personal property, (4)operate any equipment unless otherwise addressed in the standards of practice."
            },
            {
              "title": "Vehicle Parking",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Curbside",
                  "c": false
                },
                {
                  "title": "Space",
                  "c": false
                },
                {
                  "title": "Public Garage",
                  "c": false
                },
                {
                  "title": "Carport",
                  "c": false
                },
                {
                  "title": "Garage",
                  "c": false
                },
                {
                  "title": "Attached",
                  "c": false
                },
                {
                  "title": "Detached",
                  "c": false
                }
              ]
            },
            {
              "title": "Floor",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Concrete Slab",
                  "c": false
                },
                {
                  "title": "Sealed",
                  "c": false
                },
                {
                  "title": "Asphalt",
                  "c": false
                },
                {
                  "title": "Pavers or Cobblestone",
                  "c": false
                },
                {
                  "title": "Gravel",
                  "c": false
                },
                {
                  "title": "Dirt",
                  "c": false
                }
              ]
            },
            {
              "title": "Floor Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Sloping",
                  "c": false
                },
                {
                  "title": "Typical Cracks",
                  "c": false
                },
                {
                  "title": "Large Cracks",
                  "c": false
                },
                {
                  "title": "Trip Hazards",
                  "c": false
                },
                {
                  "title": "Efflorescence",
                  "c": false
                },
                {
                  "title": "Not Visible",
                  "c": false
                },
                {
                  "title": "Excessive Storage",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Firewall Location",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Above Living Space",
                  "c": false
                },
                {
                  "title": "Below Living Space",
                  "c": false
                },
                {
                  "title": "Adjoining Walls",
                  "c": false
                }
              ]
            },
            {
              "title": "Firewall Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Penetrations",
                  "c": false
                },
                {
                  "title": "Pet Door",
                  "c": false
                },
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                }
              ]
            },
            {
              "title": "Firedoor Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Door",
                  "c": false
                },
                {
                  "title": "Threshod",
                  "c": false
                },
                {
                  "title": "Hinges",
                  "c": false
                },
                {
                  "title": "Seal",
                  "c": false
                },
                {
                  "title": "Repairs Needed",
                  "c": false
                }
              ]
            },
            {
              "title": "Exterior Service Door",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Blocked or Inoperable",
                  "c": false
                },
                {
                  "title": "Wood",
                  "c": false
                },
                {
                  "title": "Metal",
                  "c": false
                },
                {
                  "title": "Fiberglass",
                  "c": false
                }
              ]
            },
            {
              "title": "Exterior Service Door Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                },
                {
                  "title": "Needs Adjustment",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Car Door",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Overhead",
                  "c": false
                },
                {
                  "title": "Sliding",
                  "c": false
                },
                {
                  "title": "Roll-Up Panels",
                  "c": false
                },
                {
                  "title": "Tilt-Up Slab",
                  "c": false
                },
                {
                  "title": "Lites",
                  "c": false
                },
                {
                  "title": "Wood",
                  "c": false
                },
                {
                  "title": "Hardboard",
                  "c": false
                },
                {
                  "title": "Metal",
                  "c": false
                },
                {
                  "title": "Fiberglass",
                  "c": false
                },
                {
                  "title": "Solid",
                  "c": false
                },
                {
                  "title": "Hollow",
                  "c": false
                },
                {
                  "title": "Insulated",
                  "c": false
                }
              ]
            },
            {
              "title": "Car Door Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Gaps",
                  "c": false
                },
                {
                  "title": "Security Concerns",
                  "c": false
                },
                {
                  "title": "Blocked or Inaccessible",
                  "c": false
                },
                {
                  "title": "Locked Shut",
                  "c": false
                },
                {
                  "title": "Stained",
                  "c": false
                },
                {
                  "title": "De-Laminated",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                }
              ]
            },
            {
              "title": "Automatic Door Opener",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Blocked",
                  "c": false
                },
                {
                  "title": "No Access",
                  "c": false
                },
                {
                  "title": "No Remote",
                  "c": false
                }
              ]
            },
            {
              "title": "Safety Reverse",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Disconnected or Inoperable",
                  "c": false
                },
                {
                  "title": "Door Stops",
                  "c": false
                },
                {
                  "title": "Intermittent Function",
                  "c": false
                }
              ]
            },
            {
              "title": "Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                },
                {
                  "title": "Needs Adjustment",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Attached Garage or Carport Images",
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
      "color": "#607D8B",
      "pages": [
        {
          "title": "Roof Covering(s)",
          "items": [
            {
              "title": "Conditions",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "An inspection of the roof(s) includes traversing the roof surface to inspect the roof covering materials (unless in the opinion of the inspector, walking on the roof could damage roofing materials or be unsafe) gutters and downspout systems, visible flashing(s), roof vents, skylights, and any other roof penetrations, the portions of the chimney(s) and or or flue(s) visible from the exterior, describes the type of roof coverings used & their general condition, as well as any deficiencies of these systems or components, and reports on the presence of multiple layers of roofing, and the manner in which the roof is ventilated."
            },
            {
              "title": "Limitations",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-090 of the Washington State Dept. of Licensing, the inspector is not required to: traverse unsafe or vulnerable roof surfaces, remove snow, ice, debris or other material(s) that obscure the roof surface or prevents access to the roof, inspect gutter and downspout systems concealed within the structure, inspect related underground drainage piping; and or or antennas, lightning arresters, or similar attachments, operate powered roof ventilators, or predict remaining life expectancy of roof coverings."
            },
            {
              "title": "Roof Covering(s)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Inspected or Walked on (Traversed) Roof",
                  "c": false
                },
                {
                  "title": "Inspected or NOT Traversed",
                  "c": false
                },
                {
                  "title": "NOT Inspected",
                  "c": false
                },
                {
                  "title": "Vulnerable to Traversing Damage",
                  "c": false
                },
                {
                  "title": "Unsafe Traversing Condition(s)",
                  "c": false
                },
                {
                  "title": "Not Visible",
                  "c": false
                }
              ]
            },
            {
              "title": "Viewed Roof From",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Ground w or  Binoculars",
                  "c": false
                },
                {
                  "title": "Ladder",
                  "c": false
                },
                {
                  "title": "Eaves",
                  "c": false
                },
                {
                  "title": "Interior",
                  "c": false
                },
                {
                  "title": "Other Building",
                  "c": false
                }
              ]
            },
            {
              "title": "Style(s)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Gable",
                  "c": false
                },
                {
                  "title": "Hip",
                  "c": false
                },
                {
                  "title": "Mansard",
                  "c": false
                },
                {
                  "title": "Shed",
                  "c": false
                },
                {
                  "title": "Flat",
                  "c": false
                },
                {
                  "title": "Dutch Hip",
                  "c": false
                },
                {
                  "title": "Combination",
                  "c": false
                }
              ]
            },
            {
              "title": "Pitch",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Steep",
                  "c": false
                },
                {
                  "title": "Medium",
                  "c": false
                },
                {
                  "title": "Low",
                  "c": false
                }
              ]
            },
            {
              "title": "Age of Roof Covering",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "number",
              "value": ""
            },
            {
              "title": "Number of Layers of Roof Covering",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "number",
              "value": ""
            },
            {
              "title": "Roof Covering",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Asphalt or Comp",
                  "c": false
                },
                {
                  "title": "Rolled",
                  "c": false
                },
                {
                  "title": "3-Tab",
                  "c": false
                },
                {
                  "title": "Multiple Thickness",
                  "c": false
                },
                {
                  "title": "Presidential",
                  "c": false
                },
                {
                  "title": "Corrugated Fiber Glass",
                  "c": false
                },
                {
                  "title": "Modified Bitumen",
                  "c": false
                },
                {
                  "title": "Torch-Down or Hot Tar",
                  "c": false
                },
                {
                  "title": "Metal or Standing Seam",
                  "c": false
                },
                {
                  "title": "Metal Shingle",
                  "c": false
                },
                {
                  "title": "Wood Shingle",
                  "c": false
                },
                {
                  "title": "Cedar Shake",
                  "c": false
                },
                {
                  "title": "Clay Tile",
                  "c": false
                },
                {
                  "title": "Concrete Tile",
                  "c": false
                },
                {
                  "title": "Slate",
                  "c": false
                },
                {
                  "title": "PVC Membrane",
                  "c": false
                }
              ]
            },
            {
              "title": "Roof Covering Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Granule Loss",
                  "c": false
                },
                {
                  "title": "Broken or Damaged",
                  "c": false
                },
                {
                  "title": "Missing (Tabs)",
                  "c": false
                },
                {
                  "title": "Cupping or Curling",
                  "c": false
                },
                {
                  "title": "Aligned Gaps",
                  "c": false
                },
                {
                  "title": "Cracked",
                  "c": false
                },
                {
                  "title": "Lifting",
                  "c": false
                },
                {
                  "title": "Moss",
                  "c": false
                },
                {
                  "title": "Fungal Rot",
                  "c": false
                },
                {
                  "title": "Rusted",
                  "c": false
                },
                {
                  "title": "Exposed Fasteners",
                  "c": false
                },
                {
                  "title": "Recommend Professional Re-Evaluation or Remediation",
                  "c": false
                }
              ]
            },
            {
              "title": "Valley(s)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Metal",
                  "c": false
                },
                {
                  "title": "Woven Asphalt",
                  "c": false
                },
                {
                  "title": "Cut Asphalt",
                  "c": false
                },
                {
                  "title": "Tile",
                  "c": false
                },
                {
                  "title": "Concrete",
                  "c": false
                }
              ]
            },
            {
              "title": "Valley(s) Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Maginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Defective",
                  "c": false
                },
                {
                  "title": "Broken or Damaged",
                  "c": false
                },
                {
                  "title": "Rusted",
                  "c": false
                },
                {
                  "title": "Holes or Gaps",
                  "c": false
                },
                {
                  "title": "Leaks",
                  "c": false
                },
                {
                  "title": "Installation Defects",
                  "c": false
                },
                {
                  "title": "Vulnerable Areas",
                  "c": false
                }
              ]
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
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "No Access",
                  "c": false
                },
                {
                  "title": "Not Visible",
                  "c": false
                },
                {
                  "title": "Walls or Dormers",
                  "c": false
                },
                {
                  "title": "Chimney Chase(s)",
                  "c": false
                },
                {
                  "title": "Class 'B' Vent(s)",
                  "c": false
                },
                {
                  "title": "Dryer Vent",
                  "c": false
                },
                {
                  "title": "Fan Vent(s)",
                  "c": false
                },
                {
                  "title": "Plumbing DWV Pipes",
                  "c": false
                },
                {
                  "title": "Antennae or Satellite Dish",
                  "c": false
                },
                {
                  "title": "Cable or Wiring",
                  "c": false
                },
                {
                  "title": "Electical Mast",
                  "c": false
                }
              ]
            },
            {
              "title": "Perforations Condition(s)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Defective",
                  "c": false
                },
                {
                  "title": "Broken or Damaged",
                  "c": false
                },
                {
                  "title": "Rusted",
                  "c": false
                },
                {
                  "title": "Raised Holes or Gaps",
                  "c": false
                },
                {
                  "title": "Leaks",
                  "c": false
                },
                {
                  "title": "Installation Defects",
                  "c": false
                },
                {
                  "title": "Vulnerable Areas",
                  "c": false
                }
              ]
            },
            {
              "title": "Skylights or Skywalls",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "No Access",
                  "c": false
                },
                {
                  "title": "Not Visible",
                  "c": false
                }
              ]
            },
            {
              "title": "Skylights or Skywalls Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Defective",
                  "c": false
                },
                {
                  "title": "Broken or Damaged",
                  "c": false
                },
                {
                  "title": "Rusted",
                  "c": false
                },
                {
                  "title": "Holes or Gaps",
                  "c": false
                },
                {
                  "title": "Leaks",
                  "c": false
                },
                {
                  "title": "Installation Defects",
                  "c": false
                },
                {
                  "title": "Security Concern",
                  "c": false
                },
                {
                  "title": "Vulnerable Areas",
                  "c": false
                }
              ]
            },
            {
              "title": "Flashing(s)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Missing",
                  "c": false
                },
                {
                  "title": "Installation Defects",
                  "c": false
                },
                {
                  "title": "Rusted",
                  "c": false
                },
                {
                  "title": "Potential Future Concern",
                  "c": false
                }
              ]
            },
            {
              "title": "Flashing(s) Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Defective",
                  "c": false
                },
                {
                  "title": "Broken or Damaged",
                  "c": false
                },
                {
                  "title": "Raised",
                  "c": false
                },
                {
                  "title": "Holes or Gaps",
                  "c": false
                },
                {
                  "title": "Leaks",
                  "c": false
                },
                {
                  "title": "Vulnerable Areas",
                  "c": false
                },
                {
                  "title": "Repair or Re-Evaluate",
                  "c": false
                }
              ]
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
              "title": "Type",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Eave-Mounted",
                  "c": false
                },
                {
                  "title": "Internal with Scuppers",
                  "c": false
                },
                {
                  "title": "Metal",
                  "c": false
                },
                {
                  "title": "Plastic or Vinyl",
                  "c": false
                },
                {
                  "title": "Wood",
                  "c": false
                }
              ]
            },
            {
              "title": "Gutters & Down-Spouts Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Missing",
                  "c": false
                },
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Loose or Sagging",
                  "c": false
                },
                {
                  "title": "Fallen or Pulled Away",
                  "c": false
                },
                {
                  "title": "Reversed Slope or Ponding",
                  "c": false
                },
                {
                  "title": "Clogged",
                  "c": false
                },
                {
                  "title": "Debris",
                  "c": false
                },
                {
                  "title": "Granule Wash",
                  "c": false
                },
                {
                  "title": "Spillover Stains",
                  "c": false
                },
                {
                  "title": "Deteriorated Wood",
                  "c": false
                },
                {
                  "title": "Cracked or Split",
                  "c": false
                },
                {
                  "title": "Holes",
                  "c": false
                },
                {
                  "title": "Leaking Joints",
                  "c": false
                },
                {
                  "title": "Rust",
                  "c": false
                },
                {
                  "title": "Moss",
                  "c": false
                }
              ]
            },
            {
              "title": "Down-Spout Discharge",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "No Down-Spouts",
                  "c": false
                },
                {
                  "title": "Above Grade",
                  "c": false
                },
                {
                  "title": "Below Grade",
                  "c": false
                },
                {
                  "title": "Not Visible",
                  "c": false
                }
              ]
            },
            {
              "title": "Down-Spout Discharge Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Missing",
                  "c": false
                },
                {
                  "title": "Loose or Disconnected",
                  "c": false
                },
                {
                  "title": "Clogged",
                  "c": false
                },
                {
                  "title": "Open Gaps Around Downspout-to-Drain Connections",
                  "c": false
                },
                {
                  "title": "Poor Extensions or Splash Blocks",
                  "c": false
                }
              ]
            },
            {
              "title": "Gutters or Down Spouts Images",
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
      "color": "#009688",
      "pages": [
        {
          "title": "Roof Framing (Visible In Attic)",
          "items": [
            {
              "title": "Conditions",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "An inspection of the structure includes traversing attics and subfloor crawl-spaces to inspect the building materials comprising the major structural components, the visible foundation; floor framing; roof framing and diaphragm; other support and substructure  or  superstructure components; stairs; ventilation (when applicable); and exposed concrete slabs in habitable areas, and describes any deficiencies of these systems or components. The report describes the condition and serviceability of visible, exposed foundations and grade slabs, walls, posts, piers, beams, joists, trusses, sub-floors, chimney foundations, stairs and the visible roof structure and attic components where readily and safely accessible, subfloor crawl-spaces and basements for indications of flooding and moisture penetration, and where deterioration is suspected or where clear indications of possible deterioration exist, a representative number of structural components were probed, and any pest-conducive conditions or wood-rot are reported. Probing is not required when probing will damage any finished surface or where no deterioration is suspected."
            },
            {
              "title": "Limitations",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-070 of the Washington State Dept. of Licensing, The inspector is not required to enter: sub-floor crawl-spaces that require excavation or have an access opening less than eighteen inches by twenty-four inches or headroom less than eighteen inches beneath floor joists and twelve inches beneath girders (beams). Any areas that are not readily accessible due to obstructions, inadequate clearances or have conditions which, in the inspector's opinion, are hazardous to the health and safety of the inspector or will cause damage to components of the home, move stored items or debris or perform excavation to gain access. (BOLD THIS)Please refer to a licensed structural pest inspector (SPI) or pest control operator (PCO) to re-evaluate all issues that are suspected to be insect-related.(BOLD THIS)"
            },
            {
              "title": "Roof System",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Vaulted or No Attic",
                  "c": false
                },
                {
                  "title": "Partial Attic",
                  "c": false
                },
                {
                  "title": "No Access",
                  "c": false
                },
                {
                  "title": "Sealed Access",
                  "c": false
                },
                {
                  "title": "Trusses",
                  "c": false
                },
                {
                  "title": "Stick-Framed",
                  "c": false
                },
                {
                  "title": "Rafters & Joists",
                  "c": false
                },
                {
                  "title": "Beams & Purlins",
                  "c": false
                },
                {
                  "title": "Hips",
                  "c": false
                },
                {
                  "title": "Valleys",
                  "c": false
                }
              ]
            },
            {
              "title": "Diaphragm Sheathing",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Plywood",
                  "c": false
                },
                {
                  "title": "OSB",
                  "c": false
                },
                {
                  "title": "H-Clipped",
                  "c": false
                },
                {
                  "title": "Plank",
                  "c": false
                },
                {
                  "title": "1x Skip Sheathing",
                  "c": false
                }
              ]
            },
            {
              "title": "Diaphragm Sheathing Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Sagging or Over-Spanned",
                  "c": false
                },
                {
                  "title": "Broken or Damaged",
                  "c": false
                },
                {
                  "title": "Structural Defect (Design Related)",
                  "c": false
                }
              ]
            },
            {
              "title": "Missing or Inadequate",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Bracing",
                  "c": false
                },
                {
                  "title": "Collar Ties",
                  "c": false
                },
                {
                  "title": "Knee Walls",
                  "c": false
                },
                {
                  "title": "Stains",
                  "c": false
                },
                {
                  "title": "Deterioration",
                  "c": false
                },
                {
                  "title": "Hazardous or Unsafe",
                  "c": false
                },
                {
                  "title": "Recommend Professional Re-Evaluation",
                  "c": false
                }
              ]
            },
            {
              "title": "Roof Framing Images",
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
              "title": "Notice",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "Seismic (earthquake) evaluation is typically dictated by building codes, outside the scope of this inspection, and was NOT performed. For seismic evaluation or other desirable structural improvements, refer to a specialist."
            },
            {
              "title": "Sub-Floor System",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "4X Beams & Plank Diaphragm",
                  "c": false
                },
                {
                  "title": "2X Joists & Diaphragm",
                  "c": false
                },
                {
                  "title": "Flat Truss",
                  "c": false
                }
              ]
            },
            {
              "title": "Beams (Girders)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Steel",
                  "c": false
                },
                {
                  "title": "Concrete",
                  "c": false
                },
                {
                  "title": "Laminated or Engineered",
                  "c": false
                },
                {
                  "title": "Dimensional Lumber",
                  "c": false
                }
              ]
            },
            {
              "title": "Joists & Sheathing",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "No Joists",
                  "c": false
                },
                {
                  "title": "Lumber",
                  "c": false
                },
                {
                  "title": "Sleepers",
                  "c": false
                }
              ]
            },
            {
              "title": "I-Beams",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Wood or TJI",
                  "c": false
                },
                {
                  "title": "Metal",
                  "c": false
                }
              ]
            },
            {
              "title": "Diaphragm",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Foam-Crete",
                  "c": false
                },
                {
                  "title": "Diagonal",
                  "c": false
                },
                {
                  "title": "Plank",
                  "c": false
                },
                {
                  "title": "T&G or Shiplap",
                  "c": false
                },
                {
                  "title": "Plywood",
                  "c": false
                },
                {
                  "title": "OSB",
                  "c": false
                }
              ]
            },
            {
              "title": "Posts(Columns)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Covered or Not Visible",
                  "c": false
                },
                {
                  "title": "Wood",
                  "c": false
                },
                {
                  "title": "Steel",
                  "c": false
                },
                {
                  "title": "Concrete",
                  "c": false
                },
                {
                  "title": "CMU (block)",
                  "c": false
                }
              ]
            },
            {
              "title": "Posts(Columns) Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Visible",
                  "c": false
                },
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Sagging or Over-Spanned",
                  "c": false
                },
                {
                  "title": "Broken",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                },
                {
                  "title": "Structural Defects (Design Related)",
                  "c": false
                },
                {
                  "title": "Missing or Inadequate Bracing",
                  "c": false
                },
                {
                  "title": "Stains",
                  "c": false
                },
                {
                  "title": "Deterioration",
                  "c": false
                },
                {
                  "title": "Hazardous or Unsafe",
                  "c": false
                },
                {
                  "title": "Recommend Professional Evaluation or Remediation",
                  "c": false
                }
              ]
            },
            {
              "title": "Stairs",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Open",
                  "c": false
                },
                {
                  "title": "Enclosed",
                  "c": false
                }
              ]
            },
            {
              "title": "Stairs Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Missing Handrail",
                  "c": false
                }
              ]
            },
            {
              "title": "Inadequate",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Rails",
                  "c": false
                },
                {
                  "title": "Headroom",
                  "c": false
                },
                {
                  "title": "Support",
                  "c": false
                },
                {
                  "title": "Uneven Risers",
                  "c": false
                },
                {
                  "title": "Over-Height Step(s)",
                  "c": false
                },
                {
                  "title": "Missing Firewall",
                  "c": false
                },
                {
                  "title": "Hazardous or Unsafe",
                  "c": false
                },
                {
                  "title": "Recommend Professional Evaluation or Remediation",
                  "c": false
                }
              ]
            },
            {
              "title": "Basement or Crawl Floor",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Concrete",
                  "c": false
                },
                {
                  "title": "Dirt or Gravel",
                  "c": false
                },
                {
                  "title": "Wood",
                  "c": false
                },
                {
                  "title": "Covered or Not Visible",
                  "c": false
                }
              ]
            },
            {
              "title": "Basement or Crawl Floor Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Typical Settling Cracks",
                  "c": false
                },
                {
                  "title": "Large Cracks",
                  "c": false
                },
                {
                  "title": "Stains",
                  "c": false
                },
                {
                  "title": "Efflorescence",
                  "c": false
                },
                {
                  "title": "Storage",
                  "c": false
                },
                {
                  "title": "Damage",
                  "c": false
                },
                {
                  "title": "Hazardous or Unsafe",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Floor Framing Images",
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
              "title": "Type of Foundation",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Perimeter Walls",
                  "c": false
                },
                {
                  "title": "Post or Beam",
                  "c": false
                },
                {
                  "title": "Columns",
                  "c": false
                },
                {
                  "title": "Poured Concrete",
                  "c": false
                },
                {
                  "title": "CMU(Block)",
                  "c": false
                },
                {
                  "title": "Masonry",
                  "c": false
                },
                {
                  "title": "Unmortared Stone or Brick",
                  "c": false
                },
                {
                  "title": "Logs",
                  "c": false
                },
                {
                  "title": "Treated Wood",
                  "c": false
                },
                {
                  "title": "Strip Footings",
                  "c": false
                }
              ]
            },
            {
              "title": "Condition of Foundation",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Imbedded Wood",
                  "c": false
                },
                {
                  "title": "Rock Pockets",
                  "c": false
                },
                {
                  "title": "No Tie-Downs",
                  "c": false
                },
                {
                  "title": "Stains",
                  "c": false
                },
                {
                  "title": "Damage",
                  "c": false
                },
                {
                  "title": "Deterioration",
                  "c": false
                },
                {
                  "title": "Efflorescence",
                  "c": false
                },
                {
                  "title": "EWC",
                  "c": false
                },
                {
                  "title": "Fungal Rot or Probed",
                  "c": false
                }
              ]
            },
            {
              "title": "Limited By",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Storage",
                  "c": false
                },
                {
                  "title": "Perimeter Cover",
                  "c": false
                },
                {
                  "title": "Obstacles",
                  "c": false
                },
                {
                  "title": "Inaccessible Area",
                  "c": false
                },
                {
                  "title": "Pests",
                  "c": false
                },
                {
                  "title": "Tight or Limited Mobility",
                  "c": false
                },
                {
                  "title": "Hazards or Unsafe",
                  "c": false
                },
                {
                  "title": "Recommend Re-Evaluation or Remediation",
                  "c": false
                }
              ]
            },
            {
              "title": "WDI or WDO (Wood-Destroying)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "None",
                  "c": false
                },
                {
                  "title": "Exit Holes",
                  "c": false
                },
                {
                  "title": "Frass",
                  "c": false
                },
                {
                  "title": "Galleries",
                  "c": false
                },
                {
                  "title": "Damage",
                  "c": false
                },
                {
                  "title": "Mildew or Bio-Growth",
                  "c": false
                },
                {
                  "title": "Mold Sampled or Tested",
                  "c": false
                },
                {
                  "title": "Fungal Rot or Probed",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Cracks",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Typical Settling",
                  "c": false
                },
                {
                  "title": "Vertical",
                  "c": false
                },
                {
                  "title": "Step",
                  "c": false
                },
                {
                  "title": "Horizontal",
                  "c": false
                },
                {
                  "title": "V-Cracking",
                  "c": false
                },
                {
                  "title": "Displaced",
                  "c": false
                },
                {
                  "title": "Inactive",
                  "c": false
                },
                {
                  "title": "Active",
                  "c": false
                },
                {
                  "title": "Larger than one fourth inch",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Drainage",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Evidence of Flooding",
                  "c": false
                },
                {
                  "title": "Not Visible",
                  "c": false
                },
                {
                  "title": "Efflorescence",
                  "c": false
                },
                {
                  "title": "Humidity",
                  "c": false
                },
                {
                  "title": "Old Stains",
                  "c": false
                },
                {
                  "title": "Silt Deposits",
                  "c": false
                },
                {
                  "title": "Soil on Vapor Barrier",
                  "c": false
                },
                {
                  "title": "Fresh Stains",
                  "c": false
                },
                {
                  "title": "Standing Water",
                  "c": false
                }
              ]
            },
            {
              "title": "Sump Pump",
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Missing",
                  "c": false
                },
                {
                  "title": "Not Tested",
                  "c": false
                },
                {
                  "title": "Operable",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Foundation Images",
              "type": "image",
              "content": []
            }
          ]
        }
      ]
    },
    {
      "title": "Thermal",
      "color": "#F8981D",
      "pages": [
        {
          "title": "Attic",
          "items": [
            {
              "title": "Conditions",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "The inspection of the insulation and ventilation includes the type and condition of the insulation and ventilation in viewable unfinished attics and sub-grade areas as well as any installed mechanical ventilation systems, reports missing or inadequate vapor barriers in subfloor crawl-spaces with earth floors, the absence of insulation at the interface between conditioned and unconditioned spaces where visible, the absence of insulation on heating system ductwork and supply plumbing in unconditioned spaces, and describes any deficiencies of these systems or components."
            },
            {
              "title": "Limitations",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-150 of the Washington State Dept. of Licensing, the inspector is not required to determine the presence, extent, and type of insulation and vapor barriers concealed in the exterior walls, the thickness or R-value of insulation above the ceiling, in the walls or below the floors, or evaluate whether the type of material used to insulate pipes, ducts, jackets and boilers is a health hazard. (BOLD THIS)The efficiency and quantity of air ventilation and mechanical systems is not measured, calculated, or controls tested, other than to confirm that they exist, or actually turn a system on or off.(BOLD THIS)"
            },
            {
              "title": "Access",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "No Attic",
                  "c": false
                },
                {
                  "title": "No Access",
                  "c": false
                },
                {
                  "title": "Door",
                  "c": false
                },
                {
                  "title": "Pull Down Stair",
                  "c": false
                },
                {
                  "title": "Scuttle-Hole(s)",
                  "c": false
                }
              ]
            },
            {
              "title": "Location",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Hall",
                  "c": false
                },
                {
                  "title": "Bedroom",
                  "c": false
                },
                {
                  "title": "Closet",
                  "c": false
                },
                {
                  "title": "Laundry Room",
                  "c": false
                },
                {
                  "title": "Garage",
                  "c": false
                },
                {
                  "title": "Exterior",
                  "c": false
                }
              ]
            },
            {
              "title": "Viewed",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Near Access",
                  "c": false
                },
                {
                  "title": "From Ladder",
                  "c": false
                },
                {
                  "title": "At Roof Apex",
                  "c": false
                },
                {
                  "title": "Limited Accessibility",
                  "c": false
                },
                {
                  "title": "Inspected (Traversed) Attic",
                  "c": false
                },
                {
                  "title": "Entered but NOT Traversed",
                  "c": false
                },
                {
                  "title": "NOT Entered or NOT Inspected",
                  "c": false
                },
                {
                  "title": "Vulnerable to Traversing Damage",
                  "c": false
                },
                {
                  "title": "Unsafe Traversing Condition(s)",
                  "c": false
                },
                {
                  "title": "Not Visible",
                  "c": false
                }
              ]
            },
            {
              "title": "Attic Insulation Location",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "None",
                  "c": false
                },
                {
                  "title": "Rafters",
                  "c": false
                },
                {
                  "title": "Ceiling Joists",
                  "c": false
                }
              ]
            },
            {
              "title": "Attic Insulation Quantity (in)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Installed",
                  "c": false
                },
                {
                  "title": "Not Determined",
                  "c": false
                },
                {
                  "title": "Inadequate",
                  "c": false
                },
                {
                  "title": "Varied",
                  "c": false
                },
                {
                  "title": "<2 inches R 5",
                  "c": false
                },
                {
                  "title": "<3 inches R-9+",
                  "c": false
                },
                {
                  "title": "3 inches R-11",
                  "c": false
                },
                {
                  "title": "4 inches R-13",
                  "c": false
                },
                {
                  "title": "5 inches R-15",
                  "c": false
                },
                {
                  "title": "6 inches R-19",
                  "c": false
                },
                {
                  "title": "2 hard foam R20",
                  "c": false
                },
                {
                  "title": "8-10 inches R-28+",
                  "c": false
                },
                {
                  "title": "10-12 inches R-32+",
                  "c": false
                },
                {
                  "title": "12-14 inches R-36+",
                  "c": false
                },
                {
                  "title": "14-16 inches R-38+",
                  "c": false
                },
                {
                  "title": "16-18 inches R- 40+",
                  "c": false
                },
                {
                  "title": "18-20 inches R- 42+",
                  "c": false
                },
                {
                  "title": "20-22 inches R- 44+",
                  "c": false
                },
                {
                  "title": "22-24 inches R- 46+",
                  "c": false
                }
              ]
            },
            {
              "title": "Attic Insulation Type",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Fiber Glass",
                  "c": false
                },
                {
                  "title": "Cellulose",
                  "c": false
                },
                {
                  "title": "Vermiculite",
                  "c": false
                },
                {
                  "title": "Mineral or Rock Wool",
                  "c": false
                },
                {
                  "title": "Batts",
                  "c": false
                },
                {
                  "title": "Loose",
                  "c": false
                },
                {
                  "title": "Wood Shavings",
                  "c": false
                }
              ]
            },
            {
              "title": "Attic Insulation Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Missing Areas",
                  "c": false
                },
                {
                  "title": "Uneven Placement",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                }
              ]
            },
            {
              "title": "Attic Ventilation",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Eaves",
                  "c": false
                },
                {
                  "title": "Gable",
                  "c": false
                },
                {
                  "title": "Top",
                  "c": false
                },
                {
                  "title": "Ridge",
                  "c": false
                },
                {
                  "title": "Powered Vent(s)",
                  "c": false
                },
                {
                  "title": "Attic Fan(s)",
                  "c": false
                }
              ]
            },
            {
              "title": "Condition of Ventilation",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "None",
                  "c": false
                },
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor or Missing",
                  "c": false
                },
                {
                  "title": "Odors",
                  "c": false
                },
                {
                  "title": "Excessive Heat",
                  "c": false
                },
                {
                  "title": "Ventilation Appears Inadequate",
                  "c": false
                },
                {
                  "title": "Effectiveness NOT Evaluated",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Humidity",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "None",
                  "c": false
                },
                {
                  "title": "Condensation",
                  "c": false
                },
                {
                  "title": "Roof Leaks",
                  "c": false
                },
                {
                  "title": "Old Stains or Inactive",
                  "c": false
                },
                {
                  "title": "Fresh Stains or Active",
                  "c": false
                },
                {
                  "title": "Mildew or Mold",
                  "c": false
                },
                {
                  "title": "Stained Diaphragm",
                  "c": false
                },
                {
                  "title": "Wet Insulation",
                  "c": false
                },
                {
                  "title": "Damage",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Infestation",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "None",
                  "c": false
                },
                {
                  "title": "Prior or Inactive",
                  "c": false
                },
                {
                  "title": "Live or Active",
                  "c": false
                },
                {
                  "title": "Nesting Materials",
                  "c": false
                },
                {
                  "title": "Scat",
                  "c": false
                },
                {
                  "title": "Insect",
                  "c": false
                },
                {
                  "title": "Bee or Wasp",
                  "c": false
                },
                {
                  "title": "Bird",
                  "c": false
                },
                {
                  "title": "Rodent",
                  "c": false
                },
                {
                  "title": "Racoon",
                  "c": false
                },
                {
                  "title": "Potential Points of Pest Entry",
                  "c": false
                },
                {
                  "title": "Hazardous or Unsafe",
                  "c": false
                },
                {
                  "title": "Recommend Professional Evaluation or Remediation",
                  "c": false
                }
              ]
            },
            {
              "title": "Ventiliation Notice",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "Ventilation is important in maintaining healthy uninhabited areas (attics, crawl spaces), and a key consideration before adding or altering insulation quantity. Recommend frequent seasonal checks to be certain ventilation ports do not become inadvertently blocked by pests, wind currents, or the movement or addition of new insulation."
            },
            {
              "title": "Attic Images",
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
              "title": "Access",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Door or Panel",
                  "c": false
                },
                {
                  "title": "Scuttle-Hole",
                  "c": false
                },
                {
                  "title": "No Access",
                  "c": false
                },
                {
                  "title": "No Crawl-Space",
                  "c": false
                },
                {
                  "title": "Not Visible",
                  "c": false
                }
              ]
            },
            {
              "title": "Location",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Hall",
                  "c": false
                },
                {
                  "title": "Bedroom",
                  "c": false
                },
                {
                  "title": "Closet",
                  "c": false
                },
                {
                  "title": "Laundry Room",
                  "c": false
                },
                {
                  "title": "Garage",
                  "c": false
                },
                {
                  "title": "Exterior",
                  "c": false
                },
                {
                  "title": "Inspected Basement or Crawl",
                  "c": false
                },
                {
                  "title": "NOT Entered or NOT Inspected",
                  "c": false
                },
                {
                  "title": "Limited Accessibility",
                  "c": false
                }
              ]
            },
            {
              "title": "Viewed",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Near Access",
                  "c": false
                },
                {
                  "title": "From Exterior",
                  "c": false
                },
                {
                  "title": "At Center Only",
                  "c": false
                },
                {
                  "title": "Vulnerable",
                  "c": false
                },
                {
                  "title": "Unsafe",
                  "c": false
                }
              ]
            },
            {
              "title": "Sub-Floor Insulation Location",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "None Visible",
                  "c": false
                },
                {
                  "title": "Floor",
                  "c": false
                },
                {
                  "title": "Rim Joists",
                  "c": false
                }
              ]
            },
            {
              "title": "Sub-Floor Insulation Type",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Fiberglass Batts",
                  "c": false
                },
                {
                  "title": "Blown-in Cellulose",
                  "c": false
                },
                {
                  "title": "Foam Board",
                  "c": false
                }
              ]
            },
            {
              "title": "Sub-Floor Insulation Retention",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "None Visible",
                  "c": false
                },
                {
                  "title": "Wired",
                  "c": false
                },
                {
                  "title": "Stapled",
                  "c": false
                },
                {
                  "title": "Twine",
                  "c": false
                },
                {
                  "title": "Lathe",
                  "c": false
                }
              ]
            },
            {
              "title": "Sub-Floor Insulation Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Missing Areas",
                  "c": false
                },
                {
                  "title": "Fallen Down",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                },
                {
                  "title": "Installed Upside-Down",
                  "c": false
                },
                {
                  "title": "Ineffective Installation or Gaps",
                  "c": false
                }
              ]
            },
            {
              "title": "Crawl-Space Ventilation",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "None",
                  "c": false
                },
                {
                  "title": "Foundation Vents",
                  "c": false
                },
                {
                  "title": "Powered Vent(s)",
                  "c": false
                },
                {
                  "title": "Fan(s)",
                  "c": false
                }
              ]
            },
            {
              "title": "Condition of Crawl-Space Ventilation",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Effectiveness NOT Evaluated",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Vapor Barrier",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "None",
                  "c": false
                },
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                },
                {
                  "title": "Gaps or Displaced Areas",
                  "c": false
                },
                {
                  "title": "Exposed Earth",
                  "c": false
                }
              ]
            },
            {
              "title": "Moisture",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "None",
                  "c": false
                },
                {
                  "title": "Condensation",
                  "c": false
                },
                {
                  "title": "Efflorescence",
                  "c": false
                },
                {
                  "title": "Old Stains",
                  "c": false
                },
                {
                  "title": "Fresh",
                  "c": false
                },
                {
                  "title": "Standing Water",
                  "c": false
                }
              ]
            },
            {
              "title": "Drainage",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "To Out-Fall",
                  "c": false
                },
                {
                  "title": "Interior Plane",
                  "c": false
                },
                {
                  "title": "None Apparent",
                  "c": false
                },
                {
                  "title": "Sump Pump",
                  "c": false
                },
                {
                  "title": "Functional",
                  "c": false
                }
              ]
            },
            {
              "title": "Infestation",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "None",
                  "c": false
                },
                {
                  "title": "Prior or Inactive",
                  "c": false
                },
                {
                  "title": "Live or Active",
                  "c": false
                },
                {
                  "title": "Nesting Materials",
                  "c": false
                },
                {
                  "title": "Scat",
                  "c": false
                },
                {
                  "title": "Insect",
                  "c": false
                },
                {
                  "title": "Bee or Wasp",
                  "c": false
                },
                {
                  "title": "Bird",
                  "c": false
                },
                {
                  "title": "Rodent",
                  "c": false
                },
                {
                  "title": "Racoon",
                  "c": false
                },
                {
                  "title": "Potential Point Pest Entry",
                  "c": false
                },
                {
                  "title": "Hazardous or Unsafe",
                  "c": false
                },
                {
                  "title": "Recommend Professional Evaluation or Remediation",
                  "c": false
                }
              ]
            },
            {
              "title": "Crawl Space or Basement Images",
              "type": "image",
              "content": []
            }
          ],
          "showvalue": false
        },
        {
          "title": "Interior Ventilation or Exhaust Fans",
          "items": [
            {
              "title": "Whole House Ventiliation",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Whole House Fan(s)",
                  "c": false
                },
                {
                  "title": "Make-Up Air Vent(s)",
                  "c": false
                },
                {
                  "title": "Furnace Blower(s)",
                  "c": false
                },
                {
                  "title": "Ceiling-Mounted Fan(s)",
                  "c": false
                }
              ]
            },
            {
              "title": "Whole House Ventiliation Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor or Missing",
                  "c": false
                },
                {
                  "title": "Open Blade",
                  "c": false
                },
                {
                  "title": "Caged",
                  "c": false
                },
                {
                  "title": "Remote Control",
                  "c": false
                }
              ]
            },
            {
              "title": "Moisture Reduction Fans",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Bathroom Exhaust Fan(s)",
                  "c": false
                },
                {
                  "title": "Kitchen Fan(s)",
                  "c": false
                },
                {
                  "title": "Laundry Fan(s)",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Weak or Noisy",
                  "c": false
                },
                {
                  "title": "Unsafe",
                  "c": false
                }
              ]
            },
            {
              "title": "Condition Moisture Reduction Fans",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor or Missing",
                  "c": false
                },
                {
                  "title": "Vented Improperly (Inside Building Envelope)",
                  "c": false
                },
                {
                  "title": "Not Visible",
                  "c": false
                },
                {
                  "title": "Recirculating-Only Type",
                  "c": false
                },
                {
                  "title": "Clogged Grease Filter",
                  "c": false
                },
                {
                  "title": "Restricted (Collapsed or Blocked)",
                  "c": false
                },
                {
                  "title": "Venting Into Attic Space",
                  "c": false
                },
                {
                  "title": "Aimed at Gable, Eave, or Roof Vents",
                  "c": false
                },
                {
                  "title": "Fallen Loose",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Moisture Notice",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "To minimize unwanted moisture accumulation or humidity concerns, recommend regular use of adequate exhaust fans in kitchens, laundries, bathrooms, and other moisture producing areas with sealed venting to outside the building envelope. Routine maintenance is recommended to ensure that noisy, worn, or dirty fans are serviced or replaced as needed."
            },
            {
              "title": "Interior Ventilation or Exhaust Fan Images",
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
      "color": "#903F98",
      "pages": [
        {
          "title": "Plumbing System",
          "items": [
            {
              "title": "Conditions",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "An inspection of the plumbing system includes visible water supply lines; visible drain or waste or soil and vent lines; fixtures and faucets; domestic hot water system and fuel source, and includes operating fixtures in order to observe functional flow, check for functional drainage from fixtures, and describe the visible water supply and distribution piping materials; drain, waste and vent materials; water-heating equipment, and any deficiencies of these systems or components. This section reports: (1)The presence and location of the main water shutoff valve or fuel shutoff valve(s), or reports that they were not found, (2)The presence and functionality of sump pumps or waste ejector pumps when visible or confirms the float switch activates the pump when the sump is dry, and (3)Whether or not the water temperature was tested, and the presence of the temperature and pressure relief (TPR) valve and associated piping. The generally accepted maximum safe water temperature is one hundred twenty degrees (120&#176;) Fahrenheit."
            },
            {
              "title": "Limitations",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-100 of the Washington State Dept. of Licensing, the inspector is not required to operate any valves, including faucets of freestanding or built-in appliances or fixtures, (if the outlet end of the valve or faucet is connected or intended to be connected to an appliance), any plumbing components not readily accessible, or inspect any system that is shut down or winterized; or determine the quantity of water from on-site water supplies, the condition and operation of private water supply systems or water wells and related pressure tanks and pumps, the potability of any water supply whether public or private, or water-conditioning equipment, including softeners and filter systems; or test pressure or temperature or pressure relief valves, gas supply systems, ignite pilot lights, test fire sprinkler systems, or ancillary systems or components such as, but not limited to, those related to solar water heating and hot water circulation; or test shower pans for leaks, or use special equipment to test or scan shower or tub surrounds for moisture in surrounding substrate materials; or test exterior drain systems or floor drains, including but not limited to, exterior stairwell drains and driveway drains; or test interior components of exterior pumps, or sealed sanitary waste lift systems, or the quality or the condition and operation of on-site sewage disposal systems such as waste ejector pumps, cesspools, septic tanks, drain fields, related underground piping, conduit, cisterns, and related equipment."
            },
            {
              "title": "Water Supply Source",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Unknown or Verify",
                  "c": false
                },
                {
                  "title": "Public Water",
                  "c": false
                },
                {
                  "title": "Shared Well",
                  "c": false
                },
                {
                  "title": "Private Well",
                  "c": false
                }
              ]
            },
            {
              "title": "Main Water Shut Off Valve Location",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Closet",
                  "c": false
                },
                {
                  "title": "Well House",
                  "c": false
                },
                {
                  "title": "Verify",
                  "c": false
                },
                {
                  "title": "Not Found",
                  "c": false
                },
                {
                  "title": "Garage",
                  "c": false
                },
                {
                  "title": "Above Waterheater",
                  "c": false
                },
                {
                  "title": "Yard Box",
                  "c": false
                },
                {
                  "title": "Basement",
                  "c": false
                },
                {
                  "title": "Crawl Space",
                  "c": false
                },
                {
                  "title": "Exterior Wall",
                  "c": false
                },
                {
                  "title": "Interior Utility Closet",
                  "c": false
                },
                {
                  "title": "Inside Cabinet",
                  "c": false
                },
                {
                  "title": "Laundry Closet",
                  "c": false
                },
                {
                  "title": "Bedroom",
                  "c": false
                }
              ]
            },
            {
              "title": "Water Pressure",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Unknown",
                  "c": false
                },
                {
                  "title": "Verify",
                  "c": false
                },
                {
                  "title": "OFF",
                  "c": false
                },
                {
                  "title": "Inadequate (<45psi)",
                  "c": false
                },
                {
                  "title": "Adequate (45-85psi)",
                  "c": false
                },
                {
                  "title": "Excessive (>85psi)",
                  "c": false
                }
              ]
            },
            {
              "title": "Water Temperature",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Varies Per Unit",
                  "c": false
                },
                {
                  "title": "See WH Schedule",
                  "c": false
                },
                {
                  "title": "WH OFF or Verify Function",
                  "c": false
                },
                {
                  "title": "WH on Vacation Mode",
                  "c": false
                },
                {
                  "title": "See Interior Section",
                  "c": false
                },
                {
                  "title": "Inadequate (65-85 degrees)",
                  "c": false
                },
                {
                  "title": "Normal (85-115 degrees)",
                  "c": false
                },
                {
                  "title": "Hot (115-120 degrees)",
                  "c": false
                },
                {
                  "title": "Scalding Hazard (>120 degrees)",
                  "c": false
                }
              ]
            },
            {
              "title": "Waste System",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Public Sewer",
                  "c": false
                },
                {
                  "title": "Shared Septic",
                  "c": false
                },
                {
                  "title": "Private Septic & Drainfield",
                  "c": false
                },
                {
                  "title": "Private Septic & Mound",
                  "c": false
                },
                {
                  "title": "Private Septic & Leech Line",
                  "c": false
                },
                {
                  "title": "Unknown or Verify",
                  "c": false
                }
              ]
            },
            {
              "title": "Main Entry Piping",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Copper",
                  "c": false
                },
                {
                  "title": "Galvanized",
                  "c": false
                },
                {
                  "title": "Plastic or CPVC",
                  "c": false
                },
                {
                  "title": "Polybutylene",
                  "c": false
                },
                {
                  "title": "PEX",
                  "c": false
                }
              ]
            },
            {
              "title": "Main Entry Piping Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Visible",
                  "c": false
                },
                {
                  "title": "Leaking",
                  "c": false
                },
                {
                  "title": "Unprotected or Freezing",
                  "c": false
                },
                {
                  "title": "Discolered Water",
                  "c": false
                },
                {
                  "title": "Odor",
                  "c": false
                }
              ]
            },
            {
              "title": "Pressure",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "LIST PRESSURE?",
                  "c": false
                },
                {
                  "title": "Low",
                  "c": false
                },
                {
                  "title": "High",
                  "c": false
                },
                {
                  "title": "Normal",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Shut-Off",
                  "c": false
                },
                {
                  "title": "Winterized",
                  "c": false
                }
              ]
            },
            {
              "title": "Water Lines",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Copper",
                  "c": false
                },
                {
                  "title": "Galvanized",
                  "c": false
                },
                {
                  "title": "Plastic or CPVC",
                  "c": false
                },
                {
                  "title": "Polybutylene",
                  "c": false
                },
                {
                  "title": "PEX",
                  "c": false
                }
              ]
            },
            {
              "title": "Condition of Water Lines",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Fully Visible",
                  "c": false
                },
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Cross Connections",
                  "c": false
                },
                {
                  "title": "Leaks",
                  "c": false
                }
              ]
            },
            {
              "title": "Lead (other than solder joints)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Service Entry",
                  "c": false
                },
                {
                  "title": "Unknown",
                  "c": false
                },
                {
                  "title": "Unlikely",
                  "c": false
                }
              ]
            },
            {
              "title": "Disimilar Metal Connection (Potential Electrolysis)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Yes",
                  "c": false
                },
                {
                  "title": "No",
                  "c": false
                },
                {
                  "title": "Not Visible",
                  "c": false
                }
              ]
            },
            {
              "title": "DMV Piping",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Copper",
                  "c": false
                },
                {
                  "title": "Cast Iron",
                  "c": false
                },
                {
                  "title": "Galvanized",
                  "c": false
                },
                {
                  "title": "Plastic or ABS or PVC",
                  "c": false
                }
              ]
            },
            {
              "title": "Condition of DMV Piping",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Fully Visible",
                  "c": false
                },
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Maginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Leaks",
                  "c": false
                },
                {
                  "title": "Unsupported",
                  "c": false
                }
              ]
            },
            {
              "title": "Plumbing System Images",
              "type": "image",
              "content": []
            }
          ],
          "showvalue": false
        },
        {
          "title": "Faucets or Fixtures",
          "items": [
            {
              "title": "Faucets",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Functional",
                  "c": false
                },
                {
                  "title": "Intermittent Function",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Missing or Incomplete",
                  "c": false
                },
                {
                  "title": "Loose",
                  "c": false
                },
                {
                  "title": "Broken or Damaged",
                  "c": false
                }
              ]
            },
            {
              "title": "Leaking",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Hose Bibb",
                  "c": false
                },
                {
                  "title": "Wall Stop",
                  "c": false
                },
                {
                  "title": "Faucet",
                  "c": false
                },
                {
                  "title": "Sprayer",
                  "c": false
                }
              ]
            },
            {
              "title": "Faucets or Fixtures Location",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Kitchen",
                  "c": false
                },
                {
                  "title": "Master Bath",
                  "c": false
                },
                {
                  "title": "Main Bath",
                  "c": false
                },
                {
                  "title": "Half Bath",
                  "c": false
                },
                {
                  "title": "Laundry",
                  "c": false
                },
                {
                  "title": "Bar",
                  "c": false
                }
              ]
            },
            {
              "title": "Accessories",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Vegetable Sink",
                  "c": false
                },
                {
                  "title": "Insta-Hot",
                  "c": false
                },
                {
                  "title": "Water Filter",
                  "c": false
                },
                {
                  "title": "Ice Maker",
                  "c": false
                }
              ]
            },
            {
              "title": "Disposer",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Noisy",
                  "c": false
                },
                {
                  "title": "Defective",
                  "c": false
                }
              ]
            },
            {
              "title": "Dishwasher",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Airgap",
                  "c": false
                }
              ]
            },
            {
              "title": "Dishwasher Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Functional",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Intermittent Function",
                  "c": false
                },
                {
                  "title": "Defects or Damage",
                  "c": false
                }
              ]
            },
            {
              "title": "Sinks or Fixtures",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Functional",
                  "c": false
                },
                {
                  "title": "Surface Damage",
                  "c": false
                },
                {
                  "title": "Cabinet Damage",
                  "c": false
                },
                {
                  "title": "Cross Connection",
                  "c": false
                },
                {
                  "title": "Improve Caulking at Sink, Back-Splash, Tub Deck, Shower Surround, Floor, Wood or MDF Molding",
                  "c": false
                }
              ]
            },
            {
              "title": "Grout Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Unsealed (Recommend Sealing)",
                  "c": false
                },
                {
                  "title": "Cracked, Loose, or Missing Grout",
                  "c": false
                }
              ]
            },
            {
              "title": "Drainage",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Functional",
                  "c": false
                },
                {
                  "title": "Missing Stopper",
                  "c": false
                },
                {
                  "title": "Missing or Inoperable Overflow",
                  "c": false
                },
                {
                  "title": "Clog or Slow Drain",
                  "c": false
                },
                {
                  "title": "Stained Drainpipe",
                  "c": false
                },
                {
                  "title": "Drips or Leaks",
                  "c": false
                },
                {
                  "title": "Defects or Damage",
                  "c": false
                },
                {
                  "title": "Unsafe",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                }
              ]
            },
            {
              "title": "Sinks or Fixtures Location",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Kitchen",
                  "c": false
                },
                {
                  "title": "Master Bath",
                  "c": false
                },
                {
                  "title": "Main Bath",
                  "c": false
                },
                {
                  "title": "Half Bath",
                  "c": false
                },
                {
                  "title": "Laundry",
                  "c": false
                },
                {
                  "title": "Bar",
                  "c": false
                }
              ]
            },
            {
              "title": "Toilet",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Runs Continuously",
                  "c": false
                },
                {
                  "title": "Leaks",
                  "c": false
                },
                {
                  "title": "Loose Bowl",
                  "c": false
                },
                {
                  "title": "Damage",
                  "c": false
                }
              ]
            },
            {
              "title": "Tub or Shower Surround(s)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Ceramic",
                  "c": false
                },
                {
                  "title": "FG",
                  "c": false
                },
                {
                  "title": "Masonite or Laminate",
                  "c": false
                },
                {
                  "title": "Slab",
                  "c": false
                },
                {
                  "title": "Jacuzzi",
                  "c": false
                }
              ]
            },
            {
              "title": "Condition of Tub or Shower Surround(s)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Functional",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Stains",
                  "c": false
                },
                {
                  "title": "Cross Connection",
                  "c": false
                },
                {
                  "title": "Defective",
                  "c": false
                },
                {
                  "title": "Loose Tile",
                  "c": false
                },
                {
                  "title": "Cracked or Broken",
                  "c": false
                },
                {
                  "title": "Leaky Shower Head",
                  "c": false
                },
                {
                  "title": "Leaky Faucet",
                  "c": false
                },
                {
                  "title": "Leaky Sprayer",
                  "c": false
                }
              ]
            },
            {
              "title": "Faucet or Fixtures Images",
              "type": "image",
              "content": []
            }
          ],
          "showvalue": false
        },
        {
          "title": "Water Heater",
          "items": [
            {
              "title": "Energy Source",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Gas or Propane",
                  "c": false
                },
                {
                  "title": "Electric",
                  "c": false
                },
                {
                  "title": "Oil",
                  "c": false
                },
                {
                  "title": "Solar",
                  "c": false
                },
                {
                  "title": "Geo Thermal",
                  "c": false
                }
              ]
            },
            {
              "title": "Brand Name",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Unknown",
                  "c": false
                },
                {
                  "title": "A O Smith",
                  "c": false
                },
                {
                  "title": "American",
                  "c": false
                },
                {
                  "title": "American Standard",
                  "c": false
                },
                {
                  "title": "Amtrol",
                  "c": false
                },
                {
                  "title": "Aqua Star  or  Bosch",
                  "c": false
                },
                {
                  "title": "Bosch",
                  "c": false
                },
                {
                  "title": "Bradford White",
                  "c": false
                },
                {
                  "title": "Briggs",
                  "c": false
                },
                {
                  "title": "Craftmaster",
                  "c": false
                },
                {
                  "title": "Eccotemp",
                  "c": false
                },
                {
                  "title": "GE",
                  "c": false
                },
                {
                  "title": "Hoyt",
                  "c": false
                },
                {
                  "title": "Kenmore",
                  "c": false
                },
                {
                  "title": "KD Navien",
                  "c": false
                },
                {
                  "title": "Lochinvar",
                  "c": false
                },
                {
                  "title": "Munchkin",
                  "c": false
                },
                {
                  "title": "Navien America",
                  "c": false
                },
                {
                  "title": "Navion",
                  "c": false
                },
                {
                  "title": "Noritz",
                  "c": false
                },
                {
                  "title": "Polaris",
                  "c": false
                },
                {
                  "title": "Reliance",
                  "c": false
                },
                {
                  "title": "Rheem",
                  "c": false
                },
                {
                  "title": "Ruud",
                  "c": false
                },
                {
                  "title": "Richmond",
                  "c": false
                },
                {
                  "title": "Rinnai",
                  "c": false
                },
                {
                  "title": "Sears Roebuck",
                  "c": false
                },
                {
                  "title": "State",
                  "c": false
                },
                {
                  "title": "State Select",
                  "c": false
                },
                {
                  "title": "Takagi",
                  "c": false
                },
                {
                  "title": "True Value",
                  "c": false
                },
                {
                  "title": "US Craftmaster",
                  "c": false
                },
                {
                  "title": "Whirlpool",
                  "c": false
                }
              ]
            },
            {
              "title": "Approximate Age (Years Old)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "number",
              "value": ""
            },
            {
              "title": "Capacity (in Gallons)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "10",
                  "c": false
                },
                {
                  "title": "20",
                  "c": false
                },
                {
                  "title": "30",
                  "c": false
                },
                {
                  "title": "40",
                  "c": false
                },
                {
                  "title": "50",
                  "c": false
                },
                {
                  "title": "OTHER (NEEDS MORE DATA)",
                  "c": false
                }
              ]
            },
            {
              "title": "Model Number",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "textbox",
              "value": ""
            },
            {
              "title": "Serial Number",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "textbox",
              "value": ""
            },
            {
              "title": "Water Temperature",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "number",
              "value": ""
            },
            {
              "title": "Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Data Plate Inaccessible or Illegible",
                  "c": false
                },
                {
                  "title": "Missing or Loose Seismic Restraints",
                  "c": false
                }
              ]
            },
            {
              "title": "TPRV Connection",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Missing",
                  "c": false
                },
                {
                  "title": "Reduced Extension",
                  "c": false
                },
                {
                  "title": "Poor Extension Termination",
                  "c": false
                }
              ]
            },
            {
              "title": "Exhaust",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Metal",
                  "c": false
                },
                {
                  "title": "Flex Ducting",
                  "c": false
                },
                {
                  "title": "PVC",
                  "c": false
                },
                {
                  "title": "Condensate",
                  "c": false
                },
                {
                  "title": "Rust",
                  "c": false
                },
                {
                  "title": "Corrosion",
                  "c": false
                },
                {
                  "title": "Verify Proper Pitch",
                  "c": false
                },
                {
                  "title": "Disconnected",
                  "c": false
                },
                {
                  "title": "Into Masonry Chase",
                  "c": false
                },
                {
                  "title": "Missing Liner",
                  "c": false
                },
                {
                  "title": "Back-Drafting",
                  "c": false
                },
                {
                  "title": "Unsafe",
                  "c": false
                },
                {
                  "title": "Recommend Professional Re-Evaluation or Remediation",
                  "c": false
                }
              ]
            },
            {
              "title": "Water Heater Images",
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
      "color": "#D32E2E",
      "pages": [
        {
          "title": "Heating System",
          "items": [
            {
              "title": "Conditions",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "The inspection of the heating system includes the fuel source; heating equipment; heating distribution; operating controls; visible portions of flue pipes, chimneys and venting, installed auxiliary heating units, deficiencies of the systems or components, and reports any evidence that indicates the possible presence of an underground storage tank. Each habitable space in the home was inspected to determine whether or not there was a functioning heat source present and operable, using normal readily accessible control devices. Access panels or covers provided by the manufacturer or installer, if readily accessible and detachable, were opened. The report describes the existing operation of: electric baseboard and in-wall heaters to ensure they are functional, central heating units and distribution systems, visible flue pipes and related components to ensure functional operation and proper clearance from combustibles, spaces where fossil fuel burning heating devices are located to ensure there is air for combustion."
            },
            {
              "title": "Limitations",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-120 of the Washington State Dept. of Licensing, the inspector is not required to determine adequacy of combustion air, or the capacity, adequacy, or efficiency of a heating system, or evaluate thermostats or controls other than to confirm that they actually turn a system on or off. The inspector did not remove covers or panels that were not readily accessible or removable, or dismantle any equipment, controls, or gauges except readily identifiable access covers designed to be removed by users. The inspector is not required to ignite pilot lights, or operate heating devices or systems that have been shut down, do not respond to normal controls, or any heating system when circumstances are not conducive to safe operation or when doing so will damage the equipment, inspect or evaluate heat exchangers concealed inside furnaces and boilers, the interior of chimneys and flues, and or or any heating equipment that is not readily accessible, or installed heating system accessories, such as humidifiers, air purifiers, motorized dampers, heat reclaimers; solar heating systems; or concealed distribution systems."
            },
            {
              "title": "Energy Source(s)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Gas",
                  "c": false
                },
                {
                  "title": "LP",
                  "c": false
                },
                {
                  "title": "Electric",
                  "c": false
                },
                {
                  "title": "Oil",
                  "c": false
                },
                {
                  "title": "Solar",
                  "c": false
                },
                {
                  "title": "Wind",
                  "c": false
                },
                {
                  "title": "Geo Thermal",
                  "c": false
                }
              ]
            },
            {
              "title": "System Type",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Central Forced Air",
                  "c": false
                },
                {
                  "title": "In-Wall Space Heaters",
                  "c": false
                },
                {
                  "title": "Baseboard Wall",
                  "c": false
                },
                {
                  "title": "Radiant",
                  "c": false
                }
              ]
            },
            {
              "title": "Boiler",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Water",
                  "c": false
                },
                {
                  "title": "Steam",
                  "c": false
                },
                {
                  "title": "Radiator",
                  "c": false
                }
              ]
            },
            {
              "title": "Heat Pump",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Air",
                  "c": false
                },
                {
                  "title": "Water",
                  "c": false
                },
                {
                  "title": "Ground",
                  "c": false
                }
              ]
            },
            {
              "title": "Stove",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Wood",
                  "c": false
                },
                {
                  "title": "Solid Fuel(Pellet)",
                  "c": false
                },
                {
                  "title": "Gas Log",
                  "c": false
                },
                {
                  "title": "Verify Clearance to Combustibles",
                  "c": false
                }
              ]
            },
            {
              "title": "Solar",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Passive",
                  "c": false
                },
                {
                  "title": "Heat Sink",
                  "c": false
                },
                {
                  "title": "Photo-Voltaic",
                  "c": false
                },
                {
                  "title": "Panels",
                  "c": false
                },
                {
                  "title": "Convection",
                  "c": false
                }
              ]
            },
            {
              "title": "Heating System Images",
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
              "title": "Brand Name",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Bryant",
                  "c": false
                },
                {
                  "title": "OTHER (NEED MORE DATA)",
                  "c": false
                }
              ]
            },
            {
              "title": "Capacity",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Text Entry?",
                  "c": false
                },
                {
                  "title": "OTHER (NEED MORE DATA)",
                  "c": false
                }
              ]
            },
            {
              "title": "Year of Manufacture",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "number",
              "value": ""
            },
            {
              "title": "Model Number",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "textbox",
              "value": ""
            },
            {
              "title": "Serial Number",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "textbox",
              "value": ""
            },
            {
              "title": "Posted Service History",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory (Annual Safety)",
                  "c": false
                },
                {
                  "title": "Missing or Old",
                  "c": false
                },
                {
                  "title": "Last Serviced Not Visible",
                  "c": false
                }
              ]
            },
            {
              "title": "Posted Service History Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Dusty Cabinet",
                  "c": false
                },
                {
                  "title": "Rust",
                  "c": false
                },
                {
                  "title": "Corrosion",
                  "c": false
                },
                {
                  "title": "Flame Distortion",
                  "c": false
                }
              ]
            },
            {
              "title": "Central Furnace or Heat Pump Images",
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
              "title": "Ducting",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Plenum & Cold Air Returns",
                  "c": false
                },
                {
                  "title": "Metal Duct",
                  "c": false
                },
                {
                  "title": "Insulated Flex Duct",
                  "c": false
                }
              ]
            },
            {
              "title": "Reduced Vent",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Metal",
                  "c": false
                },
                {
                  "title": "PVC",
                  "c": false
                },
                {
                  "title": "Verify Proper Pitch",
                  "c": false
                },
                {
                  "title": "Rusted",
                  "c": false
                },
                {
                  "title": "Deteriorated",
                  "c": false
                },
                {
                  "title": "Disconnected",
                  "c": false
                },
                {
                  "title": "Not Applicable",
                  "c": false
                }
              ]
            },
            {
              "title": "Filter",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Electrostatic",
                  "c": false
                },
                {
                  "title": "Paper",
                  "c": false
                },
                {
                  "title": "Filter Fabric",
                  "c": false
                },
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor or Dirty",
                  "c": false
                }
              ]
            },
            {
              "title": "Disconnect or Typical Safety Controls",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Functional",
                  "c": false
                },
                {
                  "title": "Verify Location or Function",
                  "c": false
                },
                {
                  "title": "Hazard",
                  "c": false
                },
                {
                  "title": "Recommend Professional HVAC Re-Evaluation, Safety Inspection, and or or Remediation",
                  "c": false
                }
              ]
            },
            {
              "title": "NEW SECTION??? Images",
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
              "title": "Conditions",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "The inspection of solid fuel and gas fireplaces, or heating stoves includes the readily visible components, the fuel source, damper, fire-box, and hearth. Each fireplace or heating stove in the home, including dampers, fire-boxes and hearths was inspected using normal readily accessible control devices to determine whether or not there was a functional and operable heat source present, and to ensure there was air for combustion in spaces where fossil fuel burning heating devices were located. The findings area describes the heating units, visible flue pipes and related components to ensure functional operation and proper clearance from combustibles, and describes any deficiencies of these systems or components."
            },
            {
              "title": "Limitations",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-160 of the Washington State Dept. of Licensing, the inspector is not required to: (1)inspect flues or verify the presence of flue liners beyond what can be safely and readily seen from the roof or the firebox of a stove or fireplace, (2)inspect any solid fuel device being operated at the time of the inspection, (3)dismantle fireplaces or stoves to inspect fire-boxes or remove rain caps to inspect chimney flues, (3)evaluate the installation or adequacy of fireplace inserts, or modifications to a fireplace, stove, or chimney, or (4)ignite fires in a fireplace or stove, perform a chimney smoke test or determine the adequacy of draft."
            },
            {
              "title": "Fireplace or Stove Type",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Masonry Firebox",
                  "c": false
                },
                {
                  "title": "Metal FP Insert",
                  "c": false
                },
                {
                  "title": "Direct Vent Gas FP",
                  "c": false
                },
                {
                  "title": "Wood or Pellet Stove",
                  "c": false
                },
                {
                  "title": "Masonry Flue Liner",
                  "c": false
                },
                {
                  "title": "Metal Flue Liner",
                  "c": false
                },
                {
                  "title": "Unlined Chase",
                  "c": false
                },
                {
                  "title": "Venting Into Chimney Chase",
                  "c": false
                }
              ]
            },
            {
              "title": "Mantle or Hearth",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Loose",
                  "c": false
                },
                {
                  "title": "Settling Cracks",
                  "c": false
                },
                {
                  "title": "Burned",
                  "c": false
                },
                {
                  "title": "Verify Clearance to Combustibles",
                  "c": false
                }
              ]
            },
            {
              "title": "Firebox",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "No Access",
                  "c": false
                },
                {
                  "title": "Missing Liner",
                  "c": false
                },
                {
                  "title": "Cracked Refractory Brick",
                  "c": false
                },
                {
                  "title": "Missing or Loose Mortar",
                  "c": false
                }
              ]
            },
            {
              "title": "Damper",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Missing",
                  "c": false
                },
                {
                  "title": "No Access",
                  "c": false
                },
                {
                  "title": "Inoperable or DTO",
                  "c": false
                },
                {
                  "title": "Rusted",
                  "c": false
                },
                {
                  "title": "Damaged or Broken",
                  "c": false
                },
                {
                  "title": "Creosote Build-Up",
                  "c": false
                },
                {
                  "title": "Deterioration",
                  "c": false
                },
                {
                  "title": "Recommend Cleaning or Re-Evaluation or Repairs",
                  "c": false
                }
              ]
            },
            {
              "title": "Chimney",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Framed",
                  "c": false
                },
                {
                  "title": "Masonry",
                  "c": false
                },
                {
                  "title": "Metal",
                  "c": false
                },
                {
                  "title": "Class 'B'",
                  "c": false
                },
                {
                  "title": "DV Wall Hood",
                  "c": false
                },
                {
                  "title": "Cracked Wash",
                  "c": false
                },
                {
                  "title": "Loose Mortar",
                  "c": false
                },
                {
                  "title": "No Liner",
                  "c": false
                },
                {
                  "title": "No Spark Arrestor",
                  "c": false
                },
                {
                  "title": "Rust",
                  "c": false
                },
                {
                  "title": "Creosote",
                  "c": false
                },
                {
                  "title": "Missing Cricket",
                  "c": false
                },
                {
                  "title": "Inadequate or Missing Flashing",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                },
                {
                  "title": "Missing Burn Guard",
                  "c": false
                },
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Recommend Professional Re-Evaluation or Remediation",
                  "c": false
                }
              ]
            },
            {
              "title": "Fireplaces or Stoves Images",
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
      "color": "#38A4DD",
      "pages": [
        {
          "title": "Cooling Systems",
          "items": [
            {
              "title": "Conditions",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "The inspection of the air conditioning system includes the cooling equipment; cooling distribution equipment, the energy sources, and a description noted in this report of any deficiencies of these systems or components: (1)Where an air conditioning system is present, readily accessible access panels or covers provided by the manufacturer or installer were opened to inspect the air conditioning system. (2)Where conditions allowed use of normal control devices, function of the controls and operative components of the complete system were inspected, and temperature differential was measured and recorded. (3)Interior exhaust fans or furnace blower motors may be present and or or operational at the time of the inspection but do not provide cooling. (BOLD THIS)Heat pump cycles were NOT reversed, and if outdoor temperatures were below 60 degrees during the past 72hrs, Air Conditioning systems were NOT tested.(BOLD THIS)"
            },
            {
              "title": "Limitations",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-130 of the Washington State Dept. of Licensing, the inspector is not required to determine the efficiency, or adequacy of the system, activate cooling systems that have been shut down, or operate cooling system components if the exterior temperature is below sixty degrees Fahrenheit, when doing so might damage the equipment, or when other circumstances are not conducive to safe operation, remove covers or panels that are not readily accessible or dismantle any equipment, controls, or gauges except readily identifiable access covers designed to be removed by users, check the coolant pressure  or  charge, or inspect the system for refrigerant leaks, inspect gas-fired refrigeration systems, evaporative coolers, wall or window-mounted air-conditioning units, evaluate digital-type thermostats or controls, or determine how much current the unit is drawing."
            },
            {
              "title": "Temperature Differential",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "number",
              "value": ""
            },
            {
              "title": "Air Conditioner Type",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "OTHER (NEEDS MORE DATA)",
                  "c": false
                }
              ]
            },
            {
              "title": "Energy Source",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Natural Gas",
                  "c": false
                },
                {
                  "title": "Propane",
                  "c": false
                },
                {
                  "title": "Electric",
                  "c": false
                },
                {
                  "title": "Central Air",
                  "c": false
                },
                {
                  "title": "Heat Pump",
                  "c": false
                },
                {
                  "title": "Fan Cooled",
                  "c": false
                },
                {
                  "title": "Water",
                  "c": false
                },
                {
                  "title": "Gas Chiller",
                  "c": false
                },
                {
                  "title": "Swamp Cooler",
                  "c": false
                }
              ]
            },
            {
              "title": "Cooling Systems Images",
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
              "title": "Brand Name",
              "required": false, "answered":false,
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
              "title": "Capacity",
              "required": false, "answered":false,
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
              "title": "Year of Manufacture",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "number",
              "value": ""
            },
            {
              "title": "Model Number",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "textbox",
              "value": ""
            },
            {
              "title": "Serial Number",
              "type": "textbox",
              "value": ""
            },
            {
              "title": "Evaporative Coil or Heat Pump Images",
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
              "title": "Compressor or Condenser Brand Name",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Bryant",
                  "c": false
                },
                {
                  "title": "OTHER (NEEDS MORE DATA)",
                  "c": false
                }
              ]
            },
            {
              "title": "Compressor or Condenser Capacity",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "OTHER (NEEDS MORE DATA)",
                  "c": false
                }
              ]
            },
            {
              "title": "Compressor or Condenser Year of Manufacture",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "number",
              "value": ""
            },
            {
              "title": "Model Number of Compressor or Condenser",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "textbox",
              "value": ""
            },
            {
              "title": "Serial Number of Compressor or Condenser",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "textbox",
              "value": ""
            },
            {
              "title": "Condition Compressor or Condenser",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Uneven Base",
                  "c": false
                },
                {
                  "title": "Inadequate Base Height",
                  "c": false
                },
                {
                  "title": "Obstructed Flow",
                  "c": false
                }
              ]
            },
            {
              "title": "Refrigerant Lines",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Leaking",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                },
                {
                  "title": "Worn",
                  "c": false
                },
                {
                  "title": "Insulation Missing",
                  "c": false
                }
              ]
            },
            {
              "title": "Compressor or Condensor Images",
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
      "color": "#FDD836",
      "pages": [
        {
          "title": "Electrical System",
          "items": [
            {
              "title": "Conditions",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "The inspection of the readily visible electrical system includes the service drop through the main panel; sub- panels including feeders; branch circuits, connected devices, and lighting fixtures, and describes any deficiencies of these systems or components. The report defines the type of primary service, whether overhead or underground, voltage, amperage, over-current protection devices (fuses or breakers) by inspecting the main and branch circuit conductors for proper over-current protection and condition by visual observation after removal of the readily accessible electrical main and sub-panel cover(s) where applicable, any circuit breaker panel or sub-panel known within the home inspection profession to have safety concerns, identifies whether or not existence of a connected service- grounding conductor and service-grounding electrode can be confirmed, and the presence or absence of solid conductor aluminum branch circuits, verifies the operation of a representative number of accessible switches, receptacles and light fixtures, the grounding and polarity of a representative number of receptacles (particularly in close proximity to plumbing fixtures or at the exterior), the function or absence of ground fault circuit interrupter (GFCI) protection and arc-fault circuit interrupter (AFCI) protection where recommended by industry standards."
            },
            {
              "title": "Limitations",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-110 of the Washington State Dept. of Licensing, the inspector is not required to: insert any tool, probe or testing device into the main or sub-panels, activate electrical systems or branch circuits that are not energized, operate circuit breakers, service disconnects or remove fuses, verify the continuity of connected service ground(s), or test every switch, receptacle, and fixture, move any objects, furniture, or appliances to gain access to any electrical component, remove switch and receptacle cover plates, dismantle any electrical device or control, except for the removal of the dead-front covers from the main service panel and sub-panels, or inspect electrical equipment thatAPOSTRPHEs not readily accessible, or ancillary systems, including but not limited to: timers, security systems, low voltage relays, smoke or heat detectors, antennas, intercoms, electrical de- icing tapes, lawn sprinkler wiring, swimming pool or spa wiring, central vacuum systems.(BOLD THIS) Solid conductor aluminum wiring may be hazardous and if reported, a licensed electrician should inspect the system to ensure itAPOSTROPHEs safe. Homes without ground fault protection should have GFCI devices installed, replaced, or upgraded where recommended by industry standards.(BOLD THIS)"
            },
            {
              "title": "Main Service Entry",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Underground",
                  "c": false
                },
                {
                  "title": "Yard Post",
                  "c": false
                },
                {
                  "title": "Not Visible or Accessible",
                  "c": false
                },
                {
                  "title": "In Conduit",
                  "c": false
                },
                {
                  "title": "Overhead",
                  "c": false
                },
                {
                  "title": "Pole Unstable",
                  "c": false
                },
                {
                  "title": "3 Cables",
                  "c": false
                },
                {
                  "title": "4 Cables",
                  "c": false
                },
                {
                  "title": "Copper",
                  "c": false
                },
                {
                  "title": "Aluminum",
                  "c": false
                }
              ]
            },
            {
              "title": "Condition of Main Service Entry",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Inadequate Clearances",
                  "c": false
                },
                {
                  "title": "Damage",
                  "c": false
                },
                {
                  "title": "Hazard",
                  "c": false
                }
              ]
            },
            {
              "title": "Service Size",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "AMPS (NEED MORE DATA)",
                  "c": false
                },
                {
                  "title": "VOLTS (NEED MORE DATA)",
                  "c": false
                }
              ]
            },
            {
              "title": "Ground Connection",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Visible",
                  "c": false
                }
              ]
            },
            {
              "title": "Meter Location",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Exterior Wall",
                  "c": false
                },
                {
                  "title": "Yard Post",
                  "c": false
                },
                {
                  "title": "Mechanical Closet",
                  "c": false
                },
                {
                  "title": "Not Visible or Locked",
                  "c": false
                }
              ]
            },
            {
              "title": "Meter Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Inadequate Access",
                  "c": false
                },
                {
                  "title": "Damage",
                  "c": false
                },
                {
                  "title": "Hazard",
                  "c": false
                }
              ]
            },
            {
              "title": "Grounding",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Visible",
                  "c": false
                },
                {
                  "title": "Ground Rods",
                  "c": false
                },
                {
                  "title": "Ufer",
                  "c": false
                },
                {
                  "title": "Bonded to Water or Gas Piping",
                  "c": false
                }
              ]
            },
            {
              "title": "Ground Wiring",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Copper",
                  "c": false
                },
                {
                  "title": "Aluminum",
                  "c": false
                },
                {
                  "title": "Missing",
                  "c": false
                },
                {
                  "title": "Not Visible or Accessible",
                  "c": false
                }
              ]
            },
            {
              "title": "Condition of Main Electrical Disconnect",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Loose Clamp or Lug",
                  "c": false
                },
                {
                  "title": "Missing",
                  "c": false
                },
                {
                  "title": "Improper Bond",
                  "c": false
                },
                {
                  "title": "Too Far From Entry",
                  "c": false
                }
              ]
            },
            {
              "title": "Main Electrical Disconnect Location",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "With Meter",
                  "c": false
                },
                {
                  "title": "Inside Main Panel",
                  "c": false
                },
                {
                  "title": "Near Panel",
                  "c": false
                },
                {
                  "title": "Fuse",
                  "c": false
                },
                {
                  "title": "Breaker",
                  "c": false
                },
                {
                  "title": "Switch",
                  "c": false
                },
                {
                  "title": "Split-Bus",
                  "c": false
                },
                {
                  "title": "Overloaded (>6 Hand Motions)",
                  "c": false
                }
              ]
            },
            {
              "title": "Main Panel",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Visible or Accessible",
                  "c": false
                },
                {
                  "title": "Blocked",
                  "c": false
                },
                {
                  "title": "Not Evaluated",
                  "c": false
                }
              ]
            },
            {
              "title": "Reason for Non Evaluation",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "OTHER (NEED MORE DATA)",
                  "c": false
                }
              ]
            },
            {
              "title": "Breakers or Fuses",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Breakers",
                  "c": false
                },
                {
                  "title": "Fuses",
                  "c": false
                }
              ]
            },
            {
              "title": "Amps",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "NEED MORE DATA",
                  "c": false
                }
              ]
            },
            {
              "title": "Volts",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "240",
                  "c": false
                },
                {
                  "title": "OTHER (NEED MORE DATA)",
                  "c": false
                }
              ]
            },
            {
              "title": "Breaker(s)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "GFCI Breakers",
                  "c": false
                },
                {
                  "title": "AFCI Breakers",
                  "c": false
                },
                {
                  "title": "Not Applicable",
                  "c": false
                }
              ]
            },
            {
              "title": "Location",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Garage",
                  "c": false
                },
                {
                  "title": "Basement",
                  "c": false
                },
                {
                  "title": "With Meter",
                  "c": false
                },
                {
                  "title": "Exterior Wall",
                  "c": false
                },
                {
                  "title": "Yard Post",
                  "c": false
                },
                {
                  "title": "Interior Wall",
                  "c": false
                },
                {
                  "title": "Mechanical Room",
                  "c": false
                },
                {
                  "title": "Laundry Room",
                  "c": false
                },
                {
                  "title": "Utility Area",
                  "c": false
                },
                {
                  "title": "Crawl Space",
                  "c": false
                }
              ]
            },
            {
              "title": "Branch Wiring",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Copper",
                  "c": false
                },
                {
                  "title": "Almuninum",
                  "c": false
                },
                {
                  "title": "Tin Clad Copper",
                  "c": false
                },
                {
                  "title": "Copper Clad Aluminum",
                  "c": false
                },
                {
                  "title": "Non-Metallic Sheathed",
                  "c": false
                },
                {
                  "title": "BX Cable",
                  "c": false
                },
                {
                  "title": "Condiut",
                  "c": false
                },
                {
                  "title": "Cloth-Wrapped",
                  "c": false
                },
                {
                  "title": "Knob & Tube",
                  "c": false
                }
              ]
            },
            {
              "title": "Condition of Branch Wiring",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Inadequate Access Clearances",
                  "c": false
                },
                {
                  "title": "Dangling Wires",
                  "c": false
                },
                {
                  "title": "Excessive Sheathing in Panel",
                  "c": false
                },
                {
                  "title": "Double-Tapping",
                  "c": false
                },
                {
                  "title": "Undersized Wiring",
                  "c": false
                },
                {
                  "title": "Damage",
                  "c": false
                },
                {
                  "title": "Rust",
                  "c": false
                },
                {
                  "title": "Buried In Insulation",
                  "c": false
                },
                {
                  "title": "Burned Breakers",
                  "c": false
                },
                {
                  "title": "Dangerous Panel Type",
                  "c": false
                },
                {
                  "title": "Improper Splicing",
                  "c": false
                },
                {
                  "title": "Hazardous or Unsafe",
                  "c": false
                },
                {
                  "title": "Recommend Professional Evaluation or Repairs",
                  "c": false
                }
              ]
            },
            {
              "title": "Electrical System Images",
              "type": "image",
              "content": []
            }
          ],
          "showvalue": false
        },
        {
          "title": "Fixtures, Switches, or Detectors",
          "items": [
            {
              "title": "Fixtures",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Missing or Removed",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Missing Bulbs",
                  "c": false
                },
                {
                  "title": "Missing Covers",
                  "c": false
                },
                {
                  "title": "Gaps",
                  "c": false
                }
              ]
            },
            {
              "title": "Fixtures Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Inadequate Clearances",
                  "c": false
                },
                {
                  "title": "Damage",
                  "c": false
                },
                {
                  "title": "Hazard",
                  "c": false
                }
              ]
            },
            {
              "title": "Switches or Receptacles",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Typical Grounded",
                  "c": false
                },
                {
                  "title": "Some Grounded",
                  "c": false
                },
                {
                  "title": "Typical Un-Grounded",
                  "c": false
                }
              ]
            },
            {
              "title": "Condition of Switches or Receptacles",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Weak or Loose",
                  "c": false
                },
                {
                  "title": "Missing or Removed",
                  "c": false
                },
                {
                  "title": "Missing Cover Plates",
                  "c": false
                },
                {
                  "title": "Dangling or Unmounted",
                  "c": false
                },
                {
                  "title": "External Splicing",
                  "c": false
                },
                {
                  "title": "Gaps Into Boxes",
                  "c": false
                },
                {
                  "title": "Burned",
                  "c": false
                },
                {
                  "title": "Open Ground",
                  "c": false
                },
                {
                  "title": "Open Neutral",
                  "c": false
                },
                {
                  "title": "Reverse Polarity",
                  "c": false
                },
                {
                  "title": "Ungrounded 3-Prong",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                },
                {
                  "title": "Hazardous or Unsafe",
                  "c": false
                },
                {
                  "title": "Recommend Repair or Evaluation by Professional Electrician",
                  "c": false
                }
              ]
            },
            {
              "title": "Carbon Monoxide Detectors",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Installed",
                  "c": false
                },
                {
                  "title": "Missing or Recommended",
                  "c": false
                },
                {
                  "title": "NOT Tested",
                  "c": false
                }
              ]
            },
            {
              "title": "Smoke Detectors",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Installed",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Chirping or Low Batteries",
                  "c": false
                },
                {
                  "title": "Missing",
                  "c": false
                }
              ]
            },
            {
              "title": "Caution Label",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "CAUTION: Testing Detectors by pushing test buttons may be inconclusive"
            },
            {
              "title": "Fixtures, Switches, or Detectors Images",
              "type": "image",
              "content": []
            }
          ],
          "showvalue": false
        }
      ]
    },
    {
      "title": "Interior",
      "color": "#F06392",
      "pages": [
        {
          "title": "Living Room",
          "items": [
            {
              "title": "Conditions",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "The inspection of the interior includes the walls, ceilings, floors, windows, and doors; steps, stairways, balconies and railings. The interior walls, ceilings, and floors were inspected for indications of concealed structural deficiencies, water infiltration, or major damage. The report verifies that steps, handrails, guard-rails, stairways and landings are installed wherever necessary, and indicates when they are missing or in need of repair, or when baluster spacing exceeds four inches, the condition and operation of a representative number of windows and doors, the overall general condition of cabinets and countertops, grout, and caulking at kitchen and bathroom counters, describes any non-cosmetic deficiencies of these systems or components, and comments on the presence or absence of smoke detectors."
            },
            {
              "title": "Limitations",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "According to the Home Inspection Standards of Practice WAC &#167; 308-408C-140 of the Washington State Dept. of Licensing, the inspector is not required to verify whether all walls, floors, ceilings, doorways, cabinets and window openings are square, straight, level or plumb, operate any system or component that is shut down, not connected or otherwise inoperable, or that does not respond to normal user controls, the strength, adequacy, effectiveness, or efficiency of any system or component; causes of any condition, or deficiency the remaining service life of any system or component; or the methods, materials, or cost of corrections; future conditions including, but not limited to, failure of systems and components or report on cosmetic conditions related to the condition of interior components."
            },
            {
              "title": "Entry Door(s)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Solid Wood",
                  "c": false
                },
                {
                  "title": "Metal",
                  "c": false
                },
                {
                  "title": "Fiberglass",
                  "c": false
                },
                {
                  "title": "Panel",
                  "c": false
                },
                {
                  "title": "Hollow Core",
                  "c": false
                }
              ]
            },
            {
              "title": "Entry Door(s) Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Sagging or Settled",
                  "c": false
                },
                {
                  "title": "Rubbing or Binding",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                },
                {
                  "title": "Hardware Issues",
                  "c": false
                },
                {
                  "title": "Doorbell Inoperable",
                  "c": false
                }
              ]
            },
            {
              "title": "Weatherstrip",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Missing or Damaged",
                  "c": false
                },
                {
                  "title": "Poor Seal",
                  "c": false
                },
                {
                  "title": "Ineffective Threshold",
                  "c": false
                }
              ]
            },
            {
              "title": "Window(s)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Inaccessible",
                  "c": false
                },
                {
                  "title": "Difficult To Operate (Needs Adjustment or Lubrication)",
                  "c": false
                },
                {
                  "title": "Missing Hardware",
                  "c": false
                },
                {
                  "title": "Inadequate Security",
                  "c": false
                },
                {
                  "title": "Failed Thermal Seals",
                  "c": false
                },
                {
                  "title": "Broken Panes",
                  "c": false
                },
                {
                  "title": "Stained",
                  "c": false
                },
                {
                  "title": "Weathered Sills",
                  "c": false
                },
                {
                  "title": "Mold or Mildew",
                  "c": false
                },
                {
                  "title": "Damage",
                  "c": false
                },
                {
                  "title": "Deterioration",
                  "c": false
                }
              ]
            },
            {
              "title": "Ceiling Fan",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Satisfactory",
                  "c": false
                }
              ]
            },
            {
              "title": "Heat Source",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Missing or Inadequate",
                  "c": false
                }
              ]
            },
            {
              "title": "Lights, Switches, or Receptacles (Refer To Electrical Section or SUB-HEADING? or DO WE NEED THIS SECTION?)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Appeared Functional",
                  "c": false
                },
                {
                  "title": "Loose or Worn",
                  "c": false
                },
                {
                  "title": "Missing",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Missing Cover Plates",
                  "c": false
                },
                {
                  "title": "Ungrounded 3-Prong",
                  "c": false
                },
                {
                  "title": "Inoperable GFCI",
                  "c": false
                },
                {
                  "title": "Missing GFCI Protection",
                  "c": false
                },
                {
                  "title": "Reversed Polarity",
                  "c": false
                },
                {
                  "title": "OG or RP Within 6 Feet",
                  "c": false
                },
                {
                  "title": "Burned",
                  "c": false
                },
                {
                  "title": "Exposed Wires",
                  "c": false
                },
                {
                  "title": "Hazardous or Unsafe",
                  "c": false
                },
                {
                  "title": "Refer To Electrical Section",
                  "c": false
                },
                {
                  "title": "Recommend Professional Evaluation",
                  "c": false
                }
              ]
            },
            {
              "title": "Comments",
              "type": "textbox",
              "value": {}
            },
            {
              "title": "Living Room Images",
              "type": "image",
              "content": []
            }
          ],
          "showvalue": false
        },
        {
          "title": "Kitchen",
          "items": [
            {
              "title": "Appliances",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Sink Disposer",
                  "c": false
                },
                {
                  "title": "Fridge",
                  "c": false
                },
                {
                  "title": "Dishwasher",
                  "c": false
                },
                {
                  "title": "Oven",
                  "c": false
                },
                {
                  "title": "Range",
                  "c": false
                },
                {
                  "title": "Microwave",
                  "c": false
                },
                {
                  "title": "Warmer",
                  "c": false
                },
                {
                  "title": "Trash Compactor",
                  "c": false
                },
                {
                  "title": "Cooler",
                  "c": false
                },
                {
                  "title": "Water Filter",
                  "c": false
                },
                {
                  "title": "Instant Hot",
                  "c": false
                }
              ]
            },
            {
              "title": "Cabinets",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                },
                {
                  "title": "Worn Finish",
                  "c": false
                },
                {
                  "title": "Loose Drawers or Hinges",
                  "c": false
                }
              ]
            },
            {
              "title": "Countertops",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Granite",
                  "c": false
                },
                {
                  "title": "Laminate",
                  "c": false
                },
                {
                  "title": "Tile",
                  "c": false
                },
                {
                  "title": "Slab",
                  "c": false
                }
              ]
            },
            {
              "title": "Countertops Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Worn",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                }
              ]
            },
            {
              "title": "Backsplash & Self Edge",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal or Worn",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                }
              ]
            },
            {
              "title": "Caulking",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Worn or Cracked or Gaps",
                  "c": false
                },
                {
                  "title": "Improve at Sink, Back-Splash, Counters, or Fixtures",
                  "c": false
                }
              ]
            },
            {
              "title": "Grout",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Cracked or Missing",
                  "c": false
                },
                {
                  "title": "Loose",
                  "c": false
                },
                {
                  "title": "Water Damage",
                  "c": false
                },
                {
                  "title": "Recommend Sealing",
                  "c": false
                }
              ]
            },
            {
              "title": "Exhaust Fan",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Missing",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                }
              ]
            },
            {
              "title": "Heat Source",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Missing or Inadequate",
                  "c": false
                }
              ]
            },
            {
              "title": "Lights or Switches or Receptacles (Refer To Electrical Section)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Appeared Functional",
                  "c": false
                },
                {
                  "title": "Loose or Worn",
                  "c": false
                },
                {
                  "title": "Missing",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Missing Cover Plates",
                  "c": false
                },
                {
                  "title": "Ungrounded 3-Prong",
                  "c": false
                },
                {
                  "title": "Inoperable GFCI",
                  "c": false
                },
                {
                  "title": "Missing GFCI Protection",
                  "c": false
                },
                {
                  "title": "Reversed Polarity",
                  "c": false
                },
                {
                  "title": "OG or RP Within 6 Feet",
                  "c": false
                },
                {
                  "title": "Burned",
                  "c": false
                },
                {
                  "title": "Exposed Wires",
                  "c": false
                },
                {
                  "title": "Hazardous or Unsafe",
                  "c": false
                },
                {
                  "title": "Recommend Professional Evaluation",
                  "c": false
                }
              ]
            },
            {
              "title": "Kitchen Images",
              "type": "image",
              "content": []
            }
          ],
          "showvalue": false
        },
        {
          "title": "Laundry",
          "items": [
            {
              "title": "Appliances",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "None",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Washer",
                  "c": false
                },
                {
                  "title": "Dryer",
                  "c": false
                },
                {
                  "title": "WH",
                  "c": false
                },
                {
                  "title": "Furnace",
                  "c": false
                },
                {
                  "title": "Conditioner",
                  "c": false
                }
              ]
            },
            {
              "title": "Dryer",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Electric",
                  "c": false
                },
                {
                  "title": "Gas",
                  "c": false
                },
                {
                  "title": "Inoperable or OFF",
                  "c": false
                },
                {
                  "title": "Cap Needed",
                  "c": false
                },
                {
                  "title": "Hazard(s)",
                  "c": false
                },
                {
                  "title": "Recommend Re-Evaluation",
                  "c": false
                }
              ]
            },
            {
              "title": "Exhausted",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Wall",
                  "c": false
                },
                {
                  "title": "Ceiling",
                  "c": false
                },
                {
                  "title": "Floor",
                  "c": false
                }
              ]
            },
            {
              "title": "Exhaust Appears",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Clogged or Loose or Poor",
                  "c": false
                }
              ]
            },
            {
              "title": "Exhaust Fan",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Weak or Noisy",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Missing",
                  "c": false
                }
              ]
            },
            {
              "title": "Laundry Images",
              "type": "image",
              "content": []
            }
          ],
          "showvalue": false
        },
        {
          "title": "Bathroom(s)",
          "items": [
            {
              "title": "Walls or Ceilings",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "GWB",
                  "c": false
                },
                {
                  "title": "Lath & Plaster",
                  "c": false
                },
                {
                  "title": "Acoustic Tile",
                  "c": false
                },
                {
                  "title": "Paneling",
                  "c": false
                },
                {
                  "title": "Open Beam",
                  "c": false
                }
              ]
            },
            {
              "title": "Condition of Walls or Ceilings",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Stains or Mildew",
                  "c": false
                },
                {
                  "title": "Cracks",
                  "c": false
                },
                {
                  "title": "Repairs",
                  "c": false
                },
                {
                  "title": "PACM",
                  "c": false
                }
              ]
            },
            {
              "title": "Floors",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Covered",
                  "c": false
                },
                {
                  "title": "Sloping",
                  "c": false
                },
                {
                  "title": "Squeaks",
                  "c": false
                },
                {
                  "title": "Damaged",
                  "c": false
                },
                {
                  "title": "Fungal Rot",
                  "c": false
                }
              ]
            },
            {
              "title": "Caulking",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Worn or Cracked or Gaps",
                  "c": false
                },
                {
                  "title": "Improve At Sink, Back-Splash, Tub or Shower Surround or  or Floor",
                  "c": false
                }
              ]
            },
            {
              "title": "Heat",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Yes",
                  "c": false
                },
                {
                  "title": "No",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                }
              ]
            },
            {
              "title": "Exhaust Fan",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Yes",
                  "c": false
                },
                {
                  "title": "No",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                }
              ]
            },
            {
              "title": "Lights or Switches or Receptacles (Refer To Electrical Section)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Appeared Functional",
                  "c": false
                },
                {
                  "title": "Loose or Worn",
                  "c": false
                },
                {
                  "title": "Missing",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Missing Cover Plates",
                  "c": false
                },
                {
                  "title": "Ungrounded 3-Prong",
                  "c": false
                },
                {
                  "title": "Inoperable GFCI",
                  "c": false
                },
                {
                  "title": "Missing GFCI Protection",
                  "c": false
                },
                {
                  "title": "Reversed Polarity",
                  "c": false
                },
                {
                  "title": "OG or RP Within 6 Feet",
                  "c": false
                },
                {
                  "title": "Burned",
                  "c": false
                },
                {
                  "title": "Exposed Wires",
                  "c": false
                },
                {
                  "title": "Hazardous or Unsafe",
                  "c": false
                },
                {
                  "title": "Recommend Professional Evaluation",
                  "c": false
                }
              ]
            },
            {
              "title": "Bathroom Images",
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
              "title": "Walls or Ceilings",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "GWB",
                  "c": false
                },
                {
                  "title": "Lath & Plaster",
                  "c": false
                },
                {
                  "title": "Acoustic Tile",
                  "c": false
                },
                {
                  "title": "Paneling",
                  "c": false
                },
                {
                  "title": "Open Beam",
                  "c": false
                }
              ]
            },
            {
              "title": "Walls or Ceilings Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Stains",
                  "c": false
                },
                {
                  "title": "Moisture or Mildew",
                  "c": false
                },
                {
                  "title": "Water Damage",
                  "c": false
                },
                {
                  "title": "Settling",
                  "c": false
                },
                {
                  "title": "Truss Uplift",
                  "c": false
                },
                {
                  "title": "Nail Pops",
                  "c": false
                },
                {
                  "title": "Holes",
                  "c": false
                },
                {
                  "title": "Cracks",
                  "c": false
                },
                {
                  "title": "Inadequate Repairs or Texture",
                  "c": false
                },
                {
                  "title": "Sooting",
                  "c": false
                },
                {
                  "title": "PACM",
                  "c": false
                },
                {
                  "title": "Hazardous or Unsafe",
                  "c": false
                },
                {
                  "title": "Recommend Professional Evaluation",
                  "c": false
                }
              ]
            },
            {
              "title": "Floor Coverings",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Hard Surfaces (Tile or Stone)",
                  "c": false
                },
                {
                  "title": "Hardwood or Laminate",
                  "c": false
                },
                {
                  "title": "Vinyl",
                  "c": false
                },
                {
                  "title": "Carpet",
                  "c": false
                }
              ]
            },
            {
              "title": "Floor Coverings Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Excessive Wear",
                  "c": false
                },
                {
                  "title": "Squeaks",
                  "c": false
                },
                {
                  "title": "Stains",
                  "c": false
                },
                {
                  "title": "Damage",
                  "c": false
                },
                {
                  "title": "Sloping",
                  "c": false
                },
                {
                  "title": "Uneven Surfaces",
                  "c": false
                },
                {
                  "title": "Holes",
                  "c": false
                },
                {
                  "title": "Wrinkled Carpet",
                  "c": false
                },
                {
                  "title": "Trip Hazard(s)",
                  "c": false
                },
                {
                  "title": "Repair(s)",
                  "c": false
                }
              ]
            },
            {
              "title": "Interior Doors",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Passage",
                  "c": false
                },
                {
                  "title": "Pocket",
                  "c": false
                },
                {
                  "title": "Double",
                  "c": false
                },
                {
                  "title": "Bi-Fold",
                  "c": false
                },
                {
                  "title": "Bi-Pass",
                  "c": false
                },
                {
                  "title": "Accordion",
                  "c": false
                }
              ]
            },
            {
              "title": "Interior Doors Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Inaccessible",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Missing or Removed",
                  "c": false
                },
                {
                  "title": "Missing Hardware",
                  "c": false
                },
                {
                  "title": "Settled or Rubbing",
                  "c": false
                },
                {
                  "title": "Improperly Hung or Sagging",
                  "c": false
                },
                {
                  "title": "Holes",
                  "c": false
                },
                {
                  "title": "Stains",
                  "c": false
                },
                {
                  "title": "Cracked or Split Jambs",
                  "c": false
                },
                {
                  "title": "Damage",
                  "c": false
                },
                {
                  "title": "Inadequate Repairs",
                  "c": false
                },
                {
                  "title": "Recommend Servicing or Adjusting",
                  "c": false
                }
              ]
            },
            {
              "title": "Window Type(s)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Sliders",
                  "c": false
                },
                {
                  "title": "Fixed",
                  "c": false
                },
                {
                  "title": "Single Hung",
                  "c": false
                },
                {
                  "title": "Double Hung",
                  "c": false
                },
                {
                  "title": "Awning",
                  "c": false
                }
              ]
            },
            {
              "title": "Window(s) Condition",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Satisfactory",
                  "c": false
                },
                {
                  "title": "Marginal",
                  "c": false
                },
                {
                  "title": "Poor",
                  "c": false
                },
                {
                  "title": "Difficult To Operate",
                  "c": false
                },
                {
                  "title": "Improve Security",
                  "c": false
                },
                {
                  "title": "Missing Hardware",
                  "c": false
                },
                {
                  "title": "Broken Panes",
                  "c": false
                },
                {
                  "title": "Failed Thermal Seals",
                  "c": false
                },
                {
                  "title": "Verify Bedroom Egress",
                  "c": false
                },
                {
                  "title": "Stained",
                  "c": false
                },
                {
                  "title": "Weathered Sills",
                  "c": false
                },
                {
                  "title": "Mold or Mildew",
                  "c": false
                },
                {
                  "title": "Damage",
                  "c": false
                },
                {
                  "title": "Deterioration",
                  "c": false
                }
              ]
            },
            {
              "title": "Safety Concern",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "Where Bedrooms lack a door directly to the outside, a window should serve as an emergency egress.  Recommend regular evaluation and service (lubrication, adjustment) of bedroom windows to verify smooth operation and to ensure adequate emergency egress."
            },
            {
              "title": "Lights or Switches or Receptacles (Refer To Electrical Section) or DUPLICATE?!?!",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Appeared Functional",
                  "c": false
                },
                {
                  "title": "Loose or Worn",
                  "c": false
                },
                {
                  "title": "Missing",
                  "c": false
                },
                {
                  "title": "Inoperable",
                  "c": false
                },
                {
                  "title": "Missing Cover Plates",
                  "c": false
                },
                {
                  "title": "Ungrounded 3-Prong",
                  "c": false
                },
                {
                  "title": "Inoperable GFCI",
                  "c": false
                },
                {
                  "title": "Missing GFCI Protection",
                  "c": false
                },
                {
                  "title": "Reversed Polarity",
                  "c": false
                },
                {
                  "title": "OG or RP Within 6 Feet",
                  "c": false
                },
                {
                  "title": "Burned",
                  "c": false
                },
                {
                  "title": "Exposed Wires",
                  "c": false
                },
                {
                  "title": "Hazardous or Unsafe",
                  "c": false
                },
                {
                  "title": "Recommend Professional Evaluation",
                  "c": false
                }
              ]
            },
            {
              "title": "General Images",
              "type": "image",
              "content": []
            }
          ],
          "showvalue": false
        }
      ]
    },
    {
      "title": "Life or Safety",
      "color": "#4DAF4E",
      "pages": [
        {
          "title": "Potential Safety Concerns",
          "items": [
            {
              "title": "Conditions",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "This list of potential hazards is not complete, and provides only a general notification of some of the possible life safety or health concerns associated with building materials, systems, components, and the forces of nature that may impact them. Those particular safety concerns, which fall within the scope of a specific category, may be noted here, or in their applicable section(s). In addition, the inspection report may exclude those systems or components that a client specifically requests not to be included in the scope of the inspection. Comments and information in this section are provided in an effort to help educate the client regarding possible safety risks, which may need further evaluation, and are NOT to take the place of expert or professional advice."
            },
            {
              "title": "Limitations",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "presettext",
              "showcontent": true,
              "content": "The Home Inspection Standards of Practice of the Washington State Department of Licensing state that the inspector is NOT required to report the presence of potentially hazardous plants or animals including, but not limited to, wood destroying insects or diseases harmful to humans; the presence of any environmental hazards including, but not limited to mold, toxins, carcinogens, noise, contaminants, asbestos, lead, water, soil, air quality, or other environmental issues, or the effectiveness of any system installed or methods utilized to control or remove suspected hazardous substances. Unless specifically stated in the standards of practice, or in writing in the pre-inspection agreement, no safety hazards are included in the investigation."
            },
            {
              "title": "Tripping or Falling Hazard(s)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "Unsafe or Uneven Walking Surfaces",
                  "c": false
                },
                {
                  "title": "Re-Evaluate",
                  "c": false
                },
                {
                  "title": "Interior",
                  "c": false
                },
                {
                  "title": "Exterior",
                  "c": false
                },
                {
                  "title": "Steep Slope or Drop-Off",
                  "c": false
                },
                {
                  "title": "Retaining Wall",
                  "c": false
                },
                {
                  "title": "Driveway or Walkway(s)",
                  "c": false
                },
                {
                  "title": "Landing",
                  "c": false
                },
                {
                  "title": "Balcony",
                  "c": false
                },
                {
                  "title": "Patio",
                  "c": false
                },
                {
                  "title": "Deck",
                  "c": false
                },
                {
                  "title": "Steps or Stairs",
                  "c": false
                },
                {
                  "title": "Missing Guard or Handrail(s)",
                  "c": false
                },
                {
                  "title": "Low Guard or Handrail(s)",
                  "c": false
                },
                {
                  "title": "Root Heaving",
                  "c": false
                },
                {
                  "title": "Erosion",
                  "c": false
                },
                {
                  "title": "Cracks or Gaps or Missing Dividers",
                  "c": false
                }
              ]
            },
            {
              "title": "Fire Hazards",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Not Applicable",
                  "c": false
                },
                {
                  "title": "None",
                  "c": false
                },
                {
                  "title": "Missing or Inadequate Firewall",
                  "c": false
                },
                {
                  "title": "Missing or Inadequate Fire-Door",
                  "c": false
                },
                {
                  "title": "Excessive Storage",
                  "c": false
                },
                {
                  "title": "Excessive Heat",
                  "c": false
                },
                {
                  "title": "Cellulose Debris",
                  "c": false
                },
                {
                  "title": "Roof Tear-Off Debris",
                  "c": false
                },
                {
                  "title": "Entrapment or Locks",
                  "c": false
                },
                {
                  "title": "Improve Bedroom Egress",
                  "c": false
                },
                {
                  "title": "Verify Adequate CO & Fire Alarms",
                  "c": false
                }
              ]
            },
            {
              "title": "Pest Related",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "None",
                  "c": false
                },
                {
                  "title": "Ponding or Breeding Water",
                  "c": false
                },
                {
                  "title": "Potential Points of Pest Entry",
                  "c": false
                },
                {
                  "title": "Rat Droppings Toxins",
                  "c": false
                },
                {
                  "title": "Bee or Wasp Nests",
                  "c": false
                },
                {
                  "title": "Racoon",
                  "c": false
                }
              ]
            },
            {
              "title": "Poisen Baits",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Insect",
                  "c": false
                },
                {
                  "title": "Rodent",
                  "c": false
                }
              ]
            },
            {
              "title": "Building Materials (Refer To Specific Sections)",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "checkbox",
              "value": [],
              "content": [
                {
                  "title": "Missing Window Safety Glass",
                  "c": false
                },
                {
                  "title": "Electrical Shock Hazard(s)",
                  "c": false
                },
                {
                  "title": "Bio-Growth or Mold or Mildew",
                  "c": false
                },
                {
                  "title": "PACM",
                  "c": false
                },
                {
                  "title": "Friable ACM",
                  "c": false
                },
                {
                  "title": "Lead",
                  "c": false
                },
                {
                  "title": "Airborne or VOCs",
                  "c": false
                },
                {
                  "title": "Potential Hidden Hazard(s)",
                  "c": false
                }
              ]
            },
            {
              "title": "Comments",
              "required": false, "answered":false,
              "showvalue": false,
              "type": "textbox",
              "value": {}
            },
            {
              "title": "Potential Safety Concern Images",
              "type": "image",
              "content": []
            }
          ],
          "showvalue": false
        }
      ]
    },
    {
      "title": "Photo Appendix",
      "color": "#3C4DA1",
      "pages": [
        {
          "title": "Additional Photos for Further Clarification",
          "items": [
            {
              "title": "Photo Appendix Images",
              "type": "photoAppendix",
              "content": ["./img/Studphen.png", "./img/rod.png", "./img/Studphen.png", "./img/Studphen.png"
                         , "./img/Studphen.png", "./img/rod.png", "./img/Studphen.png", "./img/rod.png"
                         ]
            }
          ]
        }
      ],
      "showvalue": false
    }
  ]
}
