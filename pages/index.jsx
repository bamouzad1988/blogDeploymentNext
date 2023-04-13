import FeaturedPosts from "@/components/home-page/FeaturedPost";
import Hero from "@/components/home-page/Hero";
import { getFeaturedPosts } from "@/lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Bijan Amouzad Blog</title>
        <meta name="description" content="I post programming new features" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
