import Feed from "@/Components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
   <h1 className="head_text  text-center" >Dicrib me
   <br className="max-md:hidden" />
   <span className="orange_gradient text-center">
    Ai Promot
   </span>
   </h1>
  
   <p className="desc text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ab nam,  voluptatum minus architecto, tempore illum cumque voluptate. Cumque.</p>
   <Feed/>
    </section>
  )
}
