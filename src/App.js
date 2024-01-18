import './App.css';
import FieldCard from './components/Marketplace.js/card';
import Home from './pages/home';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import {Routes , Route } from "react-router-dom"; 
import Avatar from './pages/avatar';
import AvatarGen from './pages/avatar';


function App() {

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const darkTheme = createTheme({
    type: 'dark',
      theme: {
      colors: {}, // optional
    }
  })
  return (
    
    <div className="App">
            <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push"
                },
                onHover: {
                  enable: true,
                  mode: "repulse"
                },
                resize: true
              },
              modes: {
                push: {
                  quantity: 5
                },
                repulse: {
                  distance: 200,
                  duration: 0.8
                }
              }
            },
            particles: {
              color: {
                value: "#ffffff"
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
              },
              collisions: {
                enable: true
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce"
                },
                random: false,
                speed: 1,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 900
                },
                value: 100
              },
              opacity: {
                value: 0.5
              },
              shape: {
                type: "circle"
              },
              size: {
                value: { min: 1, max: 5 }
              }
            },
            detectRetina: true
          }}
      />
      <NextUIProvider theme={darkTheme}/>
      <Routes> 
            <Route path="/" element={<AvatarGen/> } />
            <Route path='/signUp' element= {<FieldCard/>}/>
            <Route path='/avatar' element= {<AvatarGen/>}/>
            {/* <Route path= "/dashBoard" element={<MyDashboard/>}/>
            <Route path="/Collections" element={<CollectionLayout/>}></Route>
            <Route path="/Fractions" element={<FractionLayout/>}></Route> */}
      </Routes>
      <NextUIProvider/>
    </div>
  );
}

export default App;
