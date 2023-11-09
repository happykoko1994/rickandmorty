import { useState } from "react";

export const Collapse = ({ className, title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={className} onClick={() => setOpen(open ? false : true)}>

        <h3 className="title">{title}</h3>
      </div>
      {open && content}

    </div>
  );
};
