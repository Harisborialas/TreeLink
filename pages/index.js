import Head from "next/head";
import Image from "next/image";
import data from "../data.json";
export function LinkCard({ href, title, image }) {
  return (
    <a
      href={href}
      className="card flex items-center p-3 mb-4 rounded-md  hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col">
        <div className="text-lg font-semibold flex flex-row">
          <img src={image} alt="" width={40} height={40} className="mx-3" />{" "}
          <h1 className="title">{title}</h1>
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Link Tree App</title>
      </Head>
      <div className=" flex flex-col items-center pt-10 justify-center">
        <div className="maindiv">
          <Image
            className="rounded-full"
            alt={data.name}
            src={data.avatar}
            width={100}
            height={100}
          />
          <h1 className="name mb-2">{data.name}</h1>
          <p className="bio mb-5">{data.bio}</p>

          {/* {data.Links.map((linkdata) => (
          <LinkCard image={""} key={linkdata.href} {...linkdata} />
        ))} */}
          {data.socials.map((linkdata) => (
            <LinkCard image={""} key={linkdata.href} {...linkdata} />
          ))}
        </div>
      </div>
    </>
  );
}
