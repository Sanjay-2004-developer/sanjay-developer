import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls } from "@react-three/drei"

export default function ThreeScene(){

return(

<Canvas>

<ambientLight intensity={1}/>

<Float speed={2} rotationIntensity={2}>

<mesh>

<torusKnotGeometry args={[1,0.3,100,16]}/>
<meshStandardMaterial color="purple"/>

</mesh>

</Float>

<OrbitControls enableZoom={false}/>

</Canvas>

)

}