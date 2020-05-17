import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";

import WidgetPaper from "common/WidgetPaperBase";

const Personal = () => {
  return (
    <WidgetPaper>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          aria-label=""
          style={{ marginRight: "10px" }}
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHM2VV7OA5Lng/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=9jgqlHAL8yh0ZFzwIk10tZ-uBBoI9eXyjD7QCYi9IDs"
        />
        <div>
          <Typography variant="h5" color="initial">
            Tyler Mitchell
          </Typography>
          {/* <Typography variant="subtitle2" color="initial">
            Software Engineer - Recent Graduate
          </Typography> */}
        </div>
      </div>
    </WidgetPaper>
  );
};

export default Personal;
