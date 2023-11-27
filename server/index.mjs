import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
app.use(cors())
app.use(bodyParser.json())
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.get('/create', (req, res) => {
//   res.send({
//     "firstName": req.body.firstName,
//     "surName": req.body.surName,
//     "team": req.body.team,
//     "position": req.body.position,
//     "email": req.body.email,
//     "phoneNumber": req.body.phoneNumber
// })
// })

app.post('/create', urlencodedParser, (req, res) => {
  console.log(req.body)
  res.send({
      "Firstname": req.body.firstName,
      "Lastname": req.body.surName,
      "Team": req.body.team,
      "Position": req.body.position,
      "Email": req.body.email,
      "Phonenumber": req.body.phoneNumber
  })
})

app.listen(3001, console.log('server started!'))