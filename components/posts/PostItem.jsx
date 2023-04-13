import Link from "next/link";
import Classes from "./postItem.module.css";
import Image from "next/image";

function PostItem(props) {
  const { title, image, excert, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={Classes.post}>
      <Link href={linkPath}>
        <div className={Classes.image}>
          <Image
            src={imagePath}
            width={300}
            height={200}
            alt={title}
            Layout="responsive"
          />
        </div>
        <div className={Classes.content}>
          <h3>{title}</h3>
          <time> {formattedDate}</time>
          <p> {excert}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
