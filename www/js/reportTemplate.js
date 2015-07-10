     $scope.report = {
         'Field Notes': {
             'Field Notes From Site Evaluation': {

                     'Conditions': {
                         'type': 'presettext',
                         'content': 'The locations of the main utility controls, shut-off valves, and/or disconnects are noted in the applicable mechanical sections.',
                         'showcontent': true
                     },

                     'Limitations': {
                         'type': 'presettext',
                         'content': 'Detached outbuildings, seasonally visible defects, poorly accessible components, areas that may have been hidden and/ or areas containing significant furnishings or storage are not included in the scope of this inspection.',
                         'showcontent': true
                     },

                     'Year Built': { //Wants a "Spin the Dial"
                         'type': 'checkbox',
                         '1': false,
                         '2': false,
                         '3': false,
                         '4': false,
                         'Spin Dial': false
                     },
                     'Squarefeet of the Property': { //NEED MORE DATA
                         'type': 'checkbox',
                         '<1500': false,
                         '1500-2000': false,
                         '2000-2500': false,
                         '2500-3000': false,
                         '>3000': false,
                         'OTHER (NEED MORE DATA)': false
                     },
                     'Type of Home': {
                         'type': 'checkbox',
                         'Single Family': false,
                         'Multi-Family': false,
                         'OTHER (NEED MORE DATA)': false
                     },
                     'Property Type': {
                         'type': 'checkbox',
                         'Residential': false,
                         'Commercial': false
                     },
                     'Height of Home (In Stories)': {
                         'type': 'checkbox',
                         '1 Story': false,
                         '2 Story': false,
                         '3 Story': false,
                         'More! (NEED MORE DATA)': false
                     },
                     'House Frame': {
                         'type': 'checkbox',
                         'Wood-Framed': false,
                         'Brick & Mortar (Maybe?)': false,
                         'OTHER (NEED MORE DATA)': false
                     },
                     'HOME?': {
                         'type': 'checkbox',
                         'Home': false,
                         'OTHER (NEED MORE DATA)': false
                     },
                     'Crawlspace': {
                         'type': 'checkbox',
                         'Available': false
                     },
                     //ADD: "Built in 1987"


                 'clientinfo': {
                     'firstName': '',
                     'lastName': '',
                     'address': '',
                     'addressTwo': '',
                     'city': '',
                     'state': '',
                     'postalCode': ''
                 },
                 'commentbox': {},
                 'images': []
             }
         },
         'Site': {
             'Site': {


                     'Conditions': {
                         'type': 'presettext',
                         'content': 'The inspection of the site includes the building perimeter, land grade, and water drainage directly adjacent to the foundation; trees and vegetation that adversely affect the structure; walks, grade steps, driveways, patios, and retaining walls contiguous with the structure.\n The report describes the material used for driveways, walkways, patios and other flatwork around the home, the serviceability of the driveways, steps, walkways, patios, flatwork and retaining walls contiguous with the structure, proper grading and drainage slope, vegetation in close proximity to the home, and a description of any deficiencies of these systems or components.',
                         'showcontent': true
                     },
                     'Limitations': {
                         'type': 'presettext',
                         'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-170 of the Washington State Dept. of Licensing, the inspector is not required to: (1)inspect fences, privacy walls or retaining walls that are not contiguous with the structure, (2)report the condition of soil, trees, shrubs or vegetation unless they adversely affect the structure, (3)evaluate hydrological or geological conditions, (4)determine the adequacy of bulkheads, sea-walls, break- walls, and docks.',
                         'showcontent': true
                     },

                     'Driveway': {
                         'type': 'checkbox',
                         'n/a': false,
                         'Concrete': false,
                         'Asphalt': false,
                         'Pavers/stone/brick': false,
                         'Dirt/gravel': false
                     },
                     'Driveway Condition': {
                         'type': 'checkbox',
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
                         'type': 'checkbox',
                         'n/a': false,
                         'Concrete': false,
                         'Paver/stone/brick': false,
                         'Wood/Composite': false,
                         'Covered': false
                     },
                     'Patio Condition': {
                         'type': 'checkbox',
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
                         'type': 'checkbox',
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
                         'type': 'checkbox',
                         'None': false,
                         'TYPE (Needs Greater Definition)': false
                     },
                     'Retaining Wall Condition': {
                         'type': 'checkbox',
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Damaged': false,
                         'Leaning': false,
                         'Leaking/Drainage Concern': false,
                         'Trip/Falling Hazard': false
                     },
                     'Safety Fencing at': {
                         'type': 'checkbox',
                         'n/a': false,
                         'Water Feature': false,
                         'Drop-off/Retaining Wall': false,
                         'Steep Slope': false,
                         'TYPE (Needs Greater Definition)': false
                     },
                     'Safety Fencing Condition': {
                         'type': 'checkbox',
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
                         'type': 'checkbox',
                         'Not Inspected': false,
                         'Poor Earth-to-Wood Separation': false,
                         'Yard Steps': false,
                         'Drainage': false,
                         'Negative Surrounding Grade (sloping toward building)': false,
                         'Overgrown Foliage': false,
                         'Re-Evaluate': false
                     },
                     //INCLUDE PRESET TEXT: "Safety Concerns: Uneven edges at settling cracks in concrete drives or walkways may pose potential trip hazards, and should be improved to provide a safe walking surface. Safe and secure handrails and guard rails are recommended at all stairways, and where landing heights pose a potential falling hazard."

                 'images': []
             },
             'Attached Decks/Balconies/Porches/Steps': {
                 'presettext': {},

                     'Porch/Stoop': {
                         'type': 'checkbox',
                         'n/a': false,
                         'Concrete': false,
                         'Pavers/Stone/Brick': false,
                         'Wood/Composite': false,
                         'Covered': false

                     },
                     'Porch/Stoop Condition': {
                         'type': 'checkbox',
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
                         'type': 'checkbox',
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
                         'type': 'checkbox',
                         'n/a': false,
                         'Raised': false,
                         'Covered': false,
                         'Wood/Composite': false,
                         'Verity Attachment': false
                     },
                     'Deck/Balcony Condition': {
                         'type': 'checkbox',
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
                     },

                 'images': [

                ]
             }
         },
         'Exterior': {
             'Exterior Wall Cladding (Siding or Exterior Wall Coverings)': {
                 'presettext': {
                     'Conditions': {
                         'content': 'An inspection of the exterior includes the visible wall coverings, trim, protective coatings and sealants, windows and doors, attached porches, decks, steps, balconies, handrails, guard-rails, carports, eaves, soffit(s), fascia(s) and visible exterior portions of chimneys. The findings show whether or not the exterior components were probed where deterioration was suspected or where clear indications of possible deterioration existed, and the manner in which the exterior components were inspected. (Probing is not required or performed when probing would damage any finished surface, or where no deterioration is suspected) The summary section describes some deficiencies of these systems or components. All readily accessible exterior components, visible at the perimeter, are inspected from ground level.',
                         'showcontent': true
                     },
                     'Limitations': {
                         'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-080 of the Washington State Dept. of Licensing, the inspector is not required to inspect buildings, decks, patios, fences, retaining walls, and other structures detached from the dwelling, safety type glass or the integrity of thermal window seals, flues or verify the presence of flue liners beyond what can be safely and readily seen from the roof or the firebox of a stove or fireplace, test or evaluate the operation of security locks, devices or systems, enter areas beneath decks with less than five feet of clearance from the underside of joists to grade, evaluate the function or condition of shutters, awnings, storm doors, storm windows, screens, and similar accessories.',
                         'showcontent': true
                     },

                        'Moisture/Pest-Conducive Conditions': {
                             'content': 'Undesirable exterior conditions conducive to pest and/or rot concerns may exist, develop, and/or worsen over time. Recommend identification and elimination of all exposed or unprotected wood in outdoor conditions or inadequate earth-to-wood separation (less than 6 to 8 inches), negative grade (ground surfaces sloping toward building), or overgrown foliage (vegetation touching wall surfaces) and maintain improved conditions to minimize risk of pest, moisture or other potential exterior concerns.',
                             'showcontent': true
                         }


                 },
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
                     }
                     //COMMENTS SECTION HERE.
                 },
                 'images': []
             },
             'Wall Fenestrations': {
                 'presettext': {},
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
                 'images': []
             },
             'Attached Garage/Carport': {
                 'presettext': {
                     'Conditions': {
                         'content': 'The inspection of attached garages and carports includes their framing, siding, roof, doors, windows, and installed electrical / mechanical systems pertaining to the operation of the home, and describes any deficiencies of these systems or components. The report shows the condition and function of the overhead garage doors and associated hardware, the tested function of the garage door openers, their auto-reverse systems and secondary entrapment devices (photoelectric and edge sensors) when present, the condition and installation of any pedestrian door(s), and/or fire separation between the house and garage when applicable, and the presence of any fire hazard or ignition source (gas and electric water heaters, electrical receptacles, electronic air cleaners, motors of installed appliances, etc.) that is within eighteen inches of the garage floor.',
                         'showcontent': true
                     },
                     'Limitations': {
                         'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-180 of the Washington State Dept. of Licensing, the inspector is not required to: (1)determine whether or not a solid core pedestrian door that is not labeled is fire rated, (2)verify the functionality of garage door opener remote controls, (3)move vehicles or personal property, (4)operate any equipment unless otherwise addressed in the standards of practice.',
                         'showcontent': true
                     }
                 },
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
                     }
                     //COMMENT SECTION HERE.
                 },
                 'images': []
             }
         },
         'Roofing': {
             'Roof Covering(s)': {
                 'presettext': {
                     'Conditions': {
                         'content': 'An inspection of the roof(s) includes traversing the roof surface to inspect the roof covering materials (unless in the opinion of the inspector, walking on the roof could damage roofing materials or be unsafe) gutters and downspout systems, visible flashing(s), roof vents, skylights, and any other roof penetrations, the portions of the chimney(s) and/or flue(s) visible from the exterior, describes the type of roof coverings used & their general condition, as well as any deficiencies of these systems or components, and reports on the presence of multiple layers of roofing, and the manner in which the roof is ventilated.',
                         'showcontent': true
                     },
                     'Limitations': {
                         'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-090 of the Washington State Dept. of Licensing, the inspector is not required to: traverse unsafe or vulnerable roof surfaces, remove snow, ice, debris or other material(s) that obscure the roof surface or prevents access to the roof, inspect gutter and downspout systems concealed within the structure, inspect related underground drainage piping; and/or antennas, lightning arresters, or similar attachments, operate powered roof ventilators, or predict remaining life expectancy of roof coverings.',
                         'showcontent': true
                     }
                 },
                 'checkboxes': {
                     'Roof Covering(s)': {
                         'Inspected/Walked on (Traversed) Roof': false,
                         'Inspected/NOT Traversed': false,
                         'NOT Inspected': false,
                         'Vulnerable to Traversing Damage': false,
                         'Unsafe Traversing Condition(s)': false,
                         'Not Visible': false
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
                         'Low': false
                     },
                     'Approximate Age of Roof Covering': { //NEED MORE DATA
                         '<5': false,
                         '5-10': false,
                         '10+': false,
                         'Unknown': false,
                         'NEED MORE DATA': false
                             //These Options May Require Revising.
                     },
                     '# of Layers of Roof Covering': { //NEED MORE DATA
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
                     'Condition of (Something?)': { //NEED MORE DATA
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
                 'images': []
             },
             'Fenestrations': {
                 'presettext': {},
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
                 }
             },
             'Gutters & Down-Spouts': {
                 'presettext': {},
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
                 'images': []
             }
         },
         'Structural': {
             'Roof Framing (Visible In Attic)': {
                 'presettext': {
                     'Conditions': {
                         'content': 'An inspection of the structure includes traversing attics and subfloor crawl-spaces to inspect the building materials comprising the major structural components, the visible foundation; floor framing; roof framing and diaphragm; other support and substructure / superstructure components; stairs; ventilation (when applicable); and exposed concrete slabs in habitable areas, and describes any deficiencies of these systems or components. The report describes the condition and serviceability of visible, exposed foundations and grade slabs, walls, posts, piers, beams, joists, trusses, sub-floors, chimney foundations, stairs and the visible roof structure and attic components where readily and safely accessible, subfloor crawl-spaces and basements for indications of flooding and moisture penetration, and where deterioration is suspected or where clear indications of possible deterioration exist, a representative number of structural components were probed, and any pest-conducive conditions or wood-rot are reported. Probing is not required when probing will damage any finished surface or where no deterioration is suspected.',
                         'showcontent': true
                     },
                     'Limitations': {
                         'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-070 of the Washington State Dept. of Licensing, The inspector is not required to enter: sub-floor crawl-spaces that require excavation or have an access opening less than eighteen inches by twenty-four inches or headroom less than eighteen inches beneath floor joists and twelve inches beneath girders (beams). Any areas that are not readily accessible due to obstructions, inadequate clearances or have conditions which, in the inspector\'s opinion, are hazardous to the health and safety of the inspector or will cause damage to components of the home, move stored items or debris or perform excavation to gain access. (BOLD THIS)Please refer to a licensed structural pest inspector (SPI) or pest control operator (PCO) to re-evaluate all issues that are suspected to be insect-related.(BOLD THIS)',
                         'showcontent': true
                     }
                 },
                 'checkboxes': {
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
                     }
                     //COMMENTS SECTION HERE.
                 },
                 'images': []
             },
             'Floor Framing': {
                 'presettext': {},
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
                     }
                 }
             },
             'Foundation': {
                 'presettext': {},
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
                     }
                     //COMMENT SECTION GOES HERE.
                 }
             }
         },
         'Thermal': {
             'Attic': {
                 'presettext': {
                     'Conditions': {
                         'content': 'The inspection of the insulation and ventilation includes the type and condition of the insulation and ventilation in viewable unfinished attics and sub-grade areas as well as any installed mechanical ventilation systems, reports missing or inadequate vapor barriers in subfloor crawl-spaces with earth floors, the absence of insulation at the interface between conditioned and unconditioned spaces where visible, the absence of insulation on heating system ductwork and supply plumbing in unconditioned spaces, and describes any deficiencies of these systems or components.',
                         'showcontent': true
                     },
                     'Limitations': {
                         'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-150 of the Washington State Dept. of Licensing, the inspector is not required to determine the presence, extent, and type of insulation and vapor barriers concealed in the exterior walls, the thickness or R-value of insulation above the ceiling, in the walls or below the floors, or evaluate whether the type of material used to insulate pipes, ducts, jackets and boilers is a health hazard. (BOLD THIS)The efficiency and quantity of air ventilation and mechanical systems is not measured, calculated, or controls tested, other than to confirm that they exist, and/or actually turn a system on or off.(BOLD THIS)',
                         'showcontent': true
                     }
                 },
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
                     }
                     //PRESET TEXT:
                     //NOTE: Ventilation is important in maintaining healthy uninhabited areas (attics, crawl spaces), and a key consideration before adding or altering insulation quantity. Recommend frequent seasonal checks to be certain ventilation ports do not become inadvertently blocked by pests, wind currents, or the movement or addition of new insulation.
                 },
                 'images': []
             },
             'Crawl Spaces/Unfinished Basements': {
                 'presettext': {},
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
                 }
             },
             'Interior Mechanical Ventilation/Exhaust Fans': {
                 'presettext': {
                     'Conditions': {
                         'content': '.',
                         'showcontent': true
                     },
                     'Limitations': {
                         'content': '.',
                         'showcontent': true
                     }
                 },
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
                     }
                     //PRESET TEXT HERE:
                     //Note: To minimize unwanted moisture accumulation or humidity concerns, recommend regular use of adequate exhaust fans in kitchens, laundries, bathrooms, and other moisture producing areas with sealed venting to outside the building envelope. Routine maintenance is recommended to ensure that noisy, worn, or dirty fans are serviced or replaced as needed.
                 },
                 'images': []
             }
         },
         'Plumbing': {
             'Plumbing System': {
                 'presettext': {
                     'Conditions': {
                         'content': 'An inspection of the plumbing system includes visible water supply lines; visible drain/waste / soil and vent lines; fixtures and faucets; domestic hot water system and fuel source, and includes operating fixtures in order to observe functional flow, check for functional drainage from fixtures, and describe the visible water supply and distribution piping materials; drain, waste and vent materials; water-heating equipment, and any deficiencies of these systems or components. This section reports: (1)The presence and location of the main water shutoff valve and/or fuel shutoff valve(s), or reports that they were not found, (2)The presence and functionality of sump pumps/waste ejector pumps when visible or confirms the float switch activates the pump when the sump is dry, and (3)Whether or not the water temperature was tested, and the presence of the temperature and pressure relief (TPR) valve and associated piping. The generally accepted maximum safe water temperature is one hundred twenty degrees (120°) Fahrenheit.',
                         'showcontent': true
                     },
                     'Limitations': {
                         'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-100 of the Washington State Dept. of Licensing, the inspector is not required to operate any valves, including faucets of freestanding or built-in appliances or fixtures, (if the outlet end of the valve or faucet is connected or intended to be connected to an appliance), any plumbing components not readily accessible, or inspect any system that is shut down or winterized; or determine the quantity of water from on-site water supplies, the condition and operation of private water supply systems or water wells and related pressure tanks and pumps, the potability of any water supply whether public or private, or water-conditioning equipment, including softeners and filter systems; or test pressure or temperature/pressure relief valves, gas supply systems, ignite pilot lights, test fire sprinkler systems, or ancillary systems or components such as, but not limited to, those related to solar water heating and hot water circulation; or test shower pans for leaks, or use special equipment to test/scan shower or tub surrounds for moisture in surrounding substrate materials; or test exterior drain systems or floor drains, including but not limited to, exterior stairwell drains and driveway drains; or test interior components of exterior pumps, or sealed sanitary waste lift systems, or the quality or the condition and operation of on-site sewage disposal systems such as waste ejector pumps, cesspools, septic tanks, drain fields, related underground piping, conduit, cisterns, and related equipment.',
                         'showcontent': true
                     }
                 },
                 'checkboxes': {
                     'Water Supply Source': { //NEED MORE DATA!
                         'Public Water': false,
                         'Public Well': false, //THIS IS MADE UP
                         'Private Well': false, //THIS IS MADE UP
                         'OTHER (NEED MORE DATA)': false
                     },
                     'Main Water Shut Off Valve Location': { //THIS REQUIRES MORE DATA.
                         'Closet': false,
                         'Bathroom': false,
                         'OTHER (NEED MORE DATA)': false
                     },
                     'Water Pressure': { //THIS REQUIRES MORE DATA.
                         'Less than 45': false,
                         'Approximately 45-55': false,
                         'Approximately 55-65': false,
                         'Approximately 65-75': false,
                         'Approximately 75-85': false,
                         'OTHER (NEED MORE DATA)': false
                     },
                     'Water Temperature': { //THIS REQUIRES MORE DATA.
                         'Varies Per Unit': false,
                         'OTHER (NEED MORE DATA)': false
                     },
                     'Water System': { //THIS REQUIRES MORE DATA.
                         'Public Sewer': false,
                         'OTHER (NEED MORE DATA)': false
                     },
                     'Main Entry Piping': {
                         'Copper': false,
                         'Galvanized': false,
                         'Plastic/CPVC': false,
                         'Polybutylene': false,
                         'PEX': false
                     },
                     'Condition': {
                         'Not Visible': false,
                         'Leaking': false,
                         'Unprotected/Freezing': false,
                         'Discolered Water': false,
                         'Odor': false
                     },
                     'Pressure': {
                         'LIST PRESSURE?': false,
                         'Low': false,
                         'High': false,
                         'Normal': false,
                         'Inoperable': false,
                         'Shut-Off': false,
                         'Winterized': false
                     },
                     'Water Lines': {
                         'Copper': false,
                         'Galvanized': false,
                         'Plastic/CPVC': false,
                         'Polybutylene': false,
                         'PEX': false
                     },
                     'Condition': {
                         'Not Fully Visible': false,
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Cross Connections': false,
                         'Leaks': false
                     },
                     'Lead (other than solder joints)': {
                         'Service Entry': false,
                         'Unknown': false,
                         'Unlikely': false
                     },
                     'Disimilar Metal Connection (Potential Electrolysis)': {
                         'Yes': false,
                         'No': false,
                         'Not Visible': false
                     },
                     'DMV Piping': {
                         'Copper': false,
                         'Cast Iron': false,
                         'Galvanized': false,
                         'Plastic/ABS/PVC': false
                     },
                     'Condition': {
                         'Not Fully Visible': false,
                         'Satisfactory': false,
                         'Maginal': false,
                         'Poor': false,
                         'Leaks': false,
                         'Unsupported': false
                     }
                 },
                 'images': []
             },
             'Faucets/Fixtures': {
                 'presettext': {},
                 'checkboxes': {
                     'Faucets': {
                         'Functional': false,
                         'Intermittent Function': false,
                         'Inoperable': false,
                         'Missing/Incomplete': false,
                         'Loose': false,
                         'Broken/Damaged': false
                     },
                     'Leaking': {
                         'Hose Bibb': false,
                         'Wall Stop': false,
                         'Faucet': false,
                         'Sprayer': false
                     },
                     'Location': {
                         'Kitchen': false,
                         'Master Bath': false,
                         'Main Bath': false,
                         'Half Bath': false,
                         'Laundry': false,
                         'Bar': false
                     },
                     'Accessories': {
                         'Vegetable Sink': false,
                         'Insta-Hot': false,
                         'Water Filter': false,
                         'Ice Maker': false
                     },
                     'Disposer': {
                         'Noisy': false,
                         'Defective': false
                     },
                     'Dishwasher': {
                         'Airgap': false
                     },
                     'Condition': {
                         'Functional': false,
                         'Inoperable': false,
                         'Intermittent Function': false,
                         'Defects/Damage': false
                     },
                     'Sinks/Fixtures': {
                         'Functional': false,
                         'Surface Damage': false,
                         'Cabinet Damage': false,
                         'Cross Connection': false,
                         'Improve Caulking at Sink, Back-Splash, Tub Deck, Shower Surround, Floor, Wood or MDF Molding': false
                     },
                     'Grout Condition': {
                         'Unsealed (Recommend Sealing)': false,
                         'Cracked/Loose/Missing Grout': false
                     },
                     'Drainage': {
                         'Functional': false,
                         'Missing Stopper': false,
                         'Missing/Inoperable Overflow': false,
                         'Clog/Slow Drain': false,
                         'Stained Drainpipe': false,
                         'Drips/Leaks': false,
                         'Defects/Damage': false,
                         'Unsafe': false,
                         'Re-Evaluate': false
                     },
                     'Location': {
                         'Kitchen': false,
                         'Master Bath': false,
                         'Main Bath': false,
                         'Half Bath': false,
                         'Laundry': false,
                         'Bar': false
                     },
                     'Toilet': {
                         'Satisfactory': false,
                         'Inoperable': false,
                         'Runs Continuously': false,
                         'Leaks': false,
                         'Loose Bowl': false,
                         'Damage': false
                     },
                     'Tub/Shower Surround(s)': {
                         'Ceramic': false,
                         'FG': false,
                         'Masonite/Laminate': false,
                         'Slab': false,
                         'Jacuzzi': false
                     },
                     'Condition': {
                         'Functional': false,
                         'Inoperable': false,
                         'Stains': false,
                         'Cross Connection': false,
                         'Defective': false,
                         'Loose Tile': false,
                         'Cracked/Broken': false,
                         'Leaky Shower Head': false,
                         'Leaky Faucet': false,
                         'Leaky Sprayer': false
                     },
                 },
                 'images': []
             },
             'Water Heater': {
                 'presettext': {},
                 'checkboxes': {
                     'Energy Source': {
                         'Gas/Propane': false,
                         'Electric': false,
                         'Oil': false,
                         'Solar': false,
                         'Geo Thermal': false
                     },
                     'Brand Name': { //NEEDS MORE DATA.
                         'American': false,
                         'OTHER (NEEDS MORE DATA)': false
                     },
                     'Approximate Age (Years Old)': { //NEEDS MORE DATA.
                         '1': false,
                         '2': false,
                         '3': false,
                         '4': false,
                         '5': false,
                         '6': false,
                         '7': false,
                         '8': false,
                         '9': false,
                         '10': false,
                         'OTHER (NEEDS MORE DATA)': false
                     },
                     'Capacity (in Gallons)': {
                         '10': false,
                         '20': false,
                         '30': false,
                         '40': false,
                         '50': false,
                         'OTHER (NEEDS MORE DATA)': false
                     },
                     'Model #': { //THIS IS A TEXT ENTRY FIELD
                         'TEXT ENTRY FIELD': false
                     },
                     'Serial #': { //THIS IS A TEXT ENTRY FIELD
                         'TEXT ENTRY FIELD': false
                     },
                     'Water Temperature': { //NEEDS MORE DATA
                         'OTHER (NEEDS MORE DATA)': false
                     },
                     'Condition': {
                         'Inoperable': false,
                         'Data Plate Inaccessible/Illegible': false,
                         'Missing/Loose Seismic Restraints': false
                     },
                     'TPRV Connection': {
                         'Satisfactory': false,
                         'Missing': false,
                         'Reduced Extension': false,
                         'Poor Extension Termination': false
                     },
                     'Exhaust': {
                         'n/a': false,
                         'Metal': false,
                         'Flex Ducting': false,
                         'PVC': false,
                         'Condensate': false,
                         'Rust': false,
                         'Corrosion': false,
                         'Verify Proper Pitch': false,
                         'Disconnected': false,
                         'Into Masonry Chase': false,
                         'Missing Liner': false,
                         'Back-Drafting': false,
                         'Unsafe': false,
                         'Recommend Professional Re-Evaluation and/or Remediation': false
                     }
                 },
                 'images': []
             }
         },
         'Heating/Cooling': {
             'Heating System': {
                 'presettext': {
                     'Conditions': {
                         'content': 'The inspection of the heating system includes the fuel source; heating equipment; heating distribution; operating controls; visible portions of flue pipes, chimneys and venting, installed auxiliary heating units, deficiencies of the systems or components, and reports any evidence that indicates the possible presence of an underground storage tank. Each habitable space in the home was inspected to determine whether or not there was a functioning heat source present and operable, using normal readily accessible control devices. Access panels or covers provided by the manufacturer or installer, if readily accessible and detachable, were opened. The report describes the existing operation of: electric baseboard and in-wall heaters to ensure they are functional, central heating units and distribution systems, visible flue pipes and related components to ensure functional operation and proper clearance from combustibles, spaces where fossil fuel burning heating devices are located to ensure there is air for combustion.',
                         'showcontent': true
                     },
                     'Limitations': {
                         'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-120 of the Washington State Dept. of Licensing, the inspector is not required to determine adequacy of combustion air, or the capacity, adequacy, or efficiency of a heating system, or evaluate thermostats or controls other than to confirm that they actually turn a system on or off. The inspector did not remove covers or panels that were not readily accessible or removable, or dismantle any equipment, controls, or gauges except readily identifiable access covers designed to be removed by users. The inspector is not required to ignite pilot lights, or operate heating devices or systems that have been shut down, do not respond to normal controls, or any heating system when circumstances are not conducive to safe operation or when doing so will damage the equipment, inspect or evaluate heat exchangers concealed inside furnaces and boilers, the interior of chimneys and flues, and/or any heating equipment that is not readily accessible, or installed heating system accessories, such as humidifiers, air purifiers, motorized dampers, heat reclaimers; solar heating systems; or concealed distribution systems.',
                         'showcontent': true
                     }
                 },
                 'checkboxes': {
                     'Energy Source': {
                         'Gas': false,
                         'LP': false,
                         'Electric': false,
                         'Oil': false,
                         'Solar': false,
                         'Wind': false,
                         'Geo Thermal': false
                     },
                     'System Type': {
                         'Central Forced Air': false,
                         'In-Wall Space Heaters': false,
                         'Baseboard Wall': false,
                         'Radiant': false
                     },
                     'Boiler': {
                         'Water': false,
                         'Steam': false,
                         'Radiator': false
                     },
                     'Heat Pump': {
                         'Air': false,
                         'Water': false,
                         'Ground': false
                     },
                     'Stove': {
                         'Wood': false,
                         'Solid Fuel(Pellet)': false,
                         'Gas Log': false,
                         'Verify Clearance to Combustibles': false
                     },
                     'Solar': {
                         'Passive': false,
                         'Heat Sink': false,
                         'Photo-Voltaic': false,
                         'Panels': false,
                         'Convection': false
                     },
                     //PRESET TITLE: Central Furnace or Heat Pump
                     'Brand Name': { //NEED MORE DATA
                         'Bryant': false,
                         'OTHER (NEED MORE DATA)': false
                     },
                     'Capacity': { //NEED MORE DATA
                         'Text Entry?': false,
                         'OTHER (NEED MORE DATA)': false
                     },
                     'Year of Manufacture': { //NEEDS TO BE ABLE TO SELECT A YEAR
                         'SELECT A YEAR': false
                     },
                     'Model #': { //TEXT ENTRY FIELD HERE.
                         'TEXT ENTRY REQUIRED': false
                     },
                     'Serial #': { //TEXT ENTRY FIELD HERE.
                         'TEXT ENTRY REQUIRED': false
                     },
                     'Posted Service History': {
                         'Satisfactory (Annual Safety)': false,
                         'Missing/Old': false,
                         'Last Serviced n/a': false
                     },
                     'Condition': {
                         'Satisfactory': false,
                         'Inoperable': false,
                         'Dusty Cabinet': false,
                         'Rust': false,
                         'Corrosion': false,
                         'Flame Distortion': false
                     },
                     'Ducting': {
                         'Plenum & Cold Air Returns': false,
                         'Metal Duct': false,
                         'Insulated Flex Duct': false
                     },
                     'Reduced Vent': {
                         'Metal': false,
                         'PVC': false,
                         'Verify Proper Pitch': false,
                         'Rusted': false,
                         'Deteriorated': false,
                         'Disconnected': false,
                         'n/a': false
                     },
                     'Filter': {
                         'n/a': false,
                         'Electrostatic': false,
                         'Paper': false,
                         'Filter Fabric': false,
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor/Dirty': false
                     },
                     'Disconnect or Typical Safety Controls': {
                         'Functional': false,
                         'Verify Location/Function': false,
                         'Hazard': false,
                         'Recommend Professional HVAC Re-Evaluation, Safety Inspection, and/or Remediation': false
                     }
                 },
                 'images': []

             },
             'Fireplaces/Stoves': {
                 'presettext': {
                     'Conditions': {
                         'content': 'The inspection of solid fuel and gas fireplaces, or heating stoves includes the readily visible components, the fuel source, damper, fire-box, and hearth. Each fireplace or heating stove in the home, including dampers, fire-boxes and hearths was inspected using normal readily accessible control devices to determine whether or not there was a functional and operable heat source present, and to ensure there was air for combustion in spaces where fossil fuel burning heating devices were located. The findings area describes the heating units, visible flue pipes and related components to ensure functional operation and proper clearance from combustibles, and describes any deficiencies of these systems or components.',
                         'showcontent': true
                     },
                     'Limitations': {
                         'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-160 of the Washington State Dept. of Licensing, the inspector is not required to: (1)inspect flues or verify the presence of flue liners beyond what can be safely and readily seen from the roof or the firebox of a stove or fireplace, (2)inspect any solid fuel device being operated at the time of the inspection, (3)dismantle fireplaces or stoves to inspect fire-boxes or remove rain caps to inspect chimney flues, (3)evaluate the installation or adequacy of fireplace inserts, or modifications to a fireplace, stove, or chimney, or (4)ignite fires in a fireplace or stove, perform a chimney smoke test or determine the adequacy of draft.',
                         'showcontent': true
                     }
                 },
                 'checkboxes': {
                     'Fireplace/Stove Type': {
                         'Masonry Firebox': false,
                         'Metal FP Insert': false,
                         'Direct Vent Gas FP': false,
                         'Wood/Pellet Stove': false,
                         'Masonry Flue Liner': false,
                         'Metal Flue Liner': false,
                         'Unlined Chase': false,
                         'Venting Into Chimney Chase': false
                     },
                     'Mantle/Hearth': {
                         'Loose': false,
                         'Settling Cracks': false,
                         'Burned': false,
                         'Verify Clearance to Combustibles': false
                     },
                     'Firebox': {
                         'No Access': false,
                         'Missing Liner': false,
                         'Cracked Refractory Brick': false,
                         'Missing/Loose Mortar': false
                     },
                     'Damper': {
                         'Missing': false,
                         'No Access': false,
                         'Inoperable/DTO': false,
                         'Rusted': false,
                         'Damaged/Broken': false,
                         'Creosote Build-Up': false,
                         'Deterioration': false,
                         'Recommend Cleaning/Re-Evaluation/Repairs': false
                     },
                     'Chimney': {
                         'n/a': false,
                         'Framed': false,
                         'Masonry': false,
                         'Metal': false,
                         'Class B': false,
                         'DV Wall Hood': false,
                         'Cracked Wash': false,
                         'Loose Mortar': false,
                         'No Liner': false,
                         'No Spark Arrestor': false,
                         'Rust': false,
                         'Creosote': false,
                         'Missing Cricket': false,
                         'Inadequate/Missing Flashing': false,
                         'Damaged': false,
                         'Missing Burn Guard': false,
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Recommend Professional Re-Evaluation/Remediation': false
                     },
                 },
                 'images': []

             },
             'Cooling Systems': {
                 'presettext': {
                     'Conditions': {
                         'content': 'The inspection of the air conditioning system includes the cooling equipment; cooling distribution equipment, the energy sources, and a description noted in this report of any deficiencies of these systems or components: (1)Where an air conditioning system is present, readily accessible access panels or covers provided by the manufacturer or installer were opened to inspect the air conditioning system. (2)Where conditions allowed use of normal control devices, function of the controls and operative components of the complete system were inspected, and temperature differential was measured and recorded. (3)Interior exhaust fans and/or furnace blower motors may be present and/or operational at the time of the inspection but do not provide cooling. (BOLD THIS)Heat pump cycles were NOT reversed, and if outdoor temperatures were below 60 degrees during the past 72hrs, A/C systems were NOT tested.(BOLD THIS)',
                         'showcontent': true
                     },
                     'Limitations': {
                         'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-130 of the Washington State Dept. of Licensing, the inspector is not required to determine the efficiency, or adequacy of the system, activate cooling systems that have been shut down, or operate cooling system components if the exterior temperature is below sixty degrees Fahrenheit, when doing so might damage the equipment, or when other circumstances are not conducive to safe operation, remove covers or panels that are not readily accessible or dismantle any equipment, controls, or gauges except readily identifiable access covers designed to be removed by users, check the coolant pressure / charge, or inspect the system for refrigerant leaks, inspect gas-fired refrigeration systems, evaporative coolers, wall or window-mounted air-conditioning units, evaluate digital-type thermostats or controls, or determine how much current the unit is drawing.',
                         'showcontent': true
                     }
                 },
                 'checkboxes': {
                     'Temperature Differential': { //NEEDS MORE DATA
                         'TEXT ENTRY FIELD': false,
                         'NOT Tested': false
                     },
                     'A/C Type': { //NEEDS MORE DATA
                         'n/a': false,
                         'Inoperable': false,
                         'OTHER (NEEDS MORE DATA)': false
                     },
                     'Energy Source': {
                         'Natural Gas': false,
                         'Propane': false,
                         'Electric': false,
                         'Central Air': false,
                         'Heat Pump': false,
                         'Fan Cooled': false,
                         'Water': false,
                         'Gas Chiller': false,
                         'Swamp Cooler': false
                     },
                     'Evaporative Coil or Heat Pump (Inside) Brand Name': { //NEEDS MORE DATA.
                         'Bryant': false,
                         'OTHER (NEEDS MORE DATA)': false
                     },
                     'Capacity': {
                         'n/a': false,
                         'OTHER (NEEDS MORE DATA)': false
                     },
                     'Year of Manufacture': {
                         '1996': false,
                         'YEAR ENTRY NEEDED': false
                     },
                     'Model #': { //NEED TEXT FIELD ENTRY HERE.
                         'TEXT FIELD ENTRY': false
                     },
                     'Serial #': { //NEED TEXT FIELD ENTRY HERE.
                         'TEXT FIELD ENTRY': false
                     },
                     'Compressor/Condenser (Outside) Brand Name': {
                         'Bryant': false,
                         'OTHER (NEEDS MORE DATA)': false
                     },
                     'Capacity': {
                         'n/a': false,
                         'OTHER (NEEDS MORE DATA)': false
                     },
                     'Year of Manufacture': {
                         '1996': false,
                         'YEAR ENTRY NEEDED': false
                     },
                     'Model #': { //NEED TEXT FIELD ENTRY HERE.
                         'TEXT FIELD ENTRY': false
                     },
                     'Serial #': { //NEED TEXT FIELD ENTRY HERE.
                         'TEXT FIELD ENTRY': false
                     },
                     'Condition': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Uneven Base': false,
                         'Inadequate Base Height': false,
                         'Obstructed Flow': false
                     },
                     'Refrigerant Lines': {
                         'Satisfactory': false,
                         'Leaking': false,
                         'Damaged': false,
                         'Worn': false,
                         'Insulation Missing': false
                     }
                 },
                 'images': []
             }
         },
         'Electrical': {
             'Electrical System': {
                 'presettext': {
                     'Conditions': {
                         'content': 'The inspection of the readily visible electrical system includes the service drop through the main panel; sub- panels including feeders; branch circuits, connected devices, and lighting fixtures, and describes any deficiencies of these systems or components. The report defines the type of primary service, whether overhead or underground, voltage, amperage, over-current protection devices (fuses or breakers) by inspecting the main and branch circuit conductors for proper over-current protection and condition by visual observation after removal of the readily accessible electrical main and sub-panel cover(s) where applicable, any circuit breaker panel or sub-panel known within the home inspection profession to have safety concerns, identifies whether or not existence of a connected service- grounding conductor and service-grounding electrode can be confirmed, and the presence or absence of solid conductor aluminum branch circuits, verifies the operation of a representative number of accessible switches, receptacles and light fixtures, the grounding and polarity of a representative number of receptacles (particularly in close proximity to plumbing fixtures or at the exterior), the function or absence of ground fault circuit interrupter (GFCI) protection and arc-fault circuit interrupter (AFCI) protection where recommended by industry standards.',
                         'showcontent': true
                     },
                     'Limitations': {
                         'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-110 of the Washington State Dept. of Licensing, the inspector is not required to: insert any tool, probe or testing device into the main or sub-panels, activate electrical systems or branch circuits that are not energized, operate circuit breakers, service disconnects or remove fuses, verify the continuity of connected service ground(s), or test every switch, receptacle, and fixture, move any objects, furniture, or appliances to gain access to any electrical component, remove switch and receptacle cover plates, dismantle any electrical device or control, except for the removal of the dead-front covers from the main service panel and sub-panels, or inspect electrical equipment thatAPOSTRPHEs not readily accessible, or ancillary systems, including but not limited to: timers, security systems, low voltage relays, smoke/heat detectors, antennas, intercoms, electrical de- icing tapes, lawn sprinkler wiring, swimming pool or spa wiring, central vacuum systems.(BOLD THIS) Solid conductor aluminum wiring may be hazardous and if reported, a licensed electrician should inspect the system to ensure itAPOSTROPHEs safe. Homes without ground fault protection should have GFCI devices installed, replaced, or upgraded where recommended by industry standards.(BOLD THIS)',
                         'showcontent': true
                     }
                 },
                 'checkboxes': {
                     'Main Service Entry': {
                         'Underground': false,
                         'Yard Post': false,
                         'Not Visible/Accessible': false,
                         'In Conduit': false,
                         'Overhead': false,
                         'Pole Unstable': false,
                         '3 Cables': false,
                         '4 Cables': false,
                         'Copper': false,
                         'Aluminum': false
                     },
                     'Condition': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Inadequate Clearances': false,
                         'Damage': false,
                         'Hazard': false
                     },
                     'Service Size': {
                         'AMPS (NEED MORE DATA)': false,
                         'VOLTS (NEED MORE DATA)': false
                     },
                     'Ground Connection': {
                         'Visible': false
                     },
                     'Meter Location': {
                         'Exterior Wall': false,
                         'Yard Post': false,
                         'Mechanical Closet': false,
                         'Not Visible/Locked': false
                     },
                     'Meter Condition': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Inadequate Access': false,
                         'Damage': false,
                         'Hazard': false
                     },
                     'Grounding': {
                         'Not Visible': false,
                         'Ground Rods': false,
                         'Ufer': false,
                         'Bonded to Water/Gas Piping': false
                     },
                     'Ground Wiring': {
                         'Copper': false,
                         'Aluminum': false,
                         'Missing': false,
                         'Not Visible/Accessible': false
                     },
                     'Condition': {
                         'Satisfactory': false,
                         'Loose Clamp/Lug': false,
                         'Missing': false,
                         'Improper Bond': false,
                         'Too Far From Entry': false
                     },
                     'Main Electrical Disconnect Location': {
                         'With Meter': false,
                         'Inside Main Panel': false,
                         'Near Panel': false,
                         'Fuse': false,
                         'Breaker': false,
                         'Switch': false,
                         'Split-Bus': false,
                         'Overloaded(>6 Hand Motions)': false
                     },
                     'Main Panel': {
                         'Not Visible/Accessible': false,
                         'Blocked': false,
                         'Not Evaluated': false
                     },
                     'Reason for Non Evaluation': {
                         'n/a': false,
                         'OTHER (NEED MORE DATA)': false
                     },
                     'Breakers or Fuses': {
                         'Breakers': false,
                         'Fuses': false
                     },
                     'Amps': { //NEED MORE DATA
                         'NEED MORE DATA': false
                     },
                     'Volts': { //NEED MORE DATA
                         '240': false,
                         'OTHER (NEED MORE DATA)': false
                     },
                     'Breaker(s)': {
                         'GFCI Breakers': false,
                         'AFCI Breakers': false,
                         'n/a': false
                     },
                     'Location': {
                         'Garage': false,
                         'Basement': false,
                         'With Meter': false,
                         'Exterior Wall': false,
                         'Yard Post': false,
                         'Interior Wall': false,
                         'Mechanical Room': false,
                         'Laundry Room': false,
                         'Utility Area': false,
                         'Crawl Space': false
                     },
                     'Branch Wiring': {
                         'Copper': false,
                         'Almuninum': false,
                         'Tin Clad Copper': false,
                         'Copper Clad Aluminum': false,
                         'Non-Metallic Sheathed': false,
                         'BX Cable': false,
                         'Condiut': false,
                         'Cloth-Wrapped': false,
                         'Knob & Tube': false
                     },
                     'Condition': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Inoperable': false,
                         'Inadequate Access Clearances': false,
                         'Dangling Wires': false,
                         'Excessive Sheathing in Panel': false,
                         'Double-Tapping': false,
                         'Undersized Wiring': false,
                         'Damage': false,
                         'Rust': false,
                         'Buried In Insulation': false,
                         'Burned Breakers': false,
                         'Dangerous Panel Type': false,
                         'Improper Splicing': false,
                         'Hazardous/Unsafe': false,
                         'Recommend Professional Evaluation/Repairs': false
                     }
                 },
                 'images': []
             },
             'Fixtures/Switches/Detectors': {
                 'presettext': {},
                 'checkboxes': {
                     'Fixtures': {
                         'Missing/Removed': false,
                         'Inoperable': false,
                         'Missing Bulbs': false,
                         'Missing Covers': false,
                         'Gaps': false
                     },
                     'Fixtures Condition': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Inadequate Clearances': false,
                         'Damage': false,
                         'Hazard': false
                     },
                     'Switches/Receptacles': {
                         'Typical Grounded': false,
                         'Some Grounded': false,
                         'Typical Un-Grounded': false
                     },
                     'Condition': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Inoperable': false,
                         'Weak/Loose': false,
                         'Missing/Removed': false,
                         'Missing Cover Plates': false,
                         'Dangling/Unmounted': false,
                         'External Splicing': false,
                         'Gaps Into Boxes': false,
                         'Burned': false,
                         'Open Ground': false,
                         'Open Neutral': false,
                         'Reverse Polarity': false,
                         'Ungrounded 3-Prong': false,
                         'Damaged': false,
                         'Hazardous/Unsafe': false,
                         'Recommend Repair/Evaluation by Professional Electrician': false
                     },
                     'Carbon Monoxide Detectors': {
                         'Installed': false,
                         'Missing/Recommended': false,
                         'NOT Tested': false
                     },
                     'Smoke Detectors': {
                         'Installed': false,
                         'Inoperable': false,
                         'Chirping/Low Batteries': false,
                         'Missing': false
                     }
                     //PRESET TEXT HERE:
                     //CAUTION: Testing Detectors by pushing test buttons may be inconclusive
                 },
                 'images': []
             }
         },
         'Interior': {
             'Living Room': {
                 'presettext': {
                     'Conditions': {
                         'content': 'The inspection of the interior includes the walls, ceilings, floors, windows, and doors; steps, stairways, balconies and railings. The interior walls, ceilings, and floors were inspected for indications of concealed structural deficiencies, water infiltration, or major damage. The report verifies that steps, handrails, guard-rails, stairways and landings are installed wherever necessary, and indicates when they are missing or in need of repair, or when baluster spacing exceeds four inches, the condition and operation of a representative number of windows and doors, the overall general condition of cabinets and countertops, grout, and caulking at kitchen and bathroom counters, describes any non-cosmetic deficiencies of these systems or components, and comments on the presence or absence of smoke detectors.',
                         'showcontent': true
                     },
                     'Limitations': {
                         'content': 'According to the Home Inspection Standards of Practice WAC § 308-408C-140 of the Washington State Dept. of Licensing, the inspector is not required to verify whether all walls, floors, ceilings, doorways, cabinets and window openings are square, straight, level or plumb, operate any system or component that is shut down, not connected or otherwise inoperable, or that does not respond to normal user controls, the strength, adequacy, effectiveness, or efficiency of any system or component; causes of any condition, or deficiency the remaining service life of any system or component; or the methods, materials, or cost of corrections; future conditions including, but not limited to, failure of systems and components or report on cosmetic conditions related to the condition of interior components.',
                         'showcontent': true
                     }
                 },
                 'checkboxes': {
                     'Entry Door(s)': {
                         'n/a': false,
                         'Solid Wood': false,
                         'Metal': false,
                         'Fiberglass': false,
                         'Panel': false,
                         'Hollow Core': false
                     },
                     'Entry Door(s) Condition': {
                         'Sagging/Settled': false,
                         'Rubbing/Binding': false,
                         'Damaged': false,
                         'Hardware Issues': false,
                         'Doorbell Inoperable': false
                     },
                     'Weatherstrip': {
                         'Missing/Damaged': false,
                         'Poor Seal': false,
                         'Ineffective Threshold': false
                     },
                     'Window(s)': {
                         'Satisfactory': false,
                         'Inaccessible': false,
                         'Difficult To Operate (Needs Adjustment/Lubrication)': false,
                         'Missing Hardware': false,
                         'Inadequate Security': false,
                         'Failed Thermal Seals': false,
                         'Broken Panes': false,
                         'Stained': false,
                         'Weathered Sills': false,
                         'Mold/Mildew': false,
                         'Damage': false,
                         'Deterioration': false
                     },
                     'Ceiling Fan': {
                         'n/a': false,
                         'Inoperable': false,
                         'Satisfactory': false
                     },
                     'Heat Source': {
                         'Satisfactory': false,
                         'Missing/Inadequate': false
                     },
                     'Lights/Switches/Receptacles (Refer To Electrical Section)': {
                         'Appeared Functional': false,
                         'Loose/Worn': false,
                         'Missing': false,
                         'Inoperable': false,
                         'Missing Cover Plates': false,
                         'Ungrounded 3-Prong': false,
                         'Inoperable GFCI': false,
                         'Missing GFCI Protection': false,
                         'Reversed Polarity': false,
                         'OG/RP Within 6 Feet': false,
                         'Burned': false,
                         'Exposed Wires': false,
                         'Hazardous/Unsafe': false,
                         'Recommend Professional Evaluation': false
                     },
                     //COMMENTS SECTION HERE.
                 },
             },
             'Kitchen': {
                 'presettext': {},
                 'checkboxes': {
                     'Appliances': {
                         'Sink Disposer': false,
                         'Fridge': false,
                         'Dishwasher': false,
                         'Oven': false,
                         'Range': false,
                         'Microwave': false,
                         'Warmer': false,
                         'Trash Compactor': false,
                         'Cooler': false,
                         'Water Filter': false,
                         'Instant Hot': false
                     },
                     'Cabinets': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Damaged': false,
                         'Worn Finish': false,
                         'Loose Drawers/Hinges': false
                     },
                     'Countertops': {
                         'Granite': false,
                         'Laminate': false,
                         'Tile': false,
                         'Slab': false
                     },
                     'Countertops Condition': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Worn': false,
                         'Damaged': false
                     },
                     'Backsplash & Self Edge': {
                         'Satisfactory': false,
                         'Marginal/Worn': false,
                         'Poor': false
                     },
                     'Caulking': {
                         'Satisfactory': false,
                         'Worn/Cracked/Gaps': false,
                         'Improve at Sink, Back-Splash, Counters, or Fixtures': false
                     },
                     'Grout': {
                         'Satisfactory': false,
                         'Cracked/Missing': false,
                         'Loose': false,
                         'Water Damage': false,
                         'Recommend Sealing': false
                     },
                     'Exhaust Fan': {
                         'Satisfactory': false,
                         'Missing': false,
                         'Inoperable': false
                     },
                     'Heat Source': {
                         'Satisfactory': false,
                         'Missing/Inadequate': false
                     },
                     'Lights/Switches/Receptacles (Refer To Electrical Section)': {
                         'Appeared Functional': false,
                         'Loose/Worn': false,
                         'Missing': false,
                         'Inoperable': false,
                         'Missing Cover Plates': false,
                         'Ungrounded 3-Prong': false,
                         'Inoperable GFCI': false,
                         'Missing GFCI Protection': false,
                         'Reversed Polarity': false,
                         'OG/RP Within 6 Feet': false,
                         'Burned': false,
                         'Exposed Wires': false,
                         'Hazardous/Unsafe': false,
                         'Recommend Professional Evaluation': false
                     }
                 }
             },
             'Laundry': {
                 'presettext': {},
                 'checkboxes': {
                     'Appliances': {
                         'None': false,
                         'Inoperable': false,
                         'Washer': false,
                         'Dryer': false,
                         'WH': false,
                         'Furnace': false,
                         'Conditioner': false
                     },
                     'Dryer': {
                         'Electric': false,
                         'Gas': false,
                         'Inoperable/OFF': false,
                         'Cap Needed': false,
                         'Hazard(s)': false,
                         'Recommend Re-Evaluation': false
                     },
                     'Exhausted': {
                         'Wall': false,
                         'Ceiling': false,
                         'Floor': false
                     },
                     'Exhaust Appears': {
                         'Satisfactory': false,
                         'Clogged/Loose/Poor': false
                     },
                     'Exhaust Fan': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Weak/Noisy': false,
                         'Inoperable': false,
                         'Missing': false
                     },
                 },
             },
             'Bathroom(s)': {
                 'presettext': {},
                 'checkboxes': {
                     'Walls/Ceilings': {
                         'GWB': false,
                         'Lath & Plaster': false,
                         'Acoustic Tile': false,
                         'Paneling': false,
                         'Open Beam': false
                     },
                     'Condition': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Stains/Mildew': false,
                         'Cracks': false,
                         'Repairs': false,
                         'PACM': false
                     },
                     'Floors': {
                         'Covered': false,
                         'Sloping': false,
                         'Squeaks': false,
                         'Damaged': false,
                         'Fungal Rot': false
                     },
                     'Caulking': {
                         'Worn/Cracked/Gaps': false,
                         'Improve At Sink, Back-Splash, Tub/Shower Surround/ or Floor': false
                     },
                     'Heat': {
                         'Yes': false,
                         'No': false,
                         'Inoperable': false
                     },
                     'Exhaust Fan': {
                         'Yes': false,
                         'No': false,
                         'Inoperable': false
                     },
                     'Lights/Switches/Receptacles (Refer To Electrical Section)': {
                         'Appeared Functional': false,
                         'Loose/Worn': false,
                         'Missing': false,
                         'Inoperable': false,
                         'Missing Cover Plates': false,
                         'Ungrounded 3-Prong': false,
                         'Inoperable GFCI': false,
                         'Missing GFCI Protection': false,
                         'Reversed Polarity': false,
                         'OG/RP Within 6 Feet': false,
                         'Burned': false,
                         'Exposed Wires': false,
                         'Hazardous/Unsafe': false,
                         'Recommend Professional Evaluation': false
                     }
                 }
             },
             'Interior': {
                 'presettext': {},
                 'checkboxes': {
                     'Walls/Ceilings': {
                         'GWB': false,
                         'Lath & Plaster': false,
                         'Acoustic Tile': false,
                         'Paneling': false,
                         'Open Beam': false
                     },
                     'Condition': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Stains': false,
                         'Moisture/Mildew': false,
                         'Water Damage': false,
                         'Settling': false,
                         'Truss Uplift': false,
                         'Nail Pops': false,
                         'Holes': false,
                         'Cracks': false,
                         'Inadequate Repairs/Texture': false,
                         'Sooting': false,
                         'PACM': false,
                         'Hazardous/Unsafe': false,
                         'Recommend Professional Evaluation': false
                     },
                     'Floor Coverings': {
                         'Hard Surfaces (Tile/Stone)': false,
                         'Hardwood/Laminate': false,
                         'Vinyl': false,
                         'Carpet': false
                     },
                     'Condition': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Excessive Wear': false,
                         'Squeaks': false,
                         'Stains': false,
                         'Damage': false,
                         'Sloping': false,
                         'Uneven Surfaces': false,
                         'Holes': false,
                         'Wrinkled Carpet': false,
                         'Trip Hazard(s)': false,
                         'Repair(s)': false
                     },
                     'Interior Doors': {
                         'Passage': false,
                         'Pocket': false,
                         'Double': false,
                         'Bi-Fold': false,
                         'Bi-Pass': false,
                         'Accordion': false
                     },
                     'Condition': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Inaccessible': false,
                         'Inoperable': false,
                         'Missing/Removed': false,
                         'Missing Hardware': false,
                         'Settled/Rubbing': false,
                         'Improperly Hung/Sagging': false,
                         'Holes': false,
                         'Stains': false,
                         'Cracked/Split Jambs': false,
                         'Damage': false,
                         'Inadequate Repairs': false,
                         'Recommend Servicing/Adjusting': false
                     },
                     'Window Type(s)': {
                         'Sliders': false,
                         'Fixed': false,
                         'Single Hung': false,
                         'Double Hung': false,
                         'Awning': false
                     },
                     'Window(s) Condition': {
                         'Satisfactory': false,
                         'Marginal': false,
                         'Poor': false,
                         'Difficult To Operate': false,
                         'Improve Security': false,
                         'Missing Hardware': false,
                         'Broken Panes': false,
                         'Failed Thermal Seals': false,
                         'Verify Bedroom Egress': false,
                         'Stained': false,
                         'Weathered Sills': false,
                         'Mold/Mildew': false,
                         'Damage': false,
                         'Deterioration': false
                     },
                     //INSERT PRESET TEXT HERE:
                     //Safety Concern: Where Bedrooms lack a door directly to the outside, a window should serve as an emergency egress.  Recommend regular evaluation and service (lubrication, adjustment) of bedroom windows to verify smooth operation and to ensure adequate emergency egress.
                     'Lights/Switches/Receptacles (Refer To Electrical Section)': {
                         'Appeared Functional': false,
                         'Loose/Worn': false,
                         'Missing': false,
                         'Inoperable': false,
                         'Missing Cover Plates': false,
                         'Ungrounded 3-Prong': false,
                         'Inoperable GFCI': false,
                         'Missing GFCI Protection': false,
                         'Reversed Polarity': false,
                         'OG/RP Within 6 Feet': false,
                         'Burned': false,
                         'Exposed Wires': false,
                         'Hazardous/Unsafe': false,
                         'Recommend Professional Evaluation': false
                     }
                 },
                 'images': []
             }
         },
         'Life/Safety': {
             'Potential Safety Concerns': {

                     'Conditions': {
                         'type': 'presettext',
                         'content': 'This list of potential hazards is not complete, and provides only a general notification of some of the possible life safety or health concerns associated with building materials, systems, components, and the forces of nature that may impact them. Those particular safety concerns, which fall within the scope of a specific category, may be noted here, or in their applicable section(s). In addition, the inspection report may exclude those systems or components that a client specifically requests not to be included in the scope of the inspection. Comments and information in this section are provided in an effort to help educate the client regarding possible safety risks, which may need further evaluation, and are NOT to take the place of expert or professional advice.',
                         'showcontent': true
                     },
                     'Limitations': {
                         'type': 'presettext',
                         'content': 'The Home Inspection Standards of Practice of the Washington State Department of Licensing state that the inspector is NOT required to report the presence of potentially hazardous plants or animals including, but not limited to, wood destroying insects or diseases harmful to humans; the presence of any environmental hazards including, but not limited to mold, toxins, carcinogens, noise, contaminants, asbestos, lead, water, soil, air quality, or other environmental issues, or the effectiveness of any system installed or methods utilized to control or remove suspected hazardous substances. Unless specifically stated in the standards of practice, or in writing in the pre-inspection agreement, no safety hazards are included in the investigation.',
                         'showcontent': true
                     },


                     'Tripping/Falling Hazard(s)': {
                         'type': 'checkbox',
                         'n/a': false,
                         'Unsafe/Uneven Walking Surfaces': false,
                         'Re-Evaluate': true,
                         'Interior': false,
                         'Exterior': false,
                         'Steep Slope/Drop-Off': false,
                         'Retaining Wall': false,
                         'Driveway/Walkway(s)': false,
                         'Landing': false,
                         'Balcony': false,
                         'Patio': false,
                         'Deck': false,
                         'Steps/Stairs': false,
                         'Missing Guard/Handrail(s)': false,
                         'Low Guard/Handrail(s)': false,
                         'Root Heaving': false,
                         'Erosion': false,
                         'Cracks/Gaps/Missing Dividers': false
                     },
                     'Fire Hazards': {
                         'type': 'checkbox',
                         'n/a': false,
                         'None': false,
                         'Missing/Inadequate Firewall': false,
                         'Missing/Inadequate Fire-Door': false,
                         'Excessive Storage': false,
                         'Excessive Heat': false,
                         'Cellulose Debris': false,
                         'Roof Tear-Off Debris': false,
                         'Entrapment/Locks': false,
                         'Improve Bedroom Egress': false,
                         'Verify Adequate CO & Fire Alarms': false
                     },
                     'Pest Related': {
                         'type': 'checkbox',
                         'None': false,
                         'Ponding/Breeding Water': false,
                         'Potential Points of Pest Entry': false,
                         'Rat Droppings Toxins': false,
                         'Bee/Wasp Nests': false,
                         'Racoon': false
                     },
                     'Poisen Baits': {
                         'type': 'checkbox',
                         'Insect': false,
                         'Rodent': false
                     },
                     'Building Materials (Refer To Specific Sections': {
                         'type': 'checkbox',
                         'Missing Window Safety Glass': false,
                         'Electrical Shock Hazard(s)': false,
                         'Bio-Growth/Mold/Mildew': false,
                         'PACM': false,
                         'Friable ACM': false,
                         'Lead': false,
                         'Airborne/VOCs': false,
                         'Potential Hidden Hazard(s)': false
                     }
                     //INSERT COMMENTS SECTION HERE
                     //INSERT CONSUMER NOTICE(S) CONCERNING HAZARDS OR DEFICIENCES, LEAD, AND ASBESTOS)
             }
         },
         'Photo Appendix': {
             'Additional Photos for Further Clarification': {
                 'images': []

             }

         }
     };