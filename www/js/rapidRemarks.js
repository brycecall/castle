 var rapidRemarks = [
     {
     "title":"Major Concerns",
     "content" : [
        {"title":"Asbestos", "value":"This is the rapid remark value"}, //0
        {"title":"Asbestos", "value":"This is the rapid remark value"}, //1
        {"title":"Asbestos", "value":"This is the rapid remark value"}, //2
        {"title":"Asbestos", "value":"This is the rapid remark value"}  //3
     ]
    },
    {
     "title":"Not So Major Concerns",
     "content" : [
       {"title":"Asbestos", "value":"This is the rapid remark value"}, //0
       {"title":"Asbestos", "value":"This is the rapid remark value"}, //1
       {"title":"Asbestos", "value":"This is the rapid remark value"}, //2
       {"title":"Asbestos", "value":"This is the rapid remark value"}  //3
     ]
    }
 ];


var majorConcerns = {
    "0": 0,
    "1": {"Title":"Negative Grade", "Value":"Verify and improve ground surfaces around perimeter walls to slope away from building (min. 1 inch per foot) to encourage percolation of surface water into soil 5-6' from foundation wall.  Proper slope (eliminating negative grade) helps prevent moisture intrusion issues."},
    "2": "All earth or foliage to wood contact should be eliminated, and adequate separation should be maintained to prevent pest or moisture concerns, and to allow adequate space for service / maintenance work.  (Adequate separation minimums are roughly 6 to 8 inch to soil, and 10 to 12 inch to vegetation).",
    "3": "There was evidence of significantly damaged or deteriorated exterior cladding (siding and trim), and/or deck components, ie; swollen, bulging, stained, or deteriorated, with fungal rot (probed) at some boards.  Recommend re-evaluation of all exposed exterior wood components (cladding, trim, fascia, soffit, posts, stairs, decks, railings), and corrections made as necessary.",
    "4": "One or more retaining walls showed large cracks, holes, gaps, or other evidence of movement, settling or mechanical damage.  Recommend re-evaluation and remediation.",
    "5": "The retaining walls appeared to be leaning, or out of plumb.  Significant leaning is an indicator of excessive pressure, and should be re-evaluated prior to failure.",
    "6": "There was evidence of inadequate drainage from the retaining wall (stains, leaking water, silt deposits, or other drainage concerns).    Recommend re-evaluation and corrections as necessary.",
    "7": "The yard appeared to have inadequate slope and/or drainage to carry water away from the property.  Standing surface water can contribute to harmful pests and wood-destroying insects or organisms (WDI & WDO).  Also, during wet seasons, water retention may cause unsafe or slippery walking surfaces.s",
    "8": "There appeared to be erosion and/or inadequate support beneath walks, driveways, porches, retaining walls, or other exterior concrete.  Verify and improve soil and/or grading to provide adequate support.",
    "9": "Rapid remark",
    "10": "Rapid remark",
    "11": "Rapid remark",
    "12": "Rapid remark",
    "13": "Rapid remark",
    "14": "Rapid remark"

};


var deferredCostItems = {
    "0": "",
    "1": "The exterior finish appeared to be weathered or inadequate to protect exposed wood in outdoor conditions.  Recommend re-evaluation of exterior coverage (flaking, peeling, or missing paint) at exterior cladding, fascia, soffit, trim, & cantilevered floor soffit, and/or exposed, unprotected barge rafter tails, and/or cracked or missing caulking.",
    "2": "Rapid remark",
    "3": "Rapid remark",
    "4": "Rapid remark",
    "5": "Rapid remark",
    "6": "Rapid remark",
    "7": "Rapid remark",
    "8": "Rapid remark"

};

var potentialSafetyHazards = {
    "0": "Uneven edges at settled or cracked concrete walks & driveways, loose walkway stones, open gaps at missing dividers, holes, or severe root heaving, create uneven surfaces which may pose potential tripping or falling hazards.  Recommend monitoring of large or active cracks and remediation to provide safe perimeter driving and walking surfaces.",
    "1": "Excessive moss build-up on steps, concrete walks or patio surfaces may pose a slipping / falling hazard, especially during wet seasons.  Recommend remediation to provide safe perimeter walking surfaces.",
    "2": "Low, loose, or missing handrails or guardrails may pose a potential falling hazard.  Recommend installation of safe and secure handrails at all stairways, and guardrails where retaining walls, decks, drop-offs, steep slopes, or landing heights pose a potential falling hazard.",
    "3": "Safety fencing is required for specific yard features (over-height terracing, unguarded retaining walls, pools, ponds, or other water features).  Where safety fencing is low, missing, damaged, leaning, deteriorating, or otherwise inadequate, recommend re-evaluation and corrections as necessary to provide adequate safety barrier.",
    "4": "Common glass may be inadequate or unsafe when used in window or door areas currently requiring the use of safety glass.  Safety glass deficiencies are typically most notable near doors or in walkway or stairway areas, or where windows are less than 18” above the floor line.  Recommend re-evaluation of glass in vulnerable areas, and upgrading to safety, or tempered glass where appropriate.",
    "5": "The attachment of the deck floor joists to the house appeared to be inadequate (missing bolts, lag screws, or other appropriate fasteners through ledger into rim joist or wall studs).  Recommend re-evaluation and remediation.",
    "6": "Rapid remark",
    "7": "Rapid remark",
    "8": "Rapid remark",
    "9": "Rapid remark",
    "10": "Rapid remark",
    "11": "Rapid remark",
    "12": "Rapid remark",
    "13": "Rapid remark"
};

var itemsNotOperating = {
    "0": "Rapid remark",
    "1": "Rapid remark",
    "2": "Rapid remark",
    "3": "Rapid remark",
    "4": "Rapid remark",
    "5": "Rapid remark",
    "6": "Rapid remark"

};

var additionalItems = {
    "0": "Minor surface cracks in the exterior flatwork are usually caused by normal settling, and are generally expected, and typical of most concrete slabs poured over back-filled soils.",
    "1": "Rapid remark",
    "2": "Rapid remark",
    "3": "Rapid remark",
    "4": "Rapid remark",
    "5": "Rapid remark",
    "6": "Rapid remark"

};
