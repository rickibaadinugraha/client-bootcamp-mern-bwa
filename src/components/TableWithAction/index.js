import { Table } from "react-bootstrap";
import Thead from "../Thead";
import Tbody from "../TbodyWithAction";
import Pagination from "../Pagination";

function TableWithAction({
  thead,
  status,
  data,
  tbody,
  editUrl,
  deleteAction,
  actionNotDisplay,
  customAction,
  withoutPagination,
  pages,
  handlePageClick,
}) {
  return (
    <>
      <Table striped bordered hover>
        <Thead text={thead} />
        <Tbody
          status={status}
          data={data}
          display={tbody}
          editUrl={editUrl}
          deleteAction={deleteAction}
          actionNotDisplay={actionNotDisplay}
          customAction={customAction}
        />
      </Table>
      {!withoutPagination && data.length ? (
        <Pagination pages={pages} handlePageClick={handlePageClick} />
      ) : (
        ""
      )}
    </>
  );
}

export default TableWithAction;
