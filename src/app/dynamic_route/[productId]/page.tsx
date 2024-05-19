import { Metadata } from "next";
import Link from "next/link";

export const generateMetadata = async ({ params }: Props): Promise <Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`);
        }, 100);
    });

    return {
        title: `Product ${params.productId}`
    }
}

type Props = {
    params: {
        productId: string;
    };
}

export default function ProductDetails({ params }: Props) {
    return <h1> Details about product {params.productId}</h1>;
}

// export default function ProductList ({ params }:
//     { params: { productId: string };
// }) {
//     return (
//             <h1>Details about product {params.productId}</h1>
//     )
// }
