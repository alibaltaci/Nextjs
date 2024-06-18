// import { ServerComponentOne } from "@/components/server-component-one"
import { ClientComponetOne } from "@/components/client-component-one"
import { ServerComponentOne } from "@/components/server-component-one"

const InterleavingPage = () => {
  return (
    <>
        <h1>Interleaving Page</h1>
        {/* <ServerComponentOne /> */}
        {/* <ClientComponetOne /> */}

        <ClientComponetOne>
            <ServerComponentOne />
        </ClientComponetOne>
    </>
  )
}

export default InterleavingPage