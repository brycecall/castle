        var reportOne = {
                'Field Notes': {
                    'Client Info': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                        'Clientinfo': {
                            'required': true,
                            'type': 'clientinfo',
                            'value': {
                                'firstName': '',
                                'lastName': '',
                                'address': '',
                                'addressTwo': '',
                                'city': '',
                                'state': '',
                                'postalCode': ''
                            }
                        },
                        'Report ID': {
                            'required': true,
                            'type': 'text',
                            'value': ''
                        },
                        'Report Date': {
                            'required': true,
                            'type': 'date',
                            'value': ''
                        },
                        'Client Info Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }

                    },
                    'Property Specifications': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                        'Conditions': {
                            'type': 'presettext',
                            'showcontent': true,
                            'content': 'This Report concerns the visual [INSERT OPTION] inspection of an approximately [CALCULATE & INSERT AGE] old, [INSERT SQFT], [INSERT TYPE OF HOME],[INSERT PROPERTY USE],[INSERT NUMBER OF STORIES],[INSERT HOUSE FRAME],[INSERT PROPERTY TYPE],[INSERT CONFIGURATIONS], built in [INSERT YEAR].  The main entrance, driveway, or street access appeared to be facing predominantely toward the [INSERT PROPERTY ORIENTATION].  The street surface was [INSERT DRIVEWAY TYPE], and vehicle parking was available [INSERT VEHICLE PARKING]. The Utilities servicing the Property identified were [INSERT UTILITES]. [UTILITES OFF] were off at the time of inspection. The locations of the main utility controls, shut-off valves, and/or disconnects are noted in the applicable mechanical sections.'
                        },
                        'Limitations': {
                            'type': 'presettext',
                            'showcontent': true,
                            'content': 'The [INSERT PROPERTY TYPE] was [INSERT PROPERTY OCCUPANCY] at the time of the inspection.  The inspection began at [*INSPECTION START TIME][AM/PM] and ended at roughly [*INSPECTION END TIME][AM/PM].  The weather at the time of the inspeciton was [GRAB WEATHER FORECAST FROM WEATHER.COM: Cloudy, Snowy, Icy, Windy] with [no precipitation, cloudy, sunny, rain, no rain, etc.].  Those in attendance at the time of the inspection were [INSERT PERSONS PRESENT].  Detached outbuildings, seasonally visible defects, poorly accessible components, areas that may have been hidden and/ or areas containing significant furnishings or storage are not included in the scope of this inspection.'
                        },
                        'Inspection Type': {
                            'required': true,
                            'type': 'select',
                            'content': [
                        'Full',
                        'Partial',
                        'Abbreviated',
                        'Ancillary',
                        'Limited',
                        '203(k)',
                        'Rehabilitation'
                                ],
                            'value': ''
                        },
                        'Year Built': {
                            'required': true,
                            'type': 'number',
                            'value': ''
                        },
                        'Squarefeet of the Property': {
                            'required': true,
                            'type': 'number',
                            'value': 0
                        },
                        'Type of Home': {
                            'required': true,
                            'type': 'radio',
                            'content': [
                             'Single Family',
                             'Single Use',
                             'Multiple Use',
                             'Duplex',
                             'Triplex',
                             'Multi Family',
                             'Detatched'
                         ],
                            'value': ''
                        },

                        'Property Use': {
                            'required': true,
                            'type': 'radio',
                            'content': [
                             'Residential',
                             'Apartment',
                             'Retail Store',
                             'Business',
                             'Industrial',
                             'Commercial'
                         ],
                            'value': ''
                        },
                        'Number of Stories': {
                            'required': true,
                            'type': 'radio',
                            'content': [
                             'Rambler',
                             'One Level',
                             'Split-Entry',
                             'Split-Level',
                             'One Story',
                             '1 1/2 Story',
                             'Two-Story',
                             'Three-Story',
                             'Mid-Rise',
                             'Multi-Level'
                         ],
                            'value': ''
                        },
                        'House Frame': {
                            'required': true,
                            'type': 'radio',
                            'content': [
                             'Wood-Framed',
                             'Steel-Framed',
                             'Concrete',
                             'CMU/Block',
                             'Masonry',
                             'Tilt-Up',
                             'Wood-Frame on Steel Carriage',
                             'ICF'
                         ],
                            'value': ''
                        },
                        'Property Type': {
                            'required': true,
                            'type': 'radio',
                            'content': [
                             'Home',
                             'Twin Home',
                             'Town Home',
                             'Mobile Home',
                             'Log Home',
                             'Manufactured Home',
                             'Prefabbed Structure',
                             'Condominium',
                             'Building',
                             'Garage',
                             'Low-Rise',
                             'Mid-Rise',
                             'High-Rise'
                         ],
                            'value': ''
                        },
                        'Configurations': {
                            'required': true,
                            'type': 'checkbox',
                            'value': {
                                'w/ Lower Parking Garage': {'c': false,'i': []},
                                'w/ Basement & Garage': {'c': false,'i': []},
                                'w/ Garage': {'c': false,'i': []},
                                'w/ Garage & Crawlspace': {'c': false,'i': []},
                                'w/ Full Basement': {'c': false,'i': []},
                                'w/ Daylight Basement': {'c': false,'i': []},
                                'w/ Basement & Crawlspace(s)': {'c': false,'i': []},
                                'w/ Crawlspace': {'c': false,'i': []},
                                'w/ Slab-On-Grade': {'c': false,'i': []},
                                'Over Adjoining Unit(s)': {'c': false,'i': []},
                                'Over Adjoining Basement Unit': {'c': false,'i': []}
                            }
                        },
                        'Property Orientation': {
                            'required': false, 'showvalue' : false,
                            'type': 'select',
                            'content': [
                             'North',
                             'East',
                             'West',
                             'South',
                             'North-East',
                             'North-West',
                             'South-East',
                             'South-West'
                         ],
                            'value': ''
                        },
                        'Vehicle Parking': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'At Curbside': {'c': false,'i': []},
                                'In a Rear Alley': {'c': false,'i': []},
                                'In the Driveway': {'c': false,'i': []},
                                'In an Attached Garage(s)': {'c': false,'i': []},
                                'In a Detached Garage(s)': {'c': false,'i': []},
                                'In an Attached Carport': {'c': false,'i': []},
                                'In a Detached Carport': {'c': false,'i': []},
                                'In a Covered Parking Space': {'c': false,'i': []},
                                'In an Open Parking Space': {'c': false,'i': []},
                                'In a Secured Parking Garage': {'c': false,'i': []},
                                'In an Open Parking Garage': {'c': false,'i': []},
                                'In an Open, Striped Parking Lot': {'c': false,'i': []}
                            }
                        },
                        'Utilities': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Electricity': {'c': false,'i': []},
                                'Water': {'c': false,'i': []},
                                'Gas': {'c': false,'i': []},
                                'Oil': {'c': false,'i': []},
                                'Propane': {'c': false,'i': []}
                            }
                        },
                        'What Utilities were OFF': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Electricity': {'c': false,'i': []},
                                'Water': {'c': false,'i': []},
                                'Gas': {'c': false,'i': []},
                                'Oil': {'c': false,'i': []},
                                'Propane': {'c': false,'i': []}
                            }
                        },
                        'Property Occupancy': {
                            'required': true,
                            'type': 'select',
                            'content': [
                        'Occupied',
                        'Mostly Occupied',
                        'Mostly Vacant',
                        'Vacant'
                                ],
                            'value': ''
                        },
                        'Persons Present': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Inspector': {'c': false,'i': []},
                                'Buyer': {'c': false,'i': []},
                                'Resident': {'c': false,'i': []},
                                'Builder/Builders Rep': {'c': false,'i': []},
                                'Owner/Seller': {'c': false,'i': []},
                                'Agent': {'c': false,'i': []},
                                'Friends/Other': {'c': false,'i': []},
                            }
                        },
                        'Person(s) Providing Property Access': {
                            'required': false, 'showvalue' : false,
                            'type': 'radio',
                            'content': [
                                'Inspector',
                                'Buyer',
                                'Resident',
                                'Builder/Builders Rep',
                                'Owner/Seller',
                                'Agent',
                                'Friends/Other'
                            ],
                            'value': ''
                        },
                 //       'Direction': {
                 //           'required': false, 'showvalue' : false,
                 //           'type': 'select',
                 //           'content': [
                 //            'North',
                 //            'East',
                 //            'West',
                 //            'South',
                 //            'North-East',
                 //            'North-West',
                 //            'South-East',
                 //            'South-West'
                 //        ],
                 //           'value': ''

                 //       },
                        'Property Specifications Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        },

                    }
                },
                'Site': {
                    'Evaluation': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                        'Conditions': {
                            'required': false, 'showvalue' : false,
                            'type': 'presettext',
                            'showcontent': true,
                            'content': 'The inspection of the site includes the building perimeter, land grade, and water drainage directly adjacent to the foundation; trees and vegetation that adversely affect the structure; walks, grade steps, driveways, patios, and retaining walls contiguous with the structure.\n The report describes the material used for driveways, walkways, patios and other flatwork around the home, the serviceability of the driveways, steps, walkways, patios, flatwork and retaining walls contiguous with the structure, proper grading and drainage slope, vegetation in close proximity to the home, and a description of any deficiencies of these systems or components.'
                        },
                        'Limitations': {
                            'required': false, 'showvalue' : false,
                            'type': 'presettext',
                            'showcontent': true,
                            'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-170 of the Washington State Dept. of Licensing, the inspector is not required to: (1)inspect fences, privacy walls or retaining walls that are not contiguous with the structure, (2)report the condition of soil, trees, shrubs or vegetation unless they adversely affect the structure, (3)evaluate hydrological or geological conditions, (4)determine the adequacy of bulkheads, sea-walls, break- walls, and docks.'
                        },
                        'Driveway': {
                            'required': false, 'showvalue' : false,
                            'type': 'radio',
                            'content': [
                             'n/a',
                             'Unfinished',
                             'Concrete',
                             'Asphalt',
                             'Pavers/stone/brick',
                             'Dirt/gravel'
                             ],
                            'value': ''
                        },
                        'Driveway Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Marginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Pitched towards home': {'c': false,'i': []},
                                'Typical cracks': {'c': false,'i': []},
                                'Large cracks': {'c': false,'i': []},
                                'Root heaving': {'c': false,'i': []},
                                'Steep': {'c': false,'i': []},
                                'Damaged': {'c': false,'i': []},
                                'Uneven': {'c': false,'i': []},
                                'Trip/Falling Hazard': {'c': false,'i': []}
                            }
                        },
                        'Patio': {
                            'required': false, 'showvalue' : false,
                            'type': 'radio',
                            'content': [
                             'n/a',
                             'Concrete',
                             'Paver/stone/brick',
                             'Wood/Composite',
                             'Covered'
                         ],
                            'value': ''
                        },
                        'Patio Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Marginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Typical cracks': {'c': false,'i': []},
                                'Large cracks': {'c': false,'i': []},
                                'Gaps': {'c': false,'i': []},
                                'Holes': {'c': false,'i': []},
                                'Mildew': {'c': false,'i': []},
                                'Damage': {'c': false,'i': []},
                                'Settled': {'c': false,'i': []},
                                'Uneven Surface': {'c': false,'i': []},
                                'Trip/Falling Hazard': {'c': false,'i': []}
                            }
                        },
                        'Walkways and Steps': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'n/a': {'c': false,'i': []},
                                'Satisfactory': {'c': false,'i': []},
                                'Uneven': {'c': false,'i': []},
                                'Large cracks': {'c': false,'i': []},
                                'Root heaving': {'c': false,'i': []},
                                'Moss build-up': {'c': false,'i': []},
                                'Missing spacers': {'c': false,'i': []},
                                'Settled': {'c': false,'i': []},
                                'Trip hazard': {'c': false,'i': []},
                                'Missing handrails': {'c': false,'i': []},
                                'Missing safety glass': {'c': false,'i': []}
                            }
                        },
                        'Retaining Wall': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'None': {'c': false,'i': []},
                                'Verify': {'c': false,'i': []},
                                'Treated Wood': {'c': false,'i': []},
                                'Railroad Ties': {'c': false,'i': []},
                                'Concrete': {'c': false,'i': []},
                                'Concrete Blocks': {'c': false,'i': []},
                                'CMU/Blocks': {'c': false,'i': []},
                                'Gabions': {'c': false,'i': []},
                                'Rockery': {'c': false,'i': []},
                                'Masonry': {'c': false,'i': []},
                                'Cemented Stone': {'c': false,'i': []}
                            }
                        },
                        'Retaining Wall Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Marginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Damaged': {'c': false,'i': []},
                                'Leaning': {'c': false,'i': []},
                                'Leaking/Drainage Concern': {'c': false,'i': []},
                                'Trip/Falling Hazard': {'c': false,'i': []}
                            }
                        },
                        'Safety Fencing Location': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'n/a': {'c': false,'i': []},
                                'Water Feature': {'c': false,'i': []},
                                'Drop-off/Retaining Wall': {'c': false,'i': []},
                                'Steep Slope': {'c': false,'i': []},
                                'TYPE (Needs Greater Definition)': {'c': false,'i': []}
                            }
                        },
                        'Safety Fencing Type': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'n/a': {'c': false,'i': []},
                                'Concrete': {'c': false,'i': []},
                                'Wood': {'c': false,'i': []},
                                'Privacy': {'c': false,'i': []},
                                'Chainlink': {'c': false,'i': []},
                                'Masonry': {'c': false,'i': []},
                                'Rail': {'c': false,'i': []},
                                'Wire': {'c': false,'i': []},
                                'Plastic/Vinyl': {'c': false,'i': []}
                            }
                        },
                        'Safety Fencing Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Maginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Missing': {'c': false,'i': []},
                                'Trip/Falling Hazard': {'c': false,'i': []},
                                'Leaning': {'c': false,'i': []},
                                'Damaged': {'c': false,'i': []},
                                'Verify Adequate Height': {'c': false,'i': []},
                                'Hazardous': {'c': false,'i': []},
                                'Re-Evaluate': {'c': false,'i': []}
                            }
                        },
                        'Landscaping': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Not Inspected': {'c': false,'i': []},
                                'Poor Earth-to-Wood Separation': {'c': false,'i': []},
                                'Yard Steps': {'c': false,'i': []},
                                'Drainage': {'c': false,'i': []},
                                'Negative Surrounding Grade': {'c': false,'i': []},
                                'Overgrown Foliage': {'c': false,'i': []},
                                'Re-Evaluate': {'c': false,'i': []}
                            }
                        },
                        'Safety Concern': {
                            'required': false, 'showvalue' : false,
                            'type': 'presettext',
                            'showcontent': true,
                            'content': 'Uneven edges at settling cracks in concrete drives or walkways may pose potential trip hazards, and should be improved to provide a safe walking surface. Safe and secure handrails and guard rails are recommended at all stairways, and where landing heights pose a potential falling hazard.'
                        },
                        'Evaluation Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
                    },
                    'Attached Steps/Platforms': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                        'Porch/Stoop': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'n/a': {'c': false,'i': []},
                                'Concrete': {'c': false,'i': []},
                                'Pavers/Stone/Brick': {'c': false,'i': []},
                                'Wood/Composite': {'c': false,'i': []},
                                'Covered': {'c': false,'i': []}
                            }
                        },
                        'Porch/Stoop Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Marginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Verify Attachment': {'c': false,'i': []},
                                'Loose/Missing Railings': {'c': false,'i': []},
                                'Trip Hazard(s)': {'c': false,'i': []},
                                'Typical Cracks': {'c': false,'i': []},
                                'Large Cracks': {'c': false,'i': []},
                                'Gaps/Holes': {'c': false,'i': []},
                                'Weathered Finish': {'c': false,'i': []},
                                'Damaged': {'c': false,'i': []},
                                'Settled': {'c': false,'i': []},
                                'Earth Contact': {'c': false,'i': []},
                                'Mildew': {'c': false,'i': []},
                                'Fungal Rot/Probed': {'c': false,'i': []},
                                'Re-Evaluate': {'c': false,'i': []}
                            }
                        },
                        'Yard Steps': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'n/a': {'c': false,'i': []},
                                'Uneven': {'c': false,'i': []},
                                'Large Cracks': {'c': false,'i': []},
                                'Root Heaving': {'c': false,'i': []},
                                'Moss Build-Up': {'c': false,'i': []},
                                'Missing Spacers': {'c': false,'i': []},
                                'Settled': {'c': false,'i': []},
                                'Trip Hazard': {'c': false,'i': []},
                                'Missing Handrails': {'c': false,'i': []},
                                'Missing Safety Glass': {'c': false,'i': []}
                            }
                        },
                        'Deck/Balcony': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'n/a': {'c': false,'i': []},
                                'Raised': {'c': false,'i': []},
                                'Roof-top': {'c': false,'i': []},
                                'Covered': {'c': false,'i': []},
                                'Wood/Composite': {'c': false,'i': []},
                                'PVC': {'c': false,'i': []}
                            }
                        },
                        'Deck/Balcony Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Marginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Loose/Missing Railings': {'c': false,'i': []},
                                'Weathered Finish': {'c': false,'i': []},
                                'Damaged': {'c': false,'i': []},
                                'Settled': {'c': false,'i': []},
                                'Earth Contact': {'c': false,'i': []},
                                'Mildew': {'c': false,'i': []},
                                'Fungal Rot/Probed': {'c': false,'i': []},
                                'Verify Attachment': {'c': false,'i': []},
                                'Re-Evaluate': {'c': false,'i': []}
                            }
                        },
                        'Moisture Conditions': {
                            'required': false, 'showvalue' : false,
                            'type': 'presettext',
                            'showcontent': true,
                            'content': 'Undesirable exterior conditions conducive to pest and/or rot concerns may exist, develop, and/or worsen over time. Recommend identification and elimination of all exposed or unprotected wood in outdoor conditions or inadequate earth-to-wood separation (less than 6 to 8 inches), negative grade (ground surfaces sloping toward building), or overgrown foliage (vegetation touching wall surfaces) and maintain improved conditions to minimize risk of pest, moisture or other potential exterior concerns.'
                        },
                        'Attached Steps/Platforms Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        },
                    }
                },
                'Exterior': {
                    'Siding / Wall Cladding': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                        'Conditions': {
                            'required': false, 'showvalue' : false,
                            'type': 'presettext',
                            'showcontent': true,
                            'content': 'An inspection of the exterior includes the visible wall coverings, trim, protective coatings and sealants, windows and doors, attached porches, decks, steps, balconies, handrails, guard-rails, carports, eaves, soffit(s), fascia(s) and visible exterior portions of chimneys. The findings show whether or not the exterior components were probed where deterioration was suspected or where clear indications of possible deterioration existed, and the manner in which the exterior components were inspected. (Probing is not required or performed when probing would damage any finished surface, or where no deterioration is suspected) The summary section describes some deficiencies of these systems or components. All readily accessible exterior components, visible at the perimeter, are inspected from ground level.'
                        },
                        'Limitations': {
                            'required': false, 'showvalue' : false,
                            'type': 'presettext',
                            'showcontent': true,
                            'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-080 of the Washington State Dept. of Licensing, the inspector is not required to inspect buildings, decks, patios, fences, retaining walls, and other structures detached from the dwelling, safety type glass or the integrity of thermal window seals, flues or verify the presence of flue liners beyond what can be safely and readily seen from the roof or the firebox of a stove or fireplace, test or evaluate the operation of security locks, devices or systems, enter areas beneath decks with less than five feet of clearance from the underside of joists to grade, evaluate the function or condition of shutters, awnings, storm doors, storm windows, screens, and similar accessories.'
                        },
                        'Type(s) of Wall Cladding': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Brick': {'c': false,'i': []},
                                'Stone': {'c': false,'i': []},
                                'Stucco': {'c': false,'i': []},
                                'Metal': {'c': false,'i': []},
                                'Vinyl': {'c': false,'i': []},
                                'Cement Board': {'c': false,'i': []},
                                'Wood': {'c': false,'i': []},
                                'Fiberboard': {'c': false,'i': []},
                                'Hardi-Board/Plank': {'c': false,'i': []},
                                'Panels/Sheets': {'c': false,'i': []},
                                'Shingles': {'c': false,'i': []},
                                'T-111': {'c': false,'i': []},
                                'Lapped': {'c': false,'i': []},
                                'T&G': {'c': false,'i': []},
                                'Vertical Channel': {'c': false,'i': []},
                                'EIFS': {'c': false,'i': []},
                                'Pre 1996 EIFS': {'c': false,'i': []},
                                'Recalled LP': {'c': false,'i': []},
                                'Friable PACM': {'c': false,'i': []}
                            }
                        },
                        'Wall Cladding Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Marginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Loose': {'c': false,'i': []},
                                'Gaps/Holes': {'c': false,'i': []},
                                'Buckled': {'c': false,'i': []},
                                'Tight Butt Joints': {'c': false,'i': []},
                                'Missing Joint Flashing': {'c': false,'i': []},
                                'Broken/Damaged': {'c': false,'i': []},
                                'Inadequate Coverage': {'c': false,'i': []},
                                'Peeling Paint': {'c': false,'i': []},
                                'Weathered': {'c': false,'i': []},
                                'Pest Issues': {'c': false,'i': []},
                                'Cracked/Bulging': {'c': false,'i': []},
                                'Mildew': {'c': false,'i': []},
                                'Deteriorated': {'c': false,'i': []},
                                'Fungal Rot/Probed': {'c': false,'i': []},
                                'Re-Evaluate': {'c': false,'i': []}
                            }
                        },
                        'Flashing at Fenestrations': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'n/a': {'c': false,'i': []},
                                'Missing': {'c': false,'i': []},
                                'Satisfactory': {'c': false,'i': []},
                                'Marginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Defective': {'c': false,'i': []},
                                'Loose': {'c': false,'i': []},
                                'Gaps/Holes': {'c': false,'i': []},
                                'Exposed Structure': {'c': false,'i': []},
                                'Recommend Re-Evaluate/Repair': {'c': false,'i': []}
                            }
                        },
                        'Trim/Soffit/Fascia': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Wood': {'c': false,'i': []},
                                'Fiberboard': {'c': false,'i': []},
                                'Masonry': {'c': false,'i': []},
                                'EIFS': {'c': false,'i': []},
                                'Metal': {'c': false,'i': []},
                                'Vinyl': {'c': false,'i': []},
                                'Enclosed Soffit': {'c': false,'i': []},
                                'Open Eaves': {'c': false,'i': []},
                                'Screened Ventilation': {'c': false,'i': []},
                                'Unflashed BRT/Out-Lookers': {'c': false,'i': []}
                            }
                        },
                        'Trim/Soffit/Fascia Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Marginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Loose': {'c': false,'i': []},
                                'Gaps/Holes': {'c': false,'i': []},
                                'Missing Pieces': {'c': false,'i': []},
                                'Exposed Wood': {'c': false,'i': []},
                                'Loose/Missing Flashing': {'c': false,'i': []},
                                'Poor Protection/Coverage': {'c': false,'i': []},
                                'Stains': {'c': false,'i': []},
                                'Peeling Paint': {'c': false,'i': []},
                                'Weathered/Worn': {'c': false,'i': []},
                                'Deterioration': {'c': false,'i': []},
                                'Fungal Rot': {'c': false,'i': []},
                                'Broken/Damaged': {'c': false,'i': []},
                                'Pest Issues': {'c': false,'i': []},
                                'Foliage Contact': {'c': false,'i': []},
                                'Potential Hidden Damage': {'c': false,'i': []},
                                'Recommend Re-Evaluation': {'c': false,'i': []}
                            }
                        },
                        //COMMENTS SECTION HERE.

                        'Siding / Wall Cladding Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
                    },
                    'Wall Fenestrations': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                        'Window Frame/Trim': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Wood': {'c': false,'i': []},
                                'Aluminum/Metal': {'c': false,'i': []},
                                'Clad': {'c': false,'i': []},
                                'Vinyl': {'c': false,'i': []},
                                'Fiberglass': {'c': false,'i': []}
                            }
                        },
                        'Window Frame/Trim Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Marginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Gaps': {'c': false,'i': []},
                                'Missing Pieces': {'c': false,'i': []},
                                'Exposed Wood': {'c': false,'i': []},
                                'Missing Flashing': {'c': false,'i': []},
                                'Weathered/Worn Finish': {'c': false,'i': []},
                                'Peeling Paint/Inadequate Coverage': {'c': false,'i': []},
                                'Missing Caulking': {'c': false,'i': []},
                                'Broken Glass': {'c': false,'i': []},
                                'Failed Thermal Seal': {'c': false,'i': []},
                                'Damaged': {'c': false,'i': []},
                                'Deteriorated': {'c': false,'i': []},
                                'Fungal Rot': {'c': false,'i': []}
                            }
                        },
                        'Exterior Doors': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Metal': {'c': false,'i': []},
                                'Wood': {'c': false,'i': []},
                                'Fiberglass': {'c': false,'i': []}
                            }
                        },
                        'Exterior Doors Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Marginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Missing or Inadequate Threshold': {'c': false,'i': []},
                                'Missing or Inadequate Weather-Strip': {'c': false,'i': []},
                                'Missing or Inadequate Hardware': {'c': false,'i': []},
                                'Repairs Needed': {'c': false,'i': []}
                            }
                        },
                        'Caulking': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Weathered': {'c': false,'i': []},
                                'Stretched': {'c': false,'i': []},
                                'Cracked': {'c': false,'i': []},
                                'Gaps': {'c': false,'i': []},
                                'Missing': {'c': false,'i': []},
                                'Recommend sealing all perforations through the exterior wall surface': {'c': false,'i': []}
                            }
                        },
                        'Wall Fenestrations Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
                    },
                    'Attached Garage/Carport': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                        'Conditions': {
                            'required': false, 'showvalue' : false,
                            'type': 'presettext',
                            'showcontent': true,
                            'content': 'The inspection of attached garages and carports includes their framing, siding, roof, doors, windows, and installed electrical / mechanical systems pertaining to the operation of the home, and describes any deficiencies of these systems or components. The report shows the condition and function of the overhead garage doors and associated hardware, the tested function of the garage door openers, their auto-reverse systems and secondary entrapment devices (photoelectric and edge sensors) when present, the condition and installation of any pedestrian door(s), and/or fire separation between the house and garage when applicable, and the presence of any fire hazard or ignition source (gas and electric water heaters, electrical receptacles, electronic air cleaners, motors of installed appliances, etc.) that is within eighteen inches of the garage floor.'
                        },
                        'Limitations': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'showcontent': true,
                            'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-180 of the Washington State Dept. of Licensing, the inspector is not required to: (1)determine whether or not a solid core pedestrian door that is not labeled is fire rated, (2)verify the functionality of garage door opener remote controls, (3)move vehicles or personal property, (4)operate any equipment unless otherwise addressed in the standards of practice.',
                        },
                        'Vehicle Parking': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'n/a': {'c': false,'i': []},
                                'Curbside': {'c': false,'i': []},
                                'Space': {'c': false,'i': []},
                                'Public Garage': {'c': false,'i': []},
                                'Carport': {'c': false,'i': []},
                                'Garage': {'c': false,'i': []},
                                'Attached': {'c': false,'i': []},
                                'Detached': {'c': false,'i': []}
                            }
                        },
                        'Floor': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'n/a': {'c': false,'i': []},
                                'Concrete Slab': {'c': false,'i': []},
                                'Sealed': {'c': false,'i': []},
                                'Asphalt': {'c': false,'i': []},
                                'Pavers/Cobblestone': {'c': false,'i': []},
                                'Gravel': {'c': false,'i': []},
                                'Dirt': {'c': false,'i': []}
                            }
                        },
                        'Floor Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Marginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Sloping': {'c': false,'i': []},
                                'Typical Cracks': {'c': false,'i': []},
                                'Large Cracks': {'c': false,'i': []},
                                'Trip Hazards': {'c': false,'i': []},
                                'Efflorescence': {'c': false,'i': []},
                                'Not Visible': {'c': false,'i': []},
                                'Excessive Storage': {'c': false,'i': []},
                                'Re-Evaluate': {'c': false,'i': []}
                            }
                        },
                        'Firewall Location': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'n/a': {'c': false,'i': []},
                                'Above Living Space': {'c': false,'i': []},
                                'Below Living Space': {'c': false,'i': []},
                                'Adjoining Walls': {'c': false,'i': []},
                            }
                        },
                        'Firewall Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Penetrations': {'c': false,'i': []},
                                'Pet Door': {'c': false,'i': []},
                                'Satisfactory': {'c': false,'i': []},
                                'Marginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                            }
                        },
                        'Firedoor Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Door': {'c': false,'i': []},
                                'Threshod': {'c': false,'i': []},
                                'Hinges': {'c': false,'i': []},
                                'Seal': {'c': false,'i': []},
                                'Repairs Needed': {'c': false,'i': []}
                            }
                        },
                        'Exterior Service Door': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'n/a': {'c': false,'i': []},
                                'Blocked or Inoperable': {'c': false,'i': []},
                                'Wood': {'c': false,'i': []},
                                'Metal': {'c': false,'i': []},
                                'Fiberglass': {'c': false,'i': []}
                            }
                        },
                        'Exterior Service Door Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Marginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Damaged': {'c': false,'i': []},
                                'Needs Adjustment': {'c': false,'i': []},
                                'Re-Evaluate': {'c': false,'i': []}
                            }
                        },
                        'Car Door': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'n/a': {'c': false,'i': []},
                                'Overhead': {'c': false,'i': []},
                                'Sliding': {'c': false,'i': []},
                                'Roll-Up Panels': {'c': false,'i': []},
                                'Tilt-Up Slab': {'c': false,'i': []},
                                'Lites': {'c': false,'i': []},
                                'Wood': {'c': false,'i': []},
                                'Hardboard': {'c': false,'i': []},
                                'Metal': {'c': false,'i': []},
                                'Fiberglass': {'c': false,'i': []},
                                'Solid': {'c': false,'i': []},
                                'Hollow': {'c': false,'i': []},
                                'Insulated': {'c': false,'i': []}
                            }
                        },
                        'Car Door Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Marginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Inoperable': {'c': false,'i': []},
                                'Gaps': {'c': false,'i': []},
                                'Security Concerns': {'c': false,'i': []},
                                'Blocked/Inaccessible': {'c': false,'i': []},
                                'Locked Shut': {'c': false,'i': []},
                                'Stained': {'c': false,'i': []},
                                'De-Laminated': {'c': false,'i': []},
                                'Damaged': {'c': false,'i': []}
                            }
                        },
                        'Automatic Door Opener': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'n/a': {'c': false,'i': []},
                                'Inoperable': {'c': false,'i': []},
                                'Blocked': {'c': false,'i': []},
                                'No Access': {'c': false,'i': []},
                                'No Remote': {'c': false,'i': []}
                            }
                        },
                        'Safety Reverse': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'n/a': {'c': false,'i': []},
                                'Disconnected/Inoperable': {'c': false,'i': []},
                                'Door Stops': {'c': false,'i': []},
                                'Intermittent Function': {'c': false,'i': []}
                            }
                        },
                        'Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Marginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Damaged': {'c': false,'i': []},
                                'Needs Adjustment': {'c': false,'i': []},
                                'Re-Evaluate': {'c': false,'i': []}
                            }
                        },
                        //COMMENT SECTION HERE.
                        'Attached Garage/Carport Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
                    },
                },
                'Roofing': {
                    'Roof Covering(s)': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                        'Conditions': {
                            'required': false, 'showvalue' : false,
                            'type': 'presettext',
                            'showcontent': true,
                            'content': 'An inspection of the roof(s) includes traversing the roof surface to inspect the roof covering materials (unless in the opinion of the inspector, walking on the roof could damage roofing materials or be unsafe) gutters and downspout systems, visible flashing(s), roof vents, skylights, and any other roof penetrations, the portions of the chimney(s) and/or flue(s) visible from the exterior, describes the type of roof coverings used & their general condition, as well as any deficiencies of these systems or components, and reports on the presence of multiple layers of roofing, and the manner in which the roof is ventilated.'
                        },
                        'Limitations': {
                            'required': false, 'showvalue' : false,
                            'type': 'presettext',
                            'showcontent': true,
                            'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-090 of the Washington State Dept. of Licensing, the inspector is not required to: traverse unsafe or vulnerable roof surfaces, remove snow, ice, debris or other material(s) that obscure the roof surface or prevents access to the roof, inspect gutter and downspout systems concealed within the structure, inspect related underground drainage piping; and/or antennas, lightning arresters, or similar attachments, operate powered roof ventilators, or predict remaining life expectancy of roof coverings.'
                        },
                        'Roof Covering(s)': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Inspected/Walked on (Traversed) Roof': {'c': false,'i': []},
                                'Inspected/NOT Traversed': {'c': false,'i': []},
                                'NOT Inspected': {'c': false,'i': []},
                                'Vulnerable to Traversing Damage': {'c': false,'i': []},
                                'Unsafe Traversing Condition(s)': {'c': false,'i': []},
                                'Not Visible': {'c': false,'i': []}
                            }
                        },
                        'Viewed Roof From': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Ground w/ Binoculars': {'c': false,'i': []},
                                'Ladder': {'c': false,'i': []},
                                'Eaves': {'c': false,'i': []},
                                'Interior': {'c': false,'i': []},
                                'Other Building': {'c': false,'i': []}
                            }
                        },
                        'Style(s)': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Gable': {'c': false,'i': []},
                                'Hip': {'c': false,'i': []},
                                'Mansard': {'c': false,'i': []},
                                'Shed': {'c': false,'i': []},
                                'Flat': {'c': false,'i': []},
                                'Dutch Hip': {'c': false,'i': []},
                                'Combination': {'c': false,'i': []}
                            }
                        },
                        'Pitch': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Steep': {'c': false,'i': []},
                                'Medium': {'c': false,'i': []},
                                'Low': {'c': false,'i': []}
                            }
                        },
                        'Age of Roof Covering': {
                            'required': false, 'showvalue' : false,
                            'type': 'number',
                            'value': ''
                        },
                        '# of Layers of Roof Covering': {
                            'required': false, 'showvalue' : false,
                            'type': 'number',
                            'value': ''
                        },
                        'Roof Covering': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Asphalt/Comp': {'c': false,'i': []},
                                'Rolled': {'c': false,'i': []},
                                '3-Tab': {'c': false,'i': []},
                                'Multiple Thickness': {'c': false,'i': []},
                                'Presidential': {'c': false,'i': []},
                                'Corrugated Fiber Glass': {'c': false,'i': []},
                                'Modified Bitumen': {'c': false,'i': []},
                                'Torch-Down/Hot Tar': {'c': false,'i': []},
                                'Metal/Standing Seam': {'c': false,'i': []},
                                'Metal Shingle': {'c': false,'i': []},
                                'Wood Shingle': {'c': false,'i': []},
                                'Cedar Shake': {'c': false,'i': []},
                                'Clay Tile': {'c': false,'i': []},
                                'Concrete Tile': {'c': false,'i': []},
                                'Slate': {'c': false,'i': []},
                                'PVC Membrane': {'c': false,'i': []}
                            }
                        },
                        'Roof Covering Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Marginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Granule Loss': {'c': false,'i': []},
                                'Broken/Damaged': {'c': false,'i': []},
                                'Missing (Tabs)': {'c': false,'i': []},
                                'Cupping/Curling': {'c': false,'i': []},
                                'Aligned Gaps': {'c': false,'i': []},
                                'Cracked': {'c': false,'i': []},
                                'Lifting': {'c': false,'i': []},
                                'Moss': {'c': false,'i': []},
                                'Fungal Rot': {'c': false,'i': []},
                                'Rusted': {'c': false,'i': []},
                                'Exposed Fasteners': {'c': false,'i': []},
                                'Recommend Professional Re-Evaluation/Remediation': {'c': false,'i': []}
                            }
                        },
                        'Valley(s)': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'n/a': {'c': false,'i': []},
                                'Metal': {'c': false,'i': []},
                                'Woven Asphalt': {'c': false,'i': []},
                                'Cut Asphalt': {'c': false,'i': []},
                                'Tile': {'c': false,'i': []},
                                'Concrete': {'c': false,'i': []}
                            }
                        },
                        'Valley(s) Condition': {
                            'required': false, 'showvalue' : false,
                            'type': 'checkbox',
                            'value': {
                                'Satisfactory': {'c': false,'i': []},
                                'Maginal': {'c': false,'i': []},
                                'Poor': {'c': false,'i': []},
                                'Defective': {'c': false,'i': []},
                                'Broken/Damaged': {'c': false,'i': []},
                                'Rusted': {'c': false,'i': []},
                                'Holes/Gaps': {'c': false,'i': []},
                                'Leaks': {'c': false,'i': []},
                                'Installation Defects': {'c': false,'i': []},
                                'Vulnerable Areas': {'c': false,'i': []}
                            }
                        },
                        'Roof Covering(s) Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
                    },
                    //COMMENTS SECTION HERE.
                    
                'Fenestrations': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                    'Perforations (through-roof)': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'n/a': {'c': false,'i': []},
                            'No Access': {'c': false,'i': []},
                            'Not Visible': {'c': false,'i': []},
                            'Walls/Dormers': {'c': false,'i': []},
                            'Chimney Chase(s)': {'c': false,'i': []},
                            'Class "B" Vent(s)': {'c': false,'i': []},
                            'Dryer Vent': {'c': false,'i': []},
                            'Fan Vent(s)': {'c': false,'i': []},
                            'Plumbing DWV Pipes': {'c': false,'i': []},
                            'Antennae/Satellite Dish': {'c': false,'i': []},
                            'Cable/Wiring': {'c': false,'i': []},
                            'Electical Mast': {'c': false,'i': []}
                        }
                    },
                    'Perforations Condition(s)': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Satisfactory': {'c': false,'i': []},
                            'Marginal': {'c': false,'i': []},
                            'Poor': {'c': false,'i': []},
                            'Defective': {'c': false,'i': []},
                            'Broken/Damaged': {'c': false,'i': []},
                            'Rusted': {'c': false,'i': []},
                            'Raised/Holes/Gaps': {'c': false,'i': []},
                            'Leaks': {'c': false,'i': []},
                            'Installation Defects': {'c': false,'i': []},
                            'Vulnerable Areas': {'c': false,'i': []}
                        }
                    },
                    'Skylights/Skywalls': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'n/a': {'c': false,'i': []},
                            'No Access': {'c': false,'i': []},
                            'Not Visible': {'c': false,'i': []}
                        }
                    },
                    'Skylights/Skywalls Condition': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Satisfactory': {'c': false,'i': []},
                            'Marginal': {'c': false,'i': []},
                            'Poor': {'c': false,'i': []},
                            'Defective': {'c': false,'i': []},
                            'Broken/Damaged': {'c': false,'i': []},
                            'Rusted': {'c': false,'i': []},
                            'Holes/Gaps': {'c': false,'i': []},
                            'Leaks': {'c': false,'i': []},
                            'Installation Defects': {'c': false,'i': []},
                            'Security Concern': {'c': false,'i': []},
                            'Vulnerable Areas': {'c': false,'i': []}
                        }
                    },
                    'Flashing(s)': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'n/a': {'c': false,'i': []},
                            'Missing': {'c': false,'i': []},
                            'Installation Defects': {'c': false,'i': []},
                            'Rusted': {'c': false,'i': []},
                            'Potential Future Concern': {'c': false,'i': []}
                        }
                    },
                    'Flashing(s) Condition': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Satisfactory': {'c': false,'i': []},
                            'Marginal': {'c': false,'i': []},
                            'Poor': {'c': false,'i': []},
                            'Defective': {'c': false,'i': []},
                            'Broken/Damaged': {'c': false,'i': []},
                            'Raised': {'c': false,'i': []},
                            'Holes/Gaps': {'c': false,'i': []},
                            'Leaks': {'c': false,'i': []},
                            'Vulnerable Areas': {'c': false,'i': []},
                            'Repair or Re-Evaluate': {'c': false,'i': []}
                        }
                    },
                    'Fenestrations Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        },
                },
                'Gutters & Down-Spouts': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                    'Type': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Eave-Mounted': {'c': false,'i': []},
                            'Internal with Scuppers': {'c': false,'i': []},
                            'Metal': {'c': false,'i': []},
                            'Plastic/Vinyl': {'c': false,'i': []},
                            'Wood': {'c': false,'i': []}
                        }
                    },
                    'Gutters & Down-Spouts Condition': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Missing': {'c': false,'i': []},
                            'Satisfactory': {'c': false,'i': []},
                            'Marginal': {'c': false,'i': []},
                            'Poor': {'c': false,'i': []},
                            'Loose/Sagging': {'c': false,'i': []},
                            'Fallen/Pulled Away': {'c': false,'i': []},
                            'Reversed Slope/Ponding': {'c': false,'i': []},
                            'Clogged': {'c': false,'i': []},
                            'Debris': {'c': false,'i': []},
                            'Granule Wash': {'c': false,'i': []},
                            'Spillover Stains': {'c': false,'i': []},
                            'Deteriorated Wood': {'c': false,'i': []},
                            'Cracked/Split': {'c': false,'i': []},
                            'Holes': {'c': false,'i': []},
                            'Leaking Joints': {'c': false,'i': []},
                            'Rust': {'c': false,'i': []},
                            'Moss': {'c': false,'i': []}
                        }
                    },
                    'Down-Spout Discharge': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'No Down-Spouts': {'c': false,'i': []},
                            'Above Grade': {'c': false,'i': []},
                            'Below Grade': {'c': false,'i': []},
                            'Not Visible': {'c': false,'i': []}
                        }
                    },
                    'Down-Spout Discharge Condition': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Satisfactory': {'c': false,'i': []},
                            'Marginal': {'c': false,'i': []},
                            'Poor': {'c': false,'i': []},
                            'Missing': {'c': false,'i': []},
                            'Loose/Disconnected': {'c': false,'i': []},
                            'Clogged': {'c': false,'i': []},
                            'Open Gaps Around Downspout-to-Drain Connections': {'c': false,'i': []},
                            'Poor Extensions/Splash Blocks': {'c': false,'i': []}
                        }
                    },
                    'Gutters/Down Spouts Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
                }
            },
            'Structural': {
                'Roof Framing (Visible In Attic)': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                    'Conditions': {
                        'required': false, 'showvalue' : false,
                        'type': 'presettext',
                        'showcontent': true,
                        'content': 'An inspection of the structure includes traversing attics and subfloor crawl-spaces to inspect the building materials comprising the major structural components, the visible foundation; floor framing; roof framing and diaphragm; other support and substructure / superstructure components; stairs; ventilation (when applicable); and exposed concrete slabs in habitable areas, and describes any deficiencies of these systems or components. The report describes the condition and serviceability of visible, exposed foundations and grade slabs, walls, posts, piers, beams, joists, trusses, sub-floors, chimney foundations, stairs and the visible roof structure and attic components where readily and safely accessible, subfloor crawl-spaces and basements for indications of flooding and moisture penetration, and where deterioration is suspected or where clear indications of possible deterioration exist, a representative number of structural components were probed, and any pest-conducive conditions or wood-rot are reported. Probing is not required when probing will damage any finished surface or where no deterioration is suspected.'
                    },
                    'Limitations': {
                        'required': false, 'showvalue' : false,
                        'type': 'presettext',
                        'showcontent': true,
                        'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-070 of the Washington State Dept. of Licensing, The inspector is not required to enter: sub-floor crawl-spaces that require excavation or have an access opening less than eighteen inches by twenty-four inches or headroom less than eighteen inches beneath floor joists and twelve inches beneath girders (beams). Any areas that are not readily accessible due to obstructions, inadequate clearances or have conditions which, in the inspector\'s opinion, are hazardous to the health and safety of the inspector or will cause damage to components of the home, move stored items or debris or perform excavation to gain access. (BOLD THIS)Please refer to a licensed structural pest inspector (SPI) or pest control operator (PCO) to re-evaluate all issues that are suspected to be insect-related.(BOLD THIS)'
                    },
                    'Roof System': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'n/a': {'c': false,'i': []},
                            'Vaulted/No Attic': {'c': false,'i': []},
                            'Partial Attic': {'c': false,'i': []},
                            'No Access': {'c': false,'i': []},
                            'Sealed Access': {'c': false,'i': []},
                            'Trusses': {'c': false,'i': []},
                            'Stick-Framed': {'c': false,'i': []},
                            'Rafters & Joists': {'c': false,'i': []},
                            'Beams & Purlins': {'c': false,'i': []},
                            'Hips': {'c': false,'i': []},
                            'Valleys': {'c': false,'i': []}
                        }
                    },
                    'Diaphragm Sheathing': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Plywood': {'c': false,'i': []},
                            'OSB': {'c': false,'i': []},
                            'H-Clipped': {'c': false,'i': []},
                            'Plank': {'c': false,'i': []},
                            '1x Skip Sheathing': {'c': false,'i': []}
                        }
                    },
                    'Condition': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Satisfactory': {'c': false,'i': []},
                            'Marginal': {'c': false,'i': []},
                            'Poor': {'c': false,'i': []},
                            'Sagging/Over-Spanned': {'c': false,'i': []},
                            'Broken/Damaged': {'c': false,'i': []},
                            'Structural Defect (Design Related)': {'c': false,'i': []}
                        }
                    },
                    'Missing or Inadequate': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Bracing': {'c': false,'i': []},
                            'Collar Ties': {'c': false,'i': []},
                            'Knee Walls': {'c': false,'i': []},
                            'Stains': {'c': false,'i': []},
                            'Deterioration': {'c': false,'i': []},
                            'Hazardous/Unsafe': {'c': false,'i': []},
                            'Recommend Professional Re-Evaluation': {'c': false,'i': []}
                        }
                        //COMMENTS SECTION HERE.
                    },
                    'Roof Framing Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
                },
                'Floor Framing': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                    'Notice': {
                        'required': false, 'showvalue' : false,
                        'type': 'presettext',
                        'showcontent': true,
                        'content': 'Seismic (earthquake) evaluation is typically dictated by building codes, outside the scope of this inspection, and was NOT performed. For seismic evaluation or other desirable structural improvements, refer to a specialist.'
                    },
                    'Sub-Floor System': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'n/a': {'c': false,'i': []},
                            '4X Beams & Plank Diaphragm': {'c': false,'i': []},
                            '2X Joists & Diaphragm': {'c': false,'i': []},
                            'Flat Truss': {'c': false,'i': []}
                        }
                    },
                    'Beams (Girders)': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Steel': {'c': false,'i': []},
                            'Concrete': {'c': false,'i': []},
                            'Laminated/Engineered': {'c': false,'i': []},
                            'Dimensional Lumber': {'c': false,'i': []}
                        }
                    },
                    'Joists & Sheathing': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'No Joists': {'c': false,'i': []},
                            'Lumber': {'c': false,'i': []},
                            'Sleepers': {'c': false,'i': []},
                        }
                    },
                    'I-Beams': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'n/a': {'c': false,'i': []},
                            'Wood/TJI': {'c': false,'i': []},
                            'Metal': {'c': false,'i': []}
                        }
                    },
                    'Diaphragm': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            '"Foam-Crete"': {'c': false,'i': []},
                            'Diagonal': {'c': false,'i': []},
                            'Plank': {'c': false,'i': []},
                            'T&G/Shiplap': {'c': false,'i': []},
                            'Plywood': {'c': false,'i': []},
                            'OSB': {'c': false,'i': []}
                        }
                    },
                    'Posts(Columns)': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Covered/Not Visible': {'c': false,'i': []},
                            'Wood': {'c': false,'i': []},
                            'Steel': {'c': false,'i': []},
                            'Concrete': {'c': false,'i': []},
                            'CMU (block)': {'c': false,'i': []}
                        }
                    },
                    'Condition': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Not Visible': {'c': false,'i': []},
                            'Satisfactory': {'c': false,'i': []},
                            'Marginal': {'c': false,'i': []},
                            'Poor': {'c': false,'i': []},
                            'Sagging/Over-Spanned': {'c': false,'i': []},
                            'Broken': {'c': false,'i': []},
                            'Damaged': {'c': false,'i': []},
                            'Structural Defects (Design Related)': {'c': false,'i': []},
                            'Missing or Inadequate Bracing': {'c': false,'i': []},
                            'Stains': {'c': false,'i': []},
                            'Deterioration': {'c': false,'i': []},
                            'Hazardous/Unsafe': {'c': false,'i': []},
                            'Recommend Professional Evaluation and/or Remediation': {'c': false,'i': []}
                        }
                    },
                    'Stairs': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'n/a': {'c': false,'i': []},
                            'Open': {'c': false,'i': []},
                            'Enclosed': {'c': false,'i': []},
                        }
                    },
                    'Condition': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Satisfactory': {'c': false,'i': []},
                            'Marginal': {'c': false,'i': []},
                            'Poor': {'c': false,'i': []},
                            'Missing Handrail': {'c': false,'i': []}
                        }
                    },
                    'Inadequate': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Rails': {'c': false,'i': []},
                            'Headroom': {'c': false,'i': []},
                            'Support': {'c': false,'i': []},
                            'Uneven Risers': {'c': false,'i': []},
                            'Over-Height Step(s)': {'c': false,'i': []},
                            'Missing Firewall': {'c': false,'i': []},
                            'Hazardous/Unsafe': {'c': false,'i': []},
                            'Recommend Professional Evaluation and/or Remediation': {'c': false,'i': []}
                        }
                    },
                    'Basement/Crawl Floor': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Concrete': {'c': false,'i': []},
                            'Dirt/Gravel': {'c': false,'i': []},
                            'Wood': {'c': false,'i': []},
                            'Covered/Not Visible': {'c': false,'i': []}
                        }
                    },
                    'Condition': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Satisfactory': {'c': false,'i': []},
                            'Marginal': {'c': false,'i': []},
                            'Poor': {'c': false,'i': []},
                            'Typical Settling Cracks': {'c': false,'i': []},
                            'Large Cracks': {'c': false,'i': []},
                            'Stains': {'c': false,'i': []},
                            'Efflorescence': {'c': false,'i': []},
                            'Storage': {'c': false,'i': []},
                            'Damage': {'c': false,'i': []},
                            'Hazardous/Unsafe': {'c': false,'i': []},
                            'Re-Evaluate': {'c': false,'i': []}
                        }
                    },
                    'Floor Framing Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
                },
                'Foundation': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                    'Type of Foundation': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Perimeter Walls': {'c': false,'i': []},
                            'Post/Beam': {'c': false,'i': []},
                            'Columns': {'c': false,'i': []},
                            'Poured Concrete': {'c': false,'i': []},
                            'CMU(Block)': {'c': false,'i': []},
                            'Masonry': {'c': false,'i': []},
                            'Unmortared Stone/Brick': {'c': false,'i': []},
                            'Logs': {'c': false,'i': []},
                            'Treated Wood': {'c': false,'i': []},
                            'Strip Footings': {'c': false,'i': []}
                        }
                    },
                    'Condition of Foundation': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Satisfactory': {'c': false,'i': []},
                            'Marginal': {'c': false,'i': []},
                            'Poor': {'c': false,'i': []},
                            'Imbedded Wood': {'c': false,'i': []},
                            'Rock Pockets': {'c': false,'i': []},
                            'No Tie-Downs': {'c': false,'i': []},
                            'Stains': {'c': false,'i': []},
                            'Damage': {'c': false,'i': []},
                            'Deterioration': {'c': false,'i': []},
                            'Efflorescence': {'c': false,'i': []},
                            'EWC': {'c': false,'i': []},
                            'Fungal Rot/Probed': {'c': false,'i': []}
                        }
                    },
                    'Limited By': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Storage': {'c': false,'i': []},
                            'Perimeter Cover': {'c': false,'i': []},
                            'Obstacles': {'c': false,'i': []},
                            'Inaccessible Area': {'c': false,'i': []},
                            'Pests': {'c': false,'i': []},
                            'Tight/Limited Mobility': {'c': false,'i': []},
                            'Hazards/Unsafe': {'c': false,'i': []},
                            'Recommend Re-Evaluation and/or Remediation': {'c': false,'i': []}
                        }
                    },
                    'WDI/WDO (Wood-Destroying)': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'None': {'c': false,'i': []},
                            'Exit Holes': {'c': false,'i': []},
                            'Frass': {'c': false,'i': []},
                            'Galleries': {'c': false,'i': []},
                            'Damage': {'c': false,'i': []},
                            'Mildew/Bio-Growth': {'c': false,'i': []},
                            'Mold Sampled/Tested': {'c': false,'i': []},
                            'Fungal Rot/Probed': {'c': false,'i': []},
                            'Re-Evaluate': {'c': false,'i': []}
                        }
                    },
                    'Cracks': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Typical Settling': {'c': false,'i': []},
                            'Vertical': {'c': false,'i': []},
                            'Step': {'c': false,'i': []},
                            'Horizontal': {'c': false,'i': []},
                            'V-Cracking': {'c': false,'i': []},
                            'Displaced': {'c': false,'i': []},
                            'Inactive': {'c': false,'i': []},
                            'Active': {'c': false,'i': []},
                            'Larger than 1/4 inch': {'c': false,'i': []},
                            'Re-Evaluate': {'c': false,'i': []},
                        }
                    },
                    'Drainage': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Evidence of Flooding': {'c': false,'i': []},
                            'Not Visible': {'c': false,'i': []},
                            'Efflorescence': {'c': false,'i': []},
                            'Humidity': {'c': false,'i': []},
                            'Old Stains': {'c': false,'i': []},
                            'Silt Deposits': {'c': false,'i': []},
                            'Soil on Vapor Barrier': {'c': false,'i': []},
                            'Fresh Stains': {'c': false,'i': []},
                            'Standing Water': {'c': false,'i': []}
                        }
                    },
                    'Sump Pump': {
                        'type': 'checkbox',
                        'value': {
                            'n/a': {'c': false,'i': []},
                            'Missing': {'c': false,'i': []},
                            'Not Tested': {'c': false,'i': []},
                            'Operable': {'c': false,'i': []},
                            'Inoperable': {'c': false,'i': []},
                            'Re-Evaluate': {'c': false,'i': []}
                        }
                        //COMMENT SECTION GOES HERE.
                    },
                    'Foundation Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
                }
            },
            'Thermal': {
                'Attic': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                    'Conditions': {
                        'required': false, 'showvalue' : false,
                        'type': 'presettext',
                        'showcontent': true,
                        'content': 'The inspection of the insulation and ventilation includes the type and condition of the insulation and ventilation in viewable unfinished attics and sub-grade areas as well as any installed mechanical ventilation systems, reports missing or inadequate vapor barriers in subfloor crawl-spaces with earth floors, the absence of insulation at the interface between conditioned and unconditioned spaces where visible, the absence of insulation on heating system ductwork and supply plumbing in unconditioned spaces, and describes any deficiencies of these systems or components.'
                    },
                    'Limitations': {
                        'required': false, 'showvalue' : false,
                        'type': 'presettext',
                        'showcontent': true,
                        'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-150 of the Washington State Dept. of Licensing, the inspector is not required to determine the presence, extent, and type of insulation and vapor barriers concealed in the exterior walls, the thickness or R-value of insulation above the ceiling, in the walls or below the floors, or evaluate whether the type of material used to insulate pipes, ducts, jackets and boilers is a health hazard. (BOLD THIS)The efficiency and quantity of air ventilation and mechanical systems is not measured, calculated, or controls tested, other than to confirm that they exist, and/or actually turn a system on or off.(BOLD THIS)'
                    },
                    'Access': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'No Attic': {'c': false,'i': []},
                            'No Access': {'c': false,'i': []},
                            'Door': {'c': false,'i': []},
                            'Pull Down Stair': {'c': false,'i': []},
                            'Scuttle-Hole(s)': {'c': false,'i': []}
                        }
                    },
                    'Location': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Hall': {'c': false,'i': []},
                            'Bedroom': {'c': false,'i': []},
                            'Closet': {'c': false,'i': []},
                            'Laundry Room': {'c': false,'i': []},
                            'Garage': {'c': false,'i': []},
                            'Exterior': {'c': false,'i': []}
                        }
                    },
                    'Viewed': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Near Access': {'c': false,'i': []},
                            'From Ladder': {'c': false,'i': []},
                            'At Roof Apex': {'c': false,'i': []},
                            'Limited Accessibility': {'c': false,'i': []},
                            'Inspected (Traversed) Attic': {'c': false,'i': []},
                            'Entered but NOT Traversed': {'c': false,'i': []},
                            'NOT Entered/NOT Inspected': {'c': false,'i': []},
                            'Vulnerable to Traversing Damage': {'c': false,'i': []},
                            'Unsafe Traversing Condition(s)': {'c': false,'i': []},
                            'Not Visible': {'c': false,'i': []}
                        }
                    },
                    'Attic Insulation Location': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'None': {'c': false,'i': []},
                            'Rafters': {'c': false,'i': []},
                            'Ceiling Joists': {'c': false,'i': []}
                        }
                    },
                    'Attic Insulation Quantity (in)': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Not Installed': {'c': false,'i': []},
                            'Not Determined': {'c': false,'i': []},
                            'Inadequate': {'c': false,'i': []},
                            'Varied': {'c': false,'i': []},
                            '<2 inches  R 5': {'c': false,'i': []},
                            '<3 inches   R-9+': {'c': false,'i': []},
                            '3 inches  R-11': {'c': false,'i': []},
                            '4 inches  R-13': {'c': false,'i': []},
                            '5 inches  R-15': {'c': false,'i': []},
                            '6 inches  R-19': {'c': false,'i': []},
                            '2" hard foam / R20': {'c': false,'i': []},
                            '8-10 inches  R-28+': {'c': false,'i': []},
                            '10-12 inches  R-32+': {'c': false,'i': []},
                            '12-14 inches  R-36+': {'c': false,'i': []},
                            '14-16 inches  R-38+': {'c': false,'i': []},
                            '16-18 inches R- 40+': {'c': false,'i': []},
                            '18-20 inches R- 42+': {'c': false,'i': []},
                            '20-22 inches R- 44+': {'c': false,'i': []},
                            '22-24 inches R- 46+': {'c': false,'i': []}
                        }
                    },
                    'Attic Insulation Type': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Fiber Glass': {'c': false,'i': []},
                            'Cellulose': {'c': false,'i': []},
                            'Vermiculite': {'c': false,'i': []},
                            'Mineral/Rock Wool': {'c': false,'i': []},
                            'Batts': {'c': false,'i': []},
                            'Loose': {'c': false,'i': []},
                            'Wood Shavings': {'c': false,'i': []}
                        }
                    },
                    'Attic Insulation Condition': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Satisfactory': {'c': false,'i': []},
                            'Marginal': {'c': false,'i': []},
                            'Poor': {'c': false,'i': []},
                            'Missing Areas': {'c': false,'i': []},
                            'Uneven Placement': {'c': false,'i': []},
                            'Damaged': {'c': false,'i': []}
                        }
                    },
                    'Attic Ventilation': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Eaves': {'c': false,'i': []},
                            'Gable': {'c': false,'i': []},
                            'Top': {'c': false,'i': []},
                            'Ridge': {'c': false,'i': []},
                            'Powered Vent(s)': {'c': false,'i': []},
                            'Attic Fan(s)': {'c': false,'i': []}
                        }
                    },
                    'Condition of Ventilation': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'None': {'c': false,'i': []},
                            'Satisfactory': {'c': false,'i': []},
                            'Marginal': {'c': false,'i': []},
                            'Poor/Missing': {'c': false,'i': []},
                            'Odors': {'c': false,'i': []},
                            'Excessive Heat': {'c': false,'i': []},
                            'Ventilation Appears Inadequate': {'c': false,'i': []},
                            'Effectiveness NOT Evaluated': {'c': false,'i': []},
                            'Re-Evaluate': {'c': false,'i': []}
                        }
                    },
                    'Humidity': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'None': {'c': false,'i': []},
                            'Condensation': {'c': false,'i': []},
                            'Roof Leaks': {'c': false,'i': []},
                            'Old Stains/Inactive': {'c': false,'i': []},
                            'Fresh Stains/Active': {'c': false,'i': []},
                            'Mildew/Mold': {'c': false,'i': []},
                            'Stained Diaphragm': {'c': false,'i': []},
                            'Wet Insulation': {'c': false,'i': []},
                            'Damage': {'c': false,'i': []},
                            'Re-Evaluate': {'c': false,'i': []}
                        }
                    },
                    'Infestation': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'None': {'c': false,'i': []},
                            'Prior/Inactive': {'c': false,'i': []},
                            'Live/Active': {'c': false,'i': []},
                            'Nesting Materials': {'c': false,'i': []},
                            'Scat': {'c': false,'i': []},
                            'Insect': {'c': false,'i': []},
                            'Bee/Wasp': {'c': false,'i': []},
                            'Bird': {'c': false,'i': []},
                            'Rodent': {'c': false,'i': []},
                            'Racoon': {'c': false,'i': []},
                            'Potential Points of Pest Entry': {'c': false,'i': []},
                            'Hazardous/Unsafe': {'c': false,'i': []},
                            'Recommend Professional Evaluation and/or Remediation': {'c': false,'i': []}
                        }
                    },
                    'Ventiliation Notice': {
                        'required': false, 'showvalue' : false,
                        'type': 'presettext',
                        'showcontent': true,
                        'content': 'Ventilation is important in maintaining healthy uninhabited areas (attics, crawl spaces), and a key consideration before adding or altering insulation quantity. Recommend frequent seasonal checks to be certain ventilation ports do not become inadvertently blocked by pests, wind currents, or the movement or addition of new insulation.'
                    },
                    'Attic Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
                },
                'Crawl Spaces/Unfinished Basements': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                    'Access': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Door/Panel': {'c': false,'i': []},
                            'Scuttle-Hole': {'c': false,'i': []},
                            'No Access': {'c': false,'i': []},
                            'No Crawl-Space': {'c': false,'i': []},
                            'Not Visible': {'c': false,'i': []}
                        }
                    },
                    'Location': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Hall': {'c': false,'i': []},
                            'Bedroom': {'c': false,'i': []},
                            'Closet': {'c': false,'i': []},
                            'Laundry Room': {'c': false,'i': []},
                            'Garage': {'c': false,'i': []},
                            'Exterior': {'c': false,'i': []},
                            'Inspected Basement or Crawl': {'c': false,'i': []},
                            'NOT Entered/NOT Inspected': {'c': false,'i': []},
                            'Limited Accessibility': {'c': false,'i': []}
                        }
                    },
                    'Viewed': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Near Access': {'c': false,'i': []},
                            'From Exterior': {'c': false,'i': []},
                            'At Center Only': {'c': false,'i': []},
                            'Vulnerable': {'c': false,'i': []},
                            'Unsafe': {'c': false,'i': []}
                        }
                    },
                    'Sub-Floor Insulation Location': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'None Visible': {'c': false,'i': []},
                            'Floor': {'c': false,'i': []},
                            'Rim Joists': {'c': false,'i': []}
                        }
                    },
                    'Sub-Floor Insulation Type': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Fiberglass Batts': {'c': false,'i': []},
                            'Blown-in Cellulose': {'c': false,'i': []},
                            'Foam Board': {'c': false,'i': []}
                        }
                    },
                    'Sub-Floor Insulation Retention': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'None Visible': {'c': false,'i': []},
                            'Wired': {'c': false,'i': []},
                            'Stapled': {'c': false,'i': []},
                            'Twine': {'c': false,'i': []},
                            'Lathe': {'c': false,'i': []}
                        }
                    },
                    'Sub-Floor Insulation Condition': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Satisfactory': {'c': false,'i': []},
                            'Marginal': {'c': false,'i': []},
                            'Poor': {'c': false,'i': []},
                            'Missing Areas': {'c': false,'i': []},
                            'Fallen Down': {'c': false,'i': []},
                            'Damaged': {'c': false,'i': []},
                            'Installed Upside-Down': {'c': false,'i': []},
                            'Ineffective Installation/Gaps': {'c': false,'i': []}
                        }
                    },
                    'Crawl-Space Ventilation': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'None': {'c': false,'i': []},
                            'Foundation Vents': {'c': false,'i': []},
                            'Powered Vent(s)': {'c': false,'i': []},
                            'Fan(s)': {'c': false,'i': []}
                        }
                    },
                    'Condition': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Satisfactory': {'c': false,'i': []},
                            'Marginal': {'c': false,'i': []},
                            'Poor': {'c': false,'i': []},
                            'Effectiveness NOT Evaluated': {'c': false,'i': []},
                            'Re-Evaluate': {'c': false,'i': []}
                        }
                    },
                    'Vapor Barrier': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'None': {'c': false,'i': []},
                            'Satisfactory': {'c': false,'i': []},
                            'Damaged': {'c': false,'i': []},
                            'Gaps/Displaced Areas': {'c': false,'i': []},
                            'Exposed Earth': {'c': false,'i': []}
                        }
                    },
                    'Moisture': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'None': {'c': false,'i': []},
                            'Condensation': {'c': false,'i': []},
                            'Efflorescence': {'c': false,'i': []},
                            'Old Stains': {'c': false,'i': []},
                            'Fresh': {'c': false,'i': []},
                            'Standing Water': {'c': false,'i': []},
                        }
                    },
                    'Drainage': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'To Out-Fall': {'c': false,'i': []},
                            'Interior Plane': {'c': false,'i': []},
                            'None Apparent': {'c': false,'i': []},
                            'Sump Pump': {'c': false,'i': []},
                            'Functional': {'c': false,'i': []}
                        }
                    },
                    'Infestation': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'None': {'c': false,'i': []},
                            'Prior/Inactive': {'c': false,'i': []},
                            'Live/Active': {'c': false,'i': []},
                            'Nesting Materials': {'c': false,'i': []},
                            'Scat': {'c': false,'i': []},
                            'Insect': {'c': false,'i': []},
                            'Bee/Wasp': {'c': false,'i': []},
                            'Bird': {'c': false,'i': []},
                            'Rodent': {'c': false,'i': []},
                            'Racoon': {'c': false,'i': []},
                            'Potential Point Pest Entry': {'c': false,'i': []},
                            'Hazardous/Unsafe': {'c': false,'i': []},
                            'Recommend Professional Evaluation and/or Remediation': {'c': false,'i': []}
                        }
                    },
                    'Crawl Space/Basement Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
                },
                'Interior Ventilation/Exhaust Fans': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                    'Whole House Ventiliation': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Whole House Fan(s)': {'c': false,'i': []},
                            'Make-Up Air Vent(s)': {'c': false,'i': []},
                            'Furnace Blower(s)': {'c': false,'i': []},
                            'Ceiling-Mounted Fan(s)': {'c': false,'i': []}
                        }
                    },
                    'Condition': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Satisfactory': {'c': false,'i': []},
                            'Marginal': {'c': false,'i': []},
                            'Poor/Missing': {'c': false,'i': []},
                            'Open Blade': {'c': false,'i': []},
                            'Caged': {'c': false,'i': []},
                            'Remote Control': {'c': false,'i': []}
                        }
                    },
                    'Moisture Reduction Fans': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Bathroom Exhaust Fan(s)': {'c': false,'i': []},
                            'Kitchen Fan(s)': {'c': false,'i': []},
                            'Laundry Fan(s)': {'c': false,'i': []},
                            'Inoperable': {'c': false,'i': []},
                            'Weak/Noisy': {'c': false,'i': []},
                            'Unsafe': {'c': false,'i': []}
                        }
                    },
                    'Condition': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Satisfactory': {'c': false,'i': []},
                            'Marginal': {'c': false,'i': []},
                            'Poor/Missing': {'c': false,'i': []},
                            'Vented Improperly (Inside Building Envelope)': {'c': false,'i': []},
                            'Not Visible': {'c': false,'i': []},
                            'Recirculating-Only Type': {'c': false,'i': []},
                            'Clogged Grease Filter': {'c': false,'i': []},
                            'Restricted (Collapsed/Blocked)': {'c': false,'i': []},
                            'Venting Into Attic Space': {'c': false,'i': []},
                            'Aimed at Gable, Eave, or Roof Vents': {'c': false,'i': []},
                            'Fallen Loose': {'c': false,'i': []},
                            'Re-Evaluate': {'c': false,'i': []}
                        }
                    },
                    'Moisture Notice': {
                        'required': false, 'showvalue' : false,
                        'type': 'presettext',
                        'showcontent': true,
                        'content': 'To minimize unwanted moisture accumulation or humidity concerns, recommend regular use of adequate exhaust fans in kitchens, laundries, bathrooms, and other moisture producing areas with sealed venting to outside the building envelope. Routine maintenance is recommended to ensure that noisy, worn, or dirty fans are serviced or replaced as needed.'
                    },
                    'Interior Ventilation/Exhaust Fan Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
                }
            },
            'Plumbing': {
                'Plumbing System': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                    'Conditions': {
                        'required': false, 'showvalue' : false,
                        'type': 'presettext',
                        'showcontent': true,
                        'content': 'An inspection of the plumbing system includes visible water supply lines; visible drain/waste / soil and vent lines; fixtures and faucets; domestic hot water system and fuel source, and includes operating fixtures in order to observe functional flow, check for functional drainage from fixtures, and describe the visible water supply and distribution piping materials; drain, waste and vent materials; water-heating equipment, and any deficiencies of these systems or components. This section reports: (1)The presence and location of the main water shutoff valve and/or fuel shutoff valve(s), or reports that they were not found, (2)The presence and functionality of sump pumps/waste ejector pumps when visible or confirms the float switch activates the pump when the sump is dry, and (3)Whether or not the water temperature was tested, and the presence of the temperature and pressure relief (TPR) valve and associated piping. The generally accepted maximum safe water temperature is one hundred twenty degrees (120°) Fahrenheit.'
                    },
                    'Limitations': {
                        'required': false, 'showvalue' : false,
                        'type': 'presettext',
                        'showcontent': true,
                        'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-100 of the Washington State Dept. of Licensing, the inspector is not required to operate any valves, including faucets of freestanding or built-in appliances or fixtures, (if the outlet end of the valve or faucet is connected or intended to be connected to an appliance), any plumbing components not readily accessible, or inspect any system that is shut down or winterized; or determine the quantity of water from on-site water supplies, the condition and operation of private water supply systems or water wells and related pressure tanks and pumps, the potability of any water supply whether public or private, or water-conditioning equipment, including softeners and filter systems; or test pressure or temperature/pressure relief valves, gas supply systems, ignite pilot lights, test fire sprinkler systems, or ancillary systems or components such as, but not limited to, those related to solar water heating and hot water circulation; or test shower pans for leaks, or use special equipment to test/scan shower or tub surrounds for moisture in surrounding substrate materials; or test exterior drain systems or floor drains, including but not limited to, exterior stairwell drains and driveway drains; or test interior components of exterior pumps, or sealed sanitary waste lift systems, or the quality or the condition and operation of on-site sewage disposal systems such as waste ejector pumps, cesspools, septic tanks, drain fields, related underground piping, conduit, cisterns, and related equipment.'
                    },
                    'Water Supply Source': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Unknown/Verify': {'c': false,'i': []},
                            'Public Water': {'c': false,'i': []},
                            'Shared Well': {'c': false,'i': []},
                            'Private Well': {'c': false,'i': []}
                        }
                    },
                    'Main Water Shut Off Valve Location': { //THIS REQUIRES MORE DATA.
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'n/a': {'c': false,'i': []},
                            'Closet': {'c': false,'i': []},
                            'Well House': {'c': false,'i': []},
                            'Verify': {'c': false,'i': []},
                            'Not Found': {'c': false,'i': []},
                            'Garage': {'c': false,'i': []},
                            'Above Waterheater': {'c': false,'i': []},
                            'Yard Box': {'c': false,'i': []},
                            'Basement': {'c': false,'i': []},
                            'Crawl Space': {'c': false,'i': []},
                            'Exterior Wall': {'c': false,'i': []},
                            'Interior Utility Closet': {'c': false,'i': []},
                            'Inside Cabinet': {'c': false,'i': []},
                            'Laundry Closet': {'c': false,'i': []},
                            'Bedroom': {'c': false,'i': []}
                        }
                    },
                    'Water Pressure': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Unknown': {'c': false,'i': []},
                        'Verify': {'c': false,'i': []},
                        'OFF': {'c': false,'i': []},
                        'Inadequate (<45psi)': {'c': false,'i': []},
                        'Adequate (45-85psi)': {'c': false,'i': []},
                        'Excessive (>85psi)': {'c': false,'i': []},
                        }
                    },
                    'Water Temperature': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                        'value': {
                            'Varies Per Unit': {'c': false,'i': []},
                            'See WH Schedule': {'c': false,'i': []},
                            'WH OFF/Verify Function': {'c': false,'i': []},
                            'WH on Vacation Mode': {'c': false,'i': []},
                            'See Interior Section': {'c': false,'i': []},
                            'Inadequate (65-85 degrees)': {'c': false,'i': []},
                            'Normal (85-115 degrees)': {'c': false,'i': []},
                            'Hot (115-120 degrees)': {'c': false,'i': []},
                            'Scalding Hazard (>120 degrees)': {'c': false,'i': []},
                        }
                    },
                    'Waste System': {
                        'required': false, 'showvalue' : false,
                        'type': 'checkbox',
                    'value': {
                        'Public Sewer': {'c': false,'i': []},
                        'Shared Septic': {'c': false,'i': []},
                        'Private Septic & Drainfield': {'c': false,'i': []},
                        'Private Septic & Mound': {'c': false,'i': []},
                        'Private Septic & Leech Line': {'c': false,'i': []},
                        'Unknown/Verify': {'c': false,'i': []}
                    }
                },
                'Main Entry Piping': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Copper': {'c': false,'i': []},
                        'Galvanized': {'c': false,'i': []},
                        'Plastic/CPVC': {'c': false,'i': []},
                        'Polybutylene': {'c': false,'i': []},
                        'PEX': {'c': false,'i': []}
                    }
                },
                'Condition': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Not Visible': {'c': false,'i': []},
                        'Leaking': {'c': false,'i': []},
                        'Unprotected/Freezing': {'c': false,'i': []},
                        'Discolered Water': {'c': false,'i': []},
                        'Odor': {'c': false,'i': []}
                    }
                },
                'Pressure': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'LIST PRESSURE?': {'c': false,'i': []},
                        'Low': {'c': false,'i': []},
                        'High': {'c': false,'i': []},
                        'Normal': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Shut-Off': {'c': false,'i': []},
                        'Winterized': {'c': false,'i': []}
                    }
                },
                'Water Lines': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Copper': {'c': false,'i': []},
                        'Galvanized': {'c': false,'i': []},
                        'Plastic/CPVC': {'c': false,'i': []},
                        'Polybutylene': {'c': false,'i': []},
                        'PEX': {'c': false,'i': []}
                    }
                },
                'Condition': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Not Fully Visible': {'c': false,'i': []},
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Cross Connections': {'c': false,'i': []},
                        'Leaks': {'c': false,'i': []}
                    }
                },
                'Lead (other than solder joints)': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Service Entry': {'c': false,'i': []},
                        'Unknown': {'c': false,'i': []},
                        'Unlikely': {'c': false,'i': []}
                    }
                },
                'Disimilar Metal Connection (Potential Electrolysis)': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Yes': {'c': false,'i': []},
                        'No': {'c': false,'i': []},
                        'Not Visible': {'c': false,'i': []}
                    }
                },
                'DMV Piping': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Copper': {'c': false,'i': []},
                        'Cast Iron': {'c': false,'i': []},
                        'Galvanized': {'c': false,'i': []},
                        'Plastic/ABS/PVC': {'c': false,'i': []}
                    }
                },
                'Condition': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Not Fully Visible': {'c': false,'i': []},
                        'Satisfactory': {'c': false,'i': []},
                        'Maginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Leaks': {'c': false,'i': []},
                        'Unsupported': {'c': false,'i': []}
                    }
                },
                'Plumbing System Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            },
            'Faucets/Fixtures': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                'Faucets': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Functional': {'c': false,'i': []},
                        'Intermittent Function': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Missing/Incomplete': {'c': false,'i': []},
                        'Loose': {'c': false,'i': []},
                        'Broken/Damaged': {'c': false,'i': []}
                    }
                },
                'Leaking': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Hose Bibb': {'c': false,'i': []},
                        'Wall Stop': {'c': false,'i': []},
                        'Faucet': {'c': false,'i': []},
                        'Sprayer': {'c': false,'i': []}
                    }
                },
                'Location': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Kitchen': {'c': false,'i': []},
                        'Master Bath': {'c': false,'i': []},
                        'Main Bath': {'c': false,'i': []},
                        'Half Bath': {'c': false,'i': []},
                        'Laundry': {'c': false,'i': []},
                        'Bar': {'c': false,'i': []}
                    }
                },
                'Accessories': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Vegetable Sink': {'c': false,'i': []},
                        'Insta-Hot': {'c': false,'i': []},
                        'Water Filter': {'c': false,'i': []},
                        'Ice Maker': {'c': false,'i': []}
                    }
                },
                'Disposer': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Noisy': {'c': false,'i': []},
                        'Defective': {'c': false,'i': []}
                    }
                },
                'Dishwasher': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Airgap': {'c': false,'i': []}
                    }
                },
                'Condition': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Functional': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Intermittent Function': {'c': false,'i': []},
                        'Defects/Damage': {'c': false,'i': []}
                    }
                },
                'Sinks/Fixtures': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Functional': {'c': false,'i': []},
                        'Surface Damage': {'c': false,'i': []},
                        'Cabinet Damage': {'c': false,'i': []},
                        'Cross Connection': {'c': false,'i': []},
                        'Improve Caulking at Sink, Back-Splash, Tub Deck, Shower Surround, Floor, Wood or MDF Molding': {'c': false,'i': []}
                    }
                },
                'Grout Condition': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Unsealed (Recommend Sealing)': {'c': false,'i': []},
                        'Cracked/Loose/Missing Grout': {'c': false,'i': []}
                    }
                },
                'Drainage': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Functional': {'c': false,'i': []},
                        'Missing Stopper': {'c': false,'i': []},
                        'Missing/Inoperable Overflow': {'c': false,'i': []},
                        'Clog/Slow Drain': {'c': false,'i': []},
                        'Stained Drainpipe': {'c': false,'i': []},
                        'Drips/Leaks': {'c': false,'i': []},
                        'Defects/Damage': {'c': false,'i': []},
                        'Unsafe': {'c': false,'i': []},
                        'Re-Evaluate': {'c': false,'i': []}
                    }
                },
                'Location': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Kitchen': {'c': false,'i': []},
                        'Master Bath': {'c': false,'i': []},
                        'Main Bath': {'c': false,'i': []},
                        'Half Bath': {'c': false,'i': []},
                        'Laundry': {'c': false,'i': []},
                        'Bar': {'c': false,'i': []}
                    }
                },
                'Toilet': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Runs Continuously': {'c': false,'i': []},
                        'Leaks': {'c': false,'i': []},
                        'Loose Bowl': {'c': false,'i': []},
                        'Damage': {'c': false,'i': []}
                    }
                },
                'Tub/Shower Surround(s)': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Ceramic': {'c': false,'i': []},
                        'FG': {'c': false,'i': []},
                        'Masonite/Laminate': {'c': false,'i': []},
                        'Slab': {'c': false,'i': []},
                        'Jacuzzi': {'c': false,'i': []}
                    }
                },
                'Condition': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Functional': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Stains': {'c': false,'i': []},
                        'Cross Connection': {'c': false,'i': []},
                        'Defective': {'c': false,'i': []},
                        'Loose Tile': {'c': false,'i': []},
                        'Cracked/Broken': {'c': false,'i': []},
                        'Leaky Shower Head': {'c': false,'i': []},
                        'Leaky Faucet': {'c': false,'i': []},
                        'Leaky Sprayer': {'c': false,'i': []}
                    }
                },
                'Faucet/Fixtures Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            },
            'Water Heater': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                'Energy Source': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Gas/Propane': {'c': false,'i': []},
                        'Electric': {'c': false,'i': []},
                        'Oil': {'c': false,'i': []},
                        'Solar': {'c': false,'i': []},
                        'Geo Thermal': {'c': false,'i': []}
                    }
                },
                'Brand Name': { //NEEDS MORE DATA.
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Unknown': {'c': false,'i': []},
                        'A. O. Smith': {'c': false,'i': []},
                        'American': {'c': false,'i': []},
                        'American Standard': {'c': false,'i': []},
                        'Amtrol': {'c': false,'i': []},
                        'Aqua Star / Bosch': {'c': false,'i': []},
                        'Bosch': {'c': false,'i': []},
                        'Bradford White': {'c': false,'i': []},
                        'Briggs': {'c': false,'i': []},
                        'Craftmaster': {'c': false,'i': []},
                        'Eccotemp': {'c': false,'i': []},
                        'GE': {'c': false,'i': []},
                        'Hoyt': {'c': false,'i': []},
                        'Kenmore': {'c': false,'i': []},
                        'KD Navien': {'c': false,'i': []},
                        'Lochinvar': {'c': false,'i': []},
                        'Munchkin': {'c': false,'i': []},
                        'Navien America': {'c': false,'i': []},
                        'Navion': {'c': false,'i': []},
                        'Noritz': {'c': false,'i': []},
                        'Polaris': {'c': false,'i': []},
                        'Reliance': {'c': false,'i': []},
                        'Rheem': {'c': false,'i': []},
                        'Ruud': {'c': false,'i': []},
                        'Richmond': {'c': false,'i': []},
                        'Rinnai': {'c': false,'i': []},
                        'Sears Roebuck': {'c': false,'i': []},
                        'State': {'c': false,'i': []},
                        'State Select': {'c': false,'i': []},
                        'Takagi': {'c': false,'i': []},
                        'True Value': {'c': false,'i': []},
                        'US Craftmaster': {'c': false,'i': []},
                        'Whirlpool': {'c': false,'i': []}
                    }
                },
                'Approximate Age (Years Old)': { //NEEDS SOME WAY TO CHOOSE "UNKNOWN."
                    'required': false, 'showvalue' : false,
                    'type': 'number',
                    'value': ''
                },
                'Capacity (in Gallons)': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        '10': {'c': false,'i': []},
                        '20': {'c': false,'i': []},
                        '30': {'c': false,'i': []},
                        '40': {'c': false,'i': []},
                        '50': {'c': false,'i': []},
                        'OTHER (NEEDS MORE DATA)': {'c': false,'i': []}
                    }
                },
                'Model #': { //THIS IS A TEXT ENTRY FIELD
                    'required': false, 'showvalue' : false,
                    'type': 'textbox',
                    'value': ''
                },
                'Serial #': { //THIS IS A TEXT ENTRY FIELD
                    'required': false, 'showvalue' : false,
                    'type': 'textbox',
                    'value': ''
                },
                'Water Temperature': {
                    'required': false, 'showvalue' : false,
                    'type': 'number',
                    'value': ''
                },
                'Condition': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Inoperable': {'c': false,'i': []},
                        'Data Plate Inaccessible/Illegible': {'c': false,'i': []},
                        'Missing/Loose Seismic Restraints': {'c': false,'i': []}
                    }
                },
                'TPRV Connection': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Missing': {'c': false,'i': []},
                        'Reduced Extension': {'c': false,'i': []},
                        'Poor Extension Termination': {'c': false,'i': []}
                    }
                },
                'Exhaust': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'n/a': {'c': false,'i': []},
                        'Metal': {'c': false,'i': []},
                        'Flex Ducting': {'c': false,'i': []},
                        'PVC': {'c': false,'i': []},
                        'Condensate': {'c': false,'i': []},
                        'Rust': {'c': false,'i': []},
                        'Corrosion': {'c': false,'i': []},
                        'Verify Proper Pitch': {'c': false,'i': []},
                        'Disconnected': {'c': false,'i': []},
                        'Into Masonry Chase': {'c': false,'i': []},
                        'Missing Liner': {'c': false,'i': []},
                        'Back-Drafting': {'c': false,'i': []},
                        'Unsafe': {'c': false,'i': []},
                        'Recommend Professional Re-Evaluation and/or Remediation': {'c': false,'i': []}
                    }
                },
                'Water Heater Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            }
        },
        'Heating': {
            'Heating System': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                'Conditions': {
                    'required': false, 'showvalue' : false,
                    'type': 'presettext',
                    'showcontent': true,
                    'content': 'The inspection of the heating system includes the fuel source; heating equipment; heating distribution; operating controls; visible portions of flue pipes, chimneys and venting, installed auxiliary heating units, deficiencies of the systems or components, and reports any evidence that indicates the possible presence of an underground storage tank. Each habitable space in the home was inspected to determine whether or not there was a functioning heat source present and operable, using normal readily accessible control devices. Access panels or covers provided by the manufacturer or installer, if readily accessible and detachable, were opened. The report describes the existing operation of: electric baseboard and in-wall heaters to ensure they are functional, central heating units and distribution systems, visible flue pipes and related components to ensure functional operation and proper clearance from combustibles, spaces where fossil fuel burning heating devices are located to ensure there is air for combustion.'
                },
                'Limitations': {
                    'required': false, 'showvalue' : false,
                    'type': 'presettext',
                    'showcontent': true,
                    'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-120 of the Washington State Dept. of Licensing, the inspector is not required to determine adequacy of combustion air, or the capacity, adequacy, or efficiency of a heating system, or evaluate thermostats or controls other than to confirm that they actually turn a system on or off. The inspector did not remove covers or panels that were not readily accessible or removable, or dismantle any equipment, controls, or gauges except readily identifiable access covers designed to be removed by users. The inspector is not required to ignite pilot lights, or operate heating devices or systems that have been shut down, do not respond to normal controls, or any heating system when circumstances are not conducive to safe operation or when doing so will damage the equipment, inspect or evaluate heat exchangers concealed inside furnaces and boilers, the interior of chimneys and flues, and/or any heating equipment that is not readily accessible, or installed heating system accessories, such as humidifiers, air purifiers, motorized dampers, heat reclaimers; solar heating systems; or concealed distribution systems.'
                },
                'Energy Source(s)': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Gas': {'c': false,'i': []},
                        'LP': {'c': false,'i': []},
                        'Electric': {'c': false,'i': []},
                        'Oil': {'c': false,'i': []},
                        'Solar': {'c': false,'i': []},
                        'Wind': {'c': false,'i': []},
                        'Geo Thermal': {'c': false,'i': []}
                    }
                },
                'System Type': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Central Forced Air': {'c': false,'i': []},
                        'In-Wall Space Heaters': {'c': false,'i': []},
                        'Baseboard Wall': {'c': false,'i': []},
                        'Radiant': {'c': false,'i': []}
                    }
                },
                'Boiler': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Water': {'c': false,'i': []},
                        'Steam': {'c': false,'i': []},
                        'Radiator': {'c': false,'i': []}
                    }
                },
                'Heat Pump': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Air': {'c': false,'i': []},
                        'Water': {'c': false,'i': []},
                        'Ground': {'c': false,'i': []}
                    }
                },
                'Stove': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Wood': {'c': false,'i': []},
                        'Solid Fuel(Pellet)': {'c': false,'i': []},
                        'Gas Log': {'c': false,'i': []},
                        'Verify Clearance to Combustibles': {'c': false,'i': []}
                    }
                },
                'Solar': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Passive': {'c': false,'i': []},
                        'Heat Sink': {'c': false,'i': []},
                        'Photo-Voltaic': {'c': false,'i': []},
                        'Panels': {'c': false,'i': []},
                        'Convection': {'c': false,'i': []}
                    }
                },
                'Heating System Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            },
            'Central Furnace/Heat Pump': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                'Brand Name': { //NEED MORE DATA
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Bryant': {'c': false,'i': []},
                        'OTHER (NEED MORE DATA)': {'c': false,'i': []}
                    }
                },
                'Capacity': { //NEED MORE DATA
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Text Entry?': {'c': false,'i': []},
                        'OTHER (NEED MORE DATA)': {'c': false,'i': []}
                    }
                },
                'Year of Manufacture': {
                    'required': false, 'showvalue' : false,
                    'type': 'number',
                    'value': ''
                },
                'Model #': {
                    'required': false, 'showvalue' : false,
                    'type': 'textbox',
                    'value': ''
                },
                'Serial #': {
                    'required': false, 'showvalue' : false,
                    'type': 'textbox',
                    'value': ''
                },
                'Posted Service History': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory (Annual Safety)': {'c': false,'i': []},
                        'Missing/Old': {'c': false,'i': []},
                        'Last Serviced n/a': {'c': false,'i': []}
                    }
                },
                'Condition': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Dusty Cabinet': {'c': false,'i': []},
                        'Rust': {'c': false,'i': []},
                        'Corrosion': {'c': false,'i': []},
                        'Flame Distortion': {'c': false,'i': []}
                    }
                },
                'Central Furnace/Heat Pump Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            },
            'NEW SECTION?': { //NEEDS A TITLE
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                'Ducting': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Plenum & Cold Air Returns': {'c': false,'i': []},
                        'Metal Duct': {'c': false,'i': []},
                        'Insulated Flex Duct': {'c': false,'i': []}
                    }
                },
                'Reduced Vent': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Metal': {'c': false,'i': []},
                        'PVC': {'c': false,'i': []},
                        'Verify Proper Pitch': {'c': false,'i': []},
                        'Rusted': {'c': false,'i': []},
                        'Deteriorated': {'c': false,'i': []},
                        'Disconnected': {'c': false,'i': []},
                        'n/a': {'c': false,'i': []}
                    }
                },
                'Filter': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'n/a': {'c': false,'i': []},
                        'Electrostatic': {'c': false,'i': []},
                        'Paper': {'c': false,'i': []},
                        'Filter Fabric': {'c': false,'i': []},
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor/Dirty': {'c': false,'i': []}
                    }
                },
                'Disconnect/Typical Safety Controls': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Functional': {'c': false,'i': []},
                        'Verify Location/Function': {'c': false,'i': []},
                        'Hazard': {'c': false,'i': []},
                        'Recommend Professional HVAC Re-Evaluation, Safety Inspection, and/or Remediation': {'c': false,'i': []}
                    }
                },
                'NEW SECTION??? Images': { // NEEDS A TITLE
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            },
            'Fireplaces/Stoves': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                'Conditions': {
                    'required': false, 'showvalue' : false,
                    'type': 'presettext',
                    'showcontent': true,
                    'content': 'The inspection of solid fuel and gas fireplaces, or heating stoves includes the readily visible components, the fuel source, damper, fire-box, and hearth. Each fireplace or heating stove in the home, including dampers, fire-boxes and hearths was inspected using normal readily accessible control devices to determine whether or not there was a functional and operable heat source present, and to ensure there was air for combustion in spaces where fossil fuel burning heating devices were located. The findings area describes the heating units, visible flue pipes and related components to ensure functional operation and proper clearance from combustibles, and describes any deficiencies of these systems or components.'
                },
                'Limitations': {
                    'required': false, 'showvalue' : false,
                    'type': 'presettext',
                    'showcontent': true,
                    'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-160 of the Washington State Dept. of Licensing, the inspector is not required to: (1)inspect flues or verify the presence of flue liners beyond what can be safely and readily seen from the roof or the firebox of a stove or fireplace, (2)inspect any solid fuel device being operated at the time of the inspection, (3)dismantle fireplaces or stoves to inspect fire-boxes or remove rain caps to inspect chimney flues, (3)evaluate the installation or adequacy of fireplace inserts, or modifications to a fireplace, stove, or chimney, or (4)ignite fires in a fireplace or stove, perform a chimney smoke test or determine the adequacy of draft.'
                },
                'Fireplace/Stove Type': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Masonry Firebox': {'c': false,'i': []},
                        'Metal FP Insert': {'c': false,'i': []},
                        'Direct Vent Gas FP': {'c': false,'i': []},
                        'Wood/Pellet Stove': {'c': false,'i': []},
                        'Masonry Flue Liner': {'c': false,'i': []},
                        'Metal Flue Liner': {'c': false,'i': []},
                        'Unlined Chase': {'c': false,'i': []},
                        'Venting Into Chimney Chase': {'c': false,'i': []}
                    }
                },
                'Mantle/Hearth': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Loose': {'c': false,'i': []},
                        'Settling Cracks': {'c': false,'i': []},
                        'Burned': {'c': false,'i': []},
                        'Verify Clearance to Combustibles': {'c': false,'i': []}
                    }
                },
                'Firebox': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'No Access': {'c': false,'i': []},
                        'Missing Liner': {'c': false,'i': []},
                        'Cracked Refractory Brick': {'c': false,'i': []},
                        'Missing/Loose Mortar': {'c': false,'i': []}
                    }
                },
                'Damper': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Missing': {'c': false,'i': []},
                        'No Access': {'c': false,'i': []},
                        'Inoperable/DTO': {'c': false,'i': []},
                        'Rusted': {'c': false,'i': []},
                        'Damaged/Broken': {'c': false,'i': []},
                        'Creosote Build-Up': {'c': false,'i': []},
                        'Deterioration': {'c': false,'i': []},
                        'Recommend Cleaning/Re-Evaluation/Repairs': {'c': false,'i': []}
                    }
                },
                'Chimney': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'n/a': {'c': false,'i': []},
                        'Framed': {'c': false,'i': []},
                        'Masonry': {'c': false,'i': []},
                        'Metal': {'c': false,'i': []},
                        'Class B': {'c': false,'i': []},
                        'DV Wall Hood': {'c': false,'i': []},
                        'Cracked Wash': {'c': false,'i': []},
                        'Loose Mortar': {'c': false,'i': []},
                        'No Liner': {'c': false,'i': []},
                        'No Spark Arrestor': {'c': false,'i': []},
                        'Rust': {'c': false,'i': []},
                        'Creosote': {'c': false,'i': []},
                        'Missing Cricket': {'c': false,'i': []},
                        'Inadequate/Missing Flashing': {'c': false,'i': []},
                        'Damaged': {'c': false,'i': []},
                        'Missing Burn Guard': {'c': false,'i': []},
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Recommend Professional Re-Evaluation/Remediation': {'c': false,'i': []}
                    }
                },
                'Fireplaces/Stoves Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            }
        },
        'Cooling': {
            'Cooling Systems': {
                        'Show Value': {
                            'type':'hidden',
                            'showvalue':false
                        },
                'Conditions': {
                    'required': false, 'showvalue' : false,
                    'type': 'presettext',
                    'showcontent': true,
                    'content': 'The inspection of the air conditioning system includes the cooling equipment; cooling distribution equipment, the energy sources, and a description noted in this report of any deficiencies of these systems or components: (1)Where an air conditioning system is present, readily accessible access panels or covers provided by the manufacturer or installer were opened to inspect the air conditioning system. (2)Where conditions allowed use of normal control devices, function of the controls and operative components of the complete system were inspected, and temperature differential was measured and recorded. (3)Interior exhaust fans and/or furnace blower motors may be present and/or operational at the time of the inspection but do not provide cooling. (BOLD THIS)Heat pump cycles were NOT reversed, and if outdoor temperatures were below 60 degrees during the past 72hrs, A/C systems were NOT tested.(BOLD THIS)'
                },
                'Limitations': {
                    'required': false, 'showvalue' : false,
                    'type': 'presettext',
                    'showcontent': true,
                    'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-130 of the Washington State Dept. of Licensing, the inspector is not required to determine the efficiency, or adequacy of the system, activate cooling systems that have been shut down, or operate cooling system components if the exterior temperature is below sixty degrees Fahrenheit, when doing so might damage the equipment, or when other circumstances are not conducive to safe operation, remove covers or panels that are not readily accessible or dismantle any equipment, controls, or gauges except readily identifiable access covers designed to be removed by users, check the coolant pressure / charge, or inspect the system for refrigerant leaks, inspect gas-fired refrigeration systems, evaporative coolers, wall or window-mounted air-conditioning units, evaluate digital-type thermostats or controls, or determine how much current the unit is drawing.'
                },
                'Temperature Differential': { //NEEDS MORE DATA
                    'required': false, 'showvalue' : false,
                    'type': 'number',
                    'value': ''
                },
                'A/C Type': { //NEEDS MORE DATA
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'n/a': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'OTHER (NEEDS MORE DATA)': {'c': false,'i': []}
                    }
                },
                'Energy Source': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Natural Gas': {'c': false,'i': []},
                        'Propane': {'c': false,'i': []},
                        'Electric': {'c': false,'i': []},
                        'Central Air': {'c': false,'i': []},
                        'Heat Pump': {'c': false,'i': []},
                        'Fan Cooled': {'c': false,'i': []},
                        'Water': {'c': false,'i': []},
                        'Gas Chiller': {'c': false,'i': []},
                        'Swamp Cooler': {'c': false,'i': []}
                    }
                },
                'Cooling Systems Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            },
            'Evaporative Coil or Heat Pump (Inside)': { //NEEDS MORE DATA.
                    'Show Value': {
                        'type':'hidden',
                        'showvalue':false
                    },
                'Brand Name': {
                    'required': false, 'showvalue' : false,
                    'type': 'textbox',
                    'value': {
                        'Bryant': {'c': false,'i': []},
                        'OTHER (NEEDS MORE DATA)': {'c': false,'i': []}
                    }
                },
                'Capacity': {
                    'required': false, 'showvalue' : false,
                    'type': 'textbox',
                    'value': {
                        'n/a': {'c': false,'i': []},
                        'OTHER (NEEDS MORE DATA)': {'c': false,'i': []}
                    }
                },
                'Year of Manufacture': {
                    'required': false, 'showvalue' : false,
                    'type': 'number',
                    'value': ''
                },
                'Model #': {
                    'required': false, 'showvalue' : false,
                    'type': 'textbox',
                    'value': ''
                },
                'Serial #': {
                    'type': 'textbox',
                    'value': ''
                },
                'Evaporative Coil or Heat Pump Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            },
            'Compressor/Condenser (Outside)': { //NEEDS MORE DATA.
                'Show Value': {
                    'type':'hidden',
                    'showvalue':false
                },
                'Brand Name': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Bryant': {'c': false,'i': []},
                        'OTHER (NEEDS MORE DATA)': {'c': false,'i': []}
                    }
                },
                'Capacity': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'n/a': {'c': false,'i': []},
                        'OTHER (NEEDS MORE DATA)': {'c': false,'i': []}
                    }
                },
                'Year of Manufacture': {
                    'required': false, 'showvalue' : false,
                    'type': 'number',
                    'value': ''
                },
                'Model #': { //NEED TEXT FIELD ENTRY HERE.
                    'required': false, 'showvalue' : false,
                    'type': 'textbox',
                    'value': ''
                },
                'Serial #': { //NEED TEXT FIELD ENTRY HERE
                    'required': false, 'showvalue' : false,
                    'type': 'textbox',
                    'value': ''
                },
                'Condition': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Uneven Base': {'c': false,'i': []},
                        'Inadequate Base Height': {'c': false,'i': []},
                        'Obstructed Flow': {'c': false,'i': []}
                    }
                },
                'Refrigerant Lines': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Leaking': {'c': false,'i': []},
                        'Damaged': {'c': false,'i': []},
                        'Worn': {'c': false,'i': []},
                        'Insulation Missing': {'c': false,'i': []}
                    }
                },
                'Compressor/Condensor Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            }
        },
        'Electrical': {
            'Electrical System': {
                'Show Value': {
                    'type':'hidden',
                    'showvalue':false
                },
                'Conditions': {
                    'required': false, 'showvalue' : false,
                    'type': 'presettext',
                    'showcontent': true,
                    'content': 'The inspection of the readily visible electrical system includes the service drop through the main panel; sub- panels including feeders; branch circuits, connected devices, and lighting fixtures, and describes any deficiencies of these systems or components. The report defines the type of primary service, whether overhead or underground, voltage, amperage, over-current protection devices (fuses or breakers) by inspecting the main and branch circuit conductors for proper over-current protection and condition by visual observation after removal of the readily accessible electrical main and sub-panel cover(s) where applicable, any circuit breaker panel or sub-panel known within the home inspection profession to have safety concerns, identifies whether or not existence of a connected service- grounding conductor and service-grounding electrode can be confirmed, and the presence or absence of solid conductor aluminum branch circuits, verifies the operation of a representative number of accessible switches, receptacles and light fixtures, the grounding and polarity of a representative number of receptacles (particularly in close proximity to plumbing fixtures or at the exterior), the function or absence of ground fault circuit interrupter (GFCI) protection and arc-fault circuit interrupter (AFCI) protection where recommended by industry standards.'
                },
                'Limitations': {
                    'required': false, 'showvalue' : false,
                    'type': 'presettext',
                    'showcontent': true,
                    'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-110 of the Washington State Dept. of Licensing, the inspector is not required to: insert any tool, probe or testing device into the main or sub-panels, activate electrical systems or branch circuits that are not energized, operate circuit breakers, service disconnects or remove fuses, verify the continuity of connected service ground(s), or test every switch, receptacle, and fixture, move any objects, furniture, or appliances to gain access to any electrical component, remove switch and receptacle cover plates, dismantle any electrical device or control, except for the removal of the dead-front covers from the main service panel and sub-panels, or inspect electrical equipment thatAPOSTRPHEs not readily accessible, or ancillary systems, including but not limited to: timers, security systems, low voltage relays, smoke/heat detectors, antennas, intercoms, electrical de- icing tapes, lawn sprinkler wiring, swimming pool or spa wiring, central vacuum systems.(BOLD THIS) Solid conductor aluminum wiring may be hazardous and if reported, a licensed electrician should inspect the system to ensure itAPOSTROPHEs safe. Homes without ground fault protection should have GFCI devices installed, replaced, or upgraded where recommended by industry standards.(BOLD THIS)'
                },
                'Main Service Entry': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Underground': {'c': false,'i': []},
                        'Yard Post': {'c': false,'i': []},
                        'Not Visible/Accessible': {'c': false,'i': []},
                        'In Conduit': {'c': false,'i': []},
                        'Overhead': {'c': false,'i': []},
                        'Pole Unstable': {'c': false,'i': []},
                        '3 Cables': {'c': false,'i': []},
                        '4 Cables': {'c': false,'i': []},
                        'Copper': {'c': false,'i': []},
                        'Aluminum': {'c': false,'i': []}
                    }
                },
                'Condition 1': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Inadequate Clearances': {'c': false,'i': []},
                        'Damage': {'c': false,'i': []},
                        'Hazard': {'c': false,'i': []}
                    }
                },
                'Service Size': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'AMPS (NEED MORE DATA)': {'c': false,'i': []},
                        'VOLTS (NEED MORE DATA)': {'c': false,'i': []}
                    }
                },
                'Ground Connection': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Visible': {'c': false,'i': []}
                    }
                },
                'Meter Location': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Exterior Wall': {'c': false,'i': []},
                        'Yard Post': {'c': false,'i': []},
                        'Mechanical Closet': {'c': false,'i': []},
                        'Not Visible/Locked': {'c': false,'i': []}
                    }
                },
                'Meter Condition': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Inadequate Access': {'c': false,'i': []},
                        'Damage': {'c': false,'i': []},
                        'Hazard': {'c': false,'i': []}
                    }
                },
                'Grounding': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Not Visible': {'c': false,'i': []},
                        'Ground Rods': {'c': false,'i': []},
                        'Ufer': {'c': false,'i': []},
                        'Bonded to Water/Gas Piping': {'c': false,'i': []}
                    }
                },
                'Ground Wiring': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Copper': {'c': false,'i': []},
                        'Aluminum': {'c': false,'i': []},
                        'Missing': {'c': false,'i': []},
                        'Not Visible/Accessible': {'c': false,'i': []}
                    }
                },
                'Condition 2': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Loose Clamp/Lug': {'c': false,'i': []},
                        'Missing': {'c': false,'i': []},
                        'Improper Bond': {'c': false,'i': []},
                        'Too Far From Entry': {'c': false,'i': []}
                    }
                },
                'Main Electrical Disconnect Location': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'With Meter': {'c': false,'i': []},
                        'Inside Main Panel': {'c': false,'i': []},
                        'Near Panel': {'c': false,'i': []},
                        'Fuse': {'c': false,'i': []},
                        'Breaker': {'c': false,'i': []},
                        'Switch': {'c': false,'i': []},
                        'Split-Bus': {'c': false,'i': []},
                        'Overloaded (>6 Hand Motions)': {'c': false,'i': []}
                    }
                },
                'Main Panel': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Not Visible/Accessible': {'c': false,'i': []},
                        'Blocked': {'c': false,'i': []},
                        'Not Evaluated': {'c': false,'i': []}
                    }
                },
                'Reason for Non Evaluation': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'n/a': {'c': false,'i': []},
                        'OTHER (NEED MORE DATA)': {'c': false,'i': []
                        }
                    }
                },
                'Breakers or Fuses': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Breakers': {'c': false,'i': []},
                        'Fuses': {'c': false,'i': []}
                    }
                },
                'Amps': { //NEED MORE DATA
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'NEED MORE DATA': {'c': false,'i': []}
                    }
                },
                'Volts': { //NEED MORE DATA
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        '240': {'c': false,'i': []},
                        'OTHER (NEED MORE DATA)': {'c': false,'i': []
                        }
                    }
                },
                'Breaker(s)': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'GFCI Breakers': {'c': false,'i': []},
                        'AFCI Breakers': {'c': false,'i': []},
                        'n/a': {'c': false,'i': []}
                    }
                },
                'Location': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Garage': {'c': false,'i': []},
                        'Basement': {'c': false,'i': []},
                        'With Meter': {'c': false,'i': []},
                        'Exterior Wall': {'c': false,'i': []},
                        'Yard Post': {'c': false,'i': []},
                        'Interior Wall': {'c': false,'i': []},
                        'Mechanical Room': {'c': false,'i': []},
                        'Laundry Room': {'c': false,'i': []},
                        'Utility Area': {'c': false,'i': []},
                        'Crawl Space': {'c': false,'i': []}
                    }
                },
                'Branch Wiring': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Copper': {'c': false,'i': []},
                        'Almuninum': {'c': false,'i': []},
                        'Tin Clad Copper': {'c': false,'i': []},
                        'Copper Clad Aluminum': {'c': false,'i': []},
                        'Non-Metallic Sheathed': {'c': false,'i': []},
                        'BX Cable': {'c': false,'i': []},
                        'Condiut': {'c': false,'i': []},
                        'Cloth-Wrapped': {'c': false,'i': []},
                        'Knob & Tube': {'c': false,'i': []}
                    }
                },
                'Condition 3': { // What is "Condition 3"?
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Inadequate Access Clearances': {'c': false,'i': []},
                        'Dangling Wires': {'c': false,'i': []},
                        'Excessive Sheathing in Panel': {'c': false,'i': []},
                        'Double-Tapping': {'c': false,'i': []},
                        'Undersized Wiring': {'c': false,'i': []},
                        'Damage': {'c': false,'i': []},
                        'Rust': {'c': false,'i': []},
                        'Buried In Insulation': {'c': false,'i': []},
                        'Burned Breakers': {'c': false,'i': []},
                        'Dangerous Panel Type': {'c': false,'i': []},
                        'Improper Splicing': {'c': false,'i': []},
                        'Hazardous/Unsafe': {'c': false,'i': []},
                        'Recommend Professional Evaluation/Repairs': {'c': false,'i': []}
                    }
                },
                'Electrical System Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            },
            'Fixtures/Switches/Detectors': {
                'Show Value': {
                    'type':'hidden',
                    'showvalue':false
                },
                'Fixtures': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Missing/Removed': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Missing Bulbs': {'c': false,'i': []},
                        'Missing Covers': {'c': false,'i': []},
                        'Gaps': {'c': false,'i': []}
                    }
                },
                'Fixtures Condition': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Inadequate Clearances': {'c': false,'i': []},
                        'Damage': {'c': false,'i': []},
                        'Hazard': {'c': false,'i': []}
                    }
                },
                'Switches/Receptacles': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Typical Grounded': {'c': false,'i': []},
                        'Some Grounded': {'c': false,'i': []},
                        'Typical Un-Grounded': {'c': false,'i': []}
                    }
                },
                'Condition 4': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Weak/Loose': {'c': false,'i': []},
                        'Missing/Removed': {'c': false,'i': []},
                        'Missing Cover Plates': {'c': false,'i': []},
                        'Dangling/Unmounted': {'c': false,'i': []},
                        'External Splicing': {'c': false,'i': []},
                        'Gaps Into Boxes': {'c': false,'i': []},
                        'Burned': {'c': false,'i': []},
                        'Open Ground': {'c': false,'i': []},
                        'Open Neutral': {'c': false,'i': []},
                        'Reverse Polarity': {'c': false,'i': []},
                        'Ungrounded 3-Prong': {'c': false,'i': []},
                        'Damaged': {'c': false,'i': []},
                        'Hazardous/Unsafe': {'c': false,'i': []},
                        'Recommend Repair/Evaluation by Professional Electrician': {'c': false,'i': []}
                    }
                },
                'Carbon Monoxide Detectors': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Installed': {'c': false,'i': []},
                        'Missing/Recommended': {'c': false,'i': []},
                        'NOT Tested': {'c': false,'i': []}
                    }
                },
                'Smoke Detectors': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Installed': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Chirping/Low Batteries': {'c': false,'i': []},
                        'Missing': {'c': false,'i': []}
                    }
                },
                'Caution Label': {
                    'required': false, 'showvalue' : false,
                    'type': 'presettext',
                    'showcontent': true,
                    'content': 'CAUTION: Testing Detectors by pushing test buttons may be inconclusive'
                },
                'Fixtures/Switches/Detectors Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            }
        },
        'Interior': {
            'Living Room': {
                'Show Value': {
                    'type':'hidden',
                    'showvalue':false
                },
                'Conditions': {
                    'required': false, 'showvalue' : false,
                    'type': 'presettext',
                    'showcontent': true,
                    'content': 'The inspection of the interior includes the walls, ceilings, floors, windows, and doors; steps, stairways, balconies and railings. The interior walls, ceilings, and floors were inspected for indications of concealed structural deficiencies, water infiltration, or major damage. The report verifies that steps, handrails, guard-rails, stairways and landings are installed wherever necessary, and indicates when they are missing or in need of repair, or when baluster spacing exceeds four inches, the condition and operation of a representative number of windows and doors, the overall general condition of cabinets and countertops, grout, and caulking at kitchen and bathroom counters, describes any non-cosmetic deficiencies of these systems or components, and comments on the presence or absence of smoke detectors.'
                },
                'Limitations': {
                    'required': false, 'showvalue' : false,
                    'type': 'presettext',
                    'showcontent': true,
                    'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-140 of the Washington State Dept. of Licensing, the inspector is not required to verify whether all walls, floors, ceilings, doorways, cabinets and window openings are square, straight, level or plumb, operate any system or component that is shut down, not connected or otherwise inoperable, or that does not respond to normal user controls, the strength, adequacy, effectiveness, or efficiency of any system or component; causes of any condition, or deficiency the remaining service life of any system or component; or the methods, materials, or cost of corrections; future conditions including, but not limited to, failure of systems and components or report on cosmetic conditions related to the condition of interior components.'
                },
                'Entry Door(s)': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'n/a': {'c': false,'i': []},
                        'Solid Wood': {'c': false,'i': []},
                        'Metal': {'c': false,'i': []},
                        'Fiberglass': {'c': false,'i': []},
                        'Panel': {'c': false,'i': []},
                        'Hollow Core': {'c': false,'i': []}
                    }
                },
                'Entry Door(s) Condition': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Sagging/Settled': {'c': false,'i': []},
                        'Rubbing/Binding': {'c': false,'i': []},
                        'Damaged': {'c': false,'i': []},
                        'Hardware Issues': {'c': false,'i': []},
                        'Doorbell Inoperable': {'c': false,'i': []}
                    }
                },
                'Weatherstrip': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Missing/Damaged': {'c': false,'i': []},
                        'Poor Seal': {'c': false,'i': []},
                        'Ineffective Threshold': {'c': false,'i': []}
                    }
                },
                'Window(s)': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Inaccessible': {'c': false,'i': []},
                        'Difficult To Operate (Needs Adjustment/Lubrication)': {'c': false,'i': []},
                        'Missing Hardware': {'c': false,'i': []},
                        'Inadequate Security': {'c': false,'i': []},
                        'Failed Thermal Seals': {'c': false,'i': []},
                        'Broken Panes': {'c': false,'i': []},
                        'Stained': {'c': false,'i': []},
                        'Weathered Sills': {'c': false,'i': []},
                        'Mold/Mildew': {'c': false,'i': []},
                        'Damage': {'c': false,'i': []},
                        'Deterioration': {'c': false,'i': []}
                    }
                },
                'Ceiling Fan': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'n/a': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Satisfactory': {'c': false,'i': []}
                    }
                },
                'Heat Source': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Missing/Inadequate': {'c': false,'i': []}
                    }
                },
                'Lights/Switches/Receptacles (Refer To Electrical Section/SUB-HEADING??/DO WE NEED THIS SECTION??)': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Appeared Functional': {'c': false,'i': []},
                        'Loose/Worn': {'c': false,'i': []},
                        'Missing': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Missing Cover Plates': {'c': false,'i': []},
                        'Ungrounded 3-Prong': {'c': false,'i': []},
                        'Inoperable GFCI': {'c': false,'i': []},
                        'Missing GFCI Protection': {'c': false,'i': []},
                        'Reversed Polarity': {'c': false,'i': []},
                        'OG/RP Within 6 Feet': {'c': false,'i': []},
                        'Burned': {'c': false,'i': []},
                        'Exposed Wires': {'c': false,'i': []},
                        'Hazardous/Unsafe': {'c': false,'i': []},
                        'Refer To Electrical Section': {c: true,'i': []},
                        'Recommend Professional Evaluation': {'c': false,'i': []}
                    }
                },
                'Comments': {
                    'type': 'textbox',
                    'value': {} //TEXT ENTRY HERE
                },
                'Living Room Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            },
            'Kitchen': {
                'Show Value': {
                    'type':'hidden',
                    'showvalue':false
                },
                'Appliances': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Sink Disposer': {'c': false,'i': []},
                        'Fridge': {'c': false,'i': []},
                        'Dishwasher': {'c': false,'i': []},
                        'Oven': {'c': false,'i': []},
                        'Range': {'c': false,'i': []},
                        'Microwave': {'c': false,'i': []},
                        'Warmer': {'c': false,'i': []},
                        'Trash Compactor': {'c': false,'i': []},
                        'Cooler': {'c': false,'i': []},
                        'Water Filter': {'c': false,'i': []},
                        'Instant Hot': {'c': false,'i': []}
                    }
                },
                'Cabinets': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Damaged': {'c': false,'i': []},
                        'Worn Finish': {'c': false,'i': []},
                        'Loose Drawers/Hinges': {'c': false,'i': []}
                    }
                },
                'Countertops': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Granite': {'c': false,'i': []},
                        'Laminate': {'c': false,'i': []},
                        'Tile': {'c': false,'i': []},
                        'Slab': {'c': false,'i': []}
                    }
                },
                'Countertops Condition': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Worn': {'c': false,'i': []},
                        'Damaged': {'c': false,'i': []}
                    }
                },
                'Backsplash & Self Edge': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal/Worn': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []}
                    }
                },
                'Caulking': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Worn/Cracked/Gaps': {'c': false,'i': []},
                        'Improve at Sink, Back-Splash, Counters, or Fixtures': {'c': false,'i': []}
                    }
                },
                'Grout': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Cracked/Missing': {'c': false,'i': []},
                        'Loose': {'c': false,'i': []},
                        'Water Damage': {'c': false,'i': []},
                        'Recommend Sealing': {'c': false,'i': []}
                    }
                },
                'Exhaust Fan': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Missing': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []}
                    }
                },
                'Heat Source': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Missing/Inadequate': {'c': false,'i': []}
                    }
                },
                'Lights/Switches/Receptacles (Refer To Electrical Section)': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Appeared Functional': {'c': false,'i': []},
                        'Loose/Worn': {'c': false,'i': []},
                        'Missing': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Missing Cover Plates': {'c': false,'i': []},
                        'Ungrounded 3-Prong': {'c': false,'i': []},
                        'Inoperable GFCI': {'c': false,'i': []},
                        'Missing GFCI Protection': {'c': false,'i': []},
                        'Reversed Polarity': {'c': false,'i': []},
                        'OG/RP Within 6 Feet': {'c': false,'i': []},
                        'Burned': {'c': false,'i': []},
                        'Exposed Wires': {'c': false,'i': []},
                        'Hazardous/Unsafe': {'c': false,'i': []},
                        'Recommend Professional Evaluation': {'c': false,'i': []}
                    }
                },
                'Kitchen Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            },
            'Laundry': {
                'Show Value': {
                    'type':'hidden',
                    'showvalue':false
                },
                'Appliances': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'None': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Washer': {'c': false,'i': []},
                        'Dryer': {'c': false,'i': []},
                        'WH': {'c': false,'i': []},
                        'Furnace': {'c': false,'i': []},
                        'Conditioner': {'c': false,'i': []}
                    }
                },
                'Dryer': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Electric': {'c': false,'i': []},
                        'Gas': {'c': false,'i': []},
                        'Inoperable/OFF': {'c': false,'i': []},
                        'Cap Needed': {'c': false,'i': []},
                        'Hazard(s)': {'c': false,'i': []},
                        'Recommend Re-Evaluation': {'c': false,'i': []}
                    }
                },
                'Exhausted': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Wall': {'c': false,'i': []},
                        'Ceiling': {'c': false,'i': []},
                        'Floor': {'c': false,'i': []}
                    }
                },
                'Exhaust Appears': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Clogged/Loose/Poor': {'c': false,'i': []}
                    }
                },
                'Exhaust Fan': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Weak/Noisy': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Missing': {'c': false,'i': []}
                    }
                },
                'Laundry Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            },
            'Bathroom(s)': {
                'Show Value': {
                    'type':'hidden',
                    'showvalue':false
                },
                'Walls/Ceilings': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'GWB': {'c': false,'i': []},
                        'Lath & Plaster': {'c': false,'i': []},
                        'Acoustic Tile': {'c': false,'i': []},
                        'Paneling': {'c': false,'i': []},
                        'Open Beam': {'c': false,'i': []}
                    }
                },
                'Condition 5': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Stains/Mildew': {'c': false,'i': []},
                        'Cracks': {'c': false,'i': []},
                        'Repairs': {'c': false,'i': []},
                        'PACM': {'c': false,'i': []}
                    }
                },
                'Floors': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Covered': {'c': false,'i': []},
                        'Sloping': {'c': false,'i': []},
                        'Squeaks': {'c': false,'i': []},
                        'Damaged': {'c': false,'i': []},
                        'Fungal Rot': {'c': false,'i': []}
                    }
                },
                'Caulking': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Worn/Cracked/Gaps': {'c': false,'i': []},
                        'Improve At Sink, Back-Splash, Tub/Shower Surround/ or Floor': {'c': false,'i': []}
                    }
                },
                'Heat': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Yes': {'c': false,'i': []},
                        'No': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []}
                    }
                },
                'Exhaust Fan': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Yes': {'c': false,'i': []},
                        'No': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []}
                    }
                },
                'Lights/Switches/Receptacles (Refer To Electrical Section)': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Appeared Functional': {'c': false,'i': []},
                        'Loose/Worn': {'c': false,'i': []},
                        'Missing': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Missing Cover Plates': {'c': false,'i': []},
                        'Ungrounded 3-Prong': {'c': false,'i': []},
                        'Inoperable GFCI': {'c': false,'i': []},
                        'Missing GFCI Protection': {'c': false,'i': []},
                        'Reversed Polarity': {'c': false,'i': []},
                        'OG/RP Within 6 Feet': {'c': false,'i': []},
                        'Burned': {'c': false,'i': []},
                        'Exposed Wires': {'c': false,'i': []},
                        'Hazardous/Unsafe': {'c': false,'i': []},
                        'Recommend Professional Evaluation': {'c': false,'i': []}
                    }
                },
                'Bathroom Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            },
            'General': {
                'Show Value': {
                    'type':'hidden',
                    'showvalue':false
                },
                'Walls/Ceilings': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'GWB': {'c': false,'i': []},
                        'Lath & Plaster': {'c': false,'i': []},
                        'Acoustic Tile': {'c': false,'i': []},
                        'Paneling': {'c': false,'i': []},
                        'Open Beam': {'c': false,'i': []}
                    }
                },
                'Condition 6': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Stains': {'c': false,'i': []},
                        'Moisture/Mildew': {'c': false,'i': []},
                        'Water Damage': {'c': false,'i': []},
                        'Settling': {'c': false,'i': []},
                        'Truss Uplift': {'c': false,'i': []},
                        'Nail Pops': {'c': false,'i': []},
                        'Holes': {'c': false,'i': []},
                        'Cracks': {'c': false,'i': []},
                        'Inadequate Repairs/Texture': {'c': false,'i': []},
                        'Sooting': {'c': false,'i': []},
                        'PACM': {'c': false,'i': []},
                        'Hazardous/Unsafe': {'c': false,'i': []},
                        'Recommend Professional Evaluation': {'c': false,'i': []}
                    }
                },
                'Floor Coverings': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Hard Surfaces (Tile/Stone)': {'c': false,'i': []},
                        'Hardwood/Laminate': {'c': false,'i': []},
                        'Vinyl': {'c': false,'i': []},
                        'Carpet': {'c': false,'i': []}
                    }
                },
                'Condition 7': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Excessive Wear': {'c': false,'i': []},
                        'Squeaks': {'c': false,'i': []},
                        'Stains': {'c': false,'i': []},
                        'Damage': {'c': false,'i': []},
                        'Sloping': {'c': false,'i': []},
                        'Uneven Surfaces': {'c': false,'i': []},
                        'Holes': {'c': false,'i': []},
                        'Wrinkled Carpet': {'c': false,'i': []},
                        'Trip Hazard(s)': {'c': false,'i': []},
                        'Repair(s)': {'c': false,'i': []}
                    }
                },
                'Interior Doors': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Passage': {'c': false,'i': []},
                        'Pocket': {'c': false,'i': []},
                        'Double': {'c': false,'i': []},
                        'Bi-Fold': {'c': false,'i': []},
                        'Bi-Pass': {'c': false,'i': []},
                        'Accordion': {'c': false,'i': []}
                    }
                },
                'Condition 8': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Inaccessible': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Missing/Removed': {'c': false,'i': []},
                        'Missing Hardware': {'c': false,'i': []},
                        'Settled/Rubbing': {'c': false,'i': []},
                        'Improperly Hung/Sagging': {'c': false,'i': []},
                        'Holes': {'c': false,'i': []},
                        'Stains': {'c': false,'i': []},
                        'Cracked/Split Jambs': {'c': false,'i': []},
                        'Damage': {'c': false,'i': []},
                        'Inadequate Repairs': {'c': false,'i': []},
                        'Recommend Servicing/Adjusting': {'c': false,'i': []}
                    }
                },
                'Window Type(s)': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Sliders': {'c': false,'i': []},
                        'Fixed': {'c': false,'i': []},
                        'Single Hung': {'c': false,'i': []},
                        'Double Hung': {'c': false,'i': []},
                        'Awning': {'c': false,'i': []}
                    }
                },
                'Window(s) Condition': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Satisfactory': {'c': false,'i': []},
                        'Marginal': {'c': false,'i': []},
                        'Poor': {'c': false,'i': []},
                        'Difficult To Operate': {'c': false,'i': []},
                        'Improve Security': {'c': false,'i': []},
                        'Missing Hardware': {'c': false,'i': []},
                        'Broken Panes': {'c': false,'i': []},
                        'Failed Thermal Seals': {'c': false,'i': []},
                        'Verify Bedroom Egress': {'c': false,'i': []},
                        'Stained': {'c': false,'i': []},
                        'Weathered Sills': {'c': false,'i': []},
                        'Mold/Mildew': {'c': false,'i': []},
                        'Damage': {'c': false,'i': []},
                        'Deterioration': {'c': false,'i': []}
                    }
                },
                'Safety Concern': {
                    'required': false, 'showvalue' : false,
                    'type': 'presettext',
                    'showcontent': true,
                    'content': 'Where Bedrooms lack a door directly to the outside, a window should serve as an emergency egress.  Recommend regular evaluation and service (lubrication, adjustment) of bedroom windows to verify smooth operation and to ensure adequate emergency egress.'
                },
                'Lights/Switches/Receptacles (Refer To Electrical Section)/DUPLICATE?!?!': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Appeared Functional': {'c': false,'i': []},
                        'Loose/Worn': {'c': false,'i': []},
                        'Missing': {'c': false,'i': []},
                        'Inoperable': {'c': false,'i': []},
                        'Missing Cover Plates': {'c': false,'i': []},
                        'Ungrounded 3-Prong': {'c': false,'i': []},
                        'Inoperable GFCI': {'c': false,'i': []},
                        'Missing GFCI Protection': {'c': false,'i': []},
                        'Reversed Polarity': {'c': false,'i': []},
                        'OG/RP Within 6 Feet': {'c': false,'i': []},
                        'Burned': {'c': false,'i': []},
                        'Exposed Wires': {'c': false,'i': []},
                        'Hazardous/Unsafe': {'c': false,'i': []},
                        'Recommend Professional Evaluation': {'c': false,'i': []}
                    }
                },
                'General Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
            }
        },
        'Life/Safety': {
            'Potential Safety Concerns': {
                'Show Value': {
                    'type':'hidden',
                    'showvalue':false
                },
                'Conditions': {
                    'required': false, 'showvalue' : false,
                    'type': 'presettext',
                    'showcontent': true,
                    'content': 'This list of potential hazards is not complete, and provides only a general notification of some of the possible life safety or health concerns associated with building materials, systems, components, and the forces of nature that may impact them. Those particular safety concerns, which fall within the scope of a specific category, may be noted here, or in their applicable section(s). In addition, the inspection report may exclude those systems or components that a client specifically requests not to be included in the scope of the inspection. Comments and information in this section are provided in an effort to help educate the client regarding possible safety risks, which may need further evaluation, and are NOT to take the place of expert or professional advice.'
                },
                'Limitations': {
                    'required': false, 'showvalue' : false,
                    'type': 'presettext',
                    'showcontent': true,
                    'content': 'The Home Inspection Standards of Practice of the Washington State Department of Licensing state that the inspector is NOT required to report the presence of potentially hazardous plants or animals including, but not limited to, wood destroying insects or diseases harmful to humans; the presence of any environmental hazards including, but not limited to mold, toxins, carcinogens, noise, contaminants, asbestos, lead, water, soil, air quality, or other environmental issues, or the effectiveness of any system installed or methods utilized to control or remove suspected hazardous substances. Unless specifically stated in the standards of practice, or in writing in the pre-inspection agreement, no safety hazards are included in the investigation.'
                },
                'Tripping/Falling Hazard(s)': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'n/a': {'c': false,'i': []},
                        'Unsafe/Uneven Walking Surfaces': {'c': false,'i': []},
                        'Re-Evaluate': true,
                        'Interior': {'c': false,'i': []},
                        'Exterior': {'c': false,'i': []},
                        'Steep Slope/Drop-Off': {'c': false,'i': []},
                        'Retaining Wall': {'c': false,'i': []},
                        'Driveway/Walkway(s)': {'c': false,'i': []},
                        'Landing': {'c': false,'i': []},
                        'Balcony': {'c': false,'i': []},
                        'Patio': {'c': false,'i': []},
                        'Deck': {'c': false,'i': []},
                        'Steps/Stairs': {'c': false,'i': []},
                        'Missing Guard/Handrail(s)': {'c': false,'i': []},
                        'Low Guard/Handrail(s)': {'c': false,'i': []},
                        'Root Heaving': {'c': false,'i': []},
                        'Erosion': {'c': false,'i': []},
                        'Cracks/Gaps/Missing Dividers': {'c': false,'i': []}
                    }
                },
                'Fire Hazards': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'n/a': {'c': false,'i': []},
                        'None': {'c': false,'i': []},
                        'Missing/Inadequate Firewall': {'c': false,'i': []},
                        'Missing/Inadequate Fire-Door': {'c': false,'i': []},
                        'Excessive Storage': {'c': false,'i': []},
                        'Excessive Heat': {'c': false,'i': []},
                        'Cellulose Debris': {'c': false,'i': []},
                        'Roof Tear-Off Debris': {'c': false,'i': []},
                        'Entrapment/Locks': {'c': false,'i': []},
                        'Improve Bedroom Egress': {'c': false,'i': []},
                        'Verify Adequate CO & Fire Alarms': {'c': false,'i': []}
                    }
                },
                'Pest Related': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'None': {'c': false,'i': []},
                        'Ponding/Breeding Water': {'c': false,'i': []},
                        'Potential Points of Pest Entry': {'c': false,'i': []},
                        'Rat Droppings Toxins': {'c': false,'i': []},
                        'Bee/Wasp Nests': {'c': false,'i': []},
                        'Racoon': {'c': false,'i': []}
                    }
                },
                'Poisen Baits': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Insect': {'c': false,'i': []},
                        'Rodent': {'c': false,'i': []}
                    }
                },
                'Building Materials (Refer To Specific Sections)': {
                    'required': false, 'showvalue' : false,
                    'type': 'checkbox',
                    'value': {
                        'Missing Window Safety Glass': {'c': false,'i': []},
                        'Electrical Shock Hazard(s)': {'c': false,'i': []},
                        'Bio-Growth/Mold/Mildew': {'c': false,'i': []},
                        'PACM': {'c': false,'i': []},
                        'Friable ACM': {'c': false,'i': []},
                        'Lead': {'c': false,'i': []},
                        'Airborne/VOCs': {'c': false,'i': []},
                        'Potential Hidden Hazard(s)': {'c': false,'i': []}
                    }
                },
                'Comments': {
                    'required': false, 'showvalue' : false,
                    'type': 'textbox',
                    'value': {}
                },
                'Potential Safety Concern Images': {
                            'type': 'image',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }
                //INSERT CONSUMER NOTICE(S) CONCERNING HAZARDS OR DEFICIENCES, LEAD, AND ASBESTOS)
            }
        },
        'Photo Appendix': {
            'Show Value': {
                'type':'hidden',
                'showvalue':false
            },
            'Additional Photos for Further Clarification': {
                'Photo Appendix Images': {
                            'type': 'photoAppendix',
                            'content': [
                       // {'title':'', 'i':''}
                    ]
                        }

            }

        }
        };

        var headings = [
    'Field Notes',
    'Site',
    'Exterior',
    'Roofing',
    'Structural',
    'Thermal',
    'Plumbing',
    'Heating',
    'Cooling',
    'Electrical',
    'Interior',
    'Life/Safety',
    'Photo Appendix'

];

        var current = "Field Notes";
