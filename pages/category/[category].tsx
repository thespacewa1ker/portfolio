import { fetchArticles, fetchCategories } from "@/apis";
import ArticleList from "@/components/ArticleList";
import Tabs from "@/components/Tabs";
import { IArticle, ICategory, ICollectionResponse, IPagination } from "@/types";
import { capitaliseFirstLetter, formatSlug } from "@/utils";
import { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import qs from "qs";
import React from "react";

interface IPropType {
  categories: {
    items: ICategory[];
    pagination: IPagination;
  };
  articles: {
    items: IArticle[];
    pagination: IPagination;
  };
  slug: string;
}

const category = ({ categories, articles,slug }: IPropType) => {
  const formattedCategory = () => {
    return capitaliseFirstLetter(formatSlug(slug));
  };

  return (
    <div>
      <Head>
        <title>{formattedCategory()}</title>
        <meta name="finance" content="How to get into Finance " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs categories={categories.items} />
      <ArticleList articles={articles.items} />

      <style jsx>{`
        div {
          margin-top: 6rem;
          margin-left: 6rem;
          margin-right: 6rem;
        }

        @media (max-width: 767px) {
          div {
            margin-top: 4rem;
          }
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log("Query", query.category);
  const options = {
    populate: ["author.avatar"],
    sort: ["id:desc"],
    filters: {
      category: {
        Slug: query.category,
      },
    },
    pagination: {
      page: query.page ? query.page : 1,
      pageSize: 1,
  },
  };

 

  const queryString = qs.stringify(options);

  const { data: articleItems }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(queryString);

  console.log(queryString);
  const {
    data: categoryItems,
  }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();

  // console.log("categorypage",categoryItems);
  console.log("articlepage", articleItems);
  return {
    props: {
      categories: {
        items: categoryItems.data,
        pagination: categoryItems.meta.pagination,
      },

      articles: {
        items: articleItems.data,
        pagination: articleItems.meta.pagination,
      },
      slug: query.category,
    },
  };
};

export default category;
