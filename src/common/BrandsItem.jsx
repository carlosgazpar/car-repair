const BrandsItem = ({ img, alt }) => {
  return (
    <a className="brands-item" href="">
      <img src={img} alt={alt} title={alt} />
      <div className="brands-item-overlay"></div>
    </a>
  );
};

export default BrandsItem;
