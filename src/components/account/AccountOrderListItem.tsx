import Link from "next/link";
import React from "react";
import { dateFormat } from "utils/dates";
import { formatPrice } from "utils/price";

export const AccountOrderListItem = ({ order }) => {
  const { createdAt, id, slug, total } = order;

  return (
    <Link href={`/order/${slug}/completed`} className="text-dark">
      <div className="row bg-light bg-gradient m-3 p-2">
        <div className="col-4 ">
          <div>
            <p className="fw-bold">Date placed</p>
            <p>{dateFormat(new Date(createdAt))}</p>
          </div>
        </div>
        <div className="col-4 ">
          <div>
            <p className="fw-bold">Order number</p>
            <p>#{id}</p>
          </div>
        </div>
        <div className="col-4 ">
          <div>
            <p className="fw-bold">Total amount</p>
            <p>{formatPrice(total)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
