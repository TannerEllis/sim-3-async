module.exports = {

    getCurrentUser: (req, res) => {
        res.send(req.session.user)
      },

    getUsers: (req, res) => {
        //this variable is temporary until auth is set up.
            let currentUser = req.session.user.users_id

        req.app.get('db').get_friends([currentUser])
        .then((friendList) => res.send(friendList))
    },

    updateUser: (req, res) => {
        const {firstName, lastName, gender, hairColor, eyeColor, hobby, birthDay, birthMonth, birthYear} = req.body
        let currentUser = req.session.user.users_id
        console.log(req.session.user)

        req.app.get('db').update_user([firstName, lastName, gender, hairColor, eyeColor, hobby, birthDay, birthMonth, birthYear, currentUser])
        .then((updatedInfo) => res.send(updatedInfo))
    }
}