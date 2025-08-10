import { useEffect } from "react";

type Props = {
  title: string;
  description?: string;
  canonicalPath?: string;
};

export const SEO = ({ title, description, canonicalPath }: Props) => {
  useEffect(() => {
    document.title = title;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    if (canonicalPath) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      const url = new URL(canonicalPath, window.location.origin);
      link.setAttribute("href", url.toString());
    }
  }, [title, description, canonicalPath]);

  return null;
};
