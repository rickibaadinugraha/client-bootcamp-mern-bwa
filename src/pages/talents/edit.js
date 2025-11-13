import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getData, postData, putData } from "../../utils/fetch";
import { Container } from "react-bootstrap";
import SBreadcrumb from "../../components/Breadcrumb";
import SAlert from "../../components/Alert";
import { setNotif } from "../../redux/notif/actions";
import Form from "./form";

function TalentsEdit() {
  const { talentId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    role: "",
    file: "",
    avatar: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchOneCategories = async () => {
    try {
      // if (!talentId) {
      //   console.error("No talentId found in URL.");
      //   return;
      // }
      const res = await getData(`/cms/talents/${talentId}`);
      // console.log("res", res);

      setForm({
        ...form,
        name: res.data.data.name,
        role: res.data.data.role,
        avatar: res.data.data.image.name,
        file: res.data.data.image._id,
      });
    } catch (error) {
      console.error("failed to fetch data", error);
    }
  };

  useEffect(() => {
    fetchOneCategories();
  }, []);

  const uploadImage = async (file) => {
    let formData = new FormData();
    formData.append("avatar", file);
    const res = await postData("/cms/image", formData, true);
    return res;
  };

  const handleChange = async (e) => {
    if (e.target.name === "avatar") {
      if (
        e?.target?.files[0]?.type === "image/jpg" ||
        e?.target?.files[0]?.type === "image/png" ||
        e?.target?.files[0]?.type === "image/jpeg"
      ) {
        var size = parseFloat(e.target.files[0].size / 3145728).toFixed(2);

        if (size > 2) {
          setAlert({
            ...alert,
            status: true,
            type: "danger",
            message: "Please select image size less than 3 MB",
          });
          setForm({
            ...form,
            type: "",
            [e.target.name]: "",
          });
        } else {
          const res = await uploadImage(e.target.files[0]);

          setForm({
            ...form,
            file: res.data.data._id,
            [e.target.name]: res.data.data.name,
          });
        }
      } else {
        setAlert({
          ...alert,
          status: true,
          type: "danger",
          message: "type image png | jpg | jpeg",
        });
        setForm({
          ...form,
          file: "",
          [e.target.name]: "",
        });
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      image: form.file,
      role: form.role,
      name: form.name,
    };

    const res = await putData(`/cms/talents/${talentId}`, payload);
    if (res?.data?.data) {
      dispatch(
        setNotif(
          true,
          "success",
          `Succesfully change talents ${res.data.data.name}`
        )
      );
      navigate("/talents");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: res.response.data.msg,
      });
    }
  };

  return (
    <Container>
      <SBreadcrumb
        textSecond={"Talents"}
        urlSecond={"/talents"}
        textThird="Edit"
      />

      {alert.status && <SAlert type={alert.type} message={alert.message} />}
      <Form
        form={form}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        edit
      />
    </Container>
  );
}

export default TalentsEdit;
