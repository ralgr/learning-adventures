import firebase  from '../../config/firebase.js'
import router from '../../router'

export default (url, comment, author) => {

    let d = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log(firebase.db);

    firebase.db.collection('dogschat')
      .add(
        {
          url,
          comment,
          info: `Posted by ${author != '' ? author : 'Unknown'} on ${days[d.getDay()]}`,
          created_at: new Date().getTime()
        }
      )
      .then(
        router.go(-1)
      )
}
