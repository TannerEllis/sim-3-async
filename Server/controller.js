module.exports = {

    getCurrentUser: (req, res) => {
        res.send(req.session.user)
    },

    getFriends: (req, res) => {
        let currentUser = req.session.user.users_id

        req.app.get('db').get_friends([currentUser])
            .then((friendList) => res.send(friendList))
    },

    updateUser: (req, res) => {
        const { firstName, lastName, gender, hairColor, eyeColor, hobby, birthDay, birthMonth, birthYear } = req.body
        let currentUser = req.session.user.users_id
        console.log(req.session.user)

        req.app.get('db').update_user([firstName, lastName, gender, hairColor, eyeColor, hobby, birthDay, birthMonth, birthYear, currentUser])
            .then((updatedInfo) => res.send(updatedInfo))

    },

    authorized: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send('User Must Login')
        }
      },

      logout: (req, res) => {
        req.session.destroy()
        res.redirect('http://localhost:3000/')
      }
}