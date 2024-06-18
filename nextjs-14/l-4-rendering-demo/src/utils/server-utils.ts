import "server-only"
const ServerSideFunction = () => {

    console.log(
        `use multiple libraries,
        use environment variables,
        interact with a database,
        process confidential information`
    )
  return "server result"
}

export default ServerSideFunction