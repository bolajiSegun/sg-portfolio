import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../App.css";
import MainBlog from "../Components/MainBlog";

export default function Blog() {
  return (
    <>
      <MainBlog />
    </>
  );
}
