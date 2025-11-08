// Define the structure for a single team member
export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  isLogo?: boolean;
};

// Define the structure for a team section
export type Team = {
  title: string;
  members: TeamMember[];
};

// --- DATA FOR THE 2025-2026 TEAM ---
export const teamData2025_26: Team[] = [
  // Main Executive Committee
  {
    title: "Main Executive Committee",
    members: [
      {
        name: "Shiva Sai Nath",
        role: "Chairperson",
        imageUrl: "/placeholders/team/25-26/shiva_sai_nath.webp",
      },
      {
        name: "Yasmeen Mohammed",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/25-26/yasmeen_mohammed.webp",
      },
      {
        name: "Akshay",
        role: "Secretary",
        imageUrl: "/placeholders/team/25-26/akshay.webp",
      },
      {
        name: "G. Akhil",
        role: "Treasurer",
        imageUrl: "/placeholders/team/25-26/g_akhil.webp",
      },
      {
        name: "Sai Deekshith Badam",
        role: "GINI & MDO",
        imageUrl: "/placeholders/team/25-26/sai_deekshith_badam.webp",
      },
      {
        name: "B. Chitti Sujana",
        role: "Design Lead",
        imageUrl: "/placeholders/team/25-26/b_chitti_sujana.webp",
      },
      {
        name: "K. Isaac",
        role: "Resource & Skill Management Lead",
        imageUrl: "/placeholders/team/25-26/k_isaac.webp",
      },
      {
        name: "Hemanth Sai Katuri",
        role: "Web Master",
        imageUrl: "/placeholders/team/25-26/hemanth_sai_katuri.webp",
      },
      {
        name: "Khushi",
        role: "Research & Development Lead",
        imageUrl: "/placeholders/team/25-26/khushi.webp",
      },
    ],
  },
  // Resource & Skill Management Team
  {
    title: "Resource & Skill Management Team",
    members: [
      {
        name: "K. Isaac",
        role: "RSM Lead",
        imageUrl: "/placeholders/team/25-26/k_isaac.webp",
      },
      {
        name: "D. Karthikeya",
        role: "Coordinator",
        imageUrl: "/placeholders/team/25-26/d_karthikeya.webp",
      },
      {
        name: "Nara Pranay",
        role: "Coordinator",
        imageUrl: "/placeholders/team/25-26/nara_pranay.webp",
      },
      {
        name: "Kotha Mounika",
        role: "Coordinator",
        imageUrl: "/placeholders/team/25-26/Mounika.webp",
      },
      {
        name: "Shravani Jakka",
        role: "Coordinator",
        imageUrl: "/placeholders/team/25-26/shravani_jakka.webp",
      },
    ],
  },
  // Design Team
  {
    title: "Design Team",
    members: [
      {
        name: "B. Chitti Sujana",
        role: "Design Lead",
        imageUrl: "/placeholders/team/25-26/b_chitti_sujana.webp",
      },
      {
        name: "Chiluka Deepa",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/25-26/Deepa.webp",
      },
      {
        name: "Akhil",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/25-26/akhil.webp",
      },
      {
        name: "N. Sai Bharati",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/25-26/Bharati.webp",
      },
    ],
  },
  // Web Designing Team
  {
    title: "Web Designing Team",
    members: [
      {
        name: "Hemanth Sai Katuri",
        role: "Web Master",
        imageUrl: "/placeholders/team/25-26/hemanth_sai_katuri.webp",
      },
      {
        name: "Sriram",
        role: "Web Designer",
        imageUrl: "/placeholders/team/25-26/Sriram.webp",
      },
      {
        name: "Gayathri Gurram",
        role: "Web Designer",
        imageUrl: "/placeholders/team/25-26/gayathri_gurram.webp",
      },
    ],
  },
  // Membership Development Team
  {
    title: "Membership Development Team",
    members: [
      {
        name: "Sai Deekshith Badam",
        role: "GINI & MDO",
        imageUrl: "/placeholders/team/25-26/sai_deekshith_badam.webp",
      },
      {
        name: "Anirudh Pradhan",
        role: "MDO",
        imageUrl: "/placeholders/team/25-26/Anirudh.webp",
      },
      {
        name: "Shweta Kumari Pandey",
        role: "MDO",
        imageUrl: "/placeholders/team/25-26/shwetha.webp",
      },
    ],
  },
  // Research and Development Team
  {
    title: "Research and Development Team",
    members: [
      {
        name: "Khushi",
        role: "R&D Lead",
        imageUrl: "/placeholders/team/25-26/khushi.webp",
      },
      {
        name: "Thanmayee",
        role: "Coordinator",
        imageUrl: "/placeholders/team/25-26/Thanmayee.webp",
      },
      {
        name: "N. Bhanu Prakash Reddy",
        role: "Coordinator",
        imageUrl: "/placeholders/team/25-26/bhanu-prakash.webp",
      },
      {
        name: "J. Gayathri",
        role: "Coordinator",
        imageUrl: "/placeholders/team/25-26/Gayatri-jeguru.webp",
      },
    ],
  },
  // Computer Society
  {
    title: "Computer Society",
    members: [
      {
        name: "D. Karthikeya",
        role: "Chairperson",
        imageUrl: "/placeholders/team/25-26/d_karthikeya.webp",
      },
      {
        name: "Akshit Chauhan Paitlya",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/25-26/Akshit.webp",
      },
      {
        isLogo: true,
        name: "CS Logo",
        role: "CS",
        imageUrl: "/placeholders/cs_logo.webp",
      },
      {
        name: "K. Geetha Bhagyasree",
        role: "Secretary",
        imageUrl: "/placeholders/team/25-26/Geetha.webp",
      },
      {
        name: "K. Abhilash",
        role: "Treasurer",
        imageUrl: "/placeholders/team/25-26/Abhilash.webp",
      },
      {
        name: "B. Harshith",
        role: "Representative",
        imageUrl: "/placeholders/team/25-26/Harshith-Baddam.webp",
      },
    ],
  },
  // Communications Society
  {
    title: "Communications Society",
    members: [
      {
        name: "Nara Pranay",
        role: "Chairperson",
        imageUrl: "/placeholders/team/25-26/nara_pranay.webp",
      },
      {
        name: "Sunidhi Bolleddu",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/25-26/Sunidhi.webp",
      },
      {
        isLogo: true,
        name: "ComSoc Logo",
        role: "ComSoc",
        imageUrl: "/placeholders/comsoc_logo.webp",
      },
      {
        name: "G. Ruth",
        role: "Secretary",
        imageUrl: "/placeholders/team/25-26/Ruth-Grace.webp",
      },
      {
        name: "K. S. Anirudh",
        role: "Treasurer",
        imageUrl: "/placeholders/team/25-26/Ks-anirudh.webp",
      },
      {
        name: "Kavya Yarajala",
        role: "Representative",
        imageUrl: "/placeholders/team/25-26/Kavya.webp",
      },
    ],
  },
  // Power and Energy Society
  {
    title: "Power and Energy Society",
    members: [
      {
        name: "Kotha Mounika",
        role: "Chairperson",
        imageUrl: "/placeholders/team/25-26/Mounika.webp",
      },
      {
        name: "Gujjari Swarnamai",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/25-26/Swarnamai.webp",
      },
      {
        isLogo: true,
        name: "PES Logo",
        role: "PES",
        imageUrl: "/placeholders/Pes_logo.webp",
      },
      {
        name: "Roshan Jaisimha",
        role: "Secretary",
        imageUrl: "/placeholders/team/25-26/Roshan.webp",
      },
      {
        name: "Venkatanjay Pulkam",
        role: "Treasurer",
        imageUrl: "/placeholders/team/25-26/Venkata-Ajay.webp",
      },
      {
        name: "K. Suraj Rao",
        role: "Representative",
        imageUrl: "/placeholders/team/25-26/SURAJ-RAO.webp",
      },
    ],
  },
  // Women in Engineering Affinity Group
  {
    title: "Women in Engineering Affinity Group",
    members: [
      {
        name: "Shravani Jakka",
        role: "Chairperson",
        imageUrl: "/placeholders/team/25-26/shravani_jakka.webp",
      },
      {
        name: "Shreshta",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/25-26/Shreshta.webp",
      },
      {
        isLogo: true,
        name: "WIE Logo",
        role: "WIE",
        imageUrl: "/placeholders/wie_logo.webp",
      },
      {
        name: "Harshada",
        role: "Secretary",
        imageUrl: "/placeholders/team/25-26/Harshadha.webp",
      },
      {
        name: "A. V. K. Abhirama Praneeth",
        role: "Treasurer",
        imageUrl: "/placeholders/team/25-26/Abhiram.webp",
      },
      {
        name: "B. Ashritha Reddy",
        role: "Representative",
        imageUrl: "/placeholders/team/25-26/Ashritha.webp",
      },
    ],
  },
];

// --- DATA FOR THE 2024-2025 TEAM ---
export const teamData2024_25: Team[] = [
  // Main Executive Committee
  {
    title: "Main Executive Committee",
    members: [
      {
        name: "Jemima Madasi",
        role: "Chairperson",
        imageUrl: "/placeholders/team/24-25/Jemima-Madasi.webp",
      },
      {
        name: "J. Sri Charan Reddy",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/24-25/Sri-Charan.webp",
      },
      {
        name: "P. Chanikya",
        role: "Secretary",
        imageUrl: "/placeholders/team/24-25/chanikya.webp",
      },
      {
        name: "K. Karthik Reddy",
        role: "Treasurer",
        imageUrl: "/placeholders/team/24-25/Karkala-karthik-Reddy.webp",
      },
      {
        name: "Tappa Rohith",
        role: "GINI & MDO",
        imageUrl: "/placeholders/team/24-25/Tappa-Rohith.webp",
      },
      {
        name: "J. Srinidhi",
        role: "Public Relations Officer",
        imageUrl: "/placeholders/team/24-25/J.Srinidhi.webp",
      },
      {
        name: "P. Siva Teja",
        role: "Design Lead",
        imageUrl: "/placeholders/team/24-25/Siva-Teja.webp",
      },
      {
        name: "Venkat Ramana",
        role: "Resource & Skill Management Lead",
        imageUrl: "/placeholders/team/24-25/VenkatRamana.webp",
      },
      {
        name: "K. Sai Ganesh",
        role: "Web Master",
        imageUrl: "/placeholders/team/24-25/Saiganesh.webp",
      },
    ],
  },
  // Resource and Skill Management Team
  {
    title: "Resource and Skill Management Team",
    members: [
      {
        name: "Venkat Ramana",
        role: "RSM Lead",
        imageUrl: "/placeholders/team/24-25/VenkatRamana.webp",
      },
      {
        name: "Mugala Shravya",
        role: "Coordinator",
        imageUrl: "/placeholders/team/24-25/MUGALA-SHRAVYA.webp",
      },
      {
        name: "K. Sai Kumar",
        role: "Coordinator",
        imageUrl: "/placeholders/team/24-25/Sai-Kumar.webp",
      },
      {
        name: "Reddy Vari Nithish Kumar Reddy",
        role: "Coordinator",
        imageUrl: "/placeholders/team/24-25/Nitish.webp",
      },
      {
        name: "Sai Manikanta Jakka",
        role: "Coordinator",
        imageUrl: "/placeholders/team/24-25/Saimanikanta.webp",
      },
    ],
  },
  // Design Team
  {
    title: "Design Team",
    members: [
      {
        name: "P. Siva Teja",
        role: "Design Lead",
        imageUrl: "/placeholders/team/24-25/Siva-Teja.webp",
      },
      {
        name: "K. Issac",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/25-26/k_isaac.webp",
      },
      {
        name: "Chitti Sujana",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/25-26/b_chitti_sujana.webp",
      },
      {
        name: "A. Sai Meghamsh",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/24-25/Meghamsh.webp",
      },
    ],
  },
  // Web Designing Team
  {
    title: "Web Designing Team",
    members: [
      {
        name: "K. Sai Ganesh",
        role: "Web Master",
        imageUrl: "/placeholders/team/24-25/Saiganesh.webp",
      },
      {
        name: "Hemanth Sai",
        role: "Web Designer",
        imageUrl: "/placeholders/team/25-26/hemanth_sai_katuri.webp",
      },
      {
        name: "M. Pavan Mahesh",
        role: "Web Designer",
        imageUrl: "/placeholders/team/24-25/Pavan.webp",
      },
    ],
  },
  // Membership Development Team
  {
    title: "Membership Development Team",
    members: [
      {
        name: "Tappa Rohith",
        role: "GINI & MDO",
        imageUrl: "/placeholders/team/24-25/Tappa-Rohith.webp",
      },
      {
        name: "Sai Deekshith Badam",
        role: "MDO",
        imageUrl: "/placeholders/team/25-26/sai_deekshith_badam.webp",
      },
      {
        name: "Aditi",
        role: "MDO",
        imageUrl: "/placeholders/team/24-25/Aditi.webp",
      },
    ],
  },
  // Research and Development Team
  {
    title: "Research and Development Team",
    members: [
      {
        name: "K. Sai Kumar",
        role: "Lead",
        imageUrl: "/placeholders/team/24-25/Sai-Kumar.webp",
      },
      {
        name: "Sanjana Gupta Maheepathy",
        role: "Co-lead",
        imageUrl: "/placeholders/team/24-25/Sanjana-M.webp",
      },
      {
        name: "Sachin Gupta",
        role: "Co-ordinator",
        imageUrl: "/placeholders/team/24-25/Sachin-Gupta.webp",
      },
      {
        name: "Samreen Begum",
        role: "Co-ordinator",
        imageUrl: "/placeholders/team/24-25/Samreen.webp",
      },
      {
        name: "Misha Emmadi",
        role: "Co-ordinator",
        imageUrl: "/placeholders/team/24-25/Misha.webp",
      },
    ],
  },
  // Computer Society
  {
    title: "Computer Society",
    members: [
      {
        name: "Mugala Shravya",
        role: "Chairperson",
        imageUrl: "/placeholders/team/24-25/MUGALA-SHRAVYA.webp",
      },
      {
        name: "Shiva Sai Nath",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/25-26/shiva_sai_nath.webp",
      },
      {
        isLogo: true,
        name: "CS Logo",
        role: "CS",
        imageUrl: "/placeholders/cs_logo.webp",
      },
      {
        name: "Khushi",
        role: "Secretary",
        imageUrl: "/placeholders/team/25-26/khushi.webp",
      },
      {
        name: "D. Karthikeya",
        role: "Treasurer",
        imageUrl: "/placeholders/team/25-26/d_karthikeya.webp",
      },
      {
        name: "Shravani Jakka",
        role: "Representative",
        imageUrl: "/placeholders/team/25-26/shravani_jakka.webp",
      },
    ],
  },
  // Communications Society
  {
    title: "Communications Society",
    members: [
      {
        name: "Sripathi Nihanth Reddy",
        role: "Chairperson",
        imageUrl: "/placeholders/team/24-25/Nihanth.webp",
      },
      {
        name: "Yasmeen Mohammed",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/25-26/yasmeen_mohammed.webp",
      },
      {
        isLogo: true,
        name: "ComSoc Logo",
        role: "ComSoc",
        imageUrl: "/placeholders/comsoc_logo.webp",
      },
      {
        name: "P. Dedeepya",
        role: "Secretary",
        imageUrl: "/placeholders/team/24-25/Dedeepya.webp",
      },
      {
        name: "Nara Pranay",
        role: "Treasurer",
        imageUrl: "/placeholders/team/25-26/nara_pranay.webp",
      },
      {
        name: "Shiva Shankar",
        role: "Representative",
        imageUrl: "/placeholders/team/24-25/Shiva-Shankar.webp",
      },
    ],
  },
  // Power and Energy Society
  {
    title: "Power and Energy Society",
    members: [
      {
        name: "G. Sai Nath",
        role: "Chairperson",
        imageUrl: "/placeholders/team/24-25/sainath.webp",
      },
      {
        name: "Kotha Mounika",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/25-26/Mounika.webp",
      },
      {
        isLogo: true,
        name: "PES Logo",
        role: "PES",
        imageUrl: "/placeholders/Pes_logo.webp",
      },
      {
        name: "Akshay",
        role: "Secretary",
        imageUrl: "/placeholders/team/25-26/akshay.webp",
      },
      {
        name: "G. Akhil",
        role: "Treasurer",
        imageUrl: "/placeholders/team/25-26/g_akhil.webp",
      },
      {
        name: "T. Sharanya",
        role: "Representative",
        imageUrl: "/placeholders/team/24-25/Sharanya.webp",
      },
    ],
  },
  // Women in Engineering Affinity Group
  {
    title: "Women in Engineering Affinity Group",
    members: [
      {
        name: "Seetha Sumanjali",
        role: "Chairperson",
        imageUrl: "/placeholders/team/24-25/Sumanjali-Seetha-suma-02.webp",
      },
      {
        name: "Reddimasu Meghana",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/24-25/Meghana.webp",
      },
      {
        isLogo: true,
        name: "WIE Logo",
        role: "WIE",
        imageUrl: "/placeholders/wie_logo.webp",
      },
      {
        name: "J. Niharika",
        role: "Secretary",
        imageUrl: "/placeholders/team/24-25/Niharika.webp",
      },
      {
        name: "Manoj",
        role: "Treasurer",
        imageUrl: "/placeholders/team/24-25/Manoj.webp",
      },
      {
        name: "Urvi Chandra Shekar Gogi",
        role: "Representative",
        imageUrl: "/placeholders/team/24-25/Urvi-Gogi.webp",
      },
    ],
  },
];

// --- DATA FOR THE 2023-2024 TEAM ---
export const teamData2023_24: Team[] = [
  // Main Executive Committee
  {
    title: "Main Executive Committee",
    members: [
      {
        name: "Mohammad Abdul Basith",
        role: "Chairperson",
        imageUrl: "/placeholders/team/23-24/Basith.webp",
      },
      {
        name: "Ch. Sathvika",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/23-24/sathvika.webp",
      },
      {
        name: "D. Manoghna",
        role: "Secretary",
        imageUrl: "/placeholders/team/23-24/Manoghna-1-e1696436743969.webp",
      },
      {
        name: "G. SaiKumar",
        role: "Treasurer",
        imageUrl: "/placeholders/team/23-24/Sai-kumar.webp",
      },
      {
        name: "Raghu karredla",
        role: "GINI & MDO",
        imageUrl: "/placeholders/team/23-24/raghu.webp",
      },
      {
        name: "Pritesh Agarwal",
        role: "Public Relations Officer",
        imageUrl: "/placeholders/team/23-24/pritesh.webp",
      },
      {
        name: "T P Varsha Rani",
        role: "Design Lead",
        imageUrl: "/placeholders/team/23-24/varsha-e1696430416465.webp",
      },
      {
        name: "Pawan Sai",
        role: "Resource & Skill Management Lead",
        imageUrl: "/placeholders/team/23-24/pawan.webp",
      },
      {
        name: "Sravanth Simhadri",
        role: "Web Master",
        imageUrl: "/placeholders/team/23-24/sravanth.webp",
      },
    ],
  },
  // Resource & Skill Management Team
  {
    title: "Resource & Skill Management Team",
    members: [
      {
        name: "Pawan Sai",
        role: "RSM Lead",
        imageUrl: "/placeholders/team/23-24/pawan.webp",
      },
      {
        name: "K. Akash",
        role: "Coordinator",
        imageUrl: "/placeholders/team/23-24/akash.webp",
      },
      {
        name: "Sanjana Goud",
        role: "Coordinator",
        imageUrl: "/placeholders/team/23-24/sanjana.webp",
      },
      {
        name: "Bollapally Charan Goud",
        role: "Coordinator",
        imageUrl: "/placeholders/team/23-24/charan.webp",
      },
      {
        name: "Vungarala Chaitanya Kumar",
        role: "Coordinator",
        imageUrl: "/placeholders/team/23-24/chaitnaya.webp",
      },
      {
        name: "Siddarth Rajput",
        role: "Coordinator",
        imageUrl: "/placeholders/team/23-24/siddharth.webp",
      },
    ],
  },
  // Design Team
  {
    title: "Design Team",
    members: [
      {
        name: "T P Varsha Rani",
        role: "Design Lead",
        imageUrl: "/placeholders/team/23-24/varsha-e1696430416465.webp",
      },
      {
        name: "K. Akash",
        role: "Digital Media Manager",
        imageUrl: "/placeholders/team/23-24/akash.webp",
      },
      {
        name: "Tharun Reddy",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/23-24/tharun.webp",
      },
      {
        name: "Siva Teja",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/23-24/sivateja.webp",
      },
      {
        name: "K. Prajwal",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/23-24/prajwal.webp",
      },
    ],
  },
  // Web Designing Team
  {
    title: "Web Designing Team",
    members: [
      {
        name: "Sravanth Simhadri",
        role: "Web Master",
        imageUrl: "/placeholders/team/23-24/sravanth.webp",
      },
      {
        name: "K. Ganesh",
        role: "Web Designer",
        imageUrl: "/placeholders/team/23-24/ganesh.webp",
      },
      {
        name: "M. Shravya",
        role: "Web Designer",
        imageUrl: "/placeholders/team/24-25/MUGALA-SHRAVYA.webp",
      },
    ],
  },
  // Membership Development Team
  {
    title: "Membership Development Team",
    members: [
      {
        name: "Raghu karredla",
        role: "GINI & MDO",
        imageUrl: "/placeholders/team/23-24/raghu.webp",
      },
      {
        name: "Varshith",
        role: "MDO",
        imageUrl: "/placeholders/team/23-24/varshith.webp",
      },
      {
        name: "Tappa Rohith",
        role: "MDO",
        imageUrl: "/placeholders/team/24-25/Tappa-Rohith.webp",
      },
    ],
  },
  // Research and Development Team
  {
    title: "Research and Development Team",
    members: [
      {
        name: "Kannuru Aditya",
        role: "Lead",
        imageUrl: "/placeholders/team/23-24/aditya.webp",
      },
      {
        name: "Pratham Kamidiri",
        role: "Co-ordinator",
        imageUrl: "/placeholders/team/23-24/pratham.webp",
      },
      {
        name: "J. Srinidhi",
        role: "Co-ordinator",
        imageUrl: "/placeholders/team/24-25/J.Srinidhi.webp",
      },
      {
        name: "Sanjana Gupta Maheepathy",
        role: "Co-ordinator",
        imageUrl: "/placeholders/team/24-25/Sanjana-M.webp",
      },
    ],
  },
  // Computer Society
  {
    title: "Computer Society",
    members: [
      {
        name: "Sindhuja Lakkapally",
        role: "Chairperson",
        imageUrl: "/placeholders/team/23-24/Sindhuja.webp",
      },
      {
        name: "Surya Teja Thodupunuri",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/23-24/surya.webp",
      },
      {
        isLogo: true,
        name: "CS Logo",
        role: "CS",
        imageUrl: "/placeholders/cs_logo.webp",
      },
      {
        name: "Venkata Ramana Panigrahi",
        role: "Secretary",
        imageUrl: "/placeholders/team/24-25/VenkatRamana.webp",
      },
      {
        name: "J. Sri Charan Reddy",
        role: "Treasurer",
        imageUrl: "/placeholders/team/24-25/Sri-Charan.webp",
      },
      {
        name: "Ruchira Erra",
        role: "Representative",
        imageUrl: "/placeholders/team/23-24/ruchira.webp",
      },
    ],
  },
  // Communications Society
  {
    title: "Communications Society",
    members: [
      {
        name: "Bollapally Charan Goud",
        role: "Chairperson",
        imageUrl: "/placeholders/team/23-24/charan.webp",
      },
      {
        name: "Sripathi Nihanth Reddy",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/24-25/Nihanth.webp",
      },
      {
        isLogo: true,
        name: "ComSoc Logo",
        role: "ComSoc",
        imageUrl: "/placeholders/comsoc_logo.webp",
      },
      {
        name: "Jemima Madasi",
        role: "Secretary",
        imageUrl: "/placeholders/team/24-25/Jemima-Madasi.webp",
      },
      {
        name: "Nithish Kumar",
        role: "Treasurer",
        imageUrl: "/placeholders/team/24-25/Nitish.webp",
      },
      {
        name: "Sai Manikanta Jakka",
        role: "Representative",
        imageUrl: "/placeholders/team/24-25/Saimanikanta.webp",
      },
    ],
  },
  // Power and Energy Society
  {
    title: "Power and Energy Society",
    members: [
      {
        name: "Preetham",
        role: "Chairperson",
        imageUrl: "/placeholders/team/23-24/preetham.webp",
      },
      {
        name: "Sai Nath",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/24-25/sainath.webp",
      },
      {
        isLogo: true,
        name: "PES Logo",
        role: "PES",
        imageUrl: "/placeholders/Pes_logo.webp",
      },
      {
        name: "Chanikya",
        role: "Secretary",
        imageUrl: "/placeholders/team/24-25/chanikya.webp",
      },
      {
        name: "Karthik",
        role: "Treasurer",
        imageUrl: "/placeholders/team/24-25/Karkala-karthik-Reddy.webp",
      },
      {
        name: "Ice",
        role: "Representative",
        imageUrl: "/placeholders/team/23-24/ice.webp",
      },
    ],
  },
  // Women in Engineering Affinity Group
  {
    title: "Women in Engineering Affinity Group",
    members: [
      {
        name: "Sanjana Goud",
        role: "Chairperson",
        imageUrl: "/placeholders/team/23-24/sanjana.webp",
      },
      {
        name: "G. Nandini",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/23-24/nandini.webp",
      },
      {
        isLogo: true,
        name: "WIE Logo",
        role: "WIE",
        imageUrl: "/placeholders/wie_logo.webp",
      },
      {
        name: "M. Varshika",
        role: "Secretary",
        imageUrl: "/placeholders/team/23-24/varshika.webp",
      },
      {
        name: "K. Sai Kumar",
        role: "Treasurer",
        imageUrl: "/placeholders/team/24-25/Sai-Kumar.webp",
      },
      {
        name: "Seetha Sumanjali",
        role: "Representative",
        imageUrl: "/placeholders/team/24-25/Sumanjali-Seetha-suma-02.webp",
      },
    ],
  },
];
