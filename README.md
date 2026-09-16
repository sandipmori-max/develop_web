# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
const products: Product[] = [
 {
  image: "CMSassets/images/it_service/RMC.jpg",
  title: "Ready Mix Concrete ERP",
  description:
    "Integrated ERP solution designed specifically for the Ready-Mix Concrete Industry.",
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
 { image: "CMSassets/images/it_service/REAL-ESTATE.png", title: "Real Estate ERP", description: "Secure all-in-one business management solution for real estate companies of every size.", link: "index.aspx?q=real_estate_erp", details: { category: "INDUSTRY ERP SOLUTION", heading: { title: "Real Estate", highlight: "ERP", }, shortDescription: "Secure all-in-one business management solution designed specifically for real estate companies of every size.", introduction: [ "A real estate business comprises of several confidential information about the sellers and the buyers. Security factor plays an important role for choosing ERP solution for such industry as there can be chances of hacking. DevERP Real Estate software provide all in one highly secure solution to real estate firms of various sizes.", "Being a high capital investment industry, real estate businesses suffer heavily from mistakes that can be avoided through effective customer engagement and data management. Currently, some of the key challenges that are faced by real estate developers across the board include streamlining processes, duplication and proper accessibility of data, maintaining leads, maintaining good relations with customers, tracking data, accounting etc. The Real Estate space is also littered with complex regulatory and statutory compliances issues. Our software is designed in a way that such issues can be addressed effectively and become a handy and helpful tool for real estate business.", "DevERP Real Estate software with its reliable modules like inventory manager, tracking tool, etc. helps in streamlining the misaligned and important operations for a real estate business. Our cloud based software comes with modern digital experience and can seamlessly integrate various departments in your real estate firm. Designed specifically for real estate business, our software tool help track all business processes and record all the transactions thereby increasing the efficiency of your operations.", ], modules: [ { number: "01", title: "Accounts", description: "Our Accounts Module is integrated with all departments within the firm and can produce accurate financial reports. Our module is capable of handling the main accounting and financial aspects of a business.", features: [ "All Kind of voucher Entry", "Purchase/sales register", "Daily Register, Bank/Cash register", "Dynamic tax classes for feature taxation system", "Statutory reports & Taxation Reports", "Financial report", "Product costing", "Vendor outstanding aging report, party outstanding aging report, ledger reports", ], }, { number: "02", title: "Marketing & Reports", description: "Our Marketing and Reports module will help to improve the relationship of the company with the prospects and customers by providing support and enhancing customer experience. Clients can also store all the information regarding the leads and customers, including inquiries, quotations, contact details, invoices, etc.", features: [ "Marketing Reports", "Marketing Transaction", ], }, { number: "03", title: "Payroll", description: "Our Payroll Module is loaded with automated features to handle all aspects of personnel management, right from recruitment and onboarding to payroll and attendance, along with many other critical operations.", features: [ "Payroll Master", "Payroll Transaction", ], }, { number: "04", title: "Precast", description: "Our precast Module presents a system in which all processes are digitally integrated – and in which all processes can be carried out in accordance with BIM stipulations.", features: [ "Preacast Report", "Precast sales", "Abstract List", "Sales Invoice List", "schedule Entry", "Challan Entry", "Daily Production Entry", ], }, { number: "05", title: "Project Management", description: "Our Project Management Module helps to ensure that project is completed on time, within cost budget, in accordance with quality and design requirements, and in compliance with relevant laws and regulations.", features: [ "Labour Gang Details", "Machinery Details", "Sites Details Manage", "Project Work Details", "issue Entry list", "Manage Project Status", ], }, { number: "06", title: "Store / Inventory", description: "Our Store/Inventory Module is equipped with various features which help users to operate stocks at their warehouses, regulate and monitor stock movement and keep a close watch on the inventory.", features: [ "Fabrication Roller inward with Q.C.", "Goods receive note material", "Requisition, indent, purchase order, purchase invoice", "Issues, Issue Return, Gate Pass", "Go Down Management", "Item stock Statement with Item Category", ], }, { number: "07", title: "Tender", description: "Our Tender Module will help you ease the long process of working through the details before a tender is finalized.", features: [ "Tender Details", "Work group Details", "Item work details", "Division/Wards/Dept. Details", "Tender Application Management", "Vehicle trip", "Driver details Manage", ], }, { number: "08", title: "Reports Analysis", description: "Our Report Analysis Module will help in defining and modifying reports which will help increase the effectiveness of data analysis, which in turn can translate into making better business decisions.", features: [ "Cash Expense Reports Management", "Machinery Reports", "Labour Reports", "Site GRN Reports", "Issue receipt", "Gate pass receipt", "Site receipt", "Marketing Visiting Data", "Attendance Report", ], }, ], benefits: [ "Helps in managing your financial transactions", "Provides complementary features for real estate professionals", "Provides smoother inter-departmental interaction", "It is a multi-functional digital tool", "The software provides you with an intuitive dashboard", "Real-time analytics and reporting", "Helps in boosting visibility and efficiencies across your organization", ], cta: { label: "READY TO GET STARTED?", title: "Take control of your real estate operations.", buttonText: "Contact Us", }, }, },
 { image: "CMSassets/images/it_service/Engraving.jpg", title: "Engraving ERP", description: "A specialized ERP solution designed for modern engraving and gravure operations.", link: "index.aspx?q=engraving_erp", details: { category: "INDUSTRY ERP SOLUTION", heading: { title: "Engraving", highlight: "ERP", }, shortDescription: "A specialized ERP solution designed for modern engraving and gravure operations.", introduction: [ "DevERP Gravure software is among the first to provide engraving ERP solution in India. Our software effectively processes graphics entry such as (jpg, art pro, qc), graphics pending job status, current job list, user wise graphics pending job, user wise productivity. Through our new features you can now manage fabrications orders, cylinder and material inward, material issue, Q.A/Q.C etc.", "In Engraving ERP roller selection, roller cutting, material quality all are important functions for both small and big scale operational activities. The most acknowledged aspects of our ERP software are that – it is affordable, time saving, easy-to-implement and can adept at addressing industry-specific business processes.", ], modules: [ { number: "01", title: "Marketing", description: "DevERP Gravure software Marketing Module has features to manage inquiries, job cards, quotations, job priorities, dispatch planning and marketing activities.", features: [ "Order Inquiry", "Job-Card Preparation and Party Drawing Attachments", "Proforma Invoice", "Manage Multiple Job with Priority Setting", "Dispatch Order Planning", "Marketing Persons Visit Record & Ps Clearance Status", ], }, { number: "02", title: "Pre-press", description: "DevERP Gravure software Pre-press Module helps manage graphics jobs, track job status and monitor user-wise graphics productivity.", features: [ "Graphics Job Entry with Start Time & End Time", "Status for Graphics Running and Pending Job", "Graphics Work Report with Daily TMM Calculation", "User Wise Graphics Pending Job", ], }, { number: "03", title: "Fabrication", description: "DevERP Gravure software Fabrication Module helps manage fabrication orders, pending jobs and quality control activities.", features: [ "Fab Order", "Fab Order Pending Job and Status", "Q.A/Q.C", ], }, { number: "04", title: "Production", description: "DevERP Production software Module helps monitor production activities, live job status and process-wise production performance.", features: [ "Production Entry", "Production Monitor for Live Job Status", "Process Wise Production Report", "Engraving Report", ], }, { number: "05", title: "Sales / Dispatch", description: "DevERP Sales/Dispatch software Module helps manage dispatch planning, invoicing, transportation and sales reporting.", features: [ "Dispatch Order Planning", "Dispatch Challan/Sales Invoice/Transport Summary", "Sales MIS Report", "Finish Goods Lab Certificate", "SMS/Email Integration", ], }, { number: "06", title: "Account", description: "DevERP Accounts software Module manages accounting transactions, financial reporting, taxation and outstanding management.", features: [ "All Kind of Voucher Entry", "Purchase/Sales Register", "Daily Register, Bank/Cash Register", "Dynamic Tax Classes for Feature Taxation System", "Statutory Reports & Taxation Reports", "Financial Report", "Product Costing", "Vendor Outstanding, Party Outstanding, Ledger Reports", ], }, { number: "07", title: "Store / Inventory", description: "DevERP Store/Inventory Module helps manage material inward, inventory transactions, fabrication rollers, godowns and stock statements.", features: [ "Fabrication Roller Inward with Q.C.", "Goods Receive Note Material", "Requisition, Indent, Purchase Order, Purchase Invoice Issues, Issue Return, Gate Pass", "Godown Management", "Item Stock Statement with Item Category", ], }, { number: "08", title: "Q.A / Q.C", description: "DevERP QA/QC Module helps manage raw material testing, finished goods quality control and analysis reports.", features: [ "Different Types of Raw Material Testing", "Finish Good Q.C", "Analysis Reports", ], }, ], benefits: [ "Automates and Streamlines Business Processes with greater Adaptability", "Centralized data is secure and easy to backup", "Updates can be made quickly and easily", "Information is accessible to a user anywhere in the world", "Available 24 hours a day, 7 days a week", "Unlimited user system", "Cloud Hosting with easy and familiar interface", "No special configuration need on user's PCs", "Lower costs", ], cta: { label: "READY TO GET STARTED?", title: "Take control of your engraving operations.", buttonText: "Contact Us", }, }, },
 { image: "CMSassets/images/it_service/Flexo.jpg", title: "Flexo Printing ERP", description: "Integrated software for high-quality printing, production and operational management.", link: "index.aspx?q=flexo_printing_erp", details: { category: "INDUSTRY ERP SOLUTION", heading: { title: "Flexo Printing", highlight: "ERP", }, shortDescription: "Integrated ERP software specially designed for high-quality printing, production and operational processes.", introduction: [ "DevERP Flexo Printing software is an integrated ERP software specially designed and developed for high quality printing and operational processes. To achieve effective plate mounting, positioning the plate correctly and achieving a good bond is vital. Our powerful all-in-one automated software solution ensures the accuracy of mounting and optimizes business processes end to end.", "Challenges faced by printing industry such as Raw material cost, Shipping costs, Inventory/supply chain management, Machine capacity, Estimating/job costing, Customer service/customer self-service cannot be neglected. DevERP system is designed in a way that connects discrete modules together like a web-chain and thus leading to smooth functioning in an industry with precise understanding of every requirement given by the client by each and every department of the organization.", "Our software solution is well proven with industry leaders. Through our new features and associated modules, the ERP system has the potential to integrate all main activities into one platform that helps users make effective data-based decisions.", ], modules: [ { number: "01", title: "Accounts", description: "DevERP Flexo Accounts software Module provides a complete set of tools to help manage and streamline your financial & accounting operations.", features: [ "All Kind of voucher Entry", "Purchase/sales register", "Daily Register, Bank/Cash register", "Dynamic tax classes for feature taxation system", "Statutory reports & Taxation Reports", "Financial report", "Product costing", "Vendor outstanding, party outstanding, Ledger reports", ], }, { number: "02", title: "Marketing", description: "DevERP Flexo Marketing software Module helps your company stay competitive and streamline sales and marketing activities.", features: [ "Quotation", "Proforma invoice", "Marketing persons visit record", "Work order", "Pending quotation", ], }, { number: "03", title: "Purchase", description: "DevERP Flexo Purchase software module is designed to take responsibility of your purchase requirements and management.", features: [ "Purchase order", "Purchase register", "Purchase item summary", ], }, { number: "04", title: "Sales & Dispatch", description: "DevERP Sales & Dispatch software module is designed to boost your company sales and dispatch services.", features: [ "Dispatch order", "Dispatch Challan", "Sales Invoice", "Sales Dispatch Report", ], }, { number: "05", title: "Store", description: "DevERP Flexo Store module is equipped with features that help users operate stocks at their warehouses, regulate stock movement and keep a close watch on inventory.", features: [ "Raw material inward", "Gate pass", "Requisition", "Indent", "Item stock statement", "Issue item", "Issue return", "Opening stock statement", ], }, { number: "06", title: "Production", description: "DevERP Flexo Production software module facilitates all your production related requirements with respect to the printing industry.", features: [ "Quotation", "Job order/Sales Order", "Job Cart Entry", "Graphics entry", "Graphics QC entry", "Plate Selection", "Plate Cutting Process", "Plate QC process", ], }, { number: "07", title: "Q.C", description: "DevERP Flexo Q.C software Module helps in detecting and removing defects from the system and provides a systematic approach to ensure smooth processes.", features: [ "Material QC", "Material QC Report", ], }, { number: "08", title: "Service", description: "DevERP Flexo Service software Module can effectively improve service configuration efficiency and modules' reusability.", features: [ "Subsidy", "Service requisition order", ], }, ], benefits: [ "Automates and Streamlines Business Processes with greater Adaptability", "Centralized data is secure and easy to backup", "Real-time analytics and reporting", "Updates can be made quickly and easily", "Information is accessible to a user anywhere in the world", "Available 24 hours a day, 7 days a week", "Unlimited user system", "Cloud Hosting with easy and familiar interface", "No special configuration need on user's PCs", "Lower costs", ], cta: { label: "READY TO GET STARTED?", title: "Take control of your printing operations.", buttonText: "Contact Us", }, }, },
 {
image: "CMSassets/images/it_service/LIGHT_WEIGHT.jpg",

title: "Light Weight Block (AAC) ERP",

description:
"Complete management solution for Brick, Block and AAC manufacturing businesses.",

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
"Powerful ERP solution for food manufacturing, processing and export operations.",

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
"Simplify administration, improve productivity and manage educational operations efficiently.",

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
"Comprehensive solution covering CRM, production, work management, reporting and accounting.",

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
"Business management software built for modern automotive and workshop operations.",

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
"Fleet-focused ERP solution designed for transportation and supply-chain operations.",

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
"Centralized platform for managing complete manufacturing processes and operations.",

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

title: "Pharmaceutical ERP",

description:
"Sophisticated ERP platform designed to streamline pharmaceutical production and management.",

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
"Complete customer relationship solution for routing, prioritizing and resolving support requests.",

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
"Smart management solution for bookstores and retail book businesses of every size.",

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
"Built specifically around the requirements of India's trading and distribution industry.",

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




{
  "dashboard": {
    "title": "DevERP Dashboard",

    "topBar": {
      "branch": {
        "label": "Company"
      },
      "notifications": {
        "title": "Notifications",
        "count": 0,
        "action": "Open Notification List"
      },
      "eTalk": {
        "title": "E-Talk",
        "count": 0,
        "action": "Go to TalkBox"
      },
      "liveUsers": {
        "title": "Live Users",
        "count": 9
      },
      "profile": {
        "user": "DEVAPP",
        "items": [
          "My Profile",
          "Change Password",
          "Logout",
          "Dev Online Support"
        ]
      }
    },

    "home": {
      "title": "Home",
      "url": "app/index.html?dashboard"
    },

    "modules": [
      {
        "id": "accounts",
        "title": "Accounts",
        "icon": "fa-inr",

        "subModules": [
          {
            "id": "accounts-report",
            "title": "Accounts Report",

            "items": [
              {
                "id": "balance-sheet",
                "title": "Balance Sheet",
                "url": "accounts/BS.aspx",
                "menuId": "79"
              },
              {
                "id": "cash-flow-report",
                "title": "Cash Flow Report",
                "url": "app/indexlist.html?CashFlow/&TDT=1",
                "menuId": "144"
              },
              {
                "id": "day-book",
                "title": "Day Book",
                "url": "app/indexlist.html?daybook",
                "menuId": "141"
              },
              {
                "id": "group-summary",
                "title": "Group Summary",
                "url": "app/indexlist.html?FasGroupSummary",
                "menuId": "137"
              },
              {
                "id": "hdfc-report",
                "title": "HDFC Report",
                "url": "app/indexlist.html?HDFCReport",
                "menuId": "149"
              },
              {
                "id": "icici-report",
                "title": "ICICI Report",
                "url": "app/indexlist.html?ICICIReport",
                "menuId": "150"
              },
              {
                "id": "ledger-report",
                "title": "Ledger Report",
                "url": "app/index.html?LedgerView",
                "menuId": "71"
              },
              {
                "id": "party-outstanding-report",
                "title": "Party Outstanding Report",
                "url": "app/indexlist.html?OutstandingReport/&paramlist=16",
                "menuId": "132"
              },
              {
                "id": "party-outstanding-report-yearly",
                "title": "Party Outstanding Report Yearly",
                "url": "app/indexlist.html?OutstandingReportYearly/&paramlist=16",
                "menuId": "145"
              },
              {
                "id": "profit-loss",
                "title": "Profit & Loss",
                "url": "accounts/pl.aspx",
                "menuId": "80"
              },
              {
                "id": "report-of-problems",
                "title": "Report of Problems",
                "url": "app/indexlist.html?FASEntryProblems",
                "menuId": "84"
              },
              {
                "id": "trial-balance",
                "title": "Trial Balance",
                "url": "accounts/tb.aspx",
                "menuId": "81"
              }
            ]
          },

          {
            "id": "accounts-trans",
            "title": "Accounts Trans",

            "items": [
              {
                "id": "bank-reco-entry",
                "title": "Bank Reco Entry",
                "url": "app/indexlist.html?BankRecoHdr",
                "menuId": "110"
              },
              {
                "id": "bank-statement-upload",
                "title": "Bank Statement Upload",
                "url": "App/IndexList.Html?UploadBankStatement",
                "menuId": "148"
              },
              {
                "id": "contra",
                "title": "Contra",
                "url": "app/indexlist.html?FasContra",
                "addUrl": "app/index.html?FasTransaction/0/&VoucherTypeID=8",
                "menuId": "70"
              },
              {
                "id": "credit-note",
                "title": "CreditNote",
                "url": "app/indexlist.html?FasCreditNote",
                "addUrl": "app/index.html?FasTransaction/0/&VoucherTypeID=3",
                "menuId": "68"
              },
              {
                "id": "debit-note",
                "title": "DebitNote",
                "url": "app/indexlist.html?FasDebitNote",
                "addUrl": "app/index.html?FasTransaction/0/&VoucherTypeID=4",
                "menuId": "69"
              },
              {
                "id": "fas-stock-list",
                "title": "FAS Stock List",
                "url": "app/indexlist.html?FAS_Stock",
                "menuId": "129"
              },
              {
                "id": "journal",
                "title": "Journal",
                "url": "app/indexlist.html?FasJournal",
                "addUrl": "app/index.html?FasTransaction/0/&VoucherTypeID=5",
                "menuId": "67"
              },
              {
                "id": "opening-bal",
                "title": "Opening Bal",
                "url": "app/indexlist.html?FasOpen",
                "addUrl": "app/index.html?FasOpen/0",
                "menuId": "82"
              },
              {
                "id": "payment",
                "title": "Payment",
                "url": "app/indexlist.html?FasPayment",
                "addUrl": "app/index.html?FasPayment",
                "menuId": "65"
              },
              {
                "id": "receipt",
                "title": "Receipt",
                "url": "app/indexlist.html?FasReceipt",
                "addUrl": "app/index.html?FasReceipt",
                "menuId": "66"
              },
              {
                "id": "tds-challan",
                "title": "TDS Challan",
                "url": "app/indexlist.html?tdschallanmst",
                "menuId": "140"
              }
            ]
          },

          {
            "id": "auditing-reports",
            "title": "Auditing Reports",

            "items": [
              {
                "id": "approval-pending",
                "title": "Approval Pending",
                "url": "app/indexlist.html?FASAuthPend",
                "menuId": "143"
              }
            ]
          },

          {
            "id": "gst-report",
            "title": "GST Report",

            "items": [
              {
                "id": "gstr-1",
                "title": "GSTR 1",
                "url": "App/IndexList.Html?GST_GSTR1",
                "menuId": "89"
              },
              {
                "id": "gstr-2a",
                "title": "GSTR 2A",
                "url": "App/IndexList.Html?GST_GSTR2",
                "menuId": "90"
              },
              {
                "id": "gstr-2b",
                "title": "GSTR 2B",
                "url": "app/indexlist.html?GSTR2B",
                "menuId": "117"
              },
              {
                "id": "gstr-3b",
                "title": "GSTR 3B",
                "url": "app/indexlist.html?GSTR3B",
                "menuId": "97"
              }
            ]
          }
        ]
      },

      {
        "id": "blood-bank",
        "title": "Blood Bank",
        "icon": "icon-book",

        "subModules": [
          {
            "id": "blood-bank",
            "title": "Blood Bank",

            "items": [
              {
                "id": "blood-bank-inward",
                "title": "Blood Bank Inward",
                "url": "app/indexlist.html?BloodBankInward",
                "menuId": "161"
              },
              {
                "id": "sales-invoice-blood-bank",
                "title": "Sales Invoice Blood Bank",
                "url": "app/indexlist.html?FASSalesBloodBank",
                "menuId": "160"
              }
            ]
          }
        ]
      },

      {
        "id": "config",
        "title": "Config",
        "icon": "icon-cog-2",

        "subModules": [
          {
            "id": "config",
            "title": "Config",

            "items": [
              {
                "id": "all-doctor-report",
                "title": "All Doctor Report",
                "url": "app/indexlist.html?DailyDoctorAll",
                "menuId": "125"
              },
              {
                "id": "app-menu-config",
                "title": "App Menu Config",
                "url": "app/indexlist.html?AppMenuConfig",
                "addUrl": "app/index.html?AppMenuConfig/0",
                "menuId": "157"
              },
              {
                "id": "app-page",
                "title": "App Page",
                "url": "../app/indexlist.html?APP_PAGE_MST",
                "menuId": "5"
              },
              {
                "id": "barcode-type",
                "title": "Barcode Type",
                "url": "app/indexlist.html?strbarcodetype",
                "menuId": "135"
              },
              {
                "id": "branch-master",
                "title": "BranchMaster",
                "url": "../app/indexlist.html?BranchMaster",
                "menuId": "8"
              },
              {
                "id": "city-master",
                "title": "City Master",
                "url": "app/indexlist.html?city_mst",
                "menuId": "29"
              },
              {
                "id": "company-master-invoice",
                "title": "Company Master (invoice)",
                "url": "app/indexlist.html?InvoiceByConfig",
                "menuId": "53"
              },
              {
                "id": "company-master",
                "title": "CompanyMst",
                "url": "../app/indexlist.html?CompanyMst",
                "menuId": "6"
              },
              {
                "id": "country-master",
                "title": "Country Master",
                "url": "app/indexlist.html?country_mst",
                "menuId": "31"
              },
              {
                "id": "crystal-report-list",
                "title": "Crystal Report List",
                "url": "app/indexlist.html?reportlist",
                "menuId": "36"
              },
              {
                "id": "daily-entry-list",
                "title": "Daily Entry List",
                "url": "app/indexlist.html?DailyEntryHdr",
                "menuId": "118"
              },
              {
                "id": "dashboard",
                "title": "DashBoard",
                "url": "../app/indexlist.html?DashBoardMst",
                "menuId": "10"
              },
              {
                "id": "db-sync-table-master",
                "title": "DBSync Table Master",
                "url": "app/indexList.html?DB_SYNC_SERVERS",
                "menuId": "131"
              },
              {
                "id": "dev-page-setting",
                "title": "DevPage Setting",
                "url": "app/indexlist.html?DevPSetting",
                "menuId": "59"
              },
              {
                "id": "doctor-wise-reports",
                "title": "DoctorWise Reports",
                "url": "app/indexlist.html?DailyReportDrWiseAccount",
                "menuId": "120"
              },
              {
                "id": "doctor-wise-reports-pharmacy",
                "title": "DoctorWise Reports Pharmacy",
                "url": "app/indexlist.html?DailyReportDrWise",
                "menuId": "119"
              },
              {
                "id": "form-master",
                "title": "Form Master",
                "url": "../App/IndexList.Html?FormMst",
                "menuId": "2"
              },
              {
                "id": "grid-report-list",
                "title": "Grid Report List",
                "url": "../App/IndexList.Html?ListReport",
                "menuId": "4"
              },
              {
                "id": "gst-masters",
                "title": "GST Masters",
                "url": "App/IndexList.Html?GST_GSTR1_MST",
                "menuId": "88"
              },
              {
                "id": "module-mst",
                "title": "Module Mst",
                "url": "../app/indexlist.html?ModuleMst",
                "menuId": "7"
              },
              {
                "id": "payment-terms-list",
                "title": "Payment Terms List",
                "url": "app/indexlist.html?PaymentTermMst",
                "menuId": "45"
              },
              {
                "id": "printer-mst",
                "title": "PRINTER MST",
                "url": "app/indexlist.html?PRINTERMST",
                "menuId": "136"
              },
              {
                "id": "property-master",
                "title": "Property Master",
                "url": "../app/indexlist.html?PropMst",
                "menuId": "9"
              },
              {
                "id": "report-list",
                "title": "Report List",
                "url": "App/Indexlist.Html?reportmaster",
                "menuId": "21"
              },
              {
                "id": "sms-email-setting",
                "title": "SMS EMAIL SETTING",
                "url": "app/index.html?smsemailsettings/1",
                "menuId": "138"
              },
              {
                "id": "state-master",
                "title": "State Master",
                "url": "app/indexlist.html?state_mst",
                "menuId": "30"
              },
              {
                "id": "voucher-master",
                "title": "Voucher Master",
                "url": "app/indexlist.html?vouchermst",
                "menuId": "55"
              },
              {
                "id": "walk-in-party",
                "title": "Walk in Party",
                "url": "app/indexlist.html?partymaster",
                "menuId": "39"
              }
            ]
          }
        ]
      },

      {
        "id": "masters",
        "title": "Masters",
        "icon": "icon-home-1",

        "subModules": [
          {
            "id": "accounts-master",
            "title": "Accounts Master",

            "items": [
              {
                "id": "acc-config-parameter",
                "title": "Acc Config Parameter",
                "url": "app/indexlist.html?FAS_CONFIGGROUP",
                "menuId": "96"
              },
              {
                "id": "asset-register",
                "title": "Asset Register",
                "url": "app/indexlist.html?assetmst",
                "menuId": "142"
              },
              {
                "id": "financial-year",
                "title": "Financial Year",
                "url": "app/indexlist.html?finyear",
                "menuId": "52"
              },
              {
                "id": "group-master",
                "title": "Group Master",
                "url": "app/indexlist.html?Fas_group",
                "menuId": "44"
              },
              {
                "id": "ledger-master",
                "title": "Ledger Master",
                "url": "App/IndexList.Html?FAS_LEDGER",
                "menuId": "43"
              },
              {
                "id": "ledger-merge",
                "title": "Ledger Merge",
                "url": "app/indexlist.html?FAS_LEDGER_MERGEList",
                "menuId": "83"
              },
              {
                "id": "tax-class-master",
                "title": "Tax Class Master",
                "url": "app/indexlist.html?TaxClassMst",
                "menuId": "51"
              },
              {
                "id": "tds-section-master",
                "title": "TDS Section Master",
                "url": "app/indexlist.html?fas_tdsmst",
                "addUrl": "app/index.html?fas_tdsmst",
                "menuId": "156"
              },
              {
                "id": "voucher-type-master",
                "title": "Voucher Type Master",
                "url": "app/indexlist.html?VoucherType",
                "menuId": "41"
              }
            ]
          },

          {
            "id": "hospital-master",
            "title": "Hospital Master",

            "items": [
              {
                "id": "bed-master",
                "title": "Bed Master",
                "url": "app/indexlist.html?bedmst",
                "menuId": "28"
              },
              {
                "id": "certificate-list",
                "title": "Certificate List",
                "url": "app/indexlist.html?cerificatemaster",
                "menuId": "74"
              },
              {
                "id": "department-master",
                "title": "Department Master",
                "url": "app/indexlist.html?departmentmaster",
                "menuId": "26"
              },
              {
                "id": "description-master",
                "title": "Description Master",
                "url": "app/indexlist.html?descriptionmst",
                "menuId": "72"
              },
              {
                "id": "diagnosis-master",
                "title": "Diagnosis Master",
                "url": "app/indexlist.html?diagnosticmaster",
                "menuId": "32"
              },
              {
                "id": "dialysis-master",
                "title": "Dialysis Master",
                "url": "app/indexlist.html?DialysisMaster",
                "menuId": "133"
              },
              {
                "id": "doctor-list",
                "title": "Doctor List",
                "url": "app/indexlist.html?doctormaster",
                "menuId": "14"
              },
              {
                "id": "doctor-wise-patient-master-list",
                "title": "Doctor Wise Patient Master List",
                "url": "app/indexlist.html?DOCPatientMaster",
                "menuId": "153"
              },
              {
                "id": "echo-master-list",
                "title": "Echo Master List",
                "url": "app/indexlist.html?echomaster",
                "menuId": "85"
              },
              {
                "id": "estimate-charge-list",
                "title": "Estimate Charge List",
                "url": "app/indexlist.html?EstimateChargeMst",
                "menuId": "146"
              },
              {
                "id": "history-master",
                "title": "History Master",
                "url": "app/indexlist.html?HistoryMst",
                "menuId": "78"
              },
              {
                "id": "insurance-master",
                "title": "Insurance Master",
                "url": "app/indexlist.html?insurancemst",
                "menuId": "58"
              },
              {
                "id": "issue-certificate-list",
                "title": "Issue Certificate List",
                "url": "app/indexlist.html?IssueCertificate",
                "menuId": "75"
              },
              {
                "id": "issue-echo-certificate",
                "title": "Issue Echo Certificate",
                "url": "app/indexlist.html?echocertificate",
                "menuId": "86"
              },
              {
                "id": "ot-list",
                "title": "OT List",
                "url": "app/indexlist.html?OTMaster",
                "menuId": "76"
              },
              {
                "id": "package-master",
                "title": "Package Master",
                "url": "app/indexlist.html?packagemst",
                "menuId": "56"
              },
              {
                "id": "patient-master",
                "title": "Patient Master",
                "url": "app/indexlist.html?PatientMaster",
                "menuId": "16"
              },
              {
                "id": "room-type",
                "title": "Room Type",
                "url": "app/indexlist.html?roomtype",
                "menuId": "27"
              },
              {
                "id": "service-master",
                "title": "Service Master",
                "url": "app/indexlist.html?ServicesMaster",
                "menuId": "20"
              },
              {
                "id": "service-type-master",
                "title": "Service Type Master",
                "url": "app/indexlist.html?servicestypemaster",
                "menuId": "25"
              },
              {
                "id": "symptoms-master",
                "title": "Symptoms Master",
                "url": "app/indexlist.html?symptomsmaster",
                "menuId": "24"
              },
              {
                "id": "tpa-list",
                "title": "TPA List",
                "url": "App/IndexList.Html?TPAMaster",
                "menuId": "91"
              },
              {
                "id": "treatment-card-mst",
                "title": "Treatement Card Mst",
                "url": "app/indexlist.html?cardtypemst",
                "menuId": "57"
              }
            ]
          },

          {
            "id": "stores-master",
            "title": "Stores Master",

            "items": [
              {
                "id": "diag-for-med",
                "title": "Diag. for Med.",
                "url": "app/indexlist.html?DIAGNOSTICMASTERMed",
                "menuId": "128"
              },
              {
                "id": "godown-master",
                "title": "Godown Master",
                "url": "app/indexlist.html?godownmaster",
                "menuId": "40"
              },
              {
                "id": "item-company-list",
                "title": "Item Company List",
                "url": "app/indexlist.html?itemcompany",
                "menuId": "50"
              },
              {
                "id": "item-list",
                "title": "Item List",
                "url": "app/indexlist.html?itemmaster",
                "menuId": "19"
              },
              {
                "id": "item-list-batch-wise",
                "title": "Item List Batch Wise",
                "url": "app/indexlist.html?ITEMMASTERBatchWise",
                "menuId": "123"
              },
              {
                "id": "item-report",
                "title": "Item Report",
                "url": "app/index.html?itemview",
                "menuId": "48"
              },
              {
                "id": "item-type-master",
                "title": "Item Type Master",
                "url": "app/indexlist.html?itemtypemaster",
                "menuId": "33"
              },
              {
                "id": "merge-item",
                "title": "Merge Item",
                "url": "app/index.html?ITEM_MERGE/0",
                "menuId": "126"
              },
              {
                "id": "unit-of-measurement",
                "title": "Unit of Measurement",
                "url": "app/indexlist.html?uommst",
                "menuId": "22"
              }
            ]
          }
        ]
      },

      {
        "id": "hospital",
        "title": "Hospital",
        "icon": "icon-home",

        "subModules": [
          {
            "id": "abha",
            "title": "ABHA",

            "items": [
              {
                "id": "abha-patient-master",
                "title": "ABHA Patient Master",
                "url": "PatientABHAProfile",
                "menuId": "158"
              },
              {
                "id": "abha-patient-web",
                "title": "ABHA Patient Web",
                "url": "app/indexlist.html?PatientABHAProfile",
                "menuId": "159"
              }
            ]
          },

          {
            "id": "hospital",
            "title": "Hospital",

            "items": [
              {
                "id": "admit-lab-list",
                "title": "Admit Lab List",
                "url": "app/indexlist.html?AdmitLabHdr",
                "menuId": "111"
              },
              {
                "id": "appointment-list",
                "title": "Appointment List",
                "url": "app/indexlist.html?appoinmentmaster",
                "menuId": "15"
              },
              {
                "id": "appointment-list-new",
                "title": "Appointment List New",
                "url": "app/indexlist.html?PreAppoinmentMst",
                "menuId": "151"
              },
              {
                "id": "discharge-patient-details",
                "title": "Discharge Patient Details",
                "url": "App/IndexList.Html?DischargePatient",
                "menuId": "94"
              },
              {
                "id": "discharge-summary",
                "title": "Discharge Summary",
                "url": "App/IndexList.Html?DischargeSummery",
                "menuId": "92"
              },
              {
                "id": "final-bill",
                "title": "Final Bill",
                "url": "app/indexlist.html?FinalBillHdr",
                "menuId": "105"
              },
              {
                "id": "ipd-charges-list",
                "title": "IPD Charges List",
                "url": "app/indexlist.html?admitchargehdr",
                "menuId": "23"
              },
              {
                "id": "ipd-list",
                "title": "IPD List",
                "url": "app/indexlist.html?Admitformmaster",
                "menuId": "18"
              },
              {
                "id": "monitoring-sheet-list",
                "title": "Monitoring Sheet List",
                "url": "app/indexlist.html?admitmsheeta",
                "menuId": "64"
              },
              {
                "id": "opd-dr",
                "title": "OPD DR",
                "url": "app/indexlist.html?opdmaster2",
                "menuId": "127"
              },
              {
                "id": "opd-list",
                "title": "OPD List",
                "url": "app/indexlist.html?opdmaster",
                "menuId": "17"
              },
              {
                "id": "ot-note",
                "title": "OT Note",
                "url": "app/indexlist.html?OTNoteHdr",
                "menuId": "116"
              },
              {
                "id": "pending-appointment-list",
                "title": "Pending Appointment List",
                "url": "app/indexlist.html?DoctorWiseAppoinment",
                "menuId": "54"
              },
              {
                "id": "pending-pkg",
                "title": "Pending PKG",
                "url": "app/indexlist.html?AdmitPatientAprAmt",
                "menuId": "121"
              },
              {
                "id": "procedure-surgery-process",
                "title": "Procedure / Surgery Process",
                "url": "app/indexlist.html?surgeryprocess",
                "menuId": "73"
              },
              {
                "id": "room-transfer-list",
                "title": "RoomTransfer List",
                "url": "app/indexlist.html?ROOMTRANSFER",
                "menuId": "93"
              }
            ]
          },

          {
            "id": "hospital-report",
            "title": "Hospital Report",

            "items": [
              {
                "id": "diagnosis-entry",
                "title": "Diagnosis entry",
                "url": "App/indexlist.html?DiagnosisEntry",
                "addUrl": "app/index.html?DiagnosisEntry/0",
                "menuId": "154"
              },
              {
                "id": "ipd-deposit-report",
                "title": "IPD Deposit Report",
                "url": "App/IndexList.Html?DepositeHdr",
                "menuId": "95"
              }
            ]
          }
        ]
      },

      {
        "id": "inventory",
        "title": "Inventory",
        "icon": "icon-home-2",

        "subModules": [
          {
            "id": "stores-report",
            "title": "Stores Report",

            "items": [
              {
                "id": "current-stock",
                "title": "Current Stock",
                "url": "app/indexlist.html?ItemStock",
                "menuId": "114"
              },
              {
                "id": "item-stock-datewise",
                "title": "Item Stock Datewise",
                "url": "app/indexlist.html?ItemStockDatewise",
                "menuId": "124"
              },
              {
                "id": "stock-statement",
                "title": "Stock Statement",
                "url": "app/indexlist.html?StockStatement",
                "menuId": "115"
              }
            ]
          },

          {
            "id": "stores-transaction",
            "title": "Stores Transaction",

            "items": [
              {
                "id": "gatepass-list",
                "title": "Gatepass List",
                "url": "app/indexlist.html?str_transaction_gatepass",
                "menuId": "46"
              },
              {
                "id": "goods-receive-note",
                "title": "Goods Receive Note",
                "url": "App/IndexList.Html?str_transaction_grn",
                "menuId": "38"
              },
              {
                "id": "issue-item-list",
                "title": "Issue Item List",
                "url": "app/indexlist.html?str_transaction_issue",
                "menuId": "42"
              }
            ]
          }
        ]
      },

      {
        "id": "laboratory",
        "title": "Laboratory",
        "icon": "fa-flask",

        "subModules": [
          {
            "id": "lab-master",
            "title": "Lab Master",

            "items": [
              {
                "id": "lab-bill-abstract",
                "title": "Lab Bill Abstract",
                "url": "app/indexlist.html?lababstractbill",
                "menuId": "134"
              },
              {
                "id": "lab-reports-list",
                "title": "Lab Reports List",
                "url": "app/indexlist.html?LabSubRepotFields",
                "menuId": "100"
              },
              {
                "id": "lab-value-list",
                "title": "Lab Value List",
                "url": "app/indexlist.html?LabValueMst",
                "menuId": "109"
              },
              {
                "id": "lab-variable-group-list",
                "title": "Lab Variable Group List",
                "url": "app/indexlist.html?LabVariableGroup",
                "menuId": "107"
              },
              {
                "id": "lab-variable-list",
                "title": "Lab Variable List",
                "url": "app/indexlist.html?LabVariableMst",
                "menuId": "108"
              }
            ]
          },

          {
            "id": "lab-test",
            "title": "Lab Test",

            "items": [
              {
                "id": "lab-bill",
                "title": "Lab Bill",
                "url": "app/indexlist.html?LabBillHdr",
                "menuId": "104"
              },
              {
                "id": "lab-issue-reports-list",
                "title": "Lab Issue Reports List",
                "url": "app/indexlist.html?IssueReport",
                "menuId": "101"
              },
              {
                "id": "lab-sample-collection",
                "title": "Lab Sample Collection",
                "url": "app/indexlist.html?LabSampleCollection",
                "menuId": "102"
              }
            ]
          }
        ]
      },

      {
        "id": "purchase",
        "title": "Purchase",
        "icon": "icon-book",

        "subModules": [
          {
            "id": "purchase-transaction",
            "title": "Purchase Transaction",

            "items": [
              {
                "id": "purchase-order",
                "title": "Purchase Order",
                "url": "app/indexlist.html?POHdr",
                "menuId": "47"
              },
              {
                "id": "purchase-invoice",
                "title": "Purchase Invoice",
                "url": "app/indexlist.html?FasPurchase",
                "menuId": "62"
              },
              {
                "id": "purchase-order-mv",
                "title": "Purchase Order MV",
                "url": "app/indexlist.html?pomvhdr",
                "addUrl": "app/index.html?pomvhdr",
                "menuId": "106"
              },
              {
                "id": "purchase-return-dn",
                "title": "Purchase Return DN",
                "url": "app/indexlist.html?FasPurchaseRtn",
                "menuId": "113"
              }
            ]
          }
        ]
      },

      {
        "id": "sales",
        "title": "Sales",
        "icon": "icon-book",

        "subModules": [
          {
            "id": "sales-report",
            "title": "Sales Report",

            "items": [
              {
                "id": "sales-profit",
                "title": "Sales Profit",
                "url": "app/indexlist.html?FasSalesItemProfit",
                "menuId": "139"
              }
            ]
          },

          {
            "id": "sales-transaction",
            "title": "Sales Transaction",

            "items": [
              {
                "id": "nbd-list",
                "title": "NBD List",
                "url": "app/indexlist.html?FasNBD",
                "addUrl": "app/index.html?FasNBD",
                "menuId": "112"
              },
              {
                "id": "sales-invoice-b2b",
                "title": "Sales Invoice B2B",
                "url": "app/indexlist.html?FASSalesB2B",
                "menuId": "155"
              },
              {
                "id": "sales-invoice-list",
                "title": "Sales Invoice List",
                "url": "app/indexlist.html?FasSales2",
                "menuId": "49"
              },
              {
                "id": "sales-invoice-print-list",
                "title": "Sales Invoice Print list",
                "url": "app/indexlist.html?Salesinvoiceprint",
                "menuId": "122"
              },
              {
                "id": "sales-return-list",
                "title": "Sales Return List",
                "url": "app/indexlist.html?FasSalesReturn",
                "menuId": "87"
              }
            ]
          }
        ]
      },

      {
        "id": "other",
        "title": "Other",
        "icon": "fa-ticket",

        "items": [
          {
            "id": "help-file",
            "title": "Help File",
            "url": "Main/listreport?rname=helpreport"
          },
          {
            "id": "menu-list",
            "title": "Menu List",
            "url": "usermgt/menu.aspx"
          },
          {
            "id": "calculator",
            "title": "Calculator",
            "url": "calc.aspx"
          }
        ]
      }
    ],

    "systemActions": {
      "searchMenu": true,
      "notifications": true,
      "eTalk": true,
      "liveUsers": true,
      "fullscreen": true,
      "logout": true,
      "tabSystem": true
    }
  }
}