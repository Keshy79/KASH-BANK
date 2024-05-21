import React, { useEffect, useState } from "react";
import Footer from "../Conponement/Footer";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Account() {
  const [userData, setUserData] = useState({});
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const url = "http://localhost:5000/client/dashboard";
    const token = localStorage.getItem("token");

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        if (res.data.status) {
          setUserData(res.data.user);
        } else {
          localStorage.removeItem("token");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  const upload = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      setFile(reader.result);
      setImage(reader.result);
    };
  };

  const uploadPicture = () => {
    if (!userData.emailLink || !userData.emailLink.email) {
      console.error("User email is not available");
      return;
    }

    const endpoint = "http://localhost:5000/client/upload";
    axios
      .post(endpoint, { file, email: userData.emailLink.email })
      .then((res) => {
        setImage(res.data.result.url);
      })
      .catch((err) => {
        console.error("File upload failed:", err);
      });
  };

  const performClick = (e) => {
    e.preventDefault();
    document.getElementById("file").click();
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>Welcome to the account section</h1>
            <p>
              Here you can upload and change your profile picture, reset your
              password, and view your account details.
            </p>
          </div>
          <div className="col-12">
            <h3>Upload your profile picture</h3>
            <div className="picture">
              {image ? (
                <img src={image} className="image" alt="Profile" />
              ) : (
                <div className="image-placeholder">No image selected</div>
              )}
              <div>
                <input
                  type="file"
                  id="file"
                  className="pix"
                  onChange={upload}
                  style={{ display: "none" }}
                />
                <label
                  htmlFor="file"
                  onClick={performClick}
                  className="iconNw"
                  style={{ cursor: "pointer" }}
                >
                  <HiOutlinePencilSquare />
                </label>
                <button
                  onClick={uploadPicture}
                  className="upload button"
                  style={{ marginTop: "10px" }}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;
