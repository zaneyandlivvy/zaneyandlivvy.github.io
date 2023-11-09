import React from "react";
import TopPhoto from "./TopPhoto.js";

function AllTimeTopPhotos () {
  return (
    <div>
      <h1 className="section-title">All-Time Top Photos</h1>
      <p className="section-message">You, better than anyone, know how hard it was for me to choose just 10 photos 
        from our two years together. We've done so much in that span, and I could easily put together
        a 500 photo album of adorable, sweet, and (most importantly) funny photos of you/us. 
        But... I don't know if this website would be able to store that many photos. So instead 
        here are 10 of my absolute favorites. Each one means so so much to me in a different and unique way.
      </p>
      <TopPhoto image={'hello.png'} text="hello ther" />
    </div>
  );
};

export default AllTimeTopPhotos;
