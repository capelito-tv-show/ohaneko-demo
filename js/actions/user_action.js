import { FETCH_ALL_ACTIVITIES } from './type'
import * as firebase from 'firebase'

export const fetchAllActitivities = () => {
  return { type: FETCH_ALL_ACTIVITIES, payload: allActivitiesData }
}

// const ref = firebaseDb.ref()

export const allActivitiesData = [
  {
    name: 'suganomasaki',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'hげっと'
  },
  {
    name: 'hugagahugahugako',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'ふがhぐあhぐあ'
  }
]
