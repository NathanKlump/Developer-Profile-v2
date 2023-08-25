import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <About />
        <Experience />
        <Works />
        <Feedbacks/>
        <Tech/>
      </div>
    </BrowserRouter>
  );
}

export default App;