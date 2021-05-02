
export const authorizeToken = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.token) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
}

export const authorizeTokenForLogin = (to, from, next) => {
  if (localStorage.token) {
    next({ path: '/' })
  } else {
    next()
  }
}
