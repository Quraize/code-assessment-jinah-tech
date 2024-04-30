import AppNavbar from "../../navbar/AppNavbar";
import "../../../components/AuthComps/LogInStyles.css";
import Button from "react-bootstrap/Button";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function DeleteCat() {
  const [formData, setformData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/catagory/delrecord", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(true);
        setErrorMessage(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1300,
      easing: "ease-in-out-back",
    });
  }, []);
  return (
    <div>
        <AppNavbar/>
        <div>
      <div className="adminlogin-main-sec">
        <div>
          <h1 className="adminlogin-self-heading" data-aos="fade-right">
            Delete Subcatagory
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="form-self">
          <label className="email-label-self" data-aos="fade-right">
            Subcatagory
          </label>
          <input
            type="text"
            placeholder="Enter Unique Subcatagory"
            id="name"
            className="signin-email-pacleholder"
            onChange={handleChange}
            data-aos="fade-left"
          />
          <label className="password-label-self" data-aos="fade-right">
            Catagory
          </label>
          <input
            type="text"
            placeholder="Catagory"
            id="catagory"
            className="signin-password-placeholder"
            onChange={handleChange}
            data-aos="fade-left"
          />
          <Button
            variant="secondary"
            disabled={loading}
            className="button-self"
            type="submit"
            data-aos="fade-up"
          >
            {loading ? "Loading..." : "Delete"}
          </Button>
        </form>
        <p className="adminlogin-error-handler">
          {error ? errorMessage || "Somthing went wrong" : ""}
        </p>
      </div>
    </div>
    </div>
  )
}
