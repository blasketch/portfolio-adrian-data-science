// Animation utilities for data visualization effects

function DataParticles({ containerId }) {
  const [particles, setParticles] = React.useState([]);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    // Generate random particles
    const newParticles = Array.from({ length: 50 }, () => ({
      id: Math.random().toString(36).substr(2, 9),
      x: Math.random() * containerRect.width,
      y: Math.random() * containerRect.height,
      size: Math.random() * 5 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.5 + 0.3,
      color: [
      '#3498db', // Blue
      '#2ecc71', // Green
      '#e74c3c', // Red
      '#f39c12', // Orange
      '#9b59b6' // Purple
      ][Math.floor(Math.random() * 5)]
    }));

    setParticles(newParticles);

    const animateParticles = () => {
      setParticles((prevParticles) =>
      prevParticles.map((particle) => {
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;

        // Bounce off walls
        if (newX <= 0 || newX >= containerRect.width) {
          particle.speedX *= -1;
          newX = particle.x + particle.speedX;
        }

        if (newY <= 0 || newY >= containerRect.height) {
          particle.speedY *= -1;
          newY = particle.y + particle.speedY;
        }

        return {
          ...particle,
          x: newX,
          y: newY
        };
      })
      );

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    let animationFrameId = requestAnimationFrame(animateParticles);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      id={containerId}
      ref={containerRef}
      className="data-particles" data-id="bcanbaffg" data-path="scripts/animations.js">

      <svg width="100%" height="100%" data-id="9yjubgm6z" data-path="scripts/animations.js">
        {particles.map((particle) =>
        <circle
          key={particle.id}
          cx={particle.x}
          cy={particle.y}
          r={particle.size}
          fill={particle.color}
          opacity={particle.opacity} data-id="r5390bl2e" data-path="scripts/animations.js" />

        )}
      </svg>
    </div>);

}

function BarChart({ data, containerId }) {
  const chartRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id={containerId}
      ref={chartRef}
      className="data-chart" data-id="rrt63po6s" data-path="scripts/animations.js">

      {data.map((item, index) =>
      <div
        key={index}
        className="chart-bar"
        style={{
          left: `${index * 12}%`,
          height: isVisible ? `${item.value}%` : '0%',
          backgroundColor: item.color || 'var(--secondary)',
          transitionDelay: `${index * 0.1}s`
        }} data-id="kcm476h4v" data-path="scripts/animations.js" />

      )}
    </div>);

}

function TypedText({ text, speed = 100 }) {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return <span data-id="a9yiegh5g" data-path="scripts/animations.js">{displayText}<span className="cursor" data-id="gz6ahwljx" data-path="scripts/animations.js">|</span></span>;
}

function FadeInSection({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
        transitionDelay: `${delay}s`,
        pointerEvents: 'auto'
      }} data-id="c4an85s31" data-path="scripts/animations.js">

      {children}
    </div>);

}