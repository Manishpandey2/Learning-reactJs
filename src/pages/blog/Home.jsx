import React from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/Card";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center gap-4 mt-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
};

export default Home;
