// CRIO_SOLUTION_START_MODULE_CREATE_PROFILE
// CRIO_SOLUTION_END_MODULE_CREATE_PROFILE
import React from "react";
import { Layout } from "components/common";
import { Intro, Contact, Projects, Skills } from "components/landing";

export default () => (
  <Layout>
    <Intro />
    <Skills />
    
    <Projects />
    <Contact />
  </Layout>
);
