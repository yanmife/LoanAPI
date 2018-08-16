const db = require('../../dbconnection');

const Refree = {
    getAllRefree: function (callback) {
        db.query("SELECT * FROM refree", callback);
    },

    getRefreeByid: function(id, callback) {
        db.query("SELECT * FROM refree WHERE refree_id = ?",  [id], callback);
    },

    addRefree: function(Refree, callback) {
        const dt = new Date();

        return db.query("INSERT INTO refree(firstName, surname, phoneNumber, email, employerAddress, officeBranch, user) VALUES(?,?,?,?,?,?,?)", [Refree.firstName, Refree.surname, Refree.phoneNumber, Refree.email, Refree.employerAddress, Refree.officeBranch, Refree.user, dt], callback);
    },

    deleteRefree: function(id, callback) {
        return db.query("DELETE FROM refree WHERE refree_id = ?", [id], callback);
    },

    updateRefree: function(id, Refree, callback) {
        return db.query("UPDATE refree SET firstName = ?, surname = ?, phoneNumber = ?, email = ?, employerAddress = ?, officeBranch = ? WHERE refree_id = ?", [Refree.firstName, Refree.surname, Refree.phoneNumber, Refree.email, Refree.employerAddress, Refree.officeBranch, id], callback);
    }
};

module.exports = Refree;