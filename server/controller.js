module.exports = {
  getAll: (req, res, next) => {
    const db = req.app.get('db')

    db.get_punches()
    .then(response => res.status(200).send(response))
    .catch( err => {
      res.status(500).send({errorMessage: 'cannot get punches!!'})
      console.log(err)
    })
  },
  addPunch: (req, res, next) => {
    const db = req.app.get('db')
    let {date, day, hour, minute, daynight, type} = req.body

    db.add_punch({date, day, hour, minute, daynight, type})
    .then(response => res.status(200).send(response))
    .catch( err => {
      res.status(500).send({errorMessage: 'cannot add punch'})
      console.log(err)
    })
  },
  deletePunch: (req, res, next) => {
    const db = req.app.get('db')
    let {id} = req.params

    db.delete_punch({id})
    .then(response => res.status(200).send(response))
    .catch( err => {
      res.status(500).send({errorMessage: "couldn't delete punch"})
      console.log(err)
    } )
  },
  editPunch: (req, res, next) => {
    const db = req.app.get('db')
    let {date, day, hour, minute, daynight, type} = req.body
    let {id} = req.params

    db.edit_punch({id, date, day, hour, minute, daynight, type})
    .then(response => res.status(200).send(response))
    .catch(err => {
      res.status(500).send({errorMessage: "couldn't edit punch"})
      console.log(err)
    })
  }
}