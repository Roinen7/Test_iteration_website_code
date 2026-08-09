import {defineSchema} from 'sanity'
import post from './post'
import author from './author'

export default defineSchema({
  name: 'default',
  types: [post, author],
})
