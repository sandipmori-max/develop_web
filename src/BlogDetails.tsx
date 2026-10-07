import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./BlogDetails.css";

interface BlogDetail {
  image: string;
  title: string;
  date: string;
  category: string;
  content: React.ReactNode;
}

const blogDetails: Record<string, BlogDetail> = {
  corewcf: {
    image: "./CMSassets/images/articles/CoreWCF v1-0.jpg",
    title: "CoreWCF v1.0 Released",
    date: "18 Nov 2021",
    category: ".NET",
    content: (
      <>
        <p>
          CoreWCF v1.0 has been released as a modern alternative for
          applications that need Windows Communication Foundation compatible
          communication capabilities.
        </p>

        <p>
          CoreWCF brings WCF-style service development to modern .NET
          applications and provides developers with a path for maintaining
          and modernizing existing service-based applications.
        </p>

        <h2>What is CoreWCF?</h2>

        <p>
          CoreWCF is an open-source project that provides a subset of Windows
          Communication Foundation functionality for modern .NET applications.
        </p>

        <p>
          It is useful when existing applications depend on WCF concepts and
          need to move toward modern .NET platforms.
        </p>
      </>
    ),
  },

  futureofdotnet: {
    image: "./CMSassets/images/articles/Future of .NET Development.jpg",
    title: "Future of .NET Development",
    date: "18 Nov 2021",
    category: ".NET",
    content: (
      <>
        <p>
          .NET continues to evolve as a unified development platform for web,
          desktop, cloud, mobile and enterprise applications.
        </p>

        <p>
          Modern .NET development focuses on performance, cross-platform
          support, cloud-native applications and improved developer
          productivity.
        </p>

        <h2>Modern .NET</h2>

        <p>
          Developers can use modern .NET technologies to build scalable
          applications that run across Windows, Linux and macOS.
        </p>
      </>
    ),
  },

  net7preview3: {
    image: "./CMSassets/images/articles/net preview3.jpg",
    title: ".NET 7 PREVIEW 3",
    date: "18 Nov 2021",
    category: ".NET",
    content: (
      <>
        <p>
          .NET 7 Preview introduced new improvements and features for
          developers preparing applications for the next generation of .NET.
        </p>

        <p>
          Preview releases allow developers to explore upcoming platform
          features and provide feedback before the final release.
        </p>

        <h2>Developer Improvements</h2>

        <p>
          The release continued the focus on performance, productivity and
          modern application development.
        </p>
      </>
    ),
  },

  code166: {
    image: "./CMSassets/images/articles/What's New in VS Code 1.66.jpg",
    title: "What's New in VS Code 1.66",
    date: "18 Nov 2021",
    category: "Development Tools",
    content: (
      <>
        <p>
          Visual Studio Code continues to add improvements that make everyday
          development faster and more productive.
        </p>

        <p>
          The 1.66 release introduced improvements across the editor, source
          control, terminal and developer experience.
        </p>

        <h2>Developer Experience</h2>

        <p>
          These improvements help developers work efficiently while
          maintaining a lightweight and extensible development environment.
        </p>
      </>
    ),
  },

  nft: {
    image: "./CMSassets/images/articles/nft.jpg",
    title: "C# Corner Launches New Technology Category: NFT",
    date: "18 Nov 2021",
    category: "Technology",
    content: (
      <>
        <p>
          NFTs became an important technology topic as blockchain applications
          and digital ownership continued to grow.
        </p>

        <p>
          The technology provides a way to represent unique digital assets
          using blockchain-based ownership records.
        </p>

        <h2>Understanding NFTs</h2>

        <p>
          An NFT is a unique digital token that can represent ownership or
          authenticity of a digital or physical asset.
        </p>
      </>
    ),
  },

  "mic-emb-tools": {
    image: "./CMSassets/images/articles/embedded-tools.jpg",
    title: "Microsoft Takes VS 2022 Embedded Tools (C++) to VS Code",
    date: "18 Nov 2021",
    category: "Microsoft",
    content: (
      <>
        <p>
          Embedded development requires tools that provide developers with
          efficient debugging, code navigation and development workflows.
        </p>

        <p>
          Microsoft has continued expanding development tooling capabilities
          across its developer ecosystem.
        </p>

        <h2>Embedded Development</h2>

        <p>
          Modern editors and extensions make it easier to develop and maintain
          applications targeting embedded platforms.
        </p>
      </>
    ),
  },

  dotnet7: {
    image: "./CMSassets/images/articles/dotnet7.jpg",
    title: ".NET 7",
    date: "18 Nov 2021",
    category: ".NET",
    content: (
      <>
        <p>
          .NET 7 continued the evolution of the unified .NET platform with
          improvements focused on performance, productivity and application
          development.
        </p>

        <h2>Why .NET 7?</h2>

        <p>
          The platform provides developers with modern tools and libraries for
          building web, desktop, cloud and enterprise applications.
        </p>
      </>
    ),
  },

  "net-in-erp": {
    image: "./CMSassets/images/articles/net-in-erp.jpg",
    title: ".NET IN ERP",
    date: "18 Nov 2021",
    category: "ERP",
    content: (
      <>
        <p>
          .NET is widely used for developing enterprise resource planning
          applications because of its scalability, maintainability and
          extensive ecosystem.
        </p>

        <h2>.NET and ERP Applications</h2>

        <p>
          ERP systems require reliable business logic, database integration,
          security and scalable application architecture.
        </p>
      </>
    ),
  },

  "net-java-php": {
    image: "./CMSassets/images/articles/net-java-php.jpg",
    title: ".NET, JAVA & PHP",
    date: "18 Nov 2021",
    category: "Technology",
    content: (
      <>
        <p>
          .NET, Java and PHP are widely used technologies for building
          business and enterprise applications.
        </p>

        <p>
          Each platform provides different frameworks, libraries and
          development approaches for solving application development
          requirements.
        </p>

        <h2>Choosing a Technology</h2>

        <p>
          The appropriate technology depends on project requirements, team
          expertise, infrastructure and long-term maintenance.
        </p>
      </>
    ),
  },

  aiwithnet: {
    image: "./CMSassets/images/articles/aiwithnet.jpg",
    title: "AI With .NET",
    date: "18 Nov 2021",
    category: "Artificial Intelligence",
    content: (
      <>
        <p>
          Artificial intelligence can be integrated with modern .NET
          applications to create intelligent and automated business
          solutions.
        </p>

        <h2>AI Applications</h2>

        <p>
          AI can be used for prediction, automation, natural language
          processing, recommendation systems and data analysis.
        </p>
      </>
    ),
  },

  brightcareer: {
    image: "./CMSassets/images/articles/bright_career.jpg",
    title: "Bright Career in .NET",
    date: "18 Nov 2021",
    category: "Career",
    content: (
      <>
        <p>
          .NET provides a broad ecosystem for developers interested in web,
          enterprise, cloud and application development.
        </p>

        <h2>Learning .NET</h2>

        <p>
          Developers can build a strong foundation by learning C#, ASP.NET,
          databases, APIs and modern application architecture.
        </p>
      </>
    ),
  },

  appdev: {
    image: "./CMSassets/images/articles/appdevwithasp.jpg",
    title: "Application Development with ASP.Net & MVC",
    date: "18 Nov 2021",
    category: "ASP.NET",
    content: (
      <>
        <p>
          ASP.NET MVC provides a structured approach for developing web
          applications by separating application concerns into models, views
          and controllers.
        </p>

        <h2>MVC Architecture</h2>

        <p>
          The separation of responsibilities makes applications easier to
          maintain, test and extend.
        </p>
      </>
    ),
  },

  netcore: {
    image: "./CMSassets/images/blog/aspdotnetcore.jpg",
    title: "Why to learn ASP.NET Core in 2021?",
    date: "18 Nov 2021",
    category: "ASP.NET Core",
    content: (
      <>
        <p>
          ASP.NET Core is a cross-platform framework for building modern web
          applications and APIs.
        </p>

        <h2>Benefits of ASP.NET Core</h2>

        <p>
          Its cross-platform architecture, performance and modern development
          model make it suitable for web and enterprise applications.
        </p>
      </>
    ),
  },

  whydotnet: {
    image: "./CMSassets/images/articles/Why dotnet -1.jpg",
    title: "Why .Net is widely used?",
    date: "18 DEC 2021",
    category: ".NET",
    content: (
      <>
        <p>
          .NET is widely used for building web applications, enterprise
          software, APIs, desktop applications and cloud-based solutions.
        </p>

        <h2>Enterprise Development</h2>

        <p>
          The ecosystem provides a large collection of libraries, development
          tools and frameworks for application development.
        </p>
      </>
    ),
  },

  whycrm: {
    image: "./CMSassets/images/articles/crm.jpg",
    title: "Why CRM?",
    date: "11 DEC 2021",
    category: "CRM",
    content: (
      <>
        <p>
          Customer Relationship Management systems help businesses organize
          customer information and manage interactions across the customer
          lifecycle.
        </p>

        <h2>Benefits of CRM</h2>

        <p>
          CRM systems can help organizations manage leads, customers, sales
          activities and business relationships from a centralized system.
        </p>
      </>
    ),
  },

  whatsnewinvs: {
    image: "./CMSassets/images/articles/whasnewinvs.png",
    title: "What's new in Visual Studio, C# and F#.",
    date: "29 Nov 2021",
    category: "Visual Studio",
    content: (
      <>
        <p>
          Visual Studio provides a comprehensive development environment for
          building applications using technologies such as .NET, C# and F#.
        </p>

        <h2>Developer Tools</h2>

        <p>
          Modern versions of Visual Studio continue to improve developer
          productivity, debugging and application development workflows.
        </p>
      </>
    ),
  },

  whatiserp: {
    image: "./CMSassets/images/blog/whatiserp.jpg",
    title: "What is ERP?",
    date: "18 Nov 2021",
    category: "ERP",
    content: (
      <>
        <p>
          Enterprise Resource Planning, commonly known as ERP, is software
          used to manage and integrate important business processes.
        </p>

        <h2>Key Benefits of ERP</h2>

        <p>
          ERP systems can bring business operations such as finance,
          inventory, sales, purchasing, manufacturing, HR and reporting
          together into a centralized platform.
        </p>

        <p>
          A properly designed ERP system helps organizations maintain
          consistent data and improve visibility across business operations.
        </p>
      </>
    ),
  },
};

const BlogDetails = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const slug = searchParams.get("slug") || "";
  const post = slug ? blogDetails[slug] : undefined;

  if (!post) {
    return (
      <main className="blog-details-page">
        <section className="blog-details-not-found">
          <span className="blog-eyebrow">BLOG</span>

          <h1>Article Not Found</h1>

          <p>
            The blog article you are looking for does not exist.
          </p>

          <button
            type="button"
            onClick={() => navigate("/blog")}
            className="blog-details-back"
          >
            ← Back to Blog
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="blog-details-page">
  <section className="blog-details-header">
        <div className="blog-container">

          <button
            type="button"
            className="blog-details-back-top"
            onClick={() => navigate("/blog")}
          >
            ← Back to Blog
          </button>

          <div className="blog-details-category">
            {post.category}
          </div>

          <h1>{post.title}</h1>

          <div className="blog-details-meta">
            <span>DevERP</span>
            <i />
            <span>{post.date}</span>
          </div>

        </div>
      </section>
      {/* =========================
          FULL BLOG IMAGE
      ========================== */}
      <section className="blog-details-hero">
        <div className="blog-details-hero-image">
          <img
            src={post.image}
            alt={post.title}
          />
        </div>
      </section>

      {/* =========================
          BLOG HEADER
      ========================== */}
    

      {/* =========================
          ARTICLE
      ========================== */}
      <section className="blog-details-section">

        <div className="blog-container blog-details-layout">

          <article className="blog-details-content">
            {post.content}
          </article>

          {/* =====================
              SIDEBAR
          ====================== */}
          <aside className="blog-details-sidebar">

            <div className="blog-details-sidebar-box">

              <span className="blog-eyebrow">
                DEVERP INSIGHTS
              </span>

              <h3>
                Explore more articles
              </h3>

              <p>
                Discover more technology, ERP and development
                insights from DevERP.
              </p>

              <button
                type="button"
                onClick={() => navigate("/blog")}
                className="blog-details-sidebar-button"
              >
                <span>View All Articles</span>
                <strong>→</strong>
              </button>

            </div>

          </aside>

        </div>

      </section>

      {/* =========================
          BOTTOM CTA
      ========================== */}
      <section className="blog-details-bottom">

        <div className="blog-container">

          <div className="blog-details-bottom-inner">

            <div>
              <span className="blog-eyebrow">
                KEEP EXPLORING
              </span>

              <h2>
                Discover more from DevERP
              </h2>
            </div>

           <a
  href="/"
  className="blog-cta blog-cta-slide-right"
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

export default BlogDetails;