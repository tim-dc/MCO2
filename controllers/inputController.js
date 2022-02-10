const inputController = {

    getHomePage: function(req, res){
        res.render('home');
    },

    getIsolationLevel: function(req, res){
        const isolevel = req.body.iso-level;
    }
}

module.exports = inputController;