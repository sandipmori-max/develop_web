import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./ServiceList.css";

export const services: any[] = [
  {
  "number": "01",
  "title": "MIS (BI & Reporting)",
  "tag": "Business Intelligence",
  "image": "CMSassets/images/it_service/mis&Bi.png",
  "description": "DevERP MIS is an integrated Business Intelligence and Reporting tool service software. Our software collects, integrates, stores, analyses, and provides access to business information so users can get intelligent answers in the form of meaningful reports.",
  "link": "index.aspx?q=mis(bi_reporting)",
  "servicesList": [
    {
      "title": "MIS (BI & Reporting)",
      "link": "index.aspx?q=mis(bi_reporting)"
    },
    {
      "title": "Data Export",
      "link": "index.aspx?q=data_export"
    },
    {
      "title": "Mobile App Development",
      "link": "index.aspx?q=mobile_app_development"
    },
    {
      "title": "Cloud Back Up Services",
      "link": "index.aspx?q=cloud_backUp"
    },
    {
      "title": "SMS Services",
      "link": "index.aspx?q=sms_services"
    },
    {
      "title": "Email Server",
      "link": "index.aspx?q=email_server"
    },
    {
      "title": "Domain Registration",
      "link": "index.aspx?q=domain_registration"
    },
    {
      "title": "Website Hosting",
      "link": "index.aspx?q=website_hosting"
    },
    {
      "title": "Web Development",
      "link": "index.aspx?q=web_development"
    }
  ],
  "keyFeatures": [
    "Easily create MIS Reports and share within your team",
    "It is a web-based integrated Business Intelligence and Reporting tool with custom dashboard",
    "Import, connect and standardize data into a single, powerful, cloud-based data warehouse",
    "Supports multiple data sources and file types",
    "It allows easy security for data and content across all devices",
    "Predictive and advanced data analytics",
    "This tool reports progress and performance of your projects",
    "It allows exporting data and reports to Excel, PowerPoint, and PDF"
  ],
  "advantages": [
    "Helps in managing data for assisting complex decision making",
    "Analysis of trends, prepare forecasts and goal setting",
    "Causal Analysis of any problems, current or future",
    "Track performance, increase efficiency and compare business performance",
    "Some BI reports are interactive so that users can play with different variables or access information even faster",
    "BI tools can analyze inefficiencies and help expand margins",
    "BI tools unify multiple data sources, which help with a business’s overall organization so that managers and employees spend less time tracking down information and can focus on producing accurate and timely reports."
  ],
  "whyUseDevERP": [
    "Smart MIS designed and constantly updated by top business consultants",
    "Highly customizable and user friendly",
    "Business intelligence helps in the day-to-day operations and how things look in the present, whereas business analytics helps business planning for the future, such as using predictive analytics to figure out why things are happening and how things will look in the future."
  ]
},
 {
  "number": "02",
  "title": "Data Export",
  "tag": "Data Management",
  "image": "CMSassets/images/it_service/data-export.jpg",
  "description": "DevERP Data Export Service helps you set up data replication to a destination database with export profiles in a very short amount of time. With our Data Export service, we help companies to get ledger masters and transaction reports from Tally, provide batch history from SCADA, and import or export data to BI tools from legacy software.",
  "link": "index.aspx?q=data_export",
  "servicesList": [
    {
      "title": "MIS (BI & Reporting)",
      "link": "index.aspx?q=mis(bi_reporting)"
    },
    {
      "title": "Data Export",
      "link": "index.aspx?q=data_export"
    },
    {
      "title": "Mobile App Development",
      "link": "index.aspx?q=mobile_app_development"
    },
    {
      "title": "Cloud Back Up Services",
      "link": "index.aspx?q=cloud_backUp"
    },
    {
      "title": "SMS Services",
      "link": "index.aspx?q=sms_services"
    },
    {
      "title": "Email Server",
      "link": "index.aspx?q=email_server"
    },
    {
      "title": "Domain Registration",
      "link": "index.aspx?q=domain_registration"
    },
    {
      "title": "Website Hosting",
      "link": "index.aspx?q=website_hosting"
    },
    {
      "title": "Web Development",
      "link": "index.aspx?q=web_development"
    }
  ],
  "keyFeatures": [
    "Full data synchronization",
    "Scalable, reliable, and secure cloud service",
    "Cross-platform database support",
    "Easy to install and set up, with data that is easily accessible",
    "Affordable database management system"
  ],
  "advantages": [
    "Serves as a single-point software solution for all the work",
    "Helpful for retrieving data from different types of machinery"
  ],
  "whyUseDevERP": [
    "Compatibility across different types of software, devices, plants, and systems to retrieve, collect, and process data for different kinds of analysis and results",
    "Live support and easy export to different formats such as PDF and Excel, along with print support, making it easy to reuse data for different kinds of analysis"
  ]
},
 {
  "number": "03",
  "title": "Mobile App Development",
  "tag": "Mobile Solutions",
  "image": "CMSassets/images/it_service/MobileAppDevelopment.png",
  "description": "DevERP Mobile Application Development Service covers end-to-end development of mobile apps considering user requirement analysis, UI/UX design, wireframing and designing, mobile application testing, deployment, and online market publication.",
  "link": "index.aspx?q=mobile_app_development",

  "servicesList": [
    {
      "title": "MIS (BI & Reporting)",
      "link": "index.aspx?q=mis(bi_reporting)"
    },
    {
      "title": "Data Export",
      "link": "index.aspx?q=data_export"
    },
    {
      "title": "Mobile App Development",
      "link": "index.aspx?q=mobile_app_development"
    },
    {
      "title": "Cloud Back Up Services",
      "link": "index.aspx?q=cloud_backUp"
    },
    {
      "title": "SMS Services",
      "link": "index.aspx?q=sms_services"
    },
    {
      "title": "Email Server",
      "link": "index.aspx?q=email_server"
    },
    {
      "title": "Domain Registration",
      "link": "index.aspx?q=domain_registration"
    },
    {
      "title": "Website Hosting",
      "link": "index.aspx?q=website_hosting"
    },
    {
      "title": "Web Development",
      "link": "index.aspx?q=web_development"
    }
  ],

  "android": {
    "title": "Android Mobile App Development",
    "description": "DevERP Android Mobile Application Development Service covers end-to-end development of mobile apps in a way that the web experience of ERP is brought to your fingertips. The process encompasses user requirement analysis, UI/UX design, wireframing and designing, mobile application testing, deployment, and online market publication. Our team helps create practical and seamless experiences on any device while making the best use of mobile technology for your business.",
    "technologies": [
      {
        "name": "Xamarin",
        "description": "Xamarin uses C# and .NET, which are at the core of our ERP and backed by Microsoft. It offers flexibility and is well suited for quick application development."
      },
      {
        "name": "Flutter",
        "description": "Flutter allows the same UI and business logic to be used across platforms, helping reduce development time."
      },
      {
        "name": "React Native",
        "description": "React Native enables cross-platform mobile application development with reusable components and a consistent user experience."
      }
    ],
    "keyFeatures": [
      "Seamless user experiences across all modern platforms and devices",
      "Custom Android app development",
      "Native and cross-platform solutions",
      "Second platform app development",
      "UI/UX design",
      "Consulting and prototyping",
      "Automated QA and testing",
      "Power management, notifications, and geofencing",
      "Rapid, transparent, time- and cost-efficient development"
    ],
    "advantages": [
      "Compatibility across different types of software and devices",
      "User-friendly and easy to use",
      "Similar UI and UX to the ERP system, making the application easy to use",
      "High security measures to avoid unnecessary and unauthorized access",
      "Lesser storage space requirements with higher availability of data for back-linking"
    ]
  },

  "ios": {
    "title": "iOS Mobile App Development",
    "description": "DevERP iOS Mobile Application Development Service covers end-to-end development of mobile apps in a way that the web experience of ERP is brought to your fingertips. The process encompasses user requirement analysis, UI/UX design, wireframing and designing, mobile application testing, deployment, and online market publication. Our team helps create practical and seamless experiences on iPhone and other supported Apple devices while following iOS and Apple quality guidelines.",
    "technologies": [
      {
        "name": "Xamarin",
        "description": "Xamarin uses C# and .NET, which are at the core of our ERP and backed by Microsoft. It offers flexibility and is well suited for quick application development."
      },
      {
        "name": "Flutter",
        "description": "Flutter uses the same UI and business logic across platforms, helping reduce development time while maintaining a consistent experience."
      },
      {
        "name": "React Native",
        "description": "React Native supports cross-platform application development with reusable components and a consistent user experience across iOS and Android."
      }
    ],
    "keyFeatures": [
      "Seamless user experiences across all modern platforms and devices",
      "Custom iOS and Android app development",
      "Native and cross-platform solutions",
      "Second platform app development",
      "UI/UX design",
      "Consulting and prototyping",
      "Automated QA and testing",
      "Power management, notifications, and geofencing",
      "Rapid, transparent, time- and cost-efficient development"
    ],
    "advantages": [
      "Compatibility across different types of software and devices",
      "User-friendly and easy to use",
      "Similar UI and UX to the ERP system, making the application easy to use",
      "High security measures to avoid unnecessary and unauthorized access",
      "Lesser storage space requirements with higher availability of data for back-linking"
    ]
  }
},
 {
  "number": "04",
  "title": "Cloud Backup Services",
  "tag": "Cloud Solutions",
  "image": "CMSassets/images/it_service/Cloud.png",
  "description": "DevERP Cloud Backup Services provides simple and cost-effective online backup services that make it easy to secure your files. DevERP Cloud Backup simplifies and automates the monitoring and optimization of daily backups to the cloud, helping businesses protect critical data across files, folders, endpoints, and databases. SQL database backups, Access databases, documents, and other important data can be easily restored to your computer using our cloud backup services.",
  "link": "index.aspx?q=cloud_backUp",

  "servicesList": [
    {
      "title": "MIS (BI & Reporting)",
      "link": "index.aspx?q=mis(bi_reporting)"
    },
    {
      "title": "Data Export",
      "link": "index.aspx?q=data_export"
    },
    {
      "title": "Mobile App Development",
      "link": "index.aspx?q=mobile_app_development"
    },
    {
      "title": "Cloud Back Up Services",
      "link": "index.aspx?q=cloud_backUp"
    },
    {
      "title": "SMS Services",
      "link": "index.aspx?q=sms_services"
    },
    {
      "title": "Email Server",
      "link": "index.aspx?q=email_server"
    },
    {
      "title": "Domain Registration",
      "link": "index.aspx?q=domain_registration"
    },
    {
      "title": "Website Hosting",
      "link": "index.aspx?q=website_hosting"
    },
    {
      "title": "Web Development",
      "link": "index.aspx?q=web_development"
    }
  ],

  "keyFeatures": [
    "Back up data from an unlimited number of devices",
    "Works with mapped drives and external drives",
    "Additional computer support can be added as needed",
    "Customizable backup schedules",
    "Duplicate files do not take up additional storage space",
    "Supports access and backup from mobile devices",
    "No file size limits"
  ],

  "whyUseDevERP": [
    "High storage capacity and reliable data backup to help avoid data loss",
    "Access your backed-up data from anywhere",
    "Live data updates",
    "Easy delivery of OTA software upgrades",
    "Remote service facility for quick remote support solutions",
    "Advanced server capabilities for faster and more efficient services"
  ]
},
 {
  "number": "05",
  "title": "SMS Services",
  "tag": "Communication",
  "image": "CMSassets/images/it_service/sms.jpg",
  "description": "DevERP SMS Services helps you increase sales and customer satisfaction with smarter SMS campaigns, instant OTPs, notifications, two-way interactions, and other bulk SMS services. We provide secure and reliable messaging solutions with personalized communication, powerful automation workflows, and the ability to reach thousands of customers within seconds.",
  "link": "index.aspx?q=sms_services",

  "servicesList": [
    {
      "title": "MIS (BI & Reporting)",
      "link": "index.aspx?q=mis(bi_reporting)"
    },
    {
      "title": "Data Export",
      "link": "index.aspx?q=data_export"
    },
    {
      "title": "Mobile App Development",
      "link": "index.aspx?q=mobile_app_development"
    },
    {
      "title": "Cloud Back Up Services",
      "link": "index.aspx?q=cloud_backUp"
    },
    {
      "title": "SMS Services",
      "link": "index.aspx?q=sms_services"
    },
    {
      "title": "Email Server",
      "link": "index.aspx?q=email_server"
    },
    {
      "title": "Domain Registration",
      "link": "index.aspx?q=domain_registration"
    },
    {
      "title": "Website Hosting",
      "link": "index.aspx?q=website_hosting"
    },
    {
      "title": "Web Development",
      "link": "index.aspx?q=web_development"
    }
  ],

  "keyFeatures": [
    "Contact management",
    "Delivery reports",
    "Analytics and reporting",
    "Flexible settings for time, size, date, and format",
    "Secure online text messaging",
    "Scheduled SMS sending",
    "Global coverage and high-speed delivery",
    "Unlimited mailing lists"
  ],

  "whyUseDevERP": [
    "Timely and assured SMS delivery",
    "Auto-triggered SMS based on planned actions and events",
    "Pre-planned message content for consistent customer communication",
    "SMS templates and content designed to support applicable TRAI requirements",
    "Quick and reliable communication with customers",
    "One-stop communication solution integrated with software and business workflows"
  ]
},
{
  "number": "06",
  "title": "Email Server",
  "tag": "Email Solutions",
  "image": "CMSassets/images/it_service/email.png",
  "description": "DevERP Email Server Service is a powerful open-source mail server solution used for routing and delivering emails. It provides useful features such as junk mail control, database support, convenient log management, and a secure management system focused on security and privacy.",
  "link": "index.aspx?q=email_server",

  "servicesList": [
    {
      "title": "MIS (BI & Reporting)",
      "link": "index.aspx?q=mis(bi_reporting)"
    },
    {
      "title": "Data Export",
      "link": "index.aspx?q=data_export"
    },
    {
      "title": "Mobile App Development",
      "link": "index.aspx?q=mobile_app_development"
    },
    {
      "title": "Cloud Back Up Services",
      "link": "index.aspx?q=cloud_backUp"
    },
    {
      "title": "SMS Services",
      "link": "index.aspx?q=sms_services"
    },
    {
      "title": "Email Server",
      "link": "index.aspx?q=email_server"
    },
    {
      "title": "Domain Registration",
      "link": "index.aspx?q=domain_registration"
    },
    {
      "title": "Website Hosting",
      "link": "index.aspx?q=website_hosting"
    },
    {
      "title": "Web Development",
      "link": "index.aspx?q=web_development"
    }
  ],

  "keyFeatures": [
    "Calendaring and collaboration",
    "Push email and mobile synchronization",
    "High availability and clustering",
    "Extensive security toolset",
    "Local and remote access",
    "Restore sensitive information in case of server failure",
    "Host emails for multiple domains and users",
    "Management console with real-time information about email delivery attempts, queues, error logs, and other server activities"
  ],

  "whyUseDevERP": [
    "Timely and reliable email delivery with inbox-focused delivery support",
    "Auto-triggered emails based on planned actions and business events",
    "Pre-planned email content and recipient addresses",
    "Secure and centralized email management",
    "Reliable email infrastructure for business communication",
    "One-stop email solution that can integrate with business software and workflows"
  ]
},
 {
  "number": "07",
  "title": "Domain Registration",
  "tag": "Web Services",
  "image": "CMSassets/images/it_service/Domain.jpg",
  "description": "DevERP Domain Registration Service offers a streamlined and simple domain registrar experience with 24/7 expert support, easy access to add-on services, and competitive pricing.",
  "link": "index.aspx?q=domain_registration",
  "servicesList": [
    {
      "title": "MIS (BI & Reporting)",
      "link": "index.aspx?q=mis(bi_reporting)"
    },
    {
      "title": "Data Export",
      "link": "index.aspx?q=data_export"
    },
    {
      "title": "Mobile App Development",
      "link": "index.aspx?q=mobile_app_development"
    },
    {
      "title": "Cloud Back Up Services",
      "link": "index.aspx?q=cloud_backUp"
    },
    {
      "title": "SMS Services",
      "link": "index.aspx?q=sms_services"
    },
    {
      "title": "Email Server",
      "link": "index.aspx?q=email_server"
    },
    {
      "title": "Domain Registration",
      "link": "index.aspx?q=domain_registration"
    },
    {
      "title": "Website Hosting",
      "link": "index.aspx?q=website_hosting"
    },
    {
      "title": "Web Development",
      "link": "index.aspx?q=web_development"
    }
  ],

  "websiteHostingInfo": {
    "title": "Website Hosting",
    "description": "DevERP Website Hosting Service provides a high-quality, reliable hosting service to run websites. We use multiple caching layers, auto-scaled memory, and isolated servers to improve website speed and performance. Our powerful and easy-to-use dashboard allows users to view multiple websites, monitor analytics reports, manage users, and track resource usage effectively."
  },

  "keyFeatures": [
    "Focus on storage, bandwidth, security, uptime, ease of use, and overall service value",
    "Easy-to-use interface",
    "Reliable cloud hosting services",
    "Customized hosting solutions based on user requirements",
    "High-quality and reliable hosting service"
  ],

  "whyUseDevERP": [
    "DevERP Website Hosting helps provide a reliable website experience with a focus on performance, security, availability, and uptime",
    "Reliable hosting infrastructure helps minimize website downtime",
    "Timely hosting renewal helps maintain continuous website availability",
    "Centralized hosting support and services",
    "One-stop solution for software, hosting, and related business technology needs"
  ]
},
 {
  "number": "08",
  "title": "Website Hosting",
  "tag": "Infrastructure",
  "image": "CMSassets/images/it_service/web-hosting.png",
  "description": "DevERP Website Hosting Service provides a high-quality, reliable hosting service to run websites. Multiple caching layers, auto-scaled memory, and isolated servers help improve website speed, performance, and reliability. Our powerful and easy-to-use dashboard allows users to view multiple websites, access analytics reports, manage users, and monitor resource usage effectively.",
  "link": "index.aspx?q=website_hosting",

  "servicesList": [
    {
      "title": "MIS (BI & Reporting)",
      "link": "index.aspx?q=mis(bi_reporting)"
    },
    {
      "title": "Data Export",
      "link": "index.aspx?q=data_export"
    },
    {
      "title": "Mobile App Development",
      "link": "index.aspx?q=mobile_app_development"
    },
    {
      "title": "Cloud Back Up Services",
      "link": "index.aspx?q=cloud_backUp"
    },
    {
      "title": "SMS Services",
      "link": "index.aspx?q=sms_services"
    },
    {
      "title": "Email Server",
      "link": "index.aspx?q=email_server"
    },
    {
      "title": "Domain Registration",
      "link": "index.aspx?q=domain_registration"
    },
    {
      "title": "Website Hosting",
      "link": "index.aspx?q=website_hosting"
    },
    {
      "title": "Web Development",
      "link": "index.aspx?q=web_development"
    }
  ],

  "keyFeatures": [
    "Focus on storage, bandwidth, security, uptime, ease of use, and overall service value",
    "Easy-to-use interface",
    "Reliable cloud hosting services",
    "Customized hosting solutions based on user requirements",
    "High-quality and reliable hosting service",
    "Multiple caching layers for improved website performance",
    "Auto-scaled memory for better resource management",
    "Isolated servers for improved performance and reliability",
    "Dashboard to manage multiple websites",
    "Analytics reports and resource usage monitoring",
    "User management capabilities"
  ],

  "whyUseDevERP": [
    "Reliable hosting infrastructure designed to support website performance, security, and availability",
    "Multiple performance optimization layers to help improve website speed",
    "Reliable uptime and hosting infrastructure to minimize website downtime",
    "Easy-to-use dashboard for managing websites, users, analytics, and resources",
    "Flexible hosting solutions based on individual business requirements",
    "Timely hosting renewal and service management",
    "One-stop solution for hosting and related software requirements"
  ]
},
 {
  "number": "09",
  "title": "Web Development",
  "tag": "Digital Development",
  "image": "CMSassets/images/it_service/web-design.jpg",
  "description": "DevERP Website Development Service makes it possible to maintain an up-to-date website without spending a fortune. Our website development service includes defining the site, developing the site structure, visual design and testing, production and quality assurance, usability testing, and competitor analysis. Our website redesigning service focuses on effective navigation, visual appeal, updated information, multi-platform compatibility, professional presence, and interactive user experiences. We have proven experience designing various websites for clients from different countries.",
  "link": "index.aspx?q=web_development",

  "servicesList": [
    {
      "title": "MIS (BI & Reporting)",
      "link": "index.aspx?q=mis(bi_reporting)"
    },
    {
      "title": "Data Export",
      "link": "index.aspx?q=data_export"
    },
    {
      "title": "Mobile App Development",
      "link": "index.aspx?q=mobile_app_development"
    },
    {
      "title": "Cloud Back Up Services",
      "link": "index.aspx?q=cloud_backUp"
    },
    {
      "title": "SMS Services",
      "link": "index.aspx?q=sms_services"
    },
    {
      "title": "Email Server",
      "link": "index.aspx?q=email_server"
    },
    {
      "title": "Domain Registration",
      "link": "index.aspx?q=domain_registration"
    },
    {
      "title": "Website Hosting",
      "link": "index.aspx?q=website_hosting"
    },
    {
      "title": "Web Development",
      "link": "index.aspx?q=web_development"
    }
  ],

  "keyFeatures": [
    "UI/UX Design",
    "Visual Design",
    "Brand Identity Design",
    "Wireframing",
    "Website Redesign",
    "Prototyping",
    "Design Consultation"
  ],

  "whyUseDevERP": [
    "SEO-friendly web development practices to help improve website visibility in search results",
    "Modern and responsive website development for multiple devices and platforms",
    "Effective navigation and user-friendly website structure",
    "Professional visual design aligned with business branding",
    "Usability testing and quality assurance before deployment",
    "Website redesign services focused on improving usability and visual appeal",
    "Updated and interactive website experiences",
    "Proven experience designing websites for clients from different countries"
  ]
}
];

const ServiceList: React.FC = () => {
  const navigate = useNavigate();

 const handleServiceClick = (
  service: any,
  e?: React.MouseEvent
) => {
  e?.preventDefault();

  navigate("/services", {
    state: {
      service,
      services,
    },
  });

  requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

  return (
    <>

   


      {/* ================= INTRO ================= */}
      <section className="services-intro">
        <div className="service-page-container">

          <div className="services-intro-grid">

            <div className="services-intro-title service-scroll-left">

              <span className="service-section-label">
                OUR SERVICES
              </span>

              <h2>
                Technology that
                <br />
                <span>moves business forward.</span>
              </h2>

            </div>

            <div className="services-intro-text service-scroll-right">

              <p>
                From business intelligence and mobile applications
                to cloud, web and communication solutions, DevERP
                provides technology services built around your
                business requirements.
              </p>

              <p>
                Explore our services and discover practical,
                scalable solutions designed to help your business
                work smarter.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= SERVICE LIST ================= */}
      <section className="services-list-section">
        <div className="service-page-container">

          <div className="services-list-header service-scroll-left">

            <div>
              <span className="service-section-label">
                EXPLORE OUR EXPERTISE
              </span>

              <h2>
                Solutions built for your business
              </h2>
            </div>

            
          </div>

          <div className="services-grid">

            {services.map((service, index) => (
              <article
                className={`
                  modern-service-card
                  service-card-reveal
                  service-card-delay-${Math.min(index + 1, 5)}
                `}
                key={service.number}
              >

                {/* Image */}
                <div className="modern-service-image">

                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <div className="modern-service-image-overlay" />

                 

                  <span className="service-tag">
                    {service.tag}
                  </span>

                </div>


                {/* Content */}
                <div className="modern-service-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <button
                    type="button"
                    className="service-view-button"
                    onClick={() =>
                      handleServiceClick(service)
                    }
                  >
                    <span>
                      View Service
                    </span>

                    <span className="service-arrow">
                      ↗
                    </span>
                  </button>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="services-cta">
        <div className="service-page-container">

          <div className="services-cta-box">

            <div className="services-cta-content service-cta-left">

              <span className="service-section-label">
                NEED A CUSTOM SOLUTION?
              </span>

              <h2>
                Let's build the right
                <br />
                solution for your business.
              </h2>

              <p>
                Tell us what you are looking to achieve.
                Our team can help you choose the right
                technology and approach.
              </p>

            </div>

            <button
              type="button"
              className="services-cta-button service-cta-right"
              onClick={() => navigate("/contact")}
            >
              <span>
                Talk to our team
              </span>

              <span>
                ↗
              </span>
            </button>

          </div>

        </div>
      </section>

    </>
  );
};

export default ServiceList;