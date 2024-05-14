// import { Vue} from 'vue'
import { createRouter,createWebHistory} from 'vue-router'
import UpdateUser from "../components/UpdateUser.vue"
import UserForm from "../components/UserForm.vue"
import UserList from "../components/UserList.vue"
import deleteUser from "../components/deleteUser.vue"

// Vue.use(VueRouter)

const routes = [
  {
    path: '/list',
    name: 'list',
    component: UserList
  },
  {
    path: '/add',
    name: 'add',
    component: UserForm
  },
  {
    path: '/update',
    name: 'update',
    component: UpdateUser
  },
  {
    path: '/delete',
    name: 'delete',
    component: deleteUser
  }
]

const router = new createRouter({
   history:createWebHistory(),
//    base: process.env.BASE_URL,
   routes
})

export default router