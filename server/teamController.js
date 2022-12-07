const players = [
    {
        id: 1,
        fname: 'Dak',
        lname: 'Prescott',
        position:'Quarterback'
    },
    {
        id: 2,
        fname: 'Micah',
        lname: 'Parsons',
        position: 'Linebacker'
    },
    {
        id: 3,
        fname: 'Tony',
        lname: 'Pollard',
        position:'Running Back'
    },
    {
        id: 4,
        fname: 'CeeDee',
        lname: 'Lamb',
        position:'Wide Reciver'
    },
    {
        id: 5,
        fname: 'Michael',
        lname: 'Gallup',
        position:'Wide Reciver'
    },
    {
        id: 6,
        fname: 'Odell',
        lname: 'Beckham Jr',
        position:'Wide Reciver'
    }
   
];

const playerId = 7;

module.exports = {
    getPlayers: (req, res) => {
        res.status(200).send(players)
    },
    postPlayer: (req, res) => {
        const {fname, lname, position} = req.body
        players.push({
            id:playerId,
            fname,
            lname,
            position
        })
        res.status(200).send(players)
        playerId++
    }
}


