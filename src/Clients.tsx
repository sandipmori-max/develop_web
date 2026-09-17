import React, { useMemo, useState } from "react";
import "./Clients.css";
import { useNavigate } from "react-router-dom";

interface EcosystemRowProps {
  title: React.ReactNode;
  clients: any[];
  side: "left" | "right";
  rowIndex: number;
}

const EcosystemRow: React.FC<EcosystemRowProps> = ({
  title,
  clients,
  side,
  rowIndex,
}) => {
  const visible = clients.slice(0, 5);
  const remaining = Math.max(clients.length - 5, 0);

  return (
    <div
      className={`eco-row eco-row-${side}`}
      style={
        {
          "--row": rowIndex,
        } as React.CSSProperties
      }
    >
      {side === "left" ? (
        <>
          <div className="eco-category">{title}</div>

          <div className="eco-logos">
            {visible.map((client, index) => (
              <div
                className="eco-logo-card"
                key={`${client.name}-${index}`}
                title={client.name}
              >
                <img src={client.image} alt={client.name} />
              </div>
            ))}

            {remaining > 0 && (
              <div className="eco-more-card">+{remaining}</div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="eco-logos">
            {visible.map((client, index) => (
              <div
                className="eco-logo-card"
                key={`${client.name}-${index}`}
                title={client.name}
              >
                <img src={client.image} alt={client.name} />
              </div>
            ))}

            {remaining > 0 && (
              <div className="eco-more-card">+{remaining}</div>
            )}
          </div>

          <div className="eco-category">{title}</div>
        </>
      )}
    </div>
  );
};

const clients: any[] = [
  {
    image: "./CMSassets/images/Client_Logo/logo (6).png",
    name: "Hindustan RMC",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/HK logo.jpg",
    name: "Hare Krushna RMC",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/trine.jpg",
    name: "Trine RMC",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/sarnar.jpg",
    name: "Sarnar RMC",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/shivalik.jpg",
    name: "Shivalik Hetu",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/robust.jpg",
    name: "Robust RMC",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/Logo.jpg",
    name: "Taksha",
    category: "RealEstate",
  },
  {
    image: "./CMSassets/images/Client_Logo/sapphire.jpg",
    name: "Sapphire",
    category: "LightWeightBlock",
  },
  {
    image: "./CMSassets/images/Client_Logo/Om Shiv logo.jpg",
    name: "Shiv Logo",
    category: "RealEstate",
  },
  {
    image: "./CMSassets/images/Client_Logo/Conplus Logo.jpg",
    name: "Conplus",
    category: "RealEstate",
  },
  {
    image: "./CMSassets/images/Client_Logo/vindia.jpg",
    name: "V India RMC",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/heritage_logo.jpg",
    name: "Heritage Projects",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/AIPL Logo.jpg",
    name: "AIPL",
    category: "RealEstate",
  },
  {
    image: "./CMSassets/images/Client_Logo/umixo.jpg",
    name: "Umixo RMC",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/iconrmc.jpg",
    name: "Icon RMC",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/Swaraj.jpg",
    name: "Swaraj",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/Raj.jpg",
    name: "Raj",
    category: "RealEstate",
  },
  {
    image: "./CMSassets/images/Client_Logo/Rajdeep.jpg",
    name: "Rajdeep",
    category: "RealEstate",
  },
  {
    image: "./CMSassets/images/Client_Logo/KINJAL logo2.jpg",
    name: "KINJAL",
    category: "RealEstate",
  },
  {
    image: "./CMSassets/images/Client_Logo/Yogeshwar rmc.jpg",
    name: "Yogeshwar",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/tnarmc.jpg",
    name: "TNA RMC",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/ail.jpg",
    name: "Amit Infra Logic India",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/tp.jpg",
    name: "Techno Precast",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/concretech.jpg",
    name: "Concretech",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/Ameya.jpg",
    name: "Ameya",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/jallan.jpg",
    name: "Jallan",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/procon.jpeg",
    name: "Procon RMC",
    category: "RMC",
  },
  {
    image: "/CMSassets/images/Client_Logo/Duracon Logo.jpg",
    name: "Duracon",
    category: "RMC",
  },
  {
    image: "/CMSassets/images/Client_Logo/Danev.jpg",
    name: "Danev",
    category: "RMC",
  },
  {
    image: "/CMSassets/images/Client_Logo/Shashvat.jpg",
    name: "Shashvat",
    category: "RMC",
  },
  {
    image: "/CMSassets/images/Client_Logo/acplus.jpg",
    name: "AC Plus",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/Akta.jpg.jpg",
    name: "Akta Associates",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/kesarinfra.jpg",
    name: "Kesar Infra RMC",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/gopalrmc.jpg",
    name: "Gopal RMC",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/jsk.jpg",
    name: "JSK",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/phenix.jpg",
    name: "Phenix",
    category: "LightWeightBlock",
  },
  {
    image: "./CMSassets/images/Client_Logo/KHUSHBU logo.jpg",
    name: "Khushbu Infracon",
    category: "RealEstate",
  },
  {
    image: "./CMSassets/images/Client_Logo/parswa.jpg",
    name: "Parswa",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/vastuchakra.jpg",
    name: "Vastu Chakra",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/Mangla.jpg",
    name: "Mangla RMC",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/logo (2).png",
    name: "Uday Group",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/Indian RMC .jpg",
    name: "Indian RMC",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/jaydeepconstruction.jpg",
    name: "Jaydeep Construction",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/giriraj.jpeg",
    name: "Giriraj",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/numix.jpg",
    name: "Numix",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/karnavati.png",
    name: "Karnavati",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/chavda.jpg",
    name: "CIPL",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/amrutconcrete.jpg",
    name: "Amrut Concrete",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/mp.jpg",
    name: "MP Associate",
    category: "Engraving",
  },
  {
    image: "./CMSassets/images/Client_Logo/dev concrete.jpg",
    name: "Dev Concrete",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/accurate rmc.png",
    name: "Accurate",
    category: "RMC",
  },
  {
    image: "./CMSassets/images/Client_Logo/Clavecon-Logo.jpg",
    name: "Clavecon",
    category: "LightWeightBlock",
  },
  {
    image: "./CMSassets/images/Client_Logo/Yash.jpg",
    name: "Yash",
    category: "LightWeightBlock",
  },
  {
    image: "./CMSassets/images/Client_Logo/Brixo logo.jpg",
    name: "Brixo",
    category: "LightWeightBlock",
  },
  {
    image: "./CMSassets/images/Client_Logo/newlogo.jpg",
    name: "Saraswati Buildcon",
    category: "RealEstate",
  },
  {
    image: "./CMSassets/images/Client_Logo/logo (3).jpg",
    name: "Better Infracon",
    category: "RealEstate",
  },
  {
    image: "./CMSassets/images/Client_Logo/pinmark.jpg",
    name: "Pinmark",
    category: "Flexo",
  },
  {
    image: "./CMSassets/images/Client_Logo/agropac.jpg",
    name: "Agropac",
    category: "Engraving",
  },
  {
    image: "./CMSassets/images/Client_Logo/RE INDIA LOGO.jpg",
    name: "RE India",
    category: "Machine",
  },
  {
    image: "./CMSassets/images/Client_Logo/shilp-Gravures.jpg",
    name: "Shilp Gravures",
    category: "Machine",
  },
  {
    image: "./CMSassets/images/Client_Logo/Sarpo.jpg",
    name: "Sarpo",
    category: "Engraving",
  },
  {
    image: "./CMSassets/images/Client_Logo/logo (1).png",
    name: "VFC Roll Maker",
    category: "Engraving",
  },
  {
    image: "./CMSassets/images/Client_Logo/logo (14).png",
    name: "Akshar Gravure",
    category: "Engraving",
  },
  {
    image: "./CMSassets/images/Client_Logo/Kreative.png",
    name: "Kreativ Gravure",
    category: "Engraving",
  },
  {
    image: "./CMSassets/images/Client_Logo/Pixel.jpg",
    name: "Pixel",
    category: "Engraving",
  },
  {
    image: "./CMSassets/images/Client_Logo/IMAGE.jpg",
    name: "Gravure Precision",
    category: "Engraving",
  },
  {
    image: "./CMSassets/images/Client_Logo/technomec (2).png",
    name: "Technomec",
    category: "Engraving",
  },
  {
    image: "./CMSassets/images/Client_Logo/logo (1).jpg",
    name: "Sun Electro",
    category: "Engraving",
  },
  {
    image: "./CMSassets/images/Client_Logo/Gayatrilogo.jpg",
    name: "Gayatri Rubber Roll",
    category: "Machine",
  },
  {
    image: "./CMSassets/images/Client_Logo/aim.jpg",
    name: "AIM",
    category: "Machine",
  },
  {
    image: "./CMSassets/images/Client_Logo/aechme-rolltech.jpg",
    name: "Aechme Rolltech",
    category: "Machine",
  },
  {
    image: "./CMSassets/images/Client_Logo/ornate-logo.png",
    name: "Ornate",
    category: "Engraving",
  },
  {
    image: "./CMSassets/images/Client_Logo/Somnath Logo.jpg",
    name: "Somnath Rice Mill",
    category: "PRM",
  },
  {
    image: "./CMSassets/images/Client_Logo/Rathi Rice Logo.jpg",
    name: "Rathi Rice",
    category: "PRM",
  },
  {
    image: "./CMSassets/images/Client_Logo/sts.jpg",
    name: "STS Transport",
    category: "Transportation",
  },
  {
    image: "./CMSassets/images/Client_Logo/techroute.png",
    name: "Tech Route",
    category: "Transportation",
  },
  {
    image: "./CMSassets/images/Client_Logo/hiramani_logo.png",
    name: "Hiramani School",
    category: "School",
  },
  {
    image: "./CMSassets/images/Client_Logo/kosol.png",
    name: "Kosol",
    category: "Machine",
  },
  {
    image: "./CMSassets/images/Client_Logo/shivengineeing.png",
    name: "Shiv Engineering",
    category: "Machine",
  },
  {
    image: "./CMSassets/images/Client_Logo/zydus-logo.png",
    name: "Zydus",
    category: "Pharama",
  },
  {
    image: "./CMSassets/images/Client_Logo/anada.jpg",
    name: "Anada",
    category: "Bookdepot",
  },
  {
    image: "./CMSassets/images/Client_Logo/Khoraj .jpg",
    name: "Khoraj",
    category: "Petrolpump",
  },
  {
    image: "./CMSassets/images/Client_Logo/Zenith logo.jpg",
    name: "Zenith",
    category: "Survey",
  },
  {
    image: "./CMSassets/images/Client_Logo/tvm.jpg",
    name: "Veggie Mart",
    category: "Food",
  },
];

const filters = [
  { key: "all", label: "All Clients" },
  { key: "RMC", label: "RMC" },
  { key: "RealEstate", label: "Real Estate" },
  { key: "Engraving", label: "Engraving" },
  { key: "Flexo", label: "Flexo" },
  { key: "LightWeightBlock", label: "Light Weight Block" },
  { key: "PRM", label: "Pulse / Rice Mill" },
  { key: "Transportation", label: "Transportation" },
  { key: "School", label: "School Management" },
  { key: "Machine", label: "Machine Manufacturing" },
  { key: "Pharama", label: "Pharmaceutical" },
  { key: "Bookdepot", label: "Book Depot" },
  { key: "Trading", label: "Trading" },
  { key: "Petrolpump", label: "Petrolpump" },
  { key: "Survey", label: "Survey" },
  { key: "Food", label: "Food & Beverage" },
];

const Clients: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedClient, setSelectedClient] = useState<any | null>(null);
  const navigate = useNavigate();

  const filteredClients = useMemo(() => {
    if (activeFilter === "all") {
      return clients;
    }

    return clients.filter((client) => client.category === activeFilter);
  }, [activeFilter]);

  return (
  <main className="clients-page">

  {/* =========================================
      HERO
  ========================================= */}
  <section className="clients-hero">

    <div className="clients-hero-bg">
      <img
        src="https://deverp.com/CMSassets/images/it_service/800.jpg"
        alt="DevERP Clients"
      />
    </div>

    <div className="clients-hero-overlay" />

    <div className="clients-hero-grid" />

    <div className="clients-hero-glow clients-glow-one" />
    <div className="clients-hero-glow clients-glow-two" />

    <div className="clients-container clients-hero-inner">

      {/* LEFT */}
      <div className="clients-hero-content clients-hero-slide-left">

        <div className="clients-eyebrow">
          <span className="clients-eyebrow-line" />
          <span>OUR CLIENTS</span>
        </div>

        <h1>
          CLIENT
          <span>PARTNERS</span>
        </h1>

        <p>
          Trusted by businesses that choose technology,
          innovation and intelligent solutions to grow.
        </p>

        <div className="clients-hero-bottom">

          <div className="clients-breadcrumb">
            <a href="/">
              Home
            </a>

            <span>→</span>

            <strong>Clients</strong>
          </div>

          <div className="clients-hero-explore">
            <span />
            EXPLORE OUR CLIENTS
          </div>

        </div>

      </div>

      {/* RIGHT VISUAL */}
      <div className="clients-hero-visual clients-hero-slide-right">

        <div className="clients-orbit clients-orbit-one" />
        <div className="clients-orbit clients-orbit-two" />
        <div className="clients-orbit clients-orbit-three" />

        <div className="clients-hero-core">
          <span>DEV.ERP</span>
          <strong>+</strong>
          <small>CLIENTS</small>
        </div>

        <div className="clients-floating-card clients-floating-one">
          <span>01</span>

          <div>
            <strong>TRUST</strong>
            <small>BUILT TOGETHER</small>
          </div>
        </div>

        <div className="clients-floating-card clients-floating-two">
          <span>∞</span>

          <div>
            <strong>GROWTH</strong>
            <small>LONG-TERM PARTNERS</small>
          </div>
        </div>

      </div>

    </div>

  </section>


  {/* =========================================
      INTRO
  ========================================= */}
  <section className="clients-intro">

    <div className="clients-container">

      <div className="clients-intro-grid">

        <div className="clients-intro-heading clients-scroll-left">

          <span className="clients-section-label">
            TRUSTED PARTNERS
          </span>

          <h2>
            Client <span>List</span>
          </h2>

        </div>


        <div className="clients-intro-text clients-scroll-right">

          <p>
            We are proud to work with businesses across multiple
            industries. Our ERP solutions help organizations simplify
            operations, improve visibility and build smarter workflows.
          </p>

          <div className="clients-stats">

            <div className="clients-stat-reveal clients-stat-delay-1">
              <strong>{clients.length}+</strong>
              <span>Businesses</span>
            </div>

            <div className="clients-stat-reveal clients-stat-delay-2">
              <strong>15+</strong>
              <span>Industries</span>
            </div>

            <div className="clients-stat-reveal clients-stat-delay-3">
              <strong>360°</strong>
              <span>ERP Solutions</span>
            </div>

          </div>

        </div>

      </div>

    </div>

  </section>


  {/* =========================================
      CLIENTS
  ========================================= */}
<section className="clients-ecosystem">
  <div className="eco-grid-bg" />

  <div className="clients-container">

    <div className="eco-heading">
      <h2>
        Built-in ecosystem on which
        <br />
        your business is <span>built-on</span>
      </h2>
    </div>

    <div className="eco-layout">

      {/* SVG CONNECTORS */}
      <svg
        className="eco-connectors"
        viewBox="0 0 1500 650"
        preserveAspectRatio="none"
      >

        {/* LEFT */}
        <path d="M500 75 H650 C735 75 735 325 750 325" />
        <path d="M500 175 H635 C700 175 700 325 750 325" />
        <path d="M500 275 H750" />
        <path d="M500 375 H635 C700 375 700 325 750 325" />
        <path d="M500 475 H650 C735 475 735 325 750 325" />
        <path d="M500 575 H650 C735 575 735 325 750 325" />

        {/* RIGHT */}
        <path d="M1000 75 H850 C765 75 765 325 750 325" />
        <path d="M1000 175 H865 C800 175 800 325 750 325" />
        <path d="M1000 275 H750" />
        <path d="M1000 375 H865 C800 375 800 325 750 325" />
        <path d="M1000 475 H850 C765 475 765 325 750 325" />
        <path d="M1000 575 H850 C765 575 765 325 750 325" />

        {/* LEFT DOTS */}
        <rect x="497" y="72" width="7" height="7" rx="2" />
        <rect x="497" y="172" width="7" height="7" rx="2" />
        <rect x="497" y="272" width="7" height="7" rx="2" />
        <rect x="497" y="372" width="7" height="7" rx="2" />
        <rect x="497" y="472" width="7" height="7" rx="2" />
        <rect x="497" y="572" width="7" height="7" rx="2" />

        {/* RIGHT DOTS */}
        <rect x="996" y="72" width="7" height="7" rx="2" />
        <rect x="996" y="172" width="7" height="7" rx="2" />
        <rect x="996" y="272" width="7" height="7" rx="2" />
        <rect x="996" y="372" width="7" height="7" rx="2" />
        <rect x="996" y="472" width="7" height="7" rx="2" />
        <rect x="996" y="572" width="7" height="7" rx="2" />

      </svg>


      {/* LEFT SIDE */}
      <div className="eco-side eco-left">

        <EcosystemRow
          title="RMC"
          clients={clients.filter(c => c.category === "RMC")}
          side="left"
          rowIndex={0}
        />

        <EcosystemRow
          title="REAL ESTATE"
          clients={clients.filter(c => c.category === "RealEstate")}
          side="left"
          rowIndex={1}
        />

        <EcosystemRow
          title="ENGRAVING"
          clients={clients.filter(c => c.category === "Engraving")}
          side="left"
          rowIndex={2}
        />

        <EcosystemRow
          title="MACHINE"
          clients={clients.filter(c => c.category === "Machine")}
          side="left"
          rowIndex={3}
        />

        <EcosystemRow
          title={
            <>
              LIGHT
              <br />
              WEIGHT
              <br />
              BLOCK
            </>
          }
          clients={clients.filter(c => c.category === "LightWeightBlock")}
          side="left"
          rowIndex={4}
        />

        <EcosystemRow
          title={
            <>
              PULSE /
              <br />
              RICE MILL
            </>
          }
          clients={clients.filter(c => c.category === "PRM")}
          side="left"
          rowIndex={5}
        />

      </div>


      {/* CENTER */}
      <div className="eco-center">

        <div className="eco-center-card">

          <div className="eco-brand-mark">
            <span />
            <span />
            <span />
          </div>

          <strong>DevERP</strong>

        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="eco-side eco-right">

        <EcosystemRow
          title="TRANSPORTATION"
          clients={clients.filter(c => c.category === "Transportation")}
          side="right"
          rowIndex={0}
        />

        <EcosystemRow
          title="SCHOOL"
          clients={clients.filter(c => c.category === "School")}
          side="right"
          rowIndex={1}
        />

        <EcosystemRow
          title="PHARMACEUTICAL"
          clients={clients.filter(c => c.category === "Pharama")}
          side="right"
          rowIndex={2}
        />

        <EcosystemRow
          title="BOOK DEPOT"
          clients={clients.filter(c => c.category === "Bookdepot")}
          side="right"
          rowIndex={3}
        />

        <EcosystemRow
          title={
            <>
              PETROLPUMP /
              <br />
              SURVEY
            </>
          }
          clients={[
            ...clients.filter(c => c.category === "Petrolpump"),
            ...clients.filter(c => c.category === "Survey"),
          ]}
          side="right"
          rowIndex={4}
        />

        <EcosystemRow
          title={
            <>
              OTHER /
              <br />
              INDUSTRIES
            </>
          }
          clients={[
            ...clients.filter(c => c.category === "Flexo"),
            ...clients.filter(c => c.category === "Trading"),
            ...clients.filter(c => c.category === "Food"),
          ]}
          side="right"
          rowIndex={5}
        />

      </div>

    </div>
  </div>
</section>


  {/* =========================================
      CTA
  ========================================= */}
  <section className="clients-cta">

    <div className="clients-cta-glow" />

    <div className="clients-container">

      <div className="clients-cta-inner">

        <div className="clients-cta-content clients-cta-slide-left">

          <span className="clients-section-label">
            LET'S WORK TOGETHER
          </span>

          <h2>
            Ready to build a smarter
            <br />
            <span>business?</span>
          </h2>

          <p>
            Discover how DevERP can help your organization
            simplify operations and grow faster.
          </p>

        </div>


        <a
          href="index.aspx?q=contact_us"
          className="clients-cta-button clients-cta-slide-right"
        >
          <span>Contact Us</span>
          <strong>↗</strong>
        </a>

      </div>

    </div>

  </section>


  {/* =========================================
      LOGO PREVIEW
  ========================================= */}
  {selectedClient && (

    <div
      className="client-lightbox"
      onClick={() => setSelectedClient(null)}
    >

      <div
        className="client-lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          type="button"
          className="client-lightbox-close"
          onClick={() => setSelectedClient(null)}
          aria-label="Close"
        >
          ×
        </button>

        <div className="client-lightbox-image">

          <img
            src={selectedClient.image}
            alt={selectedClient.name}
          />

        </div>

        <div className="client-lightbox-info">

          <span>
            {selectedClient.category}
          </span>

          <h3>
            {selectedClient.name}
          </h3>

        </div>

      </div>

    </div>

  )}

</main>
  );
};

export default Clients;