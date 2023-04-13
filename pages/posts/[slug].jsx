import PostContent from "@/components/posts/postDetail/PostContent";
import Head from "next/head";
import { Fragment } from "react";
import { getPostData, getPostsFiles } from "./../../lib/posts-util";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excert} />
      </Head>
      <PostContent post={props.post} />;
    </Fragment>
  );
}

export function getStaticProps(context) {
  const slug = context.params.slug;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}
export function getStaticPaths() {
  const postsFileNames = getPostsFiles();
  const slugs = postsFileNames.map((filename) => {
    return filename.replace(/\.md$/, "");
  });

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
export default PostDetailPage;
