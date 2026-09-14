import React from "react";
import "./OurProducts.css";
import { useNavigate } from "react-router-dom";

interface Product {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const products: any = [
  {
    image: "CMSassets/images/it_service/RMC.jpg",
    title: "Ready Mix Concrete ERP",
    description:
      "DevERP Ready Mix Concrete ERP is an integrated information system designed specifically for the Ready Mix Concrete industry, helping RMC manufacturers achieve optimum quality, reduce costs, and improve customer satisfaction with an affordable solution.",
    link: "index.aspx?q=ready_mix_concrete_erp",

    details: {
      category: "INDUSTRY ERP SOLUTION",

      heading: {
        title: "Ready Mix Concrete",
        highlight: "ERP",
      },

      shortDescription:
        "A complete business management solution built specifically for Ready Mix Concrete manufacturers.",

      introduction: [
        "DevERP specializes in an integrated information system designed for the Ready Mix Concrete Industry. We offer a perfect solution to high value RMC manufacturers that can handle both concrete and counter sales at one go and are looking to achieve optimum quality, reducing cost while ensuring customer satisfaction.",

        "RMC Industries faces various challenges like On-time Delivery, Handling Product Quality, Managing Delivery-Note and Billing, Accurate Outstanding flow, Tracking of Various Expenses, Stock Level at Various Warehouses, Accurate Consumption of Raw Material, Spare-Parts / Machinery Maintenance, Managing more employees and many more.",

        "Our software is developed and designed in a way that helps companies overcome such challenges.",

        "Our software is an affordable, powerful, yet flexible web based software that truly integrates concrete batch controls, keeps track of raw material consumption and finished goods output, quality control, dispatch, GPS vehicle tracking and business accounting on a single platform.",

        "We provide the plant owner/managers a real-time fleet information system from mixing of recipe/ingredients to delivery of finished product that vastly helps in enhancing their business competitiveness and taking effective business decisions.",

        "Our solution has been implemented at various RMC companies and locations across India.",
      ],

      modules: [
        {
          number: "01",
          title: "Marketing",
          description:
            "DevERP RMC Marketing software module helps your company stay competitive and streamline sales and marketing activities.",
          features: [
            "Sales Proposal / Quotation",
            "Proforma Invoice",
            "Multiple jobsite sales order",
            "Dispatch order planning",
            "Marketing persons visit record",
            "Pending sales order status",
            "Sales comparison / Region Wise report",
          ],
        },

        {
          number: "02",
          title: "Sales & Dispatch",
          description:
            "DevERP Sales & Dispatch module is designed to boost company sales and improve dispatch services.",
          features: [
            "Dispatch order",
            "Dispatch Challan / Sales Invoice / Transport Summary",
            "Sales MIS Reports",
          ],
        },

        {
          number: "03",
          title: "Store / Inventory Management",
          description:
            "Powerful and flexible inventory management features help manage and report raw material and stock information.",
          features: [
            "Raw Material inward through weight bridge software",
            "Requisition, indent, purchase order, purchase invoice",
            "Item stock statement with item category",
          ],
        },

        {
          number: "04",
          title: "Accounts",
          description:
            "DevERP Accounting module automates accounting processes and gathers financial data from different functional departments.",
          features: [
            "All kind of voucher entry",
            "Purchase / Sales register",
            "Daily Register, Bank / Cash register",
            "Dynamic tax classes for feature taxation system",
            "Statutory reports & Taxation Reports",
            "Financial report",
            "Product costing",
            "Vendor outstanding, party outstanding, Ledger reports",
          ],
        },

        {
          number: "05",
          title: "Production",
          description:
            "DevERP Production module facilitates production planning, quality testing and timely product delivery.",
          features: [
            "Daily Products report",
            "Production Summary",
          ],
        },

        {
          number: "06",
          title: "QA / QC",
          description:
            "DevERP QA/QC module helps detect and remove defects and provides a systematic approach for maintaining quality.",
          features: [
            "Different Types of Raw Material Testing",
            "Mix Design Certificate",
            "Finish good testing / rejection Memo & Analysis",
            "Other Analysis Reports",
          ],
        },

        {
          number: "07",
          title: "Fleet Management",
          description:
            "DevERP Fleet Management module helps improve workflows, manage vehicles and increase operational efficiency.",
          features: [
            "Vehicle Management",
            "Weight Bridge",
            "Various Reports Via SMS / Email",
            "Data sync",
          ],
        },
      ],

      benefits: [
        "Fully customized to suit the needs of Indian RMC industries",
        "Centralized data is secure and easy to backup",
        "Updates can be made quickly and easily",
        "Information is accessible to a user anywhere in the world",
        "Available 24 hours a day, 7 days a week",
        "Unlimited user system",
        "Cloud Hosting with easy and familiar interface",
        "No special configuration needed on user's PCs",
        "Lower costs",
        "Flexible and powerful ERP solution with capability to manage multiple plant locations",
      ],

      cta: {
        label: "READY TO GET STARTED?",
        title: "Take control of your RMC operations.",
        buttonText: "Contact Us",
      },
    },
  },
  { image: "CMSassets/images/it_service/REAL-ESTATE.png", title: "Real Estate ERP", description: "DevERP Real Estate ERP provides a secure, all-in-one software solution for real estate businesses of various sizes, helping them manage their business operations more effectively.", link: "index.aspx?q=real_estate_erp", details: { category: "INDUSTRY ERP SOLUTION", heading: { title: "Real Estate", highlight: "ERP", }, shortDescription: "Secure all-in-one business management solution designed specifically for real estate companies of every size.", introduction: ["A real estate business comprises of several confidential information about the sellers and the buyers. Security factor plays an important role for choosing ERP solution for such industry as there can be chances of hacking. DevERP Real Estate software provide all in one highly secure solution to real estate firms of various sizes.", "Being a high capital investment industry, real estate businesses suffer heavily from mistakes that can be avoided through effective customer engagement and data management. Currently, some of the key challenges that are faced by real estate developers across the board include streamlining processes, duplication and proper accessibility of data, maintaining leads, maintaining good relations with customers, tracking data, accounting etc. The Real Estate space is also littered with complex regulatory and statutory compliances issues. Our software is designed in a way that such issues can be addressed effectively and become a handy and helpful tool for real estate business.", "DevERP Real Estate software with its reliable modules like inventory manager, tracking tool, etc. helps in streamlining the misaligned and important operations for a real estate business. Our cloud based software comes with modern digital experience and can seamlessly integrate various departments in your real estate firm. Designed specifically for real estate business, our software tool help track all business processes and record all the transactions thereby increasing the efficiency of your operations.",], modules: [{ number: "01", title: "Accounts", description: "Our Accounts Module is integrated with all departments within the firm and can produce accurate financial reports. Our module is capable of handling the main accounting and financial aspects of a business.", features: ["All Kind of voucher Entry", "Purchase/sales register", "Daily Register, Bank/Cash register", "Dynamic tax classes for feature taxation system", "Statutory reports & Taxation Reports", "Financial report", "Product costing", "Vendor outstanding aging report, party outstanding aging report, ledger reports",], }, { number: "02", title: "Marketing & Reports", description: "Our Marketing and Reports module will help to improve the relationship of the company with the prospects and customers by providing support and enhancing customer experience. Clients can also store all the information regarding the leads and customers, including inquiries, quotations, contact details, invoices, etc.", features: ["Marketing Reports", "Marketing Transaction",], }, { number: "03", title: "Payroll", description: "Our Payroll Module is loaded with automated features to handle all aspects of personnel management, right from recruitment and onboarding to payroll and attendance, along with many other critical operations.", features: ["Payroll Master", "Payroll Transaction",], }, { number: "04", title: "Precast", description: "Our precast Module presents a system in which all processes are digitally integrated – and in which all processes can be carried out in accordance with BIM stipulations.", features: ["Preacast Report", "Precast sales", "Abstract List", "Sales Invoice List", "schedule Entry", "Challan Entry", "Daily Production Entry",], }, { number: "05", title: "Project Management", description: "Our Project Management Module helps to ensure that project is completed on time, within cost budget, in accordance with quality and design requirements, and in compliance with relevant laws and regulations.", features: ["Labour Gang Details", "Machinery Details", "Sites Details Manage", "Project Work Details", "issue Entry list", "Manage Project Status",], }, { number: "06", title: "Store / Inventory", description: "Our Store/Inventory Module is equipped with various features which help users to operate stocks at their warehouses, regulate and monitor stock movement and keep a close watch on the inventory.", features: ["Fabrication Roller inward with Q.C.", "Goods receive note material", "Requisition, indent, purchase order, purchase invoice", "Issues, Issue Return, Gate Pass", "Go Down Management", "Item stock Statement with Item Category",], }, { number: "07", title: "Tender", description: "Our Tender Module will help you ease the long process of working through the details before a tender is finalized.", features: ["Tender Details", "Work group Details", "Item work details", "Division/Wards/Dept. Details", "Tender Application Management", "Vehicle trip", "Driver details Manage",], }, { number: "08", title: "Reports Analysis", description: "Our Report Analysis Module will help in defining and modifying reports which will help increase the effectiveness of data analysis, which in turn can translate into making better business decisions.", features: ["Cash Expense Reports Management", "Machinery Reports", "Labour Reports", "Site GRN Reports", "Issue receipt", "Gate pass receipt", "Site receipt", "Marketing Visiting Data", "Attendance Report",], },], benefits: ["Helps in managing your financial transactions", "Provides complementary features for real estate professionals", "Provides smoother inter-departmental interaction", "It is a multi-functional digital tool", "The software provides you with an intuitive dashboard", "Real-time analytics and reporting", "Helps in boosting visibility and efficiencies across your organization",], cta: { label: "READY TO GET STARTED?", title: "Take control of your real estate operations.", buttonText: "Contact Us", }, }, },
  { image: "CMSassets/images/it_service/Engraving.jpg", title: "Engraving ERP", description: "DevERP Engraving ERP is among the first ERP solutions in India specifically designed to support businesses in the engraving industry.", link: "index.aspx?q=engraving_erp", details: { category: "INDUSTRY ERP SOLUTION", heading: { title: "Engraving", highlight: "ERP", }, shortDescription: "A specialized ERP solution designed for modern engraving and gravure operations.", introduction: ["DevERP Gravure software is among the first to provide engraving ERP solution in India. Our software effectively processes graphics entry such as (jpg, art pro, qc), graphics pending job status, current job list, user wise graphics pending job, user wise productivity. Through our new features you can now manage fabrications orders, cylinder and material inward, material issue, Q.A/Q.C etc.", "In Engraving ERP roller selection, roller cutting, material quality all are important functions for both small and big scale operational activities. The most acknowledged aspects of our ERP software are that – it is affordable, time saving, easy-to-implement and can adept at addressing industry-specific business processes.",], modules: [{ number: "01", title: "Marketing", description: "DevERP Gravure software Marketing Module has features to manage inquiries, job cards, quotations, job priorities, dispatch planning and marketing activities.", features: ["Order Inquiry", "Job-Card Preparation and Party Drawing Attachments", "Proforma Invoice", "Manage Multiple Job with Priority Setting", "Dispatch Order Planning", "Marketing Persons Visit Record & Ps Clearance Status",], }, { number: "02", title: "Pre-press", description: "DevERP Gravure software Pre-press Module helps manage graphics jobs, track job status and monitor user-wise graphics productivity.", features: ["Graphics Job Entry with Start Time & End Time", "Status for Graphics Running and Pending Job", "Graphics Work Report with Daily TMM Calculation", "User Wise Graphics Pending Job",], }, { number: "03", title: "Fabrication", description: "DevERP Gravure software Fabrication Module helps manage fabrication orders, pending jobs and quality control activities.", features: ["Fab Order", "Fab Order Pending Job and Status", "Q.A/Q.C",], }, { number: "04", title: "Production", description: "DevERP Production software Module helps monitor production activities, live job status and process-wise production performance.", features: ["Production Entry", "Production Monitor for Live Job Status", "Process Wise Production Report", "Engraving Report",], }, { number: "05", title: "Sales / Dispatch", description: "DevERP Sales/Dispatch software Module helps manage dispatch planning, invoicing, transportation and sales reporting.", features: ["Dispatch Order Planning", "Dispatch Challan/Sales Invoice/Transport Summary", "Sales MIS Report", "Finish Goods Lab Certificate", "SMS/Email Integration",], }, { number: "06", title: "Account", description: "DevERP Accounts software Module manages accounting transactions, financial reporting, taxation and outstanding management.", features: ["All Kind of Voucher Entry", "Purchase/Sales Register", "Daily Register, Bank/Cash Register", "Dynamic Tax Classes for Feature Taxation System", "Statutory Reports & Taxation Reports", "Financial Report", "Product Costing", "Vendor Outstanding, Party Outstanding, Ledger Reports",], }, { number: "07", title: "Store / Inventory", description: "DevERP Store/Inventory Module helps manage material inward, inventory transactions, fabrication rollers, godowns and stock statements.", features: ["Fabrication Roller Inward with Q.C.", "Goods Receive Note Material", "Requisition, Indent, Purchase Order, Purchase Invoice Issues, Issue Return, Gate Pass", "Godown Management", "Item Stock Statement with Item Category",], }, { number: "08", title: "Q.A / Q.C", description: "DevERP QA/QC Module helps manage raw material testing, finished goods quality control and analysis reports.", features: ["Different Types of Raw Material Testing", "Finish Good Q.C", "Analysis Reports",], },], benefits: ["Automates and Streamlines Business Processes with greater Adaptability", "Centralized data is secure and easy to backup", "Updates can be made quickly and easily", "Information is accessible to a user anywhere in the world", "Available 24 hours a day, 7 days a week", "Unlimited user system", "Cloud Hosting with easy and familiar interface", "No special configuration need on user's PCs", "Lower costs",], cta: { label: "READY TO GET STARTED?", title: "Take control of your engraving operations.", buttonText: "Contact Us", }, }, },
  { image: "CMSassets/images/it_service/Flexo.jpg", title: "Flexo Printing ERP", description: "DevERP Flexo Printing ERP is an integrated ERP solution specially designed to support high-quality and efficient operational processes in the flexographic printing industry.", link: "index.aspx?q=flexo_printing_erp", details: { category: "INDUSTRY ERP SOLUTION", heading: { title: "Flexo Printing", highlight: "ERP", }, shortDescription: "Integrated ERP software specially designed for high-quality printing, production and operational processes.", introduction: ["DevERP Flexo Printing software is an integrated ERP software specially designed and developed for high quality printing and operational processes. To achieve effective plate mounting, positioning the plate correctly and achieving a good bond is vital. Our powerful all-in-one automated software solution ensures the accuracy of mounting and optimizes business processes end to end.", "Challenges faced by printing industry such as Raw material cost, Shipping costs, Inventory/supply chain management, Machine capacity, Estimating/job costing, Customer service/customer self-service cannot be neglected. DevERP system is designed in a way that connects discrete modules together like a web-chain and thus leading to smooth functioning in an industry with precise understanding of every requirement given by the client by each and every department of the organization.", "Our software solution is well proven with industry leaders. Through our new features and associated modules, the ERP system has the potential to integrate all main activities into one platform that helps users make effective data-based decisions.",], modules: [{ number: "01", title: "Accounts", description: "DevERP Flexo Accounts software Module provides a complete set of tools to help manage and streamline your financial & accounting operations.", features: ["All Kind of voucher Entry", "Purchase/sales register", "Daily Register, Bank/Cash register", "Dynamic tax classes for feature taxation system", "Statutory reports & Taxation Reports", "Financial report", "Product costing", "Vendor outstanding, party outstanding, Ledger reports",], }, { number: "02", title: "Marketing", description: "DevERP Flexo Marketing software Module helps your company stay competitive and streamline sales and marketing activities.", features: ["Quotation", "Proforma invoice", "Marketing persons visit record", "Work order", "Pending quotation",], }, { number: "03", title: "Purchase", description: "DevERP Flexo Purchase software module is designed to take responsibility of your purchase requirements and management.", features: ["Purchase order", "Purchase register", "Purchase item summary",], }, { number: "04", title: "Sales & Dispatch", description: "DevERP Sales & Dispatch software module is designed to boost your company sales and dispatch services.", features: ["Dispatch order", "Dispatch Challan", "Sales Invoice", "Sales Dispatch Report",], }, { number: "05", title: "Store", description: "DevERP Flexo Store module is equipped with features that help users operate stocks at their warehouses, regulate stock movement and keep a close watch on inventory.", features: ["Raw material inward", "Gate pass", "Requisition", "Indent", "Item stock statement", "Issue item", "Issue return", "Opening stock statement",], }, { number: "06", title: "Production", description: "DevERP Flexo Production software module facilitates all your production related requirements with respect to the printing industry.", features: ["Quotation", "Job order/Sales Order", "Job Cart Entry", "Graphics entry", "Graphics QC entry", "Plate Selection", "Plate Cutting Process", "Plate QC process",], }, { number: "07", title: "Q.C", description: "DevERP Flexo Q.C software Module helps in detecting and removing defects from the system and provides a systematic approach to ensure smooth processes.", features: ["Material QC", "Material QC Report",], }, { number: "08", title: "Service", description: "DevERP Flexo Service software Module can effectively improve service configuration efficiency and modules' reusability.", features: ["Subsidy", "Service requisition order",], },], benefits: ["Automates and Streamlines Business Processes with greater Adaptability", "Centralized data is secure and easy to backup", "Real-time analytics and reporting", "Updates can be made quickly and easily", "Information is accessible to a user anywhere in the world", "Available 24 hours a day, 7 days a week", "Unlimited user system", "Cloud Hosting with easy and familiar interface", "No special configuration need on user's PCs", "Lower costs",], cta: { label: "READY TO GET STARTED?", title: "Take control of your printing operations.", buttonText: "Contact Us", }, }, },
  {
    image: "CMSassets/images/it_service/LIGHT_WEIGHT.jpg",

    title: "Light Weight Block (AAC) ERP",

    description:
      "DevERP Light Weight Block (AAC) ERP is an exclusive and specialized software solution designed specifically for the Brick & Block industry.",

    link: "index.aspx?q=light_weight_block_erp",

    details: {
      category: "INDUSTRY ERP SOLUTION",

      heading: {
        title: "Light Weight Block (AAC)",
        highlight: "ERP",
      },

      shortDescription:
        "Complete ERP solution specially designed for Brick, Block and AAC manufacturing, inventory, production, quality and dispatch operations.",

      introduction: [
        "DevERP Light Weight Block Software is an exclusive and comprehensive ERP solution specially designed for the Brick & Block Industry. It supports Autoclaved Aerated Concrete (AAC), brick and block manufacturing businesses with integrated tools for managing production, inventory, sales, dispatch, accounting and quality control.",

        "From picking up brick and block packs from the production line to stacking products in the yard, loading blocks onto vehicles and delivering them to distributors or end users, efficient coordination and continuous material flow are essential for operational efficiency. DevERP provides the required stability, capability and adaptability to manage these operations efficiently while helping minimize product damage.",

        "Our software provides easy and efficient integration between different business modules, helping Brick and Block companies maximize resources, maintain better inventory control, improve operational visibility and deliver better customer service.",
      ],

      modules: [
        {
          number: "01",
          title: "Marketing",

          description:
            "DevERP Marketing Module helps Brick and Block companies streamline sales and marketing activities, manage customer requirements and improve sales visibility.",

          features: [
            "Sales Proposal / Quotation",
            "Proforma Invoice",
            "Multiple Jobsite Sales Order",
            "Dispatch Order Planning",
            "Marketing Person Visit Record",
            "Pending Sales Order Status",
            "Sales Comparison / Region-Wise Report",
          ],
        },

        {
          number: "02",
          title: "Sales & Dispatch",

          description:
            "DevERP Sales & Dispatch Module is designed to improve order fulfillment, dispatch planning, invoicing and transportation management.",

          features: [
            "Dispatch Order",
            "Dispatch Challan",
            "Sales Invoice",
            "Transport Summary",
            "Sales MIS Report",
          ],
        },

        {
          number: "03",
          title: "Store / Inventory",

          description:
            "DevERP Store and Inventory Management Module provides complete control over raw materials, finished goods and stock movements while helping maintain optimum inventory levels.",

          features: [
            "Raw Material Inward Through Weighbridge Software",
            "Requisition",
            "Indent",
            "Purchase Order",
            "Purchase Invoice",
            "Item Stock Statement with Item Category",
            "Issue",
            "Issue Return",
            "Gate Pass",
          ],
        },

        {
          number: "04",
          title: "Accounts",

          description:
            "DevERP Accounts Module automates financial and accounting operations while integrating financial data from different business departments.",

          features: [
            "All Kind of Voucher Entry",
            "Purchase / Sales Register",
            "Daily Register",
            "Bank / Cash Register",
            "Dynamic Tax Classes for Future Taxation Requirements",
            "Statutory Reports & Taxation Reports",
            "Financial Reports",
            "Product Costing",
            "Vendor Outstanding",
            "Party Outstanding",
            "Ledger Reports",
          ],
        },

        {
          number: "05",
          title: "Production",

          description:
            "DevERP Production Module helps manage production planning, monitoring and reporting while supporting the conversion of raw materials into finished Brick, Block and AAC products.",

          features: [
            "Daily Production Report",
            "Production Summary",
          ],
        },

        {
          number: "06",
          title: "Q.C / Q.A",

          description:
            "DevERP QA/QC Module provides a systematic approach to raw material testing, finished goods quality control and rejection analysis.",

          features: [
            "Different Types of Raw Material Testing",
            "Mix Design Certificate",
            "Finished Goods Testing",
            "Rejection Memo & Analysis",
            "Other Quality Analysis Reports",
          ],
        },
      ],

      benefits: [
        "Automates and Streamlines Business Processes with greater Adaptability",
        "Centralized data is secure and easy to backup",
        "Enhanced Inventory and Stock Management",
        "Real-time or near real-time business operations",
        "Updates can be made quickly and easily",
        "Information is accessible to users anywhere in the world",
        "Available 24 hours a day, 7 days a week",
        "Unlimited user system",
        "Cloud Hosting with easy and familiar interface",
        "Lower operational and administrative costs",
      ],

      cta: {
        label: "READY TO GET STARTED?",
        title: "Take control of your Brick, Block and AAC operations.",
        buttonText: "Contact Us",
      },

    },
  },
  {
    image: "CMSassets/images/it_service/RICE-MILL.jpg",

    title: "Pulse / Rice Mill ERP",

    description:
      "DevERP Pulse/Rice Mill ERP is specially designed to support businesses and their operational requirements in the Food Manufacturing and Export industry.",

    link: "index.aspx?q=pulse/rice_mill_erp",

    details: {
      category: "INDUSTRY ERP SOLUTION",

      heading: {
        title: "Pulse / Rice Mill",
        highlight: "ERP",
      },

      shortDescription:
        "Powerful ERP software specially designed for Rice Mills, Pulse Mills and food manufacturing businesses to manage production, sales, purchase, inventory and financial operations.",

      introduction: [
        "DevERP Pulse/Rice Mill ERP software is specially designed to support business operations in the Food Manufacturing and Export industry. It helps eliminate the operational leakages caused by manual procedures across production, purchase, sales and inventory activities while bringing greater transparency to day-to-day business operations.",

        "The solution provides comprehensive management of Rice Mill and Pulse Mill operations including sales, purchase, stock management, financial accounting, staff data and business reporting. By bringing all functional units together on a single platform, businesses can improve coordination and maintain better control over their operations.",

        "DevERP Rice/Pulse Mill Software provides user-wise widgets and dashboard functions with a modern and user-friendly digital experience. It also supports seamless management of multiple locations, mills and warehouses, helping businesses boost managerial efficiency, reduce operational costs and improve overall profitability.",
      ],

      modules: [
        {
          number: "01",
          title: "Marketing",

          description:
            "DevERP Marketing Module helps Rice and Pulse Mill businesses streamline sales and marketing activities, manage customer requirements and improve sales visibility.",

          features: [
            "Sales Proposal / Quotation",
            "Proforma Invoice",
            "Multiple Jobsite Sales Order",
            "Dispatch Order Planning",
            "Marketing Person Visit Record",
            "Pending Sales Order Status",
            "Sales Comparison / Region-Wise Report",
          ],
        },

        {
          number: "02",
          title: "Sales & Dispatch",

          description:
            "DevERP Sales & Dispatch Module helps manage customer orders, dispatch planning, invoicing and transportation operations while improving delivery efficiency.",

          features: [
            "Dispatch Order",
            "Dispatch Challan",
            "Sales Invoice",
            "Transport Summary",
            "Sales MIS Report",
          ],
        },

        {
          number: "03",
          title: "Store / Inventory",

          description:
            "DevERP Store and Inventory Management Module provides complete control over raw materials, finished goods and stock movements while helping maintain optimum warehouse inventory levels.",

          features: [
            "Raw Material Inward Through Weighbridge Software",
            "Requisition",
            "Indent",
            "Purchase Order",
            "Purchase Invoice",
            "Item Stock Statement with Item Category",
            "Issue",
            "Issue Return",
            "Gate Pass",
          ],
        },

        {
          number: "04",
          title: "Accounts",

          description:
            "DevERP Accounts Module automates financial operations by integrating accounting information from different departments and providing accurate financial reports.",

          features: [
            "All Kind of Voucher Entry",
            "Purchase / Sales Register",
            "Daily Register",
            "Bank / Cash Register",
            "Dynamic Tax Classes for Future Taxation Requirements",
            "Statutory Reports & Taxation Reports",
            "Financial Reports",
            "Product Costing",
            "Vendor Outstanding",
            "Party Outstanding",
            "Ledger Reports",
          ],
        },

        {
          number: "05",
          title: "Production",

          description:
            "DevERP Production Module supports production planning, monitoring and reporting, helping Rice and Pulse Mills efficiently manage the conversion of raw materials into finished products.",

          features: [
            "Daily Production Report",
            "Production Summary",
          ],
        },
      ],

      benefits: [
        "Automates and Streamlines Business Processes with greater Adaptability",
        "Centralized data is secure and easy to backup",
        "Updates can be made quickly and easily",
        "Information is accessible to users anywhere in the world",
        "Available 24 hours a day, 7 days a week",
        "Unlimited user system",
        "Cloud Hosting with easy and familiar interface",
        "Multi-location Mill and Warehouse Management",
        "Improved operational transparency and managerial efficiency",
        "Lower operational and administrative costs",
        "Real-time or near real-time business operations and reporting",
      ],

      cta: {
        label: "READY TO GET STARTED?",
        title: "Take control of your Rice & Pulse Mill operations.",
        buttonText: "Contact Us",
      },

    },
  },
  {
    image: "CMSassets/images/it_service/SCHOOL-MANAGEMENT.jpg",

    title: "School Management ERP",

    description:
      "DevERP School Management ERP is designed to ease administrative tasks while enhancing operational efficiency and productivity for educational institutions.",

    link: "index.aspx?q=school_management_erp",

    details: {
      category: "EDUCATION ERP SOLUTION",

      heading: {
        title: "School Management",
        highlight: "ERP",
      },

      shortDescription:
        "Complete school management ERP solution designed to simplify administration, academic operations, student management, communication and financial activities.",

      introduction: [
        "DevERP School Management ERP is a comprehensive software solution specially designed to simplify and streamline the day-to-day operations of schools and educational institutions. It brings academic, administrative, financial and student-related activities together on a single integrated platform.",

        "Managing student records, admissions, attendance, fees, examinations, staff information and academic activities through manual processes can be time-consuming and error-prone. DevERP automates these processes, improves data accuracy and provides real-time access to important information for administrators, teachers and management.",

        "The system provides user-friendly dashboards, centralized data management and role-based access, helping educational institutions improve operational efficiency, enhance communication and make informed decisions through accurate reports and real-time information.",
      ],

      modules: [
        {
          number: "01",
          title: "Student Management",

          description:
            "DevERP Student Management Module provides centralized management of student information throughout the complete academic lifecycle.",

          features: [
            "Student Registration",
            "Admission Management",
            "Student Profile",
            "Class / Division Allocation",
            "Student Transfer Management",
            "Student Document Management",
            "Student History",
            "Student Search & Reports",
          ],
        },

        {
          number: "02",
          title: "Academic Management",

          description:
            "The Academic Management Module helps schools efficiently manage classes, subjects, academic schedules and day-to-day academic activities.",

          features: [
            "Academic Year Management",
            "Class & Division Management",
            "Subject Management",
            "Teacher Subject Allocation",
            "Timetable Management",
            "Lesson / Academic Planning",
            "Academic Progress Tracking",
            "Academic Reports",
          ],
        },

        {
          number: "03",
          title: "Attendance",

          description:
            "DevERP Attendance Module helps schools monitor and manage student and staff attendance with accurate records and reporting.",

          features: [
            "Student Attendance",
            "Staff Attendance",
            "Daily Attendance Entry",
            "Attendance Summary",
            "Absent Student Report",
            "Monthly Attendance Report",
            "Attendance Analysis",
          ],
        },

        {
          number: "04",
          title: "Examination",

          description:
            "The Examination Module provides complete management of examinations, marks, results and academic performance.",

          features: [
            "Exam Planning",
            "Subject-Wise Marks Entry",
            "Internal Assessment",
            "Grade Management",
            "Result Processing",
            "Marksheet Generation",
            "Student Performance Report",
            "Exam & Result Reports",
          ],
        },

        {
          number: "05",
          title: "Fees & Accounts",

          description:
            "DevERP Fees & Accounts Module helps schools manage fee collection, receipts, outstanding amounts and financial transactions efficiently.",

          features: [
            "Fee Structure Management",
            "Student Fee Collection",
            "Fee Receipt",
            "Fee Outstanding",
            "Fee Concession",
            "Payment Tracking",
            "Income & Expense Management",
            "Financial Reports",
          ],
        },

        {
          number: "06",
          title: "Staff / HR Management",

          description:
            "The Staff and HR Module helps schools maintain employee information and manage staff-related administrative activities.",

          features: [
            "Employee Master",
            "Teacher Management",
            "Staff Profile",
            "Department Management",
            "Staff Attendance",
            "Leave Management",
            "Employee Reports",
          ],
        },

        {
          number: "07",
          title: "Communication",

          description:
            "DevERP Communication Module helps schools improve communication between management, teachers, students and parents.",

          features: [
            "Parent Communication",
            "Notice Management",
            "Circular Management",
            "SMS / Notification Integration",
            "Important Announcements",
            "Communication History",
          ],
        },

        {
          number: "08",
          title: "Reports & Dashboard",

          description:
            "DevERP provides centralized dashboards and reporting tools that give management real-time visibility into school operations and performance.",

          features: [
            "Management Dashboard",
            "Student Reports",
            "Attendance Reports",
            "Academic Reports",
            "Examination Reports",
            "Fee Collection Reports",
            "Staff Reports",
            "MIS Reports",
          ],
        },
      ],

      benefits: [
        "Automates and Streamlines School Management Processes",
        "Centralized and Secure Student & Institutional Data",
        "Real-time Academic and Administrative Information",
        "Easy Student, Teacher and Staff Management",
        "Improved Attendance and Examination Management",
        "Efficient Fee Collection and Financial Management",
        "Role-Based Access for Different Users",
        "Information is accessible to authorized users from anywhere",
        "Available 24 hours a day, 7 days a week",
        "Cloud Hosting with an easy and familiar interface",
        "Improved communication between School, Teachers, Students and Parents",
        "Real-time or near real-time reports and dashboards",
      ],

      cta: {
        label: "READY TO GET STARTED?",
        title: "Simplify your school management with DevERP.",
        buttonText: "Contact Us",
      },

    },
  },
  {
    image: "CMSassets/images/it_service/PRINTING.jpg",

    title: "Printing & Packaging ERP",

    description:
      "DevERP Printing & Packaging ERP is a comprehensive ERP solution designed for the Printing & Packaging industry, covering essential business functions including CRM, Production Management, Work Management, Reporting, and Accounting.",

    link: "index.aspx?q=printing_packaging_erp",

    details: {
      category: "INDUSTRY ERP SOLUTION",

      heading: {
        title: "Printing & Packaging",
        highlight: "ERP",
      },

      shortDescription:
        "Integrated ERP solution specially designed for Printing & Packaging businesses to manage CRM, prepress, fabrication, production, inventory, quality, dispatch and accounting operations.",

      introduction: [
        "DevERP Printing & Packaging ERP is an integrated information system specially designed for the Printing & Packaging Industry. It provides a comprehensive solution to manage printing and packaging requirements from order inquiry and prepress activities to production, quality control, dispatch and accounting.",

        "The printing and packaging industry faces several operational challenges including machine allocation, material and supplies control, production planning, minimizing waste, managing work in progress and maintaining consistent product quality. DevERP helps businesses streamline these processes while improving resource utilization, reducing operational costs and maintaining customer satisfaction.",

        "DevERP Printing & Packaging software brings CRM, Production Management, Work Management, Inventory, Quality Control, Reporting and Accounting together on a single platform. It enables printers and packaging manufacturers to manage their complete business cycle efficiently, minimize waste, maximize profitability and make proactive, informed business decisions.",
      ],

      modules: [
        {
          number: "01",
          title: "Marketing",

          description:
            "DevERP Marketing Module helps printing and packaging companies manage customer inquiries, job requirements, quotations and order planning efficiently.",

          features: [
            "Order Inquiry",
            "Job-Card Preparation and Party Drawing Attachments",
            "Proforma Invoice",
            "Manage Multiple Jobs with Priority Setting",
            "Dispatch Order Planning",
            "Marketing Person Visit Record & PS Clearance Status",
          ],
        },

        {
          number: "02",
          title: "Prepress",

          description:
            "DevERP Prepress Module helps manage graphics-related activities, monitor job progress and track pending work for better prepress planning.",

          features: [
            "Graphics Job Entry with Start Time & End Time",
            "Graphics Running and Pending Job Status",
            "Graphics Work Report with Daily TMM Calculation",
            "User-Wise Graphics Pending Job",
          ],
        },

        {
          number: "03",
          title: "Fabrication",

          description:
            "DevERP Fabrication Module helps manage fabrication orders, monitor pending jobs and maintain quality control throughout the fabrication process.",

          features: [
            "Fabrication Order",
            "Fabrication Order Pending Job and Status",
            "QA / QC",
          ],
        },

        {
          number: "04",
          title: "Production",

          description:
            "DevERP Production Module facilitates production planning, quality monitoring and timely delivery while providing real-time visibility into ongoing jobs.",

          features: [
            "Production Entry",
            "Production Monitor for Live Job Status",
            "Process-Wise Production Report",
            "Engraving Report",
          ],
        },

        {
          number: "05",
          title: "Sales & Dispatch",

          description:
            "DevERP Sales & Dispatch Module helps manage dispatch planning, invoicing, finished goods certification and customer communication.",

          features: [
            "Dispatch Order Planning",
            "Dispatch Challan",
            "Sales Invoice",
            "Transport Summary",
            "Sales MIS Report",
            "Finished Goods Lab Certificate",
            "SMS / Email Integration",
          ],
        },

        {
          number: "06",
          title: "Accounts",

          description:
            "DevERP Accounts Module automates financial operations and integrates accounting data from different departments to provide accurate financial reporting.",

          features: [
            "All Kind of Voucher Entry",
            "Purchase / Sales Register",
            "Daily Register",
            "Bank / Cash Register",
            "Dynamic Tax Classes for Future Taxation Requirements",
            "Statutory Reports & Taxation Reports",
            "Financial Reports",
            "Product Costing",
            "Vendor Outstanding",
            "Party Outstanding",
            "Ledger Reports",
          ],
        },

        {
          number: "07",
          title: "Store / Inventory",

          description:
            "DevERP Store & Inventory Management Module provides complete control over raw materials, fabrication materials, warehouse operations and stock movements.",

          features: [
            "Fabrication Roller Inward with QC",
            "Goods Receive Note Material",
            "Requisition",
            "Indent",
            "Purchase Order",
            "Purchase Invoice",
            "Issue",
            "Issue Return",
            "Gate Pass",
            "Godown Management",
            "Item Stock Statement with Item Category",
          ],
        },

        {
          number: "08",
          title: "Q.A / Q.C",

          description:
            "DevERP QA/QC Module provides a systematic approach to raw material testing, finished goods quality control and analysis.",

          features: [
            "Different Types of Raw Material Testing",
            "Finished Goods QC",
            "Quality Analysis Reports",
          ],
        },
      ],

      benefits: [
        "Real-time production follow-up through shop-floor data collection or automation data",
        "Quick dispatch and invoicing of finished goods",
        "Packing and palletization definition and calculation",
        "Tailored product configuration",
        "Complex product descriptions with automatic unit conversion",
        "Flexible production planning and scheduling tools",
        "Combination Printing and Combination Printing Orders",
        "Work-in-Progress management based on quantity and quality",
        "Tool Management",
        "Fully customizable to meet the requirements of the Printing & Packaging Industry",
        "Available 24 hours a day, 7 days a week",
      ],

      cta: {
        label: "READY TO GET STARTED?",
        title: "Take control of your printing & packaging operations.",
        buttonText: "Contact Us",
      },

    },
  },
  {
    image: "CMSassets/images/it_service/AUTOMOBILE.jpg",

    title: "Automobiles & Workshop ERP",

    description:
      "DevERP Automobiles & Workshop Management ERP is designed to help automobile businesses and workshops meet the operational requirements of today's highly competitive automotive industry.",

    link: "index.aspx?q=automobiles_and_work_shop_management_erp",

    details: {
      category: "AUTOMOTIVE ERP SOLUTION",

      heading: {
        title: "Automobiles & Workshop",
        highlight: "ERP",
      },

      shortDescription:
        "Complete ERP solution designed for automobile businesses and workshops to manage vehicles, job cards, labour, spare parts, billing, inventory, accounting and reporting.",

      introduction: [
        "DevERP Automobiles and Workshop Management Software is specially designed to meet the requirements of highly competitive automotive businesses and workshops. It helps organizations analyze market trends, streamline business functions and maintain timely reporting of faults, services and operational activities.",

        "The automotive and workshop industry faces challenges such as intense competition, changing market demands, operational cost control, vehicle service management and increasing customer expectations. DevERP addresses these challenges by providing integrated tools for workshop operations, vehicle management, spare parts, labour, billing, inventory and customer service.",

        "With its integrated ERP platform, DevERP helps synchronize business processes across different stages of automotive and workshop operations while providing better visibility, operational control and customer satisfaction.",
      ],

      modules: [
        {
          number: "01",
          title: "Accounting",

          description:
            "DevERP Accounting Module automates financial operations and captures financial data from different business departments to provide accurate and comprehensive financial reporting.",

          features: [
            "All Kind of Voucher Entry",
            "Purchase / Sales Register",
            "Daily Register",
            "Bank / Cash Register",
            "Dynamic Tax Classes for Future Taxation Requirements",
            "Statutory Reports & Taxation Reports",
            "Financial Reports",
            "Product Costing",
            "Vendor Outstanding Aging Report",
            "Party Outstanding Aging Report",
            "Ledger Reports",
            "Trial Balance",
            "Balance Sheet",
            "Income Statement",
            "Cash Flow Statement",
          ],
        },

        {
          number: "02",
          title: "Sales / Purchase",

          description:
            "DevERP Sales and Purchase Module integrates sales and purchase operations with the ERP system, helping workshops manage customer requirements, service jobs and related billing activities.",

          features: [
            "Job Card Details",
            "Labour Data Management",
            "Spare Parts Billing",
            "Vehicle Data Management",
          ],
        },

        {
          number: "03",
          title: "Stock / Inventory",

          description:
            "DevERP Inventory Management Module provides complete control over spare parts and workshop inventory while helping maintain appropriate stock levels and efficient stock utilization.",

          features: [
            "Spare Parts Stock Data Management",
            "Billing on Labour Parts",
            "Insurance on Spare Parts",
            "Vehicle Service Scheduler",
          ],
        },

        {
          number: "04",
          title: "Quotes & Estimates",

          description:
            "DevERP Quotes & Estimates Module helps workshops prepare quotations and project estimates while providing supporting stock and financial information for better decision-making.",

          features: [
            "Quotation",
            "Stock Management",
            "Ledger Management",
            "Project Estimation",
          ],
        },

        {
          number: "05",
          title: "Reports",

          description:
            "DevERP Reports Module provides flexible reporting and data analysis capabilities, helping management monitor workshop performance and make informed business decisions.",

          features: [
            "Daily Labour Data Report",
            "Job Card Report",
            "Batch Report",
            "Branch-Wise Report",
            "MIS Report",
            "Employee KRA & KPI Reports",
          ],
        },
      ],

      benefits: [
        "Fully customized to suit the needs of Automobiles & Workshop businesses",
        "Centralized and secure business data with easy backup",
        "Updates can be made quickly and easily",
        "Information is accessible to authorized users from anywhere",
        "Available 24 hours a day, 7 days a week",
        "Unlimited user system",
        "Cloud Hosting with an easy and familiar interface",
        "No special configuration required on users' PCs",
        "Lower operational and administrative costs",
        "Enhanced Inventory and Spare Parts Management",
        "Automates and Streamlines Business Processes with greater Adaptability",
      ],

      cta: {
        label: "READY TO GET STARTED?",
        title: "Take control of your automobile & workshop operations.",
        buttonText: "Contact Us",
      },

    },
  },
  {
    image: "CMSassets/images/it_service/FLEET.jpg",

    title: "Transportation ERP",

    description:
      "DevERP Transportation ERP is designed specifically for fleet operations, providing a solution for businesses that rely on effective fleet and supply chain management.",

    link: "index.aspx?q=transportation_erp",

    details: {
      category: "TRANSPORTATION ERP SOLUTION",

      heading: {
        title: "Transportation",
        highlight: "ERP",
      },

      shortDescription:
        "Integrated transportation ERP solution designed to manage fleet, logistics, bookings, operations, documentation, payroll and supply-chain activities from a centralized platform.",

      introduction: [
        "DevERP Transportation Software Solution is specially designed to facilitate seamless interaction between order management and warehouse management systems. It helps businesses reduce transportation complexity, manage freight operations efficiently and perform important transportation activities from a centralized platform.",

        "Managing logistics and supply-chain operations brings new challenges every day. Transportation and fleet managers need to efficiently manage routes, carriers, vehicles, drivers, fuel, maintenance, compliance, deliveries and operational costs. DevERP helps address these challenges by providing centralized visibility and better control over transportation activities.",

        "DevERP Transportation Software provides robust tools to manage transport operations while helping businesses reduce overhead expenses, minimize unexpected downtime, improve order processing and optimize transportation resources. The solution is designed to improve operational efficiency, reduce costs and deliver better customer service.",
      ],

      modules: [
        {
          number: "01",
          title: "Accounts",

          description:
            "DevERP Accounts Module helps automate financial operations and provides centralized financial information for transportation businesses.",

          features: [
            "All Kind of Voucher Entry",
            "Purchase / Sales Register",
            "Daily Register",
            "Bank / Cash Register",
            "Dynamic Tax Classes for Future Taxation Requirements",
            "Statutory Reports & Taxation Reports",
            "Financial Reports",
            "Product Costing",
            "Vendor Outstanding",
            "Party Outstanding",
            "Ledger Reports",
          ],
        },

        {
          number: "02",
          title: "Operations & Stock Management",

          description:
            "DevERP Operations & Stock Management Module helps manage transportation bookings, orders, challans, loading and unloading activities and packaging operations.",

          features: [
            "Booking System Management",
            "Order Management",
            "Challan Management",
            "Gate Pass",
            "Delivery Challan",
            "Truck Unloading",
            "Packaging",
          ],
        },

        {
          number: "03",
          title: "Master Data Management",

          description:
            "DevERP Master Data Management Module provides centralized control over important operational masters, warehouse information and transportation rates.",

          features: [
            "General Master",
            "Godown Management",
            "Ledger Management",
            "Rate Management",
            "Freight B2B",
          ],
        },

        {
          number: "04",
          title: "Vehicle Master",

          description:
            "DevERP Vehicle Master Module helps businesses maintain and manage vehicle information for owned and market vehicles.",

          features: [
            "Market Vehicle",
            "Owner Vehicle",
          ],
        },

        {
          number: "05",
          title: "Documentation",

          description:
            "DevERP Documentation Module helps transportation businesses manage document series, stationery allocation and related documentation processes.",

          features: [
            "Series Generation",
            "Series Allocation",
            "Series Print",
            "Stationery Receipt",
            "Stationery Allocation",
            "Stationery Deallocation",
          ],
        },

        {
          number: "06",
          title: "Payroll",

          description:
            "DevERP Payroll Module helps manage employees, salary structures, attendance and payroll processing for transportation organizations.",

          features: [
            "Employee Management",
            "Salary Model",
            "Employee Salary Management",
            "Daily Attendance",
            "Monthly Attendance",
            "Salary Slip Print",
          ],
        },

        {
          number: "07",
          title: "Reports",

          description:
            "DevERP Reports Module provides management with centralized operational and business information for monitoring transportation performance.",

          features: [
            "MIS Reports",
          ],
        },
      ],

      benefits: [
        "Multi-functional digital tool for complete transportation management",
        "Real-time analytics and reporting",
        "Centralized and secure business data with easy backup",
        "Updates can be made quickly and easily",
        "Information is accessible to authorized users from anywhere",
        "Available 24 hours a day, 7 days a week",
        "Improved visibility and operational efficiency across the organization",
        "Better transportation logistics with improved on-time delivery",
        "Reduced costs through better route planning and load optimization",
        "Improved workforce management",
        "Centralized fleet, vehicle and transportation operations",
      ],

      cta: {
        label: "READY TO GET STARTED?",
        title: "Take control of your transportation operations.",
        buttonText: "Contact Us",
      },

    },
  },
  {
    image: "CMSassets/images/it_service/MANUFACTURING.jpg",

    title: "Machine Manufacturing ERP",

    description:
      "DevERP Machine Manufacturing ERP is a complete, centralized software solution designed to manage a wide range of manufacturing processes across the machine manufacturing industry.",

    link: "index.aspx?q=machine_manufacturing_erp",

    details: {
      category: "MANUFACTURING ERP SOLUTION",

      heading: {
        title: "Machine Manufacturing",
        highlight: "ERP",
      },

      shortDescription:
        "Complete cloud-based ERP solution designed to manage machine manufacturing, production planning, inventory, sales, purchasing, accounting and complex manufacturing operations.",

      introduction: [
        "DevERP Machine Manufacturing Software is a complete and centralized ERP solution designed to manage the entire range of manufacturing processes across the machine manufacturing industry. With accurate resource management and machine planning capabilities, it helps businesses track stock movements, improve delivery times and reduce stock-outs.",

        "Machine and equipment manufacturing involves large inventories, multiple machines, complex processes and multi-level assemblies. Managing these interconnected activities without an integrated system can become complicated and difficult to monitor. DevERP brings these processes together and enables a smooth flow of information across different departments.",

        "DevERP Machine Manufacturing Software is a cloud-based ERP solution that provides the flexibility required to manage complex builds and meet customer requirements. It improves visibility and collaboration across the supply chain, from component purchasing and inventory management to production and final delivery, helping businesses improve cash flow, increase productivity and grow revenue.",
      ],

      modules: [
        {
          number: "01",
          title: "Marketing",

          description:
            "DevERP Marketing Module helps machine manufacturing businesses streamline sales and marketing activities, manage customer requirements and improve sales visibility.",

          features: [
            "Sales Proposal / Quotation",
            "Proforma Invoice",
            "Multiple Jobsite Sales Order",
            "Dispatch Order Planning",
            "Marketing Person Visit Record",
            "Pending Sales Order Status",
            "Sales Comparison / Region-Wise Report",
          ],
        },

        {
          number: "02",
          title: "Sales & Dispatch",

          description:
            "DevERP Sales & Dispatch Module helps manage customer orders, dispatch planning, invoicing and transportation activities efficiently.",

          features: [
            "Dispatch Order",
            "Dispatch Challan",
            "Sales Invoice",
            "Transport Summary",
            "Sales MIS Report",
          ],
        },

        {
          number: "03",
          title: "Store / Inventory",

          description:
            "DevERP Store and Inventory Management Module provides complete control over raw materials, components and stock movements while helping maintain optimum inventory levels.",

          features: [
            "Raw Material Inward Through Weighbridge Software",
            "Requisition",
            "Indent",
            "Purchase Order",
            "Purchase Invoice",
            "Item Stock Statement with Item Category",
            "Issue",
            "Issue Return",
            "Gate Pass",
          ],
        },

        {
          number: "04",
          title: "Accounts",

          description:
            "DevERP Accounts Module automates financial operations and integrates financial data from different departments to provide accurate accounting and financial reports.",

          features: [
            "All Kind of Voucher Entry",
            "Purchase / Sales Register",
            "Daily Register",
            "Bank / Cash Register",
            "Dynamic Tax Classes for Future Taxation Requirements",
            "Statutory Reports & Taxation Reports",
            "Financial Reports",
            "Product Costing",
            "Vendor Outstanding",
            "Party Outstanding",
            "Ledger Reports",
          ],
        },

        {
          number: "05",
          title: "Production",

          description:
            "DevERP Production Module supports production planning, resource management and manufacturing operations while providing visibility into the complete production process.",

          features: [
            "Daily Production Report",
            "Production Summary",
            "Batch Production",
            "Job Production",
            "Mass Production",
          ],
        },
      ],

      benefits: [
        "Fully customized to suit the needs of Indian Machine Manufacturing Industries",
        "Centralized and secure business data with easy backup",
        "Updates can be made quickly and easily",
        "Information is accessible to authorized users from anywhere",
        "Available 24 hours a day, 7 days a week",
        "Unlimited user system",
        "Cloud Hosting with easy and familiar interface",
        "Lower operational and administrative costs",
        "Improved inventory and stock visibility",
        "Better production planning and resource utilization",
        "Improved supply-chain collaboration and operational visibility",
      ],

      cta: {
        label: "READY TO GET STARTED?",
        title: "Take control of your machine manufacturing operations.",
        buttonText: "Contact Us",
      },

    },
  },
  {
    image: "CMSassets/images/it_service/PHARMA.jpg",

    title: "Pharmaceutical Production & Management ERP",

    description:
      "DevERP Pharmaceutical Production & Management ERP is a sophisticated and comprehensive software solution designed for pharmaceutical manufacturers and companies to streamline their business processes.",

    link: "index.aspx?q=pharmaceutical_production_and_management_erp",

    details: {
      category: "PHARMACEUTICAL ERP SOLUTION",

      heading: {
        title: "Pharmaceutical",
        highlight: "ERP",
      },

      shortDescription:
        "Complete ERP solution designed for pharmaceutical manufacturers to manage production, batch processing, quality control, sales, purchasing, customer data and financial operations.",

      introduction: [
        "DevERP Pharmaceutical Production and Management Software is a sophisticated and comprehensive ERP solution designed specifically for pharmaceutical manufacturers and companies. It integrates production and management operations on a single platform to help businesses achieve optimum quality, reduce operational costs and improve overall efficiency.",

        "The pharmaceutical industry operates in a highly competitive and regulated environment where accurate information, quality management, production planning and timely decision-making are critical. DevERP provides centralized and actionable business information that helps pharmaceutical companies streamline operations, improve planning, reduce manual efforts and maintain better control over sensitive business processes.",

        "DevERP Pharmaceutical Production and Management Software automates and integrates key pharmaceutical processes, enabling businesses to efficiently manage production, batch processing, quality control, purchasing, sales and financial operations. The solution is designed to support pharmaceutical businesses of different sizes with a simple, cost-effective and scalable process model.",
      ],

      modules: [
        {
          number: "01",
          title: "Accounting",

          description:
            "DevERP Pharmaceutical Accounting Module automates financial operations and consolidates financial information from different business functions to provide accurate financial reporting.",

          features: [
            "All Kind of Voucher Entry",
            "Purchase / Sales Register",
            "Daily Register",
            "Bank / Cash Register",
            "Dynamic Tax Classes for Future Taxation Requirements",
            "Statutory Reports & Taxation Reports",
            "Financial Reports",
            "Product Costing",
            "Vendor Outstanding Aging Report",
            "Party Outstanding Aging Report",
            "Ledger Reports",
          ],
        },

        {
          number: "02",
          title: "Sales / Purchase",

          description:
            "DevERP Sales and Purchase Module integrates procurement and sales activities with the ERP system, helping businesses manage customer requirements and purchase needs efficiently.",

          features: [
            "Sales Management",
            "Purchase Management",
            "Customer-Wise Sales Management",
            "Purchase Requirement Management",
            "Integrated Sales & Purchase Operations",
          ],
        },

        {
          number: "03",
          title: "Customer Data",

          description:
            "DevERP Customer Data Module provides centralized master data management capabilities for maintaining accurate and accessible customer information.",

          features: [
            "Customer Master",
            "Customer Data Management",
            "Customer Information Management",
            "Centralized Customer Records",
          ],
        },

        {
          number: "04",
          title: "Pharma Manufacturing",

          description:
            "DevERP Pharma Manufacturing Module helps pharmaceutical companies streamline manufacturing operations, improve production visibility and bring products to market efficiently.",

          features: [
            "Pharmaceutical Manufacturing Management",
            "Production Process Management",
            "Manufacturing Planning",
            "Production Monitoring",
            "Product Manufacturing Management",
          ],
        },

        {
          number: "05",
          title: "Batch Production",

          description:
            "DevERP Batch Production Module supports complex batch process manufacturing and multi-level production requirements, helping pharmaceutical manufacturers manage formulas, packaging specifications and production batches efficiently.",

          features: [
            "Track Progress of Samples",
            "Multiple Developers Working on Separate Formula and Packaging Specifications",
            "Dynamically Adjust Formulas to Meet Physical and Cost Target Values",
            "Side-by-Side Comparison of Specifications",
            "Multi-Level Approval Workflows",
          ],
        },

        {
          number: "06",
          title: "Q.A / Q.C",

          description:
            "DevERP QA/QC Module provides systematic quality management capabilities to help pharmaceutical businesses maintain product quality, manage inspections and handle deviations and non-conformance.",

          features: [
            "QC and QA Inspection Management",
            "Inspection Checklist Management",
            "Special Instruction Libraries",
            "Task Acknowledgement and Quality Data Collection",
            "Automatic Disposition of Sub-Standard Inventory",
            "Customized COA Reports",
            "Deviation Management",
            "Non-Conformance Management",
          ],
        },
      ],

      benefits: [
        "Centralized and secure business data with easy backup",
        "Updates can be made quickly and easily",
        "Improved production planning and scheduling",
        "Information is accessible to authorized users from anywhere",
        "Available 24 hours a day, 7 days a week",
        "Browser-based and familiar user interface",
        "Unlimited user system",
        "No special configuration required on users' PCs",
        "Lower operational and administrative costs",
        "Improved batch production and manufacturing visibility",
        "Automates and Streamlines Business Processes with greater Adaptability",
      ],

      cta: {
        label: "READY TO GET STARTED?",
        title: "Take control of your pharmaceutical operations.",
        buttonText: "Contact Us",
      },

    },
  },
  {
    image: "CMSassets/images/it_service/CRM.png",

    title: "CRM ERP",

    description:
      "DevERP CRM ERP is a complete and compact solution designed to help businesses efficiently route, prioritize, and resolve customer support tickets.",

    link: "index.aspx?q=crm_erp",

    details: {
      category: "CRM ERP SOLUTION",

      heading: {
        title: "Customer Relationship",
        highlight: "ERP",
      },

      shortDescription:
        "Complete and scalable CRM ERP solution designed to manage customer data, leads, sales, support requests, marketing campaigns, quotations, orders, invoices and customer interactions.",

      introduction: [
        "DevERP CRM Software is a complete and compact customer relationship management solution designed to route, prioritize and resolve support requests efficiently. It helps businesses improve customer satisfaction, increase agent productivity and maintain better control over customer interactions at any scale.",

        "Successful businesses need to maintain a strong focus on their customers. DevERP CRM helps organizations collect, organize and analyze customer information so that sales and support teams can better understand customer preferences, manage interactions and respond to customer requirements quickly and efficiently.",

        "DevERP CRM Software is scalable and can be customized according to the specific requirements of different industries and businesses. It provides a complete, real-time view of customer information, interactions, sales activities, leads, marketing campaigns, contracts and team activities while helping businesses automate daily processes and improve customer relationships.",
      ],

      modules: [
        {
          number: "01",
          title: "Quotation",

          description:
            "DevERP Quotation Module helps sales teams create, manage and update customer quotations while maintaining a centralized record of quotation activities.",

          features: [
            "Create Quotations",
            "Edit Existing Quotations",
            "Quotation Management",
            "Customer-Wise Quotation Tracking",
          ],
        },

        {
          number: "02",
          title: "Sales Order / Purchase",

          description:
            "DevERP Sales Order and Purchase Module connects quotations with order processing and procurement activities, helping businesses manage customer and vendor transactions efficiently.",

          features: [
            "Convert Quotations into Sales Orders",
            "Issue Purchase Orders for Vendors",
            "Sales Order Management",
            "Purchase Order Management",
          ],
        },

        {
          number: "03",
          title: "Invoice",

          description:
            "DevERP Invoice Module simplifies billing by allowing businesses to convert approved quotations into invoices and maintain centralized invoice records.",

          features: [
            "Convert Quotations into Invoices",
            "Invoice Management",
            "Customer-Wise Invoice Tracking",
            "Billing Management",
          ],
        },

        {
          number: "04",
          title: "Campaign",

          description:
            "DevERP Campaign Module helps businesses plan and execute customer outreach campaigns through multiple communication channels while tracking marketing activities.",

          features: [
            "Campaign Management",
            "Call Campaigns",
            "Email Campaigns",
            "SMS Campaigns",
            "Customer Outreach Management",
          ],
        },

        {
          number: "05",
          title: "Lead Management",

          description:
            "DevERP Lead Management Module helps sales teams capture, qualify and evaluate leads while improving visibility across the complete lead lifecycle.",

          features: [
            "Lead Management",
            "Lead Qualification",
            "Lead Vetting",
            "Lead Tracking",
            "Sales Follow-Up Management",
          ],
        },

        {
          number: "06",
          title: "Delivery",

          description:
            "DevERP Delivery Module helps businesses manage delivery activities and maintain visibility over customer order fulfillment.",

          features: [
            "Delivery Management",
            "Order Fulfillment Tracking",
            "Customer-Wise Delivery Tracking",
            "Delivery Status Management",
          ],
        },
      ],

      benefits: [
        "Automates and Streamlines Business Processes with greater Adaptability",
        "Centralized and secure customer data with easy backup",
        "Updates can be made quickly and easily",
        "Information is accessible to authorized users from anywhere",
        "Available 24 hours a day, 7 days a week",
        "Unlimited user system",
        "Automated daily activity and sales team visit tracking",
        "Cloud Hosting with easy and familiar interface",
        "No special configuration required on users' PCs",
        "Lower operational and administrative costs",
        "Flexible and powerful CRM ERP solution",
        "Capability to manage multiple plant and business locations",
        "Improved customer satisfaction and sales team productivity",
        "Real-time visibility into customer interactions and business activities",
      ],

      cta: {
        label: "READY TO GET STARTED?",
        title: "Build stronger customer relationships with DevERP CRM.",
        buttonText: "Contact Us",
      },

    },
  },
  {
    image: "CMSassets/images/it_service/BOOK-DEPOT.jpg",

    title: "Book Depot / Shop ERP",

    description:
      "DevERP Book Depot / Shop Management ERP provides a smart and systematic way to manage bookstore operations, whether the business is small or large.",

    link: "index.aspx?q=book_depot_shop_management_erp",

    details: {
      category: "RETAIL ERP SOLUTION",

      heading: {
        title: "Book Depot / Shop",
        highlight: "ERP",
      },

      shortDescription:
        "Complete ERP solution designed for bookstores and book retail businesses to manage books, inventory, billing, purchasing, products, customers, suppliers and point-of-sale operations.",

      introduction: [
        "DevERP Book Depot / Shop Management Software is a smart and systematic solution designed to simplify the management of bookstores and retail book businesses. It helps bookstore managers efficiently manage books and related products while providing quick access to inventory, sales and customer information.",

        "The solution enables businesses to organize books category-wise based on book, subject, writer and other classifications. It also provides inventory visibility and helps users identify the exact rack location of books, making stock searching and day-to-day bookstore operations faster and more accurate.",

        "DevERP Book Depot / Shop Management ERP is suitable for bookstores of all sizes. It integrates accounting, invoicing, inventory, purchasing, product management, POS and customer activities into a centralized platform, helping bookstore managers automate routine processes, improve operational accuracy and reduce overall management costs.",
      ],

      modules: [
        {
          number: "01",
          title: "Accounting",

          description:
            "DevERP Accounting Module provides essential financial management capabilities for bookstores while integrating accounting information with sales, purchasing and inventory operations.",

          features: [
            "Basic Accounting Management",
            "Trial Balance",
            "Profit & Loss Statement",
            "Balance Sheet",
            "Financial Reports",
          ],
        },

        {
          number: "02",
          title: "Invoicing",

          description:
            "DevERP Invoicing Module helps bookstores manage billing, purchasing, discounts, inventory and customer and supplier accounts through an integrated system.",

          features: [
            "Sales Billing",
            "Purchase Management",
            "Discount Coupon Management",
            "Inventory Management",
            "Customer Account Management",
            "Supplier Account Management",
          ],
        },

        {
          number: "03",
          title: "Inventory Management",

          description:
            "DevERP Inventory Management Module provides complete visibility of books and stationery stock while helping businesses track inventory levels and automatically identify replenishment requirements.",

          features: [
            "Barcode Scanning",
            "Book Inventory Management",
            "Stationery Inventory Management",
            "Stock Management",
            "Book Category Management",
            "Rack Location Management",
            "Low Stock Monitoring",
            "Reorder Generation",
          ],
        },

        {
          number: "04",
          title: "Bulk Messaging",

          description:
            "DevERP Bulk Messaging Module helps bookstores communicate with customers efficiently through centralized messaging and promotional communication.",

          features: [
            "Bulk Customer Messaging",
            "Promotional Communication",
            "Customer Notification Management",
          ],
        },

        {
          number: "05",
          title: "Point of Sale",

          description:
            "DevERP Point of Sale Module provides an easy-to-use retail billing solution integrated with bookstore operations and can be customized according to specific business requirements.",

          features: [
            "Integrated Point of Sale",
            "Automated Billing",
            "Retail Sales Management",
            "Barcode-Based Billing",
            "Customizable POS Interface",
          ],
        },

        {
          number: "06",
          title: "Purchase Management",

          description:
            "DevERP Purchase Management Module helps bookstores manage purchasing activities, QR code scanning and accounting integration for efficient procurement operations.",

          features: [
            "Purchase Management",
            "QR Code Scanning",
            "Purchase Entry",
            "Accounting Integration",
            "Supplier Purchase Management",
          ],
        },

        {
          number: "07",
          title: "Product Management",

          description:
            "DevERP Product Management Module helps bookstores maintain complete product information and manage books and stationery efficiently using barcode and labeling capabilities.",

          features: [
            "Add Products",
            "Edit Products",
            "Delete Products",
            "Product Master Management",
            "Barcode Scanner Integration",
            "Label Printing",
            "Book and Stationery Product Management",
          ],
        },

        {
          number: "08",
          title: "Lead Management",

          description:
            "DevERP Lead Management Module helps bookstores capture and manage customer inquiries, requests and potential orders for better sales follow-up.",

          features: [
            "Lead Management",
            "Customer Inquiry Management",
            "Order Request Management",
            "Lead Follow-Up",
          ],
        },
      ],

      benefits: [
        "Automates and Streamlines Business Processes with greater Adaptability",
        "Real-time or near real-time business operations",
        "Centralized and secure business data with easy backup",
        "Updates can be made quickly and easily",
        "Information is accessible to authorized users from anywhere",
        "Available 24 hours a day, 7 days a week",
        "Unlimited user system",
        "Cloud Hosting with easy and familiar interface",
        "No special configuration required on users' PCs",
        "Lower operational and administrative costs",
        "Flexible and powerful ERP solution",
        "Efficient barcode-based inventory and billing management",
        "Improved stock visibility and automated reorder management",
        "Capability to manage multiple bookstore and business locations",
      ],

      cta: {
        label: "READY TO GET STARTED?",
        title: "Take control of your bookstore operations.",
        buttonText: "Contact Us",
      },

    },
  },
  {
    image: "CMSassets/images/it_service/TRADING.jpg",

    title: "Trading ERP",

    description:
      "DevERP Trading ERP is built specifically with the requirements of the Indian trading and distribution industry in mind.",

    link: "index.aspx?q=trading_erp",
    details: {
      category: "TRADING & DISTRIBUTION ERP SOLUTION",

      heading: {
        title: "Trading & Distribution",
        highlight: "ERP",
      },

      shortDescription:
        "Complete ERP solution designed for trading and distribution businesses to manage finance, procurement, inventory, orders, warehouses, supply chain, sales and business analysis from a unified platform.",

      introduction: [
        "DevERP Trading ERP is specially designed around the requirements of India's trading and distribution industry. In a highly competitive market, traders need to serve customers efficiently, monitor sales activities and track marketing strategies in real time. DevERP brings these critical business activities together on a centralized platform.",

        "The feature-rich ERP solution provides an end-to-end platform to plan, source, stock, sell, recover and analyze trading operations. It synchronizes departments, improves decision-making and provides better visibility into business performance, helping organizations improve operational efficiency and profitability.",

        "Whether the business operates on a small scale or manages distribution across multiple locations and markets, DevERP Trading ERP provides scalable tools for inventory, procurement, order management, warehousing and supply-chain operations. Key business information can also be accessed on the go, enabling sales and management teams to make faster and more informed decisions.",
      ],

      modules: [
        {
          number: "01",
          title: "Finance & Accounting",

          description:
            "DevERP Finance & Accounting Module helps trading businesses manage financial transactions, payables, receivables and financial reporting from a centralized platform.",

          features: [
            "Accounting Entries",
            "Payables Management",
            "Receivables Management",
            "Trial Balance",
            "Profit & Loss Statement",
            "Balance Sheet",
            "Financial Reports",
          ],
        },

        {
          number: "02",
          title: "Procurement",

          description:
            "DevERP Procurement Management Module helps businesses manage purchasing of raw, semi-finished and finished goods while maintaining complete visibility of procurement activities.",

          features: [
            "Procurement Management",
            "Raw Material Purchase",
            "Semi-Finished Goods Purchase",
            "Finished Goods Purchase",
            "Quality and Quantity Tracking",
            "Goods Receipt Management",
            "Delivery Status Tracking",
          ],
        },

        {
          number: "03",
          title: "Manufacturing",

          description:
            "DevERP Manufacturing Management Module supports trading businesses that also manufacture selected products, providing visibility into their manufacturing operations.",

          features: [
            "Manufacturing Management",
            "Production Tracking",
            "Manufacturing Process Monitoring",
            "Manufactured Item Management",
          ],
        },

        {
          number: "04",
          title: "Inventory Management",

          description:
            "DevERP Inventory Management Module provides complete visibility of stock across different locations while helping businesses manage inventory movement, reorder levels and stock availability.",

          features: [
            "Multi-Location Inventory Tracking",
            "Stock Level Management",
            "Reorder Level Management",
            "Stock Reorder Reminders",
            "Inventory Movement Tracking",
            "Stock Availability Monitoring",
          ],
        },

        {
          number: "05",
          title: "Order Management",

          description:
            "DevERP Order Management Module helps businesses manage the complete order lifecycle from customer inquiry and order placement to delivery, invoicing and collection.",

          features: [
            "Customer Inquiry Management",
            "Order Management",
            "Delivery Status Tracking",
            "Order Fulfillment Tracking",
            "Pending Order Management",
            "Order Invoicing",
            "Collection Tracking",
          ],
        },

        {
          number: "06",
          title: "Warehouse Management",

          description:
            "DevERP Warehouse Management Module provides real-time visibility into warehouse stock and product movement from entry to exit.",

          features: [
            "Warehouse Product Tracking",
            "Goods Entry Management",
            "Goods Exit Management",
            "Entry-to-Exit Tracking",
            "Live Stock Updates",
            "Warehouse Stock Management",
          ],
        },

        {
          number: "07",
          title: "Supply Chain Management",

          description:
            "DevERP Supply Chain Management Module helps businesses monitor product movement across the complete supply chain, from sourcing point to final customer delivery.",

          features: [
            "Product Movement Tracking",
            "Source-to-Customer Tracking",
            "Supply Chain Monitoring",
            "Delivery Tracking",
            "Distribution Management",
          ],
        },
      ],

      benefits: [
        "Real-time monitoring of business resources",
        "Accurate business analysis and reporting",
        "Multi-branch and multi-location operations",
        "Dynamic tracking of various business processes",
        "Lead management",
        "Multiple pricing management",
        "User-definable marketing schemes",
        "Efficient stock management",
        "Sales tracking and monitoring",
        "Historical sales analysis and reporting",
        "Centralized and secure business data with easy backup",
        "Updates can be made quickly and easily",
        "Cloud Hosting with easy and familiar interface",
        "Lower operational and administrative costs",
      ],

      cta: {
        label: "READY TO GET STARTED?",
        title: "Take control of your trading & distribution operations.",
        buttonText: "Contact Us",
      },

    },
  },
];

const OurProducts: React.FC = () => {
  const featuredProduct = products[0];
  const remainingProducts = products.slice(1);
  const navigate = useNavigate();

  return (
    <section className="products-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="products-hero">
        <div className="products-container">

          <div className="products-hero-grid">

            {/* ================= HERO LEFT ================= */}

            <div className="products-hero-content product-hero-slide-left">

              <div className="products-kicker">
                <span className="products-kicker-line" />
                DEV ERP SOLUTIONS
              </div>

              <h1>
                Software built for
                <span> real businesses.</span>
              </h1>

              <p>
                Powerful ERP solutions designed around the unique
                requirements of different industries — helping
                businesses simplify operations, improve visibility
                and grow with confidence.
              </p>

              <div className="products-hero-meta">

                <div className="products-meta-item">
                  <strong>15+</strong>
                  <span>Industry Solutions</span>
                </div>

                <div className="products-meta-divider" />

                <div className="products-meta-item">
                  <strong>ERP</strong>
                  <span>Business Management</span>
                </div>

                <div className="products-meta-divider" />

                <div className="products-meta-item">
                  <strong>360°</strong>
                  <span>Business Visibility</span>
                </div>

              </div>

            </div>

            {/* ================= HERO RIGHT ================= */}

            <div className="products-hero-visual product-hero-slide-right">

              <div className="products-hero-circle" />

              <div className="products-hero-image-card">

                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.title}
                />

                <div className="products-hero-image-overlay" />

                <div className="products-hero-product-info">

                  <span>
                    FEATURED SOLUTION
                  </span>

                  <h3>
                    {featuredProduct.title}
                  </h3>

                  <a href={featuredProduct.link}>
                    Explore solution
                    <span>↗</span>
                  </a>

                </div>

              </div>

              <div className="products-floating-card">

                <div className="products-floating-icon">
                  ✓
                </div>

                <div>
                  <strong>
                    Industry Focused
                  </strong>

                  <span>
                    Built around your workflow
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>


      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <div className="products-list-section">

        <div className="products-container">

          {/* ================= SECTION HEADER ================= */}

          <div className="products-section-header product-scroll-left">

            <div>

              <span className="products-section-label">
                OUR PRODUCTS
              </span>

              <h2>
                Solutions for every
                <span> industry.</span>
              </h2>

            </div>

            <p>
              Explore our collection of industry-specific ERP
              solutions designed to bring your entire business
              onto one powerful platform.
            </p>

          </div>


          {/* ================= PRODUCTS GRID ================= */}

          <div className="products-grid">

            {remainingProducts.map((product, index) => (

              <div className={` solution-card product-card-reveal product-card-delay-${Math.min(index + 1, 5)} `} key={product.link} role="button" tabIndex={0} onClick={() => { navigate("/products", { state: { product, products }, }); }} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { navigate("/products", { state: { product, }, }); } }} >

                {/* ================= IMAGE ================= */}

                <div className="solution-card-image">

                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    decoding="async"
                  />

                  <span className="solution-number">
                    {String(index + 2).padStart(2, "0")}
                  </span>

                  <div className="solution-card-image-arrow">
                    ↗
                  </div>

                </div>


                {/* ================= CONTENT ================= */}

                <div className="solution-card-body">

                  <div className="solution-card-title-row">

                    <h3>
                      {product.title}
                    </h3>

                    <span className="solution-arrow">
                      →
                    </span>

                  </div>

                  <p>
                    {product.description}
                  </p>

                  <div className="solution-card-footer">

                    <span>
                      Explore solution
                    </span>

                    <span className="solution-footer-line" />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* =====================================================
          CTA
          {\"seq\":\"7\",\"name\":\"Business Card\",\"code\":\"BC\",\"link\":\"BusinessCardMst\",\"iconname\":\"add-card\"}
          {\"seq\":\"7\",\"name\":\"Business Card\",\"code\":\"BC\",\"link\":\"BusinessCardMst\",\"iconname\":\"add-card\",\"isapplink\":\"True\",\"title\":\"\",\"url\":\"BusinessCardMst\",\"isfrombusinesscard\":\"True\"}
      ===================================================== */}

      <div className="products-cta-section">

        <div className="products-container">

          <div className="products-cta">

            <div className="products-cta-pattern" />


            {/* ================= CTA LEFT ================= */}

            <div className="products-cta-content product-cta-slide-left">

              <span>
                NEED A CUSTOM SOLUTION?
              </span>

              <h2>
                Let's build the right
                <strong> ERP for your business.</strong>
              </h2>

              <p>
                Tell us about your business requirements and
                we'll help you find the right solution.
              </p>

            </div>


            {/* ================= CTA RIGHT ================= */}

            <a
              href="#"
              className="products-cta-button product-cta-slide-right"
              onClick={(e) => {
                e.preventDefault();
                navigate("/contact_us");
              }}
            >
              Talk to our team
              <span>→</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OurProducts;

