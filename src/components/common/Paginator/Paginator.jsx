import { useState } from "react";
import s from "./Paginator.module.css";

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 7 }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.pagination}>
      {portionNumber > 1 &&
        <a className={s.movePaginator} onClick={() => { setPortionNumber(portionNumber - 1) }}>←</a>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return (
            <p onClick={(e) => { onPageChanged(p); }}
              className={`${s.page} ${currentPage === p && s.active}`} key={p}>
              {p}
            </p>
          );
        })}
      {portionCount > portionNumber &&
        <a className={s.movePaginator} onClick={() => { setPortionNumber(portionNumber + 1) }}>→</a>}
    </div>
  );
};

export default Paginator;
