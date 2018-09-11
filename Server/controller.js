module.exports = {
    getUsers: (req, res) => {
        //this variable is temporary until auth is set up.
        const users_id = 1        

        req.app.get('db').get_users([users_id])
        .then((friendList) => res.send(friendList))
    }
}