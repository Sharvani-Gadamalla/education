import React from 'react';
import './Events.css';
import leftArrow from "./left-arrow.png"; // Replace with the path to your left arrow image
import rightArrow from "./right-arrow.png"; // Replace with the path to your right arrow image
import event11 from "./event11.png"; // Replace with the path to your first event image
import event12 from "./event12.png"; // Replace with the path to your second event image
import event13 from "./event13.png";
import Footer from './Footer';

const eventsData = [
  {
    date: 'April 7, 2025',
    time: '12:00 PM - 6:00 PM',
    location: 'Outdoor Campus Area',
    facilities: 'Food Stalls, Seating, Outdoor Sound System, Rest Areas',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/9273/2607/0a637453e829a89b31e386f517a8dafc?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sr3rx-TL1BzRehHlPb2MJccj9B81WXqjbVTvMBjQ~D4NLjJTMhaAC4MjnnsgvZIX047Idd2EzLPLqRHA6R4LE0UjkOerA-RGU6JRpExUTkFGOUI206auL7dyt1rzkb9KN-J4w63e5Ye4VeJ7sOrVf52lZh40xvGd6w6gJBUaa6U9X8bOF2cxM7mzzxXMm8XEZWobHkJHCa1mHyXQnQBJc-rMwfOPhYJgnjDuoACIXN3NdGZ~LdGGHMJwntnAWZqfMnAi-jGjiDrvFsDYnoKSujwQ8u5pVSwt619o4gytnap4q8he6fhh8FU1LQ1qURmuCM2EEJB-2WEIUdPFYMxaAg__',
  },
  {
    date: 'March 15, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Main Auditorium',
    facilities: 'Breakout Rooms for Workshops, Exhibition Stalls',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/a4dc/ab87/0b8e2c16abfb8944a83c3a71ae1a1851?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f1iKKVehwgMg1MkbafZfGVLvyL43oNLyPlnqbSM38ANyqCriu-3Js~elrn6I0BhUsTrDhAFR-xUIKHZvp-ZNfn6YV9Gu3ClcqHbSNLawrkIidNQUvLjFdX8TMva5v-aovkljXNWeAdTI-N54JJUWwqJ9lw94EQhaW0HLgBdft8TMDRBi3MLVO5to3~h84kfNkiJ8h4qg-rp7B58D0M7h9cUfmz0SeCGPQP4ABXmovG4tsZeU47FOfXGT3EPVDeBfWt6xgIHNAoKwhQ1AB4tUDs3bIGp4BY-6uOksv8R-ViMtKPbRqk556mODKDxcbuEB4md5rvDwdZDxY~-lS2Gypw__',
  },
  {
    date: 'November 1, 2025',
    time: '6:00 PM - 9:00 PM',
    location: 'Campus Courtyard',
    facilities: 'Decorations, Sound System, Lighting, Fireworks Display',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/f7d4/e8a1/d100e451d94412215b1309ae1489ed28?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MuiBJmCzcziyDXGKBo-ApqxHJ1-LP0keBeyEHKW2cYLbKAktkxS-SPv9LbRjPPLndngaNQXh4bMrN88KUifoTeIDw6Jziwpu2nQWGq018rLjomlA9cVaBuuWta6VgdnPGzJRDZLXdrzMj9EauwsKIxN~FAi7zmdzCNcny4xddyGsEAbL-xld4nFlw1-4AoRn5rhcmNSuHeXFsQGcIMKsLt6-0S0ifJcu7eGHdewKfe8qU1TeqEpzr2MbBfebCY7~~DC~ZIIDrwTu-51c4w4PpEOnXQ6GpBQw4clZCgt6e9yeoVdxCuaKMg3ap~YYGVJ50rNLicb97tjgEuTseyQ9Iw__',
  },
  {
    date: 'March 30, 2025',
    time: '8:00 AM - 4:00 PM',
    location: 'Sports Ground',
    facilities: 'Field Setup, Scoreboard, Refreshment Stands, Medical Assistance',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/7bc3/40b8/27df2aab8c61773cfaee4440be9dfcd1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U29ZBI1WEP673tJJKI68juCsEQ2J6x-EjWeFg~~WPmJqjWGIxWTpmwP09mp5Wl6X63RTL8hZtxsQg9trcMYacv9NMhgA45nLGzJA2kNVoYwZ5l39Qllhb7faVGFQHfTAeSz99OJFcqxdCdN1Jmy-RV9TE~6-RzxLCw5b5-KEapctUFuL9amL-ldPjEZTqVNHqZpjr5Id873SUDT6cXIlTKj-arWiS-9w8tQlWU7y9H~6RTad5pB0~CF9Z2iS-9m1DkZJYCZ~HaNWAy6Gg3H3SdsT2RciKO3rdjwx7OzEbc8D3eC7Bwjxk1UbIQz2YkMivtgd4xMpd0pkYYc4-TK53Q__',
  },
  {
    date: 'February 28, 2025',
    time: '5:00 PM - 10:00 PM',
    location: 'Open-Air Theater',
    facilities: 'Stage, Sound System, Lighting, Seating, Food Stalls',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/656b/6cda/ebecd8b6d9fa67a567e11b244ea2270e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B65~VvD4nCCITC1ojDZmzlZhQf3pO-ZpRqVUToQs~ZFgzZ8KkwWW6uDM8MpsHkEFcb3hDV7mE48WsxnBwCeTjUZPtLqPnH6yHjVQPVOgxc6vrCt1E1Zz-l8VsWyUPjCGXfdGKrl-2us67YYoXy8iXiK9ySUcaWZyv6O8GSbPAhk1xiKplI-oLO4PH5JrzFVD0uBw-ajHXm0nfZh8bPgHpOB9tLl0eIvFtdgOUkBxsfF50GWHPTX17iYTds9xmDDeGiOSF8Bi2RXCRjzKIX6HQvbeAl2gOTMMks0I7MiCpWGHQt15Wcu0TYXlWhPVtGhro4PtCgszt7qkTyCtIPkwWA__',
  },
  {
    date: 'March 25, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Cultural Center',
    facilities: 'Stage for Performances, Exhibition Stalls, Sound System, Traditional Attire Collection',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/d27e/3cc6/f9b72b97bba8ac71bfeb662d4635e6a6?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KbB01le77cln5kF6qoK30Seaa9sDI5~fC6dWOkAQDbn6CcV0plpMBK6r03Ru3~7b1X9MAFyx~fd501KjognugzwkD3oHWJfCqY55TOTPLCykrjy5QDk9u5OgvhLbeOKH5zcF7b6RIwdRl6SlNCBEeHL-AFzO41plw7IpHRtg9y5WT1ByJYAJeNaJlvWpH2BVqMJUUnuWk1IETyTkinw7VdBVDLQ0HHQH-lBRCteN0FE~YC3GYzMPyUPTxBOfqo0k4NUBK~DwFK4IjY0fTxyaJ3S8H4JO2RNjCzGnggIIHReRvb8psOEnB4v9H13aAIChBGROKqP3UD3bv7ia60lWyg__',
  },
];

function Events() {
  return (
    <div className="events-container">
      <div className="events-section">
        <h1>Upcoming Events</h1>
        <div className="events-grid">
          {eventsData.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.imageUrl} alt={`Event ${index + 1}`} className="event-image" />
              <div className="event-details">
                <p><strong>Date & Time:</strong> {event.date}, {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Facilities:</strong> {event.facilities}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hyper-container">
          <h2 className="hyper-title">Previous Event</h2>
          <div className="hyper-carousel">
            <img src={leftArrow} alt="Left Arrow" className="hyper-arrow" />
            <div className="hyper-images">
              <img src={event11} alt="Event 11" className="hyper-image" />
              <img src={event12} alt="Event 12" className="hyper-image" />
              <img src={event13} alt="Event 13" className="hyper-image" />
            </div>
            <img src={rightArrow} alt="Right Arrow" className="hyper-arrow" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
