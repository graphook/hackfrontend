import requireLogin from './middleware/requireLogin'

import sendUi from './handlers/sendUi.handler.js'

const routes = [
  {
    method: 'get',
    path: '/*',
    handler: sendUi.bind(null, '../uiBuild/index.html')
  }
]

export default routes;
