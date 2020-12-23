const Redirect = {
  Fn: (path) => {
    window.location.href = path || '/'
  },
  Link: () => {},
}

export default Redirect
