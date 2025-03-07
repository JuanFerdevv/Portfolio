export const Footer=()=>{
    const currentYear=new Date().getFullYear();
    return(
       <footer className="mt-10 flex flex-row font-mono justify-end  space-x-2 text-black ">
        <h2 className="">
            Juan Calvache
        </h2>
        <span>- {currentYear}</span>
       </footer>
    )
}