import React from 'react'
import './Agents.css'


const agents = [
    { 
     src: './assets/a1.png',
     alt: 'Logo 1',
     title: 'Get ready to laugh with the most amazing drag race challenge',
    },
    {
      src: './assets/a2.jpg',
      alt: 'Logo 2',
      title: 'One of the most amazing crazy drift challenges',
    },
    {
      src: './assets/a3.jpg',
      alt: 'Logo 3' ,
      title: 'Watch the crash test of Volvos largest and smallest car',
    },
    
];



const Agents = () => {
  return (
    <div className='agents'>
      <div className="p-title">
        <h2>Agents And Data</h2>
      </div>
      <div className="agents-container">
      {agents.map((agent, index) => (
              <div className="acard">
                <div key={index} className="acontainer">
                  <img src={agent.src} alt={agent.alt} className="photo" id={agent.id} />
                </div>
                <div className="card-content">
                  <h3 className='atxt'>{agent.title}</h3>
                </div>
              </div> 
      ))}
      </div>



    </div>
  )
}

export default Agents
