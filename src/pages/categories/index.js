import { useEffect, useState } from "react";
import { accessCategories } from "../../const/access";
import { fetchCategories } from "../../redux/categories/actions";
import { Container } from "react-bootstrap";
import SBreadcrumb from "../../components/Breadcrumb";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Table from "../../components/TableWithAction";
import SAlert from "../../components/Alert";
import Swal from "sweetalert2";
import { deleteData } from "../../utils/fetch";
import { setNotif } from "../../redux/notif/actions";

function Categories() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notif = useSelector((state) => state.notif);
  const categories = useSelector((state) => state.categories);
  const [access, setAccess] = useState({
    add: false,
    edit: false,
    delete: false,
  });

  const checkAccess = () => {
    let { role } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};

    const access = { add: false, edit: false, delete: false };
    Object.keys(accessCategories).forEach(function (key, index) {
      if (accessCategories[key].indexOf(role) >= 0) {
        access[key] = true;
      }
    });
    setAccess(access);
  };

  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log("id", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You can't return this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`/cms/categories/${id}`);
        dispatch(
          setNotif(
            true,
            "success",
            `Successfully delete category ${res.data.data.name}`
          )
        );
        dispatch(fetchCategories());
      }
    });
  };

  return (
    <Container className="mt-3">
      <SBreadcrumb textSecond={"Categories"} />

      {access.add && (
        <Button
          className={"mb-3"}
          action={() => navigate("/categories/create")}
        >
          Add
        </Button>
      )}

      {notif.status && (
        <SAlert type={notif.typeNotif} message={notif.message} />
      )}

      <Table
        status={categories.status}
        thead={["name", "Action"]}
        data={categories.data}
        tbody={["name"]}
        editUrl={access.edit ? `/categories/edit` : null}
        deleteAction={access.delete ? (id) => handleDelete(id) : null}
        withoutPagination
      />
    </Container>
  );
}

export default Categories;
