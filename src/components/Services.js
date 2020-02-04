import React, { Component } from 'react';
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from "react-icons/fa"
import Title from './Title';

export default class Services extends Component {
  state={
    services:[{
      icon:<FaCocktail />,
      title: "Free cocktails",
      info: "Complementary cocktails daily"
    },
    {
      icon:<FaHiking />,
      title: "Hiking trails",
      info: "Plenty of hiking trails in the area to explore"
    },
    {
      icon:<FaShuttleVan />,
      title: "Free shuttle van",
      info: "Complementary shuttle to and from the airport"
    },
    {
      icon:<FaBeer />,
      title: "Endless beer",
      info: "Locally brewed beer for your consuming pleasure"
    }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title='services' />
        <div className="services-center">
        {this.state.services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
        );
        })}
        </div>
      </section>
    )
  }
}
