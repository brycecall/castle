      var fieldNotes = {
            'Client Info': {
                'Clientinfo': {
                    'type': 'clientinfo',
                    'value': {
                        'firstName': 'Rod',
                        'lastName': 'Beacham',
                        'address': '1234 N Beacham Dr.',
                        'addressTwo': '',
                        'city': 'Seattle',
                        'state': 'Washington',
                        'postalCode': '83427'
                    }
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
                    'type': 'dial',
                    'value': {
                        'Full': {c:false, i:''},
                        'Partial': {c:false, i:''},
                        'Abbreviated': {c:false, i:''},
                        'Ancillary': {c:false, i:''},
                        'Limited': {c:false, i:''},
                        '203(k)': {c:false, i:''},
                        'Rehabilitation': {c:false, i:''}
                    }
                },
                'Year Built': { //NEED SPIN DIAL
                    'type': 'dial',
                    'value': {
                        '1': {c:false, i:''},
                        '2': {c:false, i:''},
                        '3': {c:false, i:''},
                        '4': {c:false, i:''},
                        'Spin Dial': {c:false, i:''}
                    }
                },
                'Squarefeet of the Property': { //NEEDS NUMBER ENTRY
                    'type': 'number',
                    'value': 1800
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
                    'value': 'Commercial'
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
                    'value': 'Three-Story'
                },
                'House Frame': { //radio
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
                    'value': 'High-Rise'
                },
                'Configurations': {
                    'type': 'checkbox',
                    'value': {
                        'w/ Lower Parking Garage': {c:true, i:'./img/icon.png'},
                        'w/ Basement & Garage': {c:true, i:''},
                        'w/ Garage': {c:false, i:''},
                        'w/ Garage & Crawlspace': {c:true, i:'./img/rod.png'},
                        'w/ Full Basement': {c:false, i:''},
                        'w/ Daylight Basement': {c:true, i:'./img/icon.png'},
                        'w/ Basement & Crawlspace(s)': {c:false, i:''},
                        'w/ Crawlspace': {c:false, i:''},
                        'w/ Slab-On-Grade': {c:false, i:''},
                        'Over Adjoining Unit(s)': {c:true, i:'./img/rod.png'},
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
