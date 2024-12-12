import VerticalTimeline from './VerticalTimeline'



const experienceData = [
  {
    date: "Sep 2022 - Mar 2023",
    title: "Future Leader Developing Program",
    company: "Charoen Pokphand Group Co.,Ltd.",
    contractType: "Contract",
    location: "Samut Prakan, Thailand",
    description: "Charoen Pokphand Group Co.,Ltd. | Charoen Pokphand Leadership Institute | Charoen Pokphand Food Packaging Industry Co., Ltd.",
    responsibilities: [
      "Orchestrated the optimization of a 24-cavity stack mold, enhancing its capacity to 300,000 pieces/day and focusing on Overall Equipment Efficiency (OEE) for waste reduction and cost-effectiveness.",
      "Initiated and executed projects to address abnormal factors in OEE, ensuring continuous improvement and operational excellence.",
      "Exceeded project goals with a sales increase of 2.9 million Baht and a cost reduction of 3 million Baht, resulting in a gross profit of 2.9 million Baht.",
      "Implemented a tele-sales strategy, leveraging Python programming with the Google Maps API to streamline market observation.",
      "Acted as a representative and reporter for the Food Packaging Business Unit at CPLI events.",
      "Participated in numerous professional development classes.",
      "Reported directly to the C.P. Shareman Executive, providing regular updates on project progress and outcomes."
    ],
    relevantProjects: [
      {
        name: "Market Analysis Automation",
        description: "Utilized Python and the Google Maps API for targeted data scraping, revolutionizing tele-sales efforts.",
        outcome: "Increased sales efficiency by 40%"
      },
      {
        name: "Business Intelligence Dashboard",
        description: "Created and maintained a Power BI dashboard for effective data visualization and reporting.",
        outcome: "Improved decision-making process by 30%"
      }
    ],
    skills: [
      "Business Development",
      "Data Analysis",
      "Python",
      "Google Maps API",
      "Microsoft Power BI"
    ]
  },
  {
    date: "Nov 2021 - Jul 2022",
    title: "Operational Nuclear Engineer",
    company: "Thailand Institute of Nuclear Technology",
    contractType: "Full-time",
    location: "Bangkok City, Thailand",
    description: "Thailand Institute of Nuclear Technology (Public Organization)",
    responsibilities: [
      "Pioneered the development and management of comprehensive maintenance systems for radiopharmaceutical production.",
      "Specialized in the maintenance of Water for Injection (WFI) and Purified Water (PW) systems.",
      "Spearheaded the initiation and oversight of computerized systems.",
      "Authored comprehensive work instructions and safety protocols.",
      "Maintained HVAC and cleanroom parameters compliance with ASHRAE and GMP standards."
    ],
    relevantProjects: [
      {
        name: "Data Analysis for Quality Control",
        description: "Applied sophisticated data cleaning methodologies to facilitate robust fraud detection and outlier analysis.",
        outcome: "Reduced anomalies by 65%"
      },
      {
        name: "Preventive Maintenance Enhancement",
        description: "Leveraged data science methodologies for analysis of abnormal biological parameters.",
        outcome: "Improved maintenance efficiency by 40%"
      }
    ],
    skills: [
      "Data Analysis",
      "Radiation Safety",
      "Laboratory Equipment",
      "Clean Rooms",
      "Machine Learning",
      "Laboratory Safety",
      "HVAC Engineering"
    ]
  },
  {
    date: "Jan 2021 - Jul 2021",
    title: "Mechanical Design Engineer",
    company: "Arçelik Hitachi Home Appliances",
    contractType: "Full-time",
    location: "Kabin Buri, Prachin Buri, Thailand",
    description: "Arçelik Hitachi Home Appliances",
    responsibilities: [
      "Reviewed and revised user manuals, addressing customer complaints.",
      "Initiated and led projects for production cost reduction.",
      "Applied advanced mechanical design skills using ANSYS and Moldex3D.",
      "Oversaw prototype testing and international lab collaboration.",
      "Redesigned vacuum compartment for HITACHI FBF model transition.",
      "Utilized CAD software for 3D drawing and design process."
    ],
    relevantProjects: [
      {
        name: "Vacuum Compartment Redesign",
        description: "Led the redesign project for HITACHI FBF640 to FBF720 transition.",
        outcome: "Successfully implemented new design specifications"
      },
      {
        name: "Cost Reduction Initiative",
        description: "Applied Pareto analysis for optimal part selection and cost reduction.",
        outcome: "Achieved significant cost savings"
      }
    ],
    skills: [
      "SOLIDWORKS",
      "Refrigerator",
      "Statistical Software",
      "Computer-Aided Design (CAD)"
    ]
  },
  {
    date: "Jun 2019 - Jan 2021",
    title: "Mechanical Engineer",
    company: "MACS",
    contractType: "Full-time",
    location: "Nonthaburi, Thailand",
    description: "MACS",
    responsibilities: [
      "Prepared post-bidding documentation for EPC project.",
      "Categorized piping and detailed welding processes.",
      "Acted as QC Welding Engineer ensuring ASME compliance.",
      "Qualified welders and managed WPS and WPQ documentation.",
      "Controlled joint fit-up and liaison with inspectors.",
      "Oversaw project schedule and completion.",
      "Developed 3D pipeline as-built drawings.",
      "Applied coating standards and managed tank foundation levels."
    ],
    relevantProjects: [
      {
        name: "EPC Project Documentation",
        description: "Managed comprehensive documentation for Bangchack Refinery project.",
        outcome: "100% compliance with ASME standards"
      },
      {
        name: "3D Pipeline Modeling",
        description: "Created detailed as-built drawings using AutoCAD Plant 3D.",
        outcome: "Improved documentation accuracy by 90%"
      }
    ],
    skills: [
      "Project Management",
      "ASME Standards",
      "AutoCAD Plant 3D",
      "Quality Control"
    ]
  }
]

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 dark:text-dark-primary">Professional Experience</h2>
        <p className="text-gray-600 dark:text-dark-secondary max-w-2xl mx-auto">
          A chronicle of my professional journey and key achievements
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <VerticalTimeline items={experienceData} />
      </div>
    </div>
  )
}

export default Experience
