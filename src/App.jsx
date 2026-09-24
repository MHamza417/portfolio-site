import { useState, useEffect } from 'react';
import { 
  FaGithub, FaLinkedin, FaTwitter, FaAws, FaDocker, 
  FaJenkins, FaReact, FaLinux, FaPython, 
  FaChevronDown, FaRocket, FaCode, FaServer, FaCloud, 
  FaTerminal, FaDatabase, FaTools, FaShieldAlt, FaDownload, 
  FaEye, FaTimes, FaCheckCircle, FaExternalLinkAlt, FaFilePdf,
  FaGraduationCap, FaCertificate, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaWhatsapp, FaNetworkWired, FaCopy, FaCheck
} from 'react-icons/fa';
import { 
  SiKubernetes, SiTerraform, SiAnsible, SiPrometheus, 
  SiGrafana, SiAmazonaws, SiDocker, SiJenkins, 
  SiGithubactions, SiNginx, SiMongodb, SiMysql, 
  SiHelm, SiGnubash 
} from 'react-icons/si';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('all');
  const [copiedContact, setCopiedContact] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const resumePdfUrl = './Muhammad_Hamza_DevOps_Resume.pdf';

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdfUrl;
    link.download = 'Muhammad_Hamza_DevOps_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedContact(type);
    setTimeout(() => setCopiedContact(''), 2500);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const stats = [
    { label: "Deployment Speedup", value: "40%", detail: "via CI/CD Caching & Pipelines", icon: <FaRocket /> },
    { label: "Image Size Reduction", value: "45%", detail: "Docker Multi-Stage Builds", icon: <FaDocker /> },
    { label: "Production Uptime", value: "99.9%", detail: "Kubernetes & AWS Infra", icon: <FaServer /> },
    { label: "Security Triage Saved", value: "60%", detail: "Automated DAST & SAST Scans", icon: <FaShieldAlt /> }
  ];

  const skillCategories = [
    {
      id: "containers",
      title: "Containers & Orchestration",
      icon: <SiKubernetes />,
      color: "#326CE5",
      skills: [
        { name: "Kubernetes (K8s)", level: 90, icon: <SiKubernetes />, color: "#326CE5", desc: "Pods, Deployments, Services, Ingress, Autoscaling" },
        { name: "Helm Charts", level: 85, icon: <SiHelm />, color: "#0F1689", desc: "Package management & templated releases" },
        { name: "Docker & Docker Compose", level: 95, icon: <FaDocker />, color: "#2496ED", desc: "Multi-stage builds, rootless containers, caching" },
        { name: "AWS EKS", level: 88, icon: <FaAws />, color: "#FF9900", desc: "Managed Kubernetes clusters & node groups" },
        { name: "Artifact Management", level: 85, icon: <FaServer />, color: "#00b4d8", desc: "ECR, Docker Hub, image tagging & lifecycle" }
      ]
    },
    {
      id: "cicd",
      title: "CI/CD & Automation",
      icon: <SiJenkins />,
      color: "#D24939",
      skills: [
        { name: "Jenkins & Jenkinsfile", level: 90, icon: <FaJenkins />, color: "#D24939", desc: "Declarative/Scripted pipelines & shared libraries" },
        { name: "GitHub Actions", level: 92, icon: <SiGithubactions />, color: "#2088FF", desc: "Workflows, custom actions & secret management" },
        { name: "Terraform (IaC)", level: 85, icon: <SiTerraform />, color: "#7B42BC", desc: "Modules, state management, automated provisioning" },
        { name: "AWS CloudFormation", level: 75, icon: <FaCloud />, color: "#FF9900", desc: "Infrastructure templating & drift detection" },
        { name: "Ansible", level: 80, icon: <SiAnsible />, color: "#EE0000", desc: "Configuration management & server hardening" }
      ]
    },
    {
      id: "cloud",
      title: "Cloud Infrastructure (AWS)",
      icon: <FaAws />,
      color: "#FF9900",
      skills: [
        { name: "Amazon EC2 & VPC", level: 90, icon: <FaAws />, color: "#FF9900", desc: "Public/Private subnets, NAT Gateways & Security Groups" },
        { name: "AWS S3 & Storage", level: 90, icon: <FaAws />, color: "#569A31", desc: "Bucket policies, versioning, lifecycle rules" },
        { name: "AWS IAM & Security", level: 92, icon: <FaShieldAlt />, color: "#E05243", desc: "Least Privilege, custom roles & MFA policies" },
        { name: "CloudWatch & Route 53", level: 85, icon: <FaServer />, color: "#FF9900", desc: "DNS management, health checks & metric alarms" }
      ]
    },
    {
      id: "devsecops",
      title: "DevSecOps & Security",
      icon: <FaShieldAlt />,
      color: "#10B981",
      skills: [
        { name: "OWASP ZAP (DAST)", level: 85, icon: <FaShieldAlt />, color: "#10B981", desc: "Automated dynamic web application security scanning" },
        { name: "SQLMap (SAST)", level: 82, icon: <FaShieldAlt />, color: "#059669", desc: "SQL injection & database vulnerability auditing" },
        { name: "Dependency & Secret Scanning", level: 88, icon: <FaShieldAlt />, color: "#34D399", desc: "Trivy, GitGuardian, GitHub secret prevention" },
        { name: "Linux Server Hardening", level: 88, icon: <FaLinux />, color: "#FCC624", desc: "UFW, IPTables, SSH key auth, Fail2ban" }
      ]
    },
    {
      id: "monitoring",
      title: "Monitoring & Observability",
      icon: <SiGrafana />,
      color: "#F46800",
      skills: [
        { name: "Prometheus", level: 88, icon: <SiPrometheus />, color: "#E6522C", desc: "Target scraping, custom PromQL metrics & exporters" },
        { name: "Grafana", level: 90, icon: <SiGrafana />, color: "#F46800", desc: "Visual interactive dashboards, alerts & data sources" },
        { name: "AlertManager", level: 82, icon: <FaServer />, color: "#E6522C", desc: "Slack/email incident routing & silence policies" },
        { name: "AWS CloudWatch Logs", level: 85, icon: <FaAws />, color: "#FF9900", desc: "Log groups, metric filters & SNS notifications" }
      ]
    },
    {
      id: "os",
      title: "OS & Networking",
      icon: <FaLinux />,
      color: "#FCC624",
      skills: [
        { name: "Linux (Ubuntu / CentOS)", level: 92, icon: <FaLinux />, color: "#FCC624", desc: "System administration, systemd, memory/CPU tuning" },
        { name: "Bash & Shell Scripting", level: 90, icon: <SiGnubash />, color: "#4EAA25", desc: "Cron automation, deployment scripts & tooling" },
        { name: "TCP/IP, DNS & SSH", level: 88, icon: <FaNetworkWired />, color: "#60A5FA", desc: "Network routing, port forwarding, secure tunneling" },
        { name: "Firewalls (UFW / IPTables)", level: 85, icon: <FaShieldAlt />, color: "#F87171", desc: "Inbound/outbound rule sets & packet filtering" }
      ]
    },
    {
      id: "tools",
      title: "Other Tools & Backend",
      icon: <FaTools />,
      color: "#8B5CF6",
      skills: [
        { name: "Git & GitFlow", level: 92, icon: <FaCode />, color: "#F05032", desc: "Branching strategies, PR automation, semantic releases" },
        { name: "Nginx & Gunicorn", level: 88, icon: <SiNginx />, color: "#009639", desc: "Reverse proxy, load balancing, SSL/TLS termination" },
        { name: "Databases (MySQL / MongoDB)", level: 80, icon: <SiMysql />, color: "#4479A1", desc: "Backups, replication, containerized DB instances" },
        { name: "Python Scripting & REST APIs", level: 82, icon: <FaPython />, color: "#3776AB", desc: "Automation scripts, webhook receivers & integration" }
      ]
    }
  ];

  const filteredSkillCategories = selectedSkillCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === selectedSkillCategory);

  const projects = [
    {
      title: "Microservices & Containerized React App Orchestration",
      subtitle: "High-Performance Containerized Microservices Platform",
      description: "Re-architected a monolithic React.js application into scalable containerized microservices using Docker multi-stage builds. Deployed to AWS EKS using Helm charts with zero-downtime rolling updates, Horizontal Pod Autoscaling (HPA), and Nginx reverse proxy.",
      metrics: [
        "45% smaller Docker image sizes via multi-stage builds",
        "Automated rolling updates & service discovery on AWS EKS",
        "30% improved content delivery caching via tuned Nginx"
      ],
      tech: ["Docker", "Multi-Stage Builds", "Kubernetes", "AWS EKS", "Helm", "Nginx", "React"],
      image: "https://images.unsplash.com/photo-1599508704512-2f292ef7c6c1?w=800&q=80",
      github: "https://github.com/MHamza417",
      gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)"
    },
    {
      title: "CI/CD Pipeline Automation with Terraform IaC",
      subtitle: "Repeatable Cloud Infrastructure & Continuous Delivery",
      description: "Engineered robust end-to-end CI/CD pipelines using Jenkins declarative pipelines and GitHub Actions YAML. Fully automated AWS staging infrastructure creation through modular Terraform IaC while enforcing strict secret management.",
      metrics: [
        "40% decrease in deployment release cycle times",
        "Saved 8+ engineering hours per week with build caching",
        "100% credential encryption via Jenkins & GitHub Secrets"
      ],
      tech: ["Jenkins", "GitHub Actions", "Terraform IaC", "AWS EC2", "Docker", "Secret Management"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
      github: "https://github.com/MHamza417",
      gradient: "linear-gradient(135deg, #4c1d95 0%, #8b5cf6 100%)"
    },
    {
      title: "AI-Based DevSecOps Vulnerability Scanner",
      subtitle: "Automated Pipeline Security Auditing with Google Gemini AI",
      description: "Architected a cloud-native DevSecOps vulnerability scanner triggered automatically on Git pull requests and commits. Orchestrated DAST (OWASP ZAP) and SAST (SQLMap) in isolated Docker containers, leveraging Google Gemini AI for smart log analysis.",
      metrics: [
        "60% reduction in manual application security audit time",
        "Automated vulnerability categorization & remediation reports",
        "Saved 15+ engineering triage hours weekly with AI summarization"
      ],
      tech: ["GitHub Actions", "OWASP ZAP", "SQLMap", "Docker", "Grafana", "AWS", "Gemini AI"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      github: "https://github.com/MHamza417",
      gradient: "linear-gradient(135deg, #064e3b 0%, #10b981 100%)"
    }
  ];

  const experience = [
    {
      role: "DevOps & Cloud Engineer",
      company: "Freelance / Contract",
      location: "Lahore, Pakistan (Self-Employed)",
      period: "Jan 2023 – Present",
      type: "Contract / Freelance",
      highlights: [
        "Containerized client microservices with Docker multi-stage builds and deployed on Kubernetes (AWS EKS) with Helm charts, cutting production image sizes by 45% and managing rolling updates and autoscaling.",
        "Built automated CI/CD pipelines (Jenkins, GitHub Actions) with dependency caching — reduced release cycle time by 40%, saving 8+ engineering hours/week.",
        "Provisioned scalable AWS infrastructure (EC2, VPC, IAM, S3, EKS) using Terraform IaC for repeatable, version-controlled environment creation.",
        "Integrated OWASP ZAP & SQLMap DAST/SAST scans into CI/CD pipelines — reduced manual security audit time by 60%."
      ],
      color: "#3b82f6",
      icon: <FaCloud />
    },
    {
      role: "DevOps Intern",
      company: "DaFi Labs / EmpRadar.ai / EmraSkills",
      location: "Remote Program",
      period: "Jul 2026 – Aug 2026",
      type: "Internship",
      highlights: [
        "Completed a remote DevOps Internship Program, gaining hands-on exposure to cloud deployment practices with AWS EC2, AWS Amplify, and Vercel.",
        "Deployed and secured web applications on Linux servers using Nginx reverse proxy, PM2 process management, and SSL/TLS certificates via Certbot.",
        "Collaborated on Git/GitHub-based CI/CD and AI-assisted deployment workflows."
      ],
      color: "#8b5cf6",
      icon: <FaRocket />
    },
    {
      role: "DevOps Intern",
      company: "Nishat Mills Limited (Dyeing & Finishing Plant)",
      location: "Lahore, Pakistan",
      period: "Jul 2026 – Aug 2026",
      type: "On-site Internship",
      highlights: [
        "Completed a 1-month on-site DevOps internship in the IT department of a large-scale manufacturing enterprise.",
        "Supported industrial IT infrastructure, Linux system administration, network troubleshooting, and deployment operations within a live production environment."
      ],
      color: "#10b981",
      icon: <FaServer />
    },
    {
      role: "Cloud Infrastructure Intern",
      company: "University of Lahore — Academic Project Work",
      location: "Lahore, Pakistan",
      period: "Aug 2023 – Dec 2023",
      type: "Academic Internship",
      highlights: [
        "Architected secure multi-tier AWS VPC with public/private subnets, NAT Gateway, Internet Gateway, and Route Tables per AWS Well-Architected Framework.",
        "Applied Principle of Least Privilege using custom IAM roles, MFA enforcement, and permission boundaries across all AWS cloud resources."
      ],
      color: "#f59e0b",
      icon: <FaShieldAlt />
    }
  ];

  const certifications = [
    {
      name: "Docker & Kubernetes Certification",
      issuer: "Hands-on Containerization & K8s Orchestration",
      year: "2024",
      status: "Verified",
      badge: "Production Ready",
      icon: <SiKubernetes />,
      color: "#326CE5"
    },
    {
      name: "GitHub Actions & CI/CD Pipeline Engineering",
      issuer: "Automated Workflows & Deployment Security",
      year: "2024",
      status: "Verified",
      badge: "Pipeline Specialist",
      icon: <SiGithubactions />,
      color: "#2088FF"
    },
    {
      name: "Linux System Administration",
      issuer: "Linux Server Hardening, Bash & Networking",
      year: "2023",
      status: "Verified",
      badge: "SysAdmin",
      icon: <FaLinux />,
      color: "#FCC624"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      year: "2025 - Present",
      status: "In Progress",
      badge: "Certification Track",
      icon: <FaAws />,
      color: "#FF9900"
    }
  ];

  useEffect(() => {
    // Scroll progress indicator
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Background Particles / Glowing Gradients */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${(i * 7 + 5) % 100}%`,
            top: `${(i * 13 + 10) % 100}%`,
            animationDelay: `${(i % 5)}s`,
            animationDuration: `${4 + (i % 4)}s`
          }}></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
            <span className="logo-badge">&lt;/&gt;</span>
            <span className="logo-text">HAMZA</span>
            <span className="logo-dot">.devops</span>
          </div>
          
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => { setActiveTab('home'); setMenuOpen(false); }} className={activeTab === 'home' ? 'active' : ''}>
              Home
            </a>
            <a href="#about" onClick={() => { setActiveTab('about'); setMenuOpen(false); }} className={activeTab === 'about' ? 'active' : ''}>
              About
            </a>
            <a href="#skills" onClick={() => { setActiveTab('skills'); setMenuOpen(false); }} className={activeTab === 'skills' ? 'active' : ''}>
              Skills
            </a>
            <a href="#projects" onClick={() => { setActiveTab('projects'); setMenuOpen(false); }} className={activeTab === 'projects' ? 'active' : ''}>
              Projects
            </a>
            <a href="#experience" onClick={() => { setActiveTab('experience'); setMenuOpen(false); }} className={activeTab === 'experience' ? 'active' : ''}>
              Experience
            </a>
            <a href="#certifications" onClick={() => { setActiveTab('certifications'); setMenuOpen(false); }} className={activeTab === 'certifications' ? 'active' : ''}>
              Certifications
            </a>
            <a href="#contact" onClick={() => { setActiveTab('contact'); setMenuOpen(false); }} className={activeTab === 'contact' ? 'active' : ''}>
              Contact
            </a>
          </div>

          <div className="nav-right">
            <button 
              className="theme-toggle" 
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button 
              className="cv-preview-nav-btn"
              onClick={() => setShowResumeModal(true)}
              title="Preview CV"
            >
              <FaEye /> <span>Preview CV</span>
            </button>

            <button className="resume-btn" onClick={downloadResume}>
              <FaDownload className="btn-dl-icon" />
              <span>Download CV</span>
              <div className="resume-btn-hover"></div>
            </button>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
              <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
              <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-pulse"></span>
              <span className="badge-text">Available for DevOps & Cloud Roles • Lahore, PK / Remote</span>
            </div>
            
            <h1 className="hero-title">
              <span className="hero-greeting">Hi, I'm</span>
              <span className="hero-name highlight">Muhammad Hamza</span>
            </h1>

            <h2 className="hero-subtitle">
              <span className="terminal-prompt">$</span> DevOps & Cloud Engineer
            </h2>
            
            <p className="hero-description">
              Hands-on <strong>DevOps Engineer</strong> specializing in containerized workloads on <strong>Kubernetes (AWS EKS)</strong> and <strong>Docker</strong>, automated <strong>CI/CD pipelines (Jenkins, GitHub Actions)</strong>, and repeatable cloud infrastructure with <strong>Terraform (IaC)</strong>. Dedicated to 99.9% uptime, rapid deployments, and disciplined DevSecOps automation.
            </p>
            
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon-wrapper">
                    {stat.icon}
                  </div>
                  <div className="stat-content">
                    <div className="stat-val">{stat.value}</div>
                    <div className="stat-title">{stat.label}</div>
                    <div className="stat-detail">{stat.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-buttons">
              <button onClick={downloadResume} className="btn-primary">
                <FaDownload />
                <span>Download CV (PDF)</span>
                <div className="btn-hover-effect"></div>
              </button>
              <button onClick={() => setShowResumeModal(true)} className="btn-secondary">
                <FaEye />
                <span>Preview CV</span>
              </button>
              <a href="#projects" className="btn-outline">
                <span>View Projects</span>
                <FaChevronDown />
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com/MHamza417" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                <FaGithub />
                <span className="social-tooltip">github.com/MHamza417</span>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-hamza-1000a7391" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <FaLinkedin />
                <span className="social-tooltip">LinkedIn Profile</span>
              </a>
              <a href="mailto:hamzadevelopers35@gmail.com" className="social-icon" title="Email">
                <FaEnvelope />
                <span className="social-tooltip">hamzadevelopers35@gmail.com</span>
              </a>
              <a href="https://wa.me/923094844417" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp">
                <FaWhatsapp />
                <span className="social-tooltip">+92 309 4844417</span>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <div className="image-frame">
                <img 
                  src="./Images/Image.jpg"
                  alt="Muhammad Hamza - DevOps Engineer" 
                  className="profile-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231e3a8a'/%3E%3Cstop offset='100%25' stop-color='%233b82f6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='45%25' font-family='sans-serif' font-size='46' font-weight='bold' fill='white' text-anchor='middle'%3EMH%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='sans-serif' font-size='16' fill='%2393c5fd' text-anchor='middle'%3EDevOps Engineer%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Floating Tech Badges */}
              <div className="floating-tech">
                <div className="tech-icon k8s" title="Kubernetes">
                  <SiKubernetes />
                </div>
                <div className="tech-icon docker" title="Docker">
                  <FaDocker />
                </div>
                <div className="tech-icon aws" title="AWS">
                  <FaAws />
                </div>
                <div className="tech-icon terraform" title="Terraform">
                  <SiTerraform />
                </div>
                <div className="tech-icon jenkins" title="Jenkins">
                  <FaJenkins />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">About Me</div>
            <h2 className="section-title">Reliable Infrastructure, <span className="title-highlight">Disciplined Automation</span></h2>
            <p className="section-subtitle">Bridging development and cloud operations with measurable business impact</p>
          </div>

          <div className="about-summary-box">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">hamza@devops-node: ~/profile/summary.sh</span>
            </div>
            <div className="terminal-body">
              <p>
                <span className="code-accent">&gt;</span> DevOps Engineer with hands-on experience deploying and managing containerized workloads on <strong>Kubernetes (AWS EKS)</strong> and <strong>Docker</strong>, building CI/CD pipelines with <strong>Jenkins</strong> and <strong>GitHub Actions</strong>, and provisioning secure AWS cloud infrastructure with <strong>Terraform</strong>.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                <span className="code-accent">&gt;</span> Comfortable owning the full lifecycle from <strong>Infrastructure-as-Code</strong> and Helm-based deployments through 24/7 monitoring, log aggregation, and DevSecOps vulnerability scanning. Delivering real metrics: <strong>40% faster deployments</strong>, <strong>45% smaller production images</strong>, and <strong>99.9% server uptime</strong>.
              </p>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="about-card-inner">
                <div className="about-icon"><FaCloud /></div>
                <h3>Cloud Architecture (AWS)</h3>
                <p>Designing secure multi-tier VPCs, private/public subnets, NAT gateways, and IAM Least Privilege policies adhering to AWS Well-Architected Framework.</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-inner">
                <div className="about-icon"><SiKubernetes /></div>
                <h3>Containers & Orchestration</h3>
                <p>Docker multi-stage builds, rootless container security, Kubernetes deployments on AWS EKS, Helm chart packaging, rolling updates, and HPA autoscaling.</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-inner">
                <div className="about-icon"><FaShieldAlt /></div>
                <h3>DevSecOps & Observability</h3>
                <p>Shifting security left via OWASP ZAP (DAST), SQLMap (SAST), Trivy container scanning, and real-time observability dashboards with Prometheus and Grafana.</p>
              </div>
            </div>
          </div>

          <div className="about-details">
            <div className="about-info">
              <h3>Personal Details & Contact</h3>
              <div className="info-grid">
                <div className="info-item">
                  <div className="info-icon"><FaMapMarkerAlt /></div>
                  <div className="info-content">
                    <span className="info-label">Location:</span>
                    <span className="info-value">Lahore, Pakistan</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><FaEnvelope /></div>
                  <div className="info-content">
                    <span className="info-label">Email:</span>
                    <a href="mailto:hamzadevelopers35@gmail.com" className="info-link">hamzadevelopers35@gmail.com</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><FaPhone /></div>
                  <div className="info-content">
                    <span className="info-label">Phone:</span>
                    <a href="tel:+923094844417" className="info-link">+92 309 4844417</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><FaGraduationCap /></div>
                  <div className="info-content">
                    <span className="info-label">Education:</span>
                    <span className="info-value">BS Information Engineering Technology (UOL)</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><FaCheckCircle /></div>
                  <div className="info-content">
                    <span className="info-label">Languages:</span>
                    <span className="info-value">Urdu (Native), English (Professional)</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><FaRocket /></div>
                  <div className="info-content">
                    <span className="info-label">Status:</span>
                    <span className="info-value highlight">Open to DevOps / Cloud Engineering Roles</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-timeline">
              <h3>Soft Skills & Strengths</h3>
              <div className="soft-skills-grid">
                {[
                  { name: "Problem Solving", desc: "Root cause analysis, debugging complex network & container issues" },
                  { name: "Attention to Detail", desc: "Strict IaC linting, secret safety, and zero-drift configurations" },
                  { name: "Fast Learner", desc: "Rapidly adapting to cutting-edge cloud tooling & AI integrations" },
                  { name: "Team Collaboration", desc: "Agile pair programming, GitFlow hygiene, cross-functional support" }
                ].map((item, idx) => (
                  <div key={idx} className="soft-skill-pill">
                    <span className="pill-check"><FaCheck /></span>
                    <div>
                      <strong>{item.name}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cv-download-cta">
                <div className="cta-text">
                  <strong>Need the complete resume?</strong>
                  <p>ATS-ready format with full job metrics and verified certifications.</p>
                </div>
                <button onClick={downloadResume} className="btn-primary btn-sm">
                  <FaDownload /> Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Technical Stack</div>
            <h2 className="section-title">DevOps & Cloud <span className="title-highlight">Skills</span></h2>
            <p className="section-subtitle">Enterprise tools and technologies I use to architect, automate, and monitor systems</p>
          </div>

          {/* Skill Filter Tabs */}
          <div className="skill-tabs">
            <button 
              className={`skill-tab ${selectedSkillCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedSkillCategory('all')}
            >
              All Skills ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
            </button>
            {skillCategories.map(cat => (
              <button 
                key={cat.id}
                className={`skill-tab ${selectedSkillCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedSkillCategory(cat.id)}
              >
                {cat.icon} <span>{cat.title}</span>
              </button>
            ))}
          </div>

          <div className="skills-container">
            {filteredSkillCategories.map((category) => (
              <div key={category.id} className="skill-category-card">
                <div className="category-header">
                  <span className="category-icon" style={{ color: category.color }}>{category.icon}</span>
                  <h3>{category.title}</h3>
                </div>
                <div className="skills-grid">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <div className="skill-left">
                          <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
                          <div>
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-desc">{skill.desc}</span>
                          </div>
                        </div>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ 
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${skill.color}, #8b5cf6)`
                          }}
                        >
                          <div className="skill-progress-glow"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Key Projects</div>
            <h2 className="section-title">Production-Grade <span className="title-highlight">Implementations</span></h2>
            <p className="section-subtitle">Real-world automation pipelines, cloud architecture, and security tooling</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image" style={{ background: project.gradient }}>
                  <div className="project-image-overlay">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.opacity = '0';
                      }}
                    />
                  </div>
                  <div className="project-badge-tag">Key Project #{index + 1}</div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <div className="project-subtitle-tag">{project.subtitle}</div>
                  <p>{project.description}</p>
                  
                  <div className="project-metrics-box">
                    <div className="metric-header">Measurable Impact:</div>
                    <ul>
                      {project.metrics.map((m, mi) => (
                        <li key={mi}>
                          <FaCheckCircle className="metric-bullet-icon" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech-pills">
                    {project.tech.map((t, ti) => (
                      <span key={ti} className="tech-pill">{t}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-action-btn">
                      <FaGithub /> <span>View Repository</span>
                    </a>
                    <button onClick={downloadResume} className="project-action-btn secondary">
                      <FaFilePdf /> <span>CV Case Study</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Track Record</div>
            <h2 className="section-title">Work <span className="title-highlight">Experience</span></h2>
            <p className="section-subtitle">Real-world deployments, industrial internships, and cloud management</p>
          </div>

          <div className="experience-timeline">
            {experience.map((exp, index) => (
              <div key={index} className="experience-timeline-card">
                <div className="timeline-marker" style={{ borderColor: exp.color }}>
                  <div className="timeline-marker-inner" style={{ background: exp.color }}>
                    {exp.icon}
                  </div>
                </div>
                <div className="experience-card-body">
                  <div className="experience-header-meta">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <h4 className="exp-company">{exp.company}</h4>
                      <span className="exp-location"><FaMapMarkerAlt /> {exp.location}</span>
                    </div>
                    <div className="exp-badge-date">
                      <span className="exp-period">{exp.period}</span>
                      <span className="exp-type-badge">{exp.type}</span>
                    </div>
                  </div>

                  <div className="experience-highlights">
                    <ul>
                      {exp.highlights.map((item, hi) => (
                        <li key={hi}>
                          <span className="bullet-indicator">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Education Section */}
      <section id="certifications" className="section cert-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Qualifications</div>
            <h2 className="section-title">Certifications & <span className="title-highlight">Education</span></h2>
            <p className="section-subtitle">Formal training, continuous learning, and academic background</p>
          </div>

          <div className="cert-edu-grid">
            {/* Certifications Column */}
            <div className="cert-column">
              <h3 className="column-title">
                <FaCertificate className="title-icon" /> Professional Certifications
              </h3>
              <div className="cert-list">
                {certifications.map((cert, index) => (
                  <div key={index} className="cert-card">
                    <div className="cert-icon-box" style={{ color: cert.color }}>
                      {cert.icon}
                    </div>
                    <div className="cert-info">
                      <h4>{cert.name}</h4>
                      <p>{cert.issuer}</p>
                      <div className="cert-meta">
                        <span className="cert-year">{cert.year}</span>
                        <span className="cert-badge" style={{ background: cert.status === 'Verified' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)', color: cert.status === 'Verified' ? '#10b981' : '#f59e0b' }}>
                          {cert.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div className="edu-column">
              <h3 className="column-title">
                <FaGraduationCap className="title-icon" /> Academic Education
              </h3>
              <div className="edu-card">
                <div className="edu-icon-badge">🎓</div>
                <div className="edu-details">
                  <h4>BS Information Engineering Technology</h4>
                  <h5>The University of Lahore (UOL)</h5>
                  <span className="edu-period">2023 – 2027 (Expected)</span>
                  <p>
                    Core coursework focusing on computer networking, distributed systems, operating system internals, software engineering, and cloud systems infrastructure.
                  </p>
                  <div className="edu-tags">
                    <span>Operating Systems</span>
                    <span>Computer Networks</span>
                    <span>Database Systems</span>
                    <span>Cloud Computing</span>
                  </div>
                </div>
              </div>

              <div className="cv-box-widget">
                <div className="cv-box-content">
                  <div className="cv-box-icon"><FaFilePdf /></div>
                  <div>
                    <h4>Official Curriculum Vitae</h4>
                    <p>Updated September 2026 • Muhammad Hamza</p>
                  </div>
                </div>
                <div className="cv-box-actions">
                  <button onClick={() => setShowResumeModal(true)} className="btn-secondary btn-sm">
                    <FaEye /> Preview
                  </button>
                  <button onClick={downloadResume} className="btn-primary btn-sm">
                    <FaDownload /> Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Get In Touch</div>
            <h2 className="section-title">Let's Connect & <span className="title-highlight">Collaborate</span></h2>
            <p className="section-subtitle">Interested in hiring or discussing a DevOps opportunity? Reach out directly!</p>
          </div>

          <div className="contact-container">
            <div className="contact-cards-grid">
              <div className="contact-card">
                <div className="contact-card-icon"><FaEnvelope /></div>
                <h3>Email</h3>
                <p>hamzadevelopers35@gmail.com</p>
                <div className="card-buttons">
                  <a href="mailto:hamzadevelopers35@gmail.com" className="btn-contact-action">
                    Send Email &rarr;
                  </a>
                  <button 
                    onClick={() => copyToClipboard('hamzadevelopers35@gmail.com', 'email')}
                    className="btn-copy"
                    title="Copy Email"
                  >
                    {copiedContact === 'email' ? <FaCheck style={{ color: '#10b981' }} /> : <FaCopy />}
                  </button>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon"><FaPhone /></div>
                <h3>Direct Phone</h3>
                <p>+92 309 4844417</p>
                <div className="card-buttons">
                  <a href="tel:+923094844417" className="btn-contact-action">
                    Call Now &rarr;
                  </a>
                  <button 
                    onClick={() => copyToClipboard('+92 309 4844417', 'phone')}
                    className="btn-copy"
                    title="Copy Phone"
                  >
                    {copiedContact === 'phone' ? <FaCheck style={{ color: '#10b981' }} /> : <FaCopy />}
                  </button>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon"><FaWhatsapp /></div>
                <h3>WhatsApp</h3>
                <p>+92 309 4844417</p>
                <div className="card-buttons">
                  <a href="https://wa.me/923094844417" target="_blank" rel="noopener noreferrer" className="btn-contact-action">
                    Chat on WhatsApp &rarr;
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon"><FaMapMarkerAlt /></div>
                <h3>Location</h3>
                <p>Lahore, Pakistan</p>
                <span className="location-pill">Open to on-site & remote roles</span>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="contact-form-wrapper">
              <div className="form-heading">
                <h3>Send a Message</h3>
                <p>Fill out the form below and I will respond promptly.</p>
              </div>

              {formSubmitted ? (
                <div className="form-success-alert">
                  <FaCheckCircle className="success-icon" />
                  <h4>Thank you! Your message has been sent.</h4>
                  <p>I'll get back to you at {formData.email || 'your email'} within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="actual-contact-form">
                  <div className="form-row">
                    <div className="form-field">
                      <label>Your Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleFormChange}
                        placeholder="John Doe" 
                        required 
                      />
                    </div>
                    <div className="form-field">
                      <label>Your Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleFormChange}
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Subject *</label>
                    <input 
                      type="text" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleFormChange}
                      placeholder="DevOps Job Opportunity / Project Inquiry" 
                      required 
                    />
                  </div>

                  <div className="form-field">
                    <label>Message *</label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      value={formData.message} 
                      onChange={handleFormChange}
                      placeholder="Hi Hamza, I came across your portfolio and would like to connect regarding..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary form-submit-btn">
                    <span>Send Message</span>
                    <FaRocket />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-badge">&lt;/&gt;</span>
                <span className="logo-text">HAMZA</span>
                <span className="logo-dot">.devops</span>
              </div>
              <p>
                DevOps & Cloud Engineer specializing in Kubernetes, Docker multi-stage builds, CI/CD pipelines, and Terraform IaC.
              </p>
              <div className="footer-social">
                <a href="https://github.com/MHamza417" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-hamza-1000a7391" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="mailto:hamzadevelopers35@gmail.com" className="footer-social-icon" title="Email">
                  <FaEnvelope />
                </a>
                <a href="https://wa.me/923094844417" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Navigation</h4>
              <a href="#home">Home</a>
              <a href="#about">About Me</a>
              <a href="#skills">DevOps Skills</a>
              <a href="#projects">Key Projects</a>
              <a href="#experience">Work Experience</a>
              <a href="#certifications">Certifications</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-links">
              <h4>DevOps Core Pillars</h4>
              <span>AWS Cloud Infrastructure</span>
              <span>Kubernetes & Helm</span>
              <span>CI/CD (Jenkins & Actions)</span>
              <span>Terraform (IaC)</span>
              <span>DevSecOps & Scanning</span>
              <span>Prometheus & Grafana</span>
            </div>

            <div className="footer-cta-col">
              <h4>Resume / CV</h4>
              <p>Download the official ATS-friendly resume directly to your device.</p>
              <button onClick={downloadResume} className="btn-primary btn-sm">
                <FaDownload /> Download CV (PDF)
              </button>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Muhammad Hamza. All rights reserved.</p>
            <p className="footer-location-info">
              <span>📍 Lahore, Pakistan</span> &bull; <span>📧 hamzadevelopers35@gmail.com</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Interactive CV Preview Modal */}
      {showResumeModal && (
        <div className="resume-modal-backdrop" onClick={() => setShowResumeModal(false)}>
          <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-wrap">
                <FaFilePdf className="modal-pdf-icon" />
                <div>
                  <h3>Muhammad Hamza — Resume Preview</h3>
                  <span>DevOps & Cloud Engineer &bull; Lahore, Pakistan</span>
                </div>
              </div>
              <div className="modal-actions">
                <button onClick={downloadResume} className="btn-primary btn-sm">
                  <FaDownload /> Download PDF
                </button>
                <a 
                  href={resumePdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary btn-sm"
                >
                  <FaExternalLinkAlt /> Open in New Tab
                </a>
                <button 
                  className="modal-close-btn" 
                  onClick={() => setShowResumeModal(false)}
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            <div className="modal-body">
              <iframe 
                src={resumePdfUrl} 
                title="Muhammad Hamza CV" 
                className="resume-iframe"
              />
            </div>
          </div>
        </div>
      )}

      {/* Floating Back to Top Button */}
      <button 
        className="back-to-top"
        onClick={scrollToTop}
        style={{ opacity: scrollProgress > 10 ? 1 : 0, pointerEvents: scrollProgress > 10 ? 'auto' : 'none' }}
        title="Scroll to Top"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}

export default App;