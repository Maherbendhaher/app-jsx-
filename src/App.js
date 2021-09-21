import mayimage from './laboratoire.jpg'
import './App.css';
import myvideo from './video.mp4'
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Laboratoire</h1>
    <br />
    <img src="./laboratoire.jpg" alt="" />
    <br />
    <img src={mayimage} alt=""/>
  </div>
  <video width={320} height={240} controls>
    <source src={myvideo} type="video/mp4" />
  </video>
    </div>
  );
}

export default App;
