export default function ({$axios}, inject) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
  inject('api', {
    GET_TODOS: (config) => $axios.$get('https://jsonplaceholder.typicode.com/todos/1', config)
  })
}
