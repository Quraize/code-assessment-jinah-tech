import "./LogInStyles.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function LogInForm() {
  const [formData, setformData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/admin/authadmin", {
        method: "POST",
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
      navigate("/admin");
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
      <div className="adminlogin-main-sec">
        <div>
          <h1 className="adminlogin-self-heading" data-aos="fade-right">
            Coding Assessment
          </h1>
          <p className="adminlogin-self-para" data-aos="fade-left">
            Admin Authentication
          </p>
        </div>

        <form onSubmit={handleSubmit} className="form-self">
          <label className="email-label-self" data-aos="fade-right">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="signin-email-pacleholder"
            onChange={handleChange}
            data-aos="fade-left"
          />
          <label className="password-label-self" data-aos="fade-right">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
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
            {loading ? "Loading..." : "Sign In"}
          </Button>
        </form>
        <p className="adminlogin-error-handler">
          {error ? errorMessage || "Somthing went wrong" : ""}
        </p>
      </div>
    </div>
  );
}
