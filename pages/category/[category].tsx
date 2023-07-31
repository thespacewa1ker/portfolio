import { fetchArticles, fetchCategories } from "@/apis";
import ArticleList from "@/components/ArticleList";
import Pagination from "@/components/Pagination";
import Tabs from "@/components/Tabs";
import { IArticle, ICategory, ICollectionResponse, IPagination, IQueryOptions } from "@/types";
import { capitaliseFirstLetter, formatSlug } from "@/utils";
import { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
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

const Category = ({ categories, articles,slug }: IPropType) => {

  const { page, pageCount } = articles.pagination;
  const router = useRouter();

  const {category: categorySlug} = router.query;

  const handleSearch = (query: string) => {
    router.push(`/category/${categorySlug}/?search=${query}`);
  };

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
      <Tabs categories={categories.items} handleOnSearch={handleSearch} />
      <ArticleList articles={articles.items} />
      <Pagination page={page} pageCount={pageCount} redirectUrl={`/category/${categorySlug}`}/>

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

  const options: Partial<IQueryOptions> = {
    populate: ["author.avatar"],
    sort: ["id:desc"],
    filters: {
      category: {
        Slug: query.category,
      },
    },
    pagination: {
      page: query.page ? +query.page : 1,
      pageSize: 4,
  },
  };

  if (query.search){
    options.filters = {
      Title:{
        $containsi:query.search,
      }
    }
  }


  const queryString = qs.stringify(options);

  const { data: articleItems }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(queryString);

  const {
    data: categoryItems,
  }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();

  // console.log("categorypage",categoryItems);
 
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

export default Category;
