import { Card, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import moment from "moment";
import useStyles from "./Styles";
const Post = ({ post }) => {
  const classes = useStyles();
  console.log(post);
  
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={postMessage.selectedFile}
        file={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.creatAt).fromNow()}</Typography>
      </div>
    </Card>
  );
};

export default Post;
