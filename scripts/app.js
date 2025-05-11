function App() {
  return (
    <React.Fragment>
      <Header />
      <main data-id="8y9nw2v3g" data-path="scripts/app.js">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>);

}

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));