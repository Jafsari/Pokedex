export const check = () => {
    if (count === 2) {
        return;
    }
    let count = 0;
    setInterval(function(){
        count++
    },1000)
    check()
}

export const reduxAPIRequest = (data,route,action1,action2) => {
    let BASE_URL = `http://localhost:9000/api/pokemon/${route}`
    return dispatch => {
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
        dispatch(action(information))
     }).catch(e => {
      console.log(e)
      return dispatch(action2('Done'))
     })
    }
}