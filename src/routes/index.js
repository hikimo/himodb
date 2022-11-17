import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Layout } from "../components";
import { Home, Mylist, Profile, NoMatch, Detail } from "../views";

export function AppRouter() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mylist" element={<Mylist />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="profile" element={<Profile />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}
