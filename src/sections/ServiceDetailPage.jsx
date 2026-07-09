import React from 'react';
import { 
  ArrowLeft, Globe, Smartphone, Server, Database, Cloud, 
  Palette, Monitor, CheckCircle, Calendar, ShieldCheck, HelpCircle, Star, ArrowRight 
} from 'lucide-react';

const serviceDetailsData = {
  "web-development": {
    title: "Web Development",
    icon: <Globe size={40} color="var(--white)" />,
    bg: "var(--black)",
    tagline: "Custom websites that convert visitors into customers with SEO optimization.",
    desc: "We build modern, blazing-fast web platforms using cutting-edge architectures like React, Next.js, and static site generation. Our process focuses on clean semantics, peak search engine optimization, and robust responsive layouts to ensure your business makes a premium first impression.",
    features: [
      "Custom React & Next.js Single Page Applications",
      "SEO-optimized site structures and page rendering",
      "TailwindCSS, CSS modules, and custom neo-brutalist interfaces",
      "CMS integrations (Strapi, Contentful, WordPress Headless)",
      "High performance score aiming for 95+ on Google Lighthouse"
    ],
    process: [
      { step: "01", title: "Discovery", desc: "We study your business requirements, analyze competitor websites, and plan site maps." },
      { step: "02", title: "UX/UI Prototyping", desc: "Design high-fidelity neo-brutalist layouts, defining style grids and components." },
      { step: "03", title: "Development", desc: "Clean development utilizing semantic code structures and modern component trees." },
      { step: "04", title: "Launch & SEO Check", desc: "Rigorous performance audit, custom schema markup configuration, and cloud deployment." }
    ],
    timeline: "4 - 8 Weeks",
    deliverables: "React Source Code, Production Build, Cloudflare/Vercel Configuration, Admin Panel Guide.",
    pricing: "Fixed Pricing or Monthly Retainer options available."
  },
  "mobile-applications": {
    title: "Mobile Applications",
    icon: <Smartphone size={40} color="var(--white)" />,
    bg: "var(--black)",
    tagline: "Native and cross-platform mobile solutions for iOS and Android with seamless performance.",
    desc: "We engineer beautiful and responsive mobile applications using React Native and Flutter. By utilizing single-codebase cross-platform logic, we significantly reduce project timelines while delivering fully native performance, fluid micro-interactions, and offline-first functionalities.",
    features: [
      "Cross-platform React Native and Flutter Engineering",
      "Push Notifications, Geolocation, and Biometric Logins",
      "Robust state management (Redux, Zustand, MobX)",
      "App Store & Google Play launch compliance management",
      "Local databases (Realm, SQLite) for seamless offline operations"
    ],
    process: [
      { step: "01", title: "Wireframing", desc: "Map user journeys, screens, state triggers, and API endpoints." },
      { step: "02", title: "Visual Design", desc: "Design interfaces with fluid mobile layouts and tailored dark/light modes." },
      { step: "03", title: "Coding & APIs", desc: "Build mobile views, integrate backend REST/GraphQL APIs, and set up state." },
      { step: "04", title: "Beta & Release", desc: "Test on TestFlight/Play Console, fix bugs, and manage complete store submission." }
    ],
    timeline: "8 - 12 Weeks",
    deliverables: "iOS IPA File, Android APK File, Full Source Code, App Store Setup Guides, REST API Documentation.",
    pricing: "Milestone-based billing."
  },
  "servers-hosting": {
    title: "Servers & Hosting",
    icon: <Server size={40} color="var(--white)" />,
    bg: "var(--black)",
    tagline: "Reliable server setup, cloud hosting, and infrastructure management for your business.",
    desc: "Scale your business with high-availability, fully managed cloud environments. We design security-focused server architectures on AWS, Google Cloud, and DigitalOcean, optimizing resource utilization and setting up continuous delivery pipelines to ensure 99.9% uptime.",
    features: [
      "AWS, Google Cloud, and DigitalOcean Infrastructure Design",
      "Dockerization, Kubernetes clusters, and container optimization",
      "Auto-scaling configurations and Serverless deployment management",
      "Automatic weekly backups, multi-zone replication, and disaster plans",
      "SSL, Web Application Firewall (WAF), and secure access ports"
    ],
    process: [
      { step: "01", title: "Audit", desc: "Inspect current server resources, database size, traffic, and security vulnerabilities." },
      { step: "02", title: "Architecture Plan", desc: "Map cloud resources, VPC, security groups, and automated scaling thresholds." },
      { step: "03", title: "Migration & Setup", desc: "Configure databases, provision server instances, and build deployment scripts." },
      { step: "04", title: "Load Testing", desc: "Stress test the hosting setup to confirm capacity under simulated traffic bursts." }
    ],
    timeline: "2 - 4 Weeks",
    deliverables: "Terraform Infrastructure Scripts, AWS/GCP Setup Documentation, Backup Policies, Monitoring Dashboards.",
    pricing: "Setup fee + Monthly Maintenance Retainer."
  },
  "professional-email": {
    title: "Professional Email",
    icon: <Database size={40} color="var(--white)" />,
    bg: "var(--black)",
    tagline: "Branded professional email solutions to enhance your business credibility.",
    desc: "Build trust with customers by migrating from generic email systems to custom domain addresses. We set up premium, secure workspace solutions on Google Workspace or Microsoft 365, configuring critical DNS records to guarantee maximum email deliverability.",
    features: [
      "Google Workspace & Microsoft 365 Professional Setup",
      "SPF, DKIM, DMARC records config for spam prevention",
      "Domain name linkage and custom aliases (e.g. sales@, info@)",
      "Zero-downtime email migrations from legacy IMAP/cPanel setups",
      "Multi-factor authentication (MFA) and data defense policies"
    ],
    process: [
      { step: "01", title: "Domain Hook", desc: "Link your business domain to Google/Microsoft backend consoles." },
      { step: "02", title: "User Provisioning", desc: "Create organizational email accounts and set up group forwarders." },
      { step: "03", title: "DNS Optimization", desc: "Configure SPF, DKIM, and DMARC settings in domain registars." },
      { step: "04", title: "Migration & Sync", desc: "Export legacy contacts and emails, import to new workspaces, and sync devices." }
    ],
    timeline: "1 - 2 Weeks",
    deliverables: "Domain Email Accounts, MX Config Reports, Admin Panel Access, Security Policy Guidelines.",
    pricing: "One-time setup fee + Provider Licensing."
  },
  "domain-registration": {
    title: "Domain Registration",
    icon: <Cloud size={40} color="var(--white)" />,
    bg: "var(--black)",
    tagline: "Secure your online identity with our hassle-free domain registration services.",
    desc: "A great brand starts with a great domain name. We handle domain scouting, registrar transfers, DNS configurations, and privacy protection setup to secure your business's primary online asset.",
    features: [
      "Comprehensive domain availability research and acquisition support",
      "WHOIS privacy protection activation to prevent domain spam",
      "DNS routing setup (linking domain to hosting, Shopify, or email)",
      "Auto-renewal configuration and multi-year lease management",
      "Safe domain transfer management from third-party registrars"
    ],
    process: [
      { step: "01", title: "Scouting", desc: "Research target domain availability, extension options (.com, .io, .net), and pricing." },
      { step: "02", title: "Registration", desc: "Purchase and register selected domains under your secure business account." },
      { step: "03", title: "Privacy Lock", desc: "Enable WHOIS privacy protection and domain locking to prevent hijack attempts." },
      { step: "04", title: "DNS Handshake", desc: "Point nameservers to your web hosting, custom emails, and landing pages." }
    ],
    timeline: "1 - 3 Days",
    deliverables: "Registrar Account Credentials, DNS Configurations, Active Domain Certificates.",
    pricing: "Annual domain renewal fee + setup."
  },
  "marketing": {
    title: "Marketing",
    icon: <Palette size={40} color="var(--white)" />,
    bg: "var(--black)",
    tagline: "Grow your business with our comprehensive marketing solutions, including digital campaigns and social media.",
    desc: "Get your product in front of the right audience. We plan, execute, and optimize multi-channel digital campaigns across search, social, and programmatic media, focusing on cost-effective acquisition and growth.",
    features: [
      "PPC Ad Campaigns (Google Ads, Meta Ads, LinkedIn Ads)",
      "Social Media strategy, scheduling, and custom content design",
      "Conversion Rate Optimization (CRO) and custom landing page designs",
      "Data reporting dashboard configurations (Google Analytics, Looker)",
      "Automated email marketing flows and lead nurturing setup"
    ],
    process: [
      { step: "01", title: "Audience Audit", desc: "Define user personas, explore target demographics, and study competitors." },
      { step: "02", title: "Campaign Setup", desc: "Design banners, write compelling copies, configure pixels, and budget schedules." },
      { step: "03", title: "Launch Ads", desc: "Deploy search, display, and social media campaigns live." },
      { step: "04", title: "A/B Testing", desc: "Optimize metrics by testing visual assets, headlines, and target audiences." }
    ],
    timeline: "Ongoing (Monthly Retainers)",
    deliverables: "Interactive Performance Dashboards, Weekly Creative Ad Assets, Growth Reports, Lead Lists.",
    pricing: "Monthly retainer based on media budget."
  },
  "business-solution": {
    title: "Business Solution",
    icon: <Monitor size={40} color="var(--white)" />,
    bg: "var(--black)",
    tagline: "Optimize your operations with our tailored business solutions, including process automation, ERP, and CRM systems.",
    desc: "Say goodbye to redundant work. We design and integrate custom Enterprise Resource Planning (ERP), Customer Relationship Management (CRM) tools, and automate manual processes using API pipelines to increase team efficiency.",
    features: [
      "Custom ERP & CRM software integrations (Salesforce, HubSpot, custom dashboards)",
      "Workflow automations using Zapier, Make, or custom API endpoints",
      "Internal database setup and data syncing between SaaS tools",
      "Automated PDF generation, inventory tracking, and invoice pipelines",
      "Role-based employee portals and task automation boards"
    ],
    process: [
      { step: "01", title: "Workflow Mapping", desc: "Inspect current business steps, locate inefficiencies, and plan system mappings." },
      { step: "02", title: "Architecture", desc: "Select matching SaaS tools or design custom database schemas." },
      { step: "03", title: "Integration", desc: "Connect platforms, write sync scripts, and build visual dashboards." },
      { step: "04", title: "Team Training", desc: "Document system workflows and train employees on tool management." }
    ],
    timeline: "6 - 10 Weeks",
    deliverables: "System Documentation, API Integrations, Staff Training Guides, Admin Dashboards.",
    pricing: "Project milestone billing."
  },
  "logo-branding": {
    title: "Logo & Branding",
    icon: <Palette size={40} color="var(--white)" />,
    bg: "var(--black)",
    tagline: "Build a memorable brand identity with our logo design and branding services.",
    desc: "A visual identity that captures your company's core values. We design premium, scalable vector logos, define cohesive color schemes, specify typography styles, and write complete brand books that establish credibility.",
    features: [
      "Scalable Vector Logo Suite (AI, SVG, PDF, PNG, JPG)",
      "Cohesive color palette options and accessibility guidelines",
      "Corporate typography specifications for headings and body copy",
      "Comprehensive Brand Style Guide documenting logo usage",
      "Collateral designs (business cards, email signatures, letterheads)"
    ],
    process: [
      { step: "01", title: "Brand Audit", desc: "Gather design preferences, analyze brand values, and research sector styles." },
      { step: "02", title: "Moodboards", desc: "Establish visual themes, layout concepts, and color vibes." },
      { step: "03", title: "Design Concepts", desc: "Present three alternative logo drafts and iterate on feedback." },
      { step: "04", title: "Guidelines", desc: "Deliver final vector assets and a complete corporate brand book." }
    ],
    timeline: "3 - 5 Weeks",
    deliverables: "Logo Asset Directory, Brand Guidelines PDF, Business Card Templates, Typography files.",
    pricing: "Fixed package pricing."
  },
  "company-incorporation": {
    title: "Company Incorporation",
    icon: <Database size={40} color="var(--white)" />,
    bg: "var(--black)",
    tagline: "Start your business journey with our company incorporation services, ensuring legal compliance and smooth registration.",
    desc: "Launching a business shouldn't involve drowning in paperwork. We handle complete corporate registration, legal structuring, employer identification numbers (EIN), and state compliance setup so you can focus on building products.",
    features: [
      "State-level LLC or C-Corp formation management",
      "Articles of Organization / Incorporation filing support",
      "EIN (Employer Identification Number) application filing",
      "Registered Agent assignment and corporate compliance setup",
      "Standard Operating Agreement and Bylaws templates creation"
    ],
    process: [
      { step: "01", title: "Name Search", desc: "Check business name availability in state corporate registers." },
      { step: "02", title: "Document Filing", desc: "Draft and submit corporate structure forms to state registry officials." },
      { step: "03", title: "Tax ID Request", desc: "File requests for EIN with the IRS to allow corporate banking." },
      { step: "04", title: "Corporate Kit", desc: "Deliver final incorporation certificates, resolutions, and bylaws." }
    ],
    timeline: "2 - 4 Weeks (varies by state)",
    deliverables: "Incorporation Certificates, State Stamp Approvals, EIN Notification Letters, Bylaws Documentation.",
    pricing: "Fixed legal service fee + State filing fees."
  },
  "seo": {
    title: "SEO",
    icon: <Database size={40} color="var(--white)" />,
    bg: "var(--black)",
    tagline: "Boost your online visibility and rankings with our expert SEO services, ensuring legal compliance and improved search performance.",
    desc: "Rank where it matters. We optimize your website's technical health, refine copy keywords, and deploy structured schemas to capture organic visibility, drive unpaid clicks, and establish domain authority.",
    features: [
      "In-depth keyword competitiveness research and traffic modeling",
      "On-page optimization (headings, meta tags, URL structure)",
      "Technical SEO audits (robots.txt, sitemaps, load times, mobile rendering)",
      "JSON-LD Schema Markup configuration for rich snippet results",
      "Search Console setup, tracking integrations, and monthly ranking reports"
    ],
    process: [
      { step: "01", title: "SEO Audit", desc: "Inspect current search presence, index errors, and keyword rankings." },
      { step: "02", title: "On-Page Tuning", desc: "Rewrite descriptions, optimize titles, and configure image alt attributes." },
      { step: "03", title: "Technical Fixes", desc: "Improve site load speeds, configure sitemaps, and resolve redirect loops." },
      { step: "04", title: "Reporting", desc: "Monitor keyword ranking shifts and compile traffic analytics profiles." }
    ],
    timeline: "Ongoing (Monthly retainer recommendations)",
    deliverables: "Keyword Strategy Maps, On-Page SEO Overhauls, Monthly Position Audits, Content Roadmaps.",
    pricing: "Retainer packages."
  },
  "market-research": {
    title: "Market Research",
    icon: <Globe size={40} color="var(--white)" />,
    bg: "var(--black)",
    tagline: "Make informed decisions with our market research services, providing actionable insights and data-driven strategies.",
    desc: "Don't build on assumptions. We gather, process, and analyze consumer trends, demographic patterns, and competitor intelligence to help your business locate opportunities and structure marketing plans.",
    features: [
      "Target demographic modeling and consumer behavior analysis",
      "Competitive intelligence reports mapping market shares",
      "Survey drafting, deployment management, and response modeling",
      "Industry trend forecasting and strategic SWAT matrix profiles",
      "Product-market fit validations and pricing elasticity models"
    ],
    process: [
      { step: "01", title: "Scope Plan", desc: "Define key research goals, select target demographics, and set variables." },
      { step: "02", title: "Data Gathering", desc: "Administer surveys, scrape public market filings, and capture metrics." },
      { step: "03", title: "Analysis", desc: "Cross-reference databases, model correlations, and identify insights." },
      { step: "04", title: "Report Out", desc: "Deliver visually intuitive summaries, competitor grids, and action items." }
    ],
    timeline: "3 - 6 Weeks",
    deliverables: "Comprehensive Industry Reports, Target Audience Personas, Competitive Feature Grids, Survey Data Datasets.",
    pricing: "Project scope billing."
  },
  "finance": {
    title: "Finance",
    icon: <Globe size={40} color="var(--white)" />,
    bg: "var(--black)",
    tagline: "Comprehensive financial services including business loans, funding solutions, and financial consulting to support your growth.",
    desc: "Build a stable capital runway. We help startups and SMBs organize corporate structures, draft investor pitch decks, set up financial modeling forecasts, and connect with capital partners to secure funding.",
    features: [
      "Financial projections modeling (P&L, cash flow forecasting, unit economics)",
      "Investor pitch deck layout design and narrative structuring",
      "Corporate valuation estimations and funding option audits",
      "Business loan documentation assistance and balance optimizations",
      "Fractional CFO consultation and capital allocation strategies"
    ],
    process: [
      { step: "01", title: "Financial Audit", desc: "Review current income statements, balance sheets, and runway length." },
      { step: "02", title: "Forecast Modeling", desc: "Create interactive 3-year projection spreadsheets and capital budgets." },
      { step: "03", title: "Deck Refinement", desc: "Translate financial spreadsheets into high-impact presentation slides." },
      { step: "04", title: "Funder Matching", desc: "Review loan requirements or coordinate investor outreach strategies." }
    ],
    timeline: "4 - 8 Weeks",
    deliverables: "Financial Forecast Excel Sheets, Pitch Deck Presentations, Funding Strategy Manuals.",
    pricing: "Hourly advisory fee or project-based milestones."
  }
};

export default function ServiceDetailPage({ serviceId, onBackToHome, onBackToServices }) {
  const detail = serviceDetailsData[serviceId];

  // Safe fallback if serviceId is invalid
  if (!detail) {
    return (
      <div style={{ padding: '120px 0', minHeight: '80vh', textAlign: 'center' }}>
        <div className="container">
          <h2>Service not found.</h2>
          <button className="neo-btn" onClick={onBackToHome} style={{ marginTop: '20px' }}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '120px 0 80px 0', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Navigation Breadcrumbs */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <button onClick={onBackToHome} className="neo-btn" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            <ArrowLeft size={16} /> Home
          </button>
          <button onClick={onBackToServices} className="neo-btn" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            All Services Catalog
          </button>
        </div>

        {/* Hero Banner Grid */}
        <div className="neo-card reveal-on-scroll reveal-up" style={{ 
          backgroundColor: 'var(--bg-card)', padding: '48px', marginBottom: '48px',
          boxShadow: '10px 10px 0px var(--border)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="neo-border-thick" style={{
                width: '72px', height: '72px', borderRadius: '20px', backgroundColor: detail.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {detail.icon}
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-1.5px', textTransform: 'uppercase' }}>
                {detail.title}
              </h1>
              <p style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--heading)', lineHeight: 1.4 }}>
                {detail.tagline}
              </p>
              <p style={{ color: '#444444', lineHeight: 1.6 }}>
                {detail.desc}
              </p>
            </div>

            {/* Right Information Box */}
            <div className="neo-border-thick" style={{ 
              padding: '32px', borderRadius: '16px', backgroundColor: 'var(--black)', color: 'var(--white)',
              display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '6px 6px 0px var(--border)'
            }}>
              <h3 style={{ fontSize: '1.4rem', borderBottom: '2px solid var(--border)', paddingBottom: '8px', color: 'var(--white)' }}>Project Metrics</h3>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: '#AAAAAA' }}>Timeline</span>
                <p style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--white)' }}>{detail.timeline}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: '#AAAAAA' }}>Pricing Model</span>
                <p style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--white)' }}>{detail.pricing}</p>
              </div>
              <a 
                href="#/contact" 
                className="neo-btn neo-btn-dark-pill"
                style={{ marginTop: '8px' }}
              >
                Inquire Service <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>

        {/* Double Column details */}
        <div className="grid-2" style={{ marginBottom: '60px', alignItems: 'stretch' }}>
          
          {/* Key Deliverables & Features */}
          <div className="neo-card reveal-on-scroll reveal-left" style={{ padding: '36px', backgroundColor: 'var(--bg-card)' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', letterSpacing: '-0.5px' }}>Key Capabilities</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none' }}>
              {detail.features.map((feat, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '1rem', lineHeight: 1.5 }}>
                  <CheckCircle size={20} color="var(--black)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <h3 style={{ fontSize: '1.2rem', marginTop: '32px', marginBottom: '12px', borderTop: '2px solid #EEE', paddingTop: '20px' }}>What You Get:</h3>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6 }}>
              {detail.deliverables}
            </p>
          </div>

          {/* Operational Roadmap */}
          <div className="neo-card reveal-on-scroll reveal-right" style={{ padding: '36px', backgroundColor: 'var(--black)', color: 'var(--white)' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', letterSpacing: '-0.5px', color: 'var(--white)' }}>Execution Roadmap</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {detail.process.map((proc, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div className="neo-border-thick" style={{
                    width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--bg-card)', color: 'var(--heading)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0
                  }}>
                    {proc.step}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '4px', color: 'var(--white)' }}>{proc.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: '#EEEEEE', lineHeight: 1.4 }}>{proc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Back buttons bottom banner */}
        <div className="reveal-on-scroll reveal-scale" style={{ textAlign: 'center', marginTop: '40px' }}>
          <button onClick={onBackToServices} className="neo-btn neo-btn-purple">
            Explore Other Services <Star size={16} fill="var(--heading)" />
          </button>
        </div>

      </div>
    </div>
  );
}
