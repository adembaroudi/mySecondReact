import { Card } from 'react-bootstrap';
import gmc from './gmc.png'
import'./style.css'

function App() {
  return (
    <div className="App container">
        <Card border="info" style={{ width: '25rem' }}>
    <Card.Header><h1 className="title red">Adem Baroudi</h1></Card.Header>
    <Card.Body>
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
<br/>
<img src={gmc} style={{width:'400px', height:'200px'}} />
<br/>
<img src="./go-my-code.png" style={{width:'400px', height:'200px'}} />
</div>
<iframe style={{width:'400px', height:'240'}} src="https://www.youtube.com/embed/T7gYwl9sTQY?list=RDT7gYwl9sTQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Card.Body>
  </Card>
    </div>
  );
}

export default App;
