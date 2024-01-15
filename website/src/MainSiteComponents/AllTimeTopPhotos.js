import React from "react";
import TopPhoto from "./TopPhoto.js";

function AllTimeTopPhotos () {
  return (
    <div>
      <h1 className="section-title">All-Time Top Photos</h1>
      <p className="section-message">You know how hard it must've been for me to choose just 8 photos 
        from our two years together. We've done so much in that span, and I could easily put together
        a 500 photo album of adorable, sweet, and (most importantly) funny photos of you/us. 
        But... I don't know if this website would be able to store that many photos. So instead 
        here are 10 of my absolute favorites.
      </p>
      <div className="top-photos">
        <TopPhoto index={0} image={'first-pic.jpg'} text="
          This is our first real picture together!!!
        " />
        <TopPhoto index={1} image={'aspen-hug.jpg'} text="
          Aspen hug...
          " />
        <TopPhoto index={2} image={'nye-hug.jpg'} text="
          New Year's Eve!
        " />
        <TopPhoto index={3} image={'livvy-bday.jpg'} text="
          Your 20th birthday and my new iPad homescreen!
        " />
        <TopPhoto index={4} image={'piggyback.jpg'} text="
          Ivies 2021: Piggyback ride edition
        " />
        <TopPhoto index={5} image={'barca.jpg'} text="
          Barcelona '23 (sorry Lucy for having to take photos of us)
        
        " />
        <TopPhoto index={6} image={'siena.jpg'} text="
          Siena surprise with creepy Italian teenage thugs
        " />
        <TopPhoto index={7} image={'hot-sauces.jpg'} text="
          Full circle since freshman year!
        " />
      </div>
    </div>
  );
};

export default AllTimeTopPhotos;
