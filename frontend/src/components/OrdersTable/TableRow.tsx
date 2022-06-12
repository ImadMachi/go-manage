import { faCcMastercard, faCcPaypal, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Order } from "../../models/orderModel";
import TableDropdown from "./TableDropdown";
import * as S from "./TableRow.styled";

interface TableProps {
  item: Order;
  width: number;
  editOrderHandler: (order: Order) => void;
  viewOrderDetailsHandler: (order: Order) => void;
}
const TableRow = ({ item, width, editOrderHandler, viewOrderDetailsHandler }: TableProps) => {
  const total = item.orderLines.reduce((acc, curr) => acc + curr.qty * curr.product.price, 0);
  const cols: Array<[string, string | number | boolean]> = [
    ["id", item.id],
    ["Customer", item.customer.name],
    ["Creation date", item.creationDate],
    ["Total", `$${total}`],
    ["Payment Method", item.paymentMethod],
    ["Payment Status", item.paymentStatus],
    ["Delivery Status", item.deliveryStatus],
  ];
  const [displayedCols, setDisplayedCols] = useState<Array<[string, string | number | boolean]>>([]);
  const [hiddenCols, setHiddenCols] = useState<Array<[string, string | number | boolean]>>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    if (width < 360) {
      setDisplayedCols(cols.slice(0, 2));
      setHiddenCols(cols.slice(2));
    } else if (width < 560) {
      setDisplayedCols(cols.slice(0, 3));
      setHiddenCols(cols.slice(3));
    } else if (width < 760) {
      setDisplayedCols(cols.slice(0, 4));
      setHiddenCols(cols.slice(4));
    } else if (width < 960) {
      setDisplayedCols(cols.slice(0, 5));
      setHiddenCols(cols.slice(5));
    } else if (width < 1160) {
      setDisplayedCols(cols.slice(0, 6));
      setHiddenCols(cols.slice(6));
    } else if (width < 1360) {
      setDisplayedCols(cols.slice(0, 7));
      setHiddenCols(cols.slice(7));
    } else {
      setDisplayedCols(cols.slice(0, 8));
      setHiddenCols(cols.slice(8));
    }
  }, [width]);

  const paymentStatus = (value: any) => {
    switch (value) {
      case "pending":
        return <S.Gray>{value}</S.Gray>;
      case "refunded":
        return <S.Orange>{value}</S.Orange>;
      case "approved":
        return <S.Green>{value}</S.Green>;
      default:
        return value;
    }
  };

  const deliveryStatus = (value: any) => {
    switch (value) {
      case "pending":
        return <S.Gray>{value}</S.Gray>;
      case "cancelled":
        return <S.Orange>{value}</S.Orange>;
      case "delivered":
        return <S.Green>{value}</S.Green>;
      case "inProgress":
        return <S.Blue>{value}</S.Blue>;
      case "returns":
        return <S.Purple>{value}</S.Purple>;
      case "pickups":
        return <S.OffBlue>{value}</S.OffBlue>;
      default:
        return value;
    }
  };

  const paymentMethod = (value: any) => {
    switch (value) {
      case "visa":
        return (
          <>
            <FontAwesomeIcon icon={faCcVisa} /> {value}
          </>
        );
      case "mastercard":
        return (
          <>
            <FontAwesomeIcon icon={faCcMastercard} /> {value}
          </>
        );
      case "paypal":
        return (
          <>
            <FontAwesomeIcon icon={faCcPaypal} /> {value}
          </>
        );
      default:
        return value;
    }
  };

  return (
    <S.Container>
      <S.Row colsLength={displayedCols.length}>
        <S.Col>
          <S.Icon isDropdownOpen={isDropdownOpen} onClick={dropdownHandler}>
            <FontAwesomeIcon icon={faAngleRight} />
          </S.Icon>
        </S.Col>
        {displayedCols.slice(1).map(([key, value], i) => (
          <>
            <S.Col key={i}>
              {key === "Payment Status"
                ? paymentStatus(value)
                : key === "Payment Method"
                ? paymentMethod(value)
                : key === "Delivery Status"
                ? deliveryStatus(value)
                : value}
            </S.Col>
          </>
        ))}
      </S.Row>
      <TableDropdown
        isOpen={isDropdownOpen}
        hiddenCols={hiddenCols}
        item={item}
        editOrderHandler={editOrderHandler}
        viewOrderDetailsHandler={viewOrderDetailsHandler}
      />
    </S.Container>
  );
};

export default TableRow;
