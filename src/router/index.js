import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/services'
  },

  {
    path: '/services',
    name: 'services',
    component: () => import('@/screens/services'),
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/screens/dashboard'),
  },

  {
    path: '/monitoring',
    name: 'monitoring',
    component: () => import('@/screens/monitoring/index'),
  },

  {
    path: '/monitoring/:tag',
    component: () => import('@/screens/monitoring/tag'),
    children: [{
        path: 'jobs',
        name: 'monitoring-jobs',
        component: () => import('@/screens/monitoring/tag-jobs'),
        props: {
          type: 'jobs'
        },
      },
      {
        path: 'failed',
        name: 'monitoring-failed',
        component: () => import('@/screens/monitoring/tag-jobs'),
        props: {
          type: 'failed'
        },
      },
    ],
  },

  {
    path: '/metrics',
    redirect: '/metrics/jobs'
  },

  {
    path: '/metrics/',
    component: () => import('@/screens/metrics/index'),
    children: [{
        path: 'jobs',
        name: 'metrics-jobs',
        component: () => import('@/screens/metrics/jobs'),
      },
      {
        path: 'queues',
        name: 'metrics-queues',
        component: () => import('@/screens/metrics/queues'),
      },
    ],
  },

  {
    path: '/metrics/:type/:slug',
    name: 'metrics-preview',
    component: () => import('@/screens/metrics/preview'),
  },

  {
    path: '/jobs/:type',
    name: 'jobs',
    component: () => import('@/screens/recentJobs/index'),
  },

  {
    path: '/jobs/pending/:jobId',
    name: 'pending-jobs-preview',
    component: () => import('@/screens/recentJobs/job'),
  },

  {
    path: '/jobs/completed/:jobId',
    name: 'completed-jobs-preview',
    component: () => import('@/screens/recentJobs/job'),
  },

  {
    path: '/failed',
    name: 'failed-jobs',
    component: () => import('@/screens/failedJobs/index'),
  },

  {
    path: '/failed/:jobId',
    name: 'failed-jobs-preview',
    component: () => import('@/screens/failedJobs/job'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'services' && !Object.keys(window.Horizon).length) {
    next({
      name: 'services'
    })
  }
  next()
})


export default router
