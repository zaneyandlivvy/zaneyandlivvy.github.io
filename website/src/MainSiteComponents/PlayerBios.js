import React from "react";
import PlayerBio from "./PlayerBio";

function PlayerBios() {
    return (
        <div className="player-bios">
            <div>
                <PlayerBio
                    photo="livvy-bio.jpeg"
                    name="Olivia K. Wirsching"
                    aliases="Livvy, Bean, Mushroom, My Little Ketchup Bottle, Oleeeevia, OKW"
                    birthday="May the Fourth be with you, 2002"
                    height="The perfect height"
                    weight="Skinny legend"
                    strengths={
                        "Wicked intelligence, humor, short game, sex appeal, drawing (don't listen to her she's so good)"
                    }
                    weaknesses={
                        "Temperatures that aren't 72 degrees, stomach aches, dehydration"
                    }
                    hair="Absolutely gorgeous, and so soft"
                    eyes="My brown-eyed girl"
                    features={"Hourglass figure, adorable winter hats"}
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
                    weight="Ripped. That's all you need to know."
                    strengths={
                        "'Making things work', judging courses (spidey senses), can detect vegetables from miles away"
                    }
                    weaknesses={
                        "Anything artsy, socializing, being happy when his girlfriend leaves"
                    }
                    hair="Thick (he's got the multi-hair-in-one-hole thing going on), fun to touch when short"
                    eyes="Gorgeous bright blue"
                    features={"Arms like tree trunks, rock hard abs, Strangely short tongue, size 12.5 feet"}
                />
            </div>
        </div>
    );
}

export default PlayerBios;
