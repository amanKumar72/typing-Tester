
window.onload= ()=>{
    let Time=localStorage.getItem("time");
    let Type=localStorage.getItem("type");
    document.querySelector(".time").innerHTML=Time;
    document.querySelector(".type").innerHTML=Type;
}


let text=document.querySelector("#randomText");          //area where random txt is display
let start=document.querySelector(".start");              //button throught which we can try again 
let test=document.querySelector("#typedText");           //the area where we type
let min=document.querySelector("#min");                  //where minutes are displayes
let sec=document.querySelector("#sec");                  //where minutes are displays
let close=document.querySelector("#plus");
let keystrokes=document.querySelector("#keystrokes");
let wrongWords=document.querySelector("#wrongWords");
let correctWords=document.querySelector("#correctWords");
let accuracy=document.querySelector("#accuracy");
let wpm=document.querySelector("#wpm");


const easy=[   //Text for easy typing test
    "The quick brown fox jumps over the lazy dog. This sentence is a classic example for typing speed tests. It contains a mix of letters and words to challenge your typing abilities.",
    "In a world full of possibilities, seize the moment and make a difference. Your actions today shape the future. Believe in yourself, and success will follow your every step.",
    "The sun sets on the horizon, casting a warm glow across the landscape. Nature's beauty is a reminder of the simple joys in life. Take a moment to appreciate the world around you.",
    "Efficiency is the key to productivity. Streamline your tasks, prioritize, and conquer your goals. With focus and determination, you can achieve more than you ever thought possible.",
    "Imagination knows no bounds. Let your creativity soar and explore new realms of possibility. Every idea, no matter how small, has the potential to spark something extraordinary.",
    "Life is a journey filled with twists and turns. Embrace the challenges, learn from the experiences, and celebrate the victories. Each moment contributes to the tapestry of your unique story.",
    "Beneath the starry night sky, dreams come alive. Reach for the stars, for in the vastness of the cosmos, endless opportunities await those with the courage to chase their aspirations.",
    "Simplicity is the ultimate sophistication. Clear your mind, focus on the essentials, and find beauty in the uncomplicated. Sometimes, the most profound truths are found in the simplest of things.",
    "Wisdom is a treasure that grows with time. Seek knowledge, learn from every encounter, and let your experiences shape you into a wiser and more enlightened individual.",
    "Gratitude is a powerful force. Cultivate an attitude of thankfulness for the blessings in your life. A grateful heart attracts positivity and fosters a sense of contentment and joy.","Jelly beans are colorful and sweet candies that come in many flavors like cherry, lemon, and grape. They're fun to eat and great for sharing with friends!",
    "The sun is shining brightly in the sky today. Birds are chirping happily among the trees. Flowers of all colors are blooming in the garden. It's a beautiful day to go for a walk.",
    "Sam and Emily went to the park to play. They brought a ball, a kite, and some snacks. They ran, laughed, and had a lot of fun together. The sun was warm, and the breeze felt nice on their faces.",
    "The cat sat on the mat near the door. It purred softly, enjoying the warmth of the room. A toy mouse lay nearby, waiting for someone to play with it. The cat blinked lazily, feeling quite content.",
    "My favorite color is blue. It reminds me of the sky on a clear day. Blue can be calm and peaceful, like a gentle stream. I like to wear blue clothes because they make me feel relaxed.",
    "The big red apple fell from the tree. It landed softly on the green grass below. A squirrel quickly scurried over to investigate. It sniffed the apple and then took a tiny nibble before scampering away.",
    "Tim and Lisa rode their bikes to the park. They brought sandwiches and juice for a picnic. They found a shady spot under a tree and spread out a blanket. They laughed and talked while enjoying their lunch in the fresh air.",
    "The moon shines brightly in the night sky. Stars twinkle all around it. It's a peaceful night with a gentle breeze. I like looking at the moon before going to bed; it feels comforting somehow.",
    "The dog barked loudly at the mailman. It wagged its tail enthusiastically as if saying hello. The mailman smiled and gave the dog a treat. They had become friends over time, despite the initial barking.",
    "The sun was shining brightly in the sky, and the birds were singing their songs. It was a perfect day for a picnic. Alice and her friends packed some sandwiches, fruits, and drinks in a basket and headed to the park. They found a nice spot under a big oak tree and spread a blanket on the grass. They enjoyed their food and played some games. Alice felt happy and relaxed. She loved spending time with her friends in nature.",
    "Tom was a curious boy who liked to explore new things. He always had a lot of questions about the world around him. One day, he decided to visit the library and look for some books that could answer his questions. He walked along the shelves and picked up books that caught his eye. He found books about animals, plants, stars, history, and more. He sat down at a table and opened the first book. He was amazed by the pictures and facts he saw. He felt like he had entered a new world of wonder.",
    "Anna loved to dance. She had been taking ballet lessons since she was four years old. She practiced every day and dreamed of becoming a professional dancer. She admired the grace and beauty of the ballerinas she saw on TV and in magazines. She wanted to be like them. She worked hard and improved her skills. She participated in many recitals and competitions. She impressed her teachers and parents with her talent and passion. She was determined to achieve her goal and make her dream come true.",
    "Jack was a brave pirate who sailed the seas in search of adventure and treasure. He had a loyal crew and a fast ship. He was not afraid of anything. He fought with other pirates, battled with sea monsters, and escaped from storms. He had a map that showed the location of a hidden island where a great treasure was buried. He followed the map and reached the island. He dug up the treasure and opened the chest. He was overjoyed by what he saw. He had found the most precious thing in the world: a book of stories.",
    "Emma was a smart girl who loved to read. She read all kinds of books, from fairy tales to mysteries to science fiction. She learned a lot from her books and enjoyed the stories and characters. She also liked to write her own stories. She used her imagination and creativity to make up her own plots and characters. She wrote about things that interested her or things that she wished would happen. She shared her stories with her friends and family. They praised her for her writing and encouraged her to keep it up.",
    "Sam was a funny clown who worked at the circus. He wore a colorful costume and a big red nose. He made people laugh with his jokes and tricks. He juggled balls, rode a unicycle, and squirted water from a flower. He also had a cute dog named Spot who helped him with his act. Spot could do tricks like roll over, play dead, and fetch. Sam and Spot were a great team. They entertained the audience and made them happy. Sam loved his job and his dog. He was a happy clown.",
    "Lily was a beautiful princess who lived in a castle. She had everything she wanted, but she was not happy. She felt lonely and bored. She wanted to have friends and fun. She wanted to see the world and have adventures. She decided to run away from the castle and explore the land. She disguised herself as a peasant girl and left the castle. She met many people and saw many places. She had many adventures and learned many things. She realized that the world was not as simple and easy as she thought. She also realized that she missed her home and family.",
    "Ben was a clever inventor who liked to make new things. He had a workshop in his basement where he kept his tools and materials. He used things like wires, batteries, light bulbs, magnets, and motors. He also used things that he found in the trash, like cans, bottles, cardboard, and plastic. He combined these things and made his own inventions. He made things like a radio, a fan, a robot, and a rocket. He tested his inventions and improved them. He had fun and learned a lot. He was proud of his inventions and showed them to his friends and family.",
    "Zoe was a shy girl who did not like to talk to strangers. She was afraid of what they might think or say. She preferred to stay at home and play with her toys. She did not have many friends and felt lonely. One day, she met a friendly cat who came to her window. The cat was black and white and had green eyes. It meowed and rubbed its head against the glass. Zoe opened the window and petted the cat. The cat purred and licked her hand. Zoe felt a warm feeling in her heart. She had made a new friend.",
    "Max was a sporty boy who loved to play soccer. He played on a team with his friends and practiced every week. He wanted to be the best player on the team and score the most goals. He was fast and strong and had good skills. He also had a good coach who taught him how to play better. He listened to his coach and followed his advice. He worked hard and improved his game. He became a better player and a better teammate. He helped his team win many games and had a lot of fun."];


const medium = [ // text for medium typing test
    "The prodigious invention captivated audiences worldwide, its intricacies and functionality enthralling even the most discerning critics. Its innovative design merged seamlessly with cutting-edge technology, eliciting widespread admiration and sparking a fervor for advancement in the industry.",
    "Amidst the bustling metropolis, the amalgamation of cultures and traditions creates a vibrant tapestry of diversity. The effervescent energy of the cityscape intertwines with the kaleidoscope of flavors from its eclectic culinary scene. Each thoroughfare boasts a melange of architectural marvels, testament to the historical legacy and progressive vision that harmoniously coexist within this urban landscape.",
    "The scholarly discourse on this intricate subject matter spans various disciplines, amalgamating diverse perspectives to elucidate its multifaceted nature. Scholars grapple with the complexities inherent in unraveling its enigmatic core, utilizing empirical evidence and theoretical frameworks to navigate the labyrinthine depths of this intellectual pursuit. The synthesis of these diverse methodologies yields a comprehensive understanding, albeit one continually evolving amidst the ever-expanding frontier of knowledge.",
    "In the idyllic countryside, the verdant landscapes weave a tranquil vista, punctuated by undulating hills and meandering streams. Nature's symphony harmonizes with the bucolic charm, offering a sanctuary from the frenetic pace of urban life. The rustic cottages nestled amidst sprawling orchards exude an aura of serenity, inviting contemplation and fostering a deep connection with the innate rhythms of the natural world.",
    "The convoluted narrative of this epic tale traverses realms of mystique and adventure, intertwining the destinies of disparate characters in a tapestry of fate and circumstance. The protagonist, amidst trials and tribulations, embarks on a quest fraught with peril and self-discovery. Themes of valor and redemption resonate throughout, juxtaposed against a backdrop of conflict and moral ambiguity, captivating readers with its profound exploration of the human condition.",
    "The symposium convened erudite minds from diverse fields, fostering dialogue and exchange of ideas on pressing global issues. Academics expounded upon the intricacies of socio-economic paradigms, while luminaries in the scientific community unveiled pioneering research at the forefront of technological innovation. Concurrent workshops and seminars delved into nuanced topics, igniting discourse that transcended disciplinary boundaries, epitomizing the collaborative spirit driving progress in this intellectual milieu.",
    "The ethereal beauty of the celestial canvas, punctuated by myriad constellations, evokes a sense of wonder and contemplation. Astronomers, equipped with sophisticated telescopic apparatus, peer into the vast expanse, unraveling the enigmatic mysteries of the cosmos. They discern patterns in the cosmic dance of celestial bodies, unlocking insights into the fundamental forces shaping the universe, fostering a deeper appreciation for the cosmic ballet that unfolds across the expansive tapestry of the night sky.",
    "The verdant expanse of the botanical gardens offers a sanctuary teeming with biodiversity, an oasis of tranquility amidst the bustling cityscape. Meandering pathways wind through lush foliage, showcasing a symphony of colors and fragrances that tantalize the senses. Botanists meticulously curate this verdant haven, preserving endangered species and cultivating a living archive of botanical wonders. Visitors, enraptured by the kaleidoscope of flora, embark on a sensory journey, forging a deeper connection with the natural world.",
    "The symphony's crescendo resonated within the opulent concert hall, enrapturing the audience in a melodic embrace. The virtuoso conductor, wielding the baton with finesse, guided the orchestra through a harmonious journey of highs and lows, weaving a tapestry of emotive notes that stirred the soul. Each musician, a maestro in their own right, contributed to the ensemble's collective brilliance, creating a sonorous masterpiece that transcended temporal bounds, leaving an indelible mark on the hearts of those fortunate enough.",
    "The labyrinthine corridors of the ancient castle whispered tales of bygone eras, each weathered stone bearing witness to centuries of history. Tapestries adorned the walls, depicting sagas of valor and intrigue, while flickering torchlight cast dancing shadows that added an air of mystique to the sprawling halls. Explorers traversed the castle's nooks and crannies, unraveling the enigmatic secrets nestled within its storied walls, each discovery breathing life into the faded echoes of a time long past.",
    "The meandering river, snaking through verdant valleys, mirrored the azure sky above, its gentle ripples carrying whispers of tranquility. Along its banks, clusters of willows swayed in harmony with the breeze, their graceful boughs reaching out as if in conversation with the water below. Ducks and swans, inhabitants of this aquatic realm, glided serenely across the reflective surface, adding a touch of grace to the idyllic tableau painted by nature's hand.",
    "The polymath, with astute intellect and diverse expertise, navigated various domains of knowledge with a profound sense of curiosity. Their insatiable thirst for learning propelled them through the intricate corridors of art, science, and philosophy. Juxtaposing disciplines, they sought connections between seemingly disparate realms, illuminating the intersections and fostering innovative insights that transcended conventional boundaries. Their legacy endures as a testament to the boundless potential of interdisciplinary inquiry.",
    "The effervescent marketplace bustled with a myriad of vendors, each stall an eclectic tapestry of colors and wares. Aromas wafted through the air, enticing passersby with the promise of culinary delights and exotic spices. Merchants adorned their displays with meticulous care, their animated exchanges weaving a vibrant backdrop to the lively commerce. Amidst the vibrant chaos, a sense of community thrived, bridging gaps and fostering connections amidst the diverse tapestry of cultures converging in this bustling hub.",
    "The ethereal twilight enveloped the cityscape, casting a soothing hue over the skyline ablaze with the last vestiges of sunlight. The city, now a tapestry of illuminated skylines and twinkling lights, stirred to life as the nocturnal rhythm began its enchanting cadence. Silhouettes of bustling figures traversed the streets, their purposeful strides echoing the pulse of urban existence. Amidst the urban symphony, pockets of serenity beckoned, offering respite from the fervent tempo of metropolitan life.",
    "The verdant meadows sprawled across undulating landscapes, a serene haven punctuated by wildflowers swaying in the gentle breeze. The symphony of birdsong harmonized with the rustling leaves, painting a picturesque scene of natural tranquility. Rabbits and deer frolicked amidst the lush expanse, embodying the untamed spirit of the wilderness. Nature's palette, vibrant and diverse, unfurled in this idyllic setting, inviting wanderers to immerse themselves in its unspoiled beauty.",
    "The labyrinthine streets of the ancient city meandered past architectural wonders, each edifice bearing the imprint of a bygone era. Cobblestone pathways intertwined with bustling markets, where merchants traded goods amidst a tapestry of languages and cultures. Towering monuments stood as testaments to the city's storied past, while narrow alleys whispered tales of intrigue and history. Explorers wandered through this living museum, discovering the layers of heritage woven intricately into the fabric of this venerable"]

const hard= [ //text for Hard typing Test
    "The enigmatic labyrinthine conundrum posed a Herculean challenge to the erudite cognoscenti, navigating through the vicissitudes of epistemological quandaries. The esoteric elucidation of abstruse phenomena evaded facile comprehension, demanding a perspicacious acumen to unravel the arcane enigmas enshrined within the annals of existential intricacies.",
    "The ineffable opulence of the celestial expanse, replete with resplendent constellations adorning the firmament, imbued the nocturnal panorama with an ethereal grandeur. The ineffaceable allure of the cosmos beckoned the intrepid astronomer to embark upon a profound odyssey, unraveling the esoteric secrets concealed within the cosmic tapestry of astral marvels.",
    "The transcendental synthesis of metaphysical paradigms, encapsulating the quintessence of ontological speculation, fostered an esoteric milieu wherein epiphanies burgeoned. The inefficacy of mere linguistic vestiges to encapsulate the profundity of existential abstractions posed a perennial quandary, necessitating an ineffable lexicon to articulate the ineffable intricacies of the human condition.",
    "The ineffable profundity of the metaphysical milieu elucidates the labyrinthine intricacies of existential conundrums. The quintessential amalgamation of ontological paradigms bespeaks a transcendental veracity beyond mundane comprehension, necessitating a perspicacious acumen to navigate the nebulous terrain of epistemological quandaries. The esoteric tapestry of existential vicissitudes unveils an enigmatic chiaroscuro, wherein the ineffaceable nebulae of human cognition strive to apprehend the unfathomable mysteries enshrined within the annals of sentient existence.",
    "The ineffable juxtaposition of nebulous phenomena within the interstices of existential paradigms heralds an enigmatic tapestry of epistemological quandaries. The inefficacy of quotidian linguistic tools to encapsulate the transcendental essence of metaphysical abstractions precipitates an insurmountable chasm between empirical discourse and ontological veracity. The labyrinthine convolution of existential vicissitudes proffers an inexorable odyssey through the nebulous crevices of sentient cognition, inviting a pantheon of erudite scholars to decipher the arcane lexicon enshrined within the annals of philosophical inquiry.",
    "The enigmatic labyrinth of metaphysical conjectures, entwined within the arcane fabric of existential quandaries, elicits a perennial quest for epistemological elucidation. The ineffable confluence of ontological abstractions and existential vicissitudes bespeaks a kaleidoscopic panorama of intellectual inquiry, wherein erudite scholars traverse the labyrinthine corridors of sentient cognition. The esoteric tapestry of existential nuances unravels an enigmatic chiaroscuro, wherein the ineffaceable nebulae of human cognition strive to apprehend the unfathomable mysteries enshrined within the annals of sentient existence.",
    "The ineffable interplay of existential dilemmas within the metaphysical realm begets an enigmatic mosaic of epistemological complexities. The inefficacy of conventional linguistic tools to encapsulate the transcendental essence of ontological abstractions begets an unbridgeable schism between empirical discourse and existential veracity. The labyrinthine convolution of existential vicissitudes propels an inexorable odyssey through the nebulous recesses of sentient cognition, beckoning a pantheon of erudite savants to decipher the arcane lexicon enshrined within the annals of philosophical inquiry.",
    "The labyrinthine confluence of existential quandaries and metaphysical abstractions precipitates an ineffable panorama of epistemological inquiry. The inefficacy of customary linguistic paradigms to encapsulate the transcendental essence of ontological conjectures foments an insurmountable lacuna between empirical discourse and existential authenticity. The convoluted trajectory of existential vicissitudes ushers forth an inexorable odyssey through the nebulous recesses of sentient cognition, summoning a coterie of erudite cognoscenti to decipher the abstruse lexicon enshrined within the annals of philosophical scrutiny.",
    "The ineffable conglomeration of existential quandaries entangled within the metaphysical tapestry incites an insatiable pursuit of epistemological elucidation. The inadequacy of conventional linguistic tools to encapsulate the transcendental essence of ontological abstractions creates an unbridgeable chasm between empirical discourse and existential authenticity. The convoluted trajectory of existential vicissitudes propels an inexorable odyssey through the nebulous recesses of sentient cognition, summoning a cadre of erudite luminaries to decode the arcane lexicon enshrined within the annals of philosophical inquiry.",
    "The ineffable amalgamation of existential quandaries and metaphysical intricacies precipitates an enigmatic panorama of epistemological inquiry. The inadequacy of conventional linguistic tools to encapsulate the transcendental essence of ontological abstractions fosters an unbridgeable schism between empirical discourse and existential authenticity. The convoluted trajectory of existential vicissitudes propels an inexorable odyssey through the nebulous recesses of sentient cognition, beckoning a cohort of erudite scholars to unravel the abstruse lexicon enshrined within the annals of philosophical exploration.",
    "The ineffable confluence of existential quandaries entwined within the metaphysical tapestry engenders an insatiable pursuit of epistemological elucidation. The inadequacy of customary linguistic tools to encapsulate the transcendental essence of ontological abstractions breeds an unbridgeable chasm between empirical discourse and existential veracity. The convoluted trajectory of existential vicissitudes propels an inexorable odyssey through the nebulous recesses of sentient cognition, beckoning a consortium of erudite luminaries to decode the arcane lexicon enshrined within the annals of philosophical inquiry.",
    "The ineffable amalgamation of existential quandaries intertwined within the metaphysical fabric evokes an incessant pursuit of epistemological elucidation. The inadequacy of conventional linguistic tools to encapsulate the transcendental essence of ontological abstractions fosters an unbridgeable chasm between empirical discourse and existential authenticity. The convoluted trajectory of existential vicissitudes propels an inexorable odyssey through the nebulous recesses of sentient cognition, summoning a pantheon of erudite savants to unravel the abstruse lexicon enshrined within the annals of philosophical exploration.",
    "The ineffable confluence of existential quandaries interwoven within the metaphysical tapestry ignites an insatiable quest for epistemological elucidation. The inadequacy of conventional linguistic tools to encapsulate the transcendental essence of ontological abstractions engenders an unbridgeable chasm between empirical discourse and existential authenticity. The convoluted trajectory of existential vicissitudes propels an inexorable odyssey through the nebulous recesses of sentient cognition, beckoning a cohort of erudite scholars to decipher the arcane lexicon enshrined within the annals of philosophical inquiry.",
    "The ineffable amalgamation of existential quandaries enmeshed within the metaphysical fabric incites an unquenchable thirst for epistemological illumination. The inadequacy of customary linguistic tools"]



let time,type;
setTimeout(()=>{

    let ti=document.querySelector(".time").innerHTML;
    let ty=document.querySelector(".type").innerHTML;
    time=Number(ti);
    type={
        "easy":easy,
        "medium":medium,
        "hard":hard
    }
    letsGo(time,type[ty]);                                           //function ti start or try again the test letsGo(minutes,array of text)
    start.addEventListener("click",()=>                         //Called when we click Try again
    {   
        
        letsGo(time,type[ty]);
    })

},200)




function letsGo(minute,array){
    random=Math.floor(Math.random()*array.length);           //for random selection
    function randomParagraphs(){
        array[random].split("").forEach(span=>{              //split selected text in individual alphabets within an array
            text.innerHTML+=`<span>${span}</span>`;          //insert all alphabets in text area within a span          
        })
    }
    randomParagraphs();
    
    
    
    let inChar=document.querySelectorAll("#randomText span");  //select an individual span 
    let seconds=0;                                             //for time
    let i=0 ;                                                  //for traversing individual alphabets from original array
    let rightCount=0;                                          //to count right typed alphabets
    let wrongCount=0;                                          //to count wrong typed alphabets
    test.addEventListener("keydown",(event)=>{                  //when we pressed any key it from keybored it accesed by event
        if(i==0&&(rightKey(event))){
            seconds=minute*60+1;
            let interval=setInterval(()=>{
            seconds--;
            min.innerHTML=`${Math.floor(seconds/60)}`;
            sec.innerHTML=`${Math.floor(seconds%60)}`; 
            if(seconds==0||array[random][i]===undefined){
                clearInterval(interval);
                alert("STOP WRITING");
                let acc=Math.floor(rightCount/(rightCount+wrongCount)*100);
                let speed=Math.floor((rightCount/5)/((minute*60-seconds)/60));
                // console.log(`Right Typed Words=${rightCount}\nwrong words=${wrongCount}\nYour Typing Speed is ${speed}\nAccuracy=${acc}`);
                accuracy.innerHTML=`<span>Accuracy</span><span> ${acc}%</span>`;
                keystrokes.innerHTML=`<span>keystrokes</span><span>(${rightCount}|${wrongCount}) ${rightCount+wrongCount}</span>`;
                correctWords.innerHTML=`<span>Correct Words</span><span>${rightCount}</span>`;
                wrongWords.innerHTML=`<span>Wrong Words</span><span>${wrongCount}</span>`;
                wpm.innerHTML=`<p id="wpm">${speed}Wpm</p>`;
                result();
                min.innerHTML="00";
                sec.innerHTML="00";
                text.innerHTML="";
                test.value="";
                }
            },1000);
        }
        if(array[random][i]==event.key){                        //check typed value is correct or not
            if(rightKey(event)){                                // check key is a valid key i.e key is not a alt/ctrl/space/backspace/arrow key/tab/capslock/windows
                inChar[i].classList.add("correct");             //add class on spam
                rightCount++;                                   //increment right count 
            }
        }
        else{
            
            if(rightKey(event)){
                inChar[i].classList.add("incorrect");
                if(!(event.which==8))
                wrongCount++;
                // console.log(event);
            }
            
            
        }
        // console.log(event.which);      
        if(event.which==8){
            inChar[i].classList.remove("incorrect");
            inChar[i].classList.remove("correct");
            i--;
            inChar[i].classList.remove("incorrect");
            inChar[i].classList.remove("correct");
        } else if(rightKey(event)){
            i++;
        } else {
            i=i;
        }            
    });
    

}


function rightKey(event){
    return !(event.which==16||event.which==17||event.which==9||event.which==20||event.which==18||event.which==37||event.which==38||event.which==39||event.which==40||event.which==91||event.which==27||event.which==237||event.which==112||event.which==45||event.which==46||event.which==93||event.which==33||event.which==34||event.which==35||event.which==36||event.which==113||event.which==114||event.which==115||event.which==116||event.which==117||event.which==118||event.which==119||event.which==120||event.which==121||event.which==122||event.which==123)
}


//result watch
function result(){
    document.querySelector(".main").style.filter="blur(2px)";
    document.querySelector("#Result").style.opacity=1;
}

close.addEventListener("click",()=>{
    document.querySelector("#Result").style.opacity=0;
    document.querySelector(".main").style.filter="none";

})

function hide(event){
if(event.which==13){
    document.querySelector("#Result").style.opacity=0;
    document.querySelector(".main").style.filter="none";
}
}
