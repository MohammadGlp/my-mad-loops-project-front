import React from "react";

export const FieldName = ({
  field,
  text,
  title,
  showH3,
  showH2,
  showP,
  classH2Field,
  classPfield,
  classH3Field,
}) => (
  <React.Fragment>
    {showH2 && <h2 className={classH2Field}>{title}</h2>}
    {showP && <p className={classPfield}>{field}</p>}
    {showH3 && <h3 className={classH3Field}>{text}</h3>}
  </React.Fragment>
);
