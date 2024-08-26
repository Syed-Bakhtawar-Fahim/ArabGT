import React from 'react';
import './Programs.css';
import Morebtn from '../Morebtn/Morebtn'

const pcardData = [
    {
        id: 1,
        title: 'Lotus Emiya 2025 is a family car with 905 horsepowerh',
        image: 'assets/prog1.png',
    },
    {
        id: 2,
        title: 'The first appearance of the Nilo supercarwith a power of more than 1,000 horsepower',
        image: 'assets/prog2.jpg',
    },
    {
        id: 3,
        title: 'Ford Announces Electric Bikes Inspired by Mustang and Bronco',
        image: 'assets/prog3.jpg',
    },
];

const Programs = () => {
    return (
        <div className="programs">
            <div className="p-title">
                <h2>Programs</h2>
            </div>
            <div className="pgridcontainer">
                <div className="p-grid">
                    {pcardData.map((card, index) => {
                        if (index === 0) {
                            return (
                                <div
                                    className="p-card span-row"
                                    key={card.id}
                                    style={{ backgroundImage: `url(${card.image})` }}
                                >
                                    <div className="p-card-content">
                                        <h3>{card.title}</h3>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div className="p-card" key={card.id}>
                                    <div className="p-card-image">
                                        <img src={card.image} alt={card.title} />
                                    </div>
                                    <div className="p-card-content">
                                        <h3>{card.title}</h3>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            <div className="news-btn">
                <Morebtn/>
            </div>
        </div>
    );
};

export default Programs;
