const COMPANY = {
    industries: [
        { name: "Aerospace &amp; Defense", children: [] },
        {
            name: "Agriculture",
            children: [
                { name: "Animal Production", children: [] },
                { name: "Crop Production", children: [] },
                { name: "Farm Support", children: [] },
                { name: "Fishery", children: [] },
                { name: "Floral Nursery", children: [] },
                { name: "Forestry, Logging & Timber Operations", children: [] },
            ],
        },
        {
            name: "Arts, Entertainment &amp; Recreation",
            children: [
                { name: "Culture & Entertainment", children: [] },
                { name: "Gambling", children: [] },
                { name: "Sports & Recreation", children: [] },
                { name: "Ticket Sales", children: [] },
            ],
        },
        {
            name: "Construction, Repair &amp; Maintenance Services",
            children: [
                { name: "Architectural & Engineering Services", children: [] },
                { name: "Commercial Equipment Services", children: [] },
                { name: "Construction", children: [] },
                { name: "General Repair & Maintenance", children: [] },
                { name: "Vehicle Repair & Maintenance", children: [] },
            ],
        },
        {
            name: "Education",
            children: [
                { name: "Colleges & Universities", children: [] },
                { name: "Education & Training Services", children: [] },
                { name: "Preschools & Child Care Services", children: [] },
                { name: "Primary & Secondary Schools", children: [] },
            ],
        },
        {
            name: "Energy, Mining &amp; Utilities",
            children: [
                { name: "Energy & Utilities", children: [] },
                { name: "Mining & Metals", children: [] },
            ],
        },
        {
            name: "Financial Services",
            children: [
                { name: "Accounting & Tax", children: [] },
                { name: "Banking & Lending", children: [] },
                { name: "Debt Relief", children: [] },
                { name: "Financial Transaction Processing", children: [] },
                { name: "Investment & Asset Management", children: [] },
                { name: "Stock Exchanges", children: [] },
            ],
        },
        {
            name: "Government &amp; Public Administration",
            children: [
                { name: "Municipal Agencies", children: [] },
                { name: "National Agencies", children: [] },
                { name: "State & Regional Agencies", children: [] },
            ],
        },
        {
            name: "Healthcare",
            children: [
                { name: "Ambulance & Medical Transportation", children: [] },
                { name: "Dental Clinics", children: [] },
                { name: "Hospitals & Health Clinics", children: [] },
                {
                    name: "Medical Testing & Clinical Laboratories",
                    children: [],
                },
                { name: "Nursing Care Facilities", children: [] },
            ],
        },
        {
            name: "Hotels &amp; Travel Accommodation",
            children: [
                { name: "Hotels & Resorts", children: [] },
                { name: "Travel Agencies", children: [] },
            ],
        },
        {
            name: "Human Resources &amp; Staffing",
            children: [
                { name: "HR Consulting", children: [] },
                { name: "Staffing & Subcontracting", children: [] },
            ],
        },
        {
            name: "Information Technology",
            children: [
                { name: "Computer Hardware Development", children: [] },
                {
                    name: "Information Technology Support Services",
                    children: [],
                },
                { name: "Internet & Web Services", children: [] },
                { name: "Software Development", children: [] },
            ],
        },
        {
            name: "Insurance",
            children: [
                { name: "Insurance Agencies & Brokerages", children: [] },
                { name: "Insurance Carriers", children: [] },
            ],
        },
        {
            name: "Legal",
            children: [
                { name: "Law Firms", children: [] },
                { name: "Legal Services", children: [] },
            ],
        },
        {
            name: "Management &amp; Consulting",
            children: [
                { name: "Business Consulting", children: [] },
                { name: "Membership Organizations", children: [] },
                { name: "Research & Development", children: [] },
                { name: "Security & Protective", children: [] },
                { name: "Waste Management", children: [] },
            ],
        },
        {
            name: "Manufacturing",
            children: [
                { name: "Chemical Manufacturing", children: [] },
                { name: "Commercial Printing", children: [] },
                { name: "Consumer Product Manufacturing", children: [] },
                { name: "Electronics Manufacturing", children: [] },
                { name: "Food & Beverage Manufacturing", children: [] },
                { name: "Health Care Products Manufacturing", children: [] },
                { name: "Machinery Manufacturing", children: [] },
                { name: "Metal & Mineral Manufacturing", children: [] },
                { name: "Textile & Apparel Manufacturing", children: [] },
                {
                    name: "Transportation Equipment Manufacturing",
                    children: [],
                },
                { name: "Wood & Paper Manufacturing", children: [] },
            ],
        },
        {
            name: "Media &amp; Communication",
            children: [
                { name: "Advertising & Public Relations", children: [] },
                { name: "Broadcast Media", children: [] },
                { name: "Film Production", children: [] },
                { name: "Music & Sound Production", children: [] },
                { name: "Photography", children: [] },
                { name: "Publishing", children: [] },
                { name: "Translation & Linguistic Services", children: [] },
                { name: "Video Game Publishing", children: [] },
            ],
        },
        {
            name: "Nonprofit &amp; NGO",
            children: [
                { name: "Civic & Social Services", children: [] },
                { name: "Grantmaking & Charitable Foundations", children: [] },
                { name: "Religious Institutions", children: [] },
            ],
        },
        {
            name: "Personal Consumer Services",
            children: [
                { name: "Beauty & Wellness", children: [] },
                { name: "Event Services", children: [] },
                { name: "Laundry & Dry Cleaning", children: [] },
                { name: "Pet Care & Veterinary", children: [] },
                { name: "Private Households", children: [] },
            ],
        },
        {
            name: "Pharmaceutical &amp; Biotechnology",
            children: [
                { name: "Biotechnology", children: [] },
                { name: "Pharmaceutical", children: [] },
            ],
        },
        {
            name: "Real Estate",
            children: [
                { name: "Property Management", children: [] },
                { name: "Real Estate Agencies", children: [] },
            ],
        },
        {
            name: "Restaurants &amp; Food Service",
            children: [
                { name: "Bars & Nightclubs", children: [] },
                { name: "Catering & Food Service Contractors", children: [] },
                { name: "Restaurants & Cafes", children: [] },
            ],
        },
        {
            name: "Retail &amp; Wholesale",
            children: [
                { name: "Auctions & Galleries", children: [] },
                { name: "Automotive Parts & Accessories Stores", children: [] },
                { name: "Beauty & Personal Accessories Stores", children: [] },
                {
                    name: "Consumer Electronics & Appliances Stores",
                    children: [],
                },
                { name: "Convenience Stores", children: [] },
                { name: "Department, Clothing & Shoe Stores", children: [] },
                { name: "Drug & Health Stores", children: [] },
                { name: "Food & Beverage Stores", children: [] },
                { name: "General Merchandise & Superstores", children: [] },
                { name: "Gift, Novelty & Souvenir Stores", children: [] },
                { name: "Grocery Stores", children: [] },
                { name: "Home Furniture & Housewares Stores", children: [] },
                { name: "Media & Entertainment Stores", children: [] },
                { name: "Office Supply & Copy Stores", children: [] },
                { name: "Pet & Pet Supplies Stores", children: [] },
                { name: "Sporting Goods Stores", children: [] },
                { name: "Toy & Hobby Stores", children: [] },
                { name: "Vehicle Dealers", children: [] },
                { name: "Wholesale", children: [] },
            ],
        },
        { name: "Telecommunications", children: [] },
        {
            name: "Transportation &amp; Logistics",
            children: [
                {
                    name: "Airlines, Airports & Air Transportation",
                    children: [],
                },
                { name: "Car & Truck Rental", children: [] },
                { name: "Marine Transportation", children: [] },
                { name: "Parking & Valet", children: [] },
                { name: "Rail Transportation", children: [] },
                { name: "Shipping & Trucking", children: [] },
                { name: "Taxi & Car Services", children: [] },
                { name: "Transportation Management", children: [] },
            ],
        },
    ],
}

export default COMPANY
