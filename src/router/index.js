import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const Recommend = (resolve) => {
  import('@/page/Recommend').then((module) => {
    resolve(module)
  })
}
const Rank = (resolve) => {
  import('@/page/Rank').then((module) => {
    resolve(module)
  })
}

const RankDetail = (resolve) => {
  import('@/page/RankDetail').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('@/page/Search').then((module) => {
    resolve(module)
  })
}


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
    },

    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: '/rank/rankdetail/:id',
          component: RankDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
  ]

})
