import React from 'react'
import './News.css'
import Morebtn from '../Morebtn/Morebtn'
const cardData = [
    {
        id: 1,
        date:'08.08.2024',
        title: 'The very powerful 2025 Range RoverSport SV  gets Edition 2',
        description: 'Land Rover has revealed the Edition Two of its most powerful and fastest production Range Rovers',
        image: 'assets/g1.jpg',
    },
    {
        id: 2,
        date:'08.08.2024',
        title: 'The first appearance of the Nilo supercarwith a power of more than 1,000 horsepower',
        description: 'The first images of the Nilo 27 hypercar, named after its new manufacturing company founded by',
        image: 'assets/g2.jpg',
    },
    {
        id: 3,
        date:'08.08.2024',
        title: 'Ford Announces Electric Bikes Inspired by Mustang and Bronco',
        description: 'Ford has teamed up with bike maker N+ to launch two electric bikes, one called the Bronco',
        image: 'assets/g3.jpg',
    },
    {
        id: 4,
        date:'08.08.2024',
        title: 'Deciding whether to continue making new cheap Mitsubishi Mirage',
        description: "It's finally time for the new Mitsubishi Mirage to take a nap in the dirt, as the Mirage hatchback..",
        image: 'assets/g4.jpg',
    },
    {
        id: 5,
        date:'08.08.2024',
        title: 'The price of the 2025 Dodge Charger Daytona has been officially revealed',
        description: 'After the prices were leaked online, the American company Dodge revealed the price..',
        image: 'assets/g5.png',
    },
    {
        id: 6,
        date:'08.08.2024',
        title: 'Newest Exclusive Rolls-Royce Gets Strange Hood Paint',
        description: 'Rolls-Royce unveils its newest exclusive car, the Rolls-Royce Spectre Semaphore, at Monterey Car..',
        image: 'assets/g6.jpg',
    },
    
] 

const News = () => {
  return (
    <div className='news'>
        <div className="news-title">
            <h2>Latest News</h2>
        </div>
       <div className="gridcontainer">
       <div className="grid">
        {cardData.map((card,index)=>(
                <div className="card" key={index}>
                    <div className="card-image">
                        <img src={card.image} alt={card.title} />
                    </div>
                    <div className="card-content">
                        <div className="card-date">
                            <p>{card.date}</p>
                         </div>
                        <div className="card-title">
                            <h3>{card.title}</h3>
                        </div>
                        <div className="card-description">
                            <p>{card.description}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
       </div>
       <div className="news-btn">
        <Morebtn/>
       </div>
       
      
    </div>
  )
}

export default News
