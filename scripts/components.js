function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" data-id="8swn8sjkl" data-path="scripts/components.js">
      <div className="container" data-id="ll6dt6jdg" data-path="scripts/components.js">
        <nav className="nav" data-id="jcn9cdh6o" data-path="scripts/components.js">
          <div className="logo" data-id="ub6pknzpk" data-path="scripts/components.js">ABL</div>
          <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} data-id="tcwalw1d3" data-path="scripts/components.js">
            <div className="bar" data-id="c85f8sypj" data-path="scripts/components.js"></div>
            <div className="bar" data-id="779yj7cqm" data-path="scripts/components.js"></div>
            <div className="bar" data-id="6pby7x0vx" data-path="scripts/components.js"></div>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} data-id="xzj4gei3k" data-path="scripts/components.js">
            <li data-id="gzyxpemk2" data-path="scripts/components.js"><a href="#home" onClick={() => setIsMenuOpen(false)} data-id="as5v03f0d" data-path="scripts/components.js">Inicio</a></li>
            <li data-id="avxdl31qv" data-path="scripts/components.js"><a href="#about" onClick={() => setIsMenuOpen(false)} data-id="j8j87c6h9" data-path="scripts/components.js">Sobre Mí</a></li>
            <li data-id="u7v76i31w" data-path="scripts/components.js"><a href="#skills" onClick={() => setIsMenuOpen(false)} data-id="vcb5zes8y" data-path="scripts/components.js">Habilidades</a></li>
            <li data-id="rhjo7geiq" data-path="scripts/components.js"><a href="#projects" onClick={() => setIsMenuOpen(false)} data-id="zzmltzplq" data-path="scripts/components.js">Proyectos</a></li>
            <li data-id="cz15ckwmv" data-path="scripts/components.js"><a href="#contact" onClick={() => setIsMenuOpen(false)} data-id="ume0hm6gb" data-path="scripts/components.js">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>);

}

function Hero() {
  return (
    <section id="home" className="hero" data-id="teodrj4mq" data-path="scripts/components.js">
      <DataParticles containerId="hero-particles" />
      <div className="container" data-id="kf1dqvrz4" data-path="scripts/components.js">
        <div className="hero-content" data-id="lt20pk9de" data-path="scripts/components.js">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 className="hero-title" data-id="6kz1timh5" data-path="scripts/components.js">
                Hola, soy <span className="highlight" data-id="ptncw9aix" data-path="scripts/components.js">Adrian Blasco Lozano</span>
              </h1>
              <h2 className="hero-subtitle" data-id="27svytih5" data-path="scripts/components.js">
                <TypedText text="Analista de Datos enfocado en transformar datos en insights accionables" speed={50} />
              </h2>
              <a href="#projects" className="btn" data-id="1nh09tw5i" data-path="scripts/components.js">Ver mis proyectos <i className="fas fa-arrow-right" data-id="ezu1z87nx" data-path="scripts/components.js"></i></a>
            </div>
            <div className="hero-image-container">
              <div className="profile-image-wrapper">
                <img 
                  src="/assets/images/profile.jpg" 
                  alt="Adrian Blasco Lozano" 
                  className="profile-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x400?text=Tu+Imagen';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function About() {
  return (
    <section id="about" className="section" data-id="c32lecih8" data-path="scripts/components.js">
      <div className="container" data-id="nfv883x4k" data-path="scripts/components.js">
        <FadeInSection>
          <h2 className="section-title" data-id="w817ve008" data-path="scripts/components.js">Sobre Mí</h2>
        </FadeInSection>
        <div className="about-grid" data-id="fyv54vx6i" data-path="scripts/components.js">
          <FadeInSection delay={0.2}>
            <div className="about-content" data-id="4wjklnhc0" data-path="scripts/components.js">
              <p data-id="r1mu3qj48" data-path="scripts/components.js">
                Soy un analista de datos apasionado por descubrir insights valiosos en conjuntos complejos de información. Mi enfoque combina habilidades técnicas con una fuerte capacidad analítica para transformar datos en historias comprensibles y accionables.
              </p>
              <p className="mt-4" data-id="up05uznqt" data-path="scripts/components.js">
                Mi experiencia abarca el análisis estadístico, visualización de datos, y la implementación de soluciones basadas en datos para resolver problemas de negocio. Me especializo en identificar patrones y tendencias que ayudan a las organizaciones a tomar decisiones más informadas.
              </p>
              <p className="mt-4" data-id="8xkwoy9xg" data-path="scripts/components.js">
                Constantemente me mantengo actualizado con las últimas herramientas y metodologías en el campo de la ciencia de datos para ofrecer análisis de alta calidad y resultados impactantes.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="about-image" data-id="7pukayx3b" data-path="scripts/components.js">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Data Analysis" data-id="p06yzdw78" data-path="scripts/components.js" />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>);

}

function Skills() {
  const skillsData = [
  { name: "Análisis de Datos", icon: "fa-chart-bar", description: "Análisis exploratorio de datos (EDA), estadística descriptiva e inferencial", percent: 90 },
  { name: "Visualización", icon: "fa-chart-pie", description: "Creación de dashboards interactivos y visualizaciones efectivas", percent: 85 },
  { name: "Python", icon: "fa-python", description: "pandas, NumPy, scikit-learn, matplotlib, seaborn", percent: 80 },
  { name: "SQL", icon: "fa-database", description: "Consultas complejas, optimización de bases de datos, ETL", percent: 75 },
  { name: "Machine Learning", icon: "fa-robot", description: "Clasificación, regresión, clustering, series temporales", percent: 70 },
  { name: "Herramientas BI", icon: "fa-desktop", description: "Tableau, Power BI, Looker Studio", percent: 85 }];


  const chartData = skillsData.map((skill, index) => ({
    value: skill.percent,
    color: [
    '#3498db',
    '#2ecc71',
    '#e74c3c',
    '#f39c12',
    '#9b59b6',
    '#1abc9c'][
    index % 6]
  }));

  return (
    <section id="skills" className="section" data-id="o5z9wqjlh" data-path="scripts/components.js">
      <div className="container" data-id="nkqqza2ha" data-path="scripts/components.js">
        <FadeInSection>
          <h2 className="section-title" data-id="ar7i8rtz8" data-path="scripts/components.js">Mis Habilidades</h2>
        </FadeInSection>
        
        <FadeInSection delay={0.2}>
          <BarChart data={chartData} containerId="skills-chart" />
        </FadeInSection>
        
        <div className="skills-grid" data-id="440trfw18" data-path="scripts/components.js">
          {skillsData.map((skill, index) =>
          <FadeInSection delay={0.1 * (index + 1)} key={index}>
              <div className="skill-card" data-id="i3movc8cb" data-path="scripts/components.js">
                <div className="skill-icon" data-id="d7e4n7xm3" data-path="scripts/components.js">
                  <i className={`fas ${skill.icon}`} data-id="5bbbfza5t" data-path="scripts/components.js"></i>
                </div>
                <h3 className="skill-title" data-id="hxf6mxn1o" data-path="scripts/components.js">{skill.name}</h3>
                <p className="skill-description" data-id="yhecivx0v" data-path="scripts/components.js">{skill.description}</p>
                <div className="progress-bar" data-id="ycah0qdq7" data-path="scripts/components.js">
                  <div className="progress" style={{ width: `${skill.percent}%` }} data-id="y736i7sgn" data-path="scripts/components.js"></div>
                </div>
              </div>
            </FadeInSection>
          )}
        </div>
      </div>
    </section>);

}

function Projects() {
  const projects = [
  {
    title: "Análisis de Ventas Retail",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Análisis predictivo de tendencias de ventas y comportamiento del consumidor para una cadena de retail.",
    tags: ["Python", "Pandas", "Tableau", "Forecasting"],
    link: "#"
  },
  {
    title: "Dashboard de Métricas de Marketing",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Dashboard interactivo para seguimiento de KPIs de campañas de marketing digital.",
    tags: ["Power BI", "SQL", "Marketing Analytics"],
    link: "#"
  },
  {
    title: "Segmentación de Clientes",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Modelo de clustering para segmentar clientes basado en comportamiento de compra y características demográficas.",
    tags: ["Python", "Machine Learning", "Clustering"],
    link: "#"
  }];


  return (
    <section id="projects" className="section" data-id="pj6dxdntm" data-path="scripts/components.js">
      <div className="container" data-id="i2kzxihr2" data-path="scripts/components.js">
        <FadeInSection>
          <h2 className="section-title" data-id="uw8jrx3l2" data-path="scripts/components.js">Mis Proyectos</h2>
          <p className="mb-8" data-id="ibkzatu1m" data-path="scripts/components.js">Una selección de proyectos de análisis de datos en los que he trabajado.</p>
        </FadeInSection>
        
        <div className="projects-grid" data-id="u4008584w" data-path="scripts/components.js">
          {projects.map((project, index) =>
          <FadeInSection delay={0.1 * (index + 1)} key={index}>
              <div className="project-card" data-id="cxcuu62f0" data-path="scripts/components.js">
                <img src={project.image} alt={project.title} className="project-image" data-id="68izivm1h" data-path="scripts/components.js" />
                <div className="project-content" data-id="lyzedxap5" data-path="scripts/components.js">
                  <h3 className="project-title" data-id="r7opxajft" data-path="scripts/components.js">{project.title}</h3>
                  <div className="project-tags" data-id="847ttjlq4" data-path="scripts/components.js">
                    {project.tags.map((tag, tagIndex) =>
                  <span key={tagIndex} className="project-tag" data-id="0mg8m4fdm" data-path="scripts/components.js">{tag}</span>
                  )}
                  </div>
                  <p className="project-description" data-id="5ssn7vqj3" data-path="scripts/components.js">{project.description}</p>
                  <a href={project.link} className="project-link" data-id="82hk8a6u5" data-path="scripts/components.js">
                    Ver detalles <i className="fas fa-arrow-right" data-id="ltx0i7ztf" data-path="scripts/components.js"></i>
                  </a>
                </div>
              </div>
            </FadeInSection>
          )}
        </div>
      </div>
    </section>);

}

function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te responderé lo antes posible.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section" data-id="mrdoppdnq" data-path="scripts/components.js">
      <div className="container" data-id="jy78rao7y" data-path="scripts/components.js">
        <FadeInSection>
          <h2 className="section-title" data-id="xoq4mmj5d" data-path="scripts/components.js">Contacto</h2>
          <p className="mb-8" data-id="taun1m86p" data-path="scripts/components.js">¿Interesado en trabajar juntos? Ponte en contacto conmigo.</p>
        </FadeInSection>
        
        <div className="contact-container" data-id="shb3bahsa" data-path="scripts/components.js">
          <FadeInSection delay={0.2}>
            <div className="contact-info" data-id="5omxyp2w2" data-path="scripts/components.js">
              <ul className="contact-info-list" data-id="f5le7ucex" data-path="scripts/components.js">
                <li className="contact-info-item" data-id="wfgy95p64" data-path="scripts/components.js">
                  <div className="contact-icon" data-id="kh321gd4r" data-path="scripts/components.js">
                    <i className="fas fa-envelope" data-id="afxs61cgx" data-path="scripts/components.js"></i>
                  </div>
                  <div data-id="2etyhertf" data-path="scripts/components.js">
                    <h3 className="font-medium" data-id="xgboagbwk" data-path="scripts/components.js">Email</h3>
                    <p data-id="lsn6qnotc" data-path="scripts/components.js">adrian.blasco@ejemplo.com</p>
                  </div>
                </li>
                <li className="contact-info-item" data-id="7nvi3srz4" data-path="scripts/components.js">
                  <div className="contact-icon" data-id="71qu13vaj" data-path="scripts/components.js">
                    <i className="fas fa-map-marker-alt" data-id="d2d07jmt6" data-path="scripts/components.js"></i>
                  </div>
                  <div data-id="l4y8apx48" data-path="scripts/components.js">
                    <h3 className="font-medium" data-id="xo46ewirc" data-path="scripts/components.js">Ubicación</h3>
                    <p data-id="vhlhqoo9m" data-path="scripts/components.js">Madrid, España</p>
                  </div>
                </li>
                <li className="contact-info-item" data-id="15xqceybg" data-path="scripts/components.js">
                  <div className="contact-icon" data-id="d9t4xnxum" data-path="scripts/components.js">
                    <i className="fab fa-linkedin" data-id="6cqp1y61n" data-path="scripts/components.js"></i>
                  </div>
                  <div data-id="e2s0zo3hg" data-path="scripts/components.js">
                    <h3 className="font-medium" data-id="sqssi0h4n" data-path="scripts/components.js">LinkedIn</h3>
                    <p data-id="vonte7dcj" data-path="scripts/components.js"><a href="#" data-id="fmypyaqfl" data-path="scripts/components.js">linkedin.com/in/adrianblascolozano</a></p>
                  </div>
                </li>
              </ul>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={0.4}>
            <form onSubmit={handleSubmit} className="contact-form" data-id="htsiba8ue" data-path="scripts/components.js">
              <div className="contact-form-group" data-id="hzj1zxfog" data-path="scripts/components.js">
                <label htmlFor="name" className="contact-label" data-id="itnzgud26" data-path="scripts/components.js">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-input"
                  value={formData.name}
                  onChange={handleChange}
                  required data-id="8tmnfvqxi" data-path="scripts/components.js" />

              </div>
              <div className="contact-form-group" data-id="9502b2xl9" data-path="scripts/components.js">
                <label htmlFor="email" className="contact-label" data-id="0h9nc78io" data-path="scripts/components.js">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-input"
                  value={formData.email}
                  onChange={handleChange}
                  required data-id="7wl7adp9v" data-path="scripts/components.js" />

              </div>
              <div className="contact-form-group" data-id="mmbo1indk" data-path="scripts/components.js">
                <label htmlFor="message" className="contact-label" data-id="96ls0vz5o" data-path="scripts/components.js">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required data-id="mdu77sq8i" data-path="scripts/components.js">
                </textarea>
              </div>
              <button type="submit" className="btn" data-id="rqw9qigyd" data-path="scripts/components.js">
                Enviar Mensaje <i className="fas fa-paper-plane" data-id="t850uxi1p" data-path="scripts/components.js"></i>
              </button>
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="footer" data-id="6uhfxst39" data-path="scripts/components.js">
      <div className="container" data-id="klslzkto9" data-path="scripts/components.js">
        <div className="footer-content" data-id="dog9s7qpb" data-path="scripts/components.js">
          <p data-id="71ebjt0mi" data-path="scripts/components.js">&copy; {new Date().getFullYear()} Adrian Blasco Lozano. Todos los derechos reservados.</p>
          <div className="social-links" data-id="4k7u4qo7y" data-path="scripts/components.js">
            <a href="#" className="social-link" data-id="50r2ukz3w" data-path="scripts/components.js"><i className="fab fa-linkedin-in" data-id="s6ab64poi" data-path="scripts/components.js"></i></a>
            <a href="#" className="social-link" data-id="zv3en98ym" data-path="scripts/components.js"><i className="fab fa-github" data-id="jotm1vzlg" data-path="scripts/components.js"></i></a>
            <a href="#" className="social-link" data-id="ta4ckdc1s" data-path="scripts/components.js"><i className="fab fa-twitter" data-id="vgi5x093y" data-path="scripts/components.js"></i></a>
          </div>
        </div>
      </div>
    </footer>);

}