import React, { useMemo, useState } from "react";
import "./Clients.css";
import { useNavigate } from "react-router-dom";

interface Client {
  image: string;
  name: string;
  category: string;
}

const clients: Client[] = [
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
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
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
  <section className="clients-gallery-section">

    <div className="clients-container">

      {/* FILTER */}
      <div className="clients-filter-wrapper clients-filter-reveal">

        <div className="clients-filter">

          {filters.map((filter) => (

            <button
              key={filter.key}
              type="button"
              className={
                activeFilter === filter.key
                  ? "client-filter active"
                  : "client-filter"
              }
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>

          ))}

        </div>

      </div>


      {/* RESULT INFO */}
      <div className="clients-result-bar clients-result-reveal">

        <div>
          Showing{" "}
          <strong>{filteredClients.length}</strong> client
          {filteredClients.length !== 1 ? "s" : ""}
        </div>

        {activeFilter !== "all" && (

          <button
            type="button"
            onClick={() => setActiveFilter("all")}
          >
            Clear filter <span>×</span>
          </button>

        )}

      </div>


      {/* GRID */}
      <div className="clients-grid">

        {filteredClients.map((client, index) => (

          <article
            className={`
              client-card
              client-card-reveal
              client-card-delay-${Math.min(index + 1, 5)}
            `}
            key={`${client.name}-${index}`}
            onClick={() => setSelectedClient(client)}
          >

            <div className="client-card-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="client-logo-box">

              <img
                src={client.image}
                alt={client.name}
                loading="lazy"
              />

            </div>

            <div className="client-card-footer">

              <span>
                {client.name}
              </span>

              <span className="client-card-arrow">
                ↗
              </span>

            </div>

          </article>

        ))}

      </div>


      {/* EMPTY */}
      {filteredClients.length === 0 && (

        <div className="clients-empty clients-empty-reveal">

          <div className="clients-empty-icon">
            ⌕
          </div>

          <h3>
            No clients found
          </h3>

          <p>
            There are no clients available in this category.
          </p>

          <button
            type="button"
            onClick={() => setActiveFilter("all")}
          >
            Show all clients
          </button>

        </div>

      )}

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