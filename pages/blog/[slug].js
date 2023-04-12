import { dummyData } from 'dummyDB'
import Head from 'next/head'

// interface PostBlog {
//   slug: Key | null | undefined
//   title: string
//   content: string
// }
// interface Params {
//   slug: string
// }

export const getStaticPaths = async () => {
  return {
    paths: dummyData.map((data) => ({
      params: {
        slug: data.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      postBlog: dummyData.find((data) => data.slug === params.slug),
    },
  }
}

const blogPostPage = ({ postBlog }) => {
  return (
    <div>
      <Head>
        <title>{postBlog.title}</title>
      </Head>

      <div className="max-w-2xl mx-auto pt-16">
        <h1 className="mt-6 text-3xl font-bold">Blog Posts</h1>
        <div
          key={postBlog.slug}
          className="mt-6 border rounded-md border-white p-5 hover:bg-white hover:text-black hover:cursor-pointer"
        >
          <h2 className="text-xl font-semi-bold">{postBlog.title}</h2>
          <p className="mt-2 text-slate-500">{postBlog.content}</p>
        </div>
      </div>
    </div>
  )
}
export default blogPostPage
