import "./HappyClientele.css";

const clientLogos = [
  "./CMSassets/images/Client_Logo/HK logo.jpg",
  "./CMSassets/images/Client_Logo/Yogeshwar rmc.jpg",
  "./CMSassets/images/Client_Logo/Swaraj.jpg",
  "./CMSassets/images/Client_Logo/logo (6).png",
  "./CMSassets/images/Client_Logo/logo (2).jpg",
  "/CMSassets/images/Client_Logo/Duracon Logo.jpg",
  "./CMSassets/images/Client_Logo/Indian RMC .jpg",
  "./CMSassets/images/Client_Logo/logo (2).png",
  "./CMSassets/images/Client_Logo/NK RMC.jpg",
  "./CMSassets/images/Client_Logo/logo (13).png",
  "./CMSassets/images/Client_Logo/logo (10).png",
  "./CMSassets/images/Client_Logo/Akta.jpg.jpg",
  "./CMSassets/images/Client_Logo/psp.jpg",
  "./CMSassets/images/Client_Logo/trine.jpg",
  "./cmsassets/images/Client_Logo/jaydeepconstruction.jpg",
  "./CMSassets/images/Client_Logo/vindia.jpg",
  "./CMSassets/images/Client_Logo/Mangla.jpg",
  "./CMSassets/images/Client_Logo/Ameya.jpg",
  "./CMSassets/images/Client_Logo/tnarmc.jpg",
  "./CMSassets/images/Client_Logo/procon.jpeg",
  "./CMSassets/images/Client_Logo/robust.jpg",
  "./CMSassets/images/Client_Logo/umixo.jpg",
  "./CMSassets/images/Client_Logo/heritage_logo.jpg",
  "./CMSassets/images/Client_Logo/kesarinfra.jpg",
  "./CMSassets/images/Client_Logo/KHUSHBU logo.jpg",
  "./CMSassets/images/Client_Logo/newlogo.jpg",
  "./CMSassets/images/Client_Logo/AIPL Logo.jpg",
  "./CMSassets/images/Client_Logo/Logo.jpg",
  "./CMSassets/images/Client_Logo/RE INDIA LOGO.jpg",
  "./CMSassets/images/Client_Logo/Rajdeep.jpg",
  "./CMSassets/images/Client_Logo/Om Shiv logo.jpg",
  "./CMSassets/images/Client_Logo/Shashvat.jpg",
  "./CMSassets/images/Client_Logo/Conplus Logo.jpg",
  "./CMSassets/images/Client_Logo/keya.jpg",
  "./CMSassets/images/Client_Logo/logo (3).jpg",
  "./CMSassets/images/Client_Logo/KINJAL logo2.jpg",
  "./CMSassets/images/Client_Logo/Sarpo.jpg",
  "./CMSassets/images/Client_Logo/logo (1).png",
  "./CMSassets/images/Client_Logo/logo (14).png",
  "./CMSassets/images/Client_Logo/logo (1).jpg",
  "./CMSassets/images/Client_Logo/Pixel.jpg",
  "./CMSassets/images/Client_Logo/IMAGE.jpg",
  "./CMSassets/images/Client_Logo/logo_sub.png",
  "./CMSassets/images/Client_Logo/ornate-logo.png",
  "./CMSassets/images/Client_Logo/pinmark.jpg",
  "./CMSassets/images/Client_Logo/Brixo logo.jpg",
  "./CMSassets/images/Client_Logo/Yash.jpg",
  "./CMSassets/images/Client_Logo/phenix.jpg",
  "./CMSassets/images/Client_Logo/Clavecon-Logo.jpg",
  "./CMSassets/images/Client_Logo/Somnath Logo.jpg",
  "./CMSassets/images/Client_Logo/Rathi Rice Logo.jpg",
  "./CMSassets/images/Client_Logo/angur.jpg",
  "./CMSassets/images/Client_Logo/hiramani_logo.png",
  "./cmsassets/images/client_logo/kaypee_logo_02.png",
  "./CMSassets/images/Client_Logo/sts.jpg",
  "./CMSassets/images/Client_Logo/RE INDIA LOGO.jpg",
  "./CMSassets/images/Client_Logo/kosol.png",
  "./CMSassets/images/Client_Logo/logo (3).png",
  "./CMSassets/images/Client_Logo/shivengineeing.png",
  "./CMSassets/images/Client_Logo/Gayatrilogo.jpg",
  "./CMSassets/images/Client_Logo/aechme-rolltech.jpg",
  "./CMSassets/images/Client_Logo/zydus-logo.png",
  "./CMSassets/images/Client_Logo/anada.jpg",
  "./CMSassets/images/Client_Logo/comet.jpg",
  "./CMSassets/images/Client_Logo/Khoraj .jpg",
  "./CMSassets/images/Client_Logo/Zenith logo.jpg",
  "./CMSassets/images/Client_Logo/ritezone.jpg",
  "./CMSassets/images/Client_Logo/Universal logo.jpg",
  "./CMSassets/images/Client_Logo/veggie.jpg",
];

export default function HappyClientele() {
  return (
    <section className="happy-clientele">
      <div className="happy-clientele-container">

        {/* Header */}
        <div className="happy-clientele-header">
          <div className="happy-clientele-heading">
            <span className="client-kicker">
              OUR CLIENTS
            </span>

            <h2>
              Happy <span>Clientele</span>
            </h2>

            <p>
              Trusted by businesses across industries to simplify
              operations and build smarter workflows.
            </p>
          </div>

          <div className="client-count">
            <strong>60+</strong>
            <span>Trusted Clients</span>
          </div>
        </div>

        {/* Logo Slider */}
        <div className="client-slider-wrapper">

          <div className="client-fade client-fade-left"></div>
          <div className="client-fade client-fade-right"></div>

          <div className="client-slider">
            <div className="client-track">

              {/* First set */}
              {clientLogos.map((logo, index) => (
                <div
                  className="client-logo-card"
                  key={`first-${index}`}
                >
                  <img
                    src={logo}
                    alt={`DevERP client ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}

              {/* Duplicate set for seamless infinite loop */}
              {clientLogos.map((logo, index) => (
                <div
                  className="client-logo-card"
                  key={`second-${index}`}
                  aria-hidden="true"
                >
                  <img
                    src={logo}
                    alt=""
                    loading="lazy"
                  />
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Bottom info */}
        <div className="client-trust-line">
          <div className="trust-line"></div>

          <span>
            Building long-term partnerships through technology
          </span>

          <div className="trust-line"></div>
        </div>

      </div>
    </section>
  );
}