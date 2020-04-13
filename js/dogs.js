
var iTemp = 12;
var node = "Test";

var dogs = [
    {
    "id": 0,
    "name": "Prosh",
    "approxAge": 0.5,
    "pic": ["Prosh.jpg"],
    "bio": "Prosh, a gentle giant, almost died when he was hit by a car in Russia when he was still only a pup. He was lucky someone noticed him and didn\'t leave him behind. Then he had a series of operations to save his leg which were successful. \n Almost a year later he is a gorgeous, loving, friendly and confident boy. He is so active and playful you would never believe what had happened to him! \n He is neutered, vaccinated and ready to meet his forever family.",
    "size": "large",
    "childFriendly": true,
    "dogFriendly": true,
    "longWalks": true,
    "catFriendly": true
    }
 , {
    "id": 1,
    "name": "Cora",
    "approxAge": 0.5,
    "pic": ["Cora.jpg"],
    "bio": "Cora is a typical furry baby - she loves playing, loves being mischievous at times, enjoys her naps and wants everyone to be her friend. She is an absolutely adorable 5.5 months old girl and is looking for her perfect family. Very people orientated, great with dogs. She is a lively, confident and a super friendly, cuddly pup.\n She has had limited but positive introductions to cats, but she is such a sweetheart, that we are confident she can get on with cats. She can be the only dog or a second dog in the family. No small children please.",
    "size": "medium",
    "childFriendly": false,
    "dogFriendly": true,
    "longWalks": true,
    "catFriendly": true
    }
 , {
    "id": 2,
    "name": "Gosha",
    "approxAge": 1,
    "pic": ["Gosha.jpg"],
    "bio": "Gosha is just under 1 year old. He was abandoned as a young puppy and while living in the street, still only few months old, he was hit by a car and lost his leg. \n Despite such a tough start in life, he is a sweet, loyal and loving boy who loves cuddles and play and who wants to enjoy life regardless.\nGiven his reduced mobility, Gosha cannot go for long walks. His walks are currently limited to 15-25 minutes per day. That said, he really enjoys walking in parks and fields.\nGosha needs a quiet adult only home in an area suitable for quiet walks and away from busy human and road traffic.",
    "size": "large",
    "childFriendly": false,
    "dogFriendly": true,
    "longWalks": false,
    "catFriendly": false
    }
 ,  {
    "id": 3,
    "name": "Frankie",
    "approxAge": 0.5,
    "pic": ["Frankie.jpg"],
    "bio": "Frankie s a soppy 6-7 month old pup who loves dog and human company and affection. Loves long walks; has an interest in small furries and large birds. He needs toys to occupy himself at home. \n Great personality, chatty, loyal, loves his food and is generally full of life! Enjoys snuggles on the sofa and has his own favourite television programmes. He is very good with dogs off the lead but can be a little excitable/lead frustrated. \n Frankie is medium sized - about 15 kg and 45cm in height (up to the shoulder). Unlikely to grow further.",
    "size": "medium",
    "childFriendly": false,
    "dogFriendly": true,
    "longWalks": true,
    "catFriendly": false
    }
 , {
    "id": 4,
    "name": "Pasha",
    "approxAge": 0.5,
    "pic": ["Pasha.jpg"],
    "bio": "Black Lab cross. He was found abandoned at a waste disposal point surrounded by busy roads at the age of 2 months. \n He is gentle, affectionate, curious. He enjoys his walks in the park, snuggles on the sofa , play time with toys and most of all, being part of a loving and caring family.", 
    "size": "medium",
    "childFriendly": true,
    "dogFriendly": true,
    "longWalks": true,
    "catFriendly": true
 }
 , {
    "id": 5,
    "name": "Sasha",
    "approxAge": 0.5,
    "pic": ["Sasha.jpg"],
    "bio": "Sasha is a 6 months old mini- German Shepherd cross. She was abandoned on a dump in Alexin, Tula region, when she was only 4-6 weeks old. Working together with a local volunteer we rescued her and brought her to the UK. \n She loves long walk, toys, has a particular interest in trainer and socks and enjoys snoozing in her comfy new bed or on the sofa. She is friendly with cats and other dogs.",        
    "size": "medium",
    "childFriendly": true,
    "dogFriendly": true,
    "longWalks": true,
    "catFriendly": true
 }
 , {
    "id": 6,
    "name": "Peppy",
    "approxAge": 0.5,
    "pic": ["Peppy.jpg","Peppy-2.jpeg"],
    "bio": "Peppy was left in a cardboard box on a street in Russia together with her siblings. \n She is about 6 months now, she is a very sweet girl and loves to be with people. Sometimes she gets frightened by unknown environment (who doesn\"t though!), but she loves tasty treats, and it\"s easy to comfort her.",
    "size": "small",
    "childFriendly": true,
    "dogFriendly": true,
    "longWalks": true,
    "catFriendly": true
 }
 , {
    "id": 7,
    "name": "Daizy",
    "approxAge": 0.5,
    "pic": ["Daizy.jpg","Daizy-2.jpg"],
    "bio": "Daizy is a 7 month old baby girl who is literally a ball of fur powered by love and happiness! \n Daisy was captured as a stray pup by the municipal authorities of an Eastern Siberian town and put in a kill shelter. She was rescued and brought to a private shelter in the Moscow region where we met her. \n She might look a bit big on the photos but she is actually a medium size dog who weights 17Kg. \n She is active, playful and wants to be included in everything around her. She might be cautious with new people but a tasty treat solves the problem. \n Since she has spent most of her puppyhood in a kennelled shelter environment, she needs a bit of patience, training and good socialisation. \n Friendly will all dogs and some cats. Will be suitable for an active family with older kids.",
    "size": "medium",
    "childFriendly": true,
    "dogFriendly": true,
    "longWalks": true,
    "catFriendly": true
 }
 , {
    "id": 8,
    "name": "Cooper",
    "approxAge": 0.5,
    "pic": ["Cooper.jpg"],
    "bio": "A gorgeous, smart, playful, confident 6 month old lab cross boy. \n He is looking for a family who loves long and active walks and who are prepared to invest some time into his training as he is still only a pup. \n He loves toys, outdoors and can be quite bouncy when he plays. No young children or cats please. A secure garden is essential.",
    "size": "medium",
    "childFriendly": false,
    "dogFriendly": true,
    "longWalks": true,
    "catFriendly": false
 }
 , {
    "id": 9,
    "name": "Mishka",
    "approxAge": 0.5,
    "pic": ["Mishka.jpg"],
    "bio": "Abandoned girl who was living in a shelter with over 700 dogs. As hard as the shelter tries, they cannot give them the care the puppy needs. \n She is a wonderful mixture of energy, affection and thirst for life. She is very active, playful, loves long walks in the woods or on the beach. She is still quite nervous of new people and noisy places but is improving. Does not like being left alone. \n Whilst Mishka is friendly with dogs and cats, she is quite full on with them, so a home where she is the only pet is preferable.",
    "size": "medium",
    "childFriendly": false,
    "dogFriendly": false,
    "longWalks": true,
    "catFriendly": false
 }
 , {
    "id": 10,
    "name": "Ellie",
    "approxAge": 0.5,
    "pic": ["Ellie.jpg","Ellie-2.jpg","Lapa-pups.jpg"],
    "bio": "Ellie, together with her brother Max, was found abandoned in a ditch when she was 2 months old. \n Cuddly and at times comical, confident and friendly, great with other dogs, loves kids and people. \n She is a mixed breed girl and will probably grow into a medium size dog as at the age of 5 months she is just 8kg. \n We are looking for a loving family with kids (6+), another suitable canine companion may be an advantage as she is very playful. She might be ok with some cats but preferably not.",
    "size": "medium",
    "childFriendly": true,
    "dogFriendly": true,
    "longWalks": true,
    "catFriendly": false
 }
 , {
    "id": 11,
    "name": "Max",
    "approxAge": 0.5,
    "pic": ["Max.jpg","Lapa-pups.jpg"],
    "bio": "Found abandoned in a ditch when they were 2 months old. He loves attention but is not pushy - she loves a hug and a cuddle but would wait for your invitation first. \n Max loves playing with toys and going for walks. Great with other dogs and also good with cats.",
    "size": "small",
    "childFriendly": true,
    "dogFriendly": true,
    "longWalks": true,
    "catFriendly": true
 }
 ];
