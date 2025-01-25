import Download from "./Download"
import Phone from "./Phone"

const FreeDownlod = () => {
  return (
    <section className=" flex flex-col-reverse gap-10 justify-center items-center xl:flex-row">
        <Download/>
        <Phone/>
    </section>
  )
}

export default FreeDownlod