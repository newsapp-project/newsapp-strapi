import "./NewsList.css";
import NewsCard from "./../../components/NewsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import AddNewsDialog from "../../components/AddNewsDialog";

export default function NewsList() {
  const [newsList, setNewsList] = useState([]);
  const [locale, setLocale] = useState("en");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      const data = await axios.get(
        "http://localhost:1337/newsapis?_locale=" + locale
      );
      setNewsList([...data?.data]);
    }
    fetchNews();
  }, [locale]);

  function setLang() {
    setLocale(window.locales.value);
  }

  function showAddNewsDialog() {
    setShowModal(!showModal);
  }

  return (
    <div className="newslist">
      <div className="newslistbreadcrumb">
        <div className="newslisttitle">
          <h3>World News</h3>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "4px" }}>
            <button onClick={showAddNewsDialog}>Add News</button>
          </div>
          <div>
            <select name="locales" id="locales" onChange={setLang}>
              <option value="en">English</option>
              <option value="fr-FR">French</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        {newsList
          ?.sort((a, b) => b.created_at.localeCompare(a.created_at))
          ?.map((newsItem, i) => (
            <NewsCard newsItem={newsItem} key={i} />
          ))}
      </div>
      {showModal ? <AddNewsDialog closeModal={showAddNewsDialog} /> : null}
    </div>
  );
}
