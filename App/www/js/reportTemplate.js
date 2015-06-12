$scope.items = [
        {
            'title': 'Site',
            'subpage': [
                {
                    'title': 'Site',
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
                    'title': 'Attached Decks/Balconies/Porches/Steps',
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

                 }
        ]
    },
        {
            'title': 'Exterior',
            'subpage': [
                {
                    'title': 'Exterior Wall Cladding (Siding or Exterior Wall Coverings)',
                    'conditions': 'An inspection of the exterior includes the visible wall coverings, trim, protective coatings and sealants, windows and doors, attached porches, decks, steps, balconies, handrails, guard-rails, carports, eaves, soffit(s), fascia(s) and visible exterior portions of chimneys. The findings show whether or not the exterior components were probed where deterioration was suspected or where clear indications of possible deterioration existed, and the manner in which the exterior components were inspected. (Probing is not required or performed when probing would damage any finished surface, or where no deterioration is suspected) The summary section describes some deficiencies of these systems or components. All readily accessible exterior components, visible at the perimeter, are inspected from ground level.',
                    'showconditions': true,
                    'limitations': 'According to the Home Inspection Standards of Practice WAC § 308-408C-080 of the Washington State Dept. of Licensing, the inspector is not required to inspect buildings, decks, patios, fences, retaining walls, and other structures detached from the dwelling, safety type glass or the integrity of thermal window seals, flues or verify the presence of flue liners beyond what can be safely and readily seen from the roof or the firebox of a stove or fireplace, test or evaluate the operation of security locks, devices or systems, enter areas beneath decks with less than five feet of clearance from the underside of joists to grade, evaluate the function or condition of shutters, awnings, storm doors, storm windows, screens, and similar accessories.',
                    'showlimitations': true,
                    'checkboxes': {
                        'Type(s) of Wall Cladding': {
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
                    'title': 'Wall Fenestrations',
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
                    'title': 'Attached Garage/Carport',
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

                 }
                ]
            },
        {
            'title': 'Roofing',
            'subpage': [
                {
                    'title': 'Roof Covering(s)',
                    'conditions': 'An inspection of the roof(s) includes traversing the roof surface to inspect the roof covering materials (unless in the opinion of the inspector, walking on the roof could damage roofing materials or be unsafe) gutters and downspout systems, visible flashing(s), roof vents, skylights, and any other roof penetrations, the portions of the chimney(s) and/or flue(s) visible from the exterior, describes the type of roof coverings used & their general condition, as well as any deficiencies of these systems or components, and reports on the presence of multiple layers of roofing, and the manner in which the roof is ventilated.',
                    'showconditions': true,
                    'limitations': 'According to the Home Inspection Standards of Practice WAC § 308-408C-090 of the Washington State Dept. of Licensing, the inspector is not required to: traverse unsafe or vulnerable roof surfaces, remove snow, ice, debris or other material(s) that obscure the roof surface or prevents access to the roof, inspect gutter and downspout systems concealed within the structure, inspect related underground drainage piping; and/or antennas, lightning arresters, or similar attachments, operate powered roof ventilators, or predict remaining life expectancy of roof coverings.',
                    'showlimitations': true,
                    'checkboxes': {
                        'Roof Covering(s)': {
                            'Inspected/Walked on (Traversed) Roof': false,
                            'Inspected/NOT Traversed': false,
                            'NOT Inspected': false,
                            'Vulnerable to Traversing Damage': false,
                            'Unsafe Traversing Condition(s)': false,
                            'Not Visible': false,
                        },
                        'Viewed Roof From': {
                            'Ground w/ Binoculars': false,
                            'Ladder': false,
                            'Eaves': false,
                            'Interior': false,
                            'Other Building': false
                        },
                        'Style(s)': {
                            'Gable': false,
                            'Hip': false,
                            'Mansard': false,
                            'Shed': false,
                            'Flat': false,
                            'Dutch Hip': false,
                            'Combination': false
                        },
                        'Pitch': {
                            'Steep': false,
                            'Medium': false,
                            'Low': false,
                        },
                        'Approximate Age of Roof Covering': {
                            '<5': false,
                            '5-10': false,
                            '10+': false,
                            'Unknown': false
                                //These Options May Require Revising.
                        },
                        '# of Layers of Roof Covering': {
                            '1': false,
                            '2': false,
                            '3 or more': false
                                //These Options May Require Revising.
                        },
                        'Roof Covering': {
                            'Asphalt/Comp': false,
                            'Rolled': false,
                            '3-Tab': false,
                            'Multiple Thickness': false,
                            'Corrugated FG': false,
                            'Modified Bitumen': false,
                            'Torch-Down/Hot Tar': false,
                            'Metal/Standing Seam': false,
                            'Metal Shingle': false,
                            'Wood Shingle': false,
                            'Cedar Shake': false,
                            'Clay Tile': false,
                            'Concrete Tile': false,
                            'Slate': false,
                            'PVC Membrane': false
                        },
                        'Valley(s)': {
                            'n/a': false,
                            'Metal': false,
                            'Woven Asphalt': false,
                            'Cut Asphalt': false,
                            'Tile': false,
                            'Concrete': false
                        },
                        'Valley(s) Condition': {
                            'Satisfactory': false,
                            'Maginal': false,
                            'Poor': false,
                            'Defective': false,
                            'Broken/Damaged': false,
                            'Rusted': false,
                            'Holes/Gaps': false,
                            'Leaks': false,
                            'Installation Defects': false,
                            'Vulnerable Areas': false
                        },
                        'Condition of (Something?)': {
                            'Satisfactory': false,
                            'Marginal': false,
                            'Poor': false,
                            'Granule Loss': false,
                            'Broken/Damaged': false,
                            'Missing (Tabs)': false,
                            'Cupping': false,
                            'Aligned Gaps/Cracks': false,
                            'Lifting': false,
                            'Moss': false,
                            'Fungal Rot': false,
                            'Rusted': false,
                            'Exposed Fasteners': false,
                            'Recommend Professional Re-Evaluation/Remediation': false
                        }
                        //COMMENTS SECTION HERE.
                    },
                    'images': [
                        {
                            'title': 'Typical View of Roof Covering Condition',
                            'url': 'path',
                            'required': false
                             },
                        {
                            'title': 'Typical View of Roof Covering Condition',
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
                    'title': 'Fenestrations',
                    'conditions': 'None',
                    'showconditions': true,
                    'limitations': 'None',
                    'showlimitations': true,
                    'checkboxes': {
                        'Perforations (through-roof)': {
                            'n/a': false,
                            'No Access': false,
                            'Not Visible': false,
                            'Walls/Dormers': false,
                            'Chimney Chase(s)': false,
                            'Class "B" Vent(s)': false,
                            'Dryer Vent': false,
                            'Fan Vent(s)': false,
                            'Plumbing DMV Pipes': false,
                            'Antennae/Satellite Dish': false,
                            'Cable/Wiring': false,
                            'Electical Mast': false
                        },
                        'Perforations Condition(s)': {
                            'Satisfactory': false,
                            'Marginal': false,
                            'Poor': false,
                            'Defective': false,
                            'Broken/Damaged': false,
                            'Rusted': false,
                            'Raised/Holes/Gaps': false,
                            'Leaks': false,
                            'Installation Defects': false,
                            'Vulnerable Areas': false
                        },
                        'Skylights/Skywalls': {
                            'n/a': false,
                            'No Access': false,
                            'Not Visible': false
                        },
                        'Skylights/Skywalls Condition': {
                            'Satisfactory': false,
                            'Marginal': false,
                            'Poor': false,
                            'Defective': false,
                            'Broken/Damaged': false,
                            'Rusted': false,
                            'Holes/Gaps': false,
                            'Leaks': false,
                            'Installation Defects': false,
                            'Vulnerable Areas': false
                        },
                        'Flashing(s)': {
                            'n/a': false,
                            'Missing': false,
                            'Installation Defects': false,
                            'Rusted': false,
                            'Potential Future Concern': false
                        },
                        'Flashing(s) Condition': {
                            'Satisfactory': false,
                            'Marginal': false,
                            'Poor': false,
                            'Defective': false,
                            'Broken/Damaged': false,
                            'Raised': false,
                            'Holes/Gaps': false,
                            'Leaks': false,
                            'Vulnerable Areas': false,
                            'Repair or Re-Evaluate': false
                        }
                    },
                 },
                {
                    'title': 'Gutters & Down-Spouts',
                    'conditions': 'None',
                    'showconditions': true,
                    'limitations': 'None',
                    'showlimitations': true,
                    'checkboxes': {
                        'Type': {
                            'Eave-Mounted': false,
                            'Internal with Scuppers': false,
                            'Metal': false,
                            'Plastic/Vinyl': false,
                            'Wood': false
                        },
                        'Condition of Gutters & Down-Spouts': {
                            'Missing': false,
                            'Satisfactory': false,
                            'Marginal': false,
                            'Poor': false,
                            'Loose/Sagging': false,
                            'Fallen/Pulled Away': false,
                            'Reversed Slope/Ponding': false,
                            'Clogged': false,
                            'Debris': false,
                            'Granule Wash': false,
                            'Spillover Stains': false,
                            'Deteriorated Wood': false,
                            'Cracked/Split': false,
                            'Holes': false,
                            'Leaking Joints': false,
                            'Rust': false,
                            'Moss': false
                        },
                        'Down-Spout Discharge': {
                            'No Down-Spouts': false,
                            'Above Grade': false,
                            'Below Grade': false,
                            'Not Visible': false
                        },
                        'Down-Spout Discharge Condition': {
                            'Satisfactory': false,
                            'Marginal': false,
                            'Poor': false,
                            'Missing': false,
                            'Loose/Disconnected': false,
                            'Clogged': false,
                            'Open Gaps Around Downspout-to-Drain Connections': false,
                            'Poor Extensions/Splash Blocks': false
                        }
                    },
                    'images': [
                        {
                            'title': 'Typical View of Gutter Condition',
                            'url': 'path',
                            'required': false
                             },
                        {
                            'title': 'Typical View of Gutter Condition',
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
                }

                ]
        },
        {
            'title': 'Structural',
            'subpage': [
                {
                    'title': 'Exterior Wall Cladding (Siding or Exterior Wall Coverings)',
                    'conditions': 'An inspection of the structure includes traversing attics and subfloor crawl-spaces to inspect the building materials comprising the major structural components, the visible foundation; floor framing; roof framing and diaphragm; other support and substructure / superstructure components; stairs; ventilation (when applicable); and exposed concrete slabs in habitable areas, and describes any deficiencies of these systems or components. The report describes the condition and serviceability of visible, exposed foundations and grade slabs, walls, posts, piers, beams, joists, trusses, sub-floors, chimney foundations, stairs and the visible roof structure and attic components where readily and safely accessible, subfloor crawl-spaces and basements for indications of flooding and moisture penetration, and where deterioration is suspected or where clear indications of possible deterioration exist, a representative number of structural components were probed, and any pest-conducive conditions or wood-rot are reported. Probing is not required when probing will damage any finished surface or where no deterioration is suspected.',
                    'showconditions': true,
                    'limitations': 'According to the Home Inspection Standards of Practice WAC § 308-408C-070 of the Washington State Dept. of Licensing, The inspector is not required to enter: sub-floor crawl-spaces that require excavation or have an access opening less than eighteen inches by twenty-four inches or headroom less than eighteen inches beneath floor joists and twelve inches beneath girders (beams). Any areas that are not readily accessible due to obstructions, inadequate clearances or have conditions which, in the inspector\'s opinion, are hazardous to the health and safety of the inspector or will cause damage to components of the home, move stored items or debris or perform excavation to gain access. (BOLD THIS)Please refer to a licensed structural pest inspector (SPI) or pest control operator (PCO) to re-evaluate all issues that are suspected to be insect-related.(BOLD THIS)',
                    'showlimitations': true,
                    'checkboxes': {
                        //TITLE: STRUCTURE
                        //TITLE: ROOF FRAMING(Visible in Attic)
                        'Roof System': {
                            'n/a': false,
                            'Vaulted/No Attic': false,
                            'Partial Attic': false,
                            'No Access': false,
                            'Sealed Access': false,
                            'Trusses': false,
                            'Stick-Framed': false,
                            'Rafters & Joists': false,
                            'Beams & Purlins': false,
                            'Hips': false,
                            'Valleys': false
                        },
                        'Diaphragm Sheathing': {
                            'Plywood': false,
                            'OSB': false,
                            'H-Clipped': false,
                            'Plank': false,
                            '1X Skip Sheathing': false
                        },
                        'Condition': {
                            'Satisfactory': false,
                            'Marginal': false,
                            'Poor': false,
                            'Sagging/Over-Spanned': false,
                            'Broken/Damaged': false,
                            'Structural Defect (Design Related)': false
                        },
                        'Missing or Inadequate': {
                            'Bracing': false,
                            'Collar Ties': false,
                            'Knee Walls': false,
                            'Stains': false,
                            'Deterioration': false,
                            'Hazardous/Unsafe': false,
                            'Recommend Professional Re-Evaluation': false
                        },
                        //COMMENTS SECTION HERE.
                    },
                    'images': [
                        {
                            'title': 'Typical View of Roof Framing and Structure',
                            'url': 'path',
                            'required': false
                             },
                        {
                            'title': 'Typical View of Roof Framing and Structure',
                            'url': 'path',
                            'required': false
                             },
                        {
                            'title': 'Roof Diaphragm Condition',
                            'url': 'path',
                            'required': false
                             },
                        {
                            'title': 'Exposed Sub-Floor Diaphragm',
                            'url': 'path',
                            'required': false
                             },
                        {
                            'title': 'Typical Sub-Floor Framing',
                            'url': 'path',
                            'required': false
                             },
                        {
                            'title': 'default title',
                            'url': 'path',
                            'required': false
                             },
                     ]

                 },
                {
                    'title': 'Floor Framing',
                    'conditions': 'None',
                    'showconditions': true,
                    'limitations': 'None',
                    'showlimitations': true,
                    'checkboxes': {
                        //PRESET TEXT HERE: Seismic (earthquake) evaluation is typically dictated by building codes, outside the scope of this inspection, and was NOT performed. For seismic evaluation or other desirable structural improvements, refer to a specialist.
                        'Sub-Floor System': {
                            '4X Beams & Plank Diaphragm': false,
                            '2X Joists & Diaphragm': false,
                            'Flat Truss': false
                        },
                        'Beams (Girders)': {
                            'Steel': false,
                            'Concrete': false,
                            'Laminated': false,
                            'Dimensional Lumber': false
                        },
                        'Joists & Sheathing': {
                            'Wood': false,
                            'TJI (Wood I-Beams': false,
                            'Sleepers': false,
                            '"Foam-Crete"': false,
                            'Diagonal': false,
                            'Plank': false,
                            'Shiplap': false,
                            'Tongue & Groove': false,
                            'Plywood': false,
                            'OSB': false
                        },
                        'Posts(Columns)': {
                            'Covered/Not Visible': false,
                            'Wood': false,
                            'Steel': false,
                            'Concrete': false,
                            'CMU (block)': false
                        },
                        'Condition': {
                            'Satisfactory': false,
                            'Marginal': false,
                            'Poor': false,
                            'Sagging/Over-Spanned': false,
                            'Broken': false,
                            'Damaged': false,
                            'Structural Defects (Design Related)': false,
                            'Missing or Inadequate Bracing': false,
                            'Stains': false,
                            'Deterioration': false,
                            'Hazardous/Unsafe': false,
                            'Recommend Professional Evaluation and/or Remediation': false
                        },
                        'Stairs': {
                            'n/a': false,
                            'Open': false
                        },
                        'Enclosed On': {
                            '1 Side': false,
                            'Both Sides': false
                        },
                        'Condition': {
                            'Satisfactory': false,
                            'Marginal': false,
                            'Poor': false,
                            'Missing Handrail': false
                        },
                        'Inadequate': {
                            'Newels': false,
                            'Baluster Spacing': false,
                            'Rails': false,
                            'Headroom': false,
                            'Poor/Inadequate Support': false,
                            'Uneven Risers': false,
                            'Over-Height Step(s)': false,
                            'Missing Firewall': false,
                            'Hazardous/Unsafe': false,
                            'Recommend Professional Evaluation and/or Remediation': false
                        },
                        'Basement/Crawl Floor': {
                            'Concrete': false,
                            'Dirt/Gravel': false,
                            'Wood': false,
                            'Covered/Not Visible': false
                        },
                        'Condition': {
                            'Satisfactory': false,
                            'Marginal': false,
                            'Poor': false,
                            'Typical Settling Cracks': false,
                            'Large Cracks': false,
                            'Stains': false,
                            'Efflorescence': false,
                            'Storage': false,
                            'Damage': false,
                            'Hazardous/Unsafe': false,
                            'Re-Evaluate': false
                        },
                    },
        },
                {
                    'title': 'Foundation',
                    'conditions': 'None.',
                    'showconditions': true,
                    'limitations': 'None.',
                    'showlimitations': true,
                    'checkboxes': {
                        'Type of Foundation': {
                            'Perimeter Walls': false,
                            'Post/Beam': false,
                            'Columns': false,
                            'Poured Concrete': false,
                            'CMU(Block)': false,
                            'Masonry': false,
                            'Unmortared Stone/Brick': false,
                            'Logs': false,
                            'Treated Wood': false,
                            'Strip Footings': false
                        },
                        'Condition of Foundation': {
                            'Satisfactory': false,
                            'Marginal': false,
                            'Poor': false,
                            'Imbedded Wood': false,
                            'Rock Pockets': false,
                            'No Tie-Downs': false,
                            'Stains': false,
                            'Damage': false,
                            'Deterioration': false,
                            'Efflorescence': false,
                            'EWC': false,
                            'Fungal Rot/Probed': false
                        },
                        'Limited By': {
                            'Storage': false,
                            'Perimeter Cover': false,
                            'Obstacles': false,
                            'Inaccessible Area': false,
                            'Pests': false,
                            'Tight/Limited Mobility': false,
                            'Hazards/Unsafe': false,
                            'Recommend Re-Evaluation and/or Remediation': false
                        },
                        'WDI/WDO (Wood-Destroying)': {
                            'None': false,
                            'Exit Holes': false,
                            'Frass': false,
                            'Galleries': false,
                            'Damage': false,
                            'Mildew/Bio-Growth': false,
                            'Mold Sampled/Tested': false,
                            'Fungal Rot/Probed': false,
                            'Re-Evaluate': false
                        },
                        'Cracks': {
                            'Typical Settling': false,
                            'Vertical': false,
                            'Step': false,
                            'Horizontal': false,
                            'V-Cracking': false,
                            'Displaced': false,
                            'Inactive': false,
                            'Active': false,
                            'Larger than 1/4 inch': false
                        },
                        'Re-Evaluation Location': {
                            'N': false,
                            'S': false,
                            'E': false,
                            'W': false
                        },
                        'Drainage': {
                            'Evidence of Flooding': false,
                            'Not Visible': false,
                            'Efflorescence': false,
                            'Humidity': false,
                            'Old Stains': false,
                            'Silt Deposits': false,
                            'Soil on Vapor Barrier': false,
                            'Fresh Stains': false,
                            'Standing Water': false
                        },
                        'Sump Pump': {
                            'n/a': false,
                            'Missing': false,
                            'Not Tested': false,
                            'Operable': false,
                            'Inoperable': false,
                            'Re-Evaluate': false
                        },

                        //COMMENT SECTION GOES HERE.

                    }
                    ]
            },
            {
                'title': 'Thermal',
                'subpage': [
                    {
                        'title': 'Attic',
                        'conditions': 'The inspection of the insulation and ventilation includes the type and condition of the insulation and ventilation in viewable unfinished attics and sub-grade areas as well as any installed mechanical ventilation systems, reports missing or inadequate vapor barriers in subfloor crawl-spaces with earth floors, the absence of insulation at the interface between conditioned and unconditioned spaces where visible, the absence of insulation on heating system ductwork and supply plumbing in unconditioned spaces, and describes any deficiencies of these systems or components.',
                        'showconditions': true,
                        'limitations': 'According to the Home Inspection Standards of Practice WAC § 308-408C-150 of the Washington State Dept. of Licensing, the inspector is not required to determine the presence, extent, and type of insulation and vapor barriers concealed in the exterior walls, the thickness or R-value of insulation above the ceiling, in the walls or below the floors, or evaluate whether the type of material used to insulate pipes, ducts, jackets and boilers is a health hazard. (BOLD THIS)The efficiency and quantity of air ventilation and mechanical systems is not measured, calculated, or controls tested, other than to confirm that they exist, and/or actually turn a system on or off.(BOLD THIS)',
                        'showlimitations': true,
                        'checkboxes': {
                            'Access': {
                                'No Attic': false,
                                'No Access': false,
                                'Door': false,
                                'Pull Down Stair': false,
                                'Scuttle-Hole(s)': false
                            },
                            'Location': {
                                'Hall': false,
                                'Bedroom': false,
                                'Closet': false,
                                'Laundry Room': false,
                                'Garage': false,
                                'Exterior': false
                            },
                            'Viewed': {
                                'Near Access': false,
                                'From Ladder': false,
                                'At Roof Apex': false,
                                'Limited Accessibility': false,
                                'Inspected (Traversed) Attic': false,
                                'Entered but NOT Traversed': false,
                                'NOT Entered/NOT Inspected': false,
                                'Vulnerable to Traversing Damage': false,
                                'Unsafe Traversing Condition(s)': false,
                                'Not Visible': false
                            },
                            'Attic Insulation': {
                                'None': false,
                                'TYPE(S) NEEDED': false, //THIS OPTION REQUIRES MORE INFORMATION.
                                'Rafters': false,
                                'Ceiling Joists': false,
                                'FG': false,
                                'Cellulose': false,
                                'Vermiculite': false,
                                'R Wool': false,
                                'Batts': false,
                                'Loose': false,
                                'Wood Shavings': false
                            },
                            'Attic Insulation Condition': {
                                'Satisfactory': false,
                                'Marginal': false,
                                'Poor': false,
                                'Missing Areas': false,
                                'Uneven Placement': false,
                                'Damaged': false
                            },
                            'Attic Ventilation': {
                                'Eaves': false,
                                'Gable': false,
                                'Top': false,
                                'Ridge': false,
                                'Powered Vent(s)': false,
                                'Attic Fan(s)': false
                            },
                            'Condition of Ventilation': {
                                'None': false,
                                'Satisfactory': false,
                                'Marginal': false,
                                'Poor/Missing': false,
                                'Odors': false,
                                'Excessive Heat': false,
                                'Ventilation Appears Inadequate': false,
                                'Effectiveness NOT Evaluated': false,
                                'Re-Evaluate': false
                            },
                            'Humidity': {
                                'Yes': false,
                                'Roof Leaks': false,
                                'Old Stains/Inactive': false,
                                'Fresh Stains/Active': false,
                                'Mildew/Mold': false,
                                'Stained Diaphragm': false,
                                'Wet Insulation': false,
                                'Damage': false,
                                'Re-Evaluate': false
                            },
                            'Infestation': {
                                'None': false,
                                'Prior/Inactive': false,
                                'Live/Active': false,
                                'Nesting Materials': false,
                                'Scat': false,
                                'Insect': false,
                                'Bee/Wasp': false,
                                'Bird': false,
                                'Rodent': false,
                                'Racoon': false,
                                'Potential Points of Pest Entry': false,
                                'Hazardous/Unsafe': false,
                                'Recommend Professional Evaluation and/or Remediation': false
                            },

                            //PRESET TEXT:
                            //NOTE: Ventilation is important in maintaining healthy uninhabited areas (attics, crawl spaces), and a key consideration before adding or altering insulation quantity. Recommend frequent seasonal checks to be certain ventilation ports do not become inadvertently blocked by pests, wind currents, or the movement or addition of new insulation.
                        },
                        'images': [
                            {
                                'title': 'default title',
                                'url': 'path',
                                'required': false
                             },
                            {
                                'title': 'View From Inside Attic',
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
                                'title': 'Typical Attic Insulation',
                                'url': 'path',
                                'required': false
                             },
                            {
                                'title': 'Typical Sub-Floor Insulation',
                                'url': 'path',
                                'required': false
                             }
                     ]

                 },
                    {
                        'title': 'Crawl Spaces/Unfinished Basements',
                        'conditions': 'None',
                        'showconditions': true,
                        'limitations': 'None',
                        'showlimitations': true,
                        'checkboxes': {
                            'Access': {
                                'Door/Panel': false,
                                'Scuttle-Hole': false,
                                'No Access': false,
                                'No Crawl-Space': false,
                                'Not Visible': false
                            },
                            'Location': {
                                'Hall': false,
                                'Bedroom': false,
                                'Closet': false,
                                'Laundry Room': false,
                                'Garage': false,
                                'Exterior': false,
                                'Inspected Basement or Crawl': false,
                                'NOT Entered/NOT Inspected': false,
                                'Limited Accessibility': false
                            },
                            'Viewed': {
                                'Near Access': false,
                                'From Exterior': false,
                                'At Center Only': false,
                                'Vulnerable': false,
                                'Unsafe': false
                            },
                            'Sub-Floor Insulation': {
                                'None Visible': false,
                                'TYPE': false, //THIS OPTION REQUIRES MORE DATA.
                                'Floor': false,
                                'Rim Joists': false,
                                'Fiberglass Batts': false,
                                'Blown-in Cellulose': false,
                                'Foam Board': false
                            },
                            'Condition': {
                                'Satisfactory': false,
                                'Marginal': false,
                                'Poor': false,
                                'Missing Areas': false,
                                'Fallen Down': false,
                                'Damaged': false
                            },
                            'Crawl-Space Ventilation': {
                                'None': false,
                                'Foundation Vents': false,
                                'Powered Vent(s)': false,
                                'Fan(s)': false
                            },
                            'Condition': {
                                'Satisfactory': false,
                                'Marginal': false,
                                'Poor': false,
                                'Effectiveness NOT Evaluated': false,
                                'Re-Evaluate': false
                            },
                            'Vapor Barrier': {
                                'None': false,
                                'Satisfactory': false,
                                'Damaged': false,
                                'Gaps/Displaced Areas': false,
                                'Exposed Earth': false
                            },
                            'Moisture': {
                                'Present': false,
                                'Efflorescence': false,
                                'Old Stains': false,
                                'Fresh': false,
                                'Standing Water': false,
                            },
                            'Drainage': {
                                'To Out-Fall': false,
                                'Interior Plane': false,
                                'None Apparent': false,
                                'Sump Pump': false,
                                'Functional': false
                            },
                            'Infestation': {
                                'None': false,
                                'Prior/Inactive': false,
                                'Live/Active': false,
                                'Nesting Materials': false,
                                'Scat': false,
                                'Insect': false,
                                'Bee/Wasp': false,
                                'Bird': false,
                                'Rodent': false,
                                'Racoon': false,
                                'Potential Point Pest Entry': false,
                                'Hazardous/Unsafe': false,
                                'Recommend Professional Evaluation and/or Remediation': false
                            }


                        },
                    },
                    {
                        'title': 'Interior Mechanical Ventilation/Exhaust Fans',
                        'conditions': 'None.',
                        'showconditions': true,
                        'limitations': 'None.',
                        'showlimitations': true,
                        'checkboxes': {
                            'Interior Mechanical Ventilation (THIS SECTION NAME WAS MADE UP)': {
                                'Whole House Fan(s)': false,
                                'Make-Up Air Vent(s)': false,
                                'Furnace Blower(s)': false,
                                'Ceiling-Mounted Fan(s)': false
                            },
                            'Condition': {
                                'Satisfactory': false,
                                'Marginal': false,
                                'Poor/Missing': false,
                                'Open Blade': false,
                                'Caged': false,
                                'Remote Control': false
                            },
                            'Exhaust Fan(s) (THIS SECTION NAME WAS MADE UP)': {
                                'Bathroom Exhaust Fan(s)': false,
                                'Kitchen Fan(s)': false,
                                'Inoperable': false,
                                'Weak/Noisy': false,
                                'Unsafe': false
                            },
                            'Condition': {
                                'Satisfactory': false,
                                'Marginal': false,
                                'Poor/Missing': false,
                                'Vented Properly (Outside Building Envelope)': false,
                                'Not Visible': false,
                                'Recirculating-Only Type': false,
                                'Clogged Grease Filter': false,
                                'Restricted (Collapsed/Blocked)': false,
                                'Venting Into Attic Space': false,
                                'Aimed at Gable, Eave, or Roof Vents': false,
                                'Fallen Loose': false,
                                'Re-Evaluate': false
                            },

                            //PRESET TEXT HERE:
                            //Note: To minimize unwanted moisture accumulation or humidity concerns, recommend regular use of adequate exhaust fans in kitchens, laundries, bathrooms, and other moisture producing areas with sealed venting to outside the building envelope. Routine maintenance is recommended to ensure that noisy, worn, or dirty fans are serviced or replaced as needed.

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
                                'title': 'Typical View of Kitchen Exhaust Fan',
                                'url': 'path',
                                'required': false
                             }
                     ]

                 },

                     ]

            } //This is where you start a new "SubPage Title" Section OR Image Section
            ]
    } //This is where you start a new "Title" Section.
]
}];