import { Router } from 'express'
const router = Router()
import * as puppiesCtrl from '../controllers/puppies.js'


router.get('/puppies', puppiesCtrl.index)
router.get('/puppies/:id', puppiesCtrl.show)
router.post('/puppies', puppiesCtrl.create)
router.put('/puppies/:id', puppiesCtrl.update)
router.delete('/puppies/:id', puppiesCtrl.delete)

export {
  router
}
