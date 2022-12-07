module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune :(req, res) => {
        const fortune = ['The Dallas Cowboys will win the SuperBowl', 'The Dallas Cowboys will get OBJ', 'The Dallas Cowboys will blowout the Eagles', 'The Vikings and Eagles will lose 3 games', 'Dak will not make stupid passes'];

        let randomIndex =Math.floor(Math.random() * fortune.length)
        let randomFortune = fortune[randomIndex]
        res.status(200).send(randomFortune)
    }

}