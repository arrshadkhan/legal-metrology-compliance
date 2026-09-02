export const mockUser = {
  name: "Anuj Yadav",
  role: "Consumer",
  avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxU3o2jxlIAqwkZPJIYB0T4ZTlQoF1JxqwzCv6U2Wr2u0jnZo4RxvHJAjDLRCKNCzQpNot5DIjnBZhJOsp6nKW2SSXPerIu6unvrgPrGeS-wUED_pAwxQ7TV2xsN048VYevC0sI5D0GlkdfQYKmMeAKBiKJzJifXbXeQittFrRxePJRhwVaj88Gk7rwBDvWeHtyvJthsbWfwGielePP3nAA8S3ZFMA6ANW2VhPfhJswjioUUIz5jz8Vw"
};
export const realUser = {
  name: "Arshad khan",
  role: "Consumer",
  avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxU3o2jxlIAqwkZPJIYB0T4ZTlQoF1JxqwzCv6U2Wr2u0jnZo4RxvHJAjDLRCKNCzQpNot5DIjnBZhJOsp6nKW2SSXPerIu6unvrgPrGeS-wUED_pAwxQ7TV2xsN048VYevC0sI5D0GlkdfQYKmMeAKBiKJzJifXbXeQittFrRxePJRhwVaj88Gk7rwBDvWeHtyvJthsbWfwGielePP3nAA8S3ZFMA6ANW2VhPfhJswjioUUIz5jz8Vw"
};

export const dashboardStats = {
  totalScanned: 128,
  compliant: 86,
  needsReview: 18,
  nonCompliant: 24
};

export const mockScans = [
  {
    id: "scan_001",
    productName: "Crunchy Bites",
    category: "Packaged Food",
    date: "2026-08-31",
    score: 78,
    status: "NEEDS REVIEW",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAKAIO_9f2xYHWjkHXquempfkmJhB8uN84xiYy9JGYiZQPee3u8MCgv1KJr77uMm3pZS4xDt8nipAY-O7zFq2EoenZUnkF0qSq4AkjQ1Og9w3jdTqScmkpXTOhnl4mx5sErQgciUrv5dGob1yu4VAjOLt6TXVl7QJlF-klwoHZE-ThO2rccWGMISyHwvT5ervfRAsJ1jxcSEShHVyZE6EdovhCxXxMzXzTLE4sjRV2fqAinPc4YPHCSA",
    extractedInfo: {
      brand: "Tasty Treat",
      mrp: "₹50",
      netQuantity: "100 g",
      manufacturer: "Tasty Treat Foods Pvt. Ltd.",
      address: "Indore, Madhya Pradesh",
      country: "India",
      batchNo: "TB2026A01",
      consumerCare: "Not Detected",
      mfd: "Detected"
    },
    complianceChecks: [
      { id: "c1", label: "Retail Sale Price (MRP)", status: "PASS", message: "MRP ₹50 detected." },
      { id: "c2", label: "Net Quantity", status: "PASS", message: "100 g detected." },
      { id: "c3", label: "Manufacturer Details", status: "PASS", message: "Manufacturer information detected." },
      { id: "c4", label: "Manufacturer Address", status: "NEEDS REVIEW", message: "Address detected with low confidence." },
      { id: "c5", label: "Consumer Care Details", status: "NON-COMPLIANT", message: "Missing contact number or email." },
      { id: "c6", label: "Country of Origin", status: "PASS", message: "India detected." },
      { id: "c7", label: "Date Declaration", status: "PASS", message: "Date information detected." },
    ]
  },
  {
    id: "scan_002",
    productName: "Head & Shoulders Shampoo",
    category: "Personal Care",
    date: "2026-08-30",
    score: 100,
    status: "COMPLIANT",
    imageUrl: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=200&auto=format&fit=crop",
    extractedInfo: {},
    complianceChecks: []
  },
  {
    id: "scan_003",
    productName: "Dove Soap",
    category: "Personal Care",
    date: "2026-08-28",
    score: 95,
    status: "COMPLIANT",
    imageUrl: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=200&auto=format&fit=crop",
    extractedInfo: {},
    complianceChecks: []
  },
  {
    id: "scan_004",
    productName: "Parle-G Biscuits",
    category: "Packaged Food",
    date: "2026-08-25",
    score: 40,
    status: "NON-COMPLIANT",
    imageUrl: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=200&auto=format&fit=crop",
    extractedInfo: {},
    complianceChecks: []
  },
  {
    id: "scan_101",
    productName: "Maggi 2-Minute Noodles Masala",
    category: "Food",
    date: "2026-09-01",
    score: 100,
    status: "COMPLIANT",
    imageUrl: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=200&auto=format&fit=crop",
    extractedInfo: {
      brand: "Nestle", mrp: "₹14", netQuantity: "70 g", manufacturer: "Nestle India Ltd.", country: "India"
    },
    complianceChecks: [
      { id: "c1", label: "Retail Sale Price (MRP)", status: "PASS", message: "MRP ₹14 detected." },
      { id: "c2", label: "Net Quantity", status: "PASS", message: "70 g detected." }
    ]
  },
  {
    id: "scan_102",
    productName: "Britannia Good Day Cashew Cookies",
    category: "Food",
    date: "2026-09-01",
    score: 85,
    status: "NEEDS REVIEW",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=200&auto=format&fit=crop",
    extractedInfo: {
      brand: "Britannia", mrp: "₹120", netQuantity: "600 g", manufacturer: "Britannia Industries Ltd.", country: "India"
    },
    complianceChecks: [
      { id: "c1", label: "Retail Sale Price (MRP)", status: "PASS", message: "MRP ₹120 detected." },
      { id: "c2", label: "Consumer Care Details", status: "NEEDS REVIEW", message: "Phone number blurry." }
    ]
  },
  {
    id: "scan_103",
    productName: "Amul Taaza Homogenised Toned Milk",
    category: "Food",
    date: "2026-09-01",
    score: 100,
    status: "COMPLIANT",
    imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=200&auto=format&fit=crop",
    extractedInfo: {
      brand: "Amul", mrp: "₹72", netQuantity: "1 L", manufacturer: "GCMMF Ltd.", country: "India"
    },
    complianceChecks: [
      { id: "c1", label: "Net Quantity", status: "PASS", message: "1 L detected." }
    ]
  },
  {
    id: "scan_104",
    productName: "Lipton Pure & Light Green Tea",
    category: "Food",
    date: "2026-09-01",
    score: 100,
    status: "COMPLIANT",
    imageUrl: "https://images.unsplash.com/photo-1597481499750-3e6b22687e12?q=80&w=200&auto=format&fit=crop",
    extractedInfo: {
      brand: "Lipton", mrp: "₹315", netQuantity: "250 g", manufacturer: "Hindustan Unilever Ltd.", country: "India"
    },
    complianceChecks: []
  },
  {
    id: "scan_105",
    productName: "Kissan Mixed Fruit Jam",
    category: "Food",
    date: "2026-09-01",
    score: 50,
    status: "NON-COMPLIANT",
    imageUrl: "https://images.unsplash.com/photo-1582210878144-7ca0881ce477?q=80&w=200&auto=format&fit=crop",
    extractedInfo: {
      brand: "Kissan", mrp: "₹175", netQuantity: "500 g", manufacturer: "Hindustan Unilever Ltd.", country: "India"
    },
    complianceChecks: [
      { id: "c1", label: "Date Declaration", status: "NON-COMPLIANT", message: "Expiry date not found." }
    ]
  },
  {
    id: "scan_106",
    productName: "L'Oreal Paris Revitalift Serum",
    category: "Cosmetics",
    date: "2026-09-01",
    score: 100,
    status: "COMPLIANT",
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=200&auto=format&fit=crop",
    extractedInfo: {
      brand: "L'Oreal Paris", mrp: "₹999", netQuantity: "30 ml", manufacturer: "L'Oreal India Pvt. Ltd.", country: "Indonesia"
    },
    complianceChecks: [
      { id: "c1", label: "Retail Sale Price (MRP)", status: "PASS", message: "MRP ₹999 detected." }
    ]
  },
  {
    id: "scan_107",
    productName: "Maybelline Fit Me Foundation",
    category: "Cosmetics",
    date: "2026-09-01",
    score: 100,
    status: "COMPLIANT",
    imageUrl: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=200&auto=format&fit=crop",
    extractedInfo: {
      brand: "Maybelline", mrp: "₹629", netQuantity: "30 ml", manufacturer: "L'Oreal India Pvt. Ltd.", country: "China"
    },
    complianceChecks: []
  },
  {
    id: "scan_108",
    productName: "NIVEA Soft Light Moisturizer",
    category: "Cosmetics",
    date: "2026-09-01",
    score: 75,
    status: "NEEDS REVIEW",
    imageUrl: "https://images.unsplash.com/photo-1608248593802-861c855a805c?q=80&w=200&auto=format&fit=crop",
    extractedInfo: {
      brand: "NIVEA", mrp: "₹299", netQuantity: "200 ml", manufacturer: "Beiersdorf India Pvt. Ltd.", country: "India"
    },
    complianceChecks: [
      { id: "c1", label: "Manufacturer Details", status: "NEEDS REVIEW", message: "Address is partially obscured." }
    ]
  },
  {
    id: "scan_109",
    productName: "Lakme Eyeconic Kajal",
    category: "Cosmetics",
    date: "2026-09-01",
    score: 100,
    status: "COMPLIANT",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=200&auto=format&fit=crop",
    extractedInfo: {
      brand: "Lakme", mrp: "₹340", netQuantity: "0.70 g", manufacturer: "Hindustan Unilever Ltd.", country: "India"
    },
    complianceChecks: []
  },
  {
    id: "scan_110",
    productName: "Dove Deeply Nourishing Body Wash",
    category: "Cosmetics",
    date: "2026-09-01",
    score: 30,
    status: "NON-COMPLIANT",
    imageUrl: "https://images.unsplash.com/photo-1629198725970-e4b5dfd4f6c5?q=80&w=200&auto=format&fit=crop",
    extractedInfo: {
      brand: "Dove", mrp: "₹399", netQuantity: "800 ml", manufacturer: "Hindustan Unilever Ltd.", country: "India"
    },
    complianceChecks: [
      { id: "c1", label: "Retail Sale Price (MRP)", status: "NON-COMPLIANT", message: "MRP not found on label." }
    ]
  }
];

export const mockComplaints = [
  {
    id: "LM-2026-00128",
    product: "Crunchy Bites",
    issue: "Consumer Care",
    date: "2026-08-31",
    status: "Submitted"
  },
  {
    id: "LM-2026-00095",
    product: "Parle-G Biscuits",
    issue: "MRP Issue",
    date: "2026-08-25",
    status: "Under Review"
  },
  {
    id: "LM-2026-00042",
    product: "Local Brand Honey",
    issue: "Quantity Issue",
    date: "2026-08-10",
    status: "Resolved"
  }
];

export const mockRules = [
  {
    id: "rule_mrp",
    title: "MRP Declaration",
    explanation: "Every package shall bear thereon or on a label securely affixed thereto a definite, plain and conspicuous declaration of the Retail Sale Price (MRP).",
    category: "All Packaged Commodities"
  },
  {
    id: "rule_qty",
    title: "Net Quantity Declaration",
    explanation: "The net quantity by weight, measure or number must be declared.",
    category: "All Packaged Commodities"
  },
  {
    id: "rule_mfg",
    title: "Manufacturer Details",
    explanation: "The name and address of the manufacturer, or where the manufacturer is not the packer, the name and address of the manufacturer and packer.",
    category: "All Packaged Commodities"
  },
  {
    id: "rule_care",
    title: "Consumer Care Details",
    explanation: "Name, address, telephone number, and e-mail address of the person who can be or the office which can be contacted, in case of consumer complaints.",
    category: "All Packaged Commodities"
  }
];
