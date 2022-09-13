import axios from "axios";
import CallAPI from ".";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const fetcher = (url) => fetch(url).then((res) => res.json());

export function GetHome() {
  const { data, error } = useSWR(
    `${ROOT_API}/api/home?populate=heroPicture`,
    fetcher
  );
  if (error) return error;
  if (!data) return null;
  return data.data;
}

export function GetNavbar() {
  const { data, error } = useSWR(`${ROOT_API}/api/navbars?sort=id`, fetcher);
  if (error) return error;
  if (!data) return null;
  return data.data;
}

export function GetSocialMedias() {
  const url = `${ROOT_API}/api/social-medias?populate=*`;
  const { data, error } = useSWR(url, fetcher);
  if (error) return error;
  if (!data) return null;
  return data.data;
}

export const GetProjects = (pageSize, loadmore) => {
  // const { data, error } = useSWR(url, fetcher);
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) =>
      `${ROOT_API}/api/projects?sort=year_project%3Adesc&populate=picture&pagination%5BpageSize%5D=${pageSize}&pagination%5Bpage%5D=${
        index + 1
      }`,
    fetcher
  );

  const issues = data ? [].concat(...data) : [];
  return issues;
};
