import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();
  let sum = parseInt(router.query.a) + parseInt(router.query.b);
  return (
 <div>
   <h1>
    {router.query.name? `hello ${router.query.name}` : "I dont know your name"}
  </h1>
 </div>)
}