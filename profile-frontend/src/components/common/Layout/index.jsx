import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Footer } from "components/theme";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { name } from "data/config";
import { Global } from "./styles";

import "./fonts.css";

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <>
      <GatsbySeo
        title={`${name} | Portfolio`}
        description='A personal portfolio website of Priya Bansal'
        canonical={url}
        openGraph={{
          type: "website",
          title: `${name} | Portfolio`,
          site_name: `${name} | Portfolio`,
          locale: "en_IN",
          url,
          description: "A personal portfolio website of Priya Bansal",
          images: [
            {
              url:
                "https://crio-assets.s3.ap-south-1.amazonaws.com/Thumbnail.png",
              width: 829,
              height: 829,
              alt: "Pic",
            },
          ],
        }}
        twitter={{
          handle: "@priyaabnsal",
          site: "@priyaabnsal",
          cardType: "summary_large_image",
        }}
      />
      <Global theme={theme} />
      {children}
      <Footer />
    </>
  );
};
