module.exports = {

    getCurrentUser: (req, res) => {

        const currentUser = req.session.user.users_id
        req.app.get('db').get_user([currentUser])
            .then((user) => {
                res.status(200).send(user[0])
            })
            .catch((err) => console.log(err))
    },

    getFriends: (req, res) => {
        let currentUser = req.session.user.users_id
        req.app.get('db').get_friends([currentUser])
            .then((friendList) => {
                console.log(friendList, 89675)
                res.send(friendList)
            })
    },

    updateUser: (req, res) => {
        const { firstName, lastName, gender, hairColor, eyeColor, hobby, birthDay, birthMonth, birthYear } = req.body
        let currentUser = req.session.user.users_id

        req.app.get('db').update_user([firstName, lastName, gender, hairColor, eyeColor, hobby, birthDay, birthMonth, birthYear, currentUser])
            .then((updatedInfo) => {
                res.send(updatedInfo[0])
            })
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

    removeFriend: (req, res) => {
        let { friend } = req.body
        let currentUser = req.session.user.users_id

        req.app.get('db').delete_friend([friend, currentUser])
            .then((updatedList) => res.send(updatedList))
    },

    searchFriends: async (req, res) => {
        let currentUser = req.session.user.users_id
        let page = req.params.page
        let { name, input } = req.query
        let users = []
        if (name === 'first_name') {
            users = await req.app.get('db').filter_first([input, currentUser, page])
        } else if (name === 'last_name') {
            users = await req.app.get('db').filter_last([input, currentUser, page])
        } else {
            users = await req.app.get('db').get_all_users([currentUser, page])
        }
        req.app.get('db').check_friend([currentUser])
            .then(friends => {
                let allUsers = users.map(user => {
                    friends.forEach(friend => {
                        if (user.users_id === friend.friends_id) {
                            user.isFriend = true
                        }
                    })
                    return user
                })
                res.send(allUsers)
            })
    },

    countUsers: (req, res) => {
        let currentUser = req.session.user.users_id
        let { name, input } = req.query

        if (name === 'first_name') {
            req.app.get('db').count_first([currentUser, input])
            .then((count) => res.send(count))
        } else if (name === 'last_name') {
            req.app.get('db').count_last([currentUser, input])
            .then((count) => res.send(count))
        } else {
            req.app.get('db').user_count([currentUser])
                .then((count) => res.send(count))
        }
    }
}

