import axios from "axios";
import CallAPI from ".";
import useSWR from "swr";

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

export function GetProjects(pageSize, sort) {
  const url = `${ROOT_API}/api/projects?sort=year_project%3A${sort}&pagination%5BpageSize%5D=${pageSize}&populate=picture`;
  const { data, error } = useSWR(url, fetcher);
  if (error) return error;
  if (!data) return null;
  return data.data;
}
