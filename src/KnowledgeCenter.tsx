import React from "react";
import { useNavigate } from "react-router-dom";
import "./KnowledgeCenter.css";

interface TrainingItem {
  title: string;
  image: string;
  link: string;
  author: string;
  role: string;
  date: string;
  description: string;
}

const trainingItems: TrainingItem[] = [
  {
    title: "Account Software Module Training",
    image: "./CMSassets/images/it_service/trainingimg4.jpg",
    link: "index.aspx?q=account_module_training",
    author: "Suresh Prajapati",
    role: "Founder & Director",
    date: "8 OCT 2020",
    description:
      "Let’s take a step-by-step look at how you can actually put this idea into practice. Be mindful that the first steps are more about the prep work rather than the process of creating training modules. However, they are the key to starting to move in the right direction.",
  },
  {
    title: "Etiquettes at Workplace",
    image: "./CMSassets/images/it_service/Trainingimg-6.jpeg",
    link: "index.aspx?q=etiquettes_training",
    author: "Rushiraj Patel",
    role: "Consultant IIM Ahmedabad",
    date: "4 FEB 2021",
    description:
      'Work etiquette is a code that governs the expectations of social behavior in a workplace. This code is put in place to "respect and protect time, people, and processes." There is no universal agreement about a standard work etiquette, which may vary from one environment to another.',
  },
  {
    title: "DevERP Software Module Training",
    image: "./CMSassets/images/it_service/trainingimg3.jpg",
    link: "index.aspx?q=deverp_software_module",
    author: "Suresh Prajapati",
    role: "Founder & Director",
    date: "1 NOV 2020",
    description:
      "A training goal or objective confirms the reason for learning and communicates the focus of the training module. The goal should specify the skills, knowledge, or benefits the learner will gain as a result of training. For the best results, think SMART and create a goal.",
  },
  {
    title: "Support Team Training",
    image: "./CMSassets/images/it_service/trainingimg5.jpg",
    link: "index.aspx?q=support_team",
    author: "Suresh Prajapati",
    role: "Founder & Director",
    date: "8 OCT 2020",
    description:
      "Sometimes one can become lost in a big company and lose sight of how what one does truly helps or impacts the end customer. If you are one of those, think of a fire brigade, a line of people passing buckets of water from one to the other from a source of water to the site of the fire.",
  },
];

const KnowledgeCenter: React.FC = () => {
  const navigate = useNavigate();

  const openTraining = (link: string) => {
    if (link.startsWith("index.aspx")) {
      window.location.href = link;
    } else {
      navigate(link);
    }
  };

  const shareUrl = (link: string) => {
    return `https://deverp.com/${link}`;
  };

  return (
    <main className="knowledge-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="knowledge-hero">
        <div className="knowledge-hero-bg">
          <img
            src="./CMSassets/images/it_service/inner_page_banner2.jpg"
            alt="Knowledge Center DevERP"
          />
        </div>

        <div className="knowledge-hero-overlay" />
        <div className="knowledge-hero-pattern" />

        <div className="knowledge-container">
          <div className="knowledge-hero-content">
            <span className="knowledge-kicker">
              DEVErp KNOWLEDGE
            </span>

            <h1>
              Knowledge Center
              <span> DevERP</span>
            </h1>

            <p>
              Learn, explore and grow with our training sessions,
              software knowledge and workplace insights.
            </p>

            <div className="knowledge-breadcrumb">
              <button
                type="button"
                onClick={() => navigate("/")}
              >
                Home
              </button>

              <span>→</span>

              <strong>Knowledge Center</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          TRAINING SECTION
      ========================= */}
      <section className="knowledge-training">
        <div className="knowledge-container">

          <div className="knowledge-heading">
            <span className="knowledge-kicker">
              LEARN & GROW
            </span>

            <h2>
              Training <span>Session</span>
            </h2>

            <p>
              To attain knowledge, add things everyday.
            </p>
          </div>

          <div className="knowledge-grid">

            {trainingItems.map((item, index) => (
              <article
                className="knowledge-card"
                key={item.title}
              >

                {/* IMAGE */}
                <div
                  className="knowledge-card-image"
                  onClick={() => openTraining(item.link)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="knowledge-card-image-overlay">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openTraining(item.link);
                      }}
                      aria-label={`Read ${item.title}`}
                    >
                      ↗
                    </button>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="knowledge-card-content">

                  <div className="knowledge-card-label">
                    TRAINING
                  </div>

                  <h3
                    onClick={() => openTraining(item.link)}
                  >
                    {item.title}
                  </h3>

                  {/* META */}
                  <div className="knowledge-card-meta">

                    <span>
                      <i className="fa fa-user" />
                      {item.author}
                    </span>

                    <span>
                      <i className="fa fa-calendar" />
                      {item.date}
                    </span>

                  </div>

                  <div className="knowledge-card-role">
                    <i className="fa fa-briefcase" />
                    {item.role}
                  </div>

                  <p>
                    {item.description}
                  </p>

                  {/* FOOTER */}
                  <div className="knowledge-card-footer">

                    <button
                      type="button"
                      className="knowledge-read-more"
                      onClick={() => openTraining(item.link)}
                    >
                      READ MORE
                      <span>↗</span>
                    </button>

                    <div className="knowledge-share">

                      <span>Share:</span>

                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          shareUrl(item.link)
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on Facebook"
                      >
                        <i className="fa fa-facebook" />
                      </a>

                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                          shareUrl(item.link)
                        )}&text=${encodeURIComponent(item.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on Twitter"
                      >
                        <i className="fa fa-twitter" />
                      </a>

                    </div>

                  </div>
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

    
    </main>
  );
};

export default KnowledgeCenter;