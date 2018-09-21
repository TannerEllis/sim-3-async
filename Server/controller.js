module.exports = {

    getCurrentUser: (req, res) => {
        const currentUser = req.session.user.users_id
        console.log(currentUser)
        req.app.get('db').get_user([currentUser])
        .then((user) => {
            console.log(user)
            res.status(200).send(user[0])})
        .catch((err) => console.log(err))
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
            .then((updatedInfo) => {
                console.log(updatedInfo)
                res.send(updatedInfo[0])})

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
      },

      addFriend: (req, res) => {
        let { friend } = req.body
        let currentUser = req.session.user.users_id

        req.app.get('db').add_friend([friend, currentUser])
        .then((updatedList) => res.send(updatedList))
      },

      searchFriends: (req, res) => {
        let currentUser = req.session.user.users_id

        req.app.get('db').search_friends([currentUser])
            .then((friendList) => res.send(friendList))
      }
}