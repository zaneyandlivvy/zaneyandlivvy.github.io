import React from "react";
import PlayerBio from "./PlayerBio";

function PlayerBios() {
    return (
        <div className="player-bios">
            <div>
                <PlayerBio
                    photo="livvy-bio.jpeg"
                    name="Olivia K. Wirsching"
                    aliases="Livvy, Bean, Oleeeevia, OKW"
                    birthday="May the Fourth be with you, 2002"
                    height="The perfect height"
                    weight="The perfect weight"
                    strengths={
                        "Wicked intelligence, humor, short game, drawing (don't listen to her she's so good)"
                    }
                    weaknesses={
                        "Temperatures that aren't 72 degrees, stomach aches, dehydration"
                    }
                    hair="Beautiful and soft"
                    eyes="Brown (thanks Van Morrison)"
                    features={"Adorable winter hats, at least three hair ties on her wrist at all times"}
                />
            </div>

            <div>
                <PlayerBio
                    photo="zane-bio.jpeg"
                    name="Zane M. Bookbinder"
                    aliases="Bookbin, Zbooks, Zaney, Z (only his mom)"
                    birthday={
                        "A federal holiday (we don't need to name the specific one), 2002"
                    }
                    height={"At least like 6' 2\", maybe more"}
                    weight="Ripped."
                    strengths={
                        "Databases, finding easier classes (spidey senses), detecting vegetables from miles away"
                    }
                    weaknesses={
                        "Anything artsy, socializing with people he doesn't like"
                    }
                    hair="Thick (he's got the multi-hair-in-one-hole thing going on), fun to touch when short"
                    eyes="Gorgeous bright blue"
                    features={"Strangely short tongue, size 12.5 feet"}
                />
            </div>
        </div>
    );
}

export default PlayerBios;
