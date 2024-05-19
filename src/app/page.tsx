import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome home!</h1>
          <Link href= '/about'>About</Link>
          <Link href= '/dynamic_route'>Products</Link>
          <Link href= '/render/dashboard'>Dashboard</Link>
    </div>
  );
}


// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <section className='py-24'>
//       <div className= 'container'>
//         <h1 className='text-3x1 font-bold'>Hi from App</h1>
//         <Link href= '/about'>About</Link>
//         <Link href= '/dynamic_route'>Products</Link>
//         <div>
//       <button className="bg-indigo-500 ...">
//           button
//       </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function Home2() {
//   return <h1> Welcome Home</h1>
// }
