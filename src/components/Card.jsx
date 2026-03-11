export default function Card({title,children}){

return(

<div className="glass p-6">

<h3 className="text-xl font-semibold mb-4">
{title}
</h3>

<div className="text-gray-400">

{children}

</div>

</div>

)

}