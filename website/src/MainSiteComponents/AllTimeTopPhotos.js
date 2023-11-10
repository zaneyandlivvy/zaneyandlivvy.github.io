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
      <div className="top-photos">
        <TopPhoto index={0} image={'first-pic.jpg'} text="
          This is our first real picture together!!! You can just see how freaking happy we are. This night
          was probably the most fun I had had at Bowdoin up until then, and it's still one of my favorites. 
          We connected so quickly and easily, and we really know how to have fun together.
        " />
        <TopPhoto index={1} image={'aspen-hug.jpg'} text="
          The Aspen hug... Not too much to say here except that it shows how much affection we give each other.
          I love that not a moment goes by without us showing each other that we care.
          " />
        <TopPhoto index={2} image={'nye-hug.jpg'} text="
          Another photo, another hug. This one shows how much you love being in my arms and how much happiness it 
          gives me to have you there. I love that everyone else is having fun being social in the background, but 
          we are happier just being together.
        " />
        <TopPhoto index={3} image={'livvy-bday.jpg'} text="
          Happy 20th birthday!! This day was so fun for me and it has been a true revelation to have this photo 
          as my iPad homescreen. Carolyn probably sees me smiling at it in Spanish every time I open my iPad and thinks
          I'm weird. I'm not, I'm just in love with the cutest girl in the world.
        " />
        <TopPhoto index={4} image={'piggyback.jpg'} text="
          Ivies 2021! This one is just adorable, and the blur makes it even cuter somehow. Your face is literally beaming,
          you look like a kid on a rollercoaster for the first time. I'm glad that all it takes is a little piggyback ride
          for me to make you so happy.
        " />
        <TopPhoto index={5} image={'barca.jpg'} text="
          The way we're looking at each other in this one should be an example for every couple. Our faces say so many things
          are once: 'god am I lucky to have you,' 'you're so cool,' 'we're easily the best relationship that exists,' and 
          'dammmmnnn she's sexy' (ok, maybe that one was just me). Also, the view behind us is incredible, and reminds me how
          lucky we were and are to have experienced so many incredible places last Spring.
        
        " />
        <TopPhoto index={6} image={'siena.jpg'} text="
          What to say, what to say...? I guess I'll say that this surprise worked out better than I could've imagined.
          Maybe we could've done without the weird Sienese teenagers who were way more interested in drugs and prostitution than
          their futures, but at least it made for a pretty funny video. I was so nervous (as were your roommates), and I was happy
          that I made you cry. I know it was just because you were so surprised and overwhelmed, but I like to pretend it was
          your natural reaction from seeing me.
        " />
        <TopPhoto index={7} image={'hot-sauces.jpg'} text="
          We've come full circle! We've grown from baby Livvy (stressed, anxious, lacking confidence) and baby Zane 
          (immature, wouldn't touch a salad, didn't know how to dress) to grown-up Livvy (relaxed, strutting her stuff, proud of herself!)
          and grown-up Zane (a teeny bit more mature, eats (one kind of) salad now, has some decent outfits). The growth is incredible, 
          and it's mostly due to each other. You've had such a positive impact on my life, and I know I'd be a much much worse person
          if I had never met you. 
        " />
        <TopPhoto index={8} image={'livvy-dress.jpg'} text="
          And I figured it was only right to include one photo of each of us to show off how good we look. I just love something about 
          your pose in this one. Obviously I have tons of options to choose from in the 'Liv looking amazing' department, but I like
          this one for now.
        " />
        <TopPhoto index={9} image={'zoom-face.jpg'} text="
          Zoom face! You've given me a lot more confidence in my appearance, and one of my favorite moments is when
          you look me up and down before climbing onto me or touching me.
        " />
      </div>
    </div>
  );
};

export default AllTimeTopPhotos;
