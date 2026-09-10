import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogPage.css";

interface BlogPost {
  image: string;
  title: string;
  description: string;
  link: string;
  date?: string;
}

const blogPosts: BlogPost[] = [
  {
    image: "./CMSassets/images/articles/CoreWCF v1-0.jpg",
    title: "CoreWCF v1.0 Released",
    description: "CoreWCF v1.0 Released",
    link: "index.aspx?q=corewcf",
    date: "18 Nov 2021",
  },
  {
    image: "./CMSassets/images/articles/Future of .NET Development.jpg",
    title: "Future of .NET Development",
    description: "Future of .NET Development",
    link: "index.aspx?q=futureofdotnet",
    date: "18 Nov 2021",
  },
  {
    image: "./CMSassets/images/articles/net preview3.jpg",
    title: ".NET 7 PREVIEW 3",
    description: ".NET 7 PREVIEW 3",
    link: "index.aspx?q=net7preview3",
    date: "18 Nov 2021",
  },
  {
    image: "./CMSassets/images/articles/What's New in VS Code 1.66.jpg",
    title: "What's New in VS Code 1.66",
    description: "What's New in VS Code 1.66",
    link: "index.aspx?q=code166",
    date: "18 Nov 2021",
  },
  {
    image: "./CMSassets/images/articles/nft.jpg",
    title: "C# Corner Launches New Technology Category: NFT",
    description: "C# Corner Launches New Technology Category: NFT",
    link: "index.aspx?q=nft",
    date: "18 Nov 2021",
  },
  {
    image: "./CMSassets/images/articles/embedded-tools.jpg",
    title: "Microsoft Takes VS 2022 Embedded Tools (C++) to VS Code",
    description:
      "Microsoft Takes VS 2022 Embedded Tools (C++) to VS Code",
    link: "index.aspx?q=mic-emb-tools",
    date: "18 Nov 2021",
  },
  {
    image: "./CMSassets/images/articles/dotnet7.jpg",
    title: ".NET 7",
    description: ".NET 7",
    link: "index.aspx?q=dotnet7",
    date: "18 Nov 2021",
  },
  {
    image: "./CMSassets/images/articles/net-in-erp.jpg",
    title: ".NET IN ERP",
    description: ".NET IN ERP",
    link: "index.aspx?q=net-in-erp",
    date: "18 Nov 2021",
  },
  {
    image: "./CMSassets/images/articles/net-java-php.jpg",
    title: ".NET, JAVA & PHP",
    description: ".NET, JAVA & PHP",
    link: "index.aspx?q=net-java-php",
    date: "18 Nov 2021",
  },
  {
    image: "./CMSassets/images/articles/aiwithnet.jpg",
    title: "AI With .NET",
    description: "AI with .NET",
    link: "index.aspx?q=aiwithnet",
    date: "18 Nov 2021",
  },
  {
    image: "./CMSassets/images/articles/bright_career.jpg",
    title: "Bright Career in .NET",
    description: "Application Development with ASP.Net & MVC.",
    link: "index.aspx?q=brightcareer",
    date: "18 Nov 2021",
  },
  {
    image: "./CMSassets/images/articles/appdevwithasp.jpg",
    title: "Application Development with ASP.Net & MVC",
    description: "Application Development with ASP.Net & MVC.",
    link: "index.aspx?q=appdev",
    date: "18 Nov 2021",
  },
  {
    image: "./CMSassets/images/blog/aspdotnetcore.jpg",
    title: "Why to learn ASP.NET Core in 2021?",
    description: "What is ERP? The key benefits of ERP.",
    link: "index.aspx?q=netcore",
    date: "18 Nov 2021",
  },
  {
    image: "./CMSassets/images/articles/Why dotnet -1.jpg",
    title: "Why .Net is widely used?",
    description: "",
    link: "index.aspx?q=whydotnet",
    date: "18 DEC 2021",
  },
  {
    image: "./CMSassets/images/articles/crm.jpg",
    title: "Why CRM?",
    description: "",
    link: "index.aspx?q=whycrm",
    date: "11 DEC 2021",
  },
  {
    image: "./CMSassets/images/articles/whasnewinvs.png",
    title: "What's new in Visual Studio, C# and F#.",
    description: "",
    link: "index.aspx?q=whatsnewinvs",
    date: "29 Nov 2021",
  },
  {
    image: "./CMSassets/images/blog/whatiserp.jpg",
    title: "What is ERP?",
    description: "What is ERP? The key benefits of ERP.",
    link: "index.aspx?q=whatiserp",
    date: "18 Nov 2021",
  },
];

const BlogPage = () => {
  const navigate = useNavigate();

  const handlePostClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    post: BlogPost
  ) => {
    e.preventDefault();

    /*
      IMPORTANT:
      Your old ASPX article URLs are preserved.
      If you create individual React article routes later,
      you can map them here.
    */

    const query = post.link.split("q=")[1];

    if (query) {
      navigate(`/blog/${query}`);
    }
  };

  return (
    <main className="blog-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="blog-hero">
  <div className="blog-hero-image">
    <img
      src="https://deverp.com/CMSassets/images/it_service/inner_page_banner2.jpg"
      alt="Dev ERP Blog"
    />
  </div>

  <div className="blog-hero-overlay" />

  <div className="blog-container blog-hero-grid">
    <div className="blog-hero-content">

      <div className="blog-hero-kicker">
        <span></span>
        DEV ERP INSIGHTS
      </div>

      <h1>
        Blog<span>.</span>
      </h1>

      <p>
        Technology insights, ERP knowledge and ideas
        from the DevERP team.
      </p>

     <div className="clients-hero-bottom">

        <div className="clients-breadcrumb">
          <a href="/">
            Home
          </a>

          <span>→</span>

          <strong>Blog</strong>
        </div>

        <div className="clients-hero-explore">
          <span />
          EXPLORE OUR Blogs
        </div>

      </div>
    </div>

    <div className="blog-hero-visual" aria-hidden="true">
      <div className="blog-orbit blog-orbit-one"></div>
      <div className="blog-orbit blog-orbit-two"></div>
      <div className="blog-orbit blog-orbit-three"></div>

      <div className="blog-orbit-center">
        <span>01</span>
        <small>INSIGHTS</small>
      </div>

      <div className="blog-vertical-text">
        TECHNOLOGY • ERP • IDEAS
      </div>
    </div>
  </div>

  <div className="blog-hero-bottom">
    <span>TECHNOLOGY</span>
    <span>ERP</span>
    <span>INNOVATION</span>
  </div>
</section>

      {/* =====================================================
          BLOG SECTION
      ====================================================== */}
      <section className="blog-section">

        <div className="blog-container">

          {/* SECTION HEADER */}
          <div className="blog-heading">

            <div>
              <span className="blog-eyebrow">
                LATEST INSIGHTS
              </span>

              <h2>
                Blog Section
              </h2>
            </div>

            <div className="blog-heading-side">
              <span className="blog-post-count">
                {blogPosts.length}
              </span>

              <span>
                Articles
              </span>
            </div>

          </div>


          {/* =================================================
              BLOG GRID
          ================================================== */}
          <div className="blog-grid">

            {blogPosts.map((post, index) => (

              <article
                className="blog-card"
                key={`${post.link}-${index}`}
              >

                {/* IMAGE */}
                <a
                  href={post.link}
                  className="blog-card-image"
                  onClick={(e) => handlePostClick(e, post)}
                >

                  <img
                    src={post.image}
                    alt={post.title}
                  />

                  <div className="blog-card-image-overlay" />

                  <span className="blog-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="blog-card-view">
                    Read Article
                    <span>↗</span>
                  </span>

                </a>


                {/* CONTENT */}
                <div className="blog-card-content">

                  <div className="blog-card-meta">

                    <span>
                      DEV ERP
                    </span>

                    {post.date && (
                      <>
                        <i />
                        <span>{post.date}</span>
                      </>
                    )}

                  </div>

                  <h3>

                    <a
                      href={post.link}
                      onClick={(e) =>
                        handlePostClick(e, post)
                      }
                    >
                      {post.title}
                    </a>

                  </h3>

                  {post.description && (
                    <p>
                      {post.description}
                      {post.description !== post.title && "..."}
                    </p>
                  )}

                  <a
                    href={post.link}
                    className="blog-read-more"
                    onClick={(e) =>
                      handlePostClick(e, post)
                    }
                  >
                    <span>READ MORE</span>
                    <span className="blog-read-arrow">
                      →
                    </span>
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="blog-bottom">

        <div className="blog-container">

          <div className="blog-bottom-inner">

            <div>

              <span className="blog-eyebrow">
                KEEP EXPLORING
              </span>

              <h2>
                Discover more from DevERP
              </h2>

              <p>
                Explore our ERP solutions and technology
                services designed for modern businesses.
              </p>

            </div>

            <a
              href="/"
              className="blog-cta"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Explore DevERP
              <span>↗</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default BlogPage;