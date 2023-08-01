import { IArticle } from "@/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { formatDate } from "@/utils";

interface IPropType {
  article: IArticle;
}

const Blogcard = ({ article }: IPropType) => {
  console.log("Blogcard article", article);
  return (
    <div>
      <Link href={`/article/${article.attributes.Slug}`}>
        <h2 className="text-xl text-cyan-700 font-medium hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-pink-500">
          {article.attributes.Title}
        </h2>
      </Link>
      <div className="flex items-center my-4">
        <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
          <Image
            src={`${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
            width={40}
            height={40}
            alt=""
          />
        </div>
        <span className="text-sm font-medium text-gray-600">
          {article.attributes.author.data.attributes.firstname}{" "}
          {article.attributes.author.data.attributes.lastname} on &nbsp;
          <span className="text-gray-600">
            {formatDate(article.attributes.createdAt)}
          </span>
        </span>
      </div>
      <div className="text-gray-500">
        {article.attributes.shortDescription.slice(0, 250)}{" "}
        {article.attributes.shortDescription.length > 250 ? "..." : ""}
      </div>
    </div>
  );
};

export default Blogcard;
