import { serverSideFunction } from "@/src/utils/server-utils"
import { ImageSlider } from "@/src/components/image-slider";


export default function Server() {
    console.log('Server route render')
    const result = serverSideFunction();
    return (
    <>
    <h1>Server Route Page</h1>
    <p>{result}</p>
   <ImageSlider />
    </>
    );
}
