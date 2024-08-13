import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.button}>
      <button type="button" onClick={onClick}>
        Load More
      </button>
    </div>
  );
}
