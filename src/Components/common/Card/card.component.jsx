export const Card = ({
  classCard,
  imageUrl,
  cardBody,
  classImage,
  classTitle,
  classRole,
  title,
  description,
  role,
  showStruc,
  showImage,
  children,
  classMainImg,
  classDescription,
  onClick,
  clickId,
  clickH3,
}) => {
  return (
    <div className={classCard} onClick={onClick}>
      {showImage && (
        <div className={classMainImg} onClick={clickId}>
          <img src={imageUrl} className={classImage} alt="..." />
        </div>
      )}
      {showStruc && (
        <div className={cardBody}>
          <h2 className={classTitle}>
            {title}
          </h2>
          <h3 className={classRole} onClick={clickH3}>{role}</h3>
          <p className={classDescription}>{description}</p>
        </div>
      )}
      {children}
    </div>
  );
};
