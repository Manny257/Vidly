const Love = ({ loved, onClick }) => {
  return (
    <i
      className={loved ? "fa fa-heart" : "fa fa-heart-o"}
      onClick={onClick}
    ></i>
  );
};

export default Love;
