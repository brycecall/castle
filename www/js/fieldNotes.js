        var fieldNotes = {
            'Client Info': {
                'Clientinfo': {
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
                    'type': 'text',
                    'value': 'Z.0000'
                },
                'Report Date': {
                    'type':'date',
                    'value': ''
                }
            },
            'Property Specifications': {
                'Conditions': {
                    'type': 'presettext',
                    'showcontent': true,
                    'content': 'This Report concerns the visual [INSERT OPTION] inspection of an approximately [CALCULATE & INSERT AGE] old, [INSERT SQFT], [INSERT TYPE OF HOME],[INSERT PROPERTY USE],[INSERT NUMBER OF STORIES],[INSERT HOUSE FRAME],[INSERT PROPERTY TYPE],[INSERT CONFIGURATIONS], built in [INSERT YEAR].  The main entrance, driveway, or street access appeared to be facing predominantely toward the [INSERT PROPERTY ORIENTATION].  The street surface was [INSERT DRIVEWAY TYPE], and vehicle parking was available [INSERT VEHICLE PARKING]. ...   The locations of the main utility controls, shut-off valves, and/or disconnects are noted in the applicable mechanical sections.'
                },
                'Limitations': {
                    'type': 'presettext',
                    'showcontent': true,
                    'content': 'Detached outbuildings, seasonally visible defects, poorly accessible components, areas that may have been hidden and/ or areas containing significant furnishings or storage are not included in the scope of this inspection.'
                },
                'Inspection Type': {
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
                    'type': 'number',
                    'value': ''
                },
                'Squarefeet of the Property': {
                    'type': 'number',
                    'value': 0
                },
                'Type of Home': {
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
                    'type': 'checkbox',
                    'value': {
                        'w/ Lower Parking Garage': {c:false, i:''},
                        'w/ Basement & Garage': {c:false, i:''},
                        'w/ Garage': {c:false, i:''},
                        'w/ Garage & Crawlspace': {c:false, i:''},
                        'w/ Full Basement': {c:false, i:''},
                        'w/ Daylight Basement': {c:false, i:''},
                        'w/ Basement & Crawlspace(s)': {c:false, i:''},
                        'w/ Crawlspace': {c:false, i:''},
                        'w/ Slab-On-Grade': {c:false, i:''},
                        'Over Adjoining Unit(s)': {c:false, i:''},
                        'Over Adjoining Basement Unit': {c:false, i:''}
                    }
                },
                'Property Orientation': {
                    'type': 'radio',
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
                    'type': 'checkbox',
                    'value': {
                        'At Curbside': {c:false, i:''},
                        'In a Rear Alley': {c:false, i:''},
                        'In the Driveway': {c:false, i:''},
                        'In an Attached Garage(s)': {c:false, i:''},
                        'In a Detached Garage(s)': {c:false, i:''},
                        'In an Attached Carport': {c:false, i:''},
                        'In a Detached Carport': {c:false, i:''},
                        'In a Covered Parking Space': {c:false, i:''},
                        'In an Open Parking Space': {c:false, i:''},
                        'In a Secured Parking Garage': {c:false, i:''},
                        'In an Open Parking Garage': {c:false, i:''},
                        'In an Open,Striped Parking Lot': {c:false, i:''}
                    },
                },
                'Utilities': {
                    'type': 'radio',
                    'content': [
                             'Electricity',
                             'Electricity and Water',
                             'Electricity, Water, and Gas',
                             'Electricity, Water, and Oil',
                             'Electricity and Propane',
                             'Electricity, Water, and Propane'
                         ],
                    'value': ''
                },
                'What Utilities were OFF': {
                    'type': 'checkbox',
                    'value': {
                        'Electricity': {c:false, i:''},
                        'Water': {c:false, i:''},
                        'Gas': {c:false, i:''},
                        'Oil': {c:false, i:''},
                        'Propane': {c:false, i:''}
                    }
                },
                'Direction': {
                    'type': 'radio',
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

                }

            }
        }
