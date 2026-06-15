import Navigator from "./Navigator";
import "@fontsource/merriweather-sans";

const Home = () => {
  return (
    <>
      <div className="nav-bar-main">
        <p className="name-label-top">Sebastian Alderucci</p>
        <Navigator></Navigator>
      </div>
      <div className="home-content">
        <div className="label-main">
          <h1 className="name-label-main">Sebastian Alderucci</h1>
          <h1 className="headline-label">Software Developer | Data Engineer</h1>
          <p className='description-label'>
            Data engineer at Travelers with a MEng. in Computer Science from the
            University of Connecticut. Experience with building and managing
            data pipelines and analyzing data from various sources. Continuous
            learner with a passion for software development. Proactive and
            detail oriented team player. Enthusiastic about using data
            engineering techniques to help enhance software applications.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
