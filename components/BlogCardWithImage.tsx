import { IArticle } from "@/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface IPropType {
  article: IArticle;
}

const BlogCardWithImage = ({ article }: IPropType) => {
  const thumbnailUrl =
    article?.attributes?.Image?.data[0].attributes?.formats?.thumbnail?.url;
  // console.log("Article", article);
  // console.log("thumbnailUrl", thumbnailUrl);

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md flex items-center h-52 justify-between ">
      <Link href={`/article/${article.attributes.Slug}`}>
        <div className="flex flex-col justify-center flex-1 p-6">
          <span className="text-xl text-white font-semibold">
            {article.attributes.Title}
            
          </span>
        </div>
      </Link>
      <div className="w-1/3 h-48 flex justify-center items-center">
        {/* <Image src={`http://127.0.0.1:1337${thumbnailUrl}`} className="rounded-lg" width={150} height={150} alt="" /> */}
        <Image
          src="/PngItem_3473436.png"
          className="mr-10"
          width={180}
          height={150}
          alt=""
        ></Image>
      </div>
    </div>
  );
};

export default BlogCardWithImage;
