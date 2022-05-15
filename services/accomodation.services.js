// const dev = process.env.NODE_ENV !== 'production'

// export const server = dev
//   ? 'http://localhost:3000'
//   : 'https://your_deployment.server.com'

export const getAllAccommodation = async () => {
  const res = await fetch(`/api/accommodation`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  const result = await res.json()
  return result
}

export const getOneAccommodation = async (id) => {
  const res = await fetch(`/api/accommodation/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  const result = await res.json()
  return result
}
