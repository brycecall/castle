$scope.items = [
    {
        'title': 'Site',
        'subpage': [
            {
                'subtitle': 'Site',
                'conditions': 'The inspection of the site includes the building perimeter, land grade, and water drainage directly adjacent to the foundation; trees and vegetation that adversely affect the structure; walks, grade steps, driveways, patios, and retaining walls contiguous with the structure.  (NEW PARAGRAPH HERE) The report describes the material used for driveways, walkways, patios and other flatwork around the home, the serviceability of the driveways, steps, walkways, patios, flatwork and retaining walls contiguous with the structure, proper grading and drainage slope, vegetation in close proximity to the home, and a description of any deficiencies of these systems or components.',
                'showconditions': true,
                'limitations': 'According to the Home Inspection Standards of Practice WAC § 308-408C-170 of the Washington State Dept. of Licensing, the inspector is not required to: (1)inspect fences, privacy walls or retaining walls that are not contiguous with the structure, (2)report the condition of soil, trees, shrubs or vegetation unless they adversely affect the structure, (3)evaluate hydrological or geological conditions, (4)determine the adequacy of bulkheads, sea-walls, break- walls, and docks.',
                'showlimitations': true,
                'checkboxes': {
                    'Driveway': {
                        'n/a': false,
                        'Concrete': false,
                        'Asphalt': false,
                        'Pavers/stone/brick': false,
                        'Dirt/gravel': false

                    },
                    'Driveway Condition': {
                        'Satisfactory': false,
                        'Marginal': false,
                        'Poor': false,
                        'Pitched towards home': false,
                        'Typical cracks': false,
                        'Large cracks': false,
                        'Root heaving': false,
                        'Uneven': false,
                        'Trip/Falling Hazard': false
                    },
                    'Patio': {
                        'n/a': false,
                        'Concrete': false,
                        'Paver/stone/brick': false,
                        'Wood/Composite': false,
                        'Covered': false
                    },
                    'Patio Condition': {
                        'Satisfactory': false,
                        'Marginal': false,
                        'Poor': false,
                        'Typical cracks': false,
                        'Large cracks': false,
                        'Gaps': false,
                        'Holes': false,
                        'Mildew': false,
                        'Damage': false,
                        'Settled': false,
                        'Uneven Surface': false,
                        'Trip/Falling Hazard': false
                    },
                    'Walkways and Steps': {
                        'n/a': false,
                        'Uneven': false,
                        'Large cracks': false,
                        'Root heaving': false,
                        'Moss build-up': false,
                        'Missing spacers': false,
                        'Settled': false,
                        'Trip hazard': false,
                        'Missing handrails': false,
                        'Missing safety glass': false
                    },
                    'Retaining Wall': {
                        'None': false,
                        'TYPE (Needs Greater Definition)': false
                    },
                    'Retaining Wall Condition': {
                        'Satisfactory': false,
                        'Marginal': false,
                        'Poor': false,
                        'Damaged': false,
                        'Leaning': false,
                        'Leaking/Drainage Concern': false,
                        'Trip/Falling Hazard': false
                    },
                    'Safety Fencing at:': {
                        'n/a': false,
                        'Water Feature': false,
                        'Drop-off/Retaining Wall': false,
                        'Steep Slope': false,
                        'TYPE (Needs Greater Definition)': false
                    },
                    'Safety Fencing Condition': {
                        'Satisfactory': false,
                        'Maginal': false,
                        'Poor': false,
                        'Missing': false,
                        'Trip/Falling Hazard': false,
                        'Leaning': false,
                        'Damaged': false,
                        'Verify Adequate Height': false,
                        'Hazardous': false,
                        'Re-Evaluate': false
                    },
                    'Landscaping': {
                        'Not Inspected': false,
                        'Poor Earth-to-Wood Separation': false,
                        'Yard Steps': false,
                        'Drainage': false,
                        'Negative Surrounding Grade (sloping toward building)': false,
                        'Overgrown Foliage': false,
                        'Re-Evaluate': false
                    }
                    //INCLUDE PRESET TEXT: "Safety Concerns: Uneven edges at settling cracks in concrete drives or walkways may pose potential trip hazards, and should be improved to provide a safe walking surface. Safe and secure handrails and guard rails are recommended at all stairways, and where landing heights pose a potential falling hazard."
                },
                'images': [
                    {
                        'title': 'Typical View of Driveway Condition',
                        'url': 'path',
                        'required': false
                             },
                    {
                        'title': 'Typical View of Walkway Condition',
                        'url': 'path',
                        'required': false
                             }
                     ]

                 },
            {
                'subtitle': 'Attached Decks/Balconies/Porches/Steps',
                'conditions': 'None',
                'showconditions': true,
                'limitations': 'None',
                'showlimitations': true,
                'checkboxes': {
                    'Porch/Stoop': {
                        'n/a': false,
                        'Concrete': false,
                        'Pavers/Stone/Brick': false,
                        'Wood/Composite': false,
                        'Covered': false

                    },
                    'Porch/Stoop Condition': {
                        'Satisfactory': false,
                        'Marginal': false,
                        'Poor': false,
                        'Verify Attachment': false,
                        'Loose/Missing Railings': false,
                        'Trip Hazard(s)': false,
                        'Typical Cracks': false,
                        'Large Cracks': false,
                        'Gaps/Holes': false,
                        'Weathered Finish': false,
                        'Damaged': false,
                        'Settled': false,
                        'Earth Contact': false,
                        'Mildew': false,
                        'Fungal Rot/Probed': false,
                        'Re-Evaluate': false
                    },
                    'Yard Steps': {
                        'n/a': false,
                        'Concrete': false,
                        'Uneven': false,
                        'Large Cracks': false,
                        'Root Heaving': false,
                        'Moss Build-Up': false,
                        'Missing Spacers': false,
                        'Settled': false,
                        'Trip Hazard': false,
                        'Missing Handrails': false,
                        'Missing Safety Glass': false
                    },
                    'Deck/Balcony': {
                        'n/a': false,
                        'Raised': false,
                        'Covered': false,
                        'Wood/Composite': false,
                        'Verity Attachment': false
                    },
                    'Deck/Balcony Condition': {
                        'Satisfactory': false,
                        'Marginal': false,
                        'Poor': false,
                        'Loose/Missing Railings': false,
                        'Weathered Finish': false,
                        'Damaged': false,
                        'Settled': false,
                        'Earth Contact': false,
                        'Mildew': false,
                        'Fungal Rot/Probed': false,
                        'Re-Evaluate': false
                    }
                },
                'images': [
                    {
                        'title': 'Missing Handrails At Entry Steps',
                        'url': 'path',
                        'required': false
                             },
                    {
                        'title': 'Missing Handrails At Front Porch Steps',
                        'url': 'path',
                        'required': false
                             },
                    {
                        'title': 'Missing Earth-to-Wood Separation at Rear Deck Components', //There are two (2) pictures here.
                        'url': 'path',
                        'required': false
                             },
                    {
                        'title': 'Typical View of Deck Framing',
                        'url': 'path',
                        'required': false
                             },
                    {
                        'title': 'Improve Loose Handrails',
                        'url': 'path',
                        'required': false
                             },
                    {
                        'title': 'Typical Soffit at Cantilevered Floor',
                        'url': 'path',
                        'required': false
                             },
                    {
                        'title': 'Pest & Water-Damaged Fence Components',
                        'url': 'path',
                        'required': false
                             },
                        //INCLUDE PRESET TEXT:
                        //Title: Moisture / Pest-Conducive Conditions
                        //Sub-Title: Visible Conducive Conditions for WDI/WDO (wood-destroying insects/organisms)
                        //Text:  Undesirable exterior conditions conducive to pest and/or rot concerns may exist, develop, and/or worsen over time. Recommend identification and elimination of all exposed or unprotected wood in outdoor conditions or inadequate earth-to-wood separation (less than 6 to 8 inches), negative grade (ground surfaces sloping toward building), or overgrown foliage (vegetation touching wall surfaces) and maintain improved conditions to minimize risk of pest, moisture or other potential exterior concerns."
                    {
                        'title': 'Verify Adequate Earth-to-Wood Separation at Perimeter',
                        'url': 'path',
                        'required': false
                             },
                    {
                        'title': 'Verity Adequate Foliage-to-Wood Separation at Perimeter',
                        'url': 'path',
                        'required': false
                             },
                    {
                        'title': 'Verify Positive Grade (Ground Surface Sloping Away From Building)', //There are two (2) pictures here.
                        'url': 'path',
                        'required': false
                             }
                     ]

                 },
            {
                'title': 'Exterior',
                'subpage': [
                    {
                        'subtitle': 'Exterior Wall Cladding (Siding or Exterior Wall Coverings)',
                        'conditions': 'An inspection of the exterior includes the visible wall coverings, trim, protective coatings and sealants, windows and doors, attached porches, decks, steps, balconies, handrails, guard-rails, carports, eaves, soffit(s), fascia(s) and visible exterior portions of chimneys. The findings show whether or not the exterior components were probed where deterioration was suspected or where clear indications of possible deterioration existed, and the manner in which the exterior components were inspected. (Probing is not required or performed when probing would damage any finished surface, or where no deterioration is suspected) The summary section describes some deficiencies of these systems or components. All readily accessible exterior components, visible at the perimeter, are inspected from ground level.',
                        'showconditions': true,
                        'limitations': 'According to the Home Inspection Standards of Practice WAC § 308-408C-080 of the Washington State Dept. of Licensing, the inspector is not required to inspect buildings, decks, patios, fences, retaining walls, and other structures detached from the dwelling, safety type glass or the integrity of thermal window seals, flues or verify the presence of flue liners beyond what can be safely and readily seen from the roof or the firebox of a stove or fireplace, test or evaluate the operation of security locks, devices or systems, enter areas beneath decks with less than five feet of clearance from the underside of joists to grade, evaluate the function or condition of shutters, awnings, storm doors, storm windows, screens, and similar accessories.',
                        'showlimitations': true,
                        'checkboxes': {
                            'Type(s)': {
                                'Brick': false,
                                'Stone': false,
                                'Stucco': false,
                                'Metal': false,
                                'Vinyl': false,
                                'Cement Board': false,
                                'Wood': false,
                                'Fiberboard': false,
                                'Hardi-Board/Plank': false,
                                'Panels/Sheets': false,
                                'T-111': false,
                                'Lapped': false,
                                'T&G': false,
                                'Vertical Channel': false,
                                'EIFS': false,
                                'Pre 1996 EIFS': false,
                                'Recalled LP': false,
                                'Friable PACM': false

                            },
                            'Wall Cladding Condition': {
                                'Satisfactory': false,
                                'Marginal': false,
                                'Poor': false,
                                'Loose': false,
                                'Gaps': false,
                                'Missing Pieces': false,
                                'Broken/Damaged': false,
                                'Inadequate Coverage': false,
                                'Peeling Paint': false,
                                'Weathered': false,
                                'Pest Issues': false,
                                'Cracked/Bulging': false,
                                'Mildew': false,
                                'Deteriorated': false,
                                'Fungal Rot/Probed': false,
                                'Re-Evaluate': false
                            },
                            'Flashing': {
                                'n/a': false,
                                'Missing': false,
                                'Satisfactory': false,
                                'Marginal': false,
                                'Poor': false,
                                'Defective': false,
                                'Re-Evaluate': false
                            },
                            'Trim/Soffit/Fascia': {
                                'Wood': false,
                                'Fiberboard': false,
                                'Masonry': false,
                                'EIFS': false,
                                'Metal': false,
                                'Vinyl': false,
                                'Enclosed Soffit': false,
                                'Open Eaves': false,
                                'Screened Ventilation': false,
                                'Unflashed BRT/OLook': false
                            },
                            'Trim/Soffit/Fascia Condition': {
                                'Satisfactory': false,
                                'Marginal': false,
                                'Poor': false,
                                'Loose': false,
                                'Gaps': false,
                                'Missing Pieces': false,
                                'Exposed Wood': false,
                                'Loose/Missing Flashing': false,
                                'Poor Protection/Coverage': false,
                                'Stains': false,
                                'Peeling Paint': false,
                                'Weathered/Worn': false,
                                'Deterioration': false,
                                'Fungal Rot': false,
                                'Broken/Damaged': false,
                                'Pest Issues': false,
                                'Foliage Contact': false,
                                'Potential Hidden Damage': false,
                                'Recommend Re-Evaluation': false
                            },
                            //COMMENTS SECTION HERE.
                        },
                        'images': [
                            {
                                'title': 'Typical View of Soffit & Wall Condition',
                                'url': 'path',
                                'required': false
                             },
                            {
                                'title': 'Typical View of Cladding & Trim Condition',
                                'url': 'path',
                                'required': false
                             },
                            {
                                'title': 'Unprotected Exterior Cladding',
                                'url': 'path',
                                'required': false
                             },
                            {
                                'title': 'Peeling Paint & Rust-Stained Trim',
                                'url': 'path',
                                'required': false
                             }
                     ]

                 },
                    {
                        'subtitle': 'Wall Fenestrations',
                        'conditions': 'None',
                        'showconditions': true,
                        'limitations': 'None',
                        'showlimitations': true,
                        'checkboxes': {
                            'Window Frame/Trim': {
                                'Wood': false,
                                'Aluminum/Metal': false,
                                'Clad': false,
                                'Vinyl': false,
                                'Fiberglass': false
                            },
                            'Window Frame/Trim Condition': {
                                'Satisfactory': false,
                                'Marginal': false,
                                'Poor': false,
                                'Gaps': false,
                                'Missing Pieces': false,
                                'Exposed Wood': false,
                                'Missing Flashing': false,
                                'Weathered/Worn Finish': false,
                                'Peeling Paint/Inadequate Coverage': false,
                                'Missing Caulking': false,
                                'Broken Glass': false,
                                'Damaged': false,
                                'Deteriorated': false,
                                'Fungal Rot': false
                            },
                            'Exterior Doors': {
                                'Metal': false,
                                'Wood': false,
                                'Fiberglass': false
                            },
                            'Exterior Doors Condition': {
                                'Satisfactory': false,
                                'Marginal': false,
                                'Poor': false,
                                'Missing or Inadequate': false,
                                'Threshold': false,
                                'Weather-Strip': false,
                                'Hardware': false,
                                'Repairs Needed': false
                            },
                            'Caulking': {
                                'Weathered': false,
                                'Stretched': false,
                                'Cracked': false,
                                'Gaps': false,
                                'Missing': false,
                                'Recommend sealing all perforations through the exterior wall surface': false
                            }
                        },
                        'images': [
                            {
                                'title': 'default title',
                                'url': 'path',
                                'required': false
                             },
                            {
                                'title': 'default title',
                                'url': 'path',
                                'required': false
                             },
                            {
                                'title': 'default title', //There are two (2) pictures here.
                                'url': 'path',
                                'required': false
                             },
                            {
                                'title': 'default title',
                                'url': 'path',
                                'required': false
                             },
                            {
                                'title': 'default title',
                                'url': 'path',
                                'required': false
                             },
                            {
                                'title': 'default title',
                                'url': 'path',
                                'required': false
                             }
                     ]

                 },
                    {
                        'subtitle': 'Attached Garage/Carport',
                        'conditions': 'The inspection of attached garages and carports includes their framing, siding, roof, doors, windows, and installed electrical / mechanical systems pertaining to the operation of the home, and describes any deficiencies of these systems or components. The report shows the condition and function of the overhead garage doors and associated hardware, the tested function of the garage door openers, their auto-reverse systems and secondary entrapment devices (photoelectric and edge sensors) when present, the condition and installation of any pedestrian door(s), and/or fire separation between the house and garage when applicable, and the presence of any fire hazard or ignition source (gas and electric water heaters, electrical receptacles, electronic air cleaners, motors of installed appliances, etc.) that is within eighteen inches of the garage floor.',
                        'showconditions': true,
                        'limitations': 'According to the Home Inspection Standards of Practice WAC § 308-408C-180 of the Washington State Dept. of Licensing, the inspector is not required to: (1)determine whether or not a solid core pedestrian door that is not labeled is fire rated, (2)verify the functionality of garage door opener remote controls, (3)move vehicles or personal property, (4)operate any equipment unless otherwise addressed in the standards of practice.',
                        'showlimitations': true,
                        'checkboxes': {
                            'Vehicle Parking': {
                                'Curbside': false,
                                'Space': false,
                                'Public Garage': false,
                                'Carport': false,
                                'Garage': false,
                                'Attached': false,
                                'Detached': false
                            },
                            'Floor': {
                                'Concrete Slab': false,
                                'Asphalt': false,
                                'Pavers/Cobblestone': false,
                                'Gravel': false,
                                'Dirt': false
                            },
                            'Floor Condition': {
                                'Satisfactory': false,
                                'Marginal': false,
                                'Poor': false,
                                'Sloping': false,
                                'Typical Cracks': false,
                                'Large Cracks': false,
                                'Trip Hazards': false,
                                'Efflorescence': false,
                                'Not Visible': false,
                                'Excessive Storage': false,
                                'Re-Evaluate': false
                            },
                            'Firewall': {
                                'n/a': false,
                                'Blocked or Inoperable': false,
                                'Wood': false,
                                'Metal': false,
                                'Fiberglass': false
                            },
                            'Firewall Condition': {
                                'Satisfactory': false,
                                'Marginal': false,
                                'Poor': false,
                                'Verify Door': false,
                                'Threshod': false,
                                'Hinges': false,
                                'Seal': false
                            },
                            'Exterior Service Door': {
                                'n/a': false,
                                'Blocked or Inoperable': false,
                                'Wood': false,
                                'Metal': false,
                                'Fiberglass': false
                            },
                            'Exterior Service Door Condition': {
                                'Satisfactory': false,
                                'Marginal': false,
                                'Poor': false,
                                'Damaged': false,
                                'Needs Adjustment': false,
                                'Re-Evaluate': false
                            },
                            'Car Door': {
                                'n/a': false,
                                'Overhead': false,
                                'Sliding': false,
                                'Roll-Up Panels': false,
                                'Tilt-Up Slab': false,
                                'Lites': false,
                                'Wood': false,
                                'Hardboard': false,
                                'Metal': false,
                                'Fiberglass': false,
                                'Solid': false,
                                'Insulated': false,
                                'Hollow': false
                            },
                            'Car Door Condition': {
                                'Satisfactory': false,
                                'Marginal': false,
                                'Poor': false,
                                'Inoperable': false,
                                'Gaps': false,
                                'Security Concerns': false,
                                'Blocked/Inaccessible': false,
                                'Locked Shut': false,
                                'Stained': false,
                                'De-Laminated': false,
                                'Damaged': false
                            },
                            'Automatic Door Opener': {
                                'n/a': false,
                                'Inoperable': false,
                                'Blocked': false,
                                'No Access': false,
                                'No Remote': false
                            },
                            'Safety Reverse': {
                                'n/a': false,
                                'Disconnected/Inoperable': false,
                                'Door Stops': false,
                                'Intermittent Function': false
                            },
                            'Condition': {
                                'Satisfactory': false,
                                'Marginal': false,
                                'Poor': false,
                                'Damaged': false,
                                'Needs Adjustment': false,
                                'Re-Evaluate': false
                            },
                            
                            //COMMENT SECTION HERE.
                        },
                        'images': [
                            {
                                'title': 'default title',
                                'url': 'path',
                                'required': false
                             },
                            {
                                'title': 'default title',
                                'url': 'path',
                                'required': false
                             },
                            {
                                'title': 'Typical View of Garage Interior',
                                'url': 'path',
                                'required': false
                             },
                            {
                                'title': 'default title',
                                'url': 'path',
                                'required': false
                             },
                            {
                                'title': 'default title',
                                'url': 'path',
                                'required': false
                             },
                            {
                                'title': 'default title',
                                'url': 'path',
                                'required': false
                             }
                     ]

                 },
          ]
                 }
         ]
         }
          ];