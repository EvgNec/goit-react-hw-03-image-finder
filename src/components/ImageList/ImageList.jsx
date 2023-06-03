import React from "react";
import { getImage } from "../../api";



const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default class ImageList extends React.Component { 
  state = {
    hits: [],
    status: STATUS.IDLE,
    error: null,
  };

    fetchImage = async () => {
         const { hits } = this.state;
        await this.setState({ status: STATUS.PENDING });
        
    try {
      const data = await getImage();

      if (!data.image.length) {
        throw new Error("No matches found");
      }

      this.setState({
        hits: [...hits, ...data.hits],
        status: STATUS.RESOLVED,
        error: null,
      });
    } catch (error) {
      this.setState({ error: error.message, status: STATUS.REJECTED });
    }
  };







    render() {
            return (
      <div>
        <img src="https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_150.jpg" alt="spring bird, bird, tit" />
      </div>
    );
     }



}